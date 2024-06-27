// import React from "react";
// import { View, Text, Image } from "react-native-animatable";
// import { colors } from "../../constants/theme";
// import { TouchableOpacity } from "react-native-gesture-handler";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
// import Entypo from "react-native-vector-icons/Entypo";

// const DetailsJewelry = ({ route, navigation }) => {
//   const { name, price, image, size, weight, color, description } = route.params;
//   return (
//     <View
//       style={{
//         width: "100%",
//         height: "100%",
//         backgroundColor: colors.white,
//         position: "relative",
//       }}
//     >
//       <View
//         style={{
//           padding: 20,
//           flexDirection: "row",
//           justifyContent: "space-between",
//           alignItems: "center",
//           position: "relative",
//         }}>
//         <TouchableOpacity
//         onPress={()=> navigation.goBack()}
//           style={{
//             width: 40,
//             height: 40,
//             borderRadius: 10,
//             borderWidth: 1,
//             borderColor: colors.lightGray,
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <FontAwesome
//             name="angle-left"
//             style={{
//               fontSize: 16,
//               color: colors.black,
//             }}
//           />
//         </TouchableOpacity>
//         <View
//           style={{
//             width: 40,
//             height: 40,
//             borderRadius: 10,
//             backgroundColor: colors.accent,
//             opacity: description ? 1 : 0.5,
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Entypo name="star" style={{ fontSize: 15, color: colors.white }} />
//         </View>
//       </View>
//       <Text
//         style={{
//           fontSize: 38,
//           color: colors.black,
//           fontWeight: "800",
//           paddingHorizontal: 20,
//           maxWidth: 310,
//         }}
//       >
//         {name}
//       </Text>
//       <View
//         style={{
//           flexDirection: "row",
//           alignItems: "center",
//           paddingHorizontal: 20,
//         }}
//       >
//         <Text
//           style={{
//             fontSize: 38,
//             color: colors.accentRed,
//             fontWeight: "900",
//           }}
//         >
//           {price}
//         </Text>
//         <View
//           style={{
//             flexDirection: "row",
//             maxHeight: 300,
//             width: "100%",
//             alignItems: "center",
//           }}
//         >
//           <View style={{ paddingHorizontal: 20 }}>
//             <View style={{ paddingVertical: 20 }}>
//               <Text
//                 style={{
//                   fontSize: 12,
//                   color: colors.black,
//                   opacity: 0.5,
//                 }}
//               >
//                 Size
//               </Text>
//               <Text
//                 style={{
//                   fontSize: 18,
//                   color: colors.black,
//                   fontWeight: "600",
//                 }}
//               >
//                 {size}
//               </Text>
//             </View>
//             <View style={{ paddingVertical: 20 }}>
//               <Text
//                 style={{
//                   fontSize: 12,
//                   color: colors.black,
//                   opacity: 0.5,
//                 }}
//               >
//                 Weight
//               </Text>
//               <Text
//                 style={{
//                   fontSize: 18,
//                   color: colors.black,
//                   fontWeight: "600",
//                 }}
//               >
//                 {weight}
//               </Text>
//             </View>
//             <View style={{ paddingVertical: 20 }}>
//               <Text
//                 style={{
//                   fontSize: 12,
//                   color: colors.black,
//                   opacity: 0.5,
//                 }}
//               >
//                 Color
//               </Text>
//               <Text
//                 style={{
//                   fontSize: 18,
//                   color: colors.black,
//                   fontWeight: "600",
//                 }}
//               >
//                 {color}
//               </Text>
//             </View>
//           </View>
//           <View
//             style={{
//               width: 360,
//               height: 360,
//             }}
//           >
//             <Image
//               source={image}
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 resizeModel: "contain",
//               }}
//             />
//           </View>
//         </View>
//         <Text style={{
//             paddingTop: 20,
//             paddingHorizontal: 20,
//             fontSize:20,
//             fontWeight: "700",
//             color: colors.black,
//         }}>
//         More Jewelry
//         </Text>
//         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
//             {
//                 description.map((data,index)=>{
//                     return (
//                         <View key={index}
//                         style={{
//                             margin: 12,
//                             width: 80,
//                             height: 80,
//                             borderRadius: 20,
//                             backgroundColor:colors.white,
//                             elevation: 5,
//                         }}>
//                             <Image 
//                             source={data} 
//                             style={{
//                                 width: "100%",
//                                 height: "100%",
//                                 resizeModel: 'contain'
//                             }}
//                             />
//                         </View>
//                     )
//                 })
//             }
//         </ScrollView>
//         <View style={{
//             position:'absolute',
//             width:'100%',
//             bottom: 0,
//             justifyContent: 'center',
//             alignItems:'center',
//         }}>
//             <TouchableOpacity 
//             onPress={()=> navigation.goBack()}
//             style={{
//                 width: "90%",
//                 height: 80,
//                 backgroundColor:colors.accent,
//                 borderTopRightRadius: 20,
//                 borderTopLeftRadius: 20,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 flexDirection: 'row',
//             }}>
//                 <Text style={{
//                     fontSize: 16,
//                     fontWeight: 'bold',
//                     color: colors.black,
//                     letterSpacing:1,
//                     marginRight:10,
//                 }}>
//                     Place on order
//                 </Text>
//                 <Entypo name="chevron-right" style={{
//                     fontSize:16,
//                     color:colors.black
//                 }}/>
//             </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default DetailsJewelry;

