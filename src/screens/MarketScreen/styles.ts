import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor:"black",
        padding: 20,
        
    },
    image: {
        height: 160,
        resizeMode:"contain",
        alignSelf:"center",
        marginLeft:40

    },
    label: {
        color: "white",
        fontSize: 30,
        fontWeight: "600",
        alignSelf:"center",
        marginTop: 20,
    },
    label2:{
        color: "grey",
        fontSize: 20,
        alignSelf:"flex-start",
        marginBottom: 20,
        

    }
})

export default styles