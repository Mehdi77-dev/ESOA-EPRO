import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const directoriesToCompress = [
  path.join(process.cwd(), 'public', 'Images'),
  path.join(process.cwd(), 'public', 'Logo')
];

async function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const tempPath = filePath + '.tmp';

  try {
    let pipeline = sharp(filePath);
    
    if (ext === '.png') {
      pipeline = pipeline.png({ quality: 80, compressionLevel: 9 });
    } else if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
    } else if (ext === '.webp') {
      pipeline = pipeline.webp({ quality: 80 });
    } else {
      return; // Skip unsupported formats
    }

    await pipeline.toFile(tempPath);
    
    // Replace original file with the compressed one
    fs.renameSync(tempPath, filePath);
    
    console.log(`Compressed: ${filePath}`);
  } catch (error) {
    console.error(`Error compressing ${filePath}:`, error.message);
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
  }
}

async function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else if (stat.isFile()) {
      await compressImage(fullPath);
    }
  }
}

async function main() {
  console.log('Starting image compression...');
  for (const dir of directoriesToCompress) {
    await processDirectory(dir);
  }
  console.log('Image compression finished.');
}

main();
