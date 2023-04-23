import { View,Text, Image, TouchableOpacity, StatusBar } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from "@expo/vector-icons/AntDesign"
import Feather from '@expo/vector-icons/Feather';

export default function ReviewPhoto(props) {

    return (
        <SafeAreaView className="bg-black flex-1 items-center">
            <StatusBar barStyle="light-content" />
            <Text className="text-white font-bold text-3xl mb-5">BeStorys</Text>
            <Text className="text-white font-bold mb-5">
                Photo: 01 / 10
            </Text>
            <View className="relative w-full h-[500px]">
                <Image className="w-full h-[500px] bg-black rounded-2xl" source={{ uri: "data:image/jpg;base64," + props.photo }} />
                <Image className=" absolute left-4 top-4 w-[120px] h-[160px] bg-black rounded-2xl" style={{borderColor: '#dedede', borderWidth: 3}} source={{ uri: "data:image/jpg;base64," + props.photo2 }} />
                <TouchableOpacity onPress={props.returnAction} className="absolute right-6 top-6">
                    <AntDesign name="close" size={30} color="white"/>
                </TouchableOpacity>
            </View>
            <View className="flex-1 items-center justify-center">
                <TouchableOpacity onPress={props.sendAction} className="flex-row items-center">
                    <Text className="text-white text-5xl font-bold">Send</Text>
                    <Feather name="chevrons-right" size={58} color="white" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}