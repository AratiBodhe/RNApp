import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  DownloadInvoice,
  HomeScreen,
  SignInScreen,
  SignOut,
  SignUpScreen,
} from '../../screens';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="SignUp">
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{drawerLabel: 'Home'}}
      />
      <Drawer.Screen
        name="DownloadInvoice"
        component={DownloadInvoice}
        options={{drawerLabel: 'DownloadInvoice'}}
      />
      <Drawer.Screen
        name="SignOut"
        component={SignOut}
        options={{drawerLabel: 'SignOut'}}
      />
    </Drawer.Navigator>
  );
}
export default MyDrawer;
