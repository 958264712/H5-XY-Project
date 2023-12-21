import * as logger from "./logger";

import { sm2, sm3, sm4, hex2b64, b64tohex, hexToArray } from "@csii/smcrypto";

let tempSM4Key = "";

function RndNum(t: number) {
  let e = "";
  for (let r = 0; r < t; r++) {
    e += Math.floor(Math.random() * 10);
  }
  return e;
}

export function packageEncrypt(data: string, publicKey: string) {
  if (data === "") {
    return "";
  }
  if (!tempSM4Key) {
    tempSM4Key = RndNum(32);
  }
  // sm2 默认加密支持utf8和字节数组，不支持直接使用hex作为加密数据, 需要处理
  const keybytes = hexToArray(tempSM4Key);
  const s1 = sm2.doEncrypt(keybytes, publicKey, 1); // 对sm4的key使用sm2加密
  const s2 = sm4.encrypt(data, tempSM4Key); // 使用sm4key 对数据使用sm4对称加密
  const s3 = sm3(data); // sm3  数据摘要, 支持utf8字符串和bytes
  // console.log('===>use sm4key:', sm4Key);
  return `${hex2b64(s1.toUpperCase())}|${hex2b64(s2 as string)}|${hex2b64(s3.toUpperCase())}`;
}
export function packageDecrypt(b64str: string) {
  if (b64str === "") {
    return "";
  }
  if (tempSM4Key === "") {
    logger.info("tempSM4Key is invalid.");
    return "";
  }
  const hexdata = b64tohex(b64str);
  const e = sm4.decrypt(hexdata, tempSM4Key);
  return e;
}

export default {
  packageEncrypt,
  packageDecrypt,
};
