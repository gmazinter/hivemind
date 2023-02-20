import puppeteer from "puppeteer";

class Scraper {
  constructor() {}
  private browser;

  initBrowser = async () => {
    this.browser = await puppeteer.launch();
  };

  openPage = async (url: string) => {
    const page = await this.browser.newPage();
    await page.goto(url);

    // Set screen size
    await page.setViewport({ width: 1080, height: 1024 });

    // Type into search box
    await page.type(".search-box__input", "automate beyond recorder");

    // Wait and click on first result
    const searchResultSelector = ".search-box__link";
    await page.waitForSelector(searchResultSelector);
    await page.click(searchResultSelector);

    // Locate the full title with a unique string
    // const textSelector = await page.waitForSelector(
    //   "text/Customize and automate"
    // );
    // const fullTitle = await textSelector.evaluate((el) => el.textContent);

    // Print the full title
    // console.log('The title of this blog post is "%s".', fullTitle);

    // await browser.close();
  };

  scrapeQuestion = () => {};
}

export const stackOverflowScraper = new Scraper();
