import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header/header";
import { Cursor } from "./utils/cursor/cursor";
import { ProviderPreferences } from "./contexts/ContextPreferences";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProviderPreferences>
      <html lang="en">
        <head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.5/css/swiper.min.css"
          />
        </head>
        <body
          className={`${inter.className} bg-primary text-primary duration-300 transition-all ease-linear scroll-styled`}
        >
          {children}
          <Header />
          <Cursor />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.5/js/swiper.min.js"></script>
        </body>
      </html>
    </ProviderPreferences>
  );
}
