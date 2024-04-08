import { useNavigation } from '@react-navigation/native';

const useScreenChangeListener = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('state', () => {
      const currentRoute = navigation.getCurrentRoute();
      const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false });
      console.log(`[${timestamp}] Current Screen:- ${currentRoute.name}`);
    });
    return unsubscribe;
  }, [navigation]);
};

export default useScreenChangeListener;
