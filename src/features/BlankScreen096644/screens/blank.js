import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export class _Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { TextInput_10: "" }

  render = () => (
    <View style={styles.View_1}>
      <View style={styles.View_3}>
        <Icon iconFont="FontAwesome Icons" style={styles.Icon_6} />
        <TextInput
          placeholder="Sample text input placeholder"
          editable={true}
          style={styles.TextInput_10}
          value={this.state.TextInput_10}
          onChangeText={nextValue => this.setState({ TextInput_10: nextValue })}
        />
        <Icon iconFont="FontAwesome Icons" style={styles.Icon_12} />
      </View>
      <View style={styles.View_14} />
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  View_1: {
    width: "100%",
    height: "100%",
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "visible",
    textAlign: "left",
    verticalAlign: "baseline",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontFamily: "Roboto-Regular",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignContent: "stretch",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    backgroundSize: "auto"
  },

  View_3: {
    width: "100%",
    height: "100%",
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "hidden",
    textAlign: "left",
    verticalAlign: "baseline",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontFamily: "Roboto-Regular",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignContent: "stretch",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 12,
    backgroundSize: "auto",
    alignSelf: "center"
  },

  View_5: {
    width: "100%",
    marginLeft: 0,
    marginRight: 0,
    marginTop: 25,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "hidden",
    alignSelf: "flex-start",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "flex-start",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 0,
    backgroundSize: "auto"
  },

  Icon_7: {
    height: 100,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    overflow: "visible",
    alignSelf: "flex-start",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    fontSize: 20,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    textAlignVertical: "center",
    textDecorationLine: "none",
    textTransform: "none",
    lineHeight: 12,
    letterSpacing: 0
  },

  Text_10: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    overflow: "visible",
    alignSelf: "flex-start",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    textAlign: "left",
    textAlignVertical: "center",
    textDecorationLine: "none",
    textTransform: "none",
    lineHeight: 12,
    letterSpacing: 0
  }
}))
