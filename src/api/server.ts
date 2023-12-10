import express, { Application } from "express";
import router from "./routes";

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
