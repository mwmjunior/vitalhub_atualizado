import styled from "styled-components";
import { Title } from "../Title/Style";

export const ContainerCardList = styled.View`
    width: 90%;
    margin-bottom: 12px;
    padding: 10px 10px;
    height: 100px;
    border-radius: 5px;
    flex-direction: row;
    background-color: #fff;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.08);
    margin: 0 auto;
`

export const ProfileImage = styled.Image`
    height: 100%;
    width: 25%;
    border-radius: 5px;
`

export const ContentCard = styled.View`
  width: 70%;
  /* background-color: red; */
`

export const DataProfileCard = styled.View`
/* border: 1px solid brown; */
gap: 6px;
margin-left: 10px;
`

export const ProfileName = styled(Title)`
  font-size: 16px;
`

export const ProfileData = styled.View`
  flex-direction: row;
`

export const TextAge = styled.Text`
  font-size: 14px;
  color: #8c8a97;
  font-family: "Quicksand_400Regular";
`

export const TextBold = styled(TextAge)`
  font-family: "Quicksand_600SemiBold";
`

export const ViewRow = styled.View`
   width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: 10px;
`

export const ClockCard = styled.View`
background-color: #E8FCFD;
padding: 4px 2px;
width: 90px;
height: 28px;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 7px;
border-radius: 5px;
background-color: ${(props) => props.situacao == "pendente" ? "#e8fcfd" : "#f1f0f5"};
`

 export const ButtonCard = styled.TouchableOpacity`
margin-right: 20px;
`

 export const ButtonText = styled.Text`
font-family: "MontserratAlternates_500Medium";
font-size: 12px;
color: ${(props) => props.situacao == "pendente" ? "#c81d25" : "#344f8f"}

`

