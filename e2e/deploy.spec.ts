import { test, expect } from '@playwright/test';

function delay(time){
  return new Promise(function(resolve){
    setTimeout(resolve, time)
  })
}

test('Is deployed', async ({page}) => {
  await page.goto('https://sarrailhadaptive.github.io/stopwatch-typescript/')

  await expect(page).toHaveTitle("Vite + React + TS")
  await expect(page).toHaveURL('https://sarrailhadaptive.github.io/stopwatch-typescript/')
})

test('Start and Stop Stopwatch', async ({ page }) => {
  await page.goto('https://sarrailhadaptive.github.io/stopwatch-typescript/')
  await page.screenshot({path: './src/tests-screenshots/stopwatch.png'})
  await page.click('button.stopwatch-button-start')
  await delay(650)
  await page.click('button.stopwatch-button-lap')
  await delay(2000)
  await page.click('button.stopwatch-button-lap')
  await delay(300)
  await page.click('button.stopwatch-button-lap')
  await delay(800)
  await page.click('button.stopwatch-button-lap')
  await delay(1500)
  await page.click('button.stopwatch-button-stop')
  await page.screenshot({path: './src/tests-screenshots/after-start.png'})
  await page.click('button.stopwatch-button-reset')
  await page.screenshot({path: './src/tests-screenshots/reset.png'})
  page.close()
})