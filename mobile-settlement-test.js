const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function testMobileSettlementTable() {
  // Launch browser
  const browser = await chromium.launch({ 
    headless: false, // Set to true if you don't want to see the browser
    slowMo: 1000 // Add delay for better visibility
  });
  
  const context = await browser.newContext({
    // Set mobile viewport - iPhone X/11 Pro size
    viewport: { width: 375, height: 667 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Mobile/15E148 Safari/604.1'
  });
  
  const page = await context.newPage();
  
  try {
    console.log('🚀 Starting mobile settlement services test...');
    
    // Step 1: Navigate to homepage first (as fallback)
    console.log('📍 Step 1: Navigating to homepage...');
    try {
      await page.goto('http://localhost:3000/ko', { 
        waitUntil: 'networkidle',
        timeout: 30000 
      });
      await page.waitForTimeout(2000);
      console.log('✅ Homepage loaded successfully');
    } catch (error) {
      console.log('⚠️ Homepage navigation failed, proceeding to arrival page directly');
    }
    
    // Step 2: Navigate directly to arrival page
    console.log('📍 Step 2: Navigating to arrival page...');
    await page.goto('http://localhost:3000/ko/arrival', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    await page.waitForTimeout(2000);
    console.log('✅ Arrival page loaded successfully');
    
    // Step 3: Take initial screenshot
    const screenshotDir = path.join(__dirname, '.playwright-screenshots');
    if (!fs.existsSync(screenshotDir)) {
      fs.mkdirSync(screenshotDir, { recursive: true });
    }
    
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    
    console.log('📱 Step 3: Taking initial mobile screenshot...');
    await page.screenshot({
      path: path.join(screenshotDir, `mobile-arrival-initial-${timestamp}.png`),
      fullPage: true
    });
    console.log('✅ Initial screenshot saved');
    
    // Step 4: Scroll to settlement services section
    console.log('📍 Step 4: Scrolling to settlement services section...');
    const settlementSection = await page.locator('h2:has-text("밴쿠버 정착 서비스 타임라인")').first();
    await settlementSection.scrollIntoView();
    await page.waitForTimeout(1000);
    
    // Step 5: Take screenshot of settlement services section
    console.log('📱 Step 5: Taking settlement services section screenshot...');
    await page.screenshot({
      path: path.join(screenshotDir, `mobile-settlement-services-${timestamp}.png`),
      fullPage: false
    });
    console.log('✅ Settlement services screenshot saved');
    
    // Step 6: Test horizontal scrolling on tables
    console.log('📍 Step 6: Testing table horizontal scrolling...');
    
    // Find all tables
    const tables = await page.locator('table').all();
    console.log(`Found ${tables.length} tables to test`);
    
    for (let i = 0; i < tables.length; i++) {
      console.log(`📊 Testing table ${i + 1}...`);
      const table = tables[i];
      
      // Scroll table into view
      await table.scrollIntoView();
      await page.waitForTimeout(500);
      
      // Take screenshot of table
      await page.screenshot({
        path: path.join(screenshotDir, `mobile-table-${i + 1}-before-scroll-${timestamp}.png`),
        fullPage: false
      });
      
      // Get table container (the scrollable div)
      const tableContainer = await table.locator('..').first(); // Parent div with overflow-x-auto
      
      // Test horizontal scrolling
      try {
        // Scroll to the right
        await tableContainer.evaluate((el) => {
          const scrollableParent = el.closest('.overflow-x-auto');
          if (scrollableParent) {
            scrollableParent.scrollLeft = scrollableParent.scrollWidth / 2;
          }
        });
        
        await page.waitForTimeout(1000);
        
        // Take screenshot after scrolling
        await page.screenshot({
          path: path.join(screenshotDir, `mobile-table-${i + 1}-after-scroll-${timestamp}.png`),
          fullPage: false
        });
        
        console.log(`✅ Table ${i + 1} horizontal scroll test completed`);
      } catch (scrollError) {
        console.log(`⚠️ Could not test scrolling for table ${i + 1}:`, scrollError.message);
      }
    }
    
    // Step 7: Test touch/swipe interactions
    console.log('📍 Step 7: Testing touch interactions...');
    
    // Scroll back to first table
    if (tables.length > 0) {
      await tables[0].scrollIntoView();
      await page.waitForTimeout(500);
      
      // Get the table container
      const firstTableContainer = await page.locator('.overflow-x-auto').first();
      const containerBox = await firstTableContainer.boundingBox();
      
      if (containerBox) {
        // Simulate swipe left (scroll right) gesture
        await page.touchscreen.tap(containerBox.x + containerBox.width / 2, containerBox.y + containerBox.height / 2);
        await page.mouse.move(containerBox.x + containerBox.width * 0.8, containerBox.y + containerBox.height / 2);
        await page.mouse.down();
        await page.mouse.move(containerBox.x + containerBox.width * 0.2, containerBox.y + containerBox.height / 2, { steps: 10 });
        await page.mouse.up();
        
        await page.waitForTimeout(1000);
        
        // Take screenshot after swipe
        await page.screenshot({
          path: path.join(screenshotDir, `mobile-table-after-swipe-${timestamp}.png`),
          fullPage: false
        });
        
        console.log('✅ Touch swipe interaction tested');
      }
    }
    
    // Step 8: Take final full-page screenshot
    console.log('📱 Step 8: Taking final full-page screenshot...');
    await page.screenshot({
      path: path.join(screenshotDir, `mobile-arrival-final-${timestamp}.png`),
      fullPage: true
    });
    console.log('✅ Final screenshot saved');
    
    console.log('🎉 Mobile settlement services testing completed!');
    console.log(`📁 All screenshots saved to: ${screenshotDir}`);
    
  } catch (error) {
    console.error('❌ Test failed:', error);
    
    // Take error screenshot
    try {
      await page.screenshot({
        path: path.join(__dirname, '.playwright-screenshots', `mobile-error-${Date.now()}.png`),
        fullPage: true
      });
    } catch (screenshotError) {
      console.error('Could not take error screenshot:', screenshotError);
    }
  } finally {
    await browser.close();
  }
}

// Run the test
testMobileSettlementTable().catch(console.error);