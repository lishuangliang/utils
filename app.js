const Koa = require('koa');
const app = new Koa();
const static = require('koa-static');
const path = require('path');

app.use(static(path.resolve(__dirname, 'client')));

app.use( async (ctx, next)=>{
    ctx.body = 'hello koa';
    next();
})

app.listen( 3008, ()=>{
    console.log('server running on http://localhost:3008');
})
