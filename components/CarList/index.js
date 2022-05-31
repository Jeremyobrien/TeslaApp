import React from 'react';
import { View, Dimensions, FlatList } from 'react-native';
import CarItem from '../CarItem';
import styles from './styles';
import cars from './cars';

const CarList = () => {

    return (
        <View style={ styles.container }>
            <FlatList 
                data={cars}
                renderItem={ ({item}) => <CarItem car={item} />}
                showsVerticalScrollIndicator={ false }
                snapToAlignment={'start'}
                declerationRate={'fast'}
                snapToInterval={ Dimensions.get('window').height }
            />
        </View>
    );
};

export default CarList;