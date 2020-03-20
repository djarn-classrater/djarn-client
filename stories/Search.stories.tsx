import React from 'react'
import SearchBox from '../components/SearchBox'

export default {
    component: SearchBox ,
    title: 'Search',
    excludeStories: /.*Data$/,
  }
export const Search = ()=>{
    return(
        <SearchBox />
    )
}
