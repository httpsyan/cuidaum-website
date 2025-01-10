interface LeadDatabaseField {
  label: string;
  placeholder: string;
  type: string;
  name: string;
  mask?: string;
}

export const leadDatabaseFields: LeadDatabaseField[] = [
  {
    label: "Nome completo",
    placeholder: "Nome completo",
    type: "text",
    name: "name",
  },
  {
    label: "Seu melhor e-mail",
    placeholder: "Seu melhor e-mail",
    type: "email",
    name: "email",
  },
  {
    label: "WhatsApp com DDD",
    placeholder: "WhatsApp com DDD",
    type: "tel",
    name: "phone",
    mask: "phone",
  },
];
