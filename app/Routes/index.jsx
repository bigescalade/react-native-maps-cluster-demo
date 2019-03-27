import React from 'react'
import PropTypes from 'prop-types'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation'

import colors from '../styles/colors'
import Map from '../views/Map'
import Native from '../views/Native'

const iconSize = 20

const mapIcon = ({ focused }) => (
  <MaterialCommunityIcons
    color={focused ? colors.primary : colors.gray}
    name="map-marker-circle"
    size={iconSize}
  />
)

const nativeIcon = ({ focused }) => (
  <MaterialCommunityIcons
    color={focused ? colors.primary : colors.gray}
    name="view-dashboard-outline"
    size={iconSize}
  />
)

const TabNavigator = createBottomTabNavigator(
  {
    Tab1: {
      navigationOptions: {
        tabBarIcon: mapIcon,
        tabBarLabel: 'Map',
      },
      screen: Map,
    },
    Tab2: {
      navigationOptions: {
        tabBarIcon: nativeIcon,
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

mapIcon.propTypes = {
  focused: PropTypes.bool.isRequired,
}

nativeIcon.propTypes = {
  focused: PropTypes.bool.isRequired,
}
