import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header/header";
import { Cursor } from "./utils/cursor/cursor";
import { ProviderPreferences } from "./contexts/ContextPreferences";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProviderPreferences initialTheme={"dark"}>
      <html lang="en">
        <body className={`${inter.className} bg-primary text-primary duration-300 transition-all ease-linear`}>
          {children}
          <Header />
          <Cursor />
        </body>
      </html>
    </ProviderPreferences>
  );
}
