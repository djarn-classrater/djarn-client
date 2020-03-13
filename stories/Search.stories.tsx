import React from 'react'
import { Search } from '../components/Search'

export default {
    component: Search,
    title: 'Search',
    excludeStories: /.*Data$/,
}

export const dafaultSearch = () => {
    return (
        <Search />
    );
};