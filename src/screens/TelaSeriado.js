import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    View,
    Text,
} from 'react-native';
import seriados from '../database/seriados';

export default function App({ route }) {
    const { title, imageURL, sinopse } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#000" barStyle="light-content" />
            <ScrollView>
                <Text style={styles.titulo}>{title}</Text>
                <View style={styles.seriadoContainer}>
                    <View>
                        <Image style={styles.imagem} source={{ uri: `${imageURL}` }} />
                    </View>
                    <View style={styles.sinopseContainer}>
                        <Text style={styles.textoSinopse}>{sinopse}</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1,
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 5,
        textAlign: 'center',
    },
    seriadoContainer: {
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 15,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    imagem: {
        borderRadius: 10,
        width: 267,
        height: 400,
        marginBottom: 5,
    },
    sinopseContainer: {
        marginBottom: 5,
        marginHorizontal: 8,
    },
    textoSinopse: {
        fontSize: 20,
        textAlign: 'center',
    }
});
