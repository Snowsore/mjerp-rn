import { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

import dateFormat from "@/js/dateformat";

import { Group, Button, Modal, Field, Flex, Input } from "@/components/mj";

import { useProduct } from "@/contexts/ProductContext";

import { postProductInfo } from "@/js/api";

export default function InfoScreen(props) {
  const [product, setProduct] = useProduct();
  const step = props.route.params.step;
  const info = product[step];
  const date = dateFormat(info.date, "yyyy/mm/dd HH:MM dddd");

  useEffect(() => {
    props.navigation.setOptions({
      title: `${info.id} - ${info.type}`,
    });
  }, []);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#eee",
      padding: 8,
    },
    session: {
      marginBottom: 8,
      borderRadius: 8,
      borderWidth: 1,
      backgroundColor: "#fff",
    },
  });

  const onSubmit = (field) => {
    return async (value) => {
      try {
        const data = { [field]: value };
        await postProductInfo(info.id, step, data);

        setProduct(
          product.map((info, index) => {
            if (index == step) return { ...info, ...data };
            else return info;
          })
        );
      } catch (err) {
        alert(err);
      }
    };
  };

  const subMachine = onSubmit("machine");
  const subNumber = onSubmit("number");
  const subFail = onSubmit("fail");
  const subComment = onSubmit("comment");

  const baseStats = (
    <Group>
      <Group.Item title="型号" value={info.type} />
    </Group>
  );

  const workStats = info.worker ? (
    <Group>
      <Group.Item title="生产人" value={info.worker} />
      {/* <DateItem /> */}
      <MachineItem step={step} />
      {/* <NumberItem />
      <FailItem /> */}
    </Group>
  ) : (
    <ManufacItem />
  );

  const inspecStats = info.inspector ? (
    <Group>{/* <CommentItem /> */}</Group>
  ) : (
    <InspecItem />
  );

  return (
    <View style={styles.container}>
      {baseStats}
      {workStats}
      {info.worker != "" && inspecStats}
    </View>
  );
}

const InputItem = (props) => {
  const [product, setProduct] = useProduct();
  const step = props.route.params.step;
  const info = product[step];

  const [value, setValue] = useState(info[props.field]);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const postRequest = async () => {
    try {
      await postProductInfo(info.id, step, { machine: value });
      toggleModal();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <Group.Item
        title={props.title}
        value={props.value}
        onPress={toggleModal}
      />
      <Modal show={modal} onBack={toggleModal}>
        <Flex gap={8}>
          <Field title={props.title}>
            <Input
              value={value}
              onChange={setValue}
              type={typeof props.value}
              autoFocus
            />
          </Field>
          <Button onPress={postRequest}>更改</Button>
        </Flex>
      </Modal>
    </>
  );
};

const MachineItem = (props) => {
  const [product, setProduct] = useProduct();
  const step = props.step;
  const info = product[step];
  const [value, setValue] = useState(info.machine);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const postRequest = async () => {
    try {
      await postProductInfo(info.id, step, { machine: value });
      toggleModal();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <Group.Item title="车间号" value={info.machine} onPress={toggleModal} />
      <Modal show={modal} onBack={toggleModal}>
        <Flex gap={8}>
          <Field title="车间号">
            <Input
              value={value}
              onChange={setValue}
              type={typeof props.value}
              autoFocus
            />
          </Field>
          <Button onPress={postRequest}>更改</Button>
        </Flex>
      </Modal>
    </>
  );
};

const ManufacItem = (props) => {
  const [value, setValue] = useState(String(props.value));
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const postRequest = async () => {
    await props.onSubmit(value);
    toggleModal();
  };

  return (
    <>
      <Text>没有生产信息，请添加</Text>
      <Button onPress={toggleModal}>添加</Button>
      <Modal show={modal} onBack={toggleModal}>
        <Flex gap={8}>
          <Field title={props.title}>
            <Input
              value={value}
              onChange={setValue}
              type={typeof props.value}
              autoFocus
            />
          </Field>
          <Button onPress={postRequest}>更改</Button>
        </Flex>
      </Modal>
    </>
  );
};

const InspecItem = (props) => {
  const [value, setValue] = useState(String(props.value));
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const postRequest = async () => {
    await props.onSubmit(value);
    toggleModal();
  };

  return (
    <>
      <Text>未审批，请审批</Text>
      <Button onPress={toggleModal}>审批</Button>
      <Modal show={modal} onBack={toggleModal}>
        <Flex gap={8}>
          <Field title={props.title}>
            <Input
              value={value}
              onChange={setValue}
              type={typeof props.value}
              autoFocus
            />
          </Field>
          <Button onPress={postRequest}>更改</Button>
        </Flex>
      </Modal>
    </>
  );
};
