"use client";

import { useDemo } from "@/lib/context/DemoContext";

const steps = [
  { n: 1, label: "Veículo", key: "vehicleId" as const, href: "/demo/veiculos" },
  { n: 2, label: "Posto", key: "stationId" as const, href: "/demo/postos" },
  {
    n: 3,
    label: "Motorista",
    key: "driverId" as const,
    href: "/demo/motoristas",
  },
  { n: 4, label: "Abastecimento", key: null, href: "/demo/abastecimento" },
];

export default function StepIndicator({ current }: { current: number }) {
  const { state } = useDemo();

  return (
    <ol className="flex items-center gap-1 sm:gap-3 overflow-x-auto pb-2">
      {steps.map((s, i) => {
        const completed = s.key ? Boolean(state[s.key]) : false;
        const isCurrent = current === s.n;
        return (
          <li
            key={s.n}
            className="flex items-center gap-2 sm:gap-3 shrink-0"
          >
            <div
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs sm:text-sm font-medium transition-colors ${
                isCurrent
                  ? "bg-green-600 border-green-600 text-white"
                  : completed
                  ? "bg-green-50 border-green-200 text-green-800"
                  : "bg-gray-50 border-gray-200 text-gray-500"
              }`}
            >
              <span
                className={`inline-flex w-5 h-5 items-center justify-center rounded-full text-[10px] font-semibold ${
                  isCurrent
                    ? "bg-white/20 text-white"
                    : completed
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {completed && !isCurrent ? (
                  <svg
                    width="10"
                    height="10"
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
                  s.n
                )}
              </span>
              <span className="hidden sm:inline">{s.label}</span>
            </div>
            {i < steps.length - 1 && (
              <span className="hidden sm:block w-6 h-px bg-gray-200" />
            )}
          </li>
        );
      })}
    </ol>
  );
}
