import { Button, View } from "react-native";

export  const Navegacao = ({navigation}) => {

return(

    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
        <Button
            title="Login"
            onPress={() => navigation.navigate
            ("Login")}
        />
        <Button
            title="Esqueci a Senha"
            onPress={() => navigation.navigate
            ("Esqueci_a_Senha")}
        />
        <Button
            title="Código de verificação do E-mail "
            onPress={() => navigation.navigate
            ("Codigo_Email")}
        />
        <Button
            title="Redefinir senha "
            onPress={() => navigation.navigate
            ("Nova_Senha")}
        />
        <Button
            title="Cadastro "
            onPress={() => navigation.navigate
            ("Cadastro")}
        />
        <Button
            title="Medico - Inserção do prontuário "
            onPress={() => navigation.navigate
            ("Medico_Insercao_Prontuario")}
        />
        <Button
            title="Medico - Consultas "
            onPress={() => navigation.navigate
            ("Medico_Consulta")}
        />
        <Button
            title="Paciente - Selecionar Clinica "
            onPress={() => navigation.navigate
            ("Paciente_Selecionar_Clinica")}
        />
        <Button
            title="Paciente - Selecionar Data "
            onPress={() => navigation.navigate
            ("Paciente_Selecionar_Data")}
        />
        <Button
            title="Paciente - Consultar Local "
            onPress={() => navigation.navigate
            ("Paciente_Consultar_Local")}
        />
        <Button
            title="Paciente - Prescrição Médica "
            onPress={() => navigation.navigate
            ("Paciente_Prescricao_Medica")}
        />
       
    </View>


);

}