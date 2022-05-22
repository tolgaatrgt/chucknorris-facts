import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/reducers';
import { AppDispatch } from '../../store/store';
import { getCategoriesAsync, selectCategory } from '../../store/actions/categories';
import { getJokeByCategoryAsync, getRandomJokeAsync, getSearchedJokesAsync } from '../../store/actions/jokes';
import { ChuckNorrisBanner, HomeTitle, HomeHeading } from './styled'
import JokeCategories from '../../components/Categories/JokeCategories';
import JokeList from '../../components/JokeList/JokeList';
import SearchBar from '../../components/SearchBar/SearchBar';

const Home: React.FC = () => {
    const dispatch: AppDispatch = useDispatch()

    React.useEffect(() => {
        dispatch(getCategoriesAsync())
        dispatch(getRandomJokeAsync())
    }, [dispatch])

    const [jokeList, jokeError] = useSelector((state: State) =>
        [state.jokes.jokeList, state.jokes.error]
    )
    const [jokeCategories] = useSelector((state: State) =>
        [state.categories.categoryList]
    )

    const onQuerySearch = (query: string) => {
        dispatch(getSearchedJokesAsync(query))
    }
    const onCategorySearch = (categoryName: string) => {
        dispatch(getJokeByCategoryAsync(categoryName))
        dispatch(selectCategory(categoryName))
    }

    return (
        <>
            <ChuckNorrisBanner />
            <HomeTitle>
                <HomeHeading>Chuck Norris Facts</HomeHeading>
                <SearchBar onQuerySearch={(query) => onQuerySearch(query)} isError={Boolean(jokeError)} />
                <JokeCategories onCategorySearch={onCategorySearch} categories={jokeCategories} />
            </HomeTitle>
            <JokeList jokes={jokeList} />
        </>
    );
}

export default Home