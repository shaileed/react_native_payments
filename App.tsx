/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  useColorScheme,
  View,
} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';



  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableHighlight style={{ backgroundColor: 'blue', width: "25%", height: "5%", justifyContent: 'center', borderRadius: 5 }} onPress={() => {
        var options = {
          description: 'Credits towards consultation',
          image: 'https://i.imgur.com/3g7nmJC.jpg',
          currency: 'INR',
          key: 'rzp_test_e9AuyUfW8B5CBH',
          amount: '5000',
          name: 'Payment gateway',
          order_id: 'order_NXU4CmqAotAtqm',//Replace this with an order_id created using Orders API.
          prefill: {
            email: 'pratiksha.inventam@gmail.com',
            contact: '8866565134',
            name: 'Pratiksha bhanderi'
          },
          theme: { color: '#53a20e' }
        }
        RazorpayCheckout.open(options).then((data) => {
          // handle success
          Alert.alert(`Success: ${data.razorpay_payment_id}`);
        }).catch((error) => {
          // handle failure
          Alert.alert(`Error: ${error.code} | ${error.description}`);
        });
      }}>
        <Text style={{ color: 'white', alignSelf: 'center' }}>Payment</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
