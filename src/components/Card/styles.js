import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 15
    },
    image: {
        aspectRatio: 267 / 400,
        borderRadius: 5,
        height: undefined,
        marginBottom: 10,
        width: '80%',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        flexDirection: 'row',
        padding: 8,
        width: '80%'
    },
    title: {
        color: '#001',
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 15,
        textAlign: 'center',
    },
});