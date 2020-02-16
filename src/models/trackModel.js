export default class TrackModel {
    constructor(parseTrack) {
        this.id = parseTrack.id;
        this.tstrackId = parseTrack.get("tstrackId"); //Spotify Id 
        this.tstrackName = parseTrack.get("tstrackName");  
        this.tstrackPreview_url = parseTrack.get("tstrackPreview_url");
        this.tstrackDisc_number = parseTrack.get("tstrackDisc_number"); 
        this.tstrackTrack_number = parseTrack.get("tstrackTrack_number");
        this.tstrackDuration_ms = parseTrack.get("tstrackDuration_ms"); 
        this.tstrackArtistsPreformers = parseTrack.get("tstrackArtistsPreformers");   //Array
        this.tstrackAlbumId = parseTrack.get("tstrackAlbumId");  //Spotify Album Id 
   
        
        // not in use
        this.tstrackArtistsComposer = parseTrack.get("tstrackArtistsComposer");  //Array
        this.tstrackArtistsAuthor = parseTrack.get("tstrackArtistsAuthor");  //Array    
        this.tstrackType = parseTrack.get("tstrackType");  //Track
    }

      
  trackTime() {
    const timeInSecFull = this.tstrackDuration_ms / 1000
    const timeMin = timeInSecFull / 60 ;
    const timeSec =  timeInSecFull % 60
    return timeMin + ':' + timeSec;
  }
}

