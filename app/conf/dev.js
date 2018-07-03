module.exports = {
    domain: 'localhost:3000',
    cdn: 'localhost:4326',
    ip: '127.0.0.1',
    api_url: 'http://api.cryptotrust.loc',
    app: {
        host: '0.0.0.0',
        port: 3000
    },
    session: {
        secret  : 'Se$5i0nSaLt+42#',
        name    : 'cryptotrust.sid',
        duration: 30 * 24 * 60 * 60 * 1000 // 30d
    }
}