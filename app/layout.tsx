import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header/header";
import { Cursor } from "./utils/cursor/cursor";
import { ProviderPreferences } from "./contexts/ContextPreferences";
import { Menu } from "./components/menu/menu";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProviderPreferences>
      <html lang="en">
        <body
          className={`${inter.className} bg-primary text-primary duration-300 transition-all ease-linear`}
        >
          {children}
          <Header />
          <Cursor />
        </body>
      </html>
    </ProviderPreferences>
  );
}
