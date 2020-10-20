import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import {Splash,EnterNumber} from '../pages'


const Router=createStackNavigator(
    {
        Splash:{
            screen:Splash,
            navigationOptions:{
                header:false
            }
        },
        EnterNumber:{
            screen:EnterNumber,
            navigationOptions:{
                header:false
            }
        }
    },{
        initialRouteName:'Splash'
    }
)


export default createAppContainer(Router)