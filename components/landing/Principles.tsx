const principles = [
  {
    emoji: "🌱",
    title: "Incentivar, não obrigar",
    description:
      "Mudança de comportamento sustentável acontece quando há benefício real e imediato para o motorista, não por punição.",
  },
  {
    emoji: "📊",
    title: "Dados que comprovam",
    description:
      "Cada ponto emitido é calculado por um modelo de IA treinado com dados reais de emissões veiculares. Sem estimativas genéricas.",
  },
  {
    emoji: "🏙️",
    title: "Cidades mais inteligentes",
    description:
      "Integramos postos, veículos e consumo em uma plataforma de dados urbanos que apoia decisões de política pública.",
  },
];

export default function Principles() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-24">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-green-700 uppercase tracking-wider mb-3">
            Nossos princípios
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
            Três decisões que orientam tudo o que construímos.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {principles.map((p, i) => (
            <article
              key={i}
              className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-md transition-shadow"
            >
              <div
                className="text-3xl mb-5"
                role="img"
                aria-label={p.title}
              >
                {p.emoji}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {p.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
