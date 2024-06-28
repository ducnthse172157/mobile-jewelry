import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import { colors } from '../../constants/theme';
import { PLACES } from '../../data';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

const SearchContent = (navigation) => {
  const [currentSelected, setCurrentSelected] = useState([0]);
  const searchData = [
    {
      id: 1,
      images: [
        require('../../../assets/hotels/ac-1.jpeg'),
        require('../../../assets/hotels/ac-2.jpeg'),
        require('../../../assets/hotels/cb-1.jpeg'),
        require('../../../assets/hotels/cb-2.jpeg'),
        require('../../../assets/hotels/cp-1.jpeg'),
        require('../../../assets/hotels/cp-2.jpeg'),
        require('../../../assets/images/3E71FC75-9EF2-4D06-A9C8-04AC4A1392E6-768x768.jpg'),
        require('../../../assets/images/3E71FC75-9EF2-4D06-A9C8-04AC4A1392E6-768x768.jpg'),
        require('../../../assets/images/3E71FC75-9EF2-4D06-A9C8-04AC4A1392E6-768x768.jpg'),
        require('../../../assets/images/3E71FC75-9EF2-4D06-A9C8-04AC4A1392E6-768x768.jpg'),
        require('../../../assets/images/3E71FC75-9EF2-4D06-A9C8-04AC4A1392E6-768x768.jpg'),
        require('../../../assets/images/3E71FC75-9EF2-4D06-A9C8-04AC4A1392E6-768x768.jpg'),
      ],
    },
  ];

   const renderCategories = ({item,index}) => {
    return(
      <TouchableOpacity 
        activeOpacity={0.9}
        onPress={()=> setCurrentSelected(index)}>
        <View style={{
          width: 120,
          height: 120,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor: currentSelected == index ? colors.accent : colors.white,
          borderRadius: 20,
          margin: 10,
          elevation: 5,
        }}>
          <View style={{width: 60, height: 60}}>
            <Image source={item.image} 
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'center', 
                }} 
            />
          </View>
          <Text style={{
            fontSize:16,
            color:colors.black,
            fontWeight: '600',
          }}>{item.name}
          </Text>
          <View style= {{
            width:30, 
            height:30,
            borderRadius: 100,
            backgroundColor: currentSelected == index ? colors.white : colors.accentRed,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <FontAwesome name="angle-right" style={{
              fontSize:12,
              color: currentSelected == index ? colors.black : colors.white,
            }}/>
          </View>

        </View>
      </TouchableOpacity>
    )
   } 
   const renderItems = (data, index) => {
    return(
      <TouchableOpacity 
      key={index} 
      activeOpacity={0.9}
      style={{
        width: '100%',
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={()=> navigation.navigate('detailsjewelry', {
        // name: data.name,
        // price: data.price,
        // image: data.image,
        // size: data.size,
        // weight: data.weight,
        // color: data.color,
        // description: data.description,
        // navigation: navigation,
      })}>
        <View style={{
          width:'90%',
          height:160,
          backgroundColor:colors.white,
          borderRadius:20,
          elevation:4,
          position:'relative',
          padding: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <View style={{marginBottom:50}}>
            <Text style={{
              fontSize:22,
              color:colors.black,
              fontWeight:'bold',
              paddingTop:10,
            }}>{data.name}</Text>
            <Text style={{
              fontSize:12,
              color:colors.black,
              opacity:0.5,
            }}>
              {data.weight}
            </Text>
          </View>
          <View style={{width:150, height: 150, marginRight:-45}}>
            <Image source={data.image}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}/>
          </View>
          <View style={{
            position: 'absolute',
            bottom: 0,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <View style={{
              width: 85,
              height: 50,
              backgroundColor: colors.accent,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Entypo 
              name="plus" 
              style={{
                fontSize: 18,
                color:colors.black}}
                />
            </View>
            <View style={{
              flexDirection:'row',
              alignItems: 'center',
              marginLeft:20,
            }}>
            <Entypo 
              name="star"
              style={{
                fontSize: 12,
                color:colors.black,
                paddingRight: 5}}
            />
            <Text 
            style={{
              fontSize:15,
              color:colors.black,
              fontWeight: 'bold',
              }}>
                {data.size}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
   } 

  return (
  <View>
       <Text
            style={{
              paddingTop: 20,
              paddingHorizontal: 20,
              fontSize: 18,
              fontWeight: '700',
              color: colors.black,
              letterSpacing: 1,
            }}>
            Categories
          </Text>
          <FlatList horizontal={true} data={PLACES} renderItem={renderCategories} showsHorizontalScrollIndicator={false}/>
          <Text style={{
            paddingTop: 20,
            paddingHorizontal: 20,
            fontSize: 18,
            fontWeight: '700',
            color: colors.black,
          }}>Popular
          </Text>
          {
            PLACES[currentSelected].items.map(renderItems)
          }
          <TouchableOpacity style={{
            margin:30,
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 0.5,
          }}>
            <Text style={{
              fontSize: 16,
              color:colors.black,
              borderBottomWidth: 1,
              borderBottomColor: colors.black,
            }}>
              Load more
            </Text>
          </TouchableOpacity>
    </View>  
  );
}

export default SearchContent;