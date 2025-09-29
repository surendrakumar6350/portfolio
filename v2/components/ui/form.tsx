import * as React from "react";
import { cn } from "@/lib/utils";

export function Form({ className, ...props }: React.FormHTMLAttributes<HTMLFormElement>) {
  return <form className={cn("space-y-4", className)} {...props} />;
}

export function FormField({ children, label, error }: { children: React.ReactNode; label?: string; error?: string }) {
  return (
    <div className="space-y-2">
      {label && <label className="text-sm font-medium leading-none">{label}</label>}
      {children}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
