import { FontAwesome, Entypo, AntDesign, MaterialIcons} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../../types';
import HomeScreen from '../screens/HomeScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
import MarketScreen from '../screens/MarketScreen';
import RankingsScreen from '../screens/RankingsScreen';
import ProfileScreen from '../screens/ProfileScreen';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "red"
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Home',
          tabBarIcon: () => <Entypo style={{ marginBottom: -3 }} name="home" color="green" size={30} />,
        })}
      />
      <BottomTab.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{
          title: 'Portfolio',
          tabBarIcon: () => <AntDesign style={{ marginBottom: -3 }} name="piechart" size={30}  color="green" />,
        }}
      />

    <BottomTab.Screen
        name="Market"
        component={MarketScreen}
        options={{
          title: 'Market',
          tabBarIcon: () => <TabBarIcon name="line-chart" color="green" />,
        }}
      />

<BottomTab.Screen
        name="Rankings"
        component={RankingsScreen}
        options={{
          title: 'Rankings',
          tabBarIcon: () => <MaterialIcons style={{ marginBottom: -3 }} name="leaderboard" size={30} color="green" />,
        }}
      />

<BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: () => <TabBarIcon name="user" color='green' />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
