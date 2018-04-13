## :cd: Installation

```sh
npm i vue-inputmasked
```

## Initialization

### ES2015 (Webpack/Rollup/Browserify/etc)

```javascript
import Vue from 'vue'

// As a plugin
import VueMask from 'vue-inputmasked'
Vue.use(VueMask);

// Or as a directive
import { VueMaskDirective } from 'vue-inputmasked'
Vue.directive('mask', VueMaskDirective);
```

## :rocket: Usage

```html
<input type="text" v-mask="'####-##'" v-model="myInputModel">
<!-- OR -->
<input type="text" v-mask="nameOfVariableWithMask" v-model="myInputModel">
```

## :gear: Configs

List of supported placeholders:

| Value | Format                       |
|-------|------------------------------|
| #     | Number (0-9)                 |
| A     | Letter in any case (a-z,A-Z) |
| N     | Number or letter             |
| X     | Any symbol                   |
| ?     | Optional (next character)    |

## :syringe: Tests

[Jest](https://github.com/facebook/jest) is used for unit-tests.

You can run tests by typing this command in your console:

```bash
npm test
```

## :anchor: Semantic Versioning Policy

This plugin follows [semantic versioning](http://semver.org/).

## :lock: License

See the [LICENSE](LICENSE) file for license rights and limitations (MIT).
