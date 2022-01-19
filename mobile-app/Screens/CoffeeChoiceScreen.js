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
import {useEffect, useState} from "react";
import {API_URL} from "@env";

import axios from "axios";

export function CoffeeChoiceScreen({ navigation, route }) {
    const currentUser = route.params.user;

    const [americano, setAmericano] = useState(coff1);
    const [espresso, setEspresso] = useState(coff2);
    const [flatWhite, setFlatWhite] = useState(coff3);
    const [cappuccino, setCappuccino] = useState(coff4);
    const [caffeLatte, setCaffeLatte] = useState(coff5);

    useEffect(() => {
        axios.get(API_URL + "/coffees")
            .then((res) => {

                res.data.map((coffee) => {
                    switch(coffee.title) {
                        case "Americano": setAmericano(coffee); break;
                        case "Espresso": setEspresso(coffee); break;
                        case "Flat White": setFlatWhite(coffee); break;
                        case "Cappuccino": setCappuccino(coffee); break;
                        case "Caffe Latte": setCaffeLatte(coffee); break;
                    }
                })

                // console.log(res.data);
            }).catch((e) => {
            console.log(e);
        })

    }, []);

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
                                        coffee: americano,
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
                                        coffee: espresso,
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
                                        coffee: flatWhite,
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
                                        coffee: cappuccino,
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
                                        coffee: caffeLatte,
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
