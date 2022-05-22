import React from 'react';
import { JokeCardWrapper } from './styled';
import { CardContent, Typography } from "@mui/material";
import FormatQuoteTwoToneIcon from '@mui/icons-material/FormatQuoteTwoTone';
import JokeCategoryChip from '../JokeCategoryChip/JokeCategoryChip';

interface JokeCardProps {
    jokeText: string,
    jokeCategory: string | undefined
}

const JokeCard: React.FC<JokeCardProps> = ({ jokeText, jokeCategory }) => {

    return (
        <JokeCardWrapper>
            <CardContent>
                <Typography fontFamily="Roboto Slab, serif" variant="h6" color="#c5c5c5" component="p">
                    {jokeText}
                </Typography>
            </CardContent>
            <JokeCategoryChip jokeCategory={jokeCategory} />
            <FormatQuoteTwoToneIcon sx={{ fontSize: '10rem', position: 'absolute', top: '-50px', left: '-30px', color: '#ffffff0f', transform: 'scale(-1,1)' }} />
            <FormatQuoteTwoToneIcon sx={{ fontSize: '14rem', position: 'absolute', bottom: '-60px', right: '-60px', color: '#ffffff0f' }} />
        </JokeCardWrapper>
    );
}

export default JokeCard;
