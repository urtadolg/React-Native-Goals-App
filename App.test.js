import { render, fireEvent } from "@testing-library/react-native";
import App from "./App";

describe("<App />", () => {
   test("Initial components rendering", () => {
      const { queryByPlaceholderText, getByText } = render(<App />);
      getByText("Add New Goal");
      queryByPlaceholderText("Your course goal!");
   });

   test("Goals are correctly added to the list", () => {
      const { getByText, getByPlaceholderText } = render(<App />);
      const button = getByText("Add New Goal");
      fireEvent.press(button);
      const textInput = getByPlaceholderText("Your course goal!");
      const addGoalButton = getByText("Add Goal");
      fireEvent.changeText(textInput, "Testing Goal Input");
      fireEvent.press(addGoalButton);
      const goalItem = getByText("Testing Goal Input");
      expect(goalItem).toBeTruthy();
   });

   test("Goal are correctly deleted after touching it", () => {
      const { getByText, getByPlaceholderText, queryByText } = render(<App />);
      const button = getByText("Add New Goal");
      fireEvent.press(button);
      const buttonAddGoal = getByText("Add Goal");
      const inputText = getByPlaceholderText("Your course goal!");
      fireEvent.changeText(inputText, "Testing Goal");
      fireEvent.press(buttonAddGoal);

      const goalText = getByText("Testing Goal");
      fireEvent.press(goalText);

      const newGoalText = queryByText("Testing Goal");
      expect(newGoalText).toBeFalsy();
   });

   test("Open and Close Modal correctly", () => {
      const {
         getByText,
         queryByText,
         getByPlaceholderText,
         queryByPlaceholderText,
      } = render(<App />);
      const btnAddGoal = getByText("Add New Goal");
      const inputGoal = queryByPlaceholderText("Your course goal!");

      expect(inputGoal).toBeFalsy();

      fireEvent.press(btnAddGoal);
      const inputGoalOpened = getByPlaceholderText("Your course goal!");
      const btnModalAddGoal = getByText("Add Goal");
      const btnModalCancel = getByText("Cancel");

      expect(inputGoalOpened).toBeTruthy();
      expect(btnModalAddGoal).toBeTruthy();
      expect(btnModalCancel).toBeTruthy();

      fireEvent.press(btnModalAddGoal);
      const btnModalClosedAddGoal = queryByText("Add Goal");
      expect(btnModalClosedAddGoal).toBeFalsy();

      fireEvent.press(btnAddGoal);
      const btnModalCancelAgain = getByText("Cancel");
      fireEvent.press(btnModalCancelAgain);
      const btnModalClosedAgainAddGoal = queryByText("Add Goal");

      expect(btnModalClosedAgainAddGoal).toBeFalsy();
   });
});
