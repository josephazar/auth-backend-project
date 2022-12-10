const environment = {
    port: parseInt(process.env.PORT) || 8080,
    nodeEnv: process.env.NODE_ENV || 'production',
    saltRounds: parseInt(process.env.SALT_ROUNDS) || 10,
    jwtAccessTokenSecret: process.env.JWT_ACCESS_TOKEN_SECRET ||
        '2fbd6fc863590059c8651a87132a991e261f9833afbd2d9d6ce07180bf46bc6e4781ff98146484022cc559378a5d5960503711ffe39c328fc3c84d158b0d7986',
    jwtRefreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET ||
        '1228f3c1ed86117d1e14124eaae9e8b6e7740cdd864f304486d378b59613a4b20fb6b3fe722c378d42d9de547523181d8c27b3f187ad6ba6247f165f1a055c8a',

}

export default environment;