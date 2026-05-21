"use client";

import { useState } from "react";

export type ApiResponseCardProps = {
  status: "idle" | "loading" | "success" | "error";
  statusCode?: number;
  method?: string;
  endpoint?: string;
  data?: unknown;
  errorMessage?: string;
};

export default function ApiResponseCard({
  status,
  statusCode,
  method,
  endpoint,
  data,
  errorMessage,
}: ApiResponseCardProps) {
  const [copied, setCopied] = useState(false);

  const json = data !== undefined ? JSON.stringify(data, null, 2) : "";

  const copy = async () => {
    if (!json) return;
    try {
      await navigator.clipboard.writeText(json);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignore */
    }
  };

  if (status === "idle") {
    return (
      <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-8 h-full flex items-center justify-center text-center">
        <div>
          <div className="text-gray-400 mb-3">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              className="mx-auto"
            >
              <path
                d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-sm text-gray-500">
            A resposta da API aparecerá aqui após o envio do formulário.
          </p>
        </div>
      </div>
    );
  }

  if (status === "loading") {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-8 h-full flex items-center justify-center">
        <div className="flex items-center gap-3 text-gray-600 text-sm">
          <span className="inline-block w-4 h-4 rounded-full border-2 border-green-600 border-t-transparent animate-spin" />
          Aguardando resposta da API…
        </div>
      </div>
    );
  }

  const isError = status === "error";

  return (
    <div
      className={`rounded-2xl overflow-hidden border ${
        isError
          ? "border-red-200 bg-red-50/40"
          : "border-gray-200 bg-white"
      }`}
    >
      <div
        className={`flex items-center justify-between gap-3 px-4 py-3 border-b ${
          isError
            ? "border-red-200 bg-red-50"
            : "border-gray-100 bg-gray-50"
        }`}
      >
        <div className="flex items-center gap-2 min-w-0">
          {isError ? (
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-white">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 2l8 8M10 2l-8 8"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          ) : (
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
          )}
          <span
            className={`text-xs font-mono font-semibold ${
              isError ? "text-red-700" : "text-green-700"
            }`}
          >
            {statusCode ?? (isError ? "ERR" : "200")}
          </span>
          {method && endpoint && (
            <span className="text-xs font-mono text-gray-600 truncate">
              {method.toUpperCase()} {endpoint}
            </span>
          )}
        </div>
        {json && (
          <button
            onClick={copy}
            className="text-xs px-2 py-1 rounded-md border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 transition-colors"
          >
            {copied ? "✓ Copiado" : "Copiar JSON"}
          </button>
        )}
      </div>

      {isError && errorMessage && (
        <div className="px-4 py-3 text-sm text-red-800 bg-red-50 border-b border-red-100">
          {errorMessage}
        </div>
      )}

      <pre
        className={`json-block whitespace-pre-wrap break-all px-4 py-4 max-h-[400px] overflow-auto ${
          isError
            ? "bg-gray-900 text-red-200"
            : "bg-gray-900 text-green-200"
        }`}
      >
        <code>{json || "(sem corpo de resposta)"}</code>
      </pre>
    </div>
  );
}
