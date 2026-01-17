import 'react-native-gesture-handler';
import { Suspense, useEffect } from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '@src/redux';
import { RXStore } from '@src/shared/hooks';
import { AppContainer } from '@src/navigation';
import "@src/translations/i18n"
import AsyncStorage from '@react-native-async-storage/async-storage';

function App() {

  // useEffect(() => {
  //   AsyncStorage.clear();
  // },[])
  return (
    <SafeAreaProvider>
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
          <Suspense fallback={null}>
            <AppContainer/>
            <RXStore />
          </Suspense>
         </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}



export default App;
