import React, { useState } from 'react';
import { TextInput, Button, View, Text } from 'react-native';
import axios from 'axios';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://www.google.com/search?q=${query}`);
      setResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Search"
        onChangeText={setQuery}
        value={query}
      />
      <Button title="Search" onPress={handleSearch} />
      {result && <Text>{result}</Text>}
    </View>
  );
};

export default SearchComponent;
