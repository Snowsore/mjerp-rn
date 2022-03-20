import { useState, useEffect, createContext, useContext } from "react";
import { Text, View, StyleSheet } from "react-native";

import dateFormat from "@js/dateformat";

import { Group, Button, Modal, Field, Flex, Input } from "@components";

import { useProduct } from "@contexts/ProductContext";

import { getProductInfos, postProductInfo } from "@js/api";

const InfoContext = createContext();

export default function InfoScreen(props) {
  const [product, setProduct] = useProduct();
  const step = props.route.params.step;
  const info = product[step];

  const fDate = dateFormat(info.date, "yyyy/mm/dd HH:MM dddd");

  useEffect(() => {
    props.navigation.setOptions({
      title: `${info.id} - ${info.type}`,
    });
  }, []);

  const baseStats = () => {
    return (
      <Group>
        <Group.Item title="型号" value={info.type} />
      </Group>
    );
  };

  const workStats = () => {
    if (!info.worker) return <ManufacItem />;
    return (
      <Group>
        <Group.Item title="生产人" value={info.worker} />
        <Group.Item title="日期" value={fDate} />
        <ModalItem title="车间号" field="machine" />
        <ModalItem title="数量" field="number" type="number" />
        <ModalItem title="不良" field="fail" type="number" />
      </Group>
    );
  };

  const inspectStats = () => {
    if (!info.worker) return null;
    if (!info.inspector) return <InspecItem />;
    return (
      <Group>
        <Group.Item title="审批人" value={info.inspector} />
        <ModalItem title="备注" field="comment" />
      </Group>
    );
  };

  return (
    <InfoContext.Provider value={info}>
      <View style={styles.container}>
        {baseStats()}
        {workStats()}
        {inspectStats()}
      </View>
    </InfoContext.Provider>
  );
}

const ModalItem = (props) => {
  const [product, setProduct] = useProduct();
  const info = useContext(InfoContext);
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  const [value, setValue] = useState(info[props.field]);

  const postRequest = async () => {
    try {
      toggleModal();
      await postProductInfo(info.id, info.step, { [props.field]: value });
      setProduct(await getProductInfos(info.id));
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <Group.Item
        title={props.title}
        value={info[props.field]}
        onPress={toggleModal}
      />
      <Modal show={modal} onBack={toggleModal}>
        <Flex gap={8}>
          <Field title={props.title}>
            <Input
              value={value}
              onChange={setValue}
              type={props.type}
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
  const [product, setProduct] = useProduct();
  const info = useContext(InfoContext);
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  const [machine, setMachine] = useState("");
  const [number, setNumber] = useState("");
  const [fail, setFail] = useState("");

  const postRequest = async () => {
    try {
      toggleModal();
      await postProductInfo(info.id, info.step, {
        machine: machine,
        number: number,
        fail: fail,
      });
      setProduct(await getProductInfos(info.id));
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <Text>没有生产信息，请添加</Text>
      <Button onPress={toggleModal}>添加</Button>
      <Modal show={modal} onBack={toggleModal}>
        <Flex gap={8}>
          <Field title="车间号">
            <Input value={machine} onChange={setMachine} autoFocus />
          </Field>
          <Field title="数量">
            <Input value={number} onChange={setNumber} type="number" />
          </Field>
          <Field title="不良">
            <Input value={fail} onChange={setFail} type="number" />
          </Field>
          <Button onPress={postRequest}>更改</Button>
        </Flex>
      </Modal>
    </>
  );
};

const InspecItem = (props) => {
  const [product, setProduct] = useProduct();
  const info = useContext(InfoContext);
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  const [comment, setComment] = useState("");

  const postRequest = async () => {
    try {
      toggleModal();
      await postProductInfo(info.id, info.step, {
        comment: comment,
      });
      setProduct(await getProductInfos(info.id));
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <Text>未审批，请审批</Text>
      <Button onPress={toggleModal}>审批</Button>
      <Modal show={modal} onBack={toggleModal}>
        <Flex gap={8}>
          <Field title="备注">
            <Input
              value={comment}
              onChange={setComment}
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    padding: 8,
  },
});
