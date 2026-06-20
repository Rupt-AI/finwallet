import { createHash } from "crypto";

export function hashSHA256(data: string): string {
  return createHash("sha256").update(data).digest("hex");
}

export function hashMD5(data: string): string {
  return createHash("md5").update(data).digest("hex");
}