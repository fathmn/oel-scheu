import { describe, expect, it } from "vitest";

import { createContactDraftHref, createInquiryDraftHref } from "@/lib/mailto";

describe("mailto helpers", () => {
  it("creates a contact draft with the entered metadata", () => {
    const href = decodeURIComponent(
      createContactDraftHref({
        name: "Max Mustermann",
        email: "max@example.com",
        phone: "+49 123 456",
        subject: "Beratungsgespräch",
        message: "Bitte rufen Sie mich zurück.",
      }),
    );

    expect(href).toContain("mailto:info@oelscheu.de");
    expect(href).toContain("subject=Kontaktanfrage: Beratungsgespräch");
    expect(href).toContain("Name: Max Mustermann");
    expect(href).toContain("Telefon: +49 123 456");
    expect(href).toContain("Bitte rufen Sie mich zurück.");
  });

  it("includes inquiry items and fallback placeholders", () => {
    const href = decodeURIComponent(
      createInquiryDraftHref({
        company: "",
        name: "Erika Musterfrau",
        email: "erika@example.com",
        phone: "",
        message: "",
        items: [
          { id: "kss", name: "Kühlschmierstoffe", category: "Produkte" },
          { id: "filter", name: "Filtrationsprogramm", category: "Produkte" },
        ],
      }),
    );

    expect(href).toContain("subject=Produktanfrage von Erika Musterfrau");
    expect(href).toContain("Firma: -");
    expect(href).toContain("Telefon: -");
    expect(href).toContain("1. Kühlschmierstoffe (Produkte)");
    expect(href).toContain("2. Filtrationsprogramm (Produkte)");
    expect(href).toContain("Nachricht:\n-");
  });
});
