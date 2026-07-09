import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(__dirname, 'poster-argrow-a1.html');
const pdfPath = path.join(__dirname, 'Poster-Argrow-A1.pdf');
const pngPath = path.join(__dirname, 'Poster-Argrow-A1-preview.png');

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
await page.goto('file://' + htmlPath, { waitUntil: 'networkidle0', timeout: 60000 });

await page.pdf({
  path: pdfPath,
  width: '594mm',
  height: '841mm',
  printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
});

const w = Math.round((594 * 96) / 25.4);
const h = Math.round((841 * 96) / 25.4);

await page.setViewport({ width: w, height: h, deviceScaleFactor: 1 });
await page.screenshot({ path: pngPath, clip: { x: 0, y: 0, width: w, height: h } });

await browser.close();
console.log('PDF:', pdfPath);
console.log('PNG:', pngPath);
