import http from 'http'; http.get('http://localhost:3000/src/Imagenes/scan-1781635867168.jpg', (res) => { console.log(res.statusCode); }).on('error', console.error);
