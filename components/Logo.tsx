import Image from "next/image";

export function Logo({ size = 40 }: { size?: number }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        className="flex items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5"
        style={{ width: size, height: size }}
      >
        <Image src="/logo.svg" alt="Clear Fix" width={size} height={size} priority />
      </span>
      <span className="text-lg font-extrabold tracking-tight">Clear Fix</span>
    </span>
  );
}
