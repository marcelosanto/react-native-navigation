import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

export default () => {
  const navigation = useNavigation()
  const route = useRoute()

  const cor = route.params?.cor ?? '#FF0000' //pegando a informacao da tela anterior

  const handleBackButton = () => {
    navigation.goBack() // volta para a tela anterior
    //navigation.popToTop() // volta para tela 0 do app
  }

  return (
    <View style={styles.container}>
      <Text>Olá: {cor}</Text>
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
