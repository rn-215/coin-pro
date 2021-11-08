import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor:"black",
        padding: 20,
        
    },
    image: {
        height: 150,
        resizeMode:"contain",
        alignSelf:"center",
        marginTop:20,
       

    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        marginTop: 20,
        marginBottom: 10,
       
    },
    email: {
        fontSize: 16,
        color: "white",
        marginBottom: 20,
       
    },
    images:{
        height: 50,
        width: 50,
        resizeMode:"contain",
    },
    userContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    },
    second:{
        marginLeft: 10
    }

})

export default styles