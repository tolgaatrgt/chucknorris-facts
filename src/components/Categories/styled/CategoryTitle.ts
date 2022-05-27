import Typography from "@mui/material/Typography";
import styled from "styled-components";

export const CategoryTitle = styled(Typography)`
  display: inline-block;
  position: relative;
  font-family: Contrail One;
  color: #898989;
  transition: 0.2s;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #ba771b;
    transform-origin: bottom right;
    transition: transform 0.2s ease-out;
  }

  &:hover {
    color: white;
    cursor: pointer;
  }

  &:hover:after {
    color: white;
    cursor: pointer;
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
