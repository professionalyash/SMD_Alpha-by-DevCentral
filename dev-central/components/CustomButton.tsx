import { Button } from '@mantine/core';

function CustomButton(props: any) {
  return (
    <Button color={props.color} radius="xl" size="md" mt="lg" >
      {props.children}
    </Button>
  );
}

export default CustomButton;