export async function insert(path: string, name: string, fileData: any) {
  console.log(`Adding file '${name}' with data:`, fileData);
  return "File added successfully!";
}
