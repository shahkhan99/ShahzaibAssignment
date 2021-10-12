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
import axios from 'axios';
import {postList} from '../../redux/actions/actions';
import {connect} from 'react-redux';

class Home extends Component {
  state = {
    data: [],
  };
  getData = () => {
    let arr = [];
    axios
      .get('https://jsonplaceholder.typicode.com/posts/')
      .then(response => {
        // handle success
        this.props.addPost(response.data);
        // this.setState({data: JSON.stringify(response.data)});
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      });
  };
  componentDidMount() {
    this.getData();
  }

  render() {
    let {posts} = this.props.posts;

    return (
      <View style={styles.container}>
        <ScrollView
          style={{flex: 1, height: '100%', width: '100%'}}
          contentContainerStyle={{flex: 1}}>
          {posts.map((datas, i) => {
            console.log(datas);
            return (
              <View style={styles.cards} key={i}>
                <Text style={{fontWeight: '500'}}>{datas.title}</Text>
                <Text>{datas.body}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
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
  cards: {
    padding: 5,
    width: '95%',
    elevation: 10,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderColor: 'grey',
    borderWidth: 1,
    back,
  },
});
const mapStateToProps = state => ({
  posts: state.posts,
});

const mapDispatchToProps = dispatch => {
  return {
    addPost: post => {
      dispatch(postList(post));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
