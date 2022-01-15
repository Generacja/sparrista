import AsyncStorage from "@react-native-async-storage/async-storage";

export const clearStorage = () => {
    AsyncStorage.clear();
};

export const setEmpBefore = async (id, value) => {
    try {
        await AsyncStorage.setItem("before" + id, value);
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

export const setEmpAfter = async (id, value) => {
    try {
        await AsyncStorage.setItem("after" + id, value);
    } catch (e) {}
};

export const getEmpAfter = async (id) => {
    let item = null;
    try {
        item = await AsyncStorage.getItem("after" + id);
    } catch (e) {
        alert(e);
    }
    return item;
};
