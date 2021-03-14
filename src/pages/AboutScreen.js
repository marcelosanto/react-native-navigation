import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default () => {
  const navigation = useNavigation()

  const handleBackButton = () => {
    navigation.goBack() // volta para a tela anterior
    //navigation.popToTop() // volta para tela 0 do app
  }

  return (
    <View style={styles.container}>
      <Text>Telinha de Sobre</Text>
      <Button title='Voltar' onPress={handleBackButton} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
