const path = require('path');

describe('Slide navigation', () => {
  beforeAll(async () => {
    const html = 'file:' + path.resolve(__dirname, '../index.html');
    await page.goto(html);
  });

  it('should update current slide on arrow key presses', async () => {
    await page.waitForSelector('#currentSlide');
    let text = await page.$eval('#currentSlide', el => el.textContent);
    expect(text).toBe('1');

    await page.keyboard.press('ArrowRight');
    await page.waitForFunction(() => document.querySelector('#currentSlide').textContent === '2');
    text = await page.$eval('#currentSlide', el => el.textContent);
    expect(text).toBe('2');

    await page.keyboard.press('ArrowLeft');
    await page.waitForFunction(() => document.querySelector('#currentSlide').textContent === '1');
    text = await page.$eval('#currentSlide', el => el.textContent);
    expect(text).toBe('1');
  });
});
