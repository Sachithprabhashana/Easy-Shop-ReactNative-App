import React,{useState, useEffect} from 'react'
import { View,StyleSheet,ActivityIndicator,FlatList} from 'react-native';
import { ProductList } from './ProductList';
import { NativeBaseProvider,Input} from 'native-base';
import { SearchedProducts } from './SearchedProducts';
import Icon from 'react-native-vector-icons/MaterialIcons';


const data = require('../../assets/data/products.json');


export const ProductContainer = () => {
    const [products,setProducts] = useState([]);
    const [productsFiltered,setProductsFiltered] = useState([])
    const [focus,setFocus] = useState();

    useEffect(()=>{
        setProducts(data);
        setProductsFiltered(data)
        setFocus(false);
        return () => {
            setProducts([]);
            setProductsFiltered({});
            setFocus();
        }
    }, [])

    const searchProduct = (text)=> {
        setProductsFiltered(
            products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
        )
    }
    const openList = ()=> {
        setFocus(true)
    }
    
    const onBlur = ()=> {
        setFocus(false)
    }
    


  return (   
    <NativeBaseProvider>    
                
   <View>
    <View style ={styles.search}>
    {/* <Icon name="search" color={'#000'}/> */}
    <Input 
    variant="rounded" 
    placeholder="Search"
    onFocus={openList}  
    onChangeText={(text)=> searchProduct(text)}
    />
    </View>
 
    {focus === true ? (
        <SearchedProducts productsFiltered={productsFiltered} />
    ):(
        <View style={styles.flatlistContainer}>
        {/* <FlatList 
        horizontal
        data={products} 
        renderItem={({item}) =><Text> {item.brand}</Text>}
        keyExtractor={item => item.name}
        /> */}

        <FlatList 
        data={products} 
        numColumns={2}
        renderItem={({item}) =><ProductList key={item.id} item={item}/>}
        keyExtractor={item => item.brand}
        />
        </View>
        
    )} 
      

    </View>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
    flatlistContainer:{
        // marginTop:100,
        paddingBottom: 75,

    },
    search: {
        paddingBottom: 10,
    }
})