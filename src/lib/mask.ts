export const normalizePhoneNumber = (value: string) => {
  const cleanedValue = value.replace(/\D/g, "");
  if (!cleanedValue) return "";
  let formattedValue = "(" + cleanedValue.substring(0, 2);
  if (cleanedValue.length > 2) {
    formattedValue += ") " + cleanedValue.substring(2, 7);
  }
  if (cleanedValue.length > 7) {
    formattedValue += "-" + cleanedValue.substring(7, 11);
  }
  return formattedValue;
};
