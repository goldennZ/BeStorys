import { View, Text, TouchableOpacity, StatusBar, Image, Button } from "react-native";
import { Camera, CameraType, FlashMode } from 'expo-camera'
import { useEffect, useState, useRef } from "react";
import Ionicons from "@expo/vector-icons/Ionicons"
import Feather from '@expo/vector-icons/Feather';
import { Link, useRouter } from "expo-router";
import ReviewPhoto from "./reviewphoto";
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Collection() {
    const cameraRef = useRef();
    const router = useRouter();
    const [photo, setPhoto] = useState();
    const [photo2, setPhoto2] = useState();
    const [type, setType] = useState(CameraType.back);
    const [flash, setFlash] = useState(FlashMode.off);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    async function toggleCameraType() {
      setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    function toggleCameraFlash() {
        setFlash(current => (current === FlashMode.off ? FlashMode.on : FlashMode.off));
    }

    async function takePicture() {
        let options = {
            quality: 1,
            base64: true,
            exif: false
          };

        let newPhoto = await cameraRef.current.takePictureAsync(options)

        setPhoto(newPhoto);

        toggleCameraType()

        setTimeout(async () => {
            let newPhoto2 = await cameraRef.current.takePictureAsync(options)
            
            setPhoto2(newPhoto2);
        }, 500)

    }

    function Returnback() {
        setPhoto(undefined)
        setPhoto2(undefined)
    }

    useEffect(() => {
        requestPermission()
    })

    if(photo && photo2) {
        return (
            <ReviewPhoto returnAction={Returnback} photo={photo.base64} photo2={photo2.base64}/>
        )
    }

    return (
        <SafeAreaView className="flex-1 items-center bg-black relative">
            <Link href="/" className="absolute left-6 top-[68px]">
                <Feather name="chevron-left" size={34} color="white" />
            </Link>
            <StatusBar barStyle="light-content" />
            <Text className="text-white font-bold text-3xl mt-6">BeStorys</Text>
            <Text className="text-white font-bold text-xl mt-4">
                01/<Text className="text-gray-300">10</Text>
            </Text>
            <View className="mt-12 w-full h-[490px]">
                <Camera className="h-full w-full" type={type} ref={cameraRef} flashMode={flash}/>
            </View>
            <View className="flex-1 items-center justify-center">
                <View className="flex-row items-center justify-center gap-14">
                <TouchableOpacity onPress={toggleCameraFlash}>
                    {
                        flash == 'off'
                        ? <Ionicons name="flash-off" size={30} color="white"/>
                        : <Ionicons name="flash" size={30} color="white"/>
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={takePicture}>
                    <View className=" w-16 h-16 rounded-full border-4 border-white"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleCameraType}>
                    <Ionicons name="camera-reverse" size={30} color="white"/>
                </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}