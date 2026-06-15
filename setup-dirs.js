import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

// Helper to copy directory recursively
function copyFolderSync(from, to) {
  if (!fs.existsSync(from)) return;
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to, { recursive: true });
  }
  fs.readdirSync(from).forEach(element => {
    const stat = fs.lstatSync(path.join(from, element));
    if (stat.isFile()) {
      fs.copyFileSync(path.join(from, element), path.join(to, element));
      console.log(`Copied: ${element}`);
    } else if (stat.isDirectory()) {
      copyFolderSync(path.join(from, element), path.join(to, element));
    }
  });
}

// 1. Backup index.html
const indexPath = path.join(__dirname, 'index.html');
const backupPath = path.join(__dirname, 'index.html.bak');
if (fs.existsSync(indexPath) && !fs.existsSync(backupPath)) {
  fs.copyFileSync(indexPath, backupPath);
  console.log('Backed up index.html to index.html.bak');
}

// 2. Create directories
const dirs = [
  path.join(__dirname, 'src'),
  path.join(__dirname, 'src', 'components'),
  path.join(__dirname, 'src', 'hooks'),
  path.join(__dirname, 'public'),
  path.join(__dirname, 'public', 'images')
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// 3. Move images to public/images
const oldImagesDir = path.join(__dirname, 'images');
const newImagesDir = path.join(__dirname, 'public', 'images');
if (fs.existsSync(oldImagesDir)) {
  copyFolderSync(oldImagesDir, newImagesDir);
  console.log('Successfully copied all images to public/images');
} else {
  console.log('Warning: No source images/ directory found.');
}

console.log('Directory setup completed successfully!');
