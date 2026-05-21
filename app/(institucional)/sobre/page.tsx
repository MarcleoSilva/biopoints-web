import Link from "next/link";

const stack = [
  { name: "NestJS", role: "Backend API REST" },
  { name: "Prisma ORM", role: "Modelagem e acesso ao banco" },
  { name: "PostgreSQL", role: "Persistência relacional" },
  { name: "Python", role: "Treinamento do modelo" },
  { name: "Random Forest", role: "Predição de emissões CO₂" },
  { name: "Next.js 14", role: "Frontend institucional + demo" },
  { name: "React", role: "Interface declarativa" },
  { name: "Tailwind CSS", role: "Sistema de design" },
];

export default function SobrePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-gray-100 bg-white">
        <div className="absolute inset-0 bg-dot-grid opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28">
          <p className="text-sm font-semibold text-green-700 uppercase tracking-wider mb-3">
            Sobre
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 max-w-3xl">
            Um projeto acadêmico, em escala de cidade.
          </h1>
          <p className="mt-5 text-lg text-gray-600 max-w-2xl leading-relaxed">
            O BioPoints nasceu na interseção entre três agendas:{" "}
            <strong className="text-gray-900">cidades inteligentes</strong>,{" "}
            <strong className="text-gray-900">mudanças climáticas</strong> e{" "}
            <strong className="text-gray-900">transição energética</strong>.
            Tem como piloto a cidade de Salvador, Bahia.
          </p>
        </div>
      </section>

      {/* The problem */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16 lg:py-20">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-5">
            O problema que resolve
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            O Brasil tem a maior frota flex do mundo — mas ela não é usada de
            forma sustentável. A maioria absoluta dos motoristas continua
            abastecendo com gasolina, mesmo quando o etanol seria a opção
            mais limpa, simplesmente porque{" "}
            <strong>
              não existe um incentivo visível, mensurável e financeiro
            </strong>{" "}
            para fazer diferente.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            O BioPoints fecha essa lacuna: cria um sistema de recompensa
            baseado em CO₂ realmente evitado, mensurado por IA, registrado
            por postos parceiros e creditado diretamente ao motorista.
          </p>
        </div>
      </section>

      {/* Three domains */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-10">
            Três domínios que se encontram aqui.
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            <article className="bg-white border border-gray-100 rounded-2xl p-7">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-700 mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z M9 22V12h6v10"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h3 className="font-semibold text-gray-900 mb-2">
                Cidades Inteligentes
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Infraestrutura digital, integração B2B com sistemas de PDV de
                postos, dados em tempo real sobre mobilidade urbana
                sustentável.
              </p>
            </article>

            <article className="bg-white border border-gray-100 rounded-2xl p-7">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-700 mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 12c0-5-4-9-9-9s-9 4-9 9 4 9 9 9c1.5 0 3-.4 4.3-1M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h3 className="font-semibold text-gray-900 mb-2">
                Mudanças Climáticas
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Redução mensurável de emissões de GEE no setor de transporte
                — o segundo maior emissor do país.
              </p>
            </article>

            <article className="bg-white border border-gray-100 rounded-2xl p-7">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-700 mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h3 className="font-semibold text-gray-900 mb-2">
                Transição Energética
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Aceleração da migração de fósseis para fontes renováveis no
                nível do consumidor final, com infraestrutura já existente.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            Tecnologias utilizadas
          </h2>
          <p className="text-gray-600 mb-10">
            Stack moderna, decisões pragmáticas. Nada decorativo.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {stack.map((s) => (
              <div
                key={s.name}
                className="bg-gray-50 border border-gray-100 rounded-xl p-5 hover:border-green-200 transition-colors"
              >
                <div className="font-semibold text-gray-900">{s.name}</div>
                <div className="text-xs text-gray-500 mt-1">{s.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot */}
      <section className="bg-green-900 text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16 lg:py-20">
          <p className="text-sm font-semibold text-green-300 uppercase tracking-wider mb-3">
            Piloto
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold mb-5">
            Salvador, Bahia.
          </h2>
          <p className="text-green-100 leading-relaxed text-lg">
            Salvador é a terceira maior cidade do Brasil, capital de um
            estado com cadeia produtiva de biocombustível consolidada e a
            menor emissão de CO₂ per capita entre as capitais brasileiras.
          </p>
          <p className="text-green-100 leading-relaxed mt-4">
            A arquitetura do BioPoints é{" "}
            <strong className="text-white">city-agnostic</strong>: Salvador
            serve como referência, mas a expansão para outros centros urbanos
            depende apenas de novos postos parceiros e localização de
            conteúdo.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-green-900 hover:bg-green-50 px-5 py-3 text-sm font-semibold"
            >
              Testar a API
            </Link>
            <Link
              href="/como-funciona"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 text-white hover:bg-white/10 px-5 py-3 text-sm font-medium"
            >
              Ver fluxo completo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
