import fs from "fs/promises";

fs.writeFile("foo.txt", "Hello World!").then(() => {
  console.log("File written successfully!");
});