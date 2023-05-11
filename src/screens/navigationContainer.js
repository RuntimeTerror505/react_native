import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './home-page';
import Login from './login/login';

const Stack = createNativeStackNavigator();

const NavigationContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          <HomePage {...props} extraData={someData} />
        </Stack.Screen>
        <Stack.Screen name="Login">
          <Login {...props} extraData={someData} />
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default NavigationContainer;
