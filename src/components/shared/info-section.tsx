import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface InfoSectionProps {
  title: string;
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

export function InfoSection({
  title,
  icon: Icon,
  children,
  className,
}: InfoSectionProps) {
  return (
    <section className={cn("py-12", className)}>
      <div className="flex items-center gap-3 mb-6">
        {Icon && <Icon className="h-6 w-6 text-teal-600" />}
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      </div>
      <div className="prose prose-gray max-w-none">{children}</div>
    </section>
  );
}
