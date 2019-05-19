# React Native Skeleton Loading
Skeleton loaders give the user a perception that loading has taken a shorter period.

##  Installation
```
npm install react-native-skeleton-loading
```

## Basic Usage
After installation, import the package into react native components by

```
import SkeletonLoading from react-native-skeleton-loading;

<SkeletonLoading type="square" loading={loading}>
  <Image
    style={{width: 110, height: 110}}
    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
  />
</SkeletonLoading>
```
The view that should be shown once loaded is wrapped in the skeleton loader!

## Props
Props | Accepted Values | Required |Default
------------ | ------------- | -------------- | ----------------
type | square, rectangle, circle | true | -
loading | boolean | true |false
size | number | false | 100
height | number | false | 100
color | string | false | '#dfdfdf'
highlightColor | string | false| '#c8c8c8'
rows | number | false | 1
