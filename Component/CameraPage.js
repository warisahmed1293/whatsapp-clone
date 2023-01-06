import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Camera, CameraType } from 'expo-camera';
import { AsyncStorage } from 'react-native';

export default function CameraPage() {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [currentImage, setCurrentImage] = useState()

    const storeData = async () => {
        try {
            await AsyncStorage.setItem({
                url: currentImage
            });
        } catch (error) {
            console.log(error);
        }
    };

    if (!permission) {
        // Camera permissions are still loading
        return <View>

        </View>;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    async function takePicture() {
        if (camera) {
            const options = { quality: 0.5 };
            const data = await camera.takePictureAsync(options);
            console.log(data.uri);
            setCurrentImage(data.uri)
            storeData()
        }
    }

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }


    return (
        <>
            <View style={styles.container}>
                {/* <View style={{ backgroundColor: 'red', flex: 0.1 }}></View>
      <View style={{ backgroundColor: 'green', flex: 1 }}></View>
      <View style={{ backgroundColor: 'blue', flex: 0.1 }}></View> */}


                {/* <View style={{ backgroundColor: 'red', width: 100, height: 100 }}></View>
      <View style={{ backgroundColor: 'green', width: 100, height: 100 }}></View>
      <View style={{ backgroundColor: 'blue', width: 100, height: 100 }}></View> */}

                {currentImage ?
                    <View style={styles.camera}>
                        <Image style={styles.camera} source={{ uri: currentImage }} />
                        <Button title="Take new picture" onPress={() => setCurrentImage()} />
                    </View>
                    :
                    <Camera ref={ref => camera = ref} style={styles.camera} type={type}>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
                                <Image
                                    style={styles.image}
                                    source={require('../assets/flip.png')} />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button} onPress={takePicture}>
                                <Image
                                    style={styles.image}
                                    source={require('../assets/capture.png')} />
                            </TouchableOpacity>

                            <View style={styles.button} />
                        </View>
                    </Camera>
                }

            </View>

        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 60
    },
    button: {
        flex: 1
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    image: {
        alignSelf: 'center',
        width: 50,
        height: 50
    }
});
