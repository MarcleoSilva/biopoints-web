"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import StepIndicator from "@/components/demo/StepIndicator";
import ApiResponseCard, {
  ApiResponseCardProps,
} from "@/components/demo/ApiResponseCard";
import HistoryPanel from "@/components/demo/HistoryPanel";
import { Field, Input } from "@/components/ui/Input";
import Badge from "@/components/ui/Badge";
import { useDemo } from "@/lib/context/DemoContext";
import { createFuelingEvent, FuelingEventInput } from "@/lib/api";

export default function AbastecimentoPage() {
  const { state, pushHistory } = useDemo();

  const [form, setForm] = useState<FuelingEventInput>({
    plate: state.plate ?? "BHZ-1234",
    liters_dispensed: 40,
  });
  const [resp, setResp] = useState<ApiResponseCardProps>({ status: "idle" });
  const [submitting, setSubmitting] = useState(false);
  const [highlight, setHighlight] = useState<{
    points: number;
    co2: number;
    multiplier: number;
    driverName?: string;
  } | null>(null);

  useEffect(() => {
    setForm((f) => ({ ...f, plate: state.plate ?? f.plate }));
  }, [state.plate]);

  function update<K extends keyof FuelingEventInput>(
    key: K,
    value: FuelingEventInput[K]
  ) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  const plateAutofilled = Boolean(state.plate);
  const canSubmit = Boolean(state.stationId && state.apiKey);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit || !state.stationId || !state.apiKey) return;

    setSubmitting(true);
    setResp({ status: "loading" });
    setHighlight(null);

    const result = await createFuelingEvent(
      state.stationId,
      state.apiKey,
      form
    );

    if (result.ok) {
      setResp({
        status: "success",
        statusCode: result.status,
        method: "POST",
        endpoint: `/stations/${state.stationId}/events`,
        data: result.data,
      });
      const d = result.data as {
        points_awarded?: number;
        co2_saved_g_km?: number;
        efficiency_multiplier?: number;
        driver_name?: string;
      };
      setHighlight({
        points: d.points_awarded ?? 0,
        co2: d.co2_saved_g_km ?? 0,
        multiplier: d.efficiency_multiplier ?? 0,
        driverName: d.driver_name ?? state.driverName,
      });
      pushHistory({
        label: "Evento de abastecimento",
        endpoint: `/stations/${state.stationId}/events`,
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
        endpoint: `/stations/${state.stationId}/events`,
        data: result.error.raw,
        errorMessage: result.error.message,
      });
      pushHistory({
        label: "Evento de abastecimento (erro)",
        endpoint: `/stations/${state.stationId}/events`,
        method: "POST",
        status: result.status,
        ok: false,
        request: form,
        response: result.error.raw,
      });
    }
    setSubmitting(false);
  }

  return (
    <div className="space-y-6">
      <StepIndicator current={4} />

      {/* Highlight result card */}
      {highlight && (
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-600 to-green-700 text-white p-8 lg:p-10 animate-fade-in-up">
          <div
            className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-3xl"
            aria-hidden
          />
          <div className="relative">
            <Badge tone="green" className="bg-white/20 text-white mb-4">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-200 mr-2 animate-pulse" />
              Abastecimento processado pela IA
            </Badge>

            <div className="grid sm:grid-cols-3 gap-6 sm:gap-10 items-end">
              <div className="sm:col-span-2">
                <p className="text-green-100 text-sm">BioPoints concedidos</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-6xl lg:text-7xl font-bold tracking-tight">
                    {highlight.points.toLocaleString("pt-BR", {
                      maximumFractionDigits: 2,
                    })}
                  </span>
                  <span className="text-2xl font-semibold text-green-200">
                    pts
                  </span>
                </div>
                {highlight.driverName && (
                  <p className="mt-2 text-green-100 text-sm">
                    Creditados para{" "}
                    <strong className="text-white">
                      {highlight.driverName}
                    </strong>
                  </p>
                )}
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-baseline justify-between gap-3 border-b border-white/15 pb-2">
                  <span className="text-green-200">CO₂ evitado</span>
                  <span className="font-mono text-white">
                    {highlight.co2.toLocaleString("pt-BR", {
                      maximumFractionDigits: 2,
                    })}{" "}
                    g/km
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-green-200">
                    Multiplicador eficiência
                  </span>
                  <span className="font-mono text-white">
                    ×{" "}
                    {highlight.multiplier.toLocaleString("pt-BR", {
                      maximumFractionDigits: 3,
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 p-6 lg:p-8">
          <header className="mb-6">
            <p className="text-xs font-semibold text-green-700 uppercase tracking-wider mb-1">
              Passo 4 de 4
            </p>
            <h2 className="text-xl font-bold text-gray-900">
              Registrar abastecimento
            </h2>
            <p className="text-sm text-gray-500 mt-1 font-mono">
              POST /stations/{state.stationId ?? ":stationId"}/events
            </p>
            <p className="text-xs text-gray-500 mt-2 font-mono">
              Header: x-api-key
            </p>
          </header>

          {!canSubmit && (
            <div className="mb-6 inline-flex items-start gap-2 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-xs text-red-800">
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
                Você precisa concluir o <strong>passo 2</strong> antes —
                este endpoint exige <code className="font-mono">station_id</code>{" "}
                e <code className="font-mono">api_key</code> ativos.{" "}
                <Link
                  href="/demo/postos"
                  className="underline font-medium"
                >
                  Voltar ao passo 2
                </Link>
              </span>
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-4">
            <Field
              label="Placa do veículo"
              required
              htmlFor="plate"
              badge={
                plateAutofilled ? (
                  <Badge tone="green">preenchida automaticamente</Badge>
                ) : undefined
              }
            >
              <Input
                id="plate"
                value={form.plate}
                onChange={(e) => update("plate", e.target.value)}
                readOnly={plateAutofilled}
                required
                className="font-mono uppercase"
              />
            </Field>

            <Field
              label="Litros abastecidos"
              required
              htmlFor="liters_dispensed"
              hint="Volume de biocombustível dispensado nesta operação."
            >
              <div className="relative">
                <Input
                  id="liters_dispensed"
                  type="number"
                  step="0.1"
                  min="0.1"
                  value={form.liters_dispensed}
                  onChange={(e) =>
                    update(
                      "liters_dispensed",
                      Number(e.target.value || 0)
                    )
                  }
                  required
                  className="pr-12"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 font-medium">
                  L
                </span>
              </div>
            </Field>

            {/* Headers preview */}
            <div className="rounded-lg bg-gray-900 text-gray-300 p-4 font-mono text-xs">
              <div className="text-gray-500 mb-2 uppercase tracking-wider text-[10px]">
                Request preview
              </div>
              <div>
                <span className="text-purple-300">POST</span>{" "}
                <span className="text-green-300">
                  /stations/{state.stationId ?? ":stationId"}/events
                </span>
              </div>
              <div className="mt-1">
                <span className="text-gray-500">x-api-key:</span>{" "}
                <span className="text-amber-300">
                  {state.apiKey
                    ? state.apiKey.slice(0, 6) +
                      "•••••" +
                      state.apiKey.slice(-4)
                    : "(faltando)"}
                </span>
              </div>
              <div className="mt-1">
                <span className="text-gray-500">Content-Type:</span>{" "}
                <span className="text-amber-300">application/json</span>
              </div>
            </div>

            <div className="flex items-center justify-end pt-2">
              <button
                type="submit"
                disabled={submitting || !canSubmit}
                className="inline-flex items-center gap-2 rounded-lg bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-5 py-2.5 text-sm font-medium transition-colors"
              >
                {submitting ? "Calculando…" : "Registrar abastecimento"}
                {!submitting && (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M3.5 8h9m-3-3 3 3-3 3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </form>
        </div>

        <div className="lg:col-span-2">
          <ApiResponseCard {...resp} />
          {resp.status === "success" && (
            <div className="mt-4 rounded-2xl bg-white border border-gray-100 p-5">
              <h3 className="text-sm font-semibold text-gray-900 mb-1">
                Fluxo completo!
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-3">
                Você passou pelo ciclo inteiro da plataforma — do cadastro
                ao crédito de pontos. Pode registrar mais abastecimentos
                ou reiniciar pela barra lateral.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 hover:bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700"
                >
                  Voltar ao site
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 text-xs font-medium"
                >
                  Hub da demo
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <HistoryPanel />

      <div className="flex items-center justify-between pt-2">
        <Link
          href="/demo/motoristas"
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          ← Passo anterior
        </Link>
        <Link
          href="/demo"
          className="text-sm text-green-700 hover:text-green-800 font-medium"
        >
          Voltar ao hub
        </Link>
      </div>
    </div>
  );
}
