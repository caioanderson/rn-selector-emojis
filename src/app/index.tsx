import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import EmojiSelector from 'react-native-emoji-selector'
import { Sheet } from '@/components/Sheet';

export default function Home() {

  const [activeSection, setActiveSection] = useState(false)

  return (
    <View style={styles.container}>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => setActiveSection(true)}
      >
        <Text style={styles.title}>
            Escolha um emoji
        </Text>
      </TouchableOpacity>

      {
        activeSection
        &&
          <Sheet toggle={activeSection} onToggle={setActiveSection}>
            <EmojiSelector
             onEmojiSelected={emoji => console.log(emoji)} 
             showHistory={false}
             showSectionTitles={false}
             columns={5}
             showTabs={false}
             showSearchBar={false}
            />
          </Sheet>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 12
  }
});
