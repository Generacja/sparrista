import * as React from "react";
import {
    ImageBackground,
    View,
    TouchableOpacity,
    Text,
    Image,
} from "react-native";
import axios from "axios";
import { styles } from "../Styles/Styles.js";
import {
    emp1,
    emp2,
    emp3,
    emp4,
    emp5,
    emp6,
    emp7,
    emp8,
    emp9,
    emp10,
    emp11,
    emp12,
    emp13,
    emp14,
    emp15,
    emp16,
    emp17,
    guest,
} from "../employees";
import { clearStorage, getEmpBefore, getEmpAfter } from "../asyncStorage";
import { useEffect, useState } from "react";
import AppLoading from "expo-app-loading";

export function HomeScreen({ navigation }) {
    const [employees, setEmployees] = useState();
    const doUWantDatabase = false; // ustaw na false i nie potrzebujesz bazy do dzialania apki

    useEffect(() => {
        if (doUWantDatabase) {
            axios
                .get("http://192.168.1.28:8080/api/v1/employees") //wpisz swoje wewnetrzne ip(nie moze byc localhost!)
                .then((res) => {
                    setEmployees(res.data);
                });
        } else {
            setEmployees([
                emp1,
                emp2,
                emp3,
                emp4,
                emp5,
                emp6,
                emp7,
                emp8,
                emp9,
                emp10,
                emp11,
                emp12,
                emp13,
                emp14,
                emp15,
                emp16,
                emp17,
                guest,
            ]);
        }
    }, []);

    const onEmployeePressed = async (employee) => {
        const before = await getEmpBefore(employee.id);

        if (before === "x") {
            const after = await getEmpAfter(employee.id);

            if (after === "x") {
                navigation.navigate("AfterCoffeeScreen", {
                    user: employee,
                });
            } else {
                navigation.navigate("UserMainInterface", {
                    user: employee,
                });
            }
        } else {
            navigation.navigate("BeforeCoffeeScreen", {
                user: employee,
            });
        }
    };

    if (typeof employees != "undefined") {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require("../assets/Background.png")}
                    resizeMode={"stretch"}
                    style={styles.image}
                >
                    <View style={{ flex: 0.3 }} />
                    <View style={styles.flexBox}>
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => onEmployeePressed(employees[0])}
                        >
                            <View style={styles.square}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: employees[0]["avatarUrl"] }}
                                />
                            </View>
                            <View style={styles.rectangle}>
                                <Text style={styles.interfaceIconsText}>
                                    {employees[0]["nickName"]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => onEmployeePressed(employees[1])}
                        >
                            <View style={styles.square}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: employees[1]["avatarUrl"] }}
                                />
                            </View>
                            <View style={styles.rectangle}>
                                <Text style={styles.interfaceIconsText}>
                                    {employees[1]["nickName"]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => onEmployeePressed(employees[2])}
                        >
                            <View style={styles.square}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: employees[2]["avatarUrl"] }}
                                />
                            </View>
                            <View style={styles.rectangle}>
                                <Text style={styles.interfaceIconsText}>
                                    {employees[2]["nickName"]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => onEmployeePressed(employees[3])}
                        >
                            <View style={styles.square}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: employees[3]["avatarUrl"] }}
                                />
                            </View>
                            <View style={styles.rectangle}>
                                <Text style={styles.interfaceIconsText}>
                                    {employees[3]["nickName"]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => onEmployeePressed(employees[4])}
                        >
                            <View style={styles.square}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: employees[4]["avatarUrl"] }}
                                />
                            </View>
                            <View style={styles.rectangle}>
                                <Text style={styles.interfaceIconsText}>
                                    {employees[4]["nickName"]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => onEmployeePressed(employees[5])}
                        >
                            <View style={styles.square}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: employees[5]["avatarUrl"] }}
                                />
                            </View>
                            <View style={styles.rectangle}>
                                <Text style={styles.interfaceIconsText}>
                                    {employees[5]["nickName"]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.flexBox}>
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => onEmployeePressed(employees[6])}
                        >
                            <View style={styles.square}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: employees[6]["avatarUrl"] }}
                                />
                            </View>
                            <View style={styles.rectangle}>
                                <Text style={styles.interfaceIconsText}>
                                    {employees[6]["nickName"]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => onEmployeePressed(employees[7])}
                        >
                            <View style={styles.square}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: employees[7]["avatarUrl"] }}
                                />
                            </View>
                            <View style={styles.rectangle}>
                                <Text style={styles.interfaceIconsText}>
                                    {employees[7]["nickName"]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => onEmployeePressed(employees[8])}
                        >
                            <View style={styles.square}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: employees[8]["avatarUrl"] }}
                                />
                            </View>
                            <View style={styles.rectangle}>
                                <Text style={styles.interfaceIconsText}>
                                    {employees[8]["nickName"]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => onEmployeePressed(employees[9])}
                        >
                            <View style={styles.square}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: employees[9]["avatarUrl"] }}
                                />
                            </View>
                            <View style={styles.rectangle}>
                                <Text style={styles.interfaceIconsText}>
                                    {employees[9]["nickName"]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => onEmployeePressed(employees[10])}
                        >
                            <View style={styles.square}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: employees[10]["avatarUrl"] }}
                                />
                            </View>
                            <View style={styles.rectangle}>
                                <Text style={styles.interfaceIconsText}>
                                    {employees[10]["nickName"]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => onEmployeePressed(employees[11])}
                        >
                            <View style={styles.square}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: employees[11]["avatarUrl"] }}
                                />
                            </View>
                            <View style={styles.rectangle}>
                                <Text style={styles.interfaceIconsText}>
                                    {employees[11]["nickName"]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.flexBox}>
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => onEmployeePressed(employees[12])}
                        >
                            <View style={styles.square}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: employees[12]["avatarUrl"] }}
                                />
                            </View>
                            <View style={styles.rectangle}>
                                <Text style={styles.interfaceIconsText}>
                                    {employees[12]["nickName"]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => onEmployeePressed(employees[13])}
                        >
                            <View style={styles.square}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: employees[13]["avatarUrl"] }}
                                />
                            </View>
                            <View style={styles.rectangle}>
                                <Text style={styles.interfaceIconsText}>
                                    {employees[13]["nickName"]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => onEmployeePressed(employees[14])}
                        >
                            <View style={styles.square}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: employees[14]["avatarUrl"] }}
                                />
                            </View>
                            <View style={styles.rectangle}>
                                <Text style={styles.interfaceIconsText}>
                                    {employees[14]["nickName"]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => onEmployeePressed(employees[15])}
                        >
                            <View style={styles.square}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: employees[15]["avatarUrl"] }}
                                />
                            </View>
                            <View style={styles.rectangle}>
                                <Text style={styles.interfaceIconsText}>
                                    {employees[15]["nickName"]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => onEmployeePressed(employees[16])}
                        >
                            <View style={styles.square}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: employees[16]["avatarUrl"] }}
                                />
                            </View>
                            <View style={styles.rectangle}>
                                <Text style={styles.interfaceIconsText}>
                                    {employees[16]["nickName"]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => onEmployeePressed({ user: guest })}
                        >
                            <View
                                style={[
                                    styles.square,
                                    { backgroundColor: "#595959" },
                                ]}
                            >
                                <Image
                                    style={styles.image}
                                    source={require("../assets/guest.png")}
                                />
                            </View>
                            <View style={styles.rectangle}>
                                <Text style={styles.interfaceIconsText}>
                                    {guest["nickName"]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1.3 }} />
                </ImageBackground>
            </View>
        );
    } else {
        return <AppLoading />;
    }
}
