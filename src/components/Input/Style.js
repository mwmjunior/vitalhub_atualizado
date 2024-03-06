import styled from "styled-components";


export const Input =styled.TextInput.attrs({
    placeholderTextColor: '#34899F'
})`

width:90% ;
height:53px;
padding:16px;
margin-top:15px;

border: 2px solid #49B3BA;
border-radius: 5px;
color: #34899F;
font-size:16px ;
font-family: 'MontserratAlternates_600SemiBold';

`
export const InputLarger = styled(Input)`

height: 121px;
padding-bottom: 80px;
text-align: left; /* Alinha o placeholder à esquerda */
top: 10px; /* Ajusta a distância do placeholder do topo */

`
export const InputSmall = styled(Input)`
width: 88px;
    height: 40px;
    padding: 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    line-height: 21px; /* 150% */
    font-size: 14px;

`


