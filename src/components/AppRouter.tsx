import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from '../routes';

const Stack = createNativeStackNavigator();

const AppRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      //, animation: 'none'
      screenOptions={{headerTransparent: true}}>
      {routes.map(item => (
        <Stack.Screen
          name={item.name}
          component={item.component}
          key={item.name}
          options={{headerShown: false}}
        />
      ))}
    </Stack.Navigator>
  );
};

export default AppRouter;
