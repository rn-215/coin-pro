import React, {useState}from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import styles from './styles'

const image = require('../../../assets/images/Saly-16.png')

const ProfileScreen = () => {
    const [user, setUser] = useState({
        id: '1',
        name: 'Ernest',
        email: 'ernestnamdi6@gmail.com',
        image: 'https://s2.coinmarketcap.com/static/img/coins/200x200/1839.png',
        netWorth: 34567
    })

    const signout = () => {
        console.warn('signout')
    }
    
    return (
        <View style={styles.root}>
            <Image style={styles.image} source={image} />


            <View style={styles.userContainer}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                <Image style={styles.images} source={{uri: user.image}}/>
                
                    <View style={styles.second}>
                        <Text style={styles.name}>{user.name}</Text>
                        <Text style={styles.email}>{user.email}</Text>  
                    </View>
                   
                </View>


                <View>
                    <Text style={{ fontSize: 18, color:"white"}}>{user.netWorth}</Text>
                </View>
            
        </View>

        <Pressable  onPress={signout} style={{marginTop:"auto", alignSelf:"center"}}>
            <Text style={{color: 'white'}}>Sign Out</Text>
        </Pressable>
        </View>
    )
}

export default ProfileScreen
