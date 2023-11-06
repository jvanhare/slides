const { launch } = require("puppeteer");
const { PDFDocument, } = require("pdf-lib");
const { writeFileSync, readFileSync } = require("fs");
const PDFMerger = require('pdf-merger-js');

async function html_to_pdf(page, name, number) {
  const website_url =
    'http://localhost:3000/?slideIndex=' + number + '&stepIndex=0';
  await page.goto(website_url, { waitUntil: "networkidle0" });
  await page.emulateMediaType("screen");
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  const width = await page.evaluate(() => document.documentElement.scrollWidth);
  await page.pdf({
    path: name + '_' + number + '.pdf',
    margin: { top: "0px", right: "0px", bottom: "0px", left: "0px" },
    printBackground: true,
    height: height + "px",
    width: width + "px",
  });
  const doc = (await PDFDocument.load(readFileSync(name + '_' + number + '.pdf')));
  const first = doc.getPage(0);
  first.setCropBox(0, 55, 600, 340);
  writeFileSync(name + '_' + number + '.pdf', await doc.save());
}

const main = async (beg, end) => {
  var url = require('../package.json').homepage.split('/');
  var name = url[url.length - 1]
  const browser = await launch({ headless: "new" });
  const page = await browser.newPage();
  var merger = new PDFMerger();
  for (let i = beg; i <= end; i++) {
    await html_to_pdf(page, name, i);
    await merger.add(name + '_' + i + '.pdf');
  }
  await merger.save(name + '.pdf');
  await browser.close();
}

main(process.argv.slice(2)[0], process.argv.slice(2)[1]);
