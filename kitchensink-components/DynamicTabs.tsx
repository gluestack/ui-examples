import Feather from "@expo/vector-icons/Feather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "../gluestack-ui-components";
const BottomTabs = createBottomTabNavigator<any>();

export function DynamicTabs() {
  const [tabs, setTabs] = React.useState([0, 1]);

  return (
    <BottomTabs.Navigator>
      {tabs.map((i) => (
        <BottomTabs.Screen
          key={i}
          name={`tab-${i}`}
          options={{
            title: `Tab ${i}`,
            tabBarIcon: ({ color, size }) => (
              <Feather name="octagon" color={color} size={size} />
            ),
          }}
        >
          {() => (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>Tab {i}</Text>
              <Button onPress={() => setTabs((tabs) => [...tabs, tabs.length])}>
                Add a tab
              </Button>
              <Button
                onPress={() =>
                  setTabs((tabs) =>
                    tabs.length > 1 ? tabs.slice(0, -1) : tabs
                  )
                }
              >
                Remove a tab
              </Button>
            </View>
          )}
        </BottomTabs.Screen>
      ))}
    </BottomTabs.Navigator>
  );
}
