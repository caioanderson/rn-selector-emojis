import { StyleSheet } from "react-native";

export const POSITION_SHEET_OPEN = 20
export const POSITION_SHEET_CLOSE = 220

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: '#fff',
    height: 371,
    padding: 20,

    position: 'absolute',

    borderRadius: 40,
    gap: 20
  },

  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'

  }
})