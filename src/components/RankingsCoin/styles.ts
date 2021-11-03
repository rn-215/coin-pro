import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        
    },
    image :{
        width: 50,
        height: 50,
        resizeMode: "contain",
     
       
       
    },
    second: {
        alignItems:"center",
        marginLeft: 20,
        
    },
    name:{
        color: "#fff",
        fontSize: 18,
        fontWeight: "500",
    },
    symbol:{
        color: "grey",
        fontWeight:"500"
    },
    valueChange24H:{
        color: "white",
        fontSize: 18,
        fontWeight:"500",
        
    },
    place: {
        color: "white",
        fontSize: 18,
        fontWeight: "600",
        width: 40
       
        
    },
})

export default styles;
