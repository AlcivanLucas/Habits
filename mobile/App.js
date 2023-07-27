import './src/lib/dayjs'
import { useFonts } from 'expo-font';
import { StatusBar } from 'react-native';
import { Loading } from './src/components/Loading';
import {
  useFont,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts ({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  });

  if (!fontsLoaded) {
    return (
      <Loading/>
    )
  } // garante que a fonte carregue antes da aplicação abrir
  return (
    <>
      <Routes/>
      <StatusBar barStyle="light-content" backgroundColor= "transparent" translucent/>
    </>
  );
}



