import { getTitleHeight, px2Rem } from "../utils";
import vxSdk from "@csii/madp3";

export const useFlexibleHook = () => {
  ((w, d) => {
    const resize = () => {
      let winW = w.innerWidth;
      if (winW > w.screen.width) {
        w.requestAnimationFrame(resize);
      } else {
        if (winW > 750) {
          winW = 750;
        }
        d.documentElement.style.fontSize = `${(winW * 100) / 750}px`;
        d.body.style.fontSize = "14px";
      }
    };
    resize();
    // TODO 需要修改-body统一增加paddingTop，和title-bar高度一致，取getTitleHeight
    getTitleHeight().then((height) => {
      d.body.style.paddingTop = height;
    });
    vxSdk?.sessionGetAsync?.("isIPhoneX")?.then((flag: boolean) => {
      if (flag) {
        d.body.style.paddingBottom = px2Rem(30);
      } else {
        d.body.style.paddingBottom = "0";
      }
    });
  })(window, document);
};
