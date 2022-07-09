import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Main from '../components/Main'
import TransactionHistory from '../components/TransactionHistory'

const style ={
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-gradient-to-r from-color1 via-color2 to-color3 text-white select-one flex flex-col justify-between`,
  bgcolor: ``
}

const Home: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <Header/>
      <Main/>
      <TransactionHistory/>
    </div>
  )
}

export default Home

//Main and only page of project