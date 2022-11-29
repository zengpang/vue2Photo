module.exports = {
    // 代理配置
    devServer: {
        port: 8080,
        proxy: {
            '/': {
                target: 'https://assets7.lottiefiles.com',
                changeOrigin: true,
            }
        }
    }
};