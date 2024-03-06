import styled from "styled-components";

export const PatientModal = styled.View`
    flex: 1;
    align-items:center ;
    justify-content: center ;
    background-color: rgba(0, 0, 0, 0.6) ;
`

export const ModalContent = styled.View`
   width: 100%;
    height: 70%;
    padding: 30px 30px 10px;
    border-radius: 10px;
    background-color: #fff;
    align-items: center;
    position: absolute;
    bottom: 0;
`

export const InlineInputsContainer= styled.View`
    gap: -5px; /* Adiciona espaçamento entre os itens */
    margin-top: 17px; /* Adiciona uma margem superior de 10px */

`;

export const InputsRow = styled.View`
    flex-direction: row; /* Define a direção dos itens como linha */
    justify-content: space-between; /* Distribui os elementos horizontalmente */
    gap: 21px;
    margin-bottom: 10px; /* Adiciona uma margem inferior de 10px */
`;