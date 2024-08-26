import { View, Text, StyleSheet, TouchableOpacity,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function EventCards({ texto, info, iconName, }) {
  
  const IconComponent = Icon;

  return (
    <TouchableOpacity style={styles.card}>
      <View>
      <Text style={styles.texto}>{texto}</Text>
      <Text style={styles.subtitle}>{info}</Text>
      </View>
      {iconName ? (
        <IconComponent 
          name={iconName} 
          size={50}
          color="#1D1F27" 
          style={styles.icon}
        />
      ) : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card:{
    backgroundColor: 'white',
    padding: 40,
    borderRadius: '20px',
    margin:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 5,
    borderColor: '#0051FF'
    },
     texto: { 
      fontSize: 30
     }
});
