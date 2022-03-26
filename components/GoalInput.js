import { useState } from "react";
import {
   StyleSheet,
   View,
   TextInput,
   Button,
   Modal,
   Image,
} from "react-native";

const GoalInput = (props) => {
   const [inputText, setInputText] = useState("");

   const getInputHandler = (inputText) => {
      setInputText(inputText);
   };

   return (
      <Modal visible={props.isVisible} animationType="slide">
         <View style={styles.inputContainer}>
            <Image
               style={styles.image}
               source={require("../assets/images/goal.png")}
            />
            <TextInput
               style={styles.textInput}
               placeholder="Your course goal!"
               onChangeText={getInputHandler}
               value={inputText}
            />
            <View style={styles.buttonsContainer}>
               <View style={styles.button}>
                  <Button
                     color={"#e20686"}
                     title="Cancel"
                     onPress={props.onClose}
                  />
               </View>
               <View style={styles.button}>
                  <Button
                     color={"#b473ff"}
                     title="Add Goal"
                     onPress={props.onAddGoal.bind(this, inputText)}
                  />
               </View>
            </View>
         </View>
      </Modal>
   );
};

export default GoalInput;

const styles = StyleSheet.create({
   inputContainer: {
      backgroundColor: "#4a2e8b",
      alignItems: "center",
      paddingHorizontal: 16,
      justifyContent: "center",
      flex: 1,
   },
   textInput: {
      width: "100%",
      padding: 7,
      borderColor: "#dddddd",
      borderRadius: 5,
      backgroundColor: "#dddddd",
      borderWidth: 1,
      marginBottom: 10,
   },
   buttonsContainer: {
      flexDirection: "row",
   },
   button: {
      width: 100,
      marginHorizontal: 5,
   },
   image: {
      width: 100,
      height: 100,
      marginBottom: 10,
   },
});
