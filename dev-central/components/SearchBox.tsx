import React from 'react'
import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons';

const SearchBox = () => {
    return <TextInput 
    placeholder="Search" 
    size='lg'
    radius="xl"
    variant='filled'
    icon={<IconSearch size={20} 
    />} />;
}

export default SearchBox