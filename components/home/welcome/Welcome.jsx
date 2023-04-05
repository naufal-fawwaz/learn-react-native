import React, { useState } from 'react'
import { View, Text, TextInput, Image, FlatList, TouchableOpacity } from 'react-native'

import { useRouter } from 'expo-router'
import styles from '../welcome/welcome.style'
import { SIZES, icons } from '../../../constants'

const jobTypes = ["Full-Time", 'Part-Time', 'Contractor']

const Welcome = () => {
  const router = useRouter()
  const [activeJobType, setActiveJobType] = useState(jobTypes[0])

  return (
    <View>
      <View style={styles}>
        <Text style={styles.userName}>Hello Andriawan</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value=''
            onChange={(value) => {
            }}
            placeholder='What are you looking for?'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image source={icons.search} resizeMode='contain' style={styles.searchBtnImage} />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item)
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome