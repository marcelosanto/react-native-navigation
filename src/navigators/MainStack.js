import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../pages/HomeScreen'
import AboutScreen from '../pages/AboutScreen'

const MainStack = createStackNavigator()

export default () => (
  <MainStack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#0000ff',
        height: 80,
      },
      headerTitleStyle: {
        color: '#FFF',
        fontSize: 23,
        fontWeight: 'bold',
      },
    }}
  >
    <MainStack.Screen
      name='Home'
      component={HomeScreen}
      options={{ title: 'Inicio' }}
    />
    <MainStack.Screen
      name='About'
      component={AboutScreen}
      options={({ route }) => ({
        headerStyle: {
          backgroundColor: route.params?.cor ?? '#FF0000',
        },
      })}
    />
  </MainStack.Navigator>
)
