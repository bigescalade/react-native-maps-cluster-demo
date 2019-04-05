# Title & Description

## react-native-maps-cluster-demo

A simple application that utilises clustering of map pins, as well as render a native view that was written in Java or objective-c.

# Table of Contents

1. [Environments](#environments)
2. [System Dependencies & Configuration](#system-dependencies-&-configuration)
3. [Application Installation Instructions](#application-installation-instructions)
4. [Operating Instructions](#operating-instructions)
5. [Testing Instructions](#testing-instructions)
6. [Overview](#overview)
7. [Discussion](#discussion)
8. [License](#license)
9. [Contributing](#contributing)

# Environments

- iOS < 10
- Android < 6

# System Dependencies & Configuration

1. Clone this repository
2. Install dependencies

- Run the following commands in terminal from project root
  - `nvm use`
  - `npm install`

3. Create a .env file in project root and add your Google Maps API key (see .env.example)

# Application Installation Instructions

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

### iOS quirks

1. If you receive the error `'GeneratedDotEnv.m' file not found` remove the following line from the Podfile `pod 'react-native-config', :path => '../node_modules/react-native-config'`

### Android

1.  Download [Android Studio](https://developer.android.com/studio/ 'Download Android Studio')

2.  Open Android Studio

    - Open an existing Android Studio project
    - kindynow_react_native/android

3.  Open AVD manager

    - create virtual device
    - select device
    - select system image

### Android quirks

1. Device/emulator MUST have Google Apps package installed or the Map view will not work
2. At the time of writing, React Native must use version 8 JDK, anything higher is not supported and may not work. [You can download JDK 8 from here](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
3. If you receive the error (or similar) `Unable to resolve dependency for ':react-native-maps@debug/compileClasspath': Could not resolve com.android.support:support-compat:25.2.0.` while building Android, add the following to react-native-maps build.gradle file `implementation "com.android.support:appcompat-v7:${rootProject.ext.supportLibVersion}"`

# Operating Instructions

### iOS

In project root `react-native run-ios`

- command + D for dev tools

### Android

In project root `react-native run-android`

- command + M for dev tools

# Testing Instructions

No tests at this time

# Overview

This is an experimental project to test clustering of map pins as well as see how well the application performs clustering many pins.

Also testing the displaying of a native view from both iOS or Android written in their respective languages.

# Discussion

The clustering of pins, zooming in and out and pins clustering/declustering didn't work well at first using the Xcode simulator and Android Studio emulators. However, once built on a phone the performance was much better.

Displaying a native view from iOS or Android seems easy enough, this makes the transition to React Native easier.

# License

N/A

# Contributing

N/A
