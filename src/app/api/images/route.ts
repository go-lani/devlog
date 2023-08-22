import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { imgPath } = Object.fromEntries(req.nextUrl.searchParams);
  console.log(imgPath);
  const filePath = path.join(process.cwd(), imgPath);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }

  const fileContent = fs.readFileSync(filePath);
  const ext = path.extname(filePath);

  let contentType = 'image/jpeg';
  if (ext === '.png') contentType = 'image/png';
  if (ext === '.webp') contentType = 'image/webp';

  const base64Image = `data:${contentType};base64,${fileContent.toString(
    'base64',
  )}`;

  return NextResponse.json({ base64Image });
}
