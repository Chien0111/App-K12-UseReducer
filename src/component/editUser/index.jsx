import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group } from "@mantine/core";

const EditUser = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div>
      <Modal opened={opened} onClose={close} title="Authentication">
        {/* Modal content */}
      </Modal>

      <Group position="center">
        <Button onClick={open}>Open modal</Button>
      </Group>
    </div>
  );
};

export default EditUser;
