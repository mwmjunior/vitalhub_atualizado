// Importar o recurso do bottom tabs
 import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

 const BottomTab = createBottomTabNavigator()

 
   
import { Paciente_Consultar_Local } from "../Paciente_Consultar_Local/Paciente_Consultar_Local"


export const main = () => {
 return (
        <BottomTab.Navigator
        
        initialRouteName="Home"
        screenOptions={({route}) => ({
            tabBarStyle: {backgroundColor: '#FFFFFF', height: 80, paddingTop: 10},
            tabBarActiveBackgroundColor: 'transparent',
            tabBarShowLabel: false,
            headerShown: false,
          
            tabBarIcon: ({focused}) => {
                if (route.name === 'HomeMedic') {
                    return(
                        <ContentIcon
                            tabBarActiveBackgroundColor={focused ? '#ECF2FF' : 'transparent'}
                        >
                            <FontAwesome name='calendar' size={18} color='#4E4B59'/>
                            { focused && <TextIcon>Agenda</TextIcon>}
                        </ContentIcon>

                    )
                } else {
                    return(
                        <ContentIcon
                            tabBarActiveBackgroundColor={focused ? '#ECF2FF' : 'transparent'}
                        >
                            <FontAwesome name='user-circle' size={18} color='#4E4B59'/>
                            { focused && <TextIcon>Agenda</TextIcon>}
                        </ContentIcon>

                    )
                    
                    
                }
            }
        })}
        >
        
        


        <BottomTab.Screen
        name="Home"
        component={ Paciente_Consultar_Local}
        
        />

        </BottomTab.Navigator>

 )

}