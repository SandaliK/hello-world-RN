import { StyleSheet,Dimensions } from 'react-native';

const styles = StyleSheet.create ({

    carContainer :{
        width : '100%',
        height: Dimensions.get('window').height,
      },
    
      title :{
        marginTop : '30%',
        width : '100%',
        alignItems : 'center',
      },
     
      mainTitle: {
        fontSize : 40,
        fontWeight : '500',
      },
    
      subtitleCTA:{
        textDecorationLine : 'underline',
      },

      subTitle : {
        fontSize :16,
        color : '#5c5e62',
      },
    
      image :{
        height : '100%',
        width : '100%',
        resizeMode : 'cover',
        position : 'absolute',
      },

      buttonsContainer :{
        position : 'absolute',
        bottom : 50,
        width : '100%',
      },

    
});


export default styles;