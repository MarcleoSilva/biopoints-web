import Link from "next/link";

const steps = [
  {
    n: 1,
    href: "/demo/veiculos",
    label: "Cadastrar veículo",
    sub: "POST /vehicles",
    desc: "Registre os dados técnicos de um veículo flex ou diesel para validar elegibilidade.",
  },
  {
    n: 2,
    href: "/demo/postos",
    label: "Cadastrar posto",
    sub: "POST /stations",
    desc: "Crie um posto parceiro B2B e receba uma api_key para autenticação.",
  },
  {
    n: 3,
    href: "/demo/motoristas",
    label: "Cadastrar motorista",
    sub: "POST /drivers",
    desc: "Vincule um motorista ao veículo e ao posto onde se cadastrou.",
  },
  {
    n: 4,
    href: "/demo/abastecimento",
    label: "Registrar abastecimento",
    sub: "POST /stations/:id/events",
    desc: "Dispare um evento e veja os BioPoints calculados pela IA em tempo real.",
  },
];

export default function DemoHubPage() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8">
        <p className="text-sm font-semibold text-green-700 uppercase tracking-wider mb-2">
          Comece por aqui
        </p>
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
          Quatro chamadas. Um ciclo completo.
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Siga os quatro passos em ordem. Os identificadores retornados
          (vehicle_id, station_id, api_key, driver_id) ficam salvos na
          sessão e são preenchidos automaticamente nos passos seguintes.
          Você pode reiniciar a qualquer momento pela barra lateral.
        </p>
        <div className="mt-5 inline-flex items-start gap-2 rounded-lg bg-amber-50 border border-amber-200 px-4 py-3 text-xs text-amber-900">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            className="mt-0.5 shrink-0"
          >
            <path
              d="M12 9v4M12 17h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>
            <strong>Backend obrigatório:</strong> certifique-se de que a API
            NestJS está rodando em <code className="font-mono">http://localhost:3000</code>{" "}
            antes de iniciar o fluxo.
          </span>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {steps.map((s) => (
          <Link
            key={s.n}
            href={s.href}
            className="group bg-white rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-md transition-all p-6"
          >
            <div className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-700 font-bold shrink-0 group-hover:bg-green-600 group-hover:text-white transition-colors">
                {s.n}
              </span>
              <div className="min-w-0">
                <h3 className="font-semibold text-gray-900 truncate">
                  {s.label}
                </h3>
                <p className="text-[11px] font-mono text-gray-500 mb-2">
                  {s.sub}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-2 flex justify-end">
        <Link
          href="/demo/veiculos"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 hover:bg-green-700 text-white px-5 py-3 text-sm font-medium"
        >
          Iniciar pelo passo 1 →
        </Link>
      </div>
    </div>
  );
}
