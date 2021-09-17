import React,{useState} from 'react';
import {View, StyleSheet,Image,Text,ScrollView,Modal,Button,TouchableHighlight} from 'react-native';
const App = () =>{
  const [modalVisibleMontaña,setModalVisibleMontaña]=useState(false);
  const [modalVisiblePupusas,setModalVisiblePupusas]=useState(false);
  const [modalVisibleRuinas,setModalVisibleRuinas]=useState(false);
return(
<>

<ScrollView >
<Modal transparent={true} animationType="slide" visible={modalVisibleMontaña} onRequestClose={()=> {
  alert('Modal has been closed');
}}>

<View style={styles.vistaModal}>
<View style={styles.Modal}>
<Text style={styles.subtitulo}>Ir a la montaña</Text>
<Text>El salvador cuenta con hermosas montañas a nivel Centroamérica.</Text>
<Button title="cerrar" onPress={()=>{setModalVisibleMontaña(!modalVisibleMontaña)}}></Button>
</View>
</View>
</Modal>

<Modal transparent={true} animationType="slide" visible={modalVisiblePupusas} onRequestClose={()=> {
  alert('Modal has been closed');
}}>

<View style={styles.vistaModal}>
<View style={styles.Modal}>
<Text style={styles.subtitulo}>Comprar pupusas</Text>
<Text>El salvador cuenta con variedad de comida típica, su plato típico principal son las pupusas.</Text>
<Button title="cerrar" onPress={()=>{setModalVisiblePupusas(!modalVisiblePupusas)}}></Button>
</View>
</View>
</Modal>


<Modal transparent={true} animationType="slide" visible={modalVisibleRuinas} onRequestClose={()=> {
  alert('Modal has been closed');
}}>

<View style={styles.vistaModal}>
<View style={styles.Modal}>
<Text style={styles.subtitulo}>Ir a ruinas</Text>
<Text>El salvador cuenta con distintas ruinas, entre las más destacadas encontramos la ruina el tazumal.</Text>
<Button title="cerrar" onPress={()=>{setModalVisibleRuinas(!modalVisibleRuinas)}}></Button>
</View>
</View>
</Modal>


<View style={{flexDirection:'row'}} >
<Image
style={styles.banner}
source={require('./src/img/bg.jpeg')} />
</View>


<View style={styles.contenedor}>
<Text style={styles.titulo}>Que hacer en El Salvador</Text>
<ScrollView horizontal>
<View>
<TouchableHighlight onPress={()=>{setModalVisibleMontaña(!modalVisibleMontaña)}}>
<Image style={styles.ciudad} source={require('./src/img/actividad1.jpg')} />
</TouchableHighlight>
</View>
<View>
<Image style={styles.ciudad} source={require('./src/img/actividad2.jpg')} />
</View>
<View>
<Image style={styles.ciudad} source={require('./src/img/actividad3.jpg')} />
</View>
<View>
<Image style={styles.ciudad} source={require('./src/img/actividad4.jpg')} />
</View>
<View>
<Image style={styles.ciudad} source={require('./src/img/actividad5.jpg')} />
</View>
</ScrollView>
</View>


<Text style={styles.titulo}>Platillos Salvadoreños </Text>
<View>
<Image style={styles.mejores} source={require('./src/img/mejores1.jpg')} />
</View>
<View>
<Image style={styles.mejores} source={require('./src/img/mejores2.jpg')} />
</View>
<View>
<TouchableHighlight onPress={()=>{setModalVisiblePupusas(!modalVisiblePupusas)}}>
<Image style={styles.mejores} source={require('./src/img/mejores3.jpg')} />
</TouchableHighlight>
</View>


<Text style={styles.titulo}>Rutas turisticas </Text>
<View style={styles.listado}>
<View style={styles.listaItem}>
<Image style={styles.mejores} source={require('./src/img/ruta1.png')} />
</View>
<View style={styles.listaItem}>
<TouchableHighlight onPress={()=>{setModalVisibleRuinas(!modalVisibleRuinas)}}>
<Image style={styles.mejores} source={require('./src/img/ruta2.jpg')} />
</TouchableHighlight>
</View>
<View style={styles.listaItem}>
<Image style={styles.mejores} source={require('./src/img/ruta3.jpg')} />
</View>
<View style={styles.listaItem}>
<Image style={styles.mejores} source={require('./src/img/ruta4.jpg')} />
</View>
</View>
</ScrollView >

</>
);
};
const styles = StyleSheet.create({
banner:{
height:250,
flex:1
},
titulo:{
  fontWeight:'bold',
  fontSize:24,
  marginVertical:10
},
contenedor:{
  marginHorizontal:10,
},
ciudad:{
  width:250,
  height:300,
  marginRight:10
},
mejores:{
  width:'100%',
  height:200,
  marginVertical:5
},
listaItem:{
  flexBasis:'49%',
},
listado:{
  flexDirection:'row',
  flexWrap:'wrap',
  justifyContent:'space-between'
},
vistaModal:{
backgroundColor:'#000000aa',flex:1
},
Modal:{
backgroundColor:'#fff',margin:50,padding:40,borderRadius:10,flex
:1
},
subtitulo:{
fontWeight:'bold',
fontSize:14,
justifyContent:'center'
},
});
export default App;
