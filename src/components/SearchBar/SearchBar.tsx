import * as React from 'react';
import { Box, InputAdornment } from '@mui/material';
import { StyledTextField, StyledSearchIcon } from './styled'

interface SearchBarProps {
    onQuerySearch: (query: string) => void,
    isError: boolean
}

const SearchBar: React.FC<SearchBarProps> = ({ onQuerySearch, isError }) => {

    const [inputText, setInputText] = React.useState<string>('')

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputText(e.target.value)
    }

    return (
        <Box sx={{ minHeight: 80 }}>
            <StyledTextField
                onChange={(e) => onInputChange(e)}
                onKeyPress={(e) => e.key === "Enter" && onQuerySearch(inputText)}
                id="input-with-icon-textfield"
                placeholder='Search...'
                error={isError}
                helperText={isError && 'Incorrect entry.'}
                InputProps={{
                    endAdornment: (
                        <InputAdornment sx={{ cursor: 'pointer' }} onClick={() => onQuerySearch(inputText)} position="start">
                            <StyledSearchIcon />
                        </InputAdornment>
                    ),
                    disableUnderline: true,
                }}
                variant="filled"
                sx={{ input: { width: '20rem', color: 'white', padding: '1rem;', backgroundColor: 'transparent !important' } }}
            />
        </Box>
    );
}

export default SearchBar