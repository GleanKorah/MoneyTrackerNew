import React from 'react';
import {ScrollView, StyleSheet, View, Text, Image} from 'react-native';
import {Button, Gap, PageHeader, TextInput} from '../../components';

const Home = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      {/* <PageHeader label="Money Tracker" backButton={false} /> */}
      <View style={styles.head}>
        <Text style={styles.title}>Money Tracker</Text>
        <Text style={styles.subtitle}>Track your money</Text>
        <Gap height={24} />
      </View>
      <Image style={styles.avatar} source={{uri: 'your-avatar-image-url'}} />
      <Gap height={20} />
      <View style={styles.contentWrapper}>
        <Text style={styles.balance}>Your Balance</Text>
        <Gap height={4} />
        <Text style={styles.uang}>Rp. 10.000.000</Text>
        <View style={styles.garis} />
        <View style={styles.cash}>
          <Text style={styles.hand}>Cash on Hand</Text>
          <Text style={styles.uang2}>Rp. 4.000.000</Text>
        </View>

        <View style={styles.cash}>
          <Text style={styles.hand}>Cash on Bank</Text>
          <Text style={styles.uang2}>Rp. 6.000.000</Text>
          <Gap height={40} />
        </View>
      </View>
      <Gap height={20} />
      <View style={styles.transaksi}>
        <Text style={styles.add}>Add Transaction</Text>
        <Gap height={8.81} />
        <Button
          label="Cash on Hand"
          onPress={() => navigation.navigate('CashonHand')}
        />
        <Gap height={12} />
        <Button
          label="Cash on Bank"
          onPress={() => navigation.navigate('CashonBank')}
        />
        <Gap height={71.27} />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
  },

  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    marginTop: 30,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  avatar: {
    top: 32,
    right: 24,
    position: 'absolute',
    height: 50,
    width: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#C4C4C4',
  },
  contentWrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
  balance: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    top: 13,
  },
  uang: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    color: '#000000',
    marginTop: 4,
    textAlign: 'center',
  },
  garis: {
    borderBottomWidth: 1,
    color: '#000000',
    marginTop: 18,
  },
  cash: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  hand: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#000000',
    marginTop: 20,
  },
  uang2: {
    color: '#000000',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    marginTop: 20,
    marginLeft: 140,
    // textAlign: 'center',
    position: 'absolute',
  },
  transaksi: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
  add: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    marginTop: 10.6,
  },
});
