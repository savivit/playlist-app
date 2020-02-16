export default class ArtistModel {
    constructor(parseArtist) {
        this.id = parseArtist.id;
        this.tsartistId = parseArtist.get("tsartistId"); //Spotify Id   
        this.tsartistName = parseArtist.get("tsartistName");  
        this.tsartistEnglishName = parseArtist.get("tsartistEnglishName");
      
        
        // not in use
        this.tsartistType = parseArtist.get("tsartistType");  //Artist
        this.alsoInId = parseArtist.get("alsoInId");     

    }
}
