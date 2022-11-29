import { Autocomplete, Card, Container, Group, PasswordInput, Stack, TextInput } from '@mantine/core'
import React from 'react'
import { Title } from '@mantine/core'
import { Button } from '@mantine/core'

const Registerform = () => {
  return (
    <Container sx={{display: "flex", justifyContent: "center"}}>
        <Card shadow={"sm"} mt="200px" sx={{width: "720px"}}>
            <Title mt={"md"} sx={{
                textAlign: "center"
            }}>
                Welcome to DevCentral
            </Title>
            <Stack mt={"50px"} ml="200px" sx={{width: "300px",}}>
                
                <TextInput placeholder="eg: John Doe" label="Full Name" />
                <TextInput label="Email" placeholder='eg: johndoe@abc.com'/>
                <PasswordInput placeholder='password' label="Password"/>

            </Stack>

            <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}>
                <Button>Register</Button>

            </div>

        </Card>
    </Container>
  )
}

export default Registerform