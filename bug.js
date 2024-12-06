This bug occurs when using the Expo SDK's `Linking` API to handle deep links.  Sometimes, the `Linking.addEventListener` listener fails to trigger, preventing the app from handling incoming URLs. This often happens after the app is in the background for a period of time, and the OS might have terminated it for memory reasons.