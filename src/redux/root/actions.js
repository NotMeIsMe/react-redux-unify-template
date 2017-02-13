export const ROOTLOADED = 'ROOTLOADED';
export function rootLoad (bool) {
  return {
    type: ROOTLOADED,
    isfinished: bool
  };
}
