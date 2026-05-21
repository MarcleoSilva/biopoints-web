"use client";

import Badge from "@/components/ui/Badge";

const fuelUps = [
  { posto: "Shell — Av. Paralela", pts: "+320 pts", co2: "−12,4 kg", time: "Hoje, 14h32" },
  { posto: "Posto BR — Centro", pts: "+185 pts", co2: "−7,2 kg", time: "Ontem, 08h10" },
  { posto: "Ipiranga — Norte", pts: "+240 pts", co2: "−9,3 kg", time: "Seg, 17h55" },
];

const bottomNav = [
  {
    label: "Início",
    active: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    label: "Histórico",
    active: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
        <path d="M12 8v4l3 3" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    label: "Créditos",
    active: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v2M12 16v2M8.5 9.5a3 3 0 0 1 5.5 1c0 2-3 3-3 3M12 14h.01" />
      </svg>
    ),
  },
  {
    label: "Perfil",
    active: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
];

function PhoneScreen() {
  return (
    <div className="w-full h-full bg-gray-50 flex flex-col overflow-hidden">
      {/* Status bar */}
      <div className="bg-white pt-7 pb-1 px-5 flex items-center justify-between shrink-0">
        <span className="text-[9px] font-bold text-gray-800 tracking-tight">9:41</span>
        <div className="flex items-center gap-1">
          {/* Signal bars */}
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <rect x="0" y="6" width="2.5" height="4" rx="0.5" fill="#1f2937" />
            <rect x="3.5" y="4" width="2.5" height="6" rx="0.5" fill="#1f2937" />
            <rect x="7" y="2" width="2.5" height="8" rx="0.5" fill="#1f2937" />
            <rect x="10.5" y="0" width="2.5" height="10" rx="0.5" fill="#d1d5db" />
          </svg>
          {/* Battery */}
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
            <rect x="0.5" y="0.5" width="15" height="9" rx="2" stroke="#1f2937" strokeWidth="1" />
            <rect x="16" y="3" width="2" height="4" rx="1" fill="#1f2937" />
            <rect x="1.5" y="1.5" width="10" height="7" rx="1.5" fill="#16a34a" />
          </svg>
        </div>
      </div>

      {/* Greeting header */}
      <div className="bg-white px-4 pt-1 pb-3 flex items-center justify-between border-b border-gray-100 shrink-0">
        <div>
          <p className="text-[7px] text-gray-400 leading-none mb-0.5">Bem-vindo de volta</p>
          <p className="text-[10px] font-bold text-gray-900">João Silva</p>
        </div>
        <div className="relative">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center ring-2 ring-green-100">
            <span className="text-white font-bold text-[7px]">JS</span>
          </div>
          <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-red-500 ring-1 ring-white" />
        </div>
      </div>

      {/* Balance card */}
      <div className="mx-3 mt-3 rounded-2xl bg-gradient-to-br from-green-600 via-green-700 to-green-800 p-3 text-white relative overflow-hidden shrink-0">
        <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-white/10" />
        <div className="absolute bottom-0 right-6 w-12 h-12 rounded-full bg-white/5" />
        <p className="text-[7px] text-green-200 relative">Seus BioPoints</p>
        <div className="flex items-baseline gap-1 relative">
          <span className="text-[28px] font-bold leading-tight tracking-tight">1.240</span>
          <span className="text-[8px] text-green-300 font-medium">pts</span>
        </div>
        <p className="text-[7px] text-green-200 relative">≈ R$ 24,80 em créditos</p>
        <div className="mt-2 flex items-center gap-1.5 relative">
          <span className="flex items-center gap-1 bg-white/15 rounded-full px-2 py-0.5">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-2 h-2 text-green-200">
              <path d="M7 17l10-10M17 17V7H7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[6.5px] text-green-100 font-medium">34,1 kg CO₂ evitados</span>
          </span>
        </div>
      </div>

      {/* Mini stat cards */}
      <div className="mx-3 mt-2 grid grid-cols-2 gap-2 shrink-0">
        <div className="bg-white rounded-xl p-2.5 border border-gray-100">
          <div className="flex items-center gap-1 mb-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" className="w-2.5 h-2.5">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-[6px] text-gray-500 uppercase tracking-wide">Este mês</p>
          </div>
          <p className="text-[11px] font-bold text-gray-900">+420 pts</p>
        </div>
        <div className="bg-white rounded-xl p-2.5 border border-gray-100">
          <div className="flex items-center gap-1 mb-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" className="w-2.5 h-2.5">
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 5.477 10 10-4.477 10-10 10zm-1-7l-3-3 1.4-1.4L11 12.2l4.6-4.6L17 9l-6 6z" strokeLinecap="round" />
            </svg>
            <p className="text-[6px] text-gray-500 uppercase tracking-wide">CO₂ Economizado</p>
          </div>
          <p className="text-[11px] font-bold text-green-600">16,3 kg</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mx-3 mt-2 bg-white rounded-xl p-2.5 border border-gray-100 shrink-0">
        <div className="flex justify-between items-center mb-1.5">
          <p className="text-[7px] font-semibold text-gray-700">Meta do mês</p>
          <p className="text-[6.5px] text-green-600 font-medium">420 / 600 pts</p>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full w-[70%] bg-gradient-to-r from-green-500 to-green-600 rounded-full" />
        </div>
        <p className="text-[6px] text-gray-400 mt-1">70% — faltam 180 pts</p>
      </div>

      {/* Recent fuelups */}
      <div className="mx-3 mt-2 flex-1 min-h-0">
        <p className="text-[7.5px] font-bold text-gray-700 mb-1.5">Abastecimentos Recentes</p>
        <div className="flex flex-col gap-1.5">
          {fuelUps.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-xl px-2.5 py-2 flex items-center gap-2 border border-gray-100"
            >
              <div className="w-5 h-5 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="1.8" className="w-3 h-3">
                  <path d="M3 22h12V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v18zM3 10h12M18 8l3 3v8a2 2 0 0 1-4 0v-3M16 6l2-2 3 3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[7px] font-semibold text-gray-800 truncate">{f.posto}</p>
                <p className="text-[6px] text-gray-400">{f.time}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-[7px] font-bold text-green-600">{f.pts}</p>
                <p className="text-[6px] text-gray-400">{f.co2} CO₂</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <div className="bg-white border-t border-gray-100 px-4 py-2 flex items-center justify-around shrink-0">
        {bottomNav.map((tab) => (
          <div
            key={tab.label}
            className={`flex flex-col items-center gap-0.5 ${
              tab.active ? "text-green-600" : "text-gray-400"
            }`}
          >
            {tab.icon}
            <span className="text-[5.5px] font-semibold">{tab.label}</span>
            {tab.active && (
              <div className="w-1 h-1 rounded-full bg-green-600" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Ambient glow */}
      <div
        className="absolute w-72 h-72 rounded-full bg-green-400/20 blur-3xl"
        aria-hidden
      />

      {/* Floating badge — top right */}
      <div
        className="absolute -top-2 -right-6 lg:-right-10 bg-white border border-green-100 rounded-2xl px-3 py-2 shadow-lg shadow-green-900/10 z-10 flex items-center gap-2"
        aria-hidden
      >
        <div className="w-6 h-6 rounded-lg bg-green-100 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" className="w-3.5 h-3.5">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14l-4-4 1.41-1.41L11 13.17l6.59-6.59L19 8l-8 8z" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <p className="text-[9px] font-bold text-gray-800">+320 BioPoints</p>
          <p className="text-[7px] text-gray-500">Abastecimento validado</p>
        </div>
      </div>

      {/* Floating badge — bottom left */}
      <div
        className="absolute -bottom-2 -left-6 lg:-left-12 bg-white border border-green-100 rounded-2xl px-3 py-2 shadow-lg shadow-green-900/10 z-10 flex items-center gap-2"
        aria-hidden
      >
        <div className="w-6 h-6 rounded-lg bg-green-50 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" className="w-3.5 h-3.5">
            <path d="M17 8C8 10 5.9 16.17 3.82 19.3c-.17.25.12.55.36.38C6.03 18.1 9 17 12 17c3 0 6 .8 8.18 2.68.24.2.54-.1.36-.38C18.1 16.17 16 10 17 8z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p className="text-[9px] font-bold text-green-700">−12,4 kg CO₂</p>
          <p className="text-[7px] text-gray-500">Emissão evitada hoje</p>
        </div>
      </div>

      {/* Phone frame */}
      <div className="relative w-[230px] h-[470px] bg-gray-900 rounded-[44px] p-[9px] shadow-2xl shadow-black/40 ring-1 ring-white/10 z-0">
        {/* Volume buttons (left) */}
        <div className="absolute -left-[3.5px] top-[88px] w-[3.5px] h-7 bg-gray-700 rounded-l-sm" aria-hidden />
        <div className="absolute -left-[3.5px] top-[128px] w-[3.5px] h-[52px] bg-gray-700 rounded-l-sm" aria-hidden />
        <div className="absolute -left-[3.5px] top-[188px] w-[3.5px] h-[52px] bg-gray-700 rounded-l-sm" aria-hidden />
        {/* Power button (right) */}
        <div className="absolute -right-[3.5px] top-[130px] w-[3.5px] h-[62px] bg-gray-700 rounded-r-sm" aria-hidden />

        {/* Screen bezel */}
        <div className="w-full h-full bg-white rounded-[36px] overflow-hidden">
          <PhoneScreen />
        </div>
      </div>
    </div>
  );
}

export default function AppShowcase() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background blobs */}
      <div
        className="hero-blob"
        style={{ background: "#bbf7d0", width: 480, height: 480, bottom: -180, left: -80 }}
        aria-hidden
      />
      <div
        className="hero-blob"
        style={{ background: "#dcfce7", width: 320, height: 320, top: 60, left: 200 }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-dot-grid opacity-30" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div className="order-2 lg:order-1">
            <Badge tone="green" className="mb-6">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-600 mr-2 animate-pulse" />
              App em desenvolvimento
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.05]">
              O impacto que você gera{" "}
              <span className="text-green-600">na palma da mão.</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-lg">
              O aplicativo BioPoints permite acompanhar em tempo real seus
              pontos acumulados, as emissões de CO₂ evitadas e resgatar
              créditos diretamente no posto parceiro.
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {[
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-green-600" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm-1 14l-4-4 1.41-1.41L11 13.17l6.59-6.59L19 8l-8 8z" />
                    </svg>
                  ),
                  title: "Dashboard em tempo real",
                  desc: "Saldo de pontos, CO₂ evitado e metas mensais sempre atualizados.",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-green-600" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 22h12V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v18zM3 10h12M18 8l3 3v8a2 2 0 0 1-4 0v-3M16 6l2-2 3 3" />
                    </svg>
                  ),
                  title: "Histórico de abastecimentos",
                  desc: "Cada litro de biocombustível registrado com posto, data e impacto calculado.",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-green-600" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 1v22M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6" />
                    </svg>
                  ),
                  title: "Resgate de créditos",
                  desc: "Converta BioPoints em desconto direto no próximo abastecimento.",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="shrink-0 mt-0.5 w-9 h-9 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* App store placeholders */}
            <div className="mt-10 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2.5 rounded-xl border border-gray-200 bg-gray-900 px-4 py-2.5 text-white cursor-default select-none">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <p className="text-[9px] text-gray-400 leading-none">Em breve na</p>
                  <p className="text-[12px] font-semibold leading-tight">App Store</p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2.5 rounded-xl border border-gray-200 bg-gray-900 px-4 py-2.5 text-white cursor-default select-none">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
                  <path d="M3.18 23.76c.35.2.76.19 1.12-.01L15.34 17l-3.14-3.15-9.02 9.91zM20.5 10.46l-2.79-1.63-3.4 3.18 3.4 3.18 2.81-1.63c.8-.47.8-1.63-.02-2.1zM2.1.33C1.73.54 1.5.93 1.5 1.38v21.25c0 .45.23.84.6 1.05l.1.06 11.9-11.9v-.28L2.1.33zm12.15 12.82l3.14-3.15-11.04-6.4L6.3 3.6l7.95 9.55z" />
                </svg>
                <div>
                  <p className="text-[9px] text-gray-400 leading-none">Em breve no</p>
                  <p className="text-[12px] font-semibold leading-tight">Google Play</p>
                </div>
              </div>
            </div>
          </div>

          {/* Phone mockup side */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
