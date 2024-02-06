import React from 'react'
import {isEmpty} from "lodash";

interface MovieListProps {
    data:MovieInterface[];
    title:String
}

interface MovieInterface {

}

const MovieList: React.FC<MovieListProps> = ({data,title}) => {
  return (
    <div>MovieList</div>
  )
}

export default MovieList