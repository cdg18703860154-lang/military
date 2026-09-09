"use client";

import { contentReview } from "@/data/current-content";
import { useState } from "react";

type Feedback = "worked" | "not-worked";

function track(event: string, parameters: Record<string, string | boolean>) {
  const browserWindow = window as Window & {
    gtag?: (command: "event", eventName: string, params: Record<string, string | boolean>) => void;
  };
  browserWindow.gtag?.("event", event, parameters);
}

export function CodeActions({ code, status }: { code: string; status: string }) {
  const [copyStatus, setCopyStatus] = useState("");
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
      setCopyStatus("Copied");
      track("copy_code", { code, status, page: "/codes/" });
    } catch {
      setCopyStatus("Copy failed — select the code above");
    }
  }

  function recordFeedback(value: Feedback) {
    setFeedback(value);
    track("code_feedback", { code, worked: value === "worked", source_check: contentReview.codeSourcesCheckedAt });
  }

  return (
    <div className="mt-4 flex flex-wrap items-center gap-2">
      <button type="button" onClick={copyCode} aria-label={`Copy ${code}`} className="button-primary button-small">
        Copy code
      </button>
      <button type="button" onClick={() => recordFeedback("worked")} className="button-secondary button-small" aria-label={`Report ${code} worked`} aria-pressed={feedback === "worked"}>
        Worked for me
      </button>
      <button type="button" onClick={() => recordFeedback("not-worked")} className="button-secondary button-small" aria-label={`Report ${code} did not work`} aria-pressed={feedback === "not-worked"}>
        Did not work
      </button>
      <span role="status" aria-live="polite" className="text-sm text-white/65">
        {[copyStatus, feedback ? "Feedback selected for this visit; status does not change automatically." : ""].filter(Boolean).join(" ")}
      </span>
    </div>
  );
}
