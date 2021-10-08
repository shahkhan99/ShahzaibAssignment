import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  BackHandler,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';
// import {handleLogin} from '../../backend/logic';
import Ionicons from 'react-native-vector-icons/Ionicons';

class Login extends Component {
  state = {
    email: '',
    password: '',
    passVis: false,
    spiner: false,
  };
  handleInputChange = (inputName, inputValue) => {
    this.setState(state => ({
      ...state,
      [inputName]: inputValue, // <-- Put square brackets
    }));
  };
  async componentDidMount() {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButton.bind(this),
    );
  }
  loginBtn = () => {};
  handleBackButton = () => {
    if (this.props.navigation.isFocused()) {
      () => {
        this.props.navigation.navigate('Home');
      };
    }
  };
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              {/* <StatusBar translucent backgroundColor="transparent" /> */}
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  height: '40%',
                }}>
                <View>
                  <Image
                    source={require('./assets/signin.png')}
                    style={{height: 160, width: 120}}
                  />
                </View>
                <View>
                  <Text style={styles.heading}>Sign In</Text>
                </View>
              </View>
              <View style={styles.form1}>
                <View style={styles.form}>
                  <TextInput
                    placeholder="Your Email"
                    placeholderTextColor="#d9d2d0"
                    // keyboardType="visible-password"
                    secureTextEntry={false}
                    style={styles.input}
                    autoCapitalize="none"
                    onSubmitEditing={() => this.password.focus()}
                    returnKeyType="next"
                    onChangeText={value =>
                      this.handleInputChange('email', value)
                    }
                  />
                  <View style={styles.passView}>
                    <TextInput
                      placeholder="Your Password"
                      placeholderTextColor="#d9d2d0"
                      secureTextEntry={this.state.passVis ? false : true}
                      style={styles.passInput}
                      ref={ref => (this.password = ref)}
                      autoCapitalize="none"
                      onChangeText={value =>
                        this.handleInputChange('password', value)
                      }
                    />
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({passVis: !this.state.passVis})
                      }>
                      <Ionicons
                        name={this.state.passVis ? 'eye-off' : 'eye'}
                        color={'grey'}
                        size={24}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.forPass}>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('ResetPassword');
                    }}>
                    <Text style={styles.forgetText}>Forgot Password?</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.submitBtnView}>
                  {this.state.spiner ? (
                    <View style={styles.submitBtn}>
                      <ActivityIndicator size="large" color="#fff" />
                    </View>
                  ) : (
                    <TouchableOpacity
                      style={styles.submitBtn}
                      onPress={() => {
                        this.loginBtn();
                      }}>
                      <Text style={styles.submitBtnText}>Sign in</Text>
                    </TouchableOpacity>
                  )}
                </View>
                <View style={styles.signupTextView}>
                  <Text>New around here? </Text>

                  <TouchableOpacity>
                    <Text
                      style={styles.signupText}
                      onPress={() => {
                        this.props.navigation.navigate('Signup');
                      }}>
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#fff',
  },
  contain: {
    flex: 1,
    height: '100%',
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 25,
    fontWeight: '700',
  },
  googleBtnView: {
    width: '88%',
  },
  googleBtn: {
    backgroundColor: 'white',
    height: 58,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 24,
    shadowOffset: {width: 0, height: 1},
    shadowColor: 'red',
    shadowOpacity: 1,
    shadowRadius: 24,
    elevation: 20,
  },
  googleText: {
    fontSize: 20,
    color: '#4285F4',
    fontWeight: '700',
  },
  googleIcon: {
    height: 40,
    width: 40,
  },
  form: {
    // display: 'flex',
    // justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  form1: {height: '100%'},
  orText: {
    marginTop: 10,
    fontSize: 15,
    color: 'grey',
    margin: 10,
  },
  input: {
    width: '88%',
    height: 58,
    backgroundColor: 'white',
    borderRadius: 24,
    shadowOffset: {width: 0, height: 0},
    shadowColor: 'grey',
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 15,
    alignItems: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    margin: 5,
  },
  submitBtnView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  submitBtn: {
    height: 58,
    width: '88%',
    backgroundColor: '#7041EE',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  submitBtnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  signupTextView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    fontSize: 15,
    color: '#7041EE',
    fontWeight: '700',
  },
  forgetText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },

  forPass: {
    width: '90%',
    alignItems: 'flex-end',
    marginVertical: 5,
  },
  passView: {
    width: '88%',
    height: 58,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 24,
    shadowOffset: {width: 0, height: 0},
    shadowColor: 'grey',
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 15,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    fontSize: 18,
    margin: 5,
  },
  passInput: {
    width: '88%',
    height: 55,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    fontSize: 18,
    margin: 5,
  },
});

export default Login;
