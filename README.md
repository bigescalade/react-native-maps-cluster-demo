# react-native-maps-cluster-demo

## Get started

1. Clone this repository
2. Install dependencies

- Run the following commands in terminal from project root
  - `nvm use`
  - `npm install`

3. Create a .env file in project root and add your Google Maps API key (see .env.example)

## Run the application

### iOS

1.  Download [Xcode](https://itunes.apple.com/au/app/xcode/id497799835?mt=12 'Download Xcode')
2.  Open Xcode
    - Open project
    - kindynow_react_native/ios
    - kindynow.xcworkspace (NOT kindynow.xcodeproj)
    - Download simulator
3.  From project root run command `cd ios`
4.  From ios folder run command `pod install`
    - if you don't have the pod command, you can install Cocoapods by running `sudo gem install cocoapods` in your terminal.
5.  In project root `react-native run-ios`
    - command + D for dev tools

### Android

1.  Download [Android Studio](https://developer.android.com/studio/ 'Download Android Studio')

2.  Open Android Studio

    - Open an existing Android Studio project
    - kindynow_react_native/android

3.  Open AVD manager

    - create virtual device
    - select device
    - select system image
    - launch the emulator

4.  In project root `react-native run-android`

    - command + M for dev tools

### Android quirks

1. Device/emulator MUST have Google Apps package installed or the Map view will not work
2. At the time of writing, React Native must use version 8 JDK, anything higher is not supported and may not work. [You can download JDK 8 from here](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
