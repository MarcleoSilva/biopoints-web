"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import StepIndicator from "@/components/demo/StepIndicator";
import ApiResponseCard, {
  ApiResponseCardProps,
} from "@/components/demo/ApiResponseCard";
import HistoryPanel from "@/components/demo/HistoryPanel";
import { Field, Input } from "@/components/ui/Input";
import Badge from "@/components/ui/Badge";
import { useDemo } from "@/lib/context/DemoContext";
import { createDriver, DriverInput } from "@/lib/api";

const driverDefaults = {
  full_name: "Carlos Eduardo Santos",
  cpf: "12345678900",
  email: "carlos.santos@email.com",
  phone: "+55 71 99999-0001",
};

export default function MotoristasPage() {
  const { state, setDriver, pushHistory } = useDemo();
  const router = useRouter();

  const [form, setForm] = useState<DriverInput>({
    ...driverDefaults,
    vehicle_id: state.vehicleId ?? "",
    enrolled_station_id: state.stationId ?? "",
  });
  const [resp, setResp] = useState<ApiResponseCardProps>({ status: "idle" });
  const [submitting, setSubmitting] = useState(false);

  // Keep auto-filled IDs in sync if the user navigates back and forth.
  useEffect(() => {
    setForm((f) => ({
      ...f,
      vehicle_id: state.vehicleId ?? f.vehicle_id,
      enrolled_station_id: state.stationId ?? f.enrolled_station_id,
    }));
  }, [state.vehicleId, state.stationId]);

  function update<K extends keyof DriverInput>(
    key: K,
    value: DriverInput[K]
  ) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  const vehicleAutofilled = Boolean(state.vehicleId);
  const stationAutofilled = Boolean(state.stationId);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setResp({ status: "loading" });
    const result = await createDriver(form);
    if (result.ok) {
      setResp({
        status: "success",
        statusCode: result.status,
        method: "POST",
        endpoint: "/drivers",
        data: result.data,
      });
      const d = result.data as { driver_id?: string };
      if (d.driver_id) setDriver(d.driver_id, form.full_name);
      pushHistory({
        label: "Cadastro de motorista",
        endpoint: "/drivers",
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
        endpoint: "/drivers",
        data: result.error.raw,
        errorMessage: result.error.message,
      });
      pushHistory({
        label: "Cadastro de motorista (erro)",
        endpoint: "/drivers",
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
      <StepIndicator current={3} />

      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 p-6 lg:p-8">
          <header className="mb-6">
            <p className="text-xs font-semibold text-green-700 uppercase tracking-wider mb-1">
              Passo 3 de 4
            </p>
            <h2 className="text-xl font-bold text-gray-900">
              Cadastrar motorista
            </h2>
            <p className="text-sm text-gray-500 mt-1 font-mono">
              POST /drivers
            </p>
          </header>

          {(!state.vehicleId || !state.stationId) && (
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
                Você ainda não concluiu os passos anteriores —{" "}
                <code className="font-mono">vehicle_id</code> e{" "}
                <code className="font-mono">enrolled_station_id</code>{" "}
                precisarão ser preenchidos manualmente.
              </span>
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-4">
            <Field label="Nome completo" required htmlFor="full_name">
              <Input
                id="full_name"
                value={form.full_name}
                onChange={(e) => update("full_name", e.target.value)}
                required
              />
            </Field>

            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="CPF" required htmlFor="cpf">
                <Input
                  id="cpf"
                  value={form.cpf}
                  onChange={(e) => update("cpf", e.target.value)}
                  required
                />
              </Field>
              <Field label="Telefone" required htmlFor="phone">
                <Input
                  id="phone"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  required
                />
              </Field>
            </div>

            <Field label="E-mail" required htmlFor="email">
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                required
              />
            </Field>

            <Field
              label="ID do Veículo"
              required
              htmlFor="vehicle_id"
              badge={
                vehicleAutofilled ? (
                  <Badge tone="green">preenchido automaticamente</Badge>
                ) : undefined
              }
            >
              <Input
                id="vehicle_id"
                value={form.vehicle_id}
                onChange={(e) => update("vehicle_id", e.target.value)}
                readOnly={vehicleAutofilled}
                placeholder="Preenchido após o passo 1"
                required
                className="font-mono"
              />
            </Field>

            <Field
              label="ID do Posto"
              required
              htmlFor="enrolled_station_id"
              badge={
                stationAutofilled ? (
                  <Badge tone="green">preenchido automaticamente</Badge>
                ) : undefined
              }
            >
              <Input
                id="enrolled_station_id"
                value={form.enrolled_station_id}
                onChange={(e) =>
                  update("enrolled_station_id", e.target.value)
                }
                readOnly={stationAutofilled}
                placeholder="Preenchido após o passo 2"
                required
                className="font-mono"
              />
            </Field>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() =>
                  setForm({
                    ...driverDefaults,
                    vehicle_id: state.vehicleId ?? "",
                    enrolled_station_id: state.stationId ?? "",
                  })
                }
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Restaurar exemplo
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 rounded-lg bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white px-5 py-2.5 text-sm font-medium transition-colors"
              >
                {submitting ? "Enviando…" : "Cadastrar motorista"}
              </button>
            </div>
          </form>
        </div>

        <div className="lg:col-span-2">
          <ApiResponseCard {...resp} />
          {resp.status === "success" && (
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => router.push("/demo/abastecimento")}
                className="inline-flex items-center gap-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 text-sm font-medium"
              >
                Próximo: registrar abastecimento →
              </button>
            </div>
          )}
        </div>
      </div>

      <HistoryPanel />

      <div className="flex items-center justify-between pt-2">
        <Link
          href="/demo/postos"
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          ← Passo anterior
        </Link>
        <Link
          href="/demo/abastecimento"
          className="text-sm text-green-700 hover:text-green-800 font-medium"
        >
          Pular para passo 4 →
        </Link>
      </div>
    </div>
  );
}
