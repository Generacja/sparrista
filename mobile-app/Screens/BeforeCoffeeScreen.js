import React, { Component, useState, useEffect } from "react";
import { ImageBackground, View, Text, Image, Pressable } from "react-native";
import { styles } from "../Styles/Styles.js";
import { setEmpBefore } from "../asyncStorage";

export function BeforeCoffeeScreen({ navigation, route }) {
    const [bitterness, setBitterness] = React.useState("");
    const [acidity, setAcidity] = React.useState("");
    const [intensity, setIntensity] = React.useState("");
    const currentUser = route.params.user;

    useEffect(async () => {
        if (bitterness !== "" && acidity !== "" && intensity !== "") {
            setEmpBefore(currentUser.id, "x");
            navigation.navigate("UserMainInterface", { user: currentUser });
        }
    }, [bitterness, acidity, intensity]);

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../assets/Background.png")}
                resizeMode={"stretch"}
                style={styles.image}
            >
                <View
                    style={{
                        paddingBottom: 30,
                        alignItems: "center",
                        paddingTop: 20,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "Karla_400Regular",
                            fontSize: 55,
                            fontWeight: "bold",
                        }}
                    >
                        POWIEDZ NAM {currentUser["nickName"]}
                    </Text>
                </View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "Karla_400Regular",
                            fontSize: 40,
                            fontWeight: "bold",
                        }}
                    >
                        JAKĄ GORYCZ KAWY PREFERUJESZ?
                    </Text>
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <Pressable
                            style={() => [
                                { borderWidth: bitterness === "1" ? 2 : 0 },
                            ]}
                            onPress={() => setBitterness("1")}
                        >
                            <Image
                                source={require("../assets/Bean1.png")}
                                resizeMode={"stretch"}
                                style={{
                                    height: 104,
                                    width: 79,
                                    marginRight: 20,
                                    marginLeft: 20,
                                }}
                            ></Image>
                        </Pressable>
                        <Pressable
                            style={() => [
                                { borderWidth: bitterness === "2" ? 2 : 0 },
                            ]}
                            onPress={() => setBitterness("2")}
                        >
                            <Image
                                source={require("../assets/Bean2.png")}
                                resizeMode={"stretch"}
                                style={{
                                    height: 114,
                                    width: 89,
                                    marginRight: 20,
                                    marginLeft: 20,
                                }}
                            ></Image>
                        </Pressable>
                        <Pressable
                            style={() => [
                                { borderWidth: bitterness === "3" ? 2 : 0 },
                            ]}
                            onPress={() => setBitterness("3")}
                        >
                            <Image
                                source={require("../assets/Bean3.png")}
                                resizeMode={"stretch"}
                                style={{
                                    height: 124,
                                    width: 99,
                                    marginRight: 20,
                                    marginLeft: 20,
                                }}
                            ></Image>
                        </Pressable>
                        <Pressable
                            style={() => [
                                { borderWidth: bitterness === "4" ? 2 : 0 },
                            ]}
                            onPress={() => setBitterness("4")}
                        >
                            <Image
                                source={require("../assets/Bean4.png")}
                                resizeMode={"stretch"}
                                style={{
                                    height: 134,
                                    width: 109,
                                    marginRight: 20,
                                    marginLeft: 20,
                                }}
                            ></Image>
                        </Pressable>
                        <Pressable
                            style={() => [
                                { borderWidth: bitterness === "5" ? 2 : 0 },
                            ]}
                            onPress={() => setBitterness("5")}
                        >
                            <Image
                                source={require("../assets/Bean5.png")}
                                resizeMode={"stretch"}
                                style={{
                                    height: 144,
                                    width: 119,
                                    marginRight: 20,
                                    marginLeft: 20,
                                }}
                            ></Image>
                        </Pressable>
                    </View>
                </View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: "column",
                        alignItems: "center",
                        paddingTop: 10,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "Karla_400Regular",
                            fontSize: 40,
                            fontWeight: "bold",
                        }}
                    >
                        JAKĄ KWASOWOŚĆ KAWY PREFERUJESZ?
                    </Text>
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <Pressable
                            style={() => [
                                { borderWidth: acidity === "1" ? 2 : 0 },
                            ]}
                            onPress={() => setAcidity("1")}
                        >
                            <Image
                                source={require("../assets/Bean1.png")}
                                resizeMode={"stretch"}
                                style={{
                                    height: 104,
                                    width: 79,
                                    marginRight: 20,
                                    marginLeft: 20,
                                }}
                            ></Image>
                        </Pressable>
                        <Pressable
                            style={() => [
                                { borderWidth: acidity === "2" ? 2 : 0 },
                            ]}
                            onPress={() => setAcidity("2")}
                        >
                            <Image
                                source={require("../assets/Bean2.png")}
                                resizeMode={"stretch"}
                                style={{
                                    height: 114,
                                    width: 89,
                                    marginRight: 20,
                                    marginLeft: 20,
                                }}
                            ></Image>
                        </Pressable>
                        <Pressable
                            style={() => [
                                { borderWidth: acidity === "3" ? 2 : 0 },
                            ]}
                            onPress={() => setAcidity("3")}
                        >
                            <Image
                                source={require("../assets/Bean3.png")}
                                resizeMode={"stretch"}
                                style={{
                                    height: 124,
                                    width: 99,
                                    marginRight: 20,
                                    marginLeft: 20,
                                }}
                            ></Image>
                        </Pressable>
                        <Pressable
                            style={() => [
                                { borderWidth: acidity === "4" ? 2 : 0 },
                            ]}
                            onPress={() => setAcidity("4")}
                        >
                            <Image
                                source={require("../assets/Bean4.png")}
                                resizeMode={"stretch"}
                                style={{
                                    height: 134,
                                    width: 109,
                                    marginRight: 20,
                                    marginLeft: 20,
                                }}
                            ></Image>
                        </Pressable>
                        <Pressable
                            style={() => [
                                { borderWidth: acidity === "5" ? 2 : 0 },
                            ]}
                            onPress={() => setAcidity("5")}
                        >
                            <Image
                                source={require("../assets/Bean5.png")}
                                resizeMode={"stretch"}
                                style={{
                                    height: 144,
                                    width: 119,
                                    marginRight: 20,
                                    marginLeft: 20,
                                }}
                            ></Image>
                        </Pressable>
                    </View>
                </View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: "column",
                        alignItems: "center",
                        paddingTop: 10,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "Karla_400Regular",
                            fontSize: 40,
                            fontWeight: "bold",
                        }}
                    >
                        JAKĄ INTENSYWNOŚĆ KAWY PREFERUJESZ?
                    </Text>
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <Pressable
                            style={() => [
                                { borderWidth: intensity === "1" ? 2 : 0 },
                            ]}
                            onPress={() => setIntensity("1")}
                        >
                            <Image
                                source={require("../assets/Bean1.png")}
                                resizeMode={"stretch"}
                                style={{
                                    height: 104,
                                    width: 79,
                                    marginRight: 20,
                                    marginLeft: 20,
                                }}
                            ></Image>
                        </Pressable>
                        <Pressable
                            style={() => [
                                { borderWidth: intensity === "2" ? 2 : 0 },
                            ]}
                            onPress={() => setIntensity("2")}
                        >
                            <Image
                                source={require("../assets/Bean2.png")}
                                resizeMode={"stretch"}
                                style={{
                                    height: 114,
                                    width: 89,
                                    marginRight: 20,
                                    marginLeft: 20,
                                }}
                            ></Image>
                        </Pressable>
                        <Pressable
                            style={() => [
                                { borderWidth: intensity === "3" ? 2 : 0 },
                            ]}
                            onPress={() => setIntensity("3")}
                        >
                            <Image
                                source={require("../assets/Bean3.png")}
                                resizeMode={"stretch"}
                                style={{
                                    height: 124,
                                    width: 99,
                                    marginRight: 20,
                                    marginLeft: 20,
                                }}
                            ></Image>
                        </Pressable>
                        <Pressable
                            style={() => [
                                { borderWidth: intensity === "4" ? 2 : 0 },
                            ]}
                            onPress={() => setIntensity("4")}
                        >
                            <Image
                                source={require("../assets/Bean4.png")}
                                resizeMode={"stretch"}
                                style={{
                                    height: 134,
                                    width: 109,
                                    marginRight: 20,
                                    marginLeft: 20,
                                }}
                            ></Image>
                        </Pressable>
                        <Pressable
                            style={() => [
                                { borderWidth: intensity === "5" ? 2 : 0 },
                            ]}
                            onPress={() => setIntensity("5")}
                        >
                            <Image
                                source={require("../assets/Bean5.png")}
                                resizeMode={"stretch"}
                                style={{
                                    height: 144,
                                    width: 119,
                                    marginRight: 20,
                                    marginLeft: 20,
                                }}
                            ></Image>
                        </Pressable>
                    </View>
                </View>
                <View style={{ flex: 1 }}></View>
            </ImageBackground>
        </View>
    );
}