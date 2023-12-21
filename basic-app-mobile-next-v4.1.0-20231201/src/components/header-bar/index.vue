<script lang="ts">
import { type CSSProperties, type PropType, computed, defineComponent, getCurrentInstance, h, renderSlot, createCommentVNode, ref } from "vue";
import { getTitleHeight } from "../../utils/get-title-height";
import { useRouter, useRoute } from "vue-router";
import vxsdk from "@csii/madp3";
import { Icon } from "vant";

const VXBM_COMPONENT_NAEM = "vxbm-header-bar";

/**
 * # 顶部导航栏 VxbmHeaderBar
 *
 * 页面顶部导航栏
 *
 * ## 代码示例
 *
 * ```vue
 * <template>
 *  <vxbm-header-bar title="示例"/>
 * </template>
 * ```
 *
 * ## API
 *
 * ### VxbmHeaderBar Props
 *
 * | 属性 | 说明 | 类型 | 默认值 | 备注 |
 * |------|------|------|------|------|
 * | `hidden` | 隐藏导航栏 | `boolean` | `false` | - |
 * | `style` | 导航栏样式 | `CSSProperties` | `{}` | - |
 * | `bg-color` | 背景颜色 | `string` | `#fff` | - |
 * | `title` | 标题 | `string` | `""` | - |
 * | `color` | 标题文字颜色 | `string` | `#3D3D3D` | - |
 * | `option-text` | 操作区域文案 | `string` | `""` | - |
 * | `is-custom` | 是否自定义返回事件 | `boolean` | `false` | 默认使用路由回退(vue-router@4.x) |
 *
 * ### VxbmHeaderBar CSS Var
 *
 * | 变量 | 说明 | 对应 CSS 属性 | 默认值 | 备注 |
 * |------|------|------|------|------|
 * | `--vxbm-header-bar-shadow` | 阴影 | `box-shadow` | `2px 0px 6px rgba(0, 0, 0, 0.05)` | - |
 * | `--vxbm-header-bar-z-index` | z-index | `z-index` | `100` | - |
 * | `--vxbm-header-bar-color` | 字体颜色 | `color` | `var(--ui-color-text-base)` | - |
 * | `--vxbm-header-bar-bg-color` | 背景颜色 | `background-color` | `var(--ui-color-bg-inverse)` | - |
 * | `--vxbm-header-bar-btn-color` | 返回按钮图标颜色 | `color`\|`fill` | `var(--vxbm-header-bar-color)` | - |
 * | `--vxbm-header-bar-option-color` | 操作区域字体颜色 | `color` | `var(--vxbm-header-bar-color)` | - |
 *
 * ### VxbmHeaderBar Slots
 *
 * | 插槽名 | 说明 |
 * |------|------|
 * | `default` | 默认插槽 |
 * | `option` | 操作区域插槽 |
 *
 * ### VxbmHeaderBar Events
 *
 * #### `@back()`
 *
 * 返回上一页事件
 *
 * #### `@option()`
 *
 * 操作区域点击事件
 *
 */
export default defineComponent({
  name: VXBM_COMPONENT_NAEM,
  props: {
    hidden: {
      type: Boolean,
      default: false,
    },
    /**
     * 样式
     */
    style: {
      type: Object as PropType<CSSProperties>,
      default: () => ({}),
    },
    /**
     * 背景颜色
     */
    bgColor: {
      type: String,
    },
    /**
     * 标题
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * 标题文字颜色
     */
    color: {
      type: String,
    },
    /**
     * 操作区域文案
     */
    optionText: {
      type: String,
      default: "",
    },
    /**
     * 是否自定义返回事件
     */
    isCustom: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["back", "option"],
  setup(props, { emit, slots }) {
    const self = getCurrentInstance();
    const height = ref("0");
    getTitleHeight().then((h) => {
      height.value = h;
    });
    const styles = computed(() => {
      return {
        backgroundColor: props.bgColor,
        height: height.value,
        ...props.style,
      } as CSSProperties;
    });
    const router = useRouter();
    const route = useRoute();
    const backHandler = () => {
      // TODO 功能缺失
      if (props.isCustom) {
        emit("back");
      } else {
        if (self?.appContext.config.globalProperties.entryPoint === route?.path) {
          vxsdk?.finish?.();
        } else {
          router.back();
        }
      }
    };
    const optionHandler = () => {
      emit("option");
    };

    const title = computed(() => {
      return props.title || ((route.meta?.title as string) ?? "");
    });

    return () => {
      return props.hidden
        ? []
        : h(
            "header",
            {
              style: styles.value,
              class: [VXBM_COMPONENT_NAEM],
            },
            [
              h(
                "div",
                {
                  class: [`${VXBM_COMPONENT_NAEM}__btn`],
                  onClick: backHandler,
                },
                // <van-icon name="arrow-left" />,
                h(Icon, { name: "arrow-left", size: "1em" }),
              ),
              renderSlot(slots, "default", undefined, () => [
                h(
                  "div",
                  {
                    class: [`${VXBM_COMPONENT_NAEM}__title`],
                    style: { color: props.color, lineHeight: styles.value.height },
                  },
                  title.value,
                ),
              ]),
              props.optionText || slots.option
                ? h(
                    "div",
                    {
                      class: [`${VXBM_COMPONENT_NAEM}__option`],
                      onClick: optionHandler,
                    },
                    renderSlot(slots, "option", undefined, () => (props.optionText ? [h("span", { class: ["text"] }, props.optionText)] : [])),
                  )
                : createCommentVNode("option", true),
            ],
          );
    };
  },
});
</script>
<style lang="scss">
.vxbm-header-bar {
  --vxbm-header-bar-shadow: 2px 0px 6px rgba(0, 0, 0, 0.05);
  --vxbm-header-bar-z-index: 100;
  --vxbm-header-bar-color: var(--ui-color-text-base);
  --vxbm-header-bar-bg-color: var(--ui-color-bg-inverse);
  --vxbm-header-bar-btn-color: var(--vxbm-header-bar-color);
  --vxbm-header-bar-option-color: var(--vxbm-header-bar-color);
}

.vxbm-header-bar {
  box-shadow: var(--vxbm-header-bar-shadow);
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  box-sizing: border-box;
  z-index: var(--vxbm-header-bar-z-index);
  background-color: var(--vxbm-header-bar-bg-color);

  &__btn {
    position: absolute;
    // top: 13px;
    left: 20px;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--vxbm-header-bar-btn-color);
    font-size: 48px;
    svg {
      fill: var(--vxbm-header-bar-btn-color);
    }
  }
  &__title {
    width: 100%;
    text-align: center;
    font-size: 36px;
    line-height: 44px;
    font-weight: 500;
    color: var(--vxbm-header-bar-color);
  }

  &__option {
    position: absolute;
    right: 0;
    font-size: 36px;
    .text {
      padding-right: 24px;
      color: var(--vxbm-header-bar-option-color);
    }
  }
}
</style>
