import { vxUtils } from "@/utils";

export const formatPhoneMask = (phone: string) => `${phone.substring(0, 3)}****${phone.substring(7)}`;
// 测试
if (import.meta.vitest) {
  const { it, expect, describe } = import.meta.vitest;
  describe("formatPhoneMask Test", () => {
    it("formatPhoneMask", () => {
      expect(formatPhoneMask("13611111111")).toBe("136****1111");
    });
  });
}

/**
 * 字符串按照规则格式化
 * @param value 要转换的字符串
 * @param rule 格式化规则，传入数字时每隔相同间隔分割一次，传入数组时按照数组内数字来分割，默认为4
 * @param gap 分割字符，默认空格
 *
 * @example
 * formatString("1234567812345678") // 1234 5678 1234 5678
 */
export const formatString = vxUtils.formatString;
// 测试
if (import.meta.vitest) {
  const { it, expect, describe } = import.meta.vitest;
  describe("formatString Test", () => {
    it("formatString", () => {
      expect(formatString("1234567812345678")).toBe("1234 5678 1234 5678");
    });
  });
}
/**
 * 截取字符串
 * @param value 待截取字符串
 * @param limit 需要截取的长度
 * @returns 截取后字符串
 *
 * @example
 * formatSubStr("123456789", 5) // 12345
 */
export const formatSubStr = (value?: string, limit = 0) => (value ? value.slice(0, limit) : "");
// 测试
if (import.meta.vitest) {
  const { it, expect, describe } = import.meta.vitest;
  describe("formatSubStr Test", () => {
    it("formatSubStr", () => {
      expect(formatSubStr("1234567890")).toBe("");
      expect(formatSubStr("1234567890", 10)).toBe("1234567890");
      expect(formatSubStr("1234567890", 1)).toBe("1");
    });
  });
}

/**
 * 金额格式化，三位一逗号
 * @param input 需要格式化的金额
 * @param fractionSize 保留的小数位数，默认0
 *
 * @example
 * formatAmount("999999") // 999,999
 * formatAmount("999999", 2) // 999,999.00
 */
export const formatAmount = vxUtils.number;
// 测试
if (import.meta.vitest) {
  const { it, expect, describe } = import.meta.vitest;
  describe("formatAmount Test", () => {
    it("formatAmount", () => {
      expect(formatAmount("999999")).toBe("999,999");
      expect(formatAmount("999999", 2)).toBe("999,999.00");
    });
  });
}
/**
 * 金额大写
 * @param val 要转换的数字
 *
 * @example
 * formatAmountUpperCase("123456789.12") // 壹亿贰仟叁佰肆拾伍万陆仟柒佰捌拾玖元壹角贰分
 */
export const formatAmountUpperCase = vxUtils.amount;
// 测试
if (import.meta.vitest) {
  const { it, expect, describe } = import.meta.vitest;
  describe("formatAmountUpperCase Test", () => {
    it("formatAmountUpperCase", () => {
      expect(formatAmountUpperCase("123456789.12")).toBe("壹亿贰仟叁佰肆拾伍万陆仟柒佰捌拾玖元壹角贰分");
    });
  });
}
/**
 * 日期格式化
 * @param input 待格式化的日期
 * @param outFormat 输出格式
 * @param format 输入格式
 *
 * @example
 * formatDate("2023/06/20") // 2023-06-20
 * formatDate(new Date()) // 2023-06-20
 * formatDate(1687248793199) // 2023-06-20
 * formatDate(new Date(), "YYYY年MM月DD日") // 2023年06月20日
 * formatDate("20230620", "YYYY年MM月DD日", "YYYYMMDD") // 2023年06月20日
 */
export const formatDate = (input: string | number | Date, outFormat = "YYYY-MM-DD", format?: string) => {
  if (input === undefined) return input;
  let isDate = false;
  if (format) {
    isDate = vxUtils.dateUtil.isDateString(input, format);
  } else {
    isDate = vxUtils.dateUtil.isDateString(input);
  }
  if (!isDate) return "";
  return vxUtils.dateUtil.getDate(input, format, outFormat);
};
// 测试
if (import.meta.vitest) {
  const { it, expect, describe } = import.meta.vitest;
  describe("formatDate Test", () => {
    it("formatDate", () => {
      expect(formatDate("2023/06/20")).toBe("2023-06-20");
      expect(formatDate(new Date("2023-06-20"))).toBe("2023-06-20");
      expect(formatDate(1687248793199)).toBe("2023-06-20");
      expect(formatDate(new Date("2023-06-20"), "YYYY年MM月DD日")).toBe("2023年06月20日");
      expect(formatDate("20230620", "YYYY年MM月DD日", "YYYYMMDD")).toBe("2023年06月20日");
    });
  });
}
/**
 * 字符串脱敏
 * @param str 待脱敏的字符串
 * @param prefixlen 前缀的长度，默认0
 * @param suffixlen 后缀的长度，默认0
 * @param starLen 中间星的个数，默认4个
 * @param gap 几个星一格，默认4位一格
 *
 * @example
 * formatWordencrypt("123456789123456789") // ****
 * formatWordencrypt("123456789123456789", 2) // 12 ****
 * formatWordencrypt("123456789123456789", 2, 2) // 12 **** 89
 * formatWordencrypt("123456789123456789", 2, 2, 4, 2) // 12 ** ** 89
 */
export const formatWordencrypt = vxUtils.wordencrypt;
// 测试
if (import.meta.vitest) {
  const { it, expect, describe } = import.meta.vitest;
  describe("formatWordencrypt Test", () => {
    it("formatWordencrypt", () => {
      expect(formatWordencrypt("123456789123456789")).toBe("**** "); // TODO @csii/vx-util bug
      expect(formatWordencrypt("123456789123456789", 2)).toBe("12 **** ");
      expect(formatWordencrypt("123456789123456789", 2, 2)).toBe("12 **** 89");
      expect(formatWordencrypt("123456789123456789", 2, 2, 4, 2)).toBe("12 ** ** 89");
    });
  });
}
/**
 * 添加金额单位
 * @param value 待格式化数据
 * @returns 格式化后数据
 *
 * @example
 * formatAmountUnit(123456789) // 123456789元
 * formatAmountUnit("123456789") // 123456789元
 */
export const formatAmountUnit = (value: number | string | undefined) => {
  if (!value) return undefined;
  if (["string", "number"].includes(typeof value)) {
    return value + "元";
  }
  throw Error("Function `formatAmountUnit` binding value must be a string or number");
};
// 测试
if (import.meta.vitest) {
  const { it, expect, describe } = import.meta.vitest;
  describe("formatAmountUnit Test", () => {
    it("formatAmountUnit", () => {
      expect(formatAmountUnit(123456789)).toBe("123456789元");
      expect(formatAmountUnit("123456789")).toBe("123456789元");
    });
  });
}
