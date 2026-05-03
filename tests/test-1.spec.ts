import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://shopee.vn/buyer/login?fu_tracking_id=78143336081-57a2-4c28-bf22-a4dbe6e67a5e&next=https%3A%2F%2Fshopee.vn%2F');
  await page.getByRole('button', { name: 'Tiếng Việt' }).click();
  await expect(page.getByRole('contentinfo')).toMatchAriaSnapshot(`
    - text: SHOPEE VIỆT NAM
    - list:
      - listitem:
        - link "Về Shopee":
          - /url: https://careers.shopee.vn/about
      - listitem:
        - link "Tuyển Dụng":
          - /url: https://careers.shopee.vn/jobs
      - listitem:
        - link "Điều Khoản Shopee":
          - /url: https://help.shopee.vn/portal/article/77242
      - listitem:
        - link "Chính Sách Bảo Mật":
          - /url: https://help.shopee.vn/portal/article/77244
      - listitem:
        - link "Shopee Mall":
          - /url: https://shopee.vn/mall/
      - listitem:
        - link "Kênh Người Bán":
          - /url: https://banhang.shopee.vn/
      - listitem:
        - link "Flash Sale":
          - /url: https://shopee.vn/flash_sale/
      - listitem:
        - link "Tiếp Thị Liên Kết":
          - /url: https://shopee.vn/affiliate/
      - listitem:
        - link "Liên Hệ Truyền Thông":
          - /url: mailto:media.vn%40shopee.com
    `);
  await expect(page.getByRole('contentinfo')).toContainText('SHOPEE VIỆT NAM');
  await expect(page.getByText('Đăng nhập').nth(1)).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Email/Số điện thoại/Tên đăng' })).toBeEmpty();await page.goto('https://shopee.vn/buyer/login?fu_tracking_id=103a837d210-f113-4de8-8efe-a1fc0febffda&next=https%3A%2F%2Fshopee.vn%2F');
  await page.getByRole('button', { name: 'Tiếng Việt' }).click();
  await page.getByRole('textbox', { name: 'Email/Số điện thoại/Tên đăng' }).click();
  await page.getByRole('textbox', { name: 'Email/Số điện thoại/Tên đăng' }).fill('rewfs');
  await page.getByRole('textbox', { name: 'Email/Số điện thoại/Tên đăng' }).click();
  await page.getByRole('textbox', { name: 'Email/Số điện thoại/Tên đăng' }).fill('rewfsfdafafasf');
  await page.getByRole('textbox', { name: 'Mật khẩu' }).click();
  await page.getByRole('textbox', { name: 'Mật khẩu' }).fill('fdafasfa');
  await page.getByRole('button', { name: 'Đăng nhập' }).click();
  await page.getByRole('button', { name: 'Tiếng Việt' }).click();
});