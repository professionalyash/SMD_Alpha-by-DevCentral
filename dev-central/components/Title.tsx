import React from 'react'
import { Text } from '@mantine/core'

const Title = (props: any) => {
  return (
    <Text component="span"
    color="white"
    style={{fontSize: "40px"}}
    weight={700}
    >{props.name}</Text>
  )
}

export default Title