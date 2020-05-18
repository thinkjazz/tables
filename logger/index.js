let logger = function() {

    console.log( '\n' )
    colog.log( colog.bgBlack( '-----------------------------------' ) )
    colog.log( colog.bgBlack( '           o_0 o_o o_o 0_o         ' ) )
    colog.log( colog.bgBlack( '[M] [A] [T] [R] [E] [S] [H] [K] [A]' ) )
    colog.headerError( '[F] [R] [A] [M] [E] [W] [O] [R] [K]' )
    colog.log( colog.bgBlack( '-----------------------------------' ) )
    colog.log( colog.bgBlack( '           o_O >_< >_< 0_o         ' ) )
    colog.warning( "Running core..." )
    colog.progress( 0, 100 )
    for (let i = 0; i < 100; i++) {
        colog.progress( i++ )
    }
    colog.success( "done..." )

    console.log( '\n' )

    colog.log( colog.bgMagenta( 'USING BUILDING MODE' ) )
}

module.exports = {logger}
