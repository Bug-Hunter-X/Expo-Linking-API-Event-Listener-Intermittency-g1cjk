/* bug.js */
import * as Linking from 'expo-linking';

Linking.addEventListener('url', (url) => {
  console.log('URL handled:', url);
  // Handle the URL here
});

/* bugSolution.js */
import * as Linking from 'expo-linking';
import { useEffect } from 'react';
import { AppState } from 'react-native';

function useDeepLinking() {
  useEffect(() => {
    const handleUrl = (event) => {
      console.log('URL handled:', event.url);
      // Handle the URL
    };
    const appStateListener = (state) => {
      if (state === 'active') {
        Linking.addEventListener('url', handleUrl);
      }
    };
    AppState.addEventListener('change', appStateListener);

    Linking.getInitialURL().then((url) => {
      if (url) {
        console.log('Initial URL:', url);
        // Handle initial URL
      }
    });

    return () => {
      Linking.removeEventListener('url', handleUrl);
      AppState.removeEventListener('change', appStateListener);
    };
  }, []);
}
export default useDeepLinking; 