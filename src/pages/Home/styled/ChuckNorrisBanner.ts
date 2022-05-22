import styled, { keyframes } from "styled-components";
import ChuckNorrisImg from '../../../assets/chuck.png';

const zoomOut = keyframes`
  from {
    transform: scale(1.05);
  }
  to {
    transform: scale(1);
  }
`;

export const ChuckNorrisBanner = styled.div`
        background-image: url(${ChuckNorrisImg});
        width: 100%;
        height: 25rem;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 0 -50px;
        position: sticky;
        top: 0;
        color: white;
        animation: ${zoomOut} 0.75s linear;
        display: block;
        text-align: center;
        overflow: hidden;

    &:after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        background: linear-gradient(to bottom, transparent 0%, black 100%);
}
`