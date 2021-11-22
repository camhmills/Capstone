import styled from 'styled-components';

export const ToggleButton = styled.button`
background-color: #2367B1;
border: none;
height: 45px;
width: 150px;
font-size: 18px;
&:hover {
    transform: scale(1.05);
}
&:active {
    transform: scale(.95);
}
`

export const ToggleButtonDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 50px;
width: 50vw;
margin-left: auto;
margin-right: auto;
`