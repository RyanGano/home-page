import { useState } from "react";

// The address is kept split into parts so the literal string never appears
// contiguously in the rendered DOM or the JS bundle, and the `mailto:` href is
// only assembled on user interaction. This defeats naive email-harvesting
// scrapers while staying fully accessible and clickable for real visitors.
const USER = "ryan";
const DOMAIN = "ryangano.com";

type Props = {
  className?: string;
  /** Prefix shown before the address, e.g. an envelope icon. */
  label?: string;
};

export function ObfuscatedEmail({ className, label }: Props) {
  const [href, setHref] = useState<string | undefined>(undefined);

  function reveal() {
    if (!href) {
      setHref(`mailto:${USER}@${DOMAIN}`);
    }
  }

  return (
    <a
      className={className}
      href={href ?? "#"}
      onMouseEnter={reveal}
      onFocus={reveal}
      onClick={reveal}
      aria-label={`Email ${USER} at ${DOMAIN}`}
    >
      {label}
      <span>{USER}</span>
      <span aria-hidden="true">&#8203;</span>
      <span>&#64;</span>
      <span aria-hidden="true">&#8203;</span>
      <span>{DOMAIN}</span>
    </a>
  );
}
