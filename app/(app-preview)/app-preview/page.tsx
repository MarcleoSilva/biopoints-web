"use client";

const fuelUps = [
  {
    posto: "Shell — Av. Paralela",
    volume: "40 L · Etanol",
    pts: "+320",
    co2: "−12,4 kg",
    time: "Hoje, 14:32",
  },
  {
    posto: "Posto BR — Centro",
    volume: "22 L · Etanol",
    pts: "+185",
    co2: "−7,2 kg",
    time: "Ontem, 08:10",
  },
  {
    posto: "Ipiranga — Norte",
    volume: "30 L · Biodiesel B20",
    pts: "+240",
    co2: "−9,3 kg",
    time: "Seg, 17:55",
  },
];

const quickStats = [
  { label: "Este mês", value: "+420", unit: "pts", color: "text-gray-900" },
  { label: "CO₂ salvo", value: "34,1", unit: "kg", color: "text-green-600" },
  { label: "Resgatar", value: "R$24", unit: ",80", color: "text-green-600" },
];

const tabs = [
  {
    label: "Início",
    active: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" stroke="currentColor" />
        <path d="M9 21V12h6v9" stroke="currentColor" />
      </svg>
    ),
  },
  {
    label: "Histórico",
    active: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="9" stroke="currentColor" />
        <path d="M12 7v5l3 3" stroke="currentColor" />
      </svg>
    ),
  },
  {
    label: "Créditos",
    active: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="5" width="20" height="14" rx="3" stroke="currentColor" />
        <path d="M2 10h20" stroke="currentColor" />
      </svg>
    ),
  },
  {
    label: "Perfil",
    active: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="8" r="4" stroke="currentColor" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" />
      </svg>
    ),
  },
];

