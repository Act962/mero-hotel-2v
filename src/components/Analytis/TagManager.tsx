"use client";

import { useCookieConsent } from "@/hook/useCookieConsent";
import { GoogleTagManager } from "@next/third-parties/google";

type TagManagerId = {
  gtmId: string;
};

export function TagManager({ gtmId }: TagManagerId) {
  const { hasAccepted } = useCookieConsent();

  if (!hasAccepted) {
    return null;
  }

  return (
    <>
      <GoogleTagManager gtmId={gtmId} />
    </>
  );
}
