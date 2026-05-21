type Stat = {
  number: string;
  numberSuffix?: string;
  description: string;
  source: string;
  url?: string;
};

const stats: Stat[] = [
  {
    number: "85",
    numberSuffix: "%",
    description:
      "da frota de veículos leves no Brasil é flex — compatível com biocombustíveis.",
    source: "Anfavea — Anuário da Indústria Automobilística 2023",
    url: "https://anfavea.com.br/anuario",
  },
  {
    number: "30",
    numberSuffix: "%",
    description:
      "Apenas essa fatia da frota flex de fato abastece com etanol, apesar de poder fazê-lo.",
    source: "Datagro / Jornal de Brasília, março 2024",
    url: "https://jornaldebrasilia.com.br/noticias/economia/carros-flex-sao-maioria-no-brasil-mas-so-30-da-frota-usa-etanol-diz-estudo/",
  },
  {
    number: "73",
    numberSuffix: "%",
    description:
      "Redução das emissões de CO₂ do etanol de cana em relação à gasolina (ciclo de vida).",
    source: "Embrapa Agrobiologia — well-to-wheel",
    url: "https://www.embrapa.br/busca-de-noticias/-/noticia/18044516",
  },
  {
    number: "25,79",
    numberSuffix: " kg",
    description:
      "CO₂eq emitidos com etanol vs. 60,64 kg com gasolina no mesmo percurso (teste 2023).",
    source: "Stellantis Media Brasil, abril 2023",
    url: "https://www.media.stellantis.com/br-pt/corporate-communications/press/comparativo-de-emissoes-de-co2",
  },
  {
    number: "630",
    numberSuffix: " mi t",
    description:
      "de CO₂ evitadas desde 2003 pelos veículos flex no Brasil.",
    source: "UNICA — União da Indústria de Cana-de-açúcar",
    url: "https://unica.com.br/noticias/uso-do-etanol-evita-515-milhoes-de-toneladas-de-co2-na-atmosfera/",
  },
  {
    number: "1ª",
    description:
      "capital brasileira que menos emite CO₂ per capita no país — Salvador.",
    source: "Instituto Cidades Sustentáveis — Mapa da Desigualdade 2024",
    url: "https://sustentabilidade.salvador.ba.gov.br/salvador-e-a-capital-que-menos-emite-gas-carbonico-no-brasil/",
  },
];

export default function ImpactStats() {
  return (
    <section className="bg-gray-50 border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-24">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold text-green-700 uppercase tracking-wider mb-3">
            Dados de impacto
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
            O Brasil tem a frota. Falta o incentivo.
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Os números abaixo mostram o tamanho da oportunidade que a
            BioPoints destrava — todos com fonte verificável.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stats.map((s, i) => (
            <article
              key={i}
              className="group relative bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-baseline gap-1">
                <span className="text-5xl lg:text-6xl font-bold text-green-600 tracking-tight">
                  {s.number}
                </span>
                {s.numberSuffix && (
                  <span className="text-2xl font-semibold text-green-700">
                    {s.numberSuffix}
                  </span>
                )}
              </div>
              <p className="mt-4 text-gray-800 leading-relaxed">
                {s.description}
              </p>
              <div className="mt-6 pt-4 border-t border-gray-100">
                {s.url ? (
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-500 hover:text-green-700 inline-flex items-center gap-1 link-underline"
                  >
                    Fonte: {s.source}
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                ) : (
                  <span className="text-xs text-gray-500">
                    Fonte: {s.source}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
