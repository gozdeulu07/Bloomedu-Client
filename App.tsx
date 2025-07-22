import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import DashboardScreen from './screens/DashboardScreen';
import AddChildScreen from './screens/AddChildScreen';
import ChildInfoScreen from './screens/ChildInfoScreen';

import SurveyScreen from './screens/SurveyScreen';
import ResultScreen from './screens/ResultScreen';
import EducationScreen from './screens/EducationScreen';
import ColorsGameScreen from './screens/ColorsGameScreen';
import ColorsMatchingGameScreen from './screens/ColorsMatchingGameScreen';
import { RootStackParamList } from './screens/types';

import HomeScreen from './screens/HomeScreen';
import TeacherScreen from './screens/TeacherScreen';

import TeacherStudentsScreen from './screens/TeacherStudentsScreen';
import { FeedbackProvider } from './screens/Contexts/FeedbackContext';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <FeedbackProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Teacher" component={TeacherScreen}/>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="AddChild" component={AddChildScreen} />
          <Stack.Screen name="ChildInfo" component={ChildInfoScreen} />
          <Stack.Screen name="Survey" component={SurveyScreen} />
          <Stack.Screen name="Result" component={ResultScreen} />
          <Stack.Screen name="Education" component={EducationScreen} />
          <Stack.Screen name="TeacherStudents" component={TeacherStudentsScreen} />
          <Stack.Screen name="ColorsGame" component={ColorsGameScreen} options={{ title: 'Colors Game' }} />
        <Stack.Screen name="ColorsMatchingGame" component={ColorsMatchingGameScreen} options={{ title: 'Matching Game' }} />

        </Stack.Navigator>
      </NavigationContainer>
    </FeedbackProvider>
  );
}
