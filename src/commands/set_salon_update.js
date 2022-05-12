/**
 * @author Benjamin Guirlet
 * @file
 *		Fichier contenant la commande 'set_salon_update'.
 *	    Cette commande permet de définir quel salon va être utilisé pour envoyer les updates sur les cours des
 *	    cryptos.
 */

const { SlashCommandBuilder } = require( "@discordjs/builders" );
const { CommandInteraction } = require( "discord.js" );
const fs = require( "fs" );


/* ----------------------------------------------- */
/* COMMAND BUILD                                   */
/* ----------------------------------------------- */
const slashCommand = new SlashCommandBuilder()
    .setName( "set_salon_update" )
    .setDescription(
        "Active ce salon comme salon d'update ou désactive le salon des updates." )
    .addBooleanOption( option =>
        option.setName( "desactiver" )
            .setDescription( "Si cette option est vraie, alors le salon des updates est désactivé." )
    );


/* ----------------------------------------------- */
/* FUNCTIONS                                       */
/* ----------------------------------------------- */
/**
 * Handler pour la SlashCommande.
 * @param {CommandInteraction} interaction L'interaction générée par l'exécution de la commande.
 */
async function execute( interaction ) {
    const desactiver = interaction.options.get( "desactiver" );
    fs.readFile( "./files/data.json", function ( err, fichier ) {
        if ( err ) return console.log( err );

        fichier = JSON.parse( fichier );
        if ( desactiver )
            fichier["salon_update_id"] = "";
        else
            fichier["salon_update_id"] = interaction.channelId;

        fs.writeFile( "./files/data.json", JSON.stringify( fichier ), function ( err ) {
            if ( err ) throw ( err );
        });
    });

    if ( desactiver )
        return interaction.reply( "Le salon des updates a été désactivé !" );
    else
        return interaction.reply( "Ce salon a été défini comme salon des updates !" );
}


/* ----------------------------------------------- */
/* MODULE EXPORTS                                  */
/* ----------------------------------------------- */
module.exports = {
    data: slashCommand,
    execute
}