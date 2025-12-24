import React from "react";
import { MongoClient } from "mongodb";
import { Amarante } from "next/font/google";

const page = () => {
  const client = new MongoClient(
    "mongodb+srv://mamaanshah2004_db_user:amaan1234@users.fmzwtud.mongodb.net/?appName=users"
  );

  client
    .connect()
    .then(() => console.log("Connected!"))
    .catch(console.error, "db not connected");
  return <>text page `${}`</>;
};

export default page;
