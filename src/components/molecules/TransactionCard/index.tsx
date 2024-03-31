import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const TransactionCard = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => {
  return (
    <View>
      <View style={styles.trans}>
        <Text style={styles.tgl}>17 April 2020</Text>
        <Text style={styles.ket}>Water, Food</Text>
        <Text style={styles.harga}>-Rp. 300.000</Text>
      </View>
      <View style={styles.trans1}>
        <Text style={styles.tgl}>18 April 2020</Text>
        <Text style={styles.ket}>Office supplies</Text>
        <Text style={styles.harga}>-Rp. 300.000</Text>
      </View>
      <View style={styles.trans2}>
        <Text style={styles.tgl}>19 April 2020</Text>
        <Text style={styles.ket}>Top Up</Text>
        <Text style={styles.harga1}>+Rp. 300.000</Text>
      </View>
    </View>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  trans: {
    flex: 1,
    alignContent: 'center',
    height: 69,
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    //borderColor: '#000000',
    paddingLeft: 20,
  },
  trans1: {
    flex: 1,
    alignContent: 'center',
    height: 69,
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000000',
    paddingLeft: 20,
    marginTop: 10,
  },
  trans2: {
    flex: 1,
    alignContent: 'center',
    height: 69,
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000000',
    paddingLeft: 20,
    marginTop: 10,
  },
  tgl: {
    color: '#8D92A3',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    marginTop: 11,
  },
  ket: {
    color: '#020202',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    marginTop: 5,
  },
  harga: {
    color: '#D9435E',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    position: 'absolute',
    right: 8,
    top: 24,
  },
  harga1: {
    color: '#1ABC9C',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    position: 'absolute',
    right: 8,
    top: 24,
  },
  //   label: {
  //     fontFamily: 'Poppins-Regular',
  //     fontSize: 16,
  //     color: '#020202',
  //   },
  //   input: {
  //     fontFamily: 'Poppins-Regular',
  //     fontSize: 14,
  //     color: '#8D92A3',
  //     borderWidth: 1,
  //     borderColor: '#020202',
  //     borderRadius: 8,
  //     padding: 10,
  //   },
});
