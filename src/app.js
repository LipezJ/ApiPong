import express from "express";
import router from "./routes/route.js";

const app = express();

app.use(router); 
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET");
  res.header("Allow", "GET");
  next();
});

export default app;