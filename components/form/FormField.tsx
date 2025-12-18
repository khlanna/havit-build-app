import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

type Props = {
  id: string;
  label: string;
  placeholder?: string;
  type?: "text" | "email";
  textarea?: boolean;
  rows?: number;
  registration: UseFormRegisterReturn;
  error?: FieldError;
};

export function FormField({
  id,
  label,
  placeholder,
  type = "text",
  textarea,
  rows = 6,
  registration,
  error,
}: Props) {
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>

      {textarea ? (
        <Textarea
          id={id}
          placeholder={placeholder}
          rows={rows}
          {...registration}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={errorId}
        />
      ) : (
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          {...registration}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={errorId}
        />
      )}

      {error && (
        <p id={errorId} className="text-sm text-destructive" role="alert">
          {error.message}
        </p>
      )}
    </div>
  );
}
