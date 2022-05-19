import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import Notes from "../components/Notes";

const Home = () => {
  const [notes, setNotes] = useState("");
  const [notesList, setNotesList] = useState([]);
  const handleAddNotesPress = () => {
    setNotesList([...notesList, notes]);
    setNotes(null);
  };

  const completeNotes = index => {
     const notesCopy = [...notesList];
     notesCopy.splice(index, 1);
     setNotesList(notesCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headLineContainer}>
        <Text style={styles.headLine}>Today's Notes</Text>
      </View>
      <Notes data={notesList} completeNotes={completeNotes} />
      <View style={styles.inputBoxArea}>
        <TextInput
        value={notes}
          onChangeText={(val) => setNotes(val)}
          placeholder="Write Note's"
          style={styles.input}
        />
        <TouchableOpacity onPress={handleAddNotesPress} style={styles.button}>
          <Text style={{ fontSize: 18 }}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 40,
  },
  headLineContainer: {
    marginBottom: 20,
  },
  headLine: {
    fontSize: 30,
    fontWeight: "600",
  },
  input: {
    height: 40,
    width: 250,
    backgroundColor: "#fff",
    margin: 12,
    padding: 10,
  },
  inputBoxArea: {
    position: "absolute",
    bottom: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    marginStart: 40,
    padding: 10,
  },
});
