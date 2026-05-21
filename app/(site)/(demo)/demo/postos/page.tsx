"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import StepIndicator from "@/components/demo/StepIndicator";
import ApiResponseCard, {
  ApiResponseCardProps,
} from "@/components/demo/ApiResponseCard";
import HistoryPanel from "@/components/demo/HistoryPanel";
import { Field, Input } from "@/components/ui/Input";
import { useDemo } from "@/lib/context/DemoContext";
import { createStation, StationInput } from "@/lib/api";

const defaultValues: StationInput = {
  company_name: "Posto BioMax Salvador",
  cnpj: "12345678000199",
  address: "Av. Tancredo Neves, 620 - Caminho das Árvores",
  city: "Salvador",
  state: "Bahia",
};

export default function PostosPage() {
  const { state, setStation, pushHistory } = useDemo();
  const router = useRouter();
  const [form, setForm] = useState<StationInput>(defaultValues);
  const [resp, setResp] = useState<ApiResponseCardProps>({ status: "idle" });
  const [submitting, setSubmitting] = useState(false);
  const [apiKeyCopied, setApiKeyCopied] = useState(false);

  function update<K extends keyof StationInput>(
    key: K,
    value: StationInput[K]
  ) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setResp({ status: "loading" });
    const result = await createStation(form);
    if (result.ok) {
      setResp({
        status: "success",
        statusCode: result.status,
        method: "POST",
        endpoint: "/stations",
        data: result.data,
      });
      const d = result.data as {
        station_id?: string;
        api_key?: string;
      };
      if (d.station_id && d.api_key) setStation(d.station_id, d.api_key);
      pushHistory({
        label: "Cadastro de posto",
        endpoint: "/stations",
        method: "POST",
        status: result.status,
        ok: true,
        request: form,
        response: result.data,
      });
    } else {
      setResp({
        status: "error",
        statusCode: result.status,
        method: "POST",
        endpoint: "/stations",
        data: result.error.raw,
        errorMessage: result.error.message,
      });
      pushHistory({
        label: "Cadastro de posto (erro)",
        endpoint: "/stations",
        method: "POST",
        status: result.status,
        ok: false,
        request: form,
        response: result.error.raw,
      });
    }
    setSubmitting(false);
  }

  async function copyApiKey() {
    if (!state.apiKey) return;
    try {
      await navigator.clipboard.writeText(state.apiKey);
      setApiKeyCopied(true);
      setTimeout(() => setApiKeyCopied(false), 1500);
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="space-y-6">
      <StepIndicator current={2} />

      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8">
            <header className="mb-6">
              <p className="text-xs font-semibold text-green-700 uppercase tracking-wider mb-1">
                Passo 2 de 4
              </p>
              <h2 className="text-xl font-bold text-gray-900">
                Cadastrar posto parceiro
              </h2>
              <p className="text-sm text-gray-500 mt-1 font-mono">
                POST /stations
              </p>
            </header>

            <div className="mb-6 inline-flex items-start gap-2 rounded-lg bg-amber-50 border border-amber-200 px-4 py-3 text-xs text-amber-900">
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
                Guarde a <strong>API Key</strong> retornada — ela será
                necessária no passo 4 (header{" "}
                <code className="font-mono">x-api-key</code>).
              </span>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              <Field label="Nome do posto" required htmlFor="company_name">
                <Input
                  id="company_name"
                  value={form.company_name}
                  onChange={(e) => update("company_name", e.target.value)}
                  required
                />
              </Field>
              <Field label="CNPJ" required htmlFor="cnpj">
                <Input
                  id="cnpj"
                  value={form.cnpj}
                  onChange={(e) => update("cnpj", e.target.value)}
                  required
                />
              </Field>
              <Field label="Endereço" required htmlFor="address">
                <Input
                  id="address"
                  value={form.address}
                  onChange={(e) => update("address", e.target.value)}
                  required
                />
              </Field>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Cidade" required htmlFor="city">
                  <Input
                    id="city"
                    value={form.city}
                    onChange={(e) => update("city", e.target.value)}
                    required
                  />
                </Field>
                <Field label="Estado" required htmlFor="state">
                  <Input
                    id="state"
                    value={form.state}
                    onChange={(e) => update("state", e.target.value)}
                    required
                  />
                </Field>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setForm(defaultValues)}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Restaurar exemplo
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 rounded-lg bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white px-5 py-2.5 text-sm font-medium transition-colors"
                >
                  {submitting ? "Enviando…" : "Cadastrar posto"}
                </button>
              </div>
            </form>
          </div>

          {/* API key callout */}
          {state.apiKey && (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-white">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2.5 6.5l2.5 2.5L9.5 3.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className="font-semibold text-green-900 text-sm">
                  API Key gerada
                </h3>
              </div>
              <p className="text-xs text-green-800 mb-3">
                Esta chave autentica as requisições do posto na rota de
                eventos de abastecimento.
              </p>
              <div className="flex items-center gap-2 bg-white border border-green-200 rounded-lg p-2">
                <code className="flex-1 font-mono text-sm text-gray-800 truncate px-2">
                  {state.apiKey}
                </code>
                <button
                  onClick={copyApiKey}
                  className="text-xs px-3 py-1.5 rounded-md bg-green-600 hover:bg-green-700 text-white font-medium transition-colors"
                >
                  {apiKeyCopied ? "✓ Copiado" : "Copiar"}
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="lg:col-span-2">
          <ApiResponseCard {...resp} />
          {resp.status === "success" && (
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => router.push("/demo/motoristas")}
                className="inline-flex items-center gap-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 text-sm font-medium"
              >
                Próximo: cadastrar motorista →
              </button>
            </div>
          )}
        </div>
      </div>

      <HistoryPanel />

      <div className="flex items-center justify-between pt-2">
        <Link
          href="/demo/veiculos"
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          ← Passo anterior
        </Link>
        <Link
          href="/demo/motoristas"
          className="text-sm text-green-700 hover:text-green-800 font-medium"
        >
          Pular para passo 3 →
        </Link>
      </div>
    </div>
  );
}
