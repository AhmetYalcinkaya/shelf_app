import { Image, useColorScheme } from 'react-native'

// images
import DarkLogo from '../assets/img/aa.png'
import LightLogo from '../assets/img/xx.png'

const ThemedLogo = () => {
  const colorScheme = useColorScheme()
  
  const logo = colorScheme === 'dark' ? DarkLogo : LightLogo

  return (
    <Image source={logo} style={{width:150, height:150}} />
  )
}

export default ThemedLogo