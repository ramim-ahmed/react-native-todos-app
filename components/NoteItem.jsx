import React from "react";
import { StyleSheet, Text, View } from "react-native";
const NoteItem = ({ title }) => {
  return (
    <View style={styles.noteContainer}>
      <Text style={styles.noteText}>{title}</Text>
    </View>
  );
};

export default NoteItem;

const styles = StyleSheet.create({
  noteContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  noteText: {
    fontSize: 18,
    color: "#5A5858",
  },
});
