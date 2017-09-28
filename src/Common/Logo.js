import React from 'react'; 
import { 
    View,
    Image, 
    StyleSheet, 
    Text,
 } from 'react-native'; 

 const Logo = () => { 
     return (
        <View style={styles.logoContainer}>
            <Image
                style={styles.logo}
                source={require('./img/fotl-logo.png')} />
            <Text style={styles.title}>
                Friends of the Library
            </Text>
        </View>
     );
 }

 const styles = StyleSheet.create({
     logoContainer: { 
         alignItems: 'center', 
         flexGrow:1, 
         justifyContent: 'center', 
         paddingBottom: 10, 
     }, 
     logo: {
         width: 127, 
         height: 114, 
     }, 
     title: { 
         color: 'white'
     }
 });

 export default Logo;