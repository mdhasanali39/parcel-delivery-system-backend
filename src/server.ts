import { Server } from "http";
import app from "./app";

let server: Server;

async function main() {
  try {
    server = app.listen(3000, () => {
      console.log("Parcel delivery system server running on port 3000");
    });
  } catch (error) {
    console.log(error);
  }
}

main();