
# **react-native-simple-radio-buttons**

React Native simple radio buttons is small size but brief and easy to use package. You can use with default properties and even you can fully customise with your requirements.



## Authors

- [Arif Yousaf (Mauk)](https://www.github.com/mauk7)


## Badges

[![Version](https://img.shields.io/badge/version-1.1.0-brightgreen)](https://www.npmjs.com/package/react-native-simple-radio-buttons)
[![Version](https://img.shields.io/badge/javascript-version-brightgreen)](https://www.npmjs.com/package/react-native-simple-radio-buttons)

## Installation

Install react-native-simple-radio-buttons with npm or yarn


```npm
npm i react-native-simple-radio-buttons
```
Or
   ```yarn
yarn add react-native-simple-radio-buttons
   ````

---

## **Props**

| Props             | type                                                               | description |
| ----------------- | ------------------------------------------------------------------ | ------------|
| items | [{}] | this array of objects will contain details for radio buttons, e.g. [{label: 'Male', 'male'},{label: 'female', 'female'}] |
| value |  string | this will be the selected radio button, if you want to show initially unselected all, then initialize will empty string etc
| setValue | useState | used to update the value |
| withLabels | boolean | show labels with radio button, e.g. true, to show labels|
| buttonOuterColor | color | default color is black, pass your required color|
| buttonOuterSize | integer | size for radio button outer, e.g. 30,35 |
| defaultButtonColor | color | unselected radio button color property, default color is black, if you described the buttonOuterColor, than this will be buttonOuterColor, else you can specify with your required color|
| buttonInnerColor | color | default color is black, pass your required color|
| buttonInnerSize | integer |size for radio button inner, e.g. 25,30 |
| radioFormStyle | ViewStyleProps | you can fully customize using radioFormStyle, e.g. flexDirection: 'row' see examples|
| radioButtonItemStyle | ViewStyleProps | custom style for each radio buttom item, e.g. each row or each column.|
| radioButtonLabelStyle | TextStyleProps | custome style for radio button labels, e.g. fontSize, color etc.|
| onPress | function | if you want to perform some extra task on each radio button select, you can define the onPress|


## Usage/Examples

```javascript
import RadioForm from 'react-native-simple-radio-buttons';

function App() {
  const [value, setValue] = useState("")
  const [items,setItems] = useState([
    {label: 'test1', value: 'test1'},
    ...,
    {label: 'test8', value: 'test8'}
  ])
  return (
    <RadioForm
      items={items} 
      value={value} 
      setValue={setValue}
      withLabels={true}
   />
   )
}
```


## Output

![App Screenshot](https://drive.google.com/file/d/1455liKffxUpfmgoOasrLDkBciyUPAVTR/view?usp=sharing)


## Usage/Examples

```javascript
import RadioForm from 'react-native-simple-radio-buttons';

function App() {
  const [value, setValue] = useState("")
  const [items,setItems] = useState([
    {label: 'test1', value: 'test1'},
    ...,
    {label: 'test8', value: 'test8'}
  ])
  return (
    <RadioForm
        items={items}
        value={value}
        setValue={setValue}
        withLabels={true}
        buttonOuterColor={'#008AD8'}
        defaultButtonColor={'#00000050'}
        buttonOuterSize={30}
        buttonInnerColor={'#008AD8'}
        buttonInnerSize={25}
        radioFormStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}
        radioButtonItemStyle={{
          backgroundColor: '#d3d3d3',
          width: 80,
          marginBottom: 10,
        }}
        radioButtonLabelStyle={{
          fontSize: 16,
          color: '#008AD8'
        }}
        onPress={() => {
          console.log("clicked!")
        }}
   />
   )
}
```
```javascript
 <RadioForm
        items={items}
        value={value}
        setValue={setValue}
        withLabels={true}
        buttonOuterColor={'#008AD8'}
        defaultButtonColor={'#00000050'}
        buttonOuterSize={30}
        buttonInnerColor={'#008AD8'}
        buttonInnerSize={25}
        radioFormStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}
        radioButtonItemStyle={{
          backgroundColor: '#d3d3d3',
          width: 80,
          marginBottom: 10,
          flexDirection: 'column'
        }}
        radioButtonLabelStyle={{
          fontSize: 16,
          color: '#008AD8'
        }}
        onPress={() => {
          console.log("clicked!")
        }}

      />
```

```javascript
  items={items}
        value={value}
        setValue={setValue}
        withLabels={true}
        buttonOuterColor={'#008AD8'}
        defaultButtonColor={'#00000050'}
        buttonOuterSize={30}
        buttonInnerColor={'#008AD8'}
        buttonInnerSize={25}
        radioFormStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}
        radioButtonItemStyle={{
          backgroundColor: '#d3d3d3',
          width: 190,
          marginBottom: 10,
        }}
        radioButtonLabelStyle={{
          fontSize: 16,
          color: '#008AD8'
        }}
        onPress={() => {
          console.log("clicked!")
        }}

      />
```


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Support

For support, follow me on LinkedIn [https://www.linkedin.com/in/arif-yousaf-mauk-19a548166/] or github.

