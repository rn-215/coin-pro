import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

export interface UserRankingItemProps  {
    User: {
        image: string,
        name: string,
        netWorth?: any,
    },
    place: number
 

}
const UserRankingItem = (props: UserRankingItemProps) => {
    const { User:{image, name,  netWorth }, place} = props
    return (
        <View style={styles.root}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Text style={styles.place}>{place}</Text>
                <Image source={{uri: image}} style={styles.image}/>
                
                <View style={styles.second}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.symbol}>{}</Text>
                    
                </View>
                </View>


                <View>
                    <Text style={{ fontSize: 18, color:"white"   }}>{netWorth}</Text>
                    {/* <Text style={{color: valueChange24H > 0 ? "#3a960c" : "#f10000"}}>
                        {valueChange24H > 0  && '+' }{valueChange24H}
                        </Text> */}
                </View>
            
        </View>
    )
}

export default UserRankingItem
