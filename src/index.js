import app from "./app.js";

app.listen(process.env.PORT || 3000);
console.log("port:", process.env.PORT)