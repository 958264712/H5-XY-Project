// eslint-disable-next-line no-console
export const info = import.meta.env.PROD ? () => void 0 : console.log;
// eslint-disable-next-line no-console
export const error = import.meta.env.PROD ? () => void 0 : console.error;
// eslint-disable-next-line no-console
export const warn = import.meta.env.PROD ? () => void 0 : console.warn;
