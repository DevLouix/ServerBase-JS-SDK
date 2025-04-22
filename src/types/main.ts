export interface SbjsBaseConfig {
  publicKey: string;
  privateKey: string;
  baseUrl: string;
}

export interface DatabaseInsertData {
  collection: string;
  data: object;
}