import mongoose from "mongoose";

//connecting mongodb to backend by mongoose---------------------------------------
export const dbConnect =  () => {
    
mongoose
  .connect(process.env.MONGO_URI, {
    dbname: "backend-API",
  })
  .then((c) => console.log(`db connected ${c.connection.host}`))
  .catch((err) => console.log(err));
}
