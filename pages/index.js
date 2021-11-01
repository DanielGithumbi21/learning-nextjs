import Head from 'next/head'
import Image from 'next/image'
import Covid from '../components/Covid'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello there</h1>
      <Covid/>
    </div>
  )
}
