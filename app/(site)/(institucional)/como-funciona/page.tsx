import Link from "next/link";
import HowItWorks from "@/components/landing/HowItWorks";

const faqs = [
  {
    q: "Quem pode participar do programa BioPoints?",
    a: "Qualquer motorista cujo veículo seja tecnicamente compatível com biocombustível (etanol em veículos flex ou biodiesel B20+ em motores diesel). A elegibilidade é validada automaticamente no cadastro a partir dos dados do veículo.",
  },
  {
    q: "Como o CO₂ evitado é calculado?",
    a: "Treinamos um modelo Random Forest sobre uma base de emissões veiculares. Quando você abastece, o modelo prevê quanto CO₂ você teria emitido com gasolina. Subtraímos disso o CO₂ do biocombustível, e o resultado é a economia real daquele abastecimento.",
  },
  {
    q: "Como os pontos viram dinheiro?",
    a: "Pontos têm uma taxa de conversão definida pela plataforma. O saldo do motorista pode ser resgatado em crédito direto no posto parceiro — sem intermediários, sem letras miúdas.",
  },
  {
    q: "O posto precisa instalar algum equipamento?",
    a: "Não. A integração é via API REST: o sistema de PDV do posto envia o evento de abastecimento, e o backend BioPoints calcula e credita os pontos. Manualmente, via dashboard, também é possível.",
  },
  {
    q: "E se o meu veículo não estiver no banco de dados?",
    a: "Veículos não catalogados podem ser cadastrados manualmente com seus dados técnicos (cilindrada, consumo combinado, transmissão, tipo de combustível). O modelo de IA opera sobre essas características — não sobre marca e modelo isolados.",
  },
];

export default function ComoFuncionaPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden border-b border-gray-100 bg-white">
        <div className="absolute inset-0 bg-dot-grid opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28">
          <p className="text-sm font-semibold text-green-700 uppercase tracking-wider mb-3">
            Como funciona
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 max-w-3xl">
            Do bico ao bolso, em tempo real.
          </h1>
          <p className="mt-5 text-lg text-gray-600 max-w-2xl leading-relaxed">
            O programa BioPoints fecha um ciclo completo entre quem produz a
            economia de CO₂ (o motorista), quem registra (o posto), e quem
            mede e recompensa (a plataforma).
          </p>
        </div>
      </section>

      {/* Reuse landing HowItWorks */}
      <HowItWorks />

      {/* Flow diagram */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-semibold text-green-700 uppercase tracking-wider mb-3">
              Fluxo técnico
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              Como o dado viaja.
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Cada caixa abaixo é uma responsabilidade real do sistema.
              Tudo o que está em verde é onde o BioPoints atua.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-8 lg:p-10 overflow-x-auto">
            <div className="min-w-[640px] flex items-center gap-4 justify-between">
              {[
                { label: "Motorista", desc: "Abastece", tone: "gray" },
                { label: "Posto", desc: "Registra evento via API", tone: "gray" },
                { label: "API REST", desc: "Recebe e valida", tone: "green" },
                { label: "Modelo IA", desc: "Random Forest prevê CO₂", tone: "green" },
                { label: "BioPoints", desc: "Credita ao motorista", tone: "green" },
              ].map((s, i, arr) => (
                <div
                  key={i}
                  className="flex items-center gap-4 flex-1 justify-center"
                >
                  <div
                    className={`flex-1 min-w-[120px] rounded-xl p-4 border text-center ${
                      s.tone === "green"
                        ? "bg-green-50 border-green-200"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <div
                      className={`text-sm font-semibold ${
                        s.tone === "green"
                          ? "text-green-800"
                          : "text-gray-800"
                      }`}
                    >
                      {s.label}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {s.desc}
                    </div>
                  </div>
                  {i < arr.length - 1 && (
                    <svg
                      width="20"
                      height="14"
                      viewBox="0 0 20 14"
                      fill="none"
                      className="shrink-0 text-gray-300"
                      aria-hidden
                    >
                      <path
                        d="M2 7h15m-4-4 4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formula explained */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm font-semibold text-green-700 uppercase tracking-wider mb-3">
                Fórmula
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                Em linguagem de gente.
              </h2>
              <p className="mt-5 text-lg text-gray-700 leading-relaxed">
                Calculamos quanto CO₂ você teria emitido se usasse gasolina,
                comparamos com o que o biocombustível emite, e multiplicamos
                pela eficiência do seu veículo e pelos litros abastecidos.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Quanto mais eficiente o veículo, maior o bônus. Quanto maior o
                volume, maior o crédito. Tudo medido por evento — nenhum chute.
              </p>
            </div>

            <div className="bg-gray-900 text-gray-100 rounded-2xl p-8 lg:p-10 font-mono text-sm leading-relaxed">
              <div className="text-gray-500 text-xs uppercase tracking-wider mb-4">
                Fórmula simplificada
              </div>
              <div>
                <span className="text-green-400">CO₂_evitado</span> = CO₂_fóssil_previsto − CO₂_bio_real
              </div>
              <div className="mt-3">
                <span className="text-green-400">Pontos</span> = CO₂_evitado
              </div>
              <div className="ml-12">× multiplicador_eficiência</div>
              <div className="ml-12">× litros_abastecidos</div>
              <div className="ml-12">× taxa_base</div>
              <div className="mt-6 pt-4 border-t border-gray-800 text-xs text-gray-500">
                O multiplicador é o inverso normalizado do consumo (L/100km):
                veículos mais econômicos ganham mais.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20 lg:py-24">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold text-green-700 uppercase tracking-wider mb-3">
              Perguntas frequentes
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              Dúvidas comuns.
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group bg-white border border-gray-100 rounded-xl overflow-hidden"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 px-6 py-5 hover:bg-gray-50">
                  <h3 className="font-semibold text-gray-900">{f.q}</h3>
                  <span
                    className="shrink-0 w-6 h-6 inline-flex items-center justify-center rounded-full bg-green-50 text-green-700 group-open:rotate-45 transition-transform"
                    aria-hidden
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M6 1v10M1 6h10"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {f.a}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-sm font-medium"
            >
              Testar agora na demo →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
