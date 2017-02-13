// 请求用户信息
export const LOADED = 'LOADED';
export function loaded (bool) {
  return {
    type: LOADED,
    isloaded: bool
  };
}
