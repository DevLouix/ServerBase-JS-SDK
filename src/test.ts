import { config } from "dotenv";
import { SBJS } from "./sbjs";
config();
test();

async function test() {
  const sb = new SBJS(
    process.env.SB_PRIVATE_KEY!,
    process.env.SB_PUBLIC_KEY!,
    "6806c9201944deccd1d671f4"
  );
  console.log(sb);
  const db = sb.database("test2H");
  const storage = sb.storage;

  const res = await db.insert({
    collection: "user3",
    data: {
      name: "John Doe",
      age: 30,
    },
  });

  console.log(res.data);
}
