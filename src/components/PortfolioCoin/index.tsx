import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

export interface PortfolioCoinProps  {
    portfolioCoin: {
        image: string,
        name: string,
        symbol: string,
        amount: number,
        valueUSD?: any,
    }
 

}
const PortfolioCoin = (props: PortfolioCoinProps) => {
    const { portfolioCoin:{image, name, symbol, amount, valueUSD }} = props
    return (
        <View style={styles.root}>

                <View style={{flexDirection:"row"}}>
                <Image source={{uri: image}} style={styles.image}/>
                
                <View style={styles.second}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.symbol}>{symbol}</Text>
                </View>
                </View>


                <View>
                    <Text style={styles.amount}>{valueUSD}</Text>
                    <Text style={styles.symbol}>{symbol}{amount}</Text>
                </View>
            
        </View>
    )
}

export default PortfolioCoin
