import cors from "cors";
import express from "express";
// import { StatusCodes as HTTP_STATUS_CODES } from "http-status-codes";

const PORT = process.env.PORT || 3333;

const app = express();
app.use(express.json());
app.use(cors());

app.post("/", (request, response) => {
  response.send({ message: "Hello, World!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
