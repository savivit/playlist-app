export default class PlaylistModel {
    constructor(parsePlaylist) {
        this.id = parsePlaylist.id;
        this.playlistTitle = parsePlaylist.get("playlistTitle");
        this.playlistDesc = parsePlaylist.get("playlistDesc");
        this.playlistPic = parsePlaylist.get("playlistPic");
        this.playlistOwner = parsePlaylist.get("playlistOwner");       
    }
}

