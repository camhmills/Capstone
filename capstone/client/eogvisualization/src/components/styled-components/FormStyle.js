import styled from 'styled-components';

export const FormContainer = styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 325px;
height: 400px;
background-color: #FAFAFA;
margin-top: 150px;
`

export const FormDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const InputStyle = styled.input`
margin: 5px;
border: none;
text-align: center;
height: 25px;
width: 260px;
&:focus {
    outline: none;
}
`

export const SubmitButton = styled.button`
border: none;
background-color: #f8cf2c;
height: 50px;
width: 125px;
margin: 10px;
font-size: 18px;
&:disabled {
    background-color: grey;
}
&:active {
    background-color: #f1dd8d;
}
`