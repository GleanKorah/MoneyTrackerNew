import React from 'react';
import {ScrollView, StyleSheet, View, Text, Image} from 'react-native';
import {
  Button,
  Gap,
  PageHeader,
  TextInput,
  TransactionCard,
} from '../../components';
import ImagePicker, {openPicker} from 'react-native-image-crop-picker';

const CashonHand = ({navigation}) => {
  const imagePick = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  return (
    <ScrollView style={styles.container}>
      <PageHeader
        label="Cash on Hand"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <Gap height={24} />
      <View style={styles.tabs}>
        <Gap height={20} />
        <TextInput label="Description" placeholder="Add the description" />
        <Gap height={17} />
        <TextInput label="Type" placeholder="Debit / Credit" />
        <Gap height={22} />
        <Button
          label="Save"
          //   onPress={() => navigation.navigate('CashonHand')}
        />
        <Gap height={52} />
      </View>
      <Gap height={24} />
      <View style={styles.trans}>
        <Gap height={16} />
        <Text style={styles.text}>Last 3 Transactions</Text>
        <Gap height={10} />
        <TransactionCard />
        <Gap height={35} />
      </View>
    </ScrollView>
  );
};

export default CashonHand;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabs: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
  trans: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#020202',
  },
});
