const { combineReducers } = require( "redux" );

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '6:05' },
        { title: 'All Star', duration: '3:25' },
    ];
};

const selectedSongReducer = ( selectedSong = null, action ) => {
    switch ( action.type ) {
        case 'SONG_SELECTED':
            return action.payload;

        default:
            return selectedSong;
    }

}

export default combineReducers( {
    songs: songsReducer,
    selectedSongs: selectedSongReducer,
} );