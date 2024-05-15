"use client";

import { ProviderPreferences } from "../contexts/ContextPreferences";

export function Providers({
  children,
  initialTheme,
}: {
  children: React.ReactNode;
  initialTheme?: any;
}) {
  return (
    <ProviderPreferences initialTheme={initialTheme}>
      {children}
    </ProviderPreferences>
  );
}
