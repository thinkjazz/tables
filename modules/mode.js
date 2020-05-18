//Mode production OR development
const isProduction = process.env.NODE_ENV === 'production'
const isDevelopment = !isProduction
const port = '4200'

const mode = function () {
    console.log( "Production mode:", isProduction )
    console.log( "Development mode:", isDevelopment )
    console.log( '\n' )

}
module.exports = {isDevelopment, isProduction, port, mode}
