import React, { useState, useRef } from 'react';
import { SafeAreaView, StyleSheet, View, Pressable, TextInput, Text } from 'react-native';



const CODE_LENGTH = 4;

const DigitInput = ({ digit, isFocused }) => {
  const containerStyle = isFocused ? [style.inputContainer, style.inputContainerFocused] : style.inputContainer;

  return (
    <View style={containerStyle}>
      <Text style={style.inputText}>{digit}</Text>
    </View>
  );
};

const CodeInput = () => {
  const [code, setCode] = useState('');
  const [containerIsFocused, setContainerIsFocused] = useState(false);
  const ref = useRef(null); // Removendo o tipo de ref

  const handleOnPress = () => {
    setContainerIsFocused(true);
    ref?.current?.focus();
  };

  const handleOnBlur = () => {
    setContainerIsFocused(false);
  };

  return (
    <SafeAreaView style={style.container}>
      <Pressable style={style.inputsContainer} onPress={handleOnPress}>
        {[...Array(CODE_LENGTH)].map((_value, idx) => (
          <DigitInput key={idx} digit={code[idx] || ' '} isFocused={idx === code.length} />
        ))}
      </Pressable>
      <TextInput
        ref={ref}
        value={code}
        onChangeText={setCode}
        onSubmitEditing={handleOnBlur}
        keyboardType="number-pad"
        returnKeyType="done"      
        textContentType="oneTimeCode"
        maxLength={CODE_LENGTH}
        style={style.hiddenCodeInput}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    //flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    marginBottom: 30, // Espaçamento para baixo
    marginTop: 30, // Espaçamento para cima

  },
  inputsContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
   
  },
  inputContainer: {
    width: 65, // Largura de 65
    height: 62, // Altura de 62
    borderColor: '#77CACF',
    borderWidth: 2,
    borderRadius: 5,
    padding: 12,
   
    
  },
  inputContainerFocused: {
    borderColor: '#0f5181',
  },
  inputText: {
    textAlign: 'center', // Centralizar o texto horizontalmente
    color: '#34898F', // Cor do texto

    fontSize: 30,
    fontFamily: 'Quicksand_600SemiBold',
    
  },
  hiddenCodeInput: {
    position: 'absolute',
    height: 0,
    width: 0,
    opacity: 0,
  },
});

export default CodeInput;
