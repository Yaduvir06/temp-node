const EventEmitter =require ('events');

const customemitter=new EventEmitter()


customemitter.on('response',(name,id)=>{
    console.log(`data recieved from ${name} ${id}`);
})

customemitter.on('response',()=>{
    console.log('some other stuff');
})
customemitter.emit('response', 'jok', 5);

const http=require ('http');
const server= http.createServer();

server.on('req',(req,res)=>{
    res.end('welcome')
});
server.listen(5000);