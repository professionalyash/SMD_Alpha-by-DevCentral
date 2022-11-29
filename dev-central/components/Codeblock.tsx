import React from 'react'
import { Code, Container } from '@mantine/core'

const Codeblock = ({children}: any) => {
  return (
    <Container>
        <Code>
            {children}
        </Code>
    </Container>
  )
}

export default Codeblock