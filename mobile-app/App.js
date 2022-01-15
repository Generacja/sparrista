import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./Screens/HomeScreen";
import { UserMainInterface } from "./Screens/UserMainInterface";
import { AfterCoffeeScreen } from "./Screens/AfterCoffeeScreen";
import { CoffeeChoiceScreen } from "./Screens/CoffeeChoiceScreen";
import { CoffeeRecipeScreen } from "./Screens/CoffeeRecipeScreen";
import { BeforeCoffeeScreen } from "./Screens/BeforeCoffeeScreen";
import AppLoading from "expo-app-loading";
import { useFonts, Karla_400Regular } from "@expo-google-fonts/karla";

const Stack = createNativeStackNavigator();

function App() {
    let [fontsLoaded] = useFonts({
        Karla_400Regular,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="HomeScreen" component={HomeScreen} />
                    <Stack.Screen
                        name="UserMainInterface"
                        component={UserMainInterface}
                    />
                    <Stack.Screen
                        name="BeforeCoffeeScreen"
                        component={BeforeCoffeeScreen}
                    />
                    <Stack.Screen
                        name="CoffeeChoiceScreen"
                        component={CoffeeChoiceScreen}
                    />
                    <Stack.Screen
                        name="CoffeeRecipeScreen"
                        component={CoffeeRecipeScreen}
                    />
                    <Stack.Screen
                        name="AfterCoffeeScreen"
                        component={AfterCoffeeScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default App;
