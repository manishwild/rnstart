import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import ComponentsScreen from './src/screens/ComponentsScreen'
import Testcomponent from './src/screens/Testcomponent'
import Listscreen from './src/screens/Listscreen'
import ListTestScreen from './src/screens/ListTestScreen'
import ImageScreen from './src/screens/ImageScreen'
import CounterScreen from './src/screens/CounterScreen'
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen'
import TextScreen from './src/screens/TextScreen'
import BoxScreen from './src/screens/BoxScreen'
import BoxScreenExercise from './src/screens/BoxScreenExercise'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Test: Testcomponent,
    Lists: Listscreen,
    ListTest: ListTestScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Colors:ColorScreen,
    Square:SquareScreen,
    Texts:TextScreen,
    Boxs:BoxScreen,
    BoxExercise:BoxScreenExercise,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
)

export default createAppContainer(navigator)
