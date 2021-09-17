import React,{useState} from 'react';
import {View, StyleSheet,Image,Text,ScrollView,Modal,Button,TouchableHighlight} from 'react-native';
const App = () =>{
  const [modalVisibleHabitacion1,setModalVisibleHabitacion1]=useState(false);
  const [modalVisibleactividad,setModalVisibleActividad]=useState(false);
  const [modalVisibleParque,setModalVisibleParque]=useState(false);
return(
<>

<ScrollView >
<Modal transparent={true} animationType="slide" visible={modalVisibleHabitacion1} onRequestClose={()=> {
  alert('Modal has been closed');
}}>

<View style={styles.vistaModal}>
<View style={styles.Modal}>
<Text style={styles.subtitulo}>Habitación individual</Text>
<Text>Nuestro hotel cuenta con habitaciones individuales a bajos costos.</Text>
<Button title="cerrar" onPress={()=>{setModalVisibleHabitacion1(!modalVisibleHabitacion1)}}></Button>
</View>
</View>
</Modal>

<Modal transparent={true} animationType="slide" visible={modalVisibleactividad} onRequestClose={()=> {
  alert('Modal has been closed');
}}>

<View style={styles.vistaModal}>
<View style={styles.Modal}>
<Text style={styles.subtitulo}>Disfruta con nosotros</Text>
<Text>Nuestro hotel cuenta con distintas actividades como pista de baile y karaoke para que lo disfrutes al máximo!!.</Text>
<Button title="cerrar" onPress={()=>{setModalVisibleActividad(!modalVisibleactividad)}}></Button>
</View>
</View>
</Modal>


<Modal transparent={true} animationType="slide" visible={modalVisibleParque} onRequestClose={()=> {
  alert('Modal has been closed');
}}>

<View style={styles.vistaModal}>
<View style={styles.Modal}>
<Text style={styles.subtitulo}>Parque ecológico</Text>
<Text>A pocos kilometros de nuestro hotel podrá encontrar el parque ecológico para darle un respiro a la vida.</Text>
<Button title="cerrar" onPress={()=>{setModalVisibleParque(!modalVisibleParque)}}></Button>
</View>
</View>
</Modal>


<View style={{flexDirection:'row'}} >
<Image
style={styles.banner}
source={require('./src/img/bg.jpg')} />
</View>


<View style={styles.contenedor}>
<Text style={styles.titulo}>Tipo de habitaciones</Text>
<ScrollView horizontal>
<View>
<TouchableHighlight onPress={()=>{setModalVisibleHabitacion1(!modalVisibleHabitacion1)}}>
<Image style={styles.habitacion} source={require('./src/img/Habitacion1.jpg')} />
</TouchableHighlight>
</View>
<View>
<Image style={styles.habitacion} source={require('./src/img/habitacion2.jpg')} />
</View>
<View>
<Image style={styles.habitacion} source={require('./src/img/habitacion3.jpg')} />
</View>
<View>
<Image style={styles.habitacion} source={require('./src/img/Habitacion4.jpg')} />
</View>
<View>
<Image style={styles.habitacion} source={require('./src/img/Habitacion5.jpg')} />
</View>
</ScrollView>
</View>


<Text style={styles.titulo}>Servicios</Text>
<View>
<Image style={styles.act} source={require('./src/img/actividad1.jpg')} />
</View>
<View>
<Image style={styles.act} source={require('./src/img/actividad2.jpg')} />
</View>
<View>
<TouchableHighlight onPress={()=>{setModalVisibleActividad(!modalVisibleactividad)}}>
<Image style={styles.act} source={require('./src/img/actividad3.jpg')} />
</TouchableHighlight>
</View>


<Text style={styles.titulo}>Lugares de interés </Text>
<View style={styles.listado}>
<View style={styles.listaItem}>
<Image style={styles.act} source={require('./src/img/lugar1.jpg')} />
</View>
<View style={styles.listaItem}>
<TouchableHighlight onPress={()=>{setModalVisibleParque(!modalVisibleParque)}}>
<Image style={styles.act} source={require('./src/img/lugar2.jpg')} />
</TouchableHighlight>
</View>
<View style={styles.listaItem}>
<Image style={styles.act} source={require('./src/img/lugar3.jpg')} />
</View>
<View style={styles.listaItem}>
<Image style={styles.act} source={require('./src/img/lugar4.jpg')} />
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
habitacion:{
  width:250,
  height:300,
  marginRight:10
},
act:{
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
