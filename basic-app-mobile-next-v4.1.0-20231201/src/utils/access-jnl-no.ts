import { dateUtil } from "@csii/vx-util";

let random = "";

for (let i = 0; i < 8; i++) {
  random = `${random}${Math.floor(Math.random() * 10)}`;
}

export const accessJnlNo = `${dateUtil.getDate("", undefined, "YYYYMMDDHHmmss")}08${random}`;
