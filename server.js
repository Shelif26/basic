const http=require('http');
const { default: test } = require('node:test');
const server =http.createServer((req,res)=>{ const url =req.url;
    if (url === "/"){
        res.setHeader('content_type','text_html');
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>');
        res.write("<body><h1>Enter a message you need to print !!</h1></body>");
        res.write("<form action='/message' method='post'><input type='text' name='message'><button>Submit</button></form>");
        
        res.write('</html>')
        res.end();
    }
// process.exit();
res.setHeader('content_type','text_html');
res.write('<html>')
res.write('<head><title>Welcome</title></head>')
res.write("<body><h1>Welcome !! Have a great day !!</h1></body>")
res.write('<form action="/message" method="get"><input type="text"><button>Submit</button></form>')
res.write('</html>')
res.end();
});
server.listen(8000)