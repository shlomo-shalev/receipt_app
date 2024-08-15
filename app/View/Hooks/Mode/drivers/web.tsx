export function getMode () {
  return typeof window === 'undefined' ? 'ssr' : 'csr';
}

export default {
  getMode,
};
