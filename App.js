import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Flex,
  ScrollView,
  Image,
} from 'react-native';

import Card from "./components/Card" ;

// You can import supported modules from npm

// or any files within the Snack

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View>
          <Text style={styles.title}>Events</Text>
        </View>
      <ScrollView>

       <Card 
       eventName = "College Dems"
       orgImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLvYC6SqgXiQC7cHJuRPoIoN9VjUwNt5S-Q&s"
       description = "Written testimony needed."
       eventLink = "https://umaine.edu/umsg/organization/university-of-maine-college-democrats/"
       
       />

       <Card 
       eventName = "ASL Club"
       orgImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShkoHwgt8mu704I5Rr5vhwWKLlmopvlXLthw&s"
       description = "Raising funds."
       eventLink = "https://umaine.edu/umsg/organization/american-sign-language-club/"
       />

       <Card 
       eventName = "College Dems"
       orgImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLvYC6SqgXiQC7cHJuRPoIoN9VjUwNt5S-Q&s"
       eventLink = "https://umaine.edu/umsg/organization/university-of-maine-college-democrats/"
       
       />

       <Card 
       eventName = "College Dems"
       orgImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLvYC6SqgXiQC7cHJuRPoIoN9VjUwNt5S-Q&s"
       eventLink = "https://umaine.edu/umsg/organization/university-of-maine-college-democrats/"
       
       />

       <Card 
       eventName = "College Dems"
       orgImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLvYC6SqgXiQC7cHJuRPoIoN9VjUwNt5S-Q&s"
       eventLink = "https://umaine.edu/umsg/organization/university-of-maine-college-democrats/"
       
       />
      <View style={styles.bottomscroll}/>
       
      
      </ScrollView>

      <View style={styles.menu}>
        <Image
          style={{ width: 19, height: 19, margin: 30 }}
          source={require('./assets/home.png')}
        />
        <Image
          style={{ width: 18, height: 18, margin: 30 }}
          source={require('./assets/calendar.png')}
        />
        <Image
          style={{ width: 18, height: 21, margin: 30 }}
          source={require('./assets/user.png')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F2F2FF',
    padding: 8,
  },
  
  
  title: {
    color: '#2A2447',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'left',
    fontSize: 46,
  },
  menu: {
    bottom: 40,
    width: '90%',
    height: 65,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: '#212131',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },

  bottomscroll: {
    height: 100,
  }
});
