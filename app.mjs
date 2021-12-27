import fs from "fs/promises";

await fs.writeFile("foo.txt", "Hello World! adalah jalan ninjaku").then(() => {
  console.log("File written successfully!");
});

const read = await fs.readFile("foo.txt", {

});
console.log(read.toString());