import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons";
import image from "./image.svg";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },
}));

export default function Landing() {
  const { classes } = useStyles();
  return (
    <div>
      <Container mt="200px">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title} size="100px">
              DevCentral by SMD_Alpha
            </Title>
            <Text color="dimmed" mt="md" size="lg">
              A Social Media App for Developers
            </Text>

            <Group mt={30}>
              <Link href="/login">
              <Button radius="xl" size="md" className={classes.control}>
                Login
              </Button>
              </Link>
              <Link href="/register">
              <Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
              >
                Register
              </Button>
              </Link>
            </Group>
          </div>
          <Image
            src={image.src}
            className={classes.image}
            alt={classes.title}
          />
        </div>
      </Container>
    </div>
  );
}
