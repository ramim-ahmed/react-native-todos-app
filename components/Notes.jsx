import React from "react";
import { TouchableOpacity, View } from "react-native";
import NoteItem from "./NoteItem";

const Notes = ({ data, completeNotes }) => {
  return (
    <View>
      {data.map((note, index) => (
        <TouchableOpacity key={index} onPress={ () => completeNotes(index)}>
          <NoteItem key={index} title={note} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Notes;
