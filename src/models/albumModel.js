export default class AlbumModel {
    constructor(parseAlbum) {
        this.id = parseAlbum.id;
        this.tsalbumId = parseAlbum.get("tsalbumId"); //Spotify Id   
        this.tsalbumName = parseAlbum.get("tsalbumName");  
        this.tsalbumReleaseDate = parseAlbum.get("tsalbumReleaseDate");
        this.tsalbumNoOfArtists = parseAlbum.get("tsalbumNoOfArtists"); 
        this.tsalbumArtists = parseAlbum.get("tsalbumArtists"); //Array
        this.tsalbumPicLg = parseAlbum.get("tsalbumPicLg"); //640px
        this.tsalbumPicMd = parseAlbum.get("tsalbumPicMd");   // 300 px
        this.tsalbumPicSm = parseAlbum.get("tsalbumPicSm");   //64 px
        this.tsalbumNoOfTracks = parseAlbum.get("tsalbumNoOfTracks");     
        
        // not in use
        this.tsalbumType = parseAlbum.get("tsalbumType"); //compilation or collection    
        this.tsalbumLable = parseAlbum.get("tsalbumLable");
        this.tsalbumEnglishName = parseAlbum.get("tsalbumEnglishName"); 
        this.tsalbumUpc = parseAlbum.get("tsalbumUpc");
        this.tsalbumTypeA = parseAlbum.get("tsalbumTypeA");  //Album
        this.strackArtistsPreformers = parseAlbum.get("strackArtistsPreformers");
    }
}

