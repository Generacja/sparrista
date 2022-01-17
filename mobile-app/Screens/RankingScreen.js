import * as React from "react";
import {
    ImageBackground,
    View,
    TouchableOpacity,
    Text,
    Image,
} from "react-native";
import { emp1, emp11, emp13 } from "../employees";

export function RankingScreen({ navigation, route }) {
    const currentUser = route.params.user;
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
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                        }}
                    >
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("UserMainInterface", {
                                    user: currentUser,
                                })
                            }
                        >
                            <Image
                                source={require("../assets/BackArrow.png")}
                                style={{
                                    resizeMode: "stretch",
                                    width: 100,
                                    height: 50,
                                }}
                            />
                        </TouchableOpacity>
                        <Text
                            style={{
                                flex: 0.5,
                                color: "black",
                                textAlign: "center",
                                fontSize: 50,
                                fontWeight: "bold",
                            }}
                        >
                            RANKING WYPITYCH KAW
                        </Text>
                    </View>
                    <ImageBackground
                        source={require("../assets/Rectangle.png")}
                        resizeMode={"stretch"}
                        style={{
                            width: 1000,
                            height: 150,
                            marginLeft: "10%",
                            marginRight: "10%",
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-evenly",
                                alignContent: "center",
                                alignItems: "center",
                                height: 150,
                            }}
                        >
                            <Text
                                style={{
                                    color: "gold",
                                    textAlign: "center",
                                    fontSize: 50,
                                    fontWeight: "bold",
                                }}
                            >
                                #1
                            </Text>
                            <Image
                                source={{ uri: emp11.avatarUrl }}
                                style={{
                                    width: 150,
                                    height: 150,
                                    borderColor: "gold",
                                    borderWidth: 5,
                                }}
                            />
                            <Text
                                style={{
                                    color: "white",
                                    textAlign: "center",
                                    fontSize: 50,
                                    fontWeight: "bold",
                                }}
                            >
                                {emp11.nickName}
                            </Text>
                            <Text
                                style={{
                                    color: "white",
                                    textAlign: "center",
                                    fontSize: 50,
                                    fontWeight: "bold",
                                }}
                            >
                                13
                            </Text>
                        </View>
                    </ImageBackground>
                    <ImageBackground
                        source={require("../assets/Rectangle.png")}
                        resizeMode={"stretch"}
                        style={{
                            width: 1000,
                            height: 150,
                            marginLeft: "10%",
                            marginRight: "10%",
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-evenly",
                                alignContent: "center",
                                alignItems: "center",
                                width: "100%",
                                height: 150,
                            }}
                        >
                            <Text
                                style={{
                                    color: "silver",
                                    textAlign: "center",
                                    fontSize: 50,
                                    fontWeight: "bold",
                                }}
                            >
                                #2
                            </Text>
                            <Image
                                source={{ uri: emp13.avatarUrl }}
                                style={{
                                    width: 150,
                                    height: 150,
                                    borderColor: "silver",
                                    borderWidth: 5,
                                }}
                            />
                            <Text
                                style={{
                                    color: "white",
                                    textAlign: "center",
                                    fontSize: 50,
                                    fontWeight: "bold",
                                }}
                            >
                                {emp13.nickName}
                            </Text>
                            <Text
                                style={{
                                    color: "white",
                                    textAlign: "center",
                                    fontSize: 50,
                                    fontWeight: "bold",
                                }}
                            >
                                8
                            </Text>
                        </View>
                    </ImageBackground>
                    <ImageBackground
                        source={require("../assets/Rectangle.png")}
                        resizeMode={"stretch"}
                        style={{
                            width: 1000,
                            height: 150,
                            marginLeft: "10%",
                            marginRight: "10%",
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-evenly",
                                alignContent: "center",
                                alignItems: "center",
                                width: "100%",
                                height: 150,
                            }}
                        >
                            <Text
                                style={{
                                    color: "peru",
                                    textAlign: "center",
                                    fontSize: 50,
                                    fontWeight: "bold",
                                }}
                            >
                                #3
                            </Text>
                            <Image
                                source={{ uri: emp1.avatarUrl }}
                                style={{
                                    width: 150,
                                    height: 150,
                                    borderColor: "peru",
                                    borderWidth: 5,
                                }}
                            />
                            <Text
                                style={{
                                    color: "white",
                                    textAlign: "center",
                                    fontSize: 50,
                                    fontWeight: "bold",
                                }}
                            >
                                {emp1.nickName}
                            </Text>
                            <Text
                                style={{
                                    color: "white",
                                    textAlign: "center",
                                    fontSize: 50,
                                    fontWeight: "bold",
                                }}
                            >
                                5
                            </Text>
                        </View>
                    </ImageBackground>
                </View>
            </ImageBackground>
        </View>
    );
}
