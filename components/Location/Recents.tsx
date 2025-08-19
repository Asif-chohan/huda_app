import Box from '@/components/Box'
import { recent_mock_data } from '@/constants/search'
import React from 'react'
import { Image } from 'react-native'
import Text from '../Text'

const Recents = () => {
  return (
    <Box>
      <Text font={18} weight={"bold"}>{recent_mock_data.heading}</Text>
      {recent_mock_data.data.map((item, index) => (
        <Box key={index} flexDirection="row" alignItems="center" mt={12}>
          <Image source={item.image} style={{ width: 40, height: 40, borderRadius: 10 }} />
          <Text ml={12} numberOfLines={1} ellipsizeMode='tail' weight={"500"}>{item.text}</Text>
        </Box>
      ))}
    </Box>
  )
}

export default Recents