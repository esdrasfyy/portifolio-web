import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header/header";
import { Cursor } from "./utils/cursor/cursor";
import { ProviderPreferences } from "./contexts/ContextPreferences";
import { TransitionPage } from "./components/transition-page/transition-page";
import favicon from "../public/favicon1.ico";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProviderPreferences>
      <html lang="pt">
        <head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.5/css/swiper.min.css"
          />
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta property="og:locale" content="pt-BR" />
          <meta name="theme-color" content="#161616" />
          <link rel="icon" href={`${favicon}`} />
          <title>Esdras Dev</title>
          <meta property="og:title" content="Esdras Dev" />
          <meta property="og:site_name" content="Esdras Dev" />
          <meta property="og:type" content="website" />
          <meta name="revisit-after" content="7 days" />
          <meta name="author" content="Fernando Esdras da Silva"></meta>
          <meta
            name="description"
            content="Olá, meu nome é Fernando Esdras da Silva, tenho 18 anos e sou programador fullstack. Apaixonado por tecnologia, desenvolvo soluções completas e inovadoras, desde o backend até o frontend. Explore meu portfólio para conhecer meus projetos e habilidades."
          />
          <meta
            property="og:description"
            content="Olá, meu nome é Fernando Esdras da Silva, tenho 18 anos e sou programador fullstack. Apaixonado por tecnologia, desenvolvo soluções completas e inovadoras, desde o backend até o frontend. Explore meu portfólio para conhecer meus projetos e habilidades."
          />
          <link rel="canonical" href="https://esdras.dev/" />
          <meta property="og:url" content="https://esdras.dev/" />
          <meta
            name="keywords"
            content="Fernando Esdras da Sivca, Esdras, Silva, programador, fullstack, dev, desenvolvedor, São Paulo, SP, Brasil, Brazil, América, React, Next, React.js, Next.js, HTML5, CSS3 landing page, ecommerce, site, freela, freelancer, melhor, melhores, perto de mim, Node, Backend, Frontend, Fullstack, Nest, SQL, NOSQL, MySql, Javascript, Typescript, React NAtive, Docker, AWS, Azure, Cloud, Api"
          />
          <meta property="og:image" content={`${favicon}`} />
        </head>
        <body
          className={`${inter.className} overflow-x-hidden bg-primary text-primary duration-300 transition-all ease-linear scroll-styled`}
        >
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
