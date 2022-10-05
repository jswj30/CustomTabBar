import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Tab.Navigator tabBar={props => <AnimatedTabBar {...props} />}>
          <Tab.Screen name="Home" component={PlaceholderScreen} />
          <Tab.Screen name="Upload" component={PlaceholderScreen} />
          <Tab.Screen name="Chat" component={PlaceholderScreen} />
          <Tab.Screen name="Settings" component={PlaceholderScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

const PlaceholderScreen = () => {
  return <View style={{flex: 1, backgroundColor: '#604AE6'}} />;
};

const AnimatedTabBar = (props: BottomTabBarProps) => {
  const {bottom} = useSafeAreaInsets();

  return <View style={[styles.tabBar, {paddingBottom: bottom}]}></View>;
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
  },
  activeBackground: {
    position: 'absolute',
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  component: {
    width: 60,
    height: 60,
    marginTop: -5,
  },
  componentCircle: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 36,
    height: 36,
  },
});

export default App;
