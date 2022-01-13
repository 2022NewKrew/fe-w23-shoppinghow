import fs from "fs";
import path from "path";

const __dirname = path.resolve();

export const readJsonData = (filename) => {
  const jsonData = fs.readFileSync(
    path.resolve(__dirname, `src/data/${filename}.json`),
    "utf8"
  );
  return JSON.parse(jsonData);
};
