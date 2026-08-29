import type { ReactNode } from "react";

// Renders `backtick`-wrapped spans as inline <code>; everything else stays text.
export function withCode(text: string): ReactNode[] {
  return text.split(/(`[^`]+`)/g).map((part, i) =>
    part.startsWith("`") && part.endsWith("`") ? (
      <code key={i} className="code">
        {part.slice(1, -1)}
      </code>
    ) : (
      part
    ),
  );
}
