import { StyleSheet, Platform } from 'react-native';
import NavigationTabs from './navigation/NavigationTabs';



export default function App() {
  return (
  <NavigationTabs />
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
