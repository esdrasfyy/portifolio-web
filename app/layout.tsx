import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header/header";
import { Cursor } from "./utils/cursor/cursor";
import { ProviderPreferences } from "./contexts/ContextPreferences";
import { TransitionPage } from "./components/transition-page/transition-page";
import { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Esdras Developer",
  description: "Olá, meu nome é Fernando Esdras da Silva, tenho 18 anos e sou programador fullstack. Apaixonado por tecnologia, desenvolvo soluções completas e inovadoras, desde o backend até o frontend. Explore meu portfólio para conhecer meus projetos e habilidades.",
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#161616",
  icons: {
    icon: "/favicon1.ico",
  },
  openGraph: {
    locale: "pt-BR",
    title: "Esdras Developer",
    siteName: "Esdras Developer",
    type: "website",
    description: "Olá, meu nome é Fernando Esdras da Silva, tenho 18 anos e sou programador fullstack. Apaixonado por tecnologia, desenvolvo soluções completas e inovadoras, desde o backend até o frontend. Explore meu portfólio para conhecer meus projetos e habilidades.",
    url: "https://esdras.dev/",
    images: [
      {
        url: "/favicon1.ico",
      },
    ],
  },
  alternates: {
    canonical: "https://esdras.dev/",
  },
  keywords: ["Fernando Esdras da Silva", "Esdras", "Esdras Silva", "programador", "fullstack", "dev", "desenvolvedor", "São Paulo", "SP", "Brasil", "Brazil", "América", "React", "Next.js", "React.js", "Next.js", "HTML5", "CSS3", "landing page", "ecommerce", "site", "freela", "freelancer", "melhor", "melhores", "perto de mim", "Node", "Backend", "Frontend", "Next", "Nest", "SQL", "NoSQL", "MySql", "Javascript", "Typescript", "React Native", "Docker", "AWS", "Azure", "Cloud", "Api"],
  authors: [
    { name: "Fernando Esdras", url: "https://github.com/esdrasfyy" },
    { name: "João Silva", url: "https://github.com/joajo" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProviderPreferences>
      <html lang="pt-BR">
        <body className={`${inter.className} overflow-x-hidden bg-primary text-primary duration-300 transition-all ease-linear scroll-styled`}>
          <TransitionPage />
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
