import Colors from './Colors';
const screenWrapper = {
  flex:1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f9f9f9',
  flexDirection:'row'
};


 const  GiftedForm = {
    TextInput: {
      rowContainer: {
        borderBottomWidth: 0,
        backgroundColor:Colors.background,
        height: 70
      },
      // titleContainer: {flex: 1},
      textInput: {
        marginRight: 10,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: Colors.grey1,
        marginLeft: 10,
        paddingLeft: 5,
        backgroundColor: Colors.wt,
        fontSize:15,
        paddingTop: 0,
        paddingBottom:0,
      },
      textInputTitle: {
        color: Colors.black,
        fontSize: 15,
        paddingBottom: 5
      },
      underlineIdle: {
        borderBottomWidth: 0
      },
      formStyle:{
        backgroundColor: Colors.background
      },
      submitButton:{
        backgroundColor: Colors.background
      }
    },

    ErrorWidget: {
      errorContainer: { padding: 10, marginVertical:10 },
      errorText: { lineHeight: 20, color:Colors.warnText }
    },
    formStyles: {
      backgroundColor: Colors.bg,
      paddingHorizontal: 20,
      flexDirection: 'column',
      justifyContent: 'center',
      flex: 1
    },
    SubmitWidget: {
      submitButton: {
        marginHorizontal: 0,
        backgroundColor: Colors.red1,
        height: 40,
        width: 230,
        justifyContent: 'center',
        borderRadius: 8
      },
      submitButtonWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
      },
    },
    submitButton: {
      marginHorizontal: 0,
      backgroundColor: Colors.mainButton,
      height: 40,
      width: 230,
      justifyContent: 'center'
    },
    submitButtonWrapper: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center'
    },
    // SubmitButtonStyle : {
    //   backgroundColor: Colors.bluelight2,
    //   marginTop: 15,
    //   marginLeft: 60,
    //   marginRight: 60
    // }
    
    textInput: {
      // textAlign: 'right',
      // paddingRight: 120
      
    },
    textInputTitle: {
      width: 120
    },
    optionRight: {
      justifyContent: 'flex-end'
    },
 
  };
 


export default {
  screenWrapper,
  GiftedForm
}