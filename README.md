This is a project to demonstrate simple Google places autocomplete search and displaying on map.

## Requirements

- Node 20.5.1 and above
- npm
- yarn
- react-native-cli
- XCode
- XCode command line tools
- Android Studio

## Getting Started

First, setup your React Native environment here https://reactnative.dev/docs/environment-setup

### Installing dependencies

Run these commands to install the dependencies

```bash
yarn install
npx react-native-asset
npx pod-install
```

### Adding the env file

Add the _.env_ file to project root

### Running the app

#### Android

```bash
yarn android
```

#### iOS

```bash
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

### Troubleshooting

If metro is not running by automatically you may need to run this command before running the app

```
yarn start
```
