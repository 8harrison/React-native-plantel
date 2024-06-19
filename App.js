import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Context from './context/contextValue';

import CBF from './Screens/CBF';
import Recrutar from './Screens/Recrutar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Context>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#0D80BF' },
            headerTitleStyle: { fontWeight: 700, fontSize: 22, color: '#FFF' },
            headerTintColor: '#FFF',
            headerTitleAlign: 'center',
          }}>
          <Stack.Screen name="Gremio" component={CBF} />
          <Stack.Screen name="Recrutar" component={Recrutar} />
        </Stack.Navigator>
      </NavigationContainer>
    </Context>
  );
}


