import React, { useEffect, useRef } from 'react'; 
import { View, Text, Button, AppState } from 'react-native'; 
import { useAuth } from '../contexts/AuthContext';

const TIMEOUT_DURATION = 10 * 1000;

export default function AdminScreen() {
  const { user, logout } = useAuth();
  const timer = useRef(null); 
  const appState = useRef(AppState.currentState); 

  useEffect(() => {
    startTimer();

    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        appState.current === "active" &&
        nextAppState.match(/inactive|background/)
      ) {
        startTimer();
      } else if (nextAppState === "active") {
        resetTimer();
      }
      appState.current = nextAppState;
    });

    return () => {
      clearTimeout(timer.current); 
      subscription.remove();
    };
  }, []);

  const startTimer = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      logout();
    }, TIMEOUT_DURATION);
  };

  const resetTimer = () => {
    clearTimeout(timer.current);
    startTimer();
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Selamat datang Admin, {user?.email}</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}