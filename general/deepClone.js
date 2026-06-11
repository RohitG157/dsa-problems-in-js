function iterate(obj) {
  if (obj != null && typeof obj !== "object") {
    return obj;
  }
  let copyObj = {};
  for (const key in obj) {
    if (typeof obj[key] == "object") {
      copyObj[key] = iterate(obj[key]);
    } else {
      copyObj[key] = iterate(obj[key]);
    }
  }
  return copyObj;
}
