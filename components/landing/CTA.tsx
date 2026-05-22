import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative bg-green-900 text-white overflow-hidden">
      {/* Decorative shapes */}
      <div
        className="absolute -top-32 -right-20 w-96 h-96 rounded-full bg-green-700/30 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-green-600/20 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-green-100 mb-6">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
          API rodando · pronta para teste
        </div>

        <h2 className="text-3xl lg:text-5xl font-bold tracking-tight max-w-3xl mx-auto leading-tight">
          Pronto para testar a plataforma?
        </h2>
        <p className="mt-5 text-lg text-green-100 max-w-xl mx-auto leading-relaxed">
          Acesse a área de demonstração e simule um cadastro completo,
          do veículo ao abastecimento.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/demo"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white hover:bg-green-50 text-green-900 px-6 py-3.5 text-base font-semibold transition-colors"
          >
            Ir para a demo
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
            href="/como-funciona"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 text-white hover:bg-white/10 px-6 py-3.5 text-base font-medium transition-colors"
          >
            Ver fluxo técnico
          </Link>
        </div>
      </div>
    </section>
  );
}
