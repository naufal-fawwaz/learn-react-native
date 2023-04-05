import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import { checkImageURL } from '../../../../utils'
import styles from './nearbyjobcard.style'

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleNavigate(job)}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image 
          source={{ uri: job.employer_logo != null ? job.employer_logo : 'https://picsum.photos/200' }}
          resizeMode='contain'
          style={styles.logImage} />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType} numberOfLines={1}>
          {job.job_employment_type}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard