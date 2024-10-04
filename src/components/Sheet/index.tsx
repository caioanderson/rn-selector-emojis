import { ReactElement, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles, POSITION_SHEET_OPEN, POSITION_SHEET_CLOSE } from "./styles";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, SlideInDown, SlideOutDown } from "react-native-reanimated";
import { Ionicons } from '@expo/vector-icons';

type SheetProps = {
  toggle: boolean;
  onToggle: (toggle: boolean) => void;
  children?: ReactElement;
}

export function Sheet({ toggle, onToggle, children }: SheetProps) {

  const bottomPosition = useSharedValue(POSITION_SHEET_OPEN)

  const styleAnimated = useAnimatedStyle(() => {
    return {
      bottom: withTiming(bottomPosition.value, { duration: 500 })
    }
  })

  function handleCloseSheet() {
    onToggle(!toggle)
  }

  useEffect(() => {
    if(toggle) {
      bottomPosition.value = POSITION_SHEET_OPEN
    } else bottomPosition.value = -POSITION_SHEET_CLOSE
  }, [toggle])

  return (
    <Animated.View 
      style={[styles.container, styleAnimated]}
      entering={SlideInDown.springify().damping(15)}
      exiting={SlideOutDown}
      >
      <View style={styles.header}>
       <TouchableOpacity onPress={handleCloseSheet}>
        <Ionicons name='close' color={'#333'} size={24}/>
       </TouchableOpacity>
      </View>
      {children}
    </Animated.View>
  )
} 