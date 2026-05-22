import Link from "next/link";

export default function CarbonCredits() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-green-700 uppercase tracking-wider mb-3">
              Créditos de Carbono
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              Cada abastecimento gera um dado auditável.
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              Os dados que a BioPoints registra alimentam o ecossistema
              brasileiro de créditos de descarbonização e abrem caminho para
              relatórios de ESG robustos para os postos parceiros.
            </p>
            <Link
              href="/creditos-de-carbono"
              className="inline-flex items-center gap-2 mt-6 text-green-700 font-medium text-sm group"
            >
              Entender o RenovaBio e os CBIOs
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <div className="lg:col-span-7 grid gap-4">
            <article className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-green-100 text-green-700 font-bold text-sm">
                  CO₂
                </span>
                <h3 className="font-semibold text-gray-900">
                  O que é um crédito de carbono
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Representa a redução ou remoção de{" "}
                <strong className="text-gray-900">1 tonelada de CO₂</strong> da
                atmosfera. Empresas que emitem acima do permitido compram
                créditos de quem reduz emissões, convertendo sustentabilidade
                em ativo financeiro.
              </p>
            </article>

            <article className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-green-100 text-green-700 font-bold text-xs">
                  BR
                </span>
                <h3 className="font-semibold text-gray-900">
                  RenovaBio &amp; CBIOs
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                A Lei nº 13.576/2017 criou os{" "}
                <strong className="text-gray-900">
                  Créditos de Descarbonização (CBIOs)
                </strong>{" "}
                 certificados negociáveis emitidos por produtores de
                biocombustível. O BioPoints se alinha a esse ecossistema,
                operacionalizando o incentivo no nível do consumidor final.
              </p>
            </article>

            <article className="bg-green-600 text-white rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 text-white">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className="font-semibold">Como a BioPoints se conecta</h3>
              </div>
              <p className="text-sm text-green-50 leading-relaxed">
                Cada abastecimento registrado pela plataforma gera dados
                auditáveis de emissões evitadas. Essa base sustenta futura
                emissão de créditos e relatórios de ESG para os postos
                parceiros.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
