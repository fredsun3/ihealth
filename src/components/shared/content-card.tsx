import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  children?: React.ReactNode;
  className?: string;
}

export function ContentCard({
  title,
  description,
  icon: Icon,
  children,
  className,
}: ContentCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow",
        className
      )}
    >
      {Icon && (
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50 mb-4">
          <Icon className="h-6 w-6 text-teal-600" />
        </div>
      )}
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
      {children}
    </div>
  );
}
