import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation'

import colors from '../styles/colors'
import Map from '../views/Map'
import Native from '../views/Native'

const iconSize = 20

const TabNavigator = createBottomTabNavigator(
  {
    Tab1: {
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons
            color={focused ? colors.primary : colors.gray}
            name="map-marker-circle"
            size={iconSize}
          />
        ),
        tabBarLabel: 'Map',
      },
      screen: Map,
    },
    Tab2: {
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons
            color={focused ? colors.primary : colors.gray}
            name="receipt"
            size={iconSize}
          />
        ),
        tabBarLabel: 'Native View',
      },
      screen: Native,
    },
  },
  {
    initialRouteName: 'Tab1',
    tabBarOptions: {
      activeTintColor: colors.primary,
      inactiveTintColor: colors.gray,
    },
  },
)

export default createAppContainer(TabNavigator)
