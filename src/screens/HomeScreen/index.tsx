import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'


const image = require('../../../assets/images/Saly-1.png')

const HomeScreen = () => {
    return (
        <View style={styles.root}>
            <Image source={image} style={styles.image}   />
            <Text style={styles.header}>Welcome to Coin-Pro</Text>
            <Text style={styles.header2}>You have $100.000 preloaded in your account to kickstart your investing journey!</Text>
        </View>
    )
}

export default HomeScreen
