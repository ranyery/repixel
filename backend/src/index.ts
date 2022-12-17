import cors from "cors";
import express from "express";
import multer from "multer";
import path from "path";

// import { StatusCodes as HTTP_STATUS_CODES } from "http-status-codes";

const PORT = process.env.PORT || 3333;

const app = express();
app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.post("/", upload.single("image"), async (request, response) => {
  const { file } = request;

  response.send({ message: "Ok!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
