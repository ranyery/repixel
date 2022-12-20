// https://dev.to/dylanvdmerwe/reduce-angular-style-size-using-purgecss-to-remove-unused-styles-3b2k
const { exec } = require("child_process");
const { statSync, readdirSync } = require("fs");
const { extname } = require("path");

const files = getFilesFromPath("./dist", ".css");
const data = [];

if (!files && files.length <= 0) {
  console.log("cannot find style files to purge");
  return;
}

for (const f of files) {
  const originalSize = getFilesizeInKiloBytes("./dist/" + f) + "kb";
  const o = { file: f, originalSize: originalSize, newSize: "" };
  data.push(o);
}

console.log("Running PurgeCSS...");

exec(
  "purgecss -css dist/*.css --content dist/index.html dist/*.js -o dist/",
  function (error, stdout, stderr) {
    for (const d of data) {
      const newSize = getFilesizeInKiloBytes("./dist/" + d.file) + "kb";
      d.newSize = newSize;
    }

    console.table(data);
    console.log("PurgeCSS done.\n");
  }
);

function getFilesizeInKiloBytes(filename) {
  const stats = statSync(filename);
  const fileSizeInBytes = stats.size / 1024;
  return fileSizeInBytes.toFixed(2);
}

function getFilesFromPath(dir, extension) {
  const files = readdirSync(dir);
  return files.filter((e) => extname(e).toLowerCase() === extension);
}
