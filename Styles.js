/**
 *  Global StyleSheet
 */

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  containerCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerSpaced: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  textContainer: {
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30
  },
  buttonGroup: {
    flexDirection: 'row',
  }
})