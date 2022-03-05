// example.spec.ts
import { test, expect } from '@playwright/test'
import { env } from '../package.json'
const VITE_SERVER_ADDRESS = `http://127.0.0.1:${env.PORT || 3344}`

test('example test case', async ({ page }) => {
  await page.goto(VITE_SERVER_ADDRESS)

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Vite App/)

  // Expect an attribute "Hello Vue 3 + TypeScript + Vite" to be visible on the page.
  await expect(
    page.locator('text=Hello Vue 3 + TypeScript + Vite').first(),
  ).toBeVisible()
})
