import { StyleSheet, Text, View } from 'react-native';

export default function Favorites() {
  return (
      <View style={styles.container}>
        <Text style={styles.texto}>Todos os seus eventos</Text>
        <Text style={styles.texto}>favoritos</Text>
        <Text style={styles.texto}>estão aqui!</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  texto:{
    fontSize: 20,
    fontWeight: 'light',
    color: '#1D1F27'
  }
})
