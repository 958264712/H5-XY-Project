import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { VxbmHeaderBar } from "@/components";

describe("component HeaderBar Test", () => {
  it("render title", () => {
    const wrapper = mount(VxbmHeaderBar);
    expect(wrapper.find(".vxbm-header-bar__title").text()).toContain("");
    expect(wrapper.find("header").classes()).toContain("vxbm-header-bar");
  });
  it("render title attribute", () => {
    const wrapper = mount(VxbmHeaderBar, {
      props: {
        title: "hello world",
      },
    });
    expect(wrapper.find("header").text()).toContain("hello world");
  });
  it("render default slot", () => {
    const wrapper = mount(VxbmHeaderBar, {
      slots: {
        default: "hello world",
      },
    });
    expect(wrapper.find("header").text()).toContain("hello world");
  });
  it("emit back event", () => {
    const click = vi.fn(() => true);
    const wrapper = mount(VxbmHeaderBar, {
      props: {
        onBack: click,
        isCustom: true,
      },
    });
    wrapper.find(".vxbm-header-bar__btn").trigger("click");
    expect(click).toBeCalled();
  });
  it("emmit option event", () => {
    const click = vi.fn(() => true);
    const wrapper = mount(VxbmHeaderBar, {
      props: {
        onOption: click,
        optionText: "opt",
      },
    });
    wrapper.find(".vxbm-header-bar__option").trigger("click");
    expect(click).toBeCalled();
  });
});
