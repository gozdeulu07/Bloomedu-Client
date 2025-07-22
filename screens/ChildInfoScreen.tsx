import React, { useState, useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import { FeedbackContext } from './Contexts/FeedbackContext';


interface Child {
  id: number;
  name: string;
  surname: string;
  birthDate: string;
  gender: 'Female' | 'Male';
}

const exampleChildren: Child[] = [
  { id: 1, name: 'Gozde', surname: 'Ulu', birthDate: '2003-06-30', gender: 'Female' },
  { id: 2, name: 'Umut', surname: 'Cingisiz', birthDate: '2017-03-25', gender: 'Male' },
];

const ChildInfoScreen: React.FC = () => {
  const [selectedChild, setSelectedChild] = useState<Child | null>(null);
  const [feedback, setFeedback] = useState('');
  const { addFeedback } = useContext(FeedbackContext);

  const sendFeedback = () => {
    if (!feedback.trim()) {
      Alert.alert('Please enter your feedback before sending.');
      return;
    }
    if (selectedChild) {
      addFeedback(selectedChild.id, feedback);
      Alert.alert('Feedback sent!', 'Thank you for your feedback.');
      setFeedback('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Children</Text>

      <ScrollView horizontal style={styles.childList} showsHorizontalScrollIndicator={false}>
        {exampleChildren.map((child) => (
          <TouchableOpacity
            key={child.id}
            style={[
              styles.circle,
              { backgroundColor: child.gender === 'Female' ? '#f48fb1' : '#4fa3f7' },
            ]}
            onPress={() => setSelectedChild(child)}
          >
            <View>
              <Text style={styles.circleText}>{child.name}</Text>
              <Text style={styles.circleText}>{child.surname}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {selectedChild && (
        <View style={styles.detailBox}>
          <Text style={styles.detailText}>Name: {selectedChild.name}</Text>
          <Text style={styles.detailText}>Surname: {selectedChild.surname}</Text>
          <Text style={styles.detailText}>Birth Date: {selectedChild.birthDate}</Text>
          <Text style={styles.detailText}>Gender: {selectedChild.gender}</Text>

          <TextInput
            style={styles.feedbackInput}
            placeholder="Write your feedback here..."
            value={feedback}
            onChangeText={setFeedback}
            multiline
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendFeedback}>
            <Text style={styles.sendButtonText}>Send Feedback</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ChildInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  childList: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  circle: {
    borderRadius: 100,
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  circleText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 22,
  },
  detailBox: {
    padding: 20,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 5,
  },
  feedbackInput: {
    marginTop: 15,
    height: 80,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    textAlignVertical: 'top',
  },
  sendButton: {
    marginTop: 10,
    backgroundColor: '#4fa3f7',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
