import React from 'react'
import { footerList1, footerList2, footerList3 } from '../utils/constants'

const List = ({footerList, mt}: { footerList: string[], mt: boolean}) => (
  <div className={`flex flex-wrap gap-2 ${mt && 'mt-5'}`}>
      {
        footerList.map((item, index) => (
          <p key={item} className="text-gray-400 text-sm hover:underline cursor-pointer">{item}</p>
        ))
      }
      </div>
)

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <div className='mt-6 hidden xl:block '>
      <List footerList={footerList1} mt={false}/>
      <List footerList={footerList2} mt/>
      <List footerList={footerList3} mt/>
      <p className='text-gray-400 text-sm mt-5'>{date} TikTok</p>
    </div>
  )
}

export default Footer