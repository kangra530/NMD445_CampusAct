import React from "react" ;
import { Text, TouchableOpacity } from "react-native" ;

const EventButton = ( {whenPressed} ) => {
  return (
  <TouchableOpacity 
    style={styles.button}
    onPress={ whenPressed }
    >
    <Text style={styles.buttonText}>
    i
    </Text>
  </TouchableOpacity>
);
};

const styles ={
  button: {
    width: 40,
    height: 40,
    backgroundColor: "#B9D440",
    borderRadius: 20,
    marginBottom: 20,
    marginLeft: 220,
    paddingTop: 8,
    alignSelf: "right",
  },

  buttonText: {
    fontFamily: "Ariel",
    alignSelf: "center",
    color: "black",
    fontSize: 20,
    
  },

};

export default EventButton ;