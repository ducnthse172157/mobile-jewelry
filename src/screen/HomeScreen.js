import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Pressable, Animated, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../constants/theme';
import MainHeader from '../component/MainHeader';
import ScreenHeader from '../component/ScreenHeader';
import TopPlacesCarousel from '../component/TopJewelryCarousel';
import { TOP_PLACES } from '../data';
import SectionHeader from '../component/SectionHeader';
import JewelrysList from '../component/JewelrysList';
import MaterialList from '../feature/MaterialList';
import GemstoneList from '../feature/GemstoneList';


const HomeScreen = () => {
  const [showMaterialsAndGemstones, setShowMaterialsAndGemstones] = useState(false);
  const [selectedSession, setSelectedSession] = useState('materials');
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: selectedSession === 'materials' ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [selectedSession]);

  const underlineWidth = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['25%', '32%'],
  });

  const underlineLeft = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['16%', '53%'],
  });

  const handlePress = () => {
    setShowMaterialsAndGemstones(!showMaterialsAndGemstones);
  };

  return (
    <View style={styles.container}>
      <MainHeader title="Alumina" />
      <ScreenHeader mainTitle="Find Your Jewelry" secondTitle="Find Your Beauty" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopPlacesCarousel list={TOP_PLACES} />
        <SectionHeader title="Best Seller" buttonTitle="See All" />
        <JewelrysList />
        <Pressable onPress={handlePress} style={styles.knowMoreButton}>
          <Text style={styles.knowMoreButtonText}>Know more about Jewelry</Text>
        </Pressable>
        {showMaterialsAndGemstones && (
          <>
            <View style={styles.sessionContainer}>
          <View style={styles.sessionHeader}>
            <Pressable onPress={() => setSelectedSession('materials')}>
              <Text
                style={[
                  styles.sessionText,
                  selectedSession === 'materials' && styles.activeSessionText,
                ]}
              >
                Materials
              </Text>
            </Pressable>
            <Pressable onPress={() => setSelectedSession('gemstones')}>
              <Text
                style={[
                  styles.sessionText,
                  selectedSession === 'gemstones' && styles.activeSessionText,
                ]}
              >
                Gemstones
              </Text>
            </Pressable>
            <Animated.View
              style={[
                styles.underline,
                { width: underlineWidth, left: underlineLeft },
              ]}
            />
          </View>
          {selectedSession === 'materials' ? <MaterialList /> : <GemstoneList />}
        </View>
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightPink,
  },
  knowMoreButton: {
    backgroundColor: '#F472B6',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  knowMoreButtonText: {
    color: 'white',
    fontSize: 16,
  },
  sessionContainer: {
    padding: 16,
  },
  sessionHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
    position: 'relative',
  },
  sessionText: {
    marginHorizontal: 16,
    paddingVertical: 8,
    fontSize: 18,
    color: 'white',
  },
  activeSessionText: {
    color: '#F472B6',
    fontWeight: 'bold',
  },
  underline: {
    position: 'absolute',
    bottom: 0,
    height: 2,
    backgroundColor: '#F472B6',
  },
});

export default HomeScreen;
