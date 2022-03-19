import { View, Modal as RNModal, Pressable, StyleSheet } from "react-native";

export default function Modal(props) {
  const backgroundModal = (
    <RNModal animationType="fade" transparent={true} visible={props.show}>
      <View style={styles.background}></View>
    </RNModal>
  );

  const frontModal = (
    <RNModal
      animationType="slide"
      transparent={true}
      visible={props.show}
      onRequestClose={props.onBack}
      onShow={props.onShow}
    >
      <View style={styles.front} keyboardShouldPersistTaps={"handled"}>
        <Pressable style={styles.mask} onPress={props.onBack}></Pressable>
        <View style={styles.modal}>{props.children}</View>
      </View>
    </RNModal>
  );

  return (
    <>
      {backgroundModal}
      {frontModal}
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "black",
    opacity: 0.3,
  },
  front: {
    flex: 1,
  },
  mask: {
    flex: 1,
  },
  modal: {
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 35,
  },
});
