import { writeFile } from 'fs/promises'
import path from 'path'

export const upload = async (data: any) => {

  console.log(data)

  const file: File | null = data.get("file") as unknown as File;

  if (!file) {
    return { error: 'no img' }
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const filePath = path.join(process.cwd(), "public/fotos", file.name);
  return await writeFile(filePath, buffer);

}