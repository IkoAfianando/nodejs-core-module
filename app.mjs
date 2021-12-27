import fs from "fs/promises";

await fs.writeFile("foo.txt", "Hello World! adalah jalan ninjaku").then(() => {
  console.log("File written successfully!");
});

const read = await fs.readFile("foo.txt", {

});
console.log(read.toString());

const readFileSync = await fs.readFile("write.txt", (error, data) => {
  if(error) throw error;
  console.log(data)
});
console.log(readFileSync.toString());