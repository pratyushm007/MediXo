import { Database } from "lucide-react";

export function BrandMark({ size = 32 }: { size?: number }) {
  return (
    <div
      className="relative grid place-items-center rounded-xl bg-brand-gradient text-white shadow-glow"
      style={{ width: size, height: size }}
      aria-hidden
    >
      <Database className="h-1/2 w-1/2" strokeWidth={2.2} />
    </div>
  );
}

export function BrandLockup({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <BrandMark size={32} />
      {!compact && (
        <div className="leading-tight">
          <div className="font-display text-[15px] font-bold tracking-tight">Medixo KnowledgeHub</div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Enterprise · AI · Governance</div>
        </div>
      )}
    </div>
  );
}
