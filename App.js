import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navegacao } from './src/screens/Navegacao/Navegacao';
import { Login } from './src/screens/Login/Login';
import { Esqueci_a_Senha } from './src/screens/Esqueci_a_Senha/Esqueci_a_Senha';
import { Codigo_Email } from './src/screens/Codigo_Email/Codigo_Email';


//instancia do StackNavigator
const Stack = createNativeStackNavigator ();

//import das fontes
import {useFonts, MontserratAlternates_600SemiBold,MontserratAlternates_500Medium, MontserratAlternates_700Bold} from "@expo-google-fonts/montserrat-alternates"
import { Quicksand_500Medium, Quicksand_600SemiBold,Quicksand_400Regular } from "@expo-google-fonts/quicksand";
import { Nova_Senha } from './src/screens/Nova_Senha/Style';
import { Cadastro } from './src/screens/Cadastro/Style';
import { Medico_Insercao_Prontuario } from './src/screens/Medico_Insercao_Prontuario/Medico_Insercao_Prontuario';
import { Medico_Consulta } from './src/screens/Medico_Consultas/Medico_Consultas';
import { Paciente_Selecionar_Clinica } from './src/screens/Paciente_Selecionar_Clinica/Paciente_Selecionar_Clinica';
import { Paciente_Selecionar_Data } from './src/screens/Paciente_Selecionar_Data/Paciente_Selecionar_Data';
import { Paciente_Consultar_Local } from './src/screens/Paciente_Consultar_Local/Paciente_Consultar_Local';
import { Paciente_Prescricao_Medica } from './src/screens/Paciente_Prescricao_Medica/Paciente_Prescricao_Medica';
import { main } from './src/screens/Main/Main';



export default function App() {

  const [fontsLoaded, fontsError] = useFonts({

    MontserratAlternates_600SemiBold,MontserratAlternates_500Medium, MontserratAlternates_700Bold,
    Quicksand_500Medium,Quicksand_600SemiBold,Quicksand_400Regular
  })

  if(!fontsLoaded && !fontsError){
    return null;
  }

  return (
    // Navagacao
    //Container
    //StackNavigation
    //StackScreen


    <NavigationContainer>

      
      <Stack.Navigator >

        <Stack.Screen
          //Login
          name='Login'
          //componente que sera chamado
          component={Login}
          //titulo da tela
          options={{title: 'Login'}}
        />
        {/* {componente para navegacao} */}
        {/* <Stack.Screen
          //nome da tela
          name='Navegacao'
          //componente que sera chamado
          component={Navegacao}
          //titulo da tela
          options={{title: 'Navegacao'}}
        /> */}

        <Stack.Screen
          //Login
          name='Esqueci_a_Senha'
          //componente que sera chamado
          component={Esqueci_a_Senha}
          //titulo da tela
          options={{title: 'Esqueci_a_Senha'}}
        />


        <Stack.Screen
          //Login
          name='Codigo_Email'
          //componente que sera chamado
          component={Codigo_Email}
          //titulo da tela
          options={{title: 'Codigo_Email'}}
        />

        <Stack.Screen
          //Login
          name='Nova_Senha'
          //componente que sera chamado
          component={Nova_Senha}
          //titulo da tela
          options={{title: 'Nova_Senha'}}
        />
        <Stack.Screen
          //Login
          name='Cadastro'
          //componente que sera chamado
          component={Cadastro}
          //titulo da tela
          options={{title: 'Cadastro'}}
        />
        <Stack.Screen
          //Login
          name='Medico_Insercao_Prontuario'
          //componente que sera chamado
          component={Medico_Insercao_Prontuario}
          //titulo da tela
          options={{title: 'Medico_Insercao_Prontuario'}}
        />
        <Stack.Screen
          //Login
          name='Medico_Consulta'
          //componente que sera chamado
          component={Medico_Consulta}
          //titulo da tela
          options={{title: 'Medico_Consulta'}}
        />
        <Stack.Screen
          //Login
          name='Paciente_Selecionar_Clinica'
          //componente que sera chamado
          component={Paciente_Selecionar_Clinica}
          //titulo da tela
          options={{title: 'Paciente_Selecionar_Clinica'}}
        />
        <Stack.Screen
          //Login
          name='Paciente_Selecionar_Data'
          //componente que sera chamado
          component={Paciente_Selecionar_Data}
          //titulo da tela
          options={{title: 'Paciente_Selecionar_Data'}}
        />
        <Stack.Screen
          //Login
          name='Paciente_Consultar_Local'
          //componente que sera chamado
          component={Paciente_Consultar_Local}
          //titulo da tela
          options={{title: 'Paciente_Consultar_Local'}}
        />
       
        <Stack.Screen
          //Login
          name='Paciente_Prescricao_Medica'
          //componente que sera chamado
          component={Paciente_Prescricao_Medica}
          //titulo da tela
          options={{title: 'Paciente_Prescricao_Medica'}}
        />
        

      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
