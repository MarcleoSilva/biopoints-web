import Link from "next/link";
import Badge from "@/components/ui/Badge";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Soft decorative blobs */}
      <div
        className="hero-blob"
        style={{
          background: "#bbf7d0",
          width: 520,
          height: 520,
          top: -180,
          right: -120,
        }}
        aria-hidden
      />
      <div
        className="hero-blob"
        style={{
          background: "#dcfce7",
          width: 380,
          height: 380,
          top: 120,
          right: 180,
        }}
        aria-hidden
      />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-40" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="max-w-3xl">
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0ms" }}>
            <Badge tone="green" className="mb-6">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-600 mr-2 animate-pulse" />
              Piloto ativo · Salvador, Bahia
            </Badge>
          </div>

          <h1
            className="opacity-0 animate-fade-in-up text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.05]"
            style={{ animationDelay: "100ms" }}
          >
            Cada litro de
            <br />
            <span className="text-green-600">bio</span>combustível
            <br />
            vale mais.
          </h1>

          <p
            className="opacity-0 animate-fade-in-up mt-7 text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl"
            style={{ animationDelay: "220ms" }}
          >
            A BioPoints converte as emissões que você evita em recompensas
            reais, usando IA para calcular seu impacto e transformá-lo em
            valor financeiro direto.
          </p>

          <div
            className="opacity-0 animate-fade-in-up mt-10 flex flex-col sm:flex-row gap-3"
            style={{ animationDelay: "340ms" }}
          >
            <Link
              href="/como-funciona"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 hover:bg-green-700 text-white px-6 py-3.5 text-base font-medium shadow-sm shadow-green-600/20 transition-all hover:shadow-md hover:shadow-green-600/30"
            >
              Ver como funciona
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3.5 8h9m-3-3 3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-green-600 text-green-700 hover:bg-green-50 px-6 py-3.5 text-base font-medium transition-colors"
            >
              Testar a API
            </Link>
          </div>

          {/* Trust line */}
          <div
            className="opacity-0 animate-fade-in-up mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-wider text-gray-500"
            style={{ animationDelay: "460ms" }}
          >
            <span>Cidades Inteligentes</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>Mudanças Climáticas</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>Transição Energética</span>
          </div>
        </div>
      </div>
    </section>
  );
}
