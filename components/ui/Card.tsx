import { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

export default function Card({
  className = "",
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={`bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
