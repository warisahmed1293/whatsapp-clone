import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import StatusPage from './Component/StatusPage';

export default function App() {
  
  return (
    <>
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={{ color: '#7d9eb0', marginLeft: 20, fontWeight: '600', fontSize: 24 }}>Whatsapp</Text>
          <View style={styles.navItem}>
            <Image source={require('./assets/camera.png')} style={styles.camera} />
            <Image source={require('./assets/search.png')} style={styles.search} />
            <Image source={require('./assets/dots.png')} style={styles.dots} />
          </View>
        </View>
        <View style={styles.navBottomItem}>
          <Text style={{ color: '#7d9eb0', fontWeight: '500', fontSize: 15 }}>Chats</Text>
          <Text style={{ color: '#7d9eb0', fontWeight: '500', fontSize: 15 }}>Status</Text>
          <Text style={{ color: '#7d9eb0', fontWeight: '500', fontSize: 15 }}>Calls</Text>
        </View>
      </View>
      <StatusPage />
      <StatusBar />
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111B21',
  },
  navBar: {
    backgroundColor: '#222E35',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'white',
    paddingTop: 45,
    paddingBottom: 35,
  },
  navItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    color: 'white',
    width: 100,
    marginRight: 20
  },
  navBottomItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: "100%",
    backgroundColor: '#222E35',
    paddingBottom: 10,
    paddingTopTop: 30,
  },
  camera:{
    width:25,
    height:25,
  },
  search:{
    width:17,
    height:17,
  },
  dots:{
    width:17,
    height:17,
  }

});
