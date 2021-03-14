import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default () => {
  const navigation = useNavigation()

  const handleAboutClick = () => {
    navigation.navigate('About')
  }

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button title='Ir para a tela SOBRE' onPress={handleAboutClick} />
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
