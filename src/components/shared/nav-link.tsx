import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
  icon: LucideIcon;
  description?: string;
  className?: string;
}

export function NavLink({
  href,
  label,
  icon: Icon,
  description,
  className,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col items-center gap-3 p-6 rounded-xl bg-white border hover:shadow-lg transition-all hover:border-teal-200",
        className
      )}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 group-hover:bg-teal-100 transition-colors">
        <Icon className="h-7 w-7 text-teal-600" />
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-foreground mb-1">{label}</h3>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </Link>
  );
}
