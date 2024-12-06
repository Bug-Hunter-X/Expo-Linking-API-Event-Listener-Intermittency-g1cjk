# Expo Linking API Event Listener Intermittency

This repository demonstrates a bug in the Expo `Linking` API where the event listener for incoming URLs fails to consistently fire, particularly after the app has been backgrounded for some time.  This can result in a failure to handle deep links effectively.  The solution provided addresses this issue by implementing a more robust approach that handles potential app termination and resumption.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run the app on a physical device or emulator.
4. Navigate away from the app to the background.
5. Wait for a few minutes.
6. Open a deep link that should trigger an action in the app (e.g., `myapp://example`).
7. Observe that the app may not correctly handle the deep link. This will be inconsistent, occurring sometimes, but not every time.

## Solution

The solution provided utilizes a combination of strategies to improve reliability, including adding a re-registration of the event listener upon app resume. 
