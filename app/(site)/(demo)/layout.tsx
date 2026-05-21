import Link from "next/link";
import DemoSidebar from "@/components/demo/DemoSidebar";
import { BASE_URL } from "@/lib/api";

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-50 min-h-[calc(100vh-4rem)]">
      {/* Demo header */}
      <div className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
              <Link href="/" className="hover:text-gray-900">
                Início
              </Link>
              <span>/</span>
              <span className="text-gray-700">Demonstração</span>
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
              Área de demonstração da API
            </h1>
            <p className="text-sm text-gray-600 mt-1 max-w-2xl">
              Teste cada endpoint do backend BioPoints diretamente do
              navegador. O estado é mantido entre os passos.
            </p>
          </div>
          <div className="text-xs font-mono bg-gray-50 border border-gray-200 text-gray-600 rounded-md px-3 py-2">
            <span className="text-gray-400">API:</span> {BASE_URL}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <DemoSidebar />
          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </div>
    </div>
  );
}
