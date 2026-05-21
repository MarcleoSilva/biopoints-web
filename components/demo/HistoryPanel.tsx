"use client";

import { useState } from "react";
import { useDemo } from "@/lib/context/DemoContext";

export default function HistoryPanel() {
  const { history } = useDemo();
  const [open, setOpen] = useState(false);

  if (history.length === 0) return null;

  return (
    <div className="mt-8 rounded-2xl border border-gray-100 bg-white">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 hover:bg-gray-50 rounded-2xl transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-gray-700 text-xs font-semibold">
            {history.length}
          </span>
          <span className="text-sm font-medium text-gray-900">
            Histórico de chamadas desta sessão
          </span>
        </div>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className={`text-gray-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div className="border-t border-gray-100 divide-y divide-gray-50">
          {history.map((h) => (
            <details key={h.id} className="group">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-3 px-5 py-3 hover:bg-gray-50">
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className={`inline-flex w-2 h-2 rounded-full ${
                      h.ok ? "bg-green-500" : "bg-red-500"
                    }`}
                  />
                  <span className="text-xs font-mono font-semibold text-gray-700">
                    {h.status}
                  </span>
                  <span className="text-xs font-mono text-gray-600 truncate">
                    {h.method} {h.endpoint}
                  </span>
                </div>
                <span className="text-xs text-gray-400 shrink-0">
                  {new Date(h.timestamp).toLocaleTimeString("pt-BR")}
                </span>
              </summary>
              <div className="px-5 pb-4 space-y-3">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-500 mb-1">
                    Request
                  </div>
                  <pre className="json-block bg-gray-900 text-gray-200 rounded-lg px-3 py-2 text-xs overflow-auto max-h-40">
                    <code>{JSON.stringify(h.request, null, 2)}</code>
                  </pre>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-500 mb-1">
                    Response
                  </div>
                  <pre
                    className={`json-block rounded-lg px-3 py-2 text-xs overflow-auto max-h-40 ${
                      h.ok
                        ? "bg-gray-900 text-green-200"
                        : "bg-gray-900 text-red-200"
                    }`}
                  >
                    <code>{JSON.stringify(h.response, null, 2)}</code>
                  </pre>
                </div>
              </div>
            </details>
          ))}
        </div>
      )}
    </div>
  );
}
