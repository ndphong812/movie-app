import MovieCard from "components/MovieCard/MovieCard";
import React from "react";
import axios from 'axios';
import ListMovie from "components/Main/ListMovie/ListMovie";
class OddMovie extends React.Component {
    
    state=
    {
        title:"Phim lẻ"
    }
    render() {
        return (
            <>
                <ListMovie title={this.state.title} listMovie={this.props.listMovie} />
            </>
        )
    }
}
export default OddMovie;