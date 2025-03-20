## These are answers to my technical support assessment for an ecommerce store(I hope to use them in future)

### Shopify Store Speed Optimization
"To optimize the store’s speed, I would:

Analyze Performance using Google PageSpeed Insights and Shopify’s speed report.
Optimize Images by compressing large files using Shopify’s built-in image optimization or tools like TinyPNG.
Reduce Unnecessary Apps & Scripts to minimize third-party requests.
Enable Shopify’s Caching & CDN to improve content delivery speed.
Minimize JavaScript & CSS Files by removing unused code and enabling lazy loading.
I would then test the store’s speed again and provide the merchant with recommendations for ongoing maintenance."

### Shopify Checkout Failure Troubleshooting
"To troubleshoot this issue, I would:

Check Browser Console for JavaScript errors (F12 > Console).
Test Checkout on Different Networks & Devices to rule out connectivity issues.
Inspect Shopify’s Payment Gateway Logs to identify any failures.
Test Checkout in Incognito Mode to rule out browser caching issues.
Disable Third-Party Apps & Custom Scripts that could be interfering.
Once resolved, I would inform the merchant of the root cause and provide preventive steps for future issues."


### Node.js Script to Fetch Products
const fetch = require("node-fetch");

fetch("https://fakestoreapi.com/products")
    .then(res => res.json())  // ✅ Fix: Correct function call
    .then(json => console.log(json))
    .catch(error => console.error("Error fetching products:", error));


### Incorrect API Request for Fetching a Specific Product
curl -X GET https://fakestoreapi.com/products/5

OR
fetch("https://fakestoreapi.com/products/5")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error fetching product:", error));
