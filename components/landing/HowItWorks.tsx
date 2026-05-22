type Step = {
  n: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const steps: Step[] = [
  {
    n: "01",
    title: "Cadastro no posto",
    description:
      "O motorista se cadastra em um posto parceiro BioPoints. O veículo é validado automaticamente para elegibilidade.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path
          d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M22 11l-3 3-2-2M8.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Abastece com biocombustível",
    description:
      "A cada abastecimento, a placa do veículo é registrada na plataforma junto com o volume dispensado.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path
          d="M3 22h12V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v18zM3 10h12M18 8l3 3v8a2 2 0 0 1-4 0v-3M16 6l2-2 3 3"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    n: "03",
    title: "IA calcula o impacto",
    description:
      "Um modelo Random Forest estima o CO₂ evitado com base nas especificações do veículo e no volume abastecido.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path
          d="M9 11l3 3 8-8M22 4l-10 10M5 12a7 7 0 1 0 14 0M5 12a7 7 0 0 1 7-7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Pontos viram dinheiro",
    description:
      "Os BioPoints acumulados são convertidos em crédito financeiro resgatável diretamente no posto parceiro.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path
          d="M12 1v22M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-24">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-green-700 uppercase tracking-wider mb-3">
            Como funciona
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
            Quatro passos, do bico ao bolso.
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Da bomba ao banco, o ciclo completo de recompensa por
            biocombustível, totalmente automatizado.
          </p>
        </div>

        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Connection line on desktop */}
          <div
            className="hidden lg:block absolute left-0 right-0 top-[44px] h-px bg-gradient-to-r from-transparent via-green-200 to-transparent"
            aria-hidden
          />

          {steps.map((s, i) => (
            <div key={i} className="relative">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 h-full hover:border-green-200 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-5">
                  <div className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-700 border border-green-100">
                    {s.icon}
                  </div>
                  <span className="text-xs font-mono font-semibold text-gray-300">
                    {s.n}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
