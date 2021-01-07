import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: '1', text: 'Milk'},
    {id: '2', text: 'Eggs'},
    {id: '3', text: 'Tomatoes'},
    {id: '4', text: 'Juice'},
    {id: '5', text: 'Butter'},
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'please enter an item', {
        text: 'ok',
      });
    } else {
      setItems((prevItems) => [{id: '7', text}, ...prevItems]);
    }
  };

  return (
    <View style={styles.container}>
      <Header title={'Shopping List'} />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

Header.defaultProps = {
  title: 'Shopping List',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
