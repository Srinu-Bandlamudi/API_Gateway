const express =require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const morgan=require('morgan');


const app=express();

const PORT=3006;

app.use(morgan('combined'));
app.use(
    '/bookingservice',
    createProxyMiddleware({
      target: 'http://localhost:3002',
      changeOrigin: true,
    }),
);
app.get('/home',(req,res)=>{
    res.json({
        message:'OK'
    });
});

app.listen(PORT,async=>{
    console.log(`Server started at PORT${PORT}`);
})