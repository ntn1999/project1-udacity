import path from 'path';
import { promises as fsPromise } from 'fs';
import sharp from 'sharp';

async function readImageExist(
  fileName: string,
  width: string,
  height: string
) {
  const imageDir = './assets/thumb';
  const newImage = `${fileName}(${width}x${height}).jpg`;
  const savePath = `./assets/thumb/${fileName}(${width}x${height}).jpg`;
  const imageFiles = await fsPromise.readdir(imageDir);
  const filenames = imageFiles.map((file: string) => path.basename(file));
  if (filenames.includes(newImage)) {
    return await fsPromise.readFile(savePath);
  } else {
    return false;
  }
}

async function resizedImage(fileName: string, width: string, height: string) {
  const imagePath = `./assets/full/${fileName}.jpg`;
  const savePath = `./assets/thumb/${fileName}(${width}x${height}).jpg`;
  const resizedImage = await sharp(imagePath)
    .resize(parseInt(width), parseInt(height))
    .toBuffer();
  fsPromise.writeFile(savePath, resizedImage);
  return resizedImage;
}

export default {
  readImageExist,
  resizedImage,
};
