import * as React from "react";
import {
    ImageBackground,
    View,
    TouchableOpacity,
    Text,
    Image,
} from "react-native";
import AppLoading from "expo-app-loading";
import { setEmpAfter } from "../asyncStorage";
import { clearStorage } from "../asyncStorage";

export function AfterCoffeeScreen({ navigation, route }) {
    const currentUser = route.params.user;
    const currentCoffee = route.params.coffee;

    const secretClear = () => {
        if (currentUser != null && currentCoffee != null) {
            if (currentUser.id == 1 && currentCoffee.title == "Americano") {
                clearStorage();
            }
        }
    };

    if (typeof currentUser == "undefined") return <AppLoading />;
    return (
        <View>
            <ImageBackground
                source={require("../assets/Background.png")}
                resizeMode={"stretch"}
                style={{
                    width: "100%",
                    height: "100%",
                }}
            >
                <View
                    style={{
                        flex: 1,
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                    }}
                >
                    <View>
                        <Text
                            style={{
                                color: "black",
                                textAlign: "center",
                                fontSize: 50,
                                fontWeight: "bold",
                            }}
                        >
                            Jak się czujesz po wypiciu kawy?
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => (
                                setEmpAfter(currentUser.id, ""),
                                navigation.navigate("HomeScreen", {
                                    user: currentUser,
                                })
                            )}
                        >
                            <Image
                                style={{ height: 300, width: 300 }}
                                source={require("../assets/sadFace.png")}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => (
                                setEmpAfter(currentUser.id, ""),
                                navigation.navigate("HomeScreen", {
                                    user: currentUser,
                                })
                            )}
                        >
                            <Image
                                style={{ height: 300, width: 300 }}
                                source={require("../assets/neutralFace.png")}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                // secretClear();
                                setEmpAfter(currentUser.id, "");
                                navigation.navigate("HomeScreen", {
                                    user: currentUser,
                                })
                            }}
                        >
                            <Image
                                style={{ height: 300, width: 300 }}
                                source={require("../assets/happyFace.png")}
                            />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => (
                                setEmpAfter(currentUser.id, "x"),
                                navigation.navigate("HomeScreen")
                            )}
                        >
                            <Text
                                style={{
                                    color: "black",
                                    textAlign: "center",
                                    fontSize: 50,
                                    fontWeight: "bold",
                                }}
                            >
                                Nie teraz
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}
