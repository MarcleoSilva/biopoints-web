"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

export type DemoState = {
  vehicleId?: string;
  plate?: string;
  stationId?: string;
  apiKey?: string;
  driverId?: string;
  driverName?: string;
};

export type HistoryEntry = {
  id: string;
  label: string;
  endpoint: string;
  method: string;
  status: number;
  ok: boolean;
  request: unknown;
  response: unknown;
  timestamp: string;
};

type DemoContextValue = {
  state: DemoState;
  history: HistoryEntry[];
  setVehicle: (vehicleId: string, plate: string) => void;
  setStation: (stationId: string, apiKey: string) => void;
  setDriver: (driverId: string, name?: string) => void;
  pushHistory: (entry: Omit<HistoryEntry, "id" | "timestamp">) => void;
  reset: () => void;
};

const DemoContext = createContext<DemoContextValue | undefined>(undefined);

const STORAGE_KEY = "biopoints.demoState.v1";
const HISTORY_KEY = "biopoints.demoHistory.v1";

export function DemoProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DemoState>({});
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  // Rehydrate from sessionStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const s = sessionStorage.getItem(STORAGE_KEY);
      if (s) setState(JSON.parse(s));
      const h = sessionStorage.getItem(HISTORY_KEY);
      if (h) setHistory(JSON.parse(h));
    } catch {
      // ignore
    }
  }, []);

  // Persist to sessionStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* ignore */
    }
  }, [state]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      sessionStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    } catch {
      /* ignore */
    }
  }, [history]);

  const setVehicle = useCallback((vehicleId: string, plate: string) => {
    setState((s) => ({ ...s, vehicleId, plate }));
  }, []);

  const setStation = useCallback((stationId: string, apiKey: string) => {
    setState((s) => ({ ...s, stationId, apiKey }));
  }, []);

  const setDriver = useCallback((driverId: string, name?: string) => {
    setState((s) => ({ ...s, driverId, driverName: name }));
  }, []);

  const pushHistory = useCallback(
    (entry: Omit<HistoryEntry, "id" | "timestamp">) => {
      setHistory((h) => [
        {
          ...entry,
          id: crypto.randomUUID
            ? crypto.randomUUID()
            : String(Date.now() + Math.random()),
          timestamp: new Date().toISOString(),
        },
        ...h,
      ]);
    },
    []
  );

  const reset = useCallback(() => {
    setState({});
    setHistory([]);
  }, []);

  const value = useMemo(
    () => ({
      state,
      history,
      setVehicle,
      setStation,
      setDriver,
      pushHistory,
      reset,
    }),
    [state, history, setVehicle, setStation, setDriver, pushHistory, reset]
  );

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
}

export function useDemo() {
  const ctx = useContext(DemoContext);
  if (!ctx)
    throw new Error("useDemo must be used inside <DemoProvider>");
  return ctx;
}
