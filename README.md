# Vue Google Places Autocomplete

<p align="center">
  <a href="https://npmcharts.com/compare/vue-google-places?minimal=true">
    <img src="http://img.shields.io/npm/dm/vue-google-places.svg">
  </a>
  <a href="https://www.npmjs.org/package/vue-google-places">
    <img src="https://img.shields.io/npm/v/vue-google-places.svg">
  </a>
  <a href="http://img.badgesize.io/https://unpkg.com/vue-google-places/dist/vue-google-places.js?compression=gzip&label=gzip%20size:%20JS">
    <img src="http://img.badgesize.io/https://unpkg.com/vue-google-places/dist/vue-google-places.esm.js?compression=gzip&label=gzip%20size:%20JS">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg">
  </a>
</p>

## Note that this is a fork from the original vue-google-places

The original can be found here: <https://github.com/yariksav/vue-google-places>

## Install

```js
import VueGooglePlaces from 'vue-google-places'
Vue.use(VueGooglePlaces)
```

This module will load all needed Google libraries automatically at first usage

## Use

```vue
  <VueGooglePlaces
    :api-key="apiKey"
    types="(cities)"
    country="ua"
    placeholder="Input your place"
    @placechanged="onPlaceChanged"
    @noresult="onNoResult"
  />
```

## Props

| name | type | default | description |
|------|------|---------|-------------|
|apiKey| String | - | Google api key |
|enableGeolocation| Boolean | false | component will ask user geolocation |
|enableGeocode| Boolean | false | conponent will automatically find user place by his geolocation. This depends of `enableGeolocation` property|
|version| String | - | version of google maps api|
|types|String, Array| - |Google places types [See google docs (Table 3)](https://developers.google.com/places/supported_types)

Available types:

- geocode
- address
- establishment
- (regions)
- (cities)

## Events

- `placechanged`: Place - when user has selected new place
- `input`: String - name of selected place
- `noresult`: Place - when place has changed but details was not found

## Slots

- `default` - in this slot you can put your own input component

## Other frameworks

This component implemented in such frameworks:

### Vuetify

```js
  import { VuetifyGooglePlaces } from 'vue-google-places'
```

```vue
  <VuetifyGooglePlaces
    :api-key="apiKey"
    types="(cities)"
    country="us"
    placeholder="Input your place"
    @placechanged="onPlaceChanged"
  />
```

> To implement this module in other frameworks - welcome to contribute! Please use VuetifyGooglePlaces as template

### Implementation with own input component

To use with own input component use default slot. VueGooglePlaces will automatically find html input element

```js
  import { VueGooglePlaces } from 'vue-google-places'
```

```vue
  <VueGooglePlaces
    :api-key="apiKey"
    class="subheading"
    :enable-geolocation="true"
    types="(cities)"
    country="us"
    @placechanged="getAddressData"
  >
    <MyInput
      icon="search"
      :value="value"
      :placeholder="$t('Your place')"
      ...
    />
  </VueGooglePlaces>
```
