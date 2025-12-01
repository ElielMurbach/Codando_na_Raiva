import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-gray-100 justify-between">
      
      <View className="w-full bg-white p-4 shadow flex-row justify-between items-center">
        <Text className="text-2xl font-bold">Nome do aplicativo aquikk</Text>
        <TouchableOpacity className="bg-black">
          <Text className="text-white font-semibold">Login</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-1 items-center px-6 py-6">

        <Text className="text-4xl font-bold mb-4">Bem Vindo! ao "Nome sla"</Text>

        <View className="w-full mt-4 space-y-4">

          <View className="bg-white p-5 rounded-2xl shadow">
            <Text className="text-xl font-semibold mb-2">Teste teste teste Teste teste teste</Text>
            <Text className="text-gray-600">
              Teste teste teste Teste teste teste
            </Text>
          </View>

          <View className="bg-white p-5 rounded-2xl shadow">
            <Text className="text-xl font-semibold mb-2">Teste teste teste Teste teste teste</Text>
            <Text className="text-gray-600">
            Teste teste teste Teste teste teste
            </Text>
          </View>

          <View className="bg-white p-5 rounded-2xl shadow">
            <Text className="text-xl font-semibold mb-2">Teste teste teste Teste teste teste</Text>
            <Text className="text-gray-600">
             Teste teste teste Teste teste teste
            </Text>
          </View>

        </View>

        <TouchableOpacity className="mt-8 px-6 py-3 bg-blue-500 rounded-2xl">
          <Text className="text-white text-lg font-semibold">Teste</Text>
        </TouchableOpacity>

      </View>

      <View className="py-4">
        <Text className="text-center text-gray-500">© 2025 — CodandoNaRaiva</Text>
      </View>
    </View>
  );
}
