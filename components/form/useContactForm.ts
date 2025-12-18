"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitForm } from "@/lib/api";
import { formSchema, type FormData } from "@/lib/validation/formSchema";

type SubmitStatus = { type: "success" | "error"; message: string } | null;

export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      console.log("Form Data:", data);

      const response = await submitForm(data);
      console.log("API Response:", response);

      setSubmitStatus({
        type: "success",
        message: "Form submitted successfully!",
      });
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);

      let message = "Failed to submit form. Please try again.";
      if (error instanceof Error) {
        if (
          error.message.includes("Network error") ||
          error.message.includes("Failed to fetch")
        ) {
          message =
            "Network error: Unable to connect to the server. Please check your internet connection.";
        }
      }

      setSubmitStatus({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, onSubmit, isSubmitting, submitStatus };
}
