"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormField } from "@/components/form/FormField";
import { SubmitStatus } from "@/components/form/SubmitStatus";
import { useContactForm } from "@/components/form/useContactForm";

/**
 * Form Page Component
 *
 * Note: Form state is managed with React Hook Form instead of individual useState
 * hooks per input field. React Hook Form provides better performance through
 * uncontrolled components with refs, built-in validation integration with Zod,
 * and reduces re-renders. This approach is more efficient than managing state
 * with useState for each field (fullName, email, message).
 */
export default function FormPage() {
  const { form, onSubmit, isSubmitting, submitStatus } = useContactForm();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = form;

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Contact Form</CardTitle>
          <CardDescription>
            Fill out the form below and submit to send your message.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              id="fullName"
              label="Full Name"
              placeholder="John Doe"
              registration={register("fullName")}
              error={errors.fullName}
            />

            <FormField
              id="email"
              label="Email Address"
              type="email"
              placeholder="john.doe@example.com"
              registration={register("email")}
              error={errors.email}
            />

            <FormField
              id="message"
              label="Message"
              textarea
              placeholder="Enter your message here..."
              registration={register("message")}
              error={errors.message}
            />

            <SubmitStatus status={submitStatus} />

            <Button
              type="submit"
              disabled={isSubmitting || !isValid}
              className="w-full"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
