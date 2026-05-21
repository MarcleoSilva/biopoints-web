export default function WhyBiofuel() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-24">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-green-700 uppercase tracking-wider mb-3">
            Por que biocombustível?
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
            O problema é estrutural.
            <br />
            <span className="text-gray-500">A solução é incentivar.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Problem block */}
          <div className="relative bg-white rounded-2xl p-8 lg:p-10 border border-gray-100 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-300 via-amber-300 to-red-300" />
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-600">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 9v4M12 17h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-red-600">
                O problema
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Tecnologia parada na garagem.
            </h3>
            <ul className="space-y-5">
              <li className="flex gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  O setor de transporte rodoviário responde por{" "}
                  <strong className="text-gray-900">
                    7,79% das emissões de GEE do Brasil
                  </strong>{" "}
                  <span className="text-xs text-gray-500 align-baseline">
                    (SEEG, 2021)
                  </span>
                  .
                </p>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  Salvador tem mais de{" "}
                  <strong className="text-gray-900">
                    1,5 milhão de veículos
                  </strong>{" "}
                  registrados, a maioria flex.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  Apesar da tecnologia disponível, motoristas seguem
                  abastecendo com gasolina por falta de incentivo concreto.
                </p>
              </li>
            </ul>
          </div>

          {/* Solution block */}
          <div className="relative bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl p-8 lg:p-10 overflow-hidden">
            <div
              className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-white/10 blur-3xl"
              aria-hidden
            />
            <div className="relative">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-green-100">
                  Nossa solução
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-6">
                Recompensa direta, mensurável, agora.
              </h3>
              <ul className="space-y-5">
                <li className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-200 shrink-0" />
                  <p className="text-green-50 leading-relaxed">
                    Transformamos a economia de CO₂ em recompensa financeira
                    direta e mensurável.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-200 shrink-0" />
                  <p className="text-green-50 leading-relaxed">
                    Usamos IA preditiva (Random Forest) para calcular o
                    impacto real de cada abastecimento.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-200 shrink-0" />
                  <p className="text-green-50 leading-relaxed">
                    Conectamos postos, motoristas e dados em uma plataforma de
                    cidade inteligente.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
