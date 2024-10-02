import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.outerBox}>
        <View style={styles.leftBox}>
          <View style={styles.leftBoxTop}>
            <Text style={styles.leftBoxTopTextCompanyName}>Easter Egg Corporation</Text>
            <Text style={styles.leftBoxTopTextCompanyAdress}>Easter Street 7, 7119 Easttown, Denmark</Text>
          </View>
          <View style={styles.leftBoxBottom}>
            <Text style={styles.leftBoxBottomTextPersonName}>Mickey Nextmann</Text>
            <Text style={styles.leftBoxBottomTextPersonInfo}>Business Manager{'\n'}Phone: +45 29017734{'\n'}Mail: ks@easter.egg</Text>
          </View>
        </View>
        <View style={styles.rightBox}>
          <Image
            source={require('./assets/logo.png')}
            style={styles.logo}
            resizeMode='contain'
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    paddingTop: 40,
  },
  outerBox: {
    width: 300,
    height: 170,
    borderWidth: 2,
    borderColor: "#4d4d4d",
    flexDirection: "row",
  },
  leftBox: {
    flex: 7,
    backgroundColor: "blue",
    flexDirection: "column",
  },
  leftBoxTop: {
    flex: "5",
    backgroundColor: "purple",
    paddingLeft: 18,
    justifyContent: 'center',
  },
  leftBoxBottom: {
    flex: "5",
    backgroundColor: "yellow",
    paddingLeft: 18,
    justifyContent: 'center',
  },
  rightBox: {
    flex: "3",
    backgroundColor: "green",
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Text styles
  leftBoxTopTextCompanyName: {
    color: 'yellow',
    fontWeight: 700,
    fontSize: 16,
  },
  leftBoxTopTextCompanyAdress: {
    fontSize: 9,
    color: 'white'
  },
  leftBoxBottomTextPersonName: {
    color: 'purple',
    fontWeight: 700,
    fontSize: 16,
  },
  leftBoxBottomTextPersonInfo: {
    fontSize: 10,
    fontWeight: 600,
  },
  logo: {
    width: 150,
    height: 150,
    marginRight: 24,
  }
});