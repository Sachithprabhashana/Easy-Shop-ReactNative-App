import React from 'react'
import { View,StyleSheet} from 'react-native';
import { ProductContainer } from './Screens/Products/ProductContainer';
import { Header } from './Shared/Header';


const App = () => {
  return (
    <View style={styles.container}>

      <Header />
      <ProductContainer />
    </View>
  )
}
export default App;

const styles = StyleSheet.create({
container:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor: '#fff'
},

})