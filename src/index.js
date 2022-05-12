/**
 * @author Benjamin Guirlet
 * @description
 *      Le point de départ du bot.
 */


const { TOKEN } = require( "./secret/auth.json" );
const { Client, Intents, Collection } = require( "discord.js" );
const { loadCommands, loadEvents } = require( "./utils/loadAssets" );

const client = new Client({
	intents: [
		Intents.FLAGS.GUILD_MESSAGES
	]
});

client.commands = new Collection();
(async () => {
	await loadCommands( client );
	await loadEvents( client );
	
	await client.login( TOKEN );

	// Décommenter le code suivant pour charger les commandes sur le serveur.
	const { loadCommandsToGuild } = require( "./utils/loadAssets" );
	await loadCommandsToGuild( client, "674327923192365071" );
})()