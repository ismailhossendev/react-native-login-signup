import { View, Text, Image, StyleSheet, Button, Pressable } from 'react-native'
import React from 'react'

export default function Welcome({ navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.image} source={require('../assets/image/WelcomeScreen.png')} />
            </View>
            <View>
                <Text style={styles.title}>Let's find the "A" with us</Text>
                <Text style={styles.subTitle}>Please Sign in to view personalized recommendations</Text>
            </View>
            <View>
                <Button title='Sign up'
                    onPress={() => navigation.navigate('signup')}
                />
                <Pressable style={styles.skip}

                >
                    <Text style={styles.skipText}>Skip</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        marginVertical: 20
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        color: "#364356"
    },
    subTitle: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: "400",
        color: "#636D77",
        marginBottom: '30%'
    },
    skip: {
        alignItems: 'center',
        marginVertical: 20,
    },
    skipText: {
        fontSize: 18,
        color: '#5667FD',
    },
    container: {
        padding: '5%'
    }

})