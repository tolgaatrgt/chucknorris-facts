import React from 'react';
import { CategoryChip } from './styled';

interface JokeCategoryChipProps {
    jokeCategory: string | undefined
}

const JokeCategoryChip: React.FC<JokeCategoryChipProps> = ({ jokeCategory }) => {

    return (
        <CategoryChip label={jokeCategory ? jokeCategory : 'unknown'} />
    );
}

export default JokeCategoryChip;
