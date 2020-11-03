// Action Creator
export const selectSong = song => {
    console.log( "selected song", song );
    // return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}