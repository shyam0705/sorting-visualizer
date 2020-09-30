import styled, { css } from 'styled-components';
export const Bars =
    styled.div`
        display:flex;
        width:${(props) => props.width};
        height:${(props) => props.height};
        background: ${(props) => {
        if (props.sorted) {
            return "green";
        }
        if (props.comparing || props.active) {
            return "red";
        }
        else {
            return "grey";
        }
        }};
        margin-right:2px;
        align-items:center;
        align-content:center;
        justify-content:center;
        text-align:center;
        color:white;

`;