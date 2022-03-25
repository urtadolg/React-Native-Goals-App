import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
   const [goalsList, setGoalsList] = useState([]);
   const [showModal, setShowModal] = useState(false);

   const addGoalHandler = (inputText) => {
      setGoalsList((currentGoalsList) => [
         ...currentGoalsList,
         { text: inputText, id: Math.random() },
      ]);
      closeModalHandler();
   };

   const onDeleteHandler = (id) => {
      setGoalsList((currentGoalsList) => {
         return currentGoalsList.filter((item) => item.id !== id);
      });
   };

   const openModalHandler = () => {
      setShowModal(true);
   };

   const closeModalHandler = () => {
      setShowModal(false);
   };

   return (
      <>
         <StatusBar style="light" />
         <View style={styles.appContainer}>
            <Button
               color={"#c18bff"}
               title="Add New Goal"
               onPress={openModalHandler}
            />
            {showModal && (
               <GoalInput
                  onAddGoal={addGoalHandler}
                  isVisible={showModal}
                  onClose={closeModalHandler}
               />
            )}
            <View style={styles.goalsContainer}>
               <FlatList
                  data={goalsList}
                  keyExtractor={(item, index) => {
                     return item.id;
                  }}
                  renderItem={(itemData) => {
                     return (
                        <GoalItem
                           text={itemData.item.text}
                           id={itemData.item.id}
                           onDelete={onDeleteHandler}
                        />
                     );
                  }}
               />
            </View>
         </View>
      </>
   );
}

const styles = StyleSheet.create({
   appContainer: {
      flex: 1,
      padding: 15,
      marginTop: 20,
   },
   goalsContainer: {
      flex: 5,
      marginTop: 20,
   },
});
