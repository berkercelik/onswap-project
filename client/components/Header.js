import React, {useState, useEffect, useContext} from 'react'
import Image from 'next/image'
import {FiArrowUpRight} from 'react-icons/fi'
import {AiOutlineDown} from 'react-icons/ai'
import {HiOutlineDotsVertical} from 'react-icons/hi'
import onswapLogo from '../assets/onswap-logo.png'
import ethLogo from '../assets/eth.png'
import {TransactionContext} from '../context/TransactionContext'
import styled from 'styled-components'
//import React from 'react'

const style ={
    wrapper:`p-4 w-screen flex justify-between items-center overflow-y-hidden overflow-x-hidden`,
    headerLogo:`flex w-1/4 items-center justify-start ml-5 mt-5`,
    nav:`flex-1 flex justify-center items-center`,
    navItemsContainer:`flex bg-[#191B1F] rounded-3xl`,
    navItem:`px-4 py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl`,
    activeNavItem:'bg-[#20242A]',
    buttonsContainer: `flex w-1/4 justify-end items-center`,
    button: `flex items-center bg-[#191B1F] rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer`,
    buttonNav: `flex bg-[#191B1F] rounded-xl mx-2 text-[0.9rem] font-semibold cursor-pointer`,
    buttonPadding: `p-2`,
    buttonNavPad: `p-2`,
    buttonTextContainer: `h-8 flex items-center`,
    buttonIconContainer: `flex items-center justify-center w-8 h-8`,
    buttonAccent: `bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#4F90EA]`,
}

// styles with Tailwind-CSS

const Header = () => {
    const [selectedNav, setSelectedNav] = useState('send')
    const {connectWallet, currentAccount} = useContext(TransactionContext  )
    const [userName, setUserName] = useState()

    useEffect(() => {
      if (!currentAccount) return 
      setUserName(`${currentAccount.slice(0,5)}...${currentAccount.slice(38)}`)
    }, [currentAccount])

    console.log({connectWallet, currentAccount})

    // page selecting function and connect wallet part
    return (
    <div className={style.wrapper}>
        <div className={style.headerLogo}>
            <Image src={onswapLogo} alt="onswap" height={100} width={100}/>                
        </div>
        <div className={style.nav}>
           <div className={style.navItemsContainer}>
               <div onClick={()=> setSelectedNav('send')}
               className={`${style.navItem} ${selectedNav === 'send' && style.activeNavItem}`}
               >Send</div>

               <div onClick={()=> setSelectedNav('pool')}
               className={`${style.navItem} ${selectedNav === 'pool' && style.activeNavItem}`}
               >Pool</div>

               <div onClick={()=> setSelectedNav('vote')}
               className={`${style.navItem} ${selectedNav === 'vote' && style.activeNavItem}`}
               >Vote</div>
                <a
                    href="https://info.uniswap.org/#/"
                    target="_blank"
                    rel="norefferer"
                >
                <div className={style.navItem}>
                    Graphics <FiArrowUpRight/>
                </div>
                </a>
            </div>      

        </div> 
        <div className={style.buttonsContainer}>
            <div className={`${style.button} ${style.buttonPadding}`}>
                <div className={style.buttonIconContainer}> 
                    <Image src={ethLogo} alt="eth logo" height={20} width={20}/>
                </div>
                <p>Ethereum</p>
                <div className={style.buttonIconContainer}> 
                <AiOutlineDown/>
                </div>           
            </div>            
            
            {currentAccount ? (
          <div className={`${style.button} ${style.buttonPadding}`}>
            <div className={style.buttonTextContainer}>{userName}</div>
          </div>
        ) : (
          <div
            onClick={() => connectWallet()} //using with transactionContext
            className={`${style.button} ${style.buttonPadding}`}
          >
            <div className={`${style.buttonAccent} ${style.buttonPadding}`}>
              Connect Wallet
            </div>
          </div>
        )}
            <div className={`${style.button} ${style.buttonPadding}`}>
                <div className={`${style.buttonIconContainer} mx-2`}>           
                <HiOutlineDotsVertical/>                     
                </div>
            </div> 
        </div>
               
    </div>
  )
}

export default Header


