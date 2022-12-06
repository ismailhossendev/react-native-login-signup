import { View, Text, StyleSheet, Image, TextInput, ScrollView, Pressable } from 'react-native'
import React from 'react'

export default function SignUp() {
    return (
        <ScrollView style={styles.container}>
            <Image source={require('../assets/image/signupImage.png')} />
            <View style={styles.InputContainer}>
                <Text style={styles.label}>Name</Text>
                <TextInput style={styles.input} placeholder="Your Name" />
                <Text style={styles.label}>Email Address</Text>
                <TextInput style={styles.input} placeholder="name@example.com" />
                <Text style={styles.label}>Password</Text>
                <TextInput secureTextEntry={true} style={styles.input} placeholder="******" />
            </View>
            <View style={styles.btnContainer}>
                <Pressable style={styles.btn}>
                    <Text style={styles.btnText}>Sign Up</Text>
                </Pressable>
                <Text>You have account? Sign in</Text>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: '2%'
    },
    input: {
        borderWidth: 0.1,
        borderColor: "#ff0eff",
        borderRadius: 2,
        paddingHorizontal: 10,
        marginTop: 2,
        height: 50
    },
    InputContainer: {
        padding: '5%'
    },
    label: {
        fontSize: 16,
        color: '#636D77',
        fontWeight: '400',
        marginTop: 15
    },
    btnContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: '#5667FD',
        width: 267,
        alignItems: 'center',
        height: 61,
        justifyContent: 'center',
        borderRadius: 10
    },
    btnText: {
        fontSize: 20,
        color: 'white',
        fontWeight: "900"
    }
})