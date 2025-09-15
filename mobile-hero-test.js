const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 375, height: 812 }, // iPhone X size
    deviceScaleFactor: 2,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1'
  });
  
  const page = await context.newPage();
  
  try {
    // Navigate to the homepage
    await page.goto('http://localhost:3000/ko', { waitUntil: 'networkidle' });
    
    // Wait for the page to load and animations to complete
    await page.waitForSelector('h1', { timeout: 10000 });
    await page.waitForTimeout(4000); // Wait for animations
    
    // Take a screenshot of just the hero section
    const heroSection = await page.locator('section').first();
    await heroSection.screenshot({ 
      path: '/Users/admin/Desktop/mobile-hero-screenshot.png',
      type: 'png'
    });
    
    console.log('Mobile hero section screenshot saved to: /Users/admin/Desktop/mobile-hero-screenshot.png');
    
    // Get some information about the elements for analysis
    const mainTitle = await page.locator('h1').first();
    const subtitle = await page.locator('p').first();
    
    const titleText = await mainTitle.textContent();
    const subtitleText = await subtitle.textContent();
    
    console.log('Main title:', titleText);
    console.log('Subtitle:', subtitleText);
    
    // Check computed styles
    const titleStyles = await mainTitle.evaluate((el) => {
      const styles = window.getComputedStyle(el);
      return {
        fontSize: styles.fontSize,
        lineHeight: styles.lineHeight,
        overflow: styles.overflow,
        width: el.offsetWidth,
        height: el.offsetHeight
      };
    });
    
    const subtitleStyles = await subtitle.evaluate((el) => {
      const styles = window.getComputedStyle(el);
      return {
        fontSize: styles.fontSize,
        lineHeight: styles.lineHeight,
        overflow: styles.overflow,
        width: el.offsetWidth,
        height: el.offsetHeight
      };
    });
    
    console.log('Title styles on mobile:', titleStyles);
    console.log('Subtitle styles on mobile:', subtitleStyles);
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
})();