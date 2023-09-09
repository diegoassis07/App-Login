import { View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Logo from '../../../assets/Logo.png'

export default function SignIn(){
    return (
    <SafeAreaView>
        <Image source={Logo}/>
    </SafeAreaView>
    )
}