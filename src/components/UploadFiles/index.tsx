import React from 'react'
import styles from "./UploadFiles.module.scss" 
import Button from '../common/Button'

function UploadFiles() {
  return (
    <div className={styles.UploadMain}>
        <Button title='Add a File' ButtonClass='btn-outline btn-primary'/>
        <Button title='Create a folder' ButtonClass='btn-outline btn-success'/>
    </div>

  )
}

export default UploadFiles