/**
 * API client for the BioPoints NestJS backend.
 * All requests are made from the client (browser) so reviewers can inspect them in DevTools.
 */

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000";

export type ApiError = {
  status: number;
  message: string;
  raw: unknown;
};

export type ApiResult<T> =
  | { ok: true; status: number; data: T }
  | { ok: false; status: number; error: ApiError };

async function request<T>(
  path: string,
  init: RequestInit = {}
): Promise<ApiResult<T>> {
  const url = `${BASE_URL}${path}`;
  try {
    const res = await fetch(url, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...(init.headers ?? {}),
      },
    });

    let data: unknown = null;
    const text = await res.text();
    if (text) {
      try {
        data = JSON.parse(text);
      } catch {
        data = text;
      }
    }

    if (!res.ok) {
      return {
        ok: false,
        status: res.status,
        error: {
          status: res.status,
          message:
            (data as { message?: string })?.message ??
            `Erro ${res.status} ao chamar ${path}`,
          raw: data,
        },
      };
    }

    return { ok: true, status: res.status, data: data as T };
  } catch (err) {
    return {
      ok: false,
      status: 0,
      error: {
        status: 0,
        message:
          "Não foi possível conectar à API. Verifique se o backend NestJS está rodando em " +
          BASE_URL,
        raw: String(err),
      },
    };
  }
}

/* ------------------------- DTOs ------------------------- */

export type VehicleInput = {
  plate: string;
  brand: string;
  model: string;
  year: number;
  vehicle_type: string;
  engine_size_l: number;
  cylinders: number;
  transmission: string;
  fuel_type: string;
  fuel_consumption_comb: number;
};

export type VehicleResponse = {
  vehicle_id: string;
  is_biodiesel_compatible?: boolean;
  [k: string]: unknown;
};

export type StationInput = {
  company_name: string;
  cnpj: string;
  address: string;
  city: string;
  state: string;
};

export type StationResponse = {
  station_id: string;
  api_key: string;
  [k: string]: unknown;
};

export type DriverInput = {
  full_name: string;
  cpf: string;
  email: string;
  phone: string;
  vehicle_id: string;
  enrolled_station_id: string;
};

export type DriverResponse = {
  driver_id: string;
  is_eligible?: boolean;
  point_balance?: number;
  [k: string]: unknown;
};

export type FuelingEventInput = {
  plate: string;
  liters_dispensed: number;
};

export type FuelingEventResponse = {
  event_id: string;
  points_awarded: number;
  co2_saved_g_km: number;
  efficiency_multiplier: number;
  driver_name?: string;
  [k: string]: unknown;
};

/* ------------------------- Endpoints ------------------------- */

export function createVehicle(input: VehicleInput) {
  return request<VehicleResponse>("/vehicles", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export function createStation(input: StationInput) {
  return request<StationResponse>("/stations", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export function createDriver(input: DriverInput) {
  return request<DriverResponse>("/drivers", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export function createFuelingEvent(
  stationId: string,
  apiKey: string,
  input: FuelingEventInput
) {
  return request<FuelingEventResponse>(`/stations/${stationId}/events`, {
    method: "POST",
    headers: { "x-api-key": apiKey },
    body: JSON.stringify(input),
  });
}

export { BASE_URL };
