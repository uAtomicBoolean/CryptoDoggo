/**
 * @author Benjamin Guirlet
 * @file
 *		L'évènement 'ready' permet de lancer des fonctionnalités tournant h24 en background ainsi que de charger des
 *		permisssions, etc.
 */

const { Client } = require( "discord.js" );


/* ----------------------------------------------- */
/* FUNCTIONS                                       */
/* ----------------------------------------------- */
/**
 * Handler pour l'évènement 'ready'.
 * @param client {Client} Le client qui vient de se connecter.
 */
async function execute( client ) {
    console.log( `${client.user.username} is connected!` );

    client.user.setActivity( "vendre des cryptos pour devenir riche.", { type: "PLAYING" } );
}


/* ----------------------------------------------- */
/* MODULE EXPORTS                                  */
/* ----------------------------------------------- */
module.exports = {
    name: "ready",
    execute
}