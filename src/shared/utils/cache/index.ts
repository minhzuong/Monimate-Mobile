import AsyncStorage from "@react-native-async-storage/async-storage"

export const Cache = {
    set: async (name: string, value: any) => {
       await AsyncStorage.setItem(name, JSON.stringify(value))
    },
    get: async (name: string) => {
        const value =  await AsyncStorage.getItem(name)
        if(value == null ) return null
        return JSON.parse(value)
    }
}