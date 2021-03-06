import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';

import Images from '../data/fetch-images';
import Colors from '../res/colors';

import pub from '../assets/images/pub.jpg';

import {Popup} from '../screens/Popup'
import { useNavigation } from '@react-navigation/core';
import { MapScreen  } from '../screens/MapScreen';
import { DetailsScreen } from '../screens/DetailsScreen'



export default function BusinessCard({id, name, description, category, phone, address,latitude,longitude,item}) {
  
  const navigation = useNavigation();

//   const popuplist = [
//     { 
//     id: 1,
//     name: "Categoria: "+category
//     },
//     { 
//     id: 2,
//     name: 'Direccion: '+address
//     },
//     { 
//     id: 3,
//     name: 'Teléfono: '+phone
//     },
//     // {id: 4,
//     // name: 'Email: '+email
//     // },
//     {id: 5,
//     name: 'Description: '+description
//     }
// ]

// let popupRef= React.createRef()

// const onShowPopup = () => {
//     popupRef.show()
// }

// const onClosePopup = () => {
//     popupRef.close()
// }
  const img = Images.filter(imagen => imagen.businessID === id)[0]
    ? Images.filter(imagen => imagen.businessID === id)[0].img
    : '';

  return (
    <>
      <Card style={styles.card}>
        <Card.Image style={styles.img} source={img} />
        <Card.Title style={styles.title}>{name}</Card.Title>
        <Text style={styles.categoryTxt}>{category}</Text>
        <Text style={styles.text}>{`${description.substring(0, 88)}...`}</Text>
        <Button buttonStyle={styles.button} title="Ver más" onPress={()=>navigation.navigate("DetailsScreen",{item,img})} />
        <View style = {styles.btnContainer}>
          {/* <Button buttonStyle={styles.button} title="Ver más" onPress={()=>console.log(img)} /> */}
          {/* <TouchableOpacity
                activeOpacity={0.9}
                onPress={()=>navigation.navigate("MapScreen",{latitude,longitude,name,address})}
                style={styles.buttonDir}
            >
                <Icon name="arrow-circle-right" type="font-awesome" color="white" />
          </TouchableOpacity> */}
          {/* <Button buttonStyle={styles.buttonDir} title="->" onPress={()=>navigation.navigate("MapScreen",{latitude,longitude,name,address})} /> */}
        </View>
      </Card>
      {/* <Popup
        title={name}
        ref={(target) => popupRef = target}
        onTouchOutside={onClosePopup}
        data={popuplist}
      /> */}
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
  },
  text: {
    marginBottom: 10,
  },
  categoryTxt: {
    color: Colors.primaryRed,
    marginBottom: 4,
    fontWeight: 'bold',
    fontSize: 18,
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
    marginTop: 8,
    marginBottom: 4,
  },
  button: {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    // width:"",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: Colors.primaryRed,
  },
  img: {
    padding: 0,
    margin: 0,
  },
  btnContainer:{
    justifyContent:'space-between',
    flexDirection:"row"
  },
  buttonDir:{
    width:45,
    height:45,
    borderRadius:100,
    backgroundColor:"#4287f5",
    justifyContent:'center',
    alignSelf:'center'
  }
});
