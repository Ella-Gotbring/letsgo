import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
    return(
        <View style={styles.container}>
        <Text style={{marginBottom: '40px'}}>Projektarbete - Hybridutveckling</Text>
        
        <Button style={styles.button}
        title="Press here to enter name"
        onPress={() =>
          navigation.navigate("Async")
        }
      />
        </View>

    )

}


export default function App() {
    const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Async" getComponent={() => require("./src/Async").default} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
        ios: {backgroundColor: 'blue'},
        android: {backgroundColor: 'grey'},
        default: {backgroundColor: 'white'}
    })
  },
 
});
