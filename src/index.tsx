import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View,StyleProp } from 'react-native'
import { ViewStyle,TextStyle} from 'react-native/Libraries/StyleSheet/StyleSheet'

const RadioButton = (props) => {
  interface radioButtonProps {
    item : {
      value: string | number,
      label: string | number
    },
    index: number,
    value: string | number,
    setValue: (value: string | number) => {},
    withLabels?: boolean,
    buttonOuterSize?: number | string,
    buttonOuterColor?: string, 
    buttonInnerSize?: number | string,
    buttonInnerColor?: string,
    radioButtonItemStyle?: StyleProp<ViewStyle> | undefined,
    radioButtonLabelStyle?: StyleProp<TextStyle> | undefined,
    defaultButtonColor?: string,
    onPress?: () => {} | undefined
  }
  const { 
    item, 
    index,
    value, 
    setValue, 
    withLabels, 
    buttonOuterSize,
    buttonOuterColor, 
    buttonInnerSize,
    buttonInnerColor,
    radioButtonItemStyle,
    radioButtonLabelStyle,
    defaultButtonColor,
    onPress
  } : radioButtonProps = props
  const styles = StyleSheet.create({
    radioButtonItemStyleDefault: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    radioButtonOuter: {
      backgroundColor: buttonOuterColor ? buttonOuterColor :  '#000000',
      height: buttonOuterSize ? buttonOuterSize : 25,
      width: buttonOuterSize ? buttonOuterSize : 25,
      borderRadius: buttonOuterSize ? buttonOuterSize : 25,
      justifyContent: 'center',
      alignItems: 'center',
    
    },
    radioButtonInner: {
      backgroundColor: '#ffffff',
      borderWidth: 4,
      borderColor: '#ffffff',
      height: buttonInnerSize ? buttonInnerSize : 20,
      width: buttonInnerSize ? buttonInnerSize : 20,
      borderRadius: buttonInnerSize ? buttonInnerSize : 20,
      overflow: 'hidden'
    },
    radioButtonInnerSelected: {
      backgroundColor: buttonInnerColor ? buttonInnerColor :'#000000',
    },
    radioButtonItemText: {
      fontSize: 14,
      marginLeft: 5,
    },
  })
  const itemClickHandler = () => {
    onPress && onPress()
    item?.value == value ? setValue('') : setValue(item?.value)
  }
  return (
    <TouchableOpacity style={[styles.radioButtonItemStyleDefault,radioButtonItemStyle]} onPress={itemClickHandler} key={index}>
      <View style={[styles.radioButtonOuter,{backgroundColor: item?.value != value && defaultButtonColor ? defaultButtonColor : buttonOuterColor ? buttonOuterColor : '#000000'}]}>
        <View style={[styles.radioButtonInner, value == item?.value && styles.radioButtonInnerSelected]} />
      </View>
      {withLabels && <Text allowFontScaling={false} style={[styles.radioButtonItemText,radioButtonLabelStyle]}>{item?.label}</Text>}
    </TouchableOpacity>
  )
}

const RadioForm = (props) => {
  const styles = StyleSheet.create({
    containerStyleDefault: {
    }
  })
  interface radioFormProps{
    items: {
      label: string | number,
      value: string | number
    }[],
    radioFormStyle: StyleProp<ViewStyle> | undefined
  }
  const { items,radioFormStyle} : radioFormProps = props
  return (
    <View style={[styles.containerStyleDefault,radioFormStyle]}>
      {
        items?.map((item,index) => {
          return (
            <RadioButton key={index} {...props} item={item} index={index}/>
          )
        })
      }

    </View>
  )
}

export default RadioForm
