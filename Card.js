import React from 'react';
import { Text, View, Image, Flex, StyleSheet, Alert, Linking } from 'react-native';
import EventButton from './EventButton';
const Card = (props) => {
  return (
    <View style={styles.card}>
      <Image
        style={{
          width: 42,
          height: 39,
          marginLeft: 20,
          marginTop: 20,
          justifyContent: 'center',
          borderRadius: 8,
        }}
        source={{ uri: props.orgImg }}
      />

      <View style={{ flexDirection: 'column' }}>
        <Text style={styles.heading}>{props.eventName}</Text>
        <Text style={styles.paragraph}>{props.description}</Text>
        <EventButton
          whenPressed={() => {
            Linking.openURL( props.eventLink );
          }}
        />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    // Position.
    display: Flex, // Unnecessary because default.
    flex: 1, // Use one unit of available space; similar to 1fr.
    flexDirection: 'row',
    alignItems: 'left',
    justifyContent: 'flex-start',
    position: 'abolute',
    // Box color.
    color: 'grey',
    backgroundColor: '#7360F9',
    // Padding.
    paddingVertical: 3,
    paddingHorizontal: 3,
    paddingRight: 30,
    // Margin
    margin: 10,
    // Box shadow.
    shadowColor: 'grey',
    shadowOffset: '{width:3,height: 3}',
    shadowOpacity: 3,
    shadowRadius: 4,
    // Border.
    borderWidth: 0,
    borderWidthColor: '#3535B0',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 30,
  },
  heading: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 10,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    textTransform: 'uppercase',
    color: '#F2F2FF',
  },
  paragraph: {
    marginTop: 0,
    marginRight: 10,
    marginLeft: 25,
    marginBottom: 40,
    paddingRight: 20,
    fontSize: 16,
    textAlign: 'left',
    color: '#F2F2FF',
  },
});
