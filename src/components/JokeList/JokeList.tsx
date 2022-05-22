import React from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { State } from '../../store/reducers'
import { Joke } from '../../store/reducers/jokes';
import CircularProgress from '@mui/material/CircularProgress';
import { JokeListContainer } from './styled'
import SearchResultInfo from '../SearchResultInfo/SearchResultInfo';
import JokeCard from '../JokeCard/JokeCard'

interface JokeListProps {
    jokes: Joke[]
}

const JokeList: React.FC<JokeListProps> = ({ jokes }) => {

    const isPending = useSelector((state: State) => state.jokes.isPending)
    const error = useSelector((state: State) => state.jokes.error)
    const totalResults = useSelector((state: State) => state.jokes.totalResults)
    const searchQuery = useSelector((state: State) => state.jokes.searchQuery)

    if (error) {
        toast.error(error, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            toastId: 'joke_error',
        });
    }

    return (
        <JokeListContainer>
            <SearchResultInfo totalResults={totalResults} query={searchQuery} />
            {isPending ? <CircularProgress sx={{ marginTop: '4rem' }} /> : jokes.map(joke => (
                <JokeCard jokeCategory={joke.categories[0]} key={joke.id} jokeText={joke.value} />
            ))}
        </JokeListContainer>
    );
}

export default JokeList;
