import { View, Text, TouchableOpacity, StyleSheet, Image, AsyncStorage } from 'react-native'
import React, { useState } from 'react'
import status from '../status.jpg'
import CameraPage from './CameraPage'

export default function StatusPage() {
    const [open, setOpen] = useState(false)
    const [image, setImage] = useState('')

    const openCamera = () => {
        setOpen(true)
    }

    const retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('url');
            if (value !== null) {
                setImage(value)
            } 
        } catch (error) {
            console.log(error);
        }
    };
    retrieveData()
    return (
        <>
            {open ?
                <CameraPage />
                :
                <View style={{ backgroundColor: '#111B21', height: "100%" }}>
                    <View>
                        <TouchableOpacity style={styles.myStatus} onPress={openCamera}>
                            <View>
                                <Image source={require('../status.jpg')} style={styles.myStatusItem} />
                                <View style={styles.plusSign}>
                                    <Image source={require('../assets/plus.png')} style={styles.plus} />
                                </View>
                            </View>
                            <View style={{ marginLeft: 5, marginBottom: 5, marginTop: 0 }}>
                                <Text style={{ color: 'white', fontSize: 18, fontWeight: '400', marginBottom: 1 }}>My Status</Text>
                                <Text style={{ color: '#7d9eb0', fontSize: 14, fontWeight: '400' }}>Tap to add status update</Text>
                            </View>
                        </TouchableOpacity>
                        <View>
                            <Image source={{ uri: image }}/>
                        </View>
                    </View>

                </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    myStatus: {
        marginTop: 5,
        width: '100%',
        height: 75,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'

    },
    myStatusItem: {
        width: 50,
        height: 50,
        borderRadius: 50,
        margin: 15,
    },
    plus: {
        width: 10,
        height: 10,
        borderRadius: 50,
        margin: 5
    },
    plusSign: {
        width: 20,
        height: 20,
        backgroundColor: '#25D366',
        borderRadius: 30,
        position: 'absolute',
        margin: 45
    }



})