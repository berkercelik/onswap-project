import {useEffect, useState} from 'react'
import {client} from '../lib/sanityClient'
import { useContext } from 'react'
import {TransactionContext} from '../context/TransactionContext'
import Image from 'next/image' 
import ethLogo from '../assets/ethCurrency.png'
import {FiArroUpRight, FiArrowUpRight} from 'react-icons/fi'
import { Fragment } from "react"
import st from '../pages/_app.js'

const style = {
    wrapper: `h-full text-white select-none h-full w-screen flex-1 pt-14 flex justify-end pb-12 px-8 overflow-y-scroll overflow-x-hidden mt-7 mb-5 scrollbar`,
    txHistoryItem: `bg-[#191a1e] rounded-lg px-4 py-2 my-2 flex items-center justify-end`,
    txDetails: `flex items-center`,
    toAddress: `text-[#f48706] mx-2`,
    txTimestamp: `mx-2`,
    etherscanlink: `flex items-center text-[#2172e5]`,
    
}


const TransactionHistory = () =>{
    const {isLoading, currentAccount} = useContext(TransactionContext)
    const [transactionHistory, setTransactionHistory] = useState([])

    useEffect(() =>{
        ;(async () => {
            if (!isLoading && currentAccount){
                const query =`
                    *[_type=="users" && _id == "${currentAccount}"] {
                        "transactionList": transactions[] ->{amount, toAddress, timestamp, txHash}|order(timestamp desc)[0..4]
                    }
                `
                const clientRes = await client.fetch(query)

                setTransactionHistory(clientRes[0].transactionList)
            }
        })() // last transactions view
    }, [isLoading, currentAccount])

    const space = <Fragment>&nbsp;</Fragment>    

    //some format process about history part
    return (
        <div className={style.wrapper}>
            <div>
                {transactionHistory && 
                    transactionHistory?.map((transaction, index) => (
                        <div className={style.txHistoryItem} key={index}>
                            <div className={style.txDetails}>
                                <Image src={ethLogo} height={20} width={15} alt='eth' /> {space}
                                {transaction.amount} 
                                {space}
                                to 
                                <span className={style.toAddress}>
                                    {transaction.toAddress.substring(0, 6)}...
                                </span>
                            </div>{' '}
                            
                            ,{space} 
                            <div className={style.txTimeStamp}>
                                {new Date(transaction.timestamp).toLocaleString('tr-TR', {
                                    timeZone: 'Turkey',
                                    hour12: false,
                                    timeStyle: 'short',
                                    dateStyle: 'long',

                                })}
                            </div>
                            {space}{space}  
                            <div className={style.etherscanlink}>
                                <a
                                    href={`https://rinkeby.etherscan.io/tx/${transaction.txHash}`}
                                    target='_blank'
                                    rel='norefferer'
                                    className={style.etherscanLink}
                                
                                >
                                    View on Etherscan
                                    <FiArrowUpRight/>
                                </a>
                            </div>
                        </div>
                ))}
            </div>
            
        </div>
    )
}
export default TransactionHistory