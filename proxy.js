var express = require('express');
var proxy = require('http-proxy-middleware');
var app = express();
app.use('/dream', proxy({
    // 代理跨域目标接口
    target: 'http://v.juhe.cn',
    changeOrigin: true,

    // 修改响应头信息，实现跨域并允许带cookie
    onProxyRes: function(proxyRes, req, res) {
        res.header('Access-Control-Allow-Origin', '*');
    },
    // 修改响应信息中的cookie域名
//  cookieDomainRewrite: ''  // 可以为false，表示不修改
}));
app.use('/', proxy({
    // 代理跨域目标接口
    target: 'http://web.juhe.cn:8080',
    changeOrigin: true,

    // 修改响应头信息，实现跨域并允许带cookie
    onProxyRes: function(proxyRes, req, res) {
        res.header('Access-Control-Allow-Origin', '*');
    },
    // 修改响应信息中的cookie域名
//  cookieDomainRewrite: ''  // 可以为false，表示不修改
}));

app.listen(3000);//你的端口