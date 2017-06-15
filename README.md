# Steps to Run
`npm install`  
`LAPINE_USERNAME=username LAPINE_PASSWORD=password node get.js`

# Error
```
 Error: unable to verify the first certificate
    at Error (native)
    at TLSSocket.<anonymous> (_tls_wrap.js:1062:38)
    at emitNone (events.js:86:13)
    at TLSSocket.emit (events.js:185:7)
    at TLSSocket._finishInit (_tls_wrap.js:586:8)
    at TLSWrap.ssl.onhandshakedone (_tls_wrap.js:416:38)
  code: 'UNABLE_TO_VERIFY_LEAF_SIGNATURE'
  ```