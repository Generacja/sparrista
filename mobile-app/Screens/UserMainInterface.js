import * as React from "react";
import {
    ImageBackground,
    View,
    TouchableOpacity,
    Text,
    Image,
} from "react-native";
import { styles } from "../Styles/Styles.js";
import AppLoading from "expo-app-loading";
import { coff1, coff2, coff3, coff4, coff5 } from "../coffees";

export function UserMainInterface({ navigation, route }) {
    const currentUser = route.params.user;

    if (typeof currentUser == "undefined") return <AppLoading />;
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../assets/Background.png")}
                resizeMode={"stretch"}
                style={styles.image}
            >
                <View style={{ flex: 0.9 }}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            padding: 40,
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => navigation.navigate("HomeScreen")}
                        >
                            <Image
                                style={{ height: 52, width: 90, marginTop: 20 }}
                                source={require("../assets/BackArrow.png")}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View
                    style={{
                        flex: 1.5,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: 150,
                        padding: 25,
                        paddingLeft: 120
                    }}
                >
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("CoffeeChoiceScreen", {
                                user: currentUser,
                            })
                        }
                    >
                        <ImageBackground
                            source={require("../assets/NewCoffee2.png")}
                            style={styles.interfaceIcons2}
                        >
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("RankingScreen", {
                                user: currentUser,
                            })
                        }
                    >
                        <ImageBackground
                            source={require("../assets/Ranking2.png")}
                            style={styles.interfaceIcons2}
                        >
                        </ImageBackground>
                    </TouchableOpacity>
                    <View
                        style={{
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Image
                            style={{
                                height: 185,
                                width: 210,
                                backgroundColor: "#9f6f4c",
                                borderTopLeftRadius: 5,
                                borderTopRightRadius: 5,
                                marginLeft: 60,
                            }}
                            source={{ uri: currentUser["avatarUrl"] }}
                        />
                        <View
                            style={{
                                height: 10,
                                width: 210,
                                marginLeft: 60,
                                backgroundColor: "#212121",
                                borderBottomLeftRadius: 5,
                                borderBottomRightRadius: 5,
                            }}
                        />
                        <Text style={{ marginLeft: 60,fontWeight: "bold", fontSize: 20 }}>
                            {currentUser["nickName"]}
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        flex: 2.1,
                        justifyContent: "space-between",
                        flexDirection: "row",
                        marginLeft: 140,
                        marginRight: 140,
                    }}
                >
                    <ImageBackground
                        style={{
                            height: 300,
                            width: 720,
                            backgroundColor: "#363636",
                            borderRadius: 20,
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: "Karla_400Regular",
                                color: "white",
                                fontSize: 50,
                            }}
                        >
                            POLECANE
                        </Text>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("CoffeeRecipeScreen", {
                                        user: currentUser,
                                        coffee:
                                            currentUser.id % 2 == 0
                                                ? coff1
                                                : coff2,
                                    })
                                }
                                style={{ flexDirection: "column" }}
                            >
                                <ImageBackground
                                    style={styles.polecaneSquare}
                                    source={require("../assets/ForYou.png")}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("CoffeeRecipeScreen", {
                                        user: currentUser,
                                        coffee: coff3,
                                    })
                                }
                                style={{ flexDirection: "column" }}
                            >
                                <ImageBackground
                                    style={[
                                        styles.polecaneSquare,
                                        { width: 220 },
                                    ]}
                                    source={require("../assets/MostCommon.png")}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("CoffeeRecipeScreen", {
                                        user: currentUser,
                                        coffee: coff4,
                                    })
                                }
                                style={{ flexDirection: "column" }}
                            >
                                <ImageBackground
                                    style={[
                                        styles.polecaneSquare,
                                        { width: 220 },
                                    ]}
                                    source={require("../assets/BestRated.png")}
                                />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                    <View style={{ flexDirection: "column" }}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("CoffeeRecipeScreen", {
                                    user: currentUser,
                                    coffee: coff5,
                                })
                            }
                        >
                            <View
                                source={require("../assets/next_week.png")}
                                style={{
                                    height: 260,
                                    width: 220,
                                    backgroundColor: "#9F6F4C",
                                    borderTopLeftRadius: 20,
                                    borderTopRightRadius: 20,
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Image
                                    source={require("../assets/next_week.png")}
                                    style={{
                                        width: 130,
                                        height: 200,
                                        resizeMode: "contain",
                                    }}
                                />
                            </View>
                            <View
                                style={{
                                    height: 30,
                                    width: 220,
                                    backgroundColor: "#212121",
                                    borderBottomLeftRadius: 20,
                                    borderBottomRightRadius: 20,
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: "Karla_400Regular",
                                        color: "white",
                                        fontSize: 24,
                                        textAlign: "center",
                                        fontWeight: "bold",
                                        marginTop: -5,
                                    }}
                                >
                                    ZA TYDZIEŃ
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1 }} />
            </ImageBackground>
        </View>
    );
}