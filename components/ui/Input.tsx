"use client";

import { InputHTMLAttributes, SelectHTMLAttributes, ReactNode } from "react";

type FieldProps = {
  label: string;
  hint?: string;
  required?: boolean;
  badge?: ReactNode;
  children: ReactNode;
  htmlFor?: string;
};

export function Field({
  label,
  hint,
  required,
  badge,
  children,
  htmlFor,
}: FieldProps) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="flex items-center justify-between gap-2 mb-1.5">
        <span className="text-sm font-medium text-gray-800">
          {label}
          {required && <span className="text-green-600 ml-0.5">*</span>}
        </span>
        {badge}
      </span>
      {children}
      {hint && <span className="block mt-1 text-xs text-gray-500">{hint}</span>}
    </label>
  );
}

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className = "", ...rest }: InputProps) {
  return (
    <input
      className={`w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus-ring read-only:bg-gray-50 read-only:text-gray-600 ${className}`}
      {...rest}
    />
  );
}

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ className = "", children, ...rest }: SelectProps) {
  return (
    <select
      className={`w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 focus-ring ${className}`}
      {...rest}
    >
      {children}
    </select>
  );
}