export default function AppPreviewPage() {
  return (
    <div className="min-h-screen bg-green-700 flex flex-col items-center">
      {/* App shell — max phone width */}
      <div className="w-full max-w-[390px] min-h-screen bg-gray-50 flex flex-col">

        {/* Fake status bar */}
        <div className="bg-green-700 px-5 pt-3 pb-1.5 flex items-center justify-between shrink-0">
          <span className="text-white text-[13px] font-bold tracking-tight">9:41</span>
          <div className="flex items-center gap-2">
            {/* Signal bars */}
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <rect x="0" y="7" width="3" height="5" rx="0.5" fill="white" />
              <rect x="4.5" y="4.5" width="3" height="7.5" rx="0.5" fill="white" />
              <rect x="9" y="2" width="3" height="10" rx="0.5" fill="white" />
              <rect x="13" y="0" width="3" height="12" rx="0.5" fill="rgba(255,255,255,0.35)" />
            </svg>
            {/* WiFi */}
            <svg width="16" height="12" viewBox="0 0 24 18" fill="none">
              <path d="M1 6.5C5.5 2 10.5 0 12 0s6.5 2 11 6.5" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
              <path d="M4.5 10C7.5 7 10 6 12 6s4.5 1 7.5 4" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
              <path d="M8 13.5C9.5 12 11 11.5 12 11.5s2.5.5 4 2" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <circle cx="12" cy="17" r="1.5" fill="white" />
            </svg>
            {/* Battery */}
            <svg width="22" height="12" viewBox="0 0 22 12" fill="none">
              <rect x="0.5" y="0.5" width="18" height="11" rx="2.5" stroke="white" strokeWidth="1" />
              <rect x="19.5" y="3.5" width="2" height="5" rx="1" fill="white" />
              <rect x="1.5" y="1.5" width="13" height="9" rx="1.5" fill="white" />
            </svg>
          </div>
        </div>

        {/* Green header section */}
        <div
          className="px-5 pt-4 pb-8 shrink-0"
          style={{ background: "linear-gradient(160deg, #15803d 0%, #16a34a 100%)" }}
        >
          {/* Greeting row */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-green-200 text-xs font-medium mb-0.5">Bom dia 👋</p>
              <p className="text-white text-xl font-bold leading-tight">João Silva</p>
            </div>
            <div className="flex items-center gap-3">
              {/* Notification bell */}
              <button className="relative w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-400 rounded-full ring-1 ring-green-700" />
              </button>
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-white/25 border-2 border-white/50 flex items-center justify-center">
                <span className="text-white font-bold text-sm">JS</span>
              </div>
            </div>
          </div>

          {/* Balance card */}
          <div className="bg-white rounded-3xl p-5 shadow-2xl shadow-black/20">
            <div className="flex items-start justify-between mb-1">
              <p className="text-xs text-gray-500 font-medium">Saldo BioPoints</p>
              <span className="flex items-center gap-1 bg-green-50 text-green-700 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-green-100">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
                Ativo
              </span>
            </div>
            <div className="flex items-end gap-1.5 mt-1 mb-3">
              <span className="text-[42px] font-bold text-gray-900 leading-none tracking-tight">1.240</span>
              <span className="text-base text-gray-400 font-medium mb-1">pontos</span>
            </div>
            <div className="h-px bg-gray-100 mb-3" />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400">Valor estimado</p>
                <p className="text-sm font-bold text-gray-800">R$ 24,80</p>
              </div>
              <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2 rounded-2xl shadow-sm shadow-green-600/30">
                Resgatar
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 px-4 py-4 space-y-4 overflow-y-auto">

          {/* CO2 impact banner */}
          <div
            className="flex items-center gap-3.5 rounded-2xl p-4 text-white"
            style={{ background: "linear-gradient(135deg, #166534 0%, #16a34a 100%)" }}
          >
            <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M17 8C8 10 5.9 16.17 3.82 19.3c-.17.25.12.55.36.38C6.03 18.1 9 17 12 17c3 0 6 .8 8.18 2.68.24.2.54-.1.36-.38C18.1 16.17 16 10 17 8z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-green-200 text-xs font-medium">Impacto ambiental total</p>
              <p className="text-white text-base font-bold mt-0.5">34,1 kg de CO₂ evitados</p>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2" className="w-4 h-4 shrink-0">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-3">
            {quickStats.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-3.5 border border-gray-100 shadow-sm shadow-black/5">
                <p className="text-[10px] text-gray-500 font-medium mb-1.5 uppercase tracking-wide leading-none">{s.label}</p>
                <div className="flex items-baseline gap-0.5">
                  <span className={`text-xl font-bold ${s.color} leading-none`}>{s.value}</span>
                  <span className={`text-xs font-semibold ${s.color} leading-none`}>{s.unit}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Monthly goal */}
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm shadow-black/5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-bold text-gray-800">Meta do mês</p>
              <span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-0.5 rounded-full">420 / 600 pts</span>
            </div>
            <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: "70%",
                  background: "linear-gradient(90deg, #16a34a, #22c55e)",
                }}
              />
            </div>
            <div className="flex justify-between items-center mt-2">
              <p className="text-xs text-gray-400">70% concluído</p>
              <p className="text-xs text-gray-500 font-medium">Faltam <span className="text-gray-700 font-bold">180 pts</span></p>
            </div>
          </div>

          {/* Recent activity */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-bold text-gray-800">Abastecimentos recentes</p>
              <button className="text-xs text-green-600 font-semibold">Ver todos</button>
            </div>
            <div className="space-y-2.5">
              {fuelUps.map((f, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl px-4 py-3.5 flex items-center gap-3 border border-gray-100 shadow-sm shadow-black/5"
                >
                  {/* Fuel icon */}
                  <div className="w-10 h-10 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M3 22h12V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v18zM3 10h12M18 8l3 3v8a2 2 0 0 1-4 0v-3M16 6l2-2 3 3" />
                    </svg>
                  </div>
                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-800 truncate">{f.posto}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{f.volume} · {f.time}</p>
                  </div>
                  {/* Points + CO2 */}
                  <div className="text-right shrink-0">
                    <p className="text-sm font-bold text-green-600">{f.pts} pts</p>
                    <p className="text-xs text-gray-400 mt-0.5">{f.co2} CO₂</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom padding so last item clears the nav bar */}
          <div className="h-2" />
        </div>

        {/* Bottom navigation */}
        <div className="bg-white border-t border-gray-100 px-6 pt-3 pb-6 flex justify-around items-center shrink-0">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              className={`flex flex-col items-center gap-1 min-w-[48px] ${
                tab.active ? "text-green-600" : "text-gray-400"
              }`}
            >
              {tab.icon}
              <span className="text-[10px] font-semibold leading-none">{tab.label}</span>
              {tab.active && (
                <span className="w-1 h-1 rounded-full bg-green-600 mt-0.5" />
              )}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
