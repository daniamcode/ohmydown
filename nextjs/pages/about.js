import Head from 'next/head'
import styles from '../styles/LandingPage.module.css'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Ohmydown!
        </h1>
        </main>       
    </div>
    </Layout>
  )
}
