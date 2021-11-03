import React from 'react'
import { View, Text , Image, FlatList} from 'react-native'
import PortfolioCoin from '../../components/PortfolioCoin'
import styles from './styles'
const image = require('../../../assets/images/Saly-10.png')

const portfolioCoins = [{
    id: 1,
    name: 'Bitcoin',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/1200px-BTC_Logo.svg.png',
    symbol:"BTC",
    amount: 3.09,
    valueUSD: '$69.420',
},
{
    id: 2,
    name: 'Litecoin',
    image: 'https://s2.coinmarketcap.com/static/img/coins/200x200/2.png',
    symbol:"LTC",
    amount: 14.16,
    valueUSD: '$69.420',
},
{
    id: 3,
    name: 'Binance',
    image: 'https://s2.coinmarketcap.com/static/img/coins/200x200/1839.png',
    symbol:"BNB",
    amount: 7.64,
    valueUSD: '$69.420',
},

{
    id: 4,
    name: 'Binance',
    image: 'https://s2.coinmarketcap.com/static/img/coins/200x200/1839.png',
    symbol:"BNB",
    amount: 7.64,
    valueUSD: '$69.420',
},
{
    id: 5,
    name: 'Binance',
    image: 'https://s2.coinmarketcap.com/static/img/coins/200x200/1839.png',
    symbol:"BNB",
    amount: 7.64,
    valueUSD: '$69.420',
},
{
    id: 6,
    name: 'Binance',
    image: 'https://s2.coinmarketcap.com/static/img/coins/200x200/1839.png',
    symbol:"BNB",
    amount: 7.64,
    valueUSD: '$69.420',
},
{
    id: 7,
    name: 'Binance',
    image: 'https://s2.coinmarketcap.com/static/img/coins/200x200/1839.png',
    symbol:"BNB",
    amount: 7.64,
    valueUSD: '$69.420',
},
{
    id: 8,
    name: 'Binance',
    image: 'https://s2.coinmarketcap.com/static/img/coins/200x200/1839.png',
    symbol:"BNB",
    amount: 7.64,
    valueUSD: '$69.420',
},
{
    id: 9,
    name: 'Binance',
    image: 'https://s2.coinmarketcap.com/static/img/coins/200x200/1839.png',
    symbol:"BNB",
    amount: 7.64,
    valueUSD: '$69.420',
},
{
    id: 10,
    name: 'Binance',
    image: 'https://s2.coinmarketcap.com/static/img/coins/200x200/1839.png',
    symbol:"BNB",
    amount: 7.64,
    valueUSD: '$69.420',
},
{
    id: 12,
    name: 'Binance',
    image: 'https://s2.coinmarketcap.com/static/img/coins/200x200/1839.png',
    symbol:"BNB",
    amount: 7.64,
    valueUSD: '$69.420',
},
{
    id: 13,
    name: 'Binance',
    image: 'https://s2.coinmarketcap.com/static/img/coins/200x200/1839.png',
    symbol:"BNB",
    amount: 7.64,
    valueUSD: '$69.420',
},
{
    id: 14,
    name: 'Binance',
    image: 'https://s2.coinmarketcap.com/static/img/coins/200x200/1839.png',
    symbol:"BNB",
    amount: 7.64,
    valueUSD: '$69.420',
},
{
    id: 15,
    name: 'Binance',
    image: 'https://s2.coinmarketcap.com/static/img/coins/200x200/1839.png',
    symbol:"BNB",
    amount: 7.64,
    valueUSD: '$69.420',
},
{
    id: 16,
    name: 'Binance',
    image: 'https://s2.coinmarketcap.com/static/img/coins/200x200/1839.png',
    symbol:"BNB",
    amount: 7.64,
    valueUSD: '$69.420',
},
{
    id: 27,
    name: 'Binance',
    image: 'https://s2.coinmarketcap.com/static/img/coins/200x200/1839.png',
    symbol:"BNB",
    amount: 7.64,
    valueUSD: '$69.420',
},

]
const PortfolioScreen = () => {
    return (
        <View style={styles.root}>
            <Image source={image} style={styles.image}  />
            <Text style={styles.label}>Portfolio Balance</Text>
            <Text style={styles.label2}>$69.420</Text>
            <FlatList 
             data={portfolioCoins}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <PortfolioCoin portfolioCoin={item} />}
                
            />
           
        </View>
    )
}

export default PortfolioScreen
