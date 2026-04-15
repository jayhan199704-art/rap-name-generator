export const buildFullName = (
  prefix: string | null,
  first: string,
  last: string,
  locale = "en-US"
): string => {
  if (locale.startsWith("ja")) {
    const main = `${last} ${first}`.trim();
    return prefix ? `${prefix} ${main}`.trim() : main;
  }

  return [prefix, first, last].filter(Boolean).join(" ");
};
