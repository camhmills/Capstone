import styled from 'styled-components';

export const ProfileContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 80vh;
width: 100vw;
`

export const ProfileCard = styled.div`
display: flex;
height: 500px;
width: 700px;
background-color: #FAFAFA
`

export const ProfileInfoDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
width: 50%;
background-color: #FAFAFA
`

export const ProfileActionDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
width: 100%;
`

export const ProfileForm = styled.form`
display: grid;
grid-template-columns: 1fr;
justify-content: center;
height: 100%;
`

export const ProfileButton = styled.button`
height: 150px;
width: 250px;
border: none;
background-color: #f8cf2c;
margin: 10px;
font-size: 18px;
&:disabled {
    background-color: grey;
}
&:active {
    background-color: #f1dd8d;
}
`