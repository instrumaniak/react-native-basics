import React from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from '../../Styles'

const MyModal = ({ navigation }) => (
  <View style={styles.containerSpaced}>
    <Text style={styles.title}>
      This a modal!!
    </Text>
    <Button
      title='Dismiss'
      onPress={() => navigation.goBack() }
    />
  </View>
)

export default MyModal