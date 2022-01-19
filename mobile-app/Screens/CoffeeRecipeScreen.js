import * as React from "react";
import {
    ImageBackground,
    View,
    TouchableOpacity,
    Text,
    Image,
} from "react-native";
import AppLoading from "expo-app-loading";

function coffeeSwitch(title) {
    switch (title) {
        case "Americano":
            return require("../assets/AmericanoCup.png");
        case "Caffe Latte":
            return require("../assets/CaffeLatteCup.png");
        case "Cappuccino":
            return require("../assets/CappuccinoCup.png");
        case "Espresso":
            return require("../assets/EspressoCup.png");
        case "Flat White":
            return require("../assets/FlatWhiteCup.png");
        default:
            return require("../assets/AmericanoCup.png");
    }
}

export function CoffeeRecipeScreen({navigation, route}) {
    const currentUser = route.params.user;
    const currentCoffee = route.params.coffee;

    if (typeof currentUser == "undefined") return <AppLoading/>;
    return (
        <View>
            <ImageBackground
                source={require("../assets/Background.png")}
                resizeMode={"stretch"}
                style={{
                    width: "100%",
                    height: "100%",
                }}>
                <View
                    style={{
                        flex: 1,
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        padding: 60
                    }}>
                    <View
                        style={{
                            height: 140,
                            width: '100%',
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: '#9F6F4C',
                            borderRadius: 20,
                        }}>
                        <Image
                            style={{height: 100, width: 100, resizeMode: "stretch", marginLeft: 50}}
                            source={coffeeSwitch(currentCoffee.title)}
                        />
                        <View style={{flex: 1}}>
                            <Text style={{
                                fontSize: 60,
                                textAlign: "center",
                                textTransform: "uppercase",
                                marginRight: 100,
                                fontWeight: 'bold'
                            }}>
                                {currentCoffee.title}
                            </Text>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: "row", height: 450
                    }}>
                        <View style={{
                            flex: 1,
                            backgroundColor: "#9F6F4C",
                            borderRadius: 20,
                            marginTop: 40,
                            marginBottom: 40,
                            padding: 30,
                            marginRight: 20
                        }}>
                            <Text style={{fontSize: 30}}>
                                {currentCoffee.coffeeDescription}
                            </Text>
                        </View>
                        <View style={{
                            flex: 1,
                            backgroundColor: "#9F6F4C",
                            borderRadius: 20,
                            marginTop: 40,
                            marginBottom: 40,
                            padding: 30,
                            marginLeft: 20
                        }}>
                            <Text style={{fontSize: 30}}>
                                {currentCoffee.preparationDescription}
                            </Text>
                        </View>
                    </View>
                    <View style={{flex: 1}}>
                        <TouchableOpacity
                            onPress={() => {
                                console.log(currentUser)
                                currentUser.user && currentUser.user.isGuest ?
                                    navigation.navigate("HomeScreen", {
                                        user: currentUser,
                                    }) :
                                    navigation.navigate("AfterCoffeeScreen", {
                                        user: currentUser,
                                        coffee: currentCoffee,
                                    })
                                }
                            }
                        >
                            <ImageBackground
                                source={require("../assets/Rectangle.png")}
                                resizeMode={"stretch"}
                                style={{
                                    width: 500,
                                    height: 100,
                                }}
                            >
                                <Text style={{fontSize: 40, marginTop: 14, textAlign: "center", fontWeight: 'bold'}}>
                                    Kawa zrobiona!
                                </Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}
