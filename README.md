# React Native Skeleton Loading
Skeleton loaders gives the user a perception that loading has taken a shorter period.

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

