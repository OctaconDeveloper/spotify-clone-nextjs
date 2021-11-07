import Head from 'next/head'
import Dashboard from '../components/dashboard'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Spotify NextJS Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Dashboard/>
    </div>
  )
}
