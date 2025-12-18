type Props = {
  status: { type: "success" | "error"; message: string } | null;
};

export function SubmitStatus({ status }: Props) {
  if (!status) return null;

  const styles =
    status.type === "success"
      ? "bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400"
      : "bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-400";

  return (
    <div
      className={`p-4 rounded-md ${styles}`}
      role="status"
      aria-live="polite"
    >
      <p className="text-sm font-medium">{status.message}</p>
    </div>
  );
}
