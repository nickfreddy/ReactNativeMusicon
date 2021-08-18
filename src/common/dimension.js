import { Dimensions, StatusBar } from "react-native";

const windowHeight = Dimensions.get('window').height;
const statusBarHeight = StatusBar.currentHeight

const dimension = {
  fullHeight : windowHeight + statusBarHeight,
  tabBottomHeight : 56,
  headerHeight : 94,
  bottomHeight : 127,
  statusBarHeight
}

export default dimension
