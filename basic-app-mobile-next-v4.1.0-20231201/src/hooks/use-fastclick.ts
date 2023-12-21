import FastClick from "fastclick";

export const useFastClickHook = () => {
  if (import.meta.env.PROD) {
    if ("addEventListener" in document && "ontouchstart" in window) {
      FastClick.prototype.focus = (targetEl: HTMLElement) => {
        targetEl.focus();
      };

      document.addEventListener(
        "DOMContentLoaded",
        () => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (FastClick as any).attach(document.body);
        },
        false,
      );
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (FastClick as any).attach(document.body);
  }
};
