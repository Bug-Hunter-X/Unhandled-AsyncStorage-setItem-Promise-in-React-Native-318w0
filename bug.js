This React Native code snippet demonstrates a common error when using AsyncStorage: not handling the promise returned by AsyncStorage.setItem().  This can lead to unexpected behavior or crashes if the next line of code executes before the data is actually stored.

```javascript
// Incorrect usage
AsyncStorage.setItem('myKey', 'myValue')
console.log('Item stored'); // This might execute before the item is actually stored
```