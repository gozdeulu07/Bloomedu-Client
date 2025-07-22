import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { FeedbackContext } from './Contexts/FeedbackContext'; // Yolunu projenize göre ayarlayın


const DashboardScreen = ({ navigation }: any) => {
  const feedbackContext = useContext(FeedbackContext);

  if (!feedbackContext) {
    return <Text>Loading...</Text>; // Context hazır değilse
  }

  const { childrenList } = feedbackContext;

  // Bir çocuk seçildiğinde alert gösteren fonksiyon
  const showFeedback = (child: typeof childrenList[0]) => {
    if (child.feedback && child.feedback.trim() !== '') {
      Alert.alert(
        `${child.name} ${child.surname} Feedback`,
        child.feedback,
        [{ text: 'OK' }]
      );
    } else {
      Alert.alert(
        `${child.name} ${child.surname}`,
        'No feedback available.',
        [{ text: 'OK' }]
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome!</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.circle}
          onPress={() => navigation.navigate('AddChild')}
        >
          <Text style={styles.circleText}>Add Child</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.circle, styles.secondCircle]}
          onPress={() => navigation.navigate('ChildInfo')}
        >
          <Text style={styles.circleText}>Child Info</Text>
        </TouchableOpacity>
      </View>

      {/* Feedback alert için basit liste */}
      <View style={{ marginTop: 40 }}>
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Teacher Feedbacks</Text>
        {childrenList.map((child) => (
          <TouchableOpacity
            key={child.id}
            style={[
              styles.childButton,
              { backgroundColor: child.gender === 'Female' ? '#f48fb1' : '#4fa3f7' }
            ]}
            onPress={() => showFeedback(child)}
          >
            <Text style={styles.childButtonText}>{child.name} {child.surname}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'flex-start', alignItems: 'center', padding: 20 },
  welcome: { fontSize: 24, marginBottom: 30 },
  buttonsContainer: { flexDirection: 'row' },
  circle: {
    backgroundColor: '#4fa3f7',
    borderRadius: 100,
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondCircle: { marginLeft: 20 },
  circleText: { color: 'white', textAlign: 'center', fontWeight: 'bold' },

  childButton: {
    padding: 15,
    borderRadius: 15,
    marginVertical: 5,
    width: 250,
  },
  childButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});
