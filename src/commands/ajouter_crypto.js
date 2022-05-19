/**
 * @author Benjamin Guirlet
 * @file
 *		Fichier contenant la commande 'ajouter_crypto'.
 *	    Cette commande permet d'ajouter une cryptmonnaie à la liste des cryptomonnaies surveillées.
 */

const { SlashCommandBuilder } = require( "@discordjs/builders" );
const { CommandInteraction } = require( "discord.js" );
const axios = require( "axios" );
const fs = require( "fs" );


/* ----------------------------------------------- */
/* COMMAND BUILD                                   */
/* ----------------------------------------------- */
const slashCommand = new SlashCommandBuilder()
		.setName( "ajouter_crypto" )
		.setDescription( "Ajoute ou update une cryptomonnaie dans la liste des crypto surveillées." )
		.addStringOption( option =>
			option.setName( "symbole" )
				.setDescription( "Le symbole de la cryptomonnaie parmis la liste de Binance." )
				.setRequired( true )
		)
	/*.addStringOption( option =>
		option.setName( "pas_delai" )
			.setDescription( "Le pas de temps pour le délai entre chaque mise à jour." )
			.addChoices( [ ["Jour", "jour"], [ "Heure", "heure" ], [ "Minute", "minute" ] ] )
			.setRequired( true )
	)
	.addIntegerOption( option =>
		option.setName( "delai" )
			.setDescription( "Le délai entre chaque mise à jour." )
			.setRequired( true )
			.setMinValue( 1 )
	)*/;


/* ----------------------------------------------- */
/* FUNCTIONS                                       */
/* ----------------------------------------------- */
/**
 * Handler pour la SlashCommande.
 * @param {CommandInteraction} interaction L'interaction générée par l'exécution de la commande.
 */
async function execute( interaction ) {
	// Requete prix moyen = https://api.binance.com/api/v3/avgPrice?symbol=SOLEUR
	// 
}


/* ----------------------------------------------- */
/* MODULE EXPORTS                                  */
/* ----------------------------------------------- */
module.exports = {
	data: slashCommand,
	execute
}