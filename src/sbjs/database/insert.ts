import axiosInstance from "../../functions/axios";
import { validateInsertData } from "../../functions/validations/database/insert";
import { sbjsBase } from "../base";

export async function insert(
  sbjsBase: sbjsBase,
  dbName: string,
  payloadData: any
): Promise<string> {
  try {
    const payload = {
      projectId: sbjsBase.getProjectId(),
      databaseName: dbName,
      collection: payloadData.collection,
      data: payloadData.data,
    };
    // Validate the payload
    validateInsertData(payload);

    // Sign the payload
    const token = sbjsBase.signPayload(payload);
    console.log("Token:", token);
    

    const res = sbjsBase.request<string>(`/database/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "x-public-key": sbjsBase.getEncodedPublicKey(),
      },
      // data: {
      //   token,
      // },
    });

    const data = await res;
    if (data.status !== 200 && data.status !== 201) {
      throw new Error("Failed to insert data");
    }
    console.log("Data inserted successfully:", data.data);
    return data.data;
  } catch (error) {
    console.error("Error inserting data:", error);
    throw new Error("Failed to insert data");
  }
}
