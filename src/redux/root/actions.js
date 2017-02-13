export const ROOTLOADED = 'ROOTLOADED';
export const ROOTNOTLOADED = 'ROOTNOTLOADED';
export function rootLoad () {
  return {
    type: ROOTLOADED
  };
}

export function rootNotLoad () {
  return {
    type: ROOTNOTLOADED
  };
}
