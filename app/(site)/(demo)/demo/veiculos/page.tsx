"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import StepIndicator from "@/components/demo/StepIndicator";
import ApiResponseCard, {
  ApiResponseCardProps,
} from "@/components/demo/ApiResponseCard";
import HistoryPanel from "@/components/demo/HistoryPanel";
import { Field, Input, Select } from "@/components/ui/Input";
import { useDemo } from "@/lib/context/DemoContext";
import { createVehicle, VehicleInput } from "@/lib/api";

const defaultValues: VehicleInput = {
  plate: "BHZ-1234",
  brand: "Volkswagen",
  model: "Delivery 9.170",
  year: 2021,
  vehicle_type: "truck",
  engine_size_l: 5.9,
  cylinders: 6,
  transmission: "M6",
  fuel_type: "D",
  fuel_consumption_comb: 12.5,
};

export default function VeiculosPage() {
  const { setVehicle, pushHistory } = useDemo();
  const router = useRouter();
  const [form, setForm] = useState<VehicleInput>(defaultValues);
  const [resp, setResp] = useState<ApiResponseCardProps>({ status: "idle" });
  const [submitting, setSubmitting] = useState(false);

  function update<K extends keyof VehicleInput>(
    key: K,
    value: VehicleInput[K]
  ) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setResp({ status: "loading" });
    const result = await createVehicle(form);
    if (result.ok) {
      setResp({
        status: "success",
        statusCode: result.status,
        method: "POST",
        endpoint: "/vehicles",
        data: result.data,
      });
      const vehicleId = (result.data as { vehicle_id?: string }).vehicle_id;
      if (vehicleId) setVehicle(vehicleId, form.plate);
      pushHistory({
        label: "Cadastro de veículo",
        endpoint: "/vehicles",
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
        endpoint: "/vehicles",
        data: result.error.raw,
        errorMessage: result.error.message,
      });
      pushHistory({
        label: "Cadastro de veículo (erro)",
        endpoint: "/vehicles",
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
      <StepIndicator current={1} />

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Form */}
        <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 p-6 lg:p-8">
          <header className="mb-6">
            <p className="text-xs font-semibold text-green-700 uppercase tracking-wider mb-1">
              Passo 1 de 4
            </p>
            <h2 className="text-xl font-bold text-gray-900">
              Cadastrar veículo
            </h2>
            <p className="text-sm text-gray-500 mt-1 font-mono">
              POST /vehicles
            </p>
          </header>

          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Placa" required htmlFor="plate">
                <Input
                  id="plate"
                  value={form.plate}
                  onChange={(e) => update("plate", e.target.value)}
                  required
                />
              </Field>
              <Field label="Ano" required htmlFor="year">
                <Input
                  id="year"
                  type="number"
                  value={form.year}
                  onChange={(e) =>
                    update("year", Number(e.target.value || 0))
                  }
                  required
                />
              </Field>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Marca" required htmlFor="brand">
                <Input
                  id="brand"
                  value={form.brand}
                  onChange={(e) => update("brand", e.target.value)}
                  required
                />
              </Field>
              <Field label="Modelo" required htmlFor="model">
                <Input
                  id="model"
                  value={form.model}
                  onChange={(e) => update("model", e.target.value)}
                  required
                />
              </Field>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Tipo de veículo" required htmlFor="vehicle_type">
                <Select
                  id="vehicle_type"
                  value={form.vehicle_type}
                  onChange={(e) => update("vehicle_type", e.target.value)}
                >
                  <option value="carro">Carro</option>
                  <option value="SUV">SUV</option>
                  <option value="truck">Caminhão</option>
                  <option value="van">Van</option>
                </Select>
              </Field>
              <Field label="Transmissão" required htmlFor="transmission">
                <Select
                  id="transmission"
                  value={form.transmission}
                  onChange={(e) => update("transmission", e.target.value)}
                >
                  <option value="M5">M5 — Manual 5 marchas</option>
                  <option value="M6">M6 — Manual 6 marchas</option>
                  <option value="A6">A6 — Automática 6 marchas</option>
                  <option value="A8">A8 — Automática 8 marchas</option>
                </Select>
              </Field>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <Field
                label="Cilindrada (L)"
                required
                htmlFor="engine_size_l"
                hint="ex.: 1.8"
              >
                <Input
                  id="engine_size_l"
                  type="number"
                  step="0.1"
                  value={form.engine_size_l}
                  onChange={(e) =>
                    update("engine_size_l", Number(e.target.value || 0))
                  }
                  required
                />
              </Field>
              <Field label="Cilindros" required htmlFor="cylinders">
                <Input
                  id="cylinders"
                  type="number"
                  value={form.cylinders}
                  onChange={(e) =>
                    update("cylinders", Number(e.target.value || 0))
                  }
                  required
                />
              </Field>
              <Field label="Combustível" required htmlFor="fuel_type">
                <Select
                  id="fuel_type"
                  value={form.fuel_type}
                  onChange={(e) => update("fuel_type", e.target.value)}
                >
                  <option value="D">D — Diesel</option>
                  <option value="E">E — Etanol</option>
                  <option value="X">X — Gasolina</option>
                </Select>
              </Field>
            </div>

            <Field
              label="Consumo combinado (L/100km)"
              required
              htmlFor="fuel_consumption_comb"
              hint="Quanto menor, mais eficiente — o que aumenta o multiplicador de eficiência."
            >
              <Input
                id="fuel_consumption_comb"
                type="number"
                step="0.1"
                value={form.fuel_consumption_comb}
                onChange={(e) =>
                  update(
                    "fuel_consumption_comb",
                    Number(e.target.value || 0)
                  )
                }
                required
              />
            </Field>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => setForm(defaultValues)}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Restaurar exemplo
              </button>
              <div className="flex items-center gap-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 rounded-lg bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white px-5 py-2.5 text-sm font-medium transition-colors"
                >
                  {submitting ? "Enviando…" : "Cadastrar veículo"}
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Response */}
        <div className="lg:col-span-2">
          <ApiResponseCard {...resp} />
          {resp.status === "success" && (
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => router.push("/demo/postos")}
                className="inline-flex items-center gap-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 text-sm font-medium"
              >
                Próximo: cadastrar posto →
              </button>
            </div>
          )}
        </div>
      </div>

      <HistoryPanel />

      <div className="flex items-center justify-between pt-2">
        <Link
          href="/demo"
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          ← Voltar ao hub
        </Link>
        <Link
          href="/demo/postos"
          className="text-sm text-green-700 hover:text-green-800 font-medium"
        >
          Pular para passo 2 →
        </Link>
      </div>
    </div>
  );
}
