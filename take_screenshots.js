import puppeteer from 'puppeteer';
import * as path from 'path';

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  
  await page.setViewport({ width: 390, height: 844, isMobile: true });

  const baseUrl = 'http://localhost:5173';
  const outDir = '/Users/redah/Documents/cours/M1/S8/prog_mobile/Projet';

  console.log('Navigating to home...');
  await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle2' });

  // Debug 1
  await page.screenshot({ path: path.join(outDir, 'debug_0_home.png') });

  console.log('Navigating to login...');
  await page.evaluate(() => {
    window.history.pushState({}, '', '/login');
    window.dispatchEvent(new Event('popstate'));
  });
  await new Promise(r => setTimeout(r, 1000));

  // Debug 2
  await page.screenshot({ path: path.join(outDir, 'debug_1_login.png') });

  console.log('Logging in...');
  await page.type('#email', 'test@test.com');
  await page.type('#password', 'password');

  // Debug 3
  await page.screenshot({ path: path.join(outDir, 'debug_2_filled.png') });

  await page.click('button[type="submit"]');
  
  // Wait to see if it redirects
  await new Promise(r => setTimeout(r, 2000));

  // Debug 4
  await page.screenshot({ path: path.join(outDir, 'debug_3_after_submit.png') });

  console.log('Navigating to /groups...');
  await page.evaluate(() => {
    window.history.pushState({}, '', '/groups');
    window.dispatchEvent(new Event('popstate'));
  });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(outDir, 'sc_groups.png') });
  
  console.log('Navigating to /profile...');
  await page.evaluate(() => {
    window.history.pushState({}, '', '/profile');
    window.dispatchEvent(new Event('popstate'));
  });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(outDir, 'sc_profile.png') });

  await browser.close();
})();
