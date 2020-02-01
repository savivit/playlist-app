export default class SongModel {
    constructor(parseSong) {
        this.id = parseSong.id;
        this.songTitle = parseSong.get("songTitle");
        this.songAltName = parseSong.get("songAltName");
        this.songYear = parseSong.get("songYear");
        this.songPreviewSpotify = parseSong.get("songPreviewSpotify");
        this.owner = parseSong.get("owner");
        //this.img = parseSong.get("image")._url;
        
    } 
}
