import { StyleSheet,Dimensions } from 'react-native';

const styles = StyleSheet.create ({


container : {
    position : 'absolute',
    top: 50,
    zIndex : 100,
    flexDirection : 'row',
    justifyContent : 'space-between',
    width : '100%',
    paddingHorizontal : 20,
},

logo : {
    height : 20,
    width : 100,
    resizeMode : 'contain',
},

menu : {
    height : 25,
    width : 25,
    resizeMode : 'contain',
}



});


export default styles;