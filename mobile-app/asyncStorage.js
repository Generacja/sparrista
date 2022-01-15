import AsyncStorage from "@react-native-async-storage/async-storage";

export const clearStorage = () => {
    AsyncStorage.clear();
};

export const setEmpBefore = async (id) => {
    try {
        await AsyncStorage.setItem("before" + id, "x");
    } catch (e) {}
};

export const getEmpBefore = async (id) => {
    let item = null;
    try {
        item = await AsyncStorage.getItem("before" + id);
    } catch (e) {
        alert(e);
    }
    return item;
};
