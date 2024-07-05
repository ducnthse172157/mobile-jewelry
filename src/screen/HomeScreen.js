import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../constants/theme';
import MainHeader from '../component/MainHeader';
import ScreenHeader from '../component/ScreenHeader';
import TopPlacesCarousel from '../component/TopJewelryCarousel';
import { TOP_PLACES } from '../data';
import SectionHeader from '../component/SectionHeader';
import JewelrysList from '../component/JewelrysList';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader title="Alumina" />
      <ScreenHeader mainTitle="Find Your Jewelry" secondTitle="Find Your Style" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopPlacesCarousel list={TOP_PLACES} />
        <SectionHeader
          title="Best Seller"
          buttonTitle="See All"
        />
        <JewelrysList />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightPink,
  },
});

export default HomeScreen;
