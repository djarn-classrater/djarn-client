import React from 'react'
import SearchButton from '../components/SearchButton'

export default {
    component: SearchButton ,
    title: 'Search Button',
    excludeStories: /.*Data$/,
  }
export const Search = () =>{
    return(
        <SearchButton />
    )
}
