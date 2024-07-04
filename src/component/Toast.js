// components/Toast.js
import React, { useState, useEffect, useRef, useContext, createContext, useImperativeHandle } from 'react';
import { Text, Animated, StyleSheet } from 'react-native';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const toastRef = useRef();
  
  return (
    <ToastContext.Provider value={toastRef}>
      {children}
      <Toast ref={toastRef} />
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);

const Toast = React.forwardRef((_, ref) => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setTimeout(() => {
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }).start(() => setVisible(false));
        }, 2000);
      });
    }
  }, [visible, fadeAnim]);

  useImperativeHandle(ref, () => ({
    show: (msg) => {
      setMessage(msg);
      setVisible(true);
    },
  }));

  if (!visible) {
    return null;
  }

  return (
    <Animated.View style={[styles.toast, { opacity: fadeAnim }]}>
      <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    top: 50,
    left: '10%',
    right: '10%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    zIndex: 1000,
  },
  text: {
    color: 'pink',
    textAlign: 'center',
  },
});
