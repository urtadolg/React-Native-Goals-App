import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {
   return (
      <View style={styles.goalContainer}>
         <Pressable
            android_ripple={{ color: "#260453" }}
            onPress={props.onDelete.bind(this, props.id)}
            style={({ pressed }) => pressed && styles.pressedItem}
         >
            <Text style={styles.goalText}>{props.text}</Text>
         </Pressable>
      </View>
   );
};

export default GoalItem;

const styles = StyleSheet.create({
   goalContainer: {
      backgroundColor: "#5e0acc",
      borderRadius: 5,
      marginBottom: 15,
   },
   goalText: {
      padding: 8,
      color: "white",
   },
   pressedItem: {
      backgroundColor: "#5e0acc48",
   },
});
