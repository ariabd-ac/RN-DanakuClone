import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import {Splash,EnterNumber, SwiperScreen} from '../pages'


const Router=createStackNavigator(
    {
        Splash:{
            screen:Splash,
            navigationOptions:{
                header:false
            }
        },
        SwiperScreen:{
            screen: SwiperScreen,
            navigationOptions:{
                header: false
            }
        },
        EnterNumber:{
            screen:EnterNumber,
            navigationOptions:{
                header:false
            }
        },
    },{
        initialRouteName:'SwiperScreen'
    }
)


export default createAppContainer(Router)