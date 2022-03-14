import React from 'react';
import { Image, Text, StyleSheet ,Dimensions } from 'react-native';
import topo from '../../../assets/Burger4.jpg';


const width = Dimensions.get("screen").width;

export default function Topo (){
    return  <>
                <Image style={styles.topo} source={topo}/>
                <Text style= {styles.tituloCarrinho}>Burguer House</Text>
            </>
}
const styles = StyleSheet.create({
    topo:{
        width:"100%",
        height: 1050/580 * width
      },
      tituloCarrinho:{
        color: "#ffffff",
        position:"absolute",
        paddingVertical: 60,
        textAlign:"center",
        width:"100%",
        fontSize: 40,
        fontWeight: "bold",
        lineHeight: 40,        
      },
})