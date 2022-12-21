import { View ,StyleSheet} from 'react-native';
import React from 'react';
import {Content,Left,Body,ListItem,Thumbnail,Text} from 'native-base';

export const SearchedProducts = (props) => {
  const {productsFiltered} = props;
  return (
    <Content>
      {productsFiltered.length > 0 ? (
        productsFiltered.map((item) => (
          <ListItem
          key={item._id}
          avatar
          >
            <Left>
              <Thumbnail source= {{uri: item.image ? item.image : 'https://www.pngitem.com/pimgs/m/357-3575530_wooden-sofa-set-catalogue-png-download-wooden-furniture.png'
              }}/>
            </Left>
            <Body>
              <Text>{item.name}</Text>
              <Text note>{item.description}</Text>
            </Body>

          </ListItem>
        ))
      ): (
        <View style= {styles.center}>
          <Text style={{alignSelf: 'center'}}>
            No product match the selected criteria
          </Text>
        </View>
      )}

    </Content>
  )
}

const styles = StyleSheet.create({

  center: {
    justifyContet: 'center',
    alignItem: 'center'
  }
})