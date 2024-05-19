import { useState } from "react";

function DetailsPtbr() {
  const [hide, setHide] = useState<boolean>(false);
  return (
    <>
      Criei esta plataforma de e-commerce para me aprofundar no aprendizado de
      várias tecnologias, incluindo
      <strong> Next.js</strong>, <strong>Node.js</strong>,{" "}
      <strong>TypeScript</strong>, <strong>SQL</strong>,
      <strong> gateways de pagamento</strong>, <strong>OAuth</strong>, web
      scraping, reconhecimento de voz, webhooks,
      <strong> Socket.IO</strong>, envio de email e SMS, e WhatsApp web.{" "}
      {hide && (
        <>
          A maioria dessas tecnologias era
          <strong>nova para mim</strong>, tornando todo o projeto uma
          experiência refrescante e<strong>enriquecedora</strong>. Foi um
          verdadeiro <strong>divisor de águas</strong> na minha jornada. Durante{" "}
          <strong>cinco meses</strong>, dediquei-me a{" "}
          <strong>aprender novas tecnologias</strong> diariamente e
          implementá-las neste projeto. Eu carinhosamente o chamo de{" "}
          <strong>"meu pequeno Frankenstein"</strong> porque
          <strong>toda nova</strong> tecnologia que aprendo, eu testo nesta
          plataforma.
          <strong>Apesar do progresso</strong>, ainda faltam muitas
          funcionalidades a serem adicionadas, como um
          <strong>chatbot</strong>, <strong>chat em tempo real</strong>,
          integração com <strong>serviços postais</strong>, uma{" "}
          <strong>carteira virtual</strong> e mais.
        </>
      )}
      <span
        className={`max-w-28 w-full flex justify-center mx-auto pt-2  ${
          !hide && "absolute bottom-3 left-1/2 -translate-x-1/2"
        }`}
      >
        <button
          className="w-full group relative grid overflow-hidden text-xs uppercase rounded-sm px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200 group"
          onClick={() => setHide(!hide)}
        >
          <span>
            <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-sm [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
          </span>
          <span className="backdrop absolute inset-px rounded-sm transition-colors bg-primary  group-hover:bg-neutral-900  max-md:cursor-pointer group-hover:bg-secondary duration-300 ease-linear" />
          <span className="z-10 text-center text-neutral-400 font-medium max-md:cursor-pointer flex gap-3 items-center justify-center">
            {!hide ? "Ver mais" : "Ver menos"}
          </span>
        </button>
      </span>
    </>
  );
}

function FeaturesPtbr() {
  const [hide, setHide] = useState<boolean>(false);
  return (
    <>
      <li>
        <strong className="uppercase">Autenticação de Usuário</strong>: Faça
        login com email/senha ou contas de redes sociais.
      </li>
      <li>
        <strong className="uppercase">Painel Administrativo</strong>: Gerencie
        produtos, pedidos e usuários de forma eficiente.
      </li>
      <li>
        <strong className="uppercase">Painel do Usuário</strong>: Acesse o
        histórico de pedidos e as configurações da conta facilmente.
      </li>
      <li>
        <strong className="uppercase">Páginas de Produtos</strong>: Descrições
        detalhadas, imagens de alta qualidade e avaliações de clientes.
      </li>
      {hide && (
        <>
          <li>
            <strong className="uppercase">Pesquisa por Voz</strong>: Encontre
            produtos usando comandos de voz.
          </li>
          <li>
            <strong className="uppercase">Carrinho de Compras</strong>: Processo
            de checkout simples e intuitivo.
          </li>
          <li>
            <strong className="uppercase">Notificações</strong>: Atualizações em
            tempo real via painel, email e SMS.
          </li>
          <li>
            <strong className="uppercase">Pagamentos Seguros</strong>: Pague via
            Pix, cartões de débito e crédito.
          </li>
          <li>
            <strong className="uppercase">Gerenciamento de Pedidos</strong>:
            Acompanhe e gerencie pedidos sem esforço.
          </li>
          <li>
            <strong className="uppercase">Avaliações de Produtos</strong>:
            Avalie e escreva comentários sobre os produtos.
          </li>
          <li>
            <strong className="uppercase">Filtro Avançado</strong>: Encontre
            itens rapidamente com filtros robustos.
          </li>
          <li>
            <strong className="uppercase">Recuperação de Senha</strong>:
            Redefina a senha de forma segura via email.
          </li>
          <li>
            <strong className="uppercase">
              Verificação de Email e Telefone
            </strong>
            : Aumente a segurança com verificação via email, WhatsApp e SMS.
          </li>
          <li>
            <strong className="uppercase">Sistema de Cupons</strong>: Aproveite
            descontos e promoções com cupons dinâmicos.
          </li>
        </>
      )}
      <span className="max-w-28 w-full flex justify-center mx-auto pt-2 absolute bottom-1 left-1/2 -translate-x-1/2">
        <button
          className="w-full group relative grid overflow-hidden text-xs uppercase rounded-sm px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200 group"
          onClick={() => setHide(!hide)}
        >
          <span>
            <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-sm [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
          </span>
          <span className="backdrop absolute inset-px rounded-sm transition-colors bg-primary  group-hover:bg-neutral-900  max-md:cursor-pointer group-hover:bg-secondary duration-300 ease-linear" />
          <span className="z-10 text-center text-neutral-400 font-medium max-md:cursor-pointer flex gap-3 items-center justify-center">
            {!hide ? "Ver mais" : "Ver menos"}
          </span>
        </button>
      </span>
    </>
  );
}

function DetailsEnus() {
  const [hide, setHide] = useState<boolean>(false);

  return (
    <>
      I created this e-commerce platform to truly immerse myself in learning
      various technologies, including <strong>Next.js</strong>,{" "}
      <strong>Node.js</strong>, <strong>TypeScript</strong>,{" "}
      <strong>SQL</strong>, <strong>payment gateways</strong>,{" "}
      <strong>OAuth</strong>, web scraping, voice recognition, webhooks,{" "}
      <strong>Socket.IO</strong>, email and SMS sending, and web WhatsApp.{" "}
      {hide && (
        <>
          Most of these technologies were new to me, making the entire project a
          refreshing and <strong>enriching</strong> experience. It was a real{" "}
          <strong>turning point</strong> in my journey. Over{" "}
          <strong>five months</strong>, I dedicated myself to learning new
          technologies daily and implementing them in this project. I
          affectionately call it my <strong>"little Frankenstein"</strong>{" "}
          because every new technology I learn, I test on this platform. Despite
          the progress, there are still many features to add, such as a{" "}
          <strong>chatbot</strong>, <strong>real-time chat</strong>, integration
          with <strong>postal services</strong>, a{" "}
          <strong>virtual wallet</strong>, and more.
        </>
      )}
      <span
        className={`max-w-28 w-full flex justify-center mx-auto pt-2  ${
          !hide && "absolute bottom-3 left-1/2 -translate-x-1/2"
        }`}
      >
        <button
          className="w-full group relative grid overflow-hidden text-xs uppercase rounded-sm px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200 group"
          onClick={() => setHide(!hide)}
        >
          <span>
            <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-sm [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
          </span>
          <span className="backdrop absolute inset-px rounded-sm transition-colors bg-primary  group-hover:bg-neutral-900  max-md:cursor-pointer group-hover:bg-secondary duration-300 ease-linear" />
          <span className="z-10 text-center text-neutral-400 font-medium max-md:cursor-pointer flex gap-3 items-center justify-center">
            {!hide ? "See more" : "See less"}
          </span>
        </button>
      </span>
    </>
  );
}

function FeaturesEnus() {
  const [hide, setHide] = useState<boolean>(false);
  return (
    <>
      <li>
        <strong className="uppercase">User Authentication</strong>: Log in with
        email/password or social media accounts.
      </li>
      <li>
        <strong className="uppercase">Admin Panel</strong>: Manage products,
        orders, and users efficiently.
      </li>
      <li>
        <strong className="uppercase">User Dashboard</strong>: Access order
        history and account settings easily.
      </li>
      <li>
        <strong className="uppercase">Product Pages</strong>: Detailed
        descriptions, high-quality images, and customer reviews.
      </li>
      {hide && (
        <>
          <li>
            <strong className="uppercase">Voice Search</strong>: Find products
            using voice commands.
          </li>
          <li>
            <strong className="uppercase">Shopping Cart</strong>: Simple and
            intuitive checkout process.
          </li>
          <li>
            <strong className="uppercase">Notifications</strong>: Real-time
            updates via dashboard, email, and SMS.
          </li>
          <li>
            <strong className="uppercase">Secure Payments</strong>: Pay via Pix,
            debit, and credit cards.
          </li>
          <li>
            <strong className="uppercase">Order Management</strong>: Track and
            manage orders effortlessly.
          </li>
          <li>
            <strong className="uppercase">Product Reviews</strong>: Rate and
            review products.
          </li>
          <li>
            <strong className="uppercase">Advanced Filtering</strong>: Find
            items quickly with robust filters.
          </li>
          <li>
            <strong className="uppercase">Password Recovery</strong>: Reset
            password securely via email.
          </li>
          <li>
            <strong className="uppercase">Email and Phone Verification</strong>:
            Enhance security with verification via email, WhatsApp, and SMS.
          </li>
          <li>
            <strong className="uppercase">Coupon System</strong>: Enjoy
            discounts and promotions with dynamic coupons.
          </li>
        </>
      )}
      <span className="max-w-28 w-full flex justify-center mx-auto pt-2 absolute bottom-1 left-1/2 -translate-x-1/2">
        <button
          className="w-full group relative grid overflow-hidden text-xs uppercase rounded-sm px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200 group"
          onClick={() => setHide(!hide)}
        >
          <span>
            <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-sm [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
          </span>
          <span className="backdrop absolute inset-px rounded-sm transition-colors bg-primary  group-hover:bg-neutral-900  max-md:cursor-pointer group-hover:bg-secondary duration-300 ease-linear" />
          <span className="z-10 text-center text-neutral-400 font-medium max-md:cursor-pointer flex gap-3 items-center justify-center">
            {!hide ? "See more" : "See less"}
          </span>
        </button>
      </span>
    </>
  );
}

export { DetailsPtbr, DetailsEnus, FeaturesEnus, FeaturesPtbr };
