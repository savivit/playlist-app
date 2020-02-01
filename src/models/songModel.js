export default class SongModel {
    constructor(parseSong) {
        this.id = parseSong.id;
        this.songTitle = parseSong.get("songTitle");
        this.songAltName = parseSong.get("songAltName");
        this.songYear = parseSong.get("songYear");
        this.songPreviewSpotify = parseSong.get("songPreviewSpotify");
        this.songPerformer = parseSong.get("songPerformer");
        
        this.songPic = parseSong.get("songPic");
        this.songPicSmall = parseSong.get("songPicSmall");
        //this.img = parseSong.get("image")._url;

        this.owner = parseSong.get("owner");
    }
}


