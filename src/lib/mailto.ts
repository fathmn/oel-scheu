import type { CartItem } from "@/context/InquiryCartContext";

const buildMailtoHref = (to: string, subject: string, lines: string[]) => {
  const body = lines.join("\n").trim();
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const formatOptionalLine = (label: string, value: string) => `${label}: ${value.trim() || "-"}`;

export interface ContactDraftInput {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface InquiryDraftInput {
  company: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  items: CartItem[];
}

export const createContactDraftHref = ({ name, email, phone, subject, message }: ContactDraftInput) =>
  buildMailtoHref("info@oelscheu.de", `Kontaktanfrage: ${subject}`, [
    "Guten Tag Oel-Scheu-Team,",
    "",
    formatOptionalLine("Name", name),
    formatOptionalLine("E-Mail", email),
    formatOptionalLine("Telefon", phone),
    formatOptionalLine("Betreff", subject),
    "",
    "Nachricht:",
    message.trim(),
  ]);

export const createInquiryDraftHref = ({ company, name, email, phone, message, items }: InquiryDraftInput) =>
  buildMailtoHref("info@oelscheu.de", `Produktanfrage von ${name.trim()}`, [
    "Guten Tag Oel-Scheu-Team,",
    "",
    formatOptionalLine("Firma", company),
    formatOptionalLine("Name", name),
    formatOptionalLine("E-Mail", email),
    formatOptionalLine("Telefon", phone),
    "",
    "Anfrageliste:",
    ...items.map((item, index) => `${index + 1}. ${item.name} (${item.category})`),
    "",
    "Nachricht:",
    message.trim() || "-",
  ]);
