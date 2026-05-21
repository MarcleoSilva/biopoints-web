import Link from "next/link";

export default function CreditosDeCarbonoPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-gray-100 bg-white">
        <div className="absolute inset-0 bg-dot-grid opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28">
          <p className="text-sm font-semibold text-green-700 uppercase tracking-wider mb-3">
            Créditos de Carbono
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 max-w-3xl">
            O mercado que paga para não poluir.
          </h1>
          <p className="mt-5 text-lg text-gray-600 max-w-2xl leading-relaxed">
            Entenda como o BioPoints se posiciona dentro do ecossistema
            brasileiro de descarbonização — do CBIO à ESG.
          </p>
        </div>
      </section>

      {/* What it is */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16 lg:py-20">
          <div className="prose-custom max-w-none">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-5">
              O que é um crédito de carbono?
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Um crédito de carbono representa a{" "}
              <strong>redução ou remoção de 1 tonelada de CO₂</strong> da
              atmosfera. Quem polui acima do permitido pode comprar créditos
              de quem reduziu — criando um mercado em que evitar emissões
              vira ativo financeiro negociável.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Esse mecanismo existe em duas camadas: o{" "}
              <strong>mercado regulado</strong>, onde governos definem metas
              obrigatórias para setores específicos, e o{" "}
              <strong>mercado voluntário</strong>, onde empresas compensam
              suas emissões por iniciativa própria (geralmente como parte de
              suas estratégias de ESG).
            </p>
          </div>
        </div>
      </section>

      {/* RenovaBio */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex items-start gap-4 mb-6">
            <span className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-700 font-bold text-sm">
              BR
            </span>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                RenovaBio e os CBIOs
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Política Nacional de Biocombustíveis — Lei nº 13.576/2017
              </p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            O <strong>RenovaBio</strong> é a política pública brasileira que
            criou os <strong>CBIOs</strong> (Créditos de Descarbonização) —
            certificados negociáveis na B3, emitidos por produtores de
            biocombustível certificados, cada um equivalente a 1 tonelada de
            CO₂ evitada.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            As distribuidoras de combustíveis fósseis são obrigadas a comprar
            CBIOs anualmente para cumprir metas individuais — o que cria
            demanda contínua, financiando quem produz energia renovável.
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl border border-gray-100 p-5">
              <div className="text-3xl font-bold text-green-600">2017</div>
              <p className="text-sm text-gray-600 mt-1">
                Lei nº 13.576 institui o RenovaBio
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-5">
              <div className="text-3xl font-bold text-green-600">2020</div>
              <p className="text-sm text-gray-600 mt-1">
                Primeiros CBIOs emitidos e negociados na B3
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-5">
              <div className="text-3xl font-bold text-green-600">35M+</div>
              <p className="text-sm text-gray-600 mt-1">
                CBIOs já emitidos no acumulado do programa
              </p>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="https://www.gov.br/mme/pt-br/assuntos/secretarias/petroleo-gas-natural-e-biocombustiveis/renovabio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-green-700 hover:text-green-800 link-underline"
            >
              Página oficial do RenovaBio — Ministério de Minas e Energia
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* How BioPoints connects */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16 lg:py-20">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            Onde a BioPoints entra
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-8">
            O RenovaBio recompensa o <em>produtor</em> de biocombustível. A
            BioPoints recompensa o <em>consumidor</em> — fechando o
            triângulo de incentivos.
          </p>

          <div className="space-y-4">
            {[
              {
                t: "Dados auditáveis por evento",
                d: "Cada abastecimento é um registro com placa, volume, posto, vehicle ID e CO₂ evitado calculado por IA. Essa granularidade é o que torna possível reportar reduções com credibilidade.",
              },
              {
                t: "Ponte para o ESG dos postos parceiros",
                d: "Os postos passam a ter um inventário próprio de emissões evitadas pelos seus clientes — base para relatórios de sustentabilidade, certificações e diferenciação competitiva.",
              },
              {
                t: "Alinhamento futuro com CBIOs",
                d: "À medida que a plataforma escala, os dados agregados podem servir como subsídio para emissão de créditos no mercado voluntário — ou para acordos diretos com distribuidoras.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-100 rounded-xl p-6 hover:border-green-200 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{item.t}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Salvador / Bahia context */}
      <section className="bg-green-900 text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16 lg:py-20">
          <p className="text-sm font-semibold text-green-300 uppercase tracking-wider mb-3">
            Contexto regional
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold mb-5">
            Por que Salvador e a Bahia?
          </h2>
          <p className="text-green-100 leading-relaxed">
            A Bahia é um dos polos históricos da cana-de-açúcar no Brasil e
            tem cadeia consolidada de biodiesel — matéria-prima, distribuição
            e cultura técnica. Salvador é a{" "}
            <strong className="text-white">
              capital brasileira que menos emite CO₂ per capita
            </strong>{" "}
            e tem mais de 1,5 milhão de veículos, em sua maioria flex.
          </p>
          <p className="text-green-100 leading-relaxed mt-4">
            É o terreno ideal para um piloto que precisa, ao mesmo tempo,
            ter relevância climática, frota disponível e infraestrutura de
            biocombustível pronta para escalar.
          </p>
          <div className="mt-8">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 rounded-lg bg-white text-green-900 hover:bg-green-50 px-5 py-3 text-sm font-semibold"
            >
              Ver a plataforma em ação →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
