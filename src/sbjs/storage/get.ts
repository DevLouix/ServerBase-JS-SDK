export function get(name: string): Buffer | null {
  console.log(`Retrieving file '${name}'`);
  return Buffer.from("Sample file data");
}