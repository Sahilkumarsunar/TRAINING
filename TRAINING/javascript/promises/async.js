async function hello() {
  async function helloPrint() {
    return new Promise((res, rej) => {
      let resolve = true;
      if (resolve) {
        setTimeout(() => {
          console.log("object");
          res("promice resolved");
        }, 5000);
      } else rej("no output");
    });
  }
  const res = await helloPrint();
  console.log(res);
}
console.log("hello");
hello();
