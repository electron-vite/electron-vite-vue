import { clog } from "../poe/login";
import { login } from "./login";

export async function validate(options) {
  const log = clog(options)
  log('开始', { ident: 'gpt-validate' })
  const page = await login(options)

  await page.waitForSelector('body > div.absolute.inset-0')
  await page.evaluate(() => {
    const $mark = document.querySelector("body > div.absolute.inset-0")
    if ($mark) $mark.hidden = true
    document.body.style.pointerEvents = 'all'
  })
  log('隐藏欢迎页面，开始检测')

  await page.waitForTimeout(2000)

  const isSuccess = await page.evaluate((selector, searchText) => {
    const elements = Array.from(document.querySelectorAll(selector));
    const target = elements.find(el => el.textContent.trim() === searchText);
    return !!target
  }, 'button', 'GPT-4')
  log('获取链接成功', { result: isSuccess ? '充值成功😘' : '充值失败😭', type: isSuccess ? 'success' : 'fail' })

  console.log(isSuccess)
}
