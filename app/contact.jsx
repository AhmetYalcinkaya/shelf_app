import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact</Text>
         <Link href="/">index page</Link>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
     container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontWeight:'bold',
        fontSize:18
    }
})