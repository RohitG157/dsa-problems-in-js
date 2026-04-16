const obj = {
  name: "Rohit",
  YOE: 10,
};

const proxy = new Proxy(obj, {
  get(target, prop) {
    if (!(prop in target))
      return new Error("You are accessing an illegal field.");
    return Reflect.get(target, prop);
  },
  set(target, prop, value) {
    if (prop === "YOE" && value < 0)
      throw new Error(
        "YOE can not be negative. If Yes then you are alien 👽 .",
      );
  },
});

console.log(proxy.name);
