import React from 'react'
import { connect } from 'react-redux';
import { selectSong } from './../actions/index';

const renderSongs = ( songs = [] ) => {
    return songs.map( song => {
        return (
            <div className="item" key={song.title}>
                <div className="right floated content">
                    <button
                        onClick={() => selectSong( song )}
                        className="ui button primary">Select</button>
                </div>
                <div className="content">
                    {song.title}
                </div>
            </div>
        )
    } )


};
const SongList = ( { songs, selectSong } ) => {
    console.log( "properties ==> ", songs, selectSong );

    return (
        <div className="ui divided list">
            {renderSongs( songs )}
        </div>
    )
};

const mapStateToProps = ( state ) => {
    console.log( "actual state", state );
    return state;

}

export default connect( mapStateToProps, { selectSong } )( SongList );