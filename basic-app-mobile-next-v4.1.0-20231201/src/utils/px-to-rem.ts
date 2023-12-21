export const px2Rem = (value: string | number) => (["string", "number"].includes(typeof value) ? `${+value / 100}rem` : "0");

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("px-to-rem Test", () => {
    expect(px2Rem("")).toBe("0rem");
    expect(px2Rem("90")).toBe("0.9rem");
    expect(px2Rem(0)).toBe("0rem");
    expect(px2Rem(100)).toBe("1rem");
  });
}
