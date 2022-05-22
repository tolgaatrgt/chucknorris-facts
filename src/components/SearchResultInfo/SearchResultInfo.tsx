import React from 'react';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import { Typography, Box } from '@mui/material';
import { SearchInfoContainer } from './styled';

interface SearchResultInfoProps {
    totalResults: number | null
    query: string
}

const SearchResultInfo: React.FC<SearchResultInfoProps> = ({ totalResults, query }) => {

    const resultInfo = totalResults ? <Typography sx={{ color: '#abe692', fontSize: '1.125rem' }}>{totalResults} facts found for "{query}"</Typography> :
        <Box display='flex' flexDirection='column' alignItems='center' mt='2rem'>
            <Typography color='#9d2828'>Sorry we couldn't find any results. Please try another search.</Typography>
            <SearchOffIcon sx={{ color: '#262626', fontSize: '15rem' }} />
        </Box>
    return (
        totalResults !== null ? (
            <SearchInfoContainer>
                {resultInfo}
            </SearchInfoContainer>
        ) : null
    );
}

export default SearchResultInfo;
