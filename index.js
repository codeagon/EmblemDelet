module.exports = function DeletEmblem(dispatch) {

	dispatch.hook('S_SPAWN_USER', 5, event =>{
	event.guildEmblem = ''
	return true;
	})
	dispatch.hook('S_GUILD_NAME', 1, event =>{
		event.guildEmblem = ''
		return true;
	})
}
