import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import jwt, { JwtPayload } from "jsonwebtoken";

export class sbjsBase {
  private privateKey: string;
  private publicKey: string;
  private baseUrl: string;
  private projectId: string;

  constructor(
    publicKey: string,
    privateKey: string,
    projectId: string
  ) {
    this.projectId = projectId;
    this.privateKey = privateKey;
    this.publicKey = publicKey;
    this.baseUrl = "https://3000-devlouix-serverbase-b51v5g59fwk.ws-eu118.gitpod.io/project";
  }

  getPublicKey() {
    return this.publicKey;
  }

  getEncodedPublicKey() {
    return Buffer.from(this.publicKey).toString("base64");
  }

  getBaseUrl() {
    return this.baseUrl;
  }

  getProjectId() {
    return this.projectId;
  }
  
  // Method to sign payloads globally
  signPayload(payload: JwtPayload): string {
    return jwt.sign(payload, this.privateKey, { algorithm: "RS256" });
  }

  async request<T>(
    route: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    const url = `${this.baseUrl}${route}`;
    try {
      const response = await axios({
        url,
        ...config,
      });
      return response;
    } catch (error) {
      console.error("Request failed:", error);
      throw error;
    }
  }
}
