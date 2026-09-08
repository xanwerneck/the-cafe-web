export function formatLabel(format: number | string | null | undefined) {
  return Number(format) === 1 ? "Grão" : "Moído";
}

export function burnLevel(burn: number | string | null | undefined) {
  const level = Number(burn);
  if (!level || level < 1) return null;
  return Math.min(Math.max(level, 1), 8);
}
