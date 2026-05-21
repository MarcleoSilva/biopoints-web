"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDemo } from "@/lib/context/DemoContext";

const links = [
  {
    n: 1,
    href: "/demo/veiculos",
    label: "Veículo",
    sub: "POST /vehicles",
    key: "vehicleId" as const,
  },
  {
    n: 2,
    href: "/demo/postos",
    label: "Posto",
    sub: "POST /stations",
    key: "stationId" as const,
  },
  {
    n: 3,
    href: "/demo/motoristas",
    label: "Motorista",
    sub: "POST /drivers",
    key: "driverId" as const,
  },
  {
    n: 4,
    href: "/demo/abastecimento",
    label: "Abastecimento",
    sub: "POST /stations/:id/events",
    key: null,
  },
];

export default function DemoSidebar() {
  const pathname = usePathname();
  const { state, reset } = useDemo();

  return (
    <aside className="w-full lg:w-72 shrink-0">
      <div className="lg:sticky lg:top-20 space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3 px-1">
            Fluxo de demonstração
          </p>
          <nav className="space-y-1">
            {links.map((l) => {
              const active = pathname === l.href;
              const completed = l.key ? Boolean(state[l.key]) : false;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg border transition-colors ${
                    active
                      ? "bg-green-50 border-green-200"
                      : "bg-white border-transparent hover:bg-gray-50"
                  }`}
                >
                  <span
                    className={`inline-flex w-7 h-7 items-center justify-center rounded-md text-xs font-semibold shrink-0 ${
                      active
                        ? "bg-green-600 text-white"
                        : completed
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {completed && !active ? (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2.5 6.5l2.5 2.5L9.5 3.5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      l.n
                    )}
                  </span>
                  <div className="min-w-0">
                    <div
                      className={`text-sm font-medium truncate ${
                        active ? "text-green-900" : "text-gray-900"
                      }`}
                    >
                      {l.label}
                    </div>
                    <div className="text-[11px] font-mono text-gray-500 truncate">
                      {l.sub}
                    </div>
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Current state */}
        <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
            Estado da sessão
          </p>
          <ul className="space-y-2 text-xs">
            <StateRow label="vehicle_id" value={state.vehicleId} />
            <StateRow label="plate" value={state.plate} />
            <StateRow label="station_id" value={state.stationId} />
            <StateRow label="api_key" value={state.apiKey} mask />
            <StateRow label="driver_id" value={state.driverId} />
          </ul>
          {(state.vehicleId ||
            state.stationId ||
            state.driverId ||
            state.apiKey) && (
            <button
              onClick={reset}
              className="mt-3 w-full text-xs px-3 py-1.5 rounded-md bg-white border border-gray-200 hover:border-red-200 hover:text-red-600 text-gray-600 transition-colors"
            >
              Limpar sessão
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}

function StateRow({
  label,
  value,
  mask,
}: {
  label: string;
  value?: string;
  mask?: boolean;
}) {
  const display = !value
    ? "—"
    : mask
    ? value.slice(0, 4) + "•••" + value.slice(-3)
    : value.length > 18
    ? value.slice(0, 8) + "…" + value.slice(-5)
    : value;
  return (
    <li className="flex items-baseline justify-between gap-2">
      <span className="font-mono text-gray-500">{label}</span>
      <span
        className={`font-mono truncate ${
          value ? "text-gray-900" : "text-gray-400"
        }`}
      >
        {display}
      </span>
    </li>
  );
}
