import Link from "next/link";
import Logo from "@/components/ui/Logo";
const links = [
  { href: "/como-funciona", label: "Como Funciona" },
  { href: "/creditos-de-carbono", label: "Créditos de Carbono" },
  { href: "/sobre", label: "Sobre" },
  { href: "/demo", label: "Demo" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <img src="/icon.svg" alt="BioPoints logo" width={32} height={32} />
              <Logo className="text-lg" />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
              Transformando biocombustível em recompensa.
              <br />
              Salvador, Bahia.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Navegação
            </h3>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-700 hover:text-green-700"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Domínios
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Cidades Inteligentes</li>
              <li>Mudanças Climáticas</li>
              <li>Transição Energética</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs text-gray-500 max-w-xl leading-relaxed">
            Projeto apresentado no Hackaton no evento BaIA, 2026 — piloto em Salvador, Bahia. Dados de impacto
            com fontes referenciadas.
          </p>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} BioPoints
          </p>
        </div>
      </div>
    </footer>
  );
}
