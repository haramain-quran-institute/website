export const setHideHeader = (
  currentScrollY: number,
  lastScrollY: number,
  thresholdSticky: number = 96,
  thresholdHysteresis: number = 24,
): boolean => {
  if (currentScrollY < thresholdSticky) return false
  if (currentScrollY > lastScrollY) return true
  if (lastScrollY - currentScrollY >= thresholdHysteresis) return false
  return false
}
