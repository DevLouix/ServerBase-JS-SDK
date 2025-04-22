import { SbjsBaseConfig } from "../types/main";
import { sbjsBase } from "./base";
import { Database } from "./database";
import { SBStorage } from "./storage";

export class SBJS {
  private privateKey: string;
  private publicKey: string;
  private projectId: string;

  constructor(
    privateKey: string,
    publicKey: string,
    projectId: string
  ) {
    this.privateKey = privateKey;
    this.publicKey = publicKey;
    this.projectId = projectId;
  }

  // SBJS Base Class
  // This is the base class for SBJS, which contains ALL THE CONFIGS EG: the public key and secret key
  // and the base URL for the server.
  sbjsBase(): sbjsBase {
    return new sbjsBase(
      this.publicKey,
      this.privateKey,
      this.projectId
    );
  }

  database(dbName: string): Database {
    return new Database(this.sbjsBase(), dbName);
  }

  storage(storageName: string): SBStorage {
    return new SBStorage(storageName, this.sbjsBase());
  }
}
