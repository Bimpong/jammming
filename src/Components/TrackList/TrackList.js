import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';


export class TrackList extends React.Component{
  render(){
    return(
      <div className="TrackList"> 
        
        {this.props.tracks.map(function(track){
          return <Track key={track.id} name={track.name} album={track.album} artist={track.artist}/>
        })}
        
      </div>
          )
        }
}

export default TrackList;
