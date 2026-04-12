import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { contactSchema, type ContactFormData } from "@/lib/contactSchema";

function submitContact(data: ContactFormData): Promise<{ success: boolean }> {
  return fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data, _honey: "" }),
  }).then((res) => {
    if (!res.ok) {
      return res.json().then((body) => {
        throw new Error(body.error || "Erro ao enviar mensagem");
      });
    }
    return res.json();
  });
}

export function useContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const mutation = useMutation({
    mutationFn: submitContact,
    onSuccess: () => {
      reset();
    },
  });

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting: mutation.isPending,
    submitSuccess: mutation.isSuccess,
    submitError: mutation.error?.message ?? null,
    resetStatus: mutation.reset,
    onSubmit: handleSubmit((data) => mutation.mutate(data)),
  };
}