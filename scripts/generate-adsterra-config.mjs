import assert from "node:assert/strict";
import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const domain = "military-armytycoon.wiki";

function httpsUrl(value) {
  assert.ok(value, "Missing URL in the bridge GET CODE");
  const url = new URL(value.startsWith("//") ? `https:${value}` : value);
  assert.equal(url.protocol, "https:");
  assert.equal(url.username + url.password, "");
  return url.toString();
}

export function configurationFromBridge(record) {
  assert.equal(record.job.spec.domain, domain);
  assert.equal(record.job.status, "completed");
  assert.equal(record.result.state, "codes_ready");
  assert.equal(record.result.site.domain, domain);
  const config = {};
  const placements = record.result.codes.data.ad_units.flatMap(unit => unit.placements);
  for (const placement of placements) {
    const code = placement.codes.find(variant => !variant.is_error && variant.code?.trim())?.code;
    if (!code) continue;
    const scriptUrl = code.match(/<script\b[^>]*\bsrc=["']([^"']+)["']/i)?.[1];
    const banner = placement.title.match(/^(160x300|160x600|300x250|320x50|468x60|728x90)_1$/);
    if (banner) {
      const [width, height] = banner[1].split("x").map(Number);
      assert.equal(Number(code.match(/["']width["']\s*:\s*(\d+)/)?.[1]), width);
      assert.equal(Number(code.match(/["']height["']\s*:\s*(\d+)/)?.[1]), height);
      const key = code.match(/["']key["']\s*:\s*["']([^"']+)["']/)?.[1];
      assert.ok(key, "Missing banner key in GET CODE");
      const prefix = `adsterraBanner${banner[1]}`;
      config[`${prefix}Key`] = key;
      config[`${prefix}ScriptUrl`] = httpsUrl(scriptUrl);
      if (banner[1] === "320x50") {
        // One approved unit, mutually exclusive phone-bottom / tablet-inline positions.
        config.adsterraBottomMobileKey = key;
        config.adsterraBottomMobileScriptUrl = httpsUrl(scriptUrl);
      }
    } else if (placement.title === "NativeBanner_1") {
      const id = code.match(/\bid=["'](container-[\w-]+)["']/)?.[1];
      assert.ok(id, "Missing native container in GET CODE");
      config.adsterraNative1Id = id;
      config.adsterraNative1ScriptUrl = httpsUrl(scriptUrl);
    } else if (placement.title === "Popunder_1") {
      config.adsterraPopunderScriptUrl = httpsUrl(scriptUrl);
    } else if (placement.title === "SocialBar_1") {
      config.adsterraSocialBarScriptUrl = httpsUrl(scriptUrl);
    } else if (placement.title === "Smartlink_1") {
      config.adsterraSmartLinkUrl = httpsUrl(code.trim());
    }
  }
  for (const size of ["728x90", "320x50", "300x250", "160x600", "160x300", "468x60"]) {
    assert.ok(config[`adsterraBanner${size}Key`] && config[`adsterraBanner${size}ScriptUrl`], `Bridge inventory is missing ${size}`);
  }
  assert.ok(config.adsterraNative1Id && config.adsterraNative1ScriptUrl, "Bridge inventory is missing NativeBanner_1");
  assert.ok(config.adsterraPopunderScriptUrl && config.adsterraSocialBarScriptUrl && config.adsterraSmartLinkUrl, "Bridge inventory is missing a global format or Smartlink");
  return { ...config, adsterraEnableBottomSticky: true, adsterraEnableStickyRail: true, adsterraEnableSocialBar: true, adsterraEnablePopunder: true, adsterraPopunderDelayMs: 30000, adsterraPopunderMinPageViews: 2 };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  assert.ok(process.argv[2], "Pass the completed bridge result JSON file");
  const record = JSON.parse(await readFile(process.argv[2], "utf8"));
  const config = configurationFromBridge(record);
  const destination = fileURLToPath(new URL("../src/lib/adsterra.generated.ts", import.meta.url));
  await writeFile(destination, `// Generated from the verified Adsterra bridge GET CODE for ${domain}.\n// Public browser configuration. Regenerate with scripts/generate-adsterra-config.mjs; do not edit.\nexport const adsterraStaticConfig = ${JSON.stringify(config, null, 2)} as const;\n`);
  console.log(`Generated ${Object.keys(config).length} public configuration fields for ${domain}`);
}
