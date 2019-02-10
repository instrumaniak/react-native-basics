import React from 'react'
import { View, Text, Button, Alert } from 'react-native'
import { styles } from '../../Styles'

const Details = props => {
  const { navigation } = props

  return (
    <View style={styles.containerSpaced}>
      <Text style={styles.title}>Details Page!</Text>
      
      <View style={styles.buttonGroup}>
        <Button
          title='Home'
          onPress={() => navigation.navigate('Home')}
        />
        <Text>{' '}</Text>
        <Button
          title='Details again'
          onPress={() => navigation.push('Details')}
        />
        <Text>{' '}</Text>
        <Button
          title='Back'
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  )
}

Details.navigationOptions = ({ navigation }) => {
  return {
    title: 'Details',
    headerRight: (
      <View style={{
        paddingRight: 5
      }}>
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title='Modal'
          color='#666'
        />
      </View>
    )
  }
}


export default Details