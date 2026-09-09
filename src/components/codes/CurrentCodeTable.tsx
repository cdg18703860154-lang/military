import { currentCodes } from "@/data/current-content";
import { CodeActions } from "@/components/codes/CodeActions";

export function CurrentCodeTable() {
  return <div className="mt-4 overflow-x-auto" role="region" aria-label="Current codes" tabIndex={0}>
    <table className="current-code-table"><thead><tr><th scope="col">Code and action</th><th scope="col">Reported reward and status</th></tr></thead>
      <tbody>{currentCodes.map((item) => <tr key={item.code}>
        <td><code>{item.code}</code><CodeActions code={item.code} status={item.status} /></td>
        <td>{item.reportedReward}<br />{item.status}<br /><small>Source check: {item.sourceCheckedAt}</small></td>
      </tr>)}</tbody>
    </table>
  </div>;
}
