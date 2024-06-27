import React,  {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, StatusBar, Dimensions, Image} from 'react-native';
import { colors } from '../constants/theme';
import MainHeader from '../component/MainHeader';
import SearchInput from '../component/Search/SearchInput';
import SearchContent from '../component/Search/SearchContent';
import { ScrollView } from 'react-native-gesture-handler';

const SearchScreenDetails = () => {
  const [image, setImage] = useState(null);

  const getData = data => {
    setImage(data);
  }
  const windowWidth = Dimensions.get('window').width;
  const windoeHeight = Dimensions.get('window').height;
  
  return ( 
    <View style={styles.container}>
      <MainHeader title="Search"/>
      <ScrollView showsVerticalScrollIndicator={false}>
      <SearchInput/>
      {/* <Tabs items={tabs} /> */}
      <SearchContent data={getData}/>
      <TouchableOpacity>
      </TouchableOpacity>
      </ScrollView>
      {
        image ?
        (
          <View style={{
            position: 'absolute',
            zIndex: 1,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(52,52,52,0.8)',
          }}>
            <StatusBar backgroundColor="#525252" barStyle="dark-content"/>
            <View  style={{
              position: 'absolute',
              top: windoeHeight / 6,
              left: windowWidth / 18,
              backgroundColor: 'white',
              width: '90%',
              height: 465,
              borderRadius: 15,
              zIndex: 1,
              elevation: 50,
            }}>
              <View 
                style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 15,
              }}>
                <Image  
                  source={image}
                  style={{
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                }}/>
                <View style={{paddingLeft: 8}}>
                  <Text style={{fontSize: 12, fontWeight: '600'}}>
                    Alumina_Jewelry
                  </Text>
                </View>
              </View>
              <Image source={image} style={{width: '100%', height: '80%'}} />
              <View
              style={{
                justifyContent: 'space-around',
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 8,
              }}>
             
              <Text style={{fontSize: 18}}>399.99$</Text>
              </View>
            </View>
          </View>
        ): null
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightPink,  
  },
})

export default SearchScreenDetails;
