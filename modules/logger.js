// Function draw styling in CLI
const colog = require('colog')
const {port} = require('./mode')

const logger = function() {
  colog.warning( 'Loading modules...' )
  for (let i = 1; i < 100; i++) {
    colog.progress( i++ )
  }
  colog.success( 'done...' )

  colog.log( colog.bgBlack( '-----------------------------------' ) )
  colog.log( colog.bgBlack( '           o_0 o_o o_o 0_o         ' ) )
  colog.log( colog.bgBlack( '[C] [A] [S] [S] [A] [P] [P] [E] [I]' ) )
  colog.headerWarning( '[F] [R] [A] [M] [E] [W] [O] [R] [K]' )
  colog.log( colog.bgBlack( '           o_0 o_o o_o 0_o         ' ) )
  colog.log( colog.bgBlack( '-----------------------------------' ) )
  colog.warning( 'Running core...' )
  colog.success( 'done...' )

  colog.log( colog.bgBlack( '           o_O >_< >_< 0_o         ' ) )
  console.log( '\n' )
  colog.log( colog.bgRed('Application server starting and listening... '))
  colog.warning(`App is running at http://localhost:${port}/`)
}

module.exports = {logger}
