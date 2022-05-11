/**
 * @author Benjamin Guirlet
 * @description
 *      Le point de départ du bot.
 */


const { TOKEN } = require( "secret/auth.json" );
const { Client, Intents } = require( "discord.js" );


const client = new Client({
	intents: [
		Intents.FLAGS.GUILD_MESSAGES
	]
});


(async () => {
	await client.login( TOKEN );
})()