// 是否是引用类型，具体指使用typeof类型为object，并且不是null的值
function isObjectLike(value: unknown) {
  return typeof value === "object" && value !== null;
}

// 使用Object.prototype.toString获取表示该对象的字符串,例如[object Array]
// 在es5之后，toString方法已经可以返回正确的类型，null对应[object Null]
const toString = Object.prototype.toString;
function getTag(value: unknown) {
  return toString.call(value);
}

function isPlainObject(value: unknown) {
  if (!isObjectLike(value) || getTag(value) !== "[object Object]") {
    return false;
  }
  // 例如：Object.create(null)
  if (Object.getPrototypeOf(value) === null) {
    return true;
  }
  // 循环遍历对象，如果是自定义构造器实例化的object则返回false
  let proto = value;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(value) === proto;
}

export function deepMerge(obj1: Record<string | symbol, Any>, obj2: Record<string | symbol, Any>) {
  const isPlain1 = isPlainObject(obj1);
  const isPlain2 = isPlainObject(obj2);
  if (!isPlain1) {
    return obj2;
  }
  if (!isPlain2) {
    return obj1;
  }
  [...Object.keys(obj2), ...Object.getOwnPropertySymbols(obj2)].forEach((key) => {
    //与浅拷贝区别之处
    obj1[key] = deepMerge(obj1[key], obj2[key]);
  });
  return obj1;
}
