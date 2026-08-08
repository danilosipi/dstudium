"use client";

import { useId, useState, type FormEvent } from "react";
import {
  buildContactMailto,
  contactDemandTypes,
  contactPageContent,
} from "@/data/contact";

type FieldErrors = Partial<
  Record<"name" | "email" | "demand" | "message", string>
>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldClassName =
  "mt-1.5 w-full rounded-md border border-[#24315F] bg-[#050816] px-3 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/55 transition-colors focus-visible:border-blue-accent focus-visible:outline-none";

function validate(form: {
  name: string;
  email: string;
  demand: string;
  message: string;
}): FieldErrors {
  const errors: FieldErrors = {};

  if (!form.name.trim()) {
    errors.name = "Informe seu nome.";
  }

  if (!form.email.trim()) {
    errors.email = "Informe seu e-mail.";
  } else if (!emailPattern.test(form.email.trim())) {
    errors.email = "Informe um e-mail válido.";
  }

  if (!form.demand) {
    errors.demand = "Selecione o tipo de demanda.";
  }

  if (!form.message.trim()) {
    errors.message = "Escreva sua mensagem.";
  }

  return errors;
}

export function ContactForm() {
  const formId = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [demand, setDemand] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<string | null>(null);

  const nameErrorId = `${formId}-name-error`;
  const emailErrorId = `${formId}-email-error`;
  const demandErrorId = `${formId}-demand-error`;
  const messageErrorId = `${formId}-message-error`;
  const statusId = `${formId}-status`;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);

    const nextErrors = validate({ name, email, demand, message });
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const mailto = buildContactMailto({
      name: name.trim(),
      email: email.trim(),
      company: company.trim(),
      demandId: demand,
      message: message.trim(),
    });

    setStatus(
      "Abrindo seu cliente de e-mail com a mensagem preenchida. Se nada acontecer, envie diretamente para contato@dstudium.com.",
    );
    window.location.href = mailto;
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-xl border border-[#24315F] bg-[#0B1024] p-5 shadow-[0_0_28px_rgba(59,91,255,0.1)] sm:p-6"
      aria-describedby={status ? statusId : undefined}
    >
      <h2 className="text-lg font-semibold tracking-tight text-text-primary sm:text-xl">
        {contactPageContent.formTitle}
      </h2>
      <p className="mt-2 text-[13px] leading-relaxed text-text-secondary">
        {contactPageContent.formHint}
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label
            htmlFor={`${formId}-name`}
            className="text-[12px] font-semibold tracking-[0.08em] text-text-secondary uppercase"
          >
            Nome
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? nameErrorId : undefined}
            className={fieldClassName}
          />
          {errors.name ? (
            <p id={nameErrorId} className="mt-1.5 text-[12px] text-accent-orange" role="alert">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor={`${formId}-email`}
            className="text-[12px] font-semibold tracking-[0.08em] text-text-secondary uppercase"
          >
            E-mail
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? emailErrorId : undefined}
            className={fieldClassName}
          />
          {errors.email ? (
            <p id={emailErrorId} className="mt-1.5 text-[12px] text-accent-orange" role="alert">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor={`${formId}-company`}
            className="text-[12px] font-semibold tracking-[0.08em] text-text-secondary uppercase"
          >
            Empresa <span className="normal-case tracking-normal text-text-secondary/70">(opcional)</span>
          </label>
          <input
            id={`${formId}-company`}
            name="company"
            type="text"
            autoComplete="organization"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            className={fieldClassName}
          />
        </div>

        <div>
          <label
            htmlFor={`${formId}-demand`}
            className="text-[12px] font-semibold tracking-[0.08em] text-text-secondary uppercase"
          >
            Tipo de demanda
          </label>
          <select
            id={`${formId}-demand`}
            name="demand"
            required
            value={demand}
            onChange={(event) => setDemand(event.target.value)}
            aria-invalid={errors.demand ? true : undefined}
            aria-describedby={errors.demand ? demandErrorId : undefined}
            className={`${fieldClassName} appearance-none bg-[length:12px] bg-[right_0.85rem_center] bg-no-repeat pr-9`}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath stroke='%23A8B3D1' stroke-width='1.5' d='m1 1.5 5 5 5-5'/%3E%3C/svg%3E")`,
            }}
          >
            <option value="" disabled>
              Selecione uma opção
            </option>
            {contactDemandTypes.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
          {errors.demand ? (
            <p id={demandErrorId} className="mt-1.5 text-[12px] text-accent-orange" role="alert">
              {errors.demand}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor={`${formId}-message`}
            className="text-[12px] font-semibold tracking-[0.08em] text-text-secondary uppercase"
          >
            Mensagem
          </label>
          <textarea
            id={`${formId}-message`}
            name="message"
            required
            rows={5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? messageErrorId : undefined}
            className={`${fieldClassName} resize-y min-h-[140px]`}
          />
          {errors.message ? (
            <p id={messageErrorId} className="mt-1.5 text-[12px] text-accent-orange" role="alert">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      <p className="mt-5 text-[12px] leading-relaxed text-text-secondary">
        {contactPageContent.privacyNote}
      </p>

      <button
        type="submit"
        className="mt-5 inline-flex w-full items-center justify-center rounded-md border border-blue-primary bg-blue-primary px-5 py-3 text-xs font-semibold tracking-[0.12em] text-text-primary uppercase shadow-[0_0_24px_rgba(59,91,255,0.35)] transition-colors duration-200 hover:border-blue-accent hover:bg-blue-accent focus-visible:outline-offset-2 sm:w-auto"
      >
        Enviar mensagem
      </button>

      {status ? (
        <p
          id={statusId}
          className="mt-4 text-[13px] leading-relaxed text-accent-green"
          role="status"
          aria-live="polite"
        >
          {status}
        </p>
      ) : null}
    </form>
  );
}
