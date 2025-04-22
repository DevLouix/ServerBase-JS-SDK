import { DatabaseInsertData, SbjsBaseConfig } from "../../types/main";
import { sbjsBase } from "../base";
import { insert } from "./insert";

export class Database {
  private sbjsBase: sbjsBase;
  private dbName: string;

  constructor(sbjsBase: sbjsBase, dbName: string) {
    this.sbjsBase = sbjsBase;
    this.dbName = dbName;
  }

  async insert(data: DatabaseInsertData): Promise<any> {    
    return insert(this.sbjsBase,this.dbName, data);
  }
}
