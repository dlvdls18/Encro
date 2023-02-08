# Encro
Encro is a string compressor for Vanilla JavaScript that uses Cantor Pairing Function.

```js
Encro.compress("Hello World");
// [15502, 23980, 10618, 20212, 25309, 5151]

Encro.decompress([15502, 23980, 6328]);
// "Hello World"
```

# Installation
```html
<script src="https://cdn.jsdelivr.net/gh/dlvdls18/Encro@main/src/encro.js"></script>
```

# Functions
## Compression
```js
Encro.compress("Hello World");
```

**NOTE** The given argument must be a string

## Decompress
```js
Encro.decompress([15502, 23980, 10618, 20212, 25309, 5151]);
```

**NOTE** The given argument must be anarray

## Pair
```js
//          a   b
Encro.pair([10, 11]);
// 340
```

**NOTE** The given argument must be an array

## Unpair
```js
Encro.pair(340);
// [10, 11]
//  a   b
```

**NOTE** The given argument must be a number
