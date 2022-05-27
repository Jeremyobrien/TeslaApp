import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';

const CarItem = (props) => {
    return (
        <View>
             <View style={styles.carContainer}>
                <ImageBackground source={require('../../assets/images/ModelS.jpeg')}
                style={styles.image} />
                <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subTitle}>Starting at $69,430</Text>
                </View>
            </View>
        </View>
    );
};

export default CarItem;