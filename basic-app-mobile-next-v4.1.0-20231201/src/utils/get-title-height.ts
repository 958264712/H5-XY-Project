import { px2Rem } from "./px-to-rem";
import vxSdk from "@csii/madp3";

/**
 * 获取头部高度
 * @returns 头部高度
 */
export const getTitleHeight = async (): Promise<string> => {
  try {
    if ((await vxSdk?.getStageParamAsync?.("x-fullscreen")) === "yes") {
      const h = (await vxSdk?.sessionGetAsync?.("titleHeight")) || 0;
      return px2Rem(Number(h));
    }
    return px2Rem(90);
  } catch (error) {
    return px2Rem(90);
  }
};

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("get-title-height Test", async () => {
    expect(await getTitleHeight()).toBe("0.9rem");
  });
}
