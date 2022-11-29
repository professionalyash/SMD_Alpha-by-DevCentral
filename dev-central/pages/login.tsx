import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Footer,
} from "@mantine/core";
import LightDarkButton from "../components/LightDarkButton";
import Link from "next/link";

export default function login() {
  return (
    <>
      <Container size={700} my={40} mt="150px">
        <Title
          align="center"
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
            fontSize: 50,
          })}
        >
          Welcome To DevCentral 👋
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Do not have an account yet?{" "}
          <Anchor<"a">
            href="#"
            size="sm"
            onClick={(event) => event.preventDefault()}
          >
            Create account
          </Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Email" placeholder="you@gmail.com" required />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
          />
          <Group position="apart" mt="md">
            <Checkbox label="Remember me" />
            <Anchor<"a">
              onClick={(event) => event.preventDefault()}
              href="#"
              size="sm"
            >
              Forgot password?
            </Anchor>
          </Group>

          <Button
            variant="gradient"
            gradient={{ from: "violet", to: "indigo" }}
            fullWidth
            mt="xl"
          >
            Login
          </Button>

          <LightDarkButton />
        </Paper>
      </Container>
    </>
  );
}
