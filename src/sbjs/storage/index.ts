import { sbjsBase } from "../base";
import { insert } from "./insert";

export class SBStorage {
  private storageName: string;
  private sbjsBase: sbjsBase;

  constructor(
    storageName: string,
    sbjsBase: sbjsBase
  ) {
    this.storageName = storageName;
    this.sbjsBase = sbjsBase;
  }

  async insert(
    path: string,
    name: string,
    data: Record<string, any>
  ): Promise<any> {
    return insert(path, name, data);
  }
}
