import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    root: {
        padding: 20,
        alignItems:"center",
        flex: 1,
        backgroundColor:"white"
    },
    image: {
        height: "40%",
        aspectRatio: 1,

    },
    header: {
        fontSize: 27,
        fontWeight: "600",
        marginVertical:10,
        marginTop: 40
    },
    header2:{
        fontSize: 20,
        marginTop: 10,
        color: "grey",
        textAlign: "center"
    }
})

export default styles