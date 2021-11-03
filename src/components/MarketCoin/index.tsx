import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

export interface MarketCoinProps  {
    MarketCoin: {
        image: string,
        name: string,
        symbol: string,
        valueChange24H: number,
        valueUSD?: any,
    }
 

}
const MarketCoin = (props: MarketCoinProps) => {
    const { MarketCoin:{image, name, symbol, valueChange24H, valueUSD }} = props
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
                    <Text style={{color: valueChange24H > 0 ? "#3a960c" : "#f10000", fontSize: 18   }}>{valueUSD}</Text>
                    <Text style={{color: valueChange24H > 0 ? "#3a960c" : "#f10000"}}>
                        {valueChange24H > 0  && '+' }{valueChange24H}
                        </Text>
                </View>
            
        </View>
    )
}

export default MarketCoin
