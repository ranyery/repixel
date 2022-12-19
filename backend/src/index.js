// https://www.freecodecamp.org/news/how-to-make-image-upload-easy-with-angular-1ed14cb2773b/
// https://github.com/expressjs/multer/blob/master/doc/README-pt-br.md
// https://www.npmjs.com/package/sharp
import cors from "cors";
import express from "express";
import { fileTypeFromBuffer } from 'file-type'; // ?Change to image-type
// import imagemin from "imagemin";
// import imageminMozjpeg from "imagemin-mozjpeg";
import multer from "multer";
import sharp from "sharp";

// import { StatusCodes as HTTP_STATUS_CODES } from "http-status-codes";

const PORT = process.env.PORT || 3333;

const app = express();
app.use(express.json());
app.use(cors());

// Armazena a imagem na pastas uploads
// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, "./uploads/");
//   },
//   filename(req, file, cb) {
//     filename = uuidv4() + path.extname(file.originalname);
//     cb(null, filename);
//   },
// });

// const upload = multer({ storage });

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.get("/", (request, response) => {
  return response.send({message: "Hello, World!"})
})

app.post("/", upload.single("image"), async (request, response) => {
  const { originalname, buffer, size } = request.file;

  // const jpegBuffer = await imagemin.buffer(buffer, {
  //   plugins: [imageminMozjpeg({ quality: 50 })],
  // });

  // const { ext, mime } = await fileTypeFromBuffer(jpegBuffer);

  // const jpegBase64 = jpegBuffer.toString("base64");

  const pngBuffer = await sharp(buffer).resize(300, 300, {fit: "contain"}).png({}).toBuffer();
  const { ext, mime } = await fileTypeFromBuffer(pngBuffer);
  const pngBase64 = pngBuffer.toString("base64");

  response.send({
    originalname,
    oldSize: size,
    newSize: 0,
    diffSize: 0,
    ext,
    base64: `data:${mime};base64,${pngBase64}`,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
