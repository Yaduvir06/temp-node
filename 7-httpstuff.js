const http =require('http')
//request and response
const server = http.createServer((req,res)=>{
console.log(req)
if(req.url== '/')
{
    res.end('Welcome to homepage')
}
if(req.url== '/about')
    {
        res.end('Welcome to about page');
    }
    
res.end(`
    <h1>oops!!</h1>
    <p>We cant seem to find the page you are looking for </p>
    <a href="/"> back home</a>
    `
)
} )

server.listen(5000)