import React from 'react';
import { Image, Text, StyleSheet, Dimensions, View } from 'react-native';
import logoVendedor from '../../../assets/burger2.jpg';
import baconBurger from '../../../assets/burger3.jpg';


export default function Detalhes() {
    return <>
        <Text style={styles.detalhes}>Escolha seu Burger</Text>
        <Text style={styles.titulo}>Lista:</Text>
        <View style={styles.vendedor}>
            <Image style={styles.logoVendedor} source={logoVendedor} />
            <Text style={styles.nomeVendedor}>Cheddar Burger</Text>
        </View>
        <View style={styles.vendedor}>
            <Image style={styles.baconBurger} source={baconBurger} />
            <Text style={styles.nomeVendedor}>Bacon Burger</Text>
        </View>
        <Text style={styles.desc}>Kit que revoluciona o mais saboroso Hamburger</Text>
        <Text style={styles.preco}>R$ 29,90</Text>
    </>
}

const styles = StyleSheet.create({
    detalhes: {
        color: "#282B8F",
        fontWeight: "bold",
        fontSize: 25,
        lineHeight: 35,
        textAlign: "center",
    },
    titulo: {
        color: "#282B8F",
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: 35,
        marginLeft: 15,
    },
    nomeVendedor: {
        color: "#2894B6",
        fontSize: 18,
        lineHeight: 26,
        marginLeft: 10,
    },
    desc: {
        color: "#163D63",
        fontSize: 16,
        paddingVertical: 10,
        marginLeft: 15,
    },
    preco: {
        color:"#18A818",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "right",
        paddingHorizontal: 10,
    },
    logoVendedor: {
        width: 32,
        height: 32,
        marginLeft: 5
    },
    baconBurger: {
        width: 32,
        height: 32,
        marginLeft: 5
    },
    vendedor: {
        flexDirection: "row",
        padding: 10,
    }

})