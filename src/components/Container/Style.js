
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components";



export const Container = styled.View`
flex: 1;
align-Items: center;
background-Color: #FAFAFA;

`

export const ContainerScrool = styled.ScrollView`
background-Color: #FAFAFA;
flex: 1;
`

export const ContainerHeader = styled(LinearGradient).attrs({
    colors : ['#60BFC5', '#496BBA'],
    start: {x: -0.05, y: 1.08},
    end:{x:1, y:0}
})
`
    width: 100%;
    height: 160px;
    padding: 20px;
    padding-bottom: 25px;
    

    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  
    border-radius: 0px 0px 15px 15px;
    box-shadow: 0px 4px 15px #00000014;
`