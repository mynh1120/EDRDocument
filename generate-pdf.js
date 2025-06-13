
const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const baseUrl = 'http://localhost:3000';
  const routes = [
    '/',
    //'/docs/intro',
    //'/docs/Home/Dashboard',
    // phần Dashboard
    '/docs/Investigate/Alerts',
    //'/docs/Investigate/Events', 
    '/docs/Investigate/Incidents',
    // phần investigate 
    //'/docs/Endpoint management/Endpoints groups',
    '/docs/Endpoint management/Endpoints summary',
    // phần Endpoint management
    //'/docs/Response/Tasks',
    //'/docs/Response/Triggers',
    // phần response
    //'/docs/Server Management/Configuration',
    //'/docs/Server Management/Decoders',  
    //'/docs/Server Management/Reporting', 
    //'/docs/Server Management/Rules', 
    //'/docs/Server Management/Security',
    // phần Server Management
    //'/docs/Setting/Index management/aliases',
    //'/docs/Setting/Index management/data streams',
    //'/docs/Setting/Index management/indexes',
    //'/docs/Setting/Index management/nofitication settings',
    //'/docs/Setting/Index management/policy-managed-indexes',
    //'/docs/Setting/Index management/repositories',
    //'/docs/Setting/Index management/rollup',
    //'/docs/Setting/Index management/snapshot policies',
    //'/docs/Setting/Index management/snapshots',
    //'/docs/Setting/Index management/state-management-policies',
    //'/docs/Setting/Index management/templates',
    //'/docs/Setting/Index management/transform jobs',
    // phần setting/Index managerment
    //'/docs/Setting/Sercurity/auditlog',
    //'/docs/Setting/Sercurity/authentication',
    //'/docs/Setting/Sercurity/get-started',
    //'/docs/Setting/Sercurity/internal users',
    //'/docs/Setting/Sercurity/permissions',
    //'/docs/Setting/Sercurity/roles',
    //'/docs/Setting/Sercurity/tenants',
    // phần setting/Sercurity
    //'/docs/Setting/Dashboard management/advanced settings',
    //'/docs/Setting/Dashboard management/index-patterns',
    //'/docs/Setting/Dashboard management/save objects',
    // phần setting/Dashboard management
    //'/docs/Setting/App setting/configuration',
    //'/docs/Setting/App setting/Miscellaneous',
    // phần setting/App setting
  ];
  for (const route of routes) {
    const fullUrl = baseUrl + route;
    const outputPath = `pdf${route === '/' ? '/home' : route}.pdf`.replace(/\/+/g, '_');
    console.log(`:page_facing_up: Exporting: ${fullUrl} → ${outputPath}`);
    await page.goto(fullUrl, { waitUntil: 'networkidle0' });
    const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
    await page.pdf({
      path: outputPath,
      printBackground: true,
      width: '800px',
      height: `${bodyHeight}px`,
    });
  }
  await browser.close();
})();