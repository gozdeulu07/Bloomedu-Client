import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

function AddChildScreen(props: any) {
  const { navigation, route } = props;

  const { childrenList = [], setChildrenList = () => {} } = route.params || {};

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');

  const isValidDate = (dateString: string) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateString)) return false;

    const date = new Date(dateString);
    return date instanceof Date && !isNaN(date.getTime());
  };

  const validateAndSubmit = () => {
    if (!firstName.trim() || !lastName.trim() || !birthDate.trim() || !gender) {
      Alert.alert('Missing Information', 'Please fill in all the fields.');
      return;
    }

    if (!isValidDate(birthDate)) {
      Alert.alert('Invalid Date', 'Please enter a valid birth date in YYYY-MM-DD format.');
      return;
    }

    const newChild = {
      firstName,
      lastName,
      birthDate,
      gender,
    };


    setChildrenList([...(childrenList || []), newChild]);

    Alert.alert('Success', 'Child information has been added.');

   
    navigation.navigate('Survey');


    setFirstName('');
    setLastName('');
    setBirthDate('');
    setGender('');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Add Child Information</Text>

        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />

        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />

        <TextInput
          style={styles.input}
          placeholder="Birth Date (YYYY-MM-DD)"
          value={birthDate}
          onChangeText={setBirthDate}
        />

        <Text style={styles.label}>Gender</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={gender}
            onValueChange={(value) => setGender(value)}
            style={styles.picker}
          >
            <Picker.Item label="Select Gender" value="" />
            <Picker.Item label="Girl" value="Girl" />
            <Picker.Item label="Boy" value="Boy" />
          </Picker>
        </View>

        <View style={styles.button}>
          <Button title="Add" onPress={validateAndSubmit} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default AddChildScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  label: {
    marginBottom: 6,
    fontSize: 16,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  button: {
    marginTop: 16,
  },
});
