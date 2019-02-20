import React, { Component } from 'react'
import { Animated, Easing, View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'

class FadeInView extends Component {
  state = {
    fadeAnim: new Animated.Value(0) // initial Opacity: 0
  }

  componentDidMount() {
    this._startAnimation()
  }

  _startAnimation = () => {
    const { fadeAnim } = this.state
    
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2000
      }
    ).start()   
    
  }

  _resetAnimation = () => {
    this.setState({ fadeAnim: new Animated.Value(0) }, () => {
      this._startAnimation()
    })
  }

  render() {
    let { fadeAnim } = this.state

    return (
      <TouchableWithoutFeedback onPress={this._resetAnimation}>
        <Animated.View
          style={{
            ...this.props.style,
            opacity: fadeAnim,
            transform: [{
              translateY: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [150, 0]
              })
            }]
          }}
        >
          { this.props.children}
        </Animated.View>
      </TouchableWithoutFeedback>
    )
  }
}

class AnimationBasics extends Component {
  static navigationOptions = {
    drawerLabel: 'Animation Basics',
    headerTitle: 'Animation Basics'
  }
  render() {
    return (
      <View style={styles.container}>
        <FadeInView style={styles.basicSquare}>
          <Text style={styles.basicSquareText}>Fading In!</Text>
        </FadeInView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  basicSquare: {
    width: 250,
    height: 150,
    backgroundColor: 'powderblue',
    borderRadius: 10
  },
  basicSquareText: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10
  }
  
})

export default AnimationBasics