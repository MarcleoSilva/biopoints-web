type LogoProps = {
  className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-baseline tracking-tight ${className}`}>
      <span className="text-green-600 font-bold">Bio</span>
      <span className="text-gray-900 font-bold">Points</span>
    </span>
  );
}
