import * as React from "react";
import {
    ImageBackground,
    View,
    TouchableOpacity,
    Text,
    Image,
} from "react-native";
import { coff1, coff2, coff3, coff4, coff5 } from "../coffees";
import AppLoading from "expo-app-loading";

export function CoffeeChoiceScreen({ navigation, route }) {
    const currentUser = route.params.user;

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
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                    }}
                >
                    <View style={{ flex: 0.5 }} />
                    <View style={{ flex: 0.5 }}>
                        <Text style={{ fontSize: 50, fontWeight: "bold" }}>
                            WYBIERZ KAWĘ KTÓRĄ CHCESZ ZROBIĆ
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            alignContent: "center",
                            alignItems: "flex-start",
                            justifyContent: "space-evenly",
                        }}
                    >
                        <View style={{ flex: 0.5 }} />
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("CoffeeRecipeScreen", {
                                        user: currentUser,
                                        coffee: coff1,
                                    })
                                }
                            >
                                <Image
                                    source={require("../assets/Americano.png")}
                                    resizeMode={"stretch"}
                                    style={{
                                        width: 200,
                                        height: 200,
                                    }}
                                ></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("CoffeeRecipeScreen", {
                                        user: currentUser,
                                        coffee: coff2,
                                    })
                                }
                            >
                                <Image
                                    source={require("../assets/Espresso.png")}
                                    resizeMode={"stretch"}
                                    style={{
                                        width: 200,
                                        height: 200,
                                    }}
                                ></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("CoffeeRecipeScreen", {
                                        user: currentUser,
                                        coffee: coff3,
                                    })
                                }
                            >
                                <Image
                                    source={require("../assets/FlatWhite.png")}
                                    resizeMode={"stretch"}
                                    style={{
                                        width: 200,
                                        height: 200,
                                    }}
                                ></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("CoffeeRecipeScreen", {
                                        user: currentUser,
                                        coffee: coff4,
                                    })
                                }
                            >
                                <Image
                                    source={require("../assets/Cappuccino.png")}
                                    resizeMode={"stretch"}
                                    style={{
                                        width: 200,
                                        height: 200,
                                    }}
                                ></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("CoffeeRecipeScreen", {
                                        user: currentUser,
                                        coffee: coff5,
                                    })
                                }
                            >
                                <Image
                                    source={require("../assets/CaffeLatte.png")}
                                    resizeMode={"stretch"}
                                    style={{
                                        width: 200,
                                        height: 200,
                                    }}
                                ></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.5 }} />
                    </View>
                    <View style={{ flex: 0.5 }} />
                </View>
            </ImageBackground>
        </View>
    );
}
