import React, {useState} from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import {Assets} from '../../../common/assets';
import {styles} from './styles';

type IpSearchProps = {
  onSearch: (search: string) => void;
};

export const IpSearch = ({onSearch}: IpSearchProps) => {
  const [search, setSearchValue] = useState<string>('');

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.textInput}
        keyboardType="numeric"
        placeholder="Введіть IP адресу"
        onChangeText={setSearchValue}
      />

      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => onSearch(search)}>
        <Image source={Assets.search} style={styles.searchImage} />
      </TouchableOpacity>
    </View>
  );
};
