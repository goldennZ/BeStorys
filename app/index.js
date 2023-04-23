import { Link } from "expo-router";
import { View, Text, StatusBar } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome5 from "@expo/vector-icons/FontAwesome5"

export default function Page() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <StatusBar barStyle="light-content" />
      <View className="flex-row justify-around items-center mb-3">
        <FontAwesome5 name="user-friends" size={26} color="white"/>
        <Text className="font-bold text-3xl text-white">BeStorys</Text>
        <View className="w-8 h-8 bg-white rounded-full"></View>
      </View>
      <View className="flex-row items-center justify-center gap-6">
        <Text className="text-white text-2xl font-bold">My Friends</Text>
        <Text className="text-gray-400 text-2xl font-bold">Discovery</Text>
      </View>
      <View className="flex-1 items-center justify-center">
        <Text className="text-white">Seja o primeiro a publicar a sua coleção diária.</Text>
        <View className="bg-white rounded-md mt-6">
          <Link href="/takecollections" className="font-bold px-5 py-3">Tire seu BeStorys</Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
