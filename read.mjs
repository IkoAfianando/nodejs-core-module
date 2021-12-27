import fs from "fs";

const reader = fs.createReadStream("foo.txt");
reader.addListener("data", (data) => {
    const write = fs.createWriteStream("write.txt");
    write.write(data.toString());
})