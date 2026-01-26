import 'react-native-gesture-handler';
import { Suspense } from 'react';
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
import { GlobalLoading } from '@src/shared/components';
import { globalLoadingRef } from '@src/shared/components/GlobalLoading';

function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
          <Suspense fallback={null}>
            <AppContainer/>
            <RXStore />
            <GlobalLoading ref={globalLoadingRef}/>
          </Suspense>
         </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}



export default App;
