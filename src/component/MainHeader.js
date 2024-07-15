import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from './Icon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';
import AuthService from '../service/AuthService';
import { sizes, spacing, colors } from '../constants/theme';
import LoadingAnimation from './Loading'; // Importing LoadingAnimation

const MainHeader = ({ title, navigation }) => {
  const insets = useSafeAreaInsets();
  const [isModalVisible, setModalVisible] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: '', username: '', role: '' });
  const [loading, setLoading] = useState(false); // Loading state

  const toggleModal = async () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      setLoading(true); // Set loading to true
      try {
        const userId = await AsyncStorage.getItem('id');
        if (userId) {
          const user = await AuthService.getUserById(userId);
          setUserInfo({ role: user.role, name: user.name, username: user.username });
        }
      } catch (error) {
        console.error('Failed to fetch user info:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    if (isModalVisible) {
      fetchUserInfo();
    }
  }, [isModalVisible]);

  const handleLogout = async () => {
    setLoading(true); // Set loading to true
  
    // Simulate a delay to show loading animation
    setTimeout(async () => {
      await AuthService.logout();
      navigation.navigate('Login');
    }, 500); // Adjust the delay as needed (500ms here)
  };
  

  return (
    <View style={[styles.container, { marginTop: insets.top }]}>
      <Pressable onPress={toggleModal}>
        <Icon icon="Hamburger" />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
      <Icon icon="Notification" onPress={() => {}} />

      <Modal
        isVisible={isModalVisible}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        onBackdropPress={toggleModal}
        style={styles.modal}
        useNativeDriver={true}
      >
        <View style={styles.modalContent}>
          {loading ? (
            <LoadingAnimation /> // Show loading animation if loading
          ) : (
            <>
              <Text style={styles.modalTitle}>{userInfo.role ? userInfo.role.toUpperCase() : 'N/A'}</Text>
              <Text style={styles.userInfo}>
                <Text style={styles.label}>Name: </Text>
                <Text style={styles.info}>{userInfo.name}</Text>
              </Text>
              <Text style={styles.userInfo}>
                <Text style={styles.label}>Username: </Text>
                <Text style={styles.info}>{userInfo.username}</Text>
              </Text>
              <Pressable onPress={handleLogout} style={styles.logoutButton}>
                <Text style={styles.logoutButtonText}>Logout</Text>
              </Pressable>
            </>
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.l,
  },
  title: {
    fontSize: sizes.h3,
    fontWeight: 'bold',
  },
  modal: {
    margin: 0,
    justifyContent: 'flex-start',
  },
  modalTitle: {
    fontSize: sizes.h2,
    fontWeight: 'bold',
    color: colors.accentPink,
  },
  modalContent: {
    width: '75%',
    height: '100%',
    backgroundColor: colors.white,
    padding: 20,
  },
  userInfo: {
    fontSize: 18,
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
  },
  info: {
    fontWeight: 'normal',
  },
  logoutButton: {
    backgroundColor: '#F472B6',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default MainHeader;
