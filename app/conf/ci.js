module.exports = {
    domain              : 'localhost',
    cdn                 : 'localhost:4326',
    ip                  : '127.0.0.1',
    api_url             : '',
    app                 : {
        host                : '127.0.0.1',
        port                : 8080
    },
    session             : {
        secret: 'Se$sK05i0nS4Lt+42--*z',
        name: 'cryptotrust.sid',
        duration: 30 * 24 * 60 * 60 * 1000 // 30d
    }
};