import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {topics} from '../utils/constants'

const Discover = () => {

  const router = useRouter()
  const {topic} = router.query

  const activeTopicStyle = "xl:border-2 hover:bg-primary xl:border-[#f51997] px-3 py-2 rounded xl:rounded-full flex items-center justify-center gap-2 cursor-pointer text-[#ff1997]"

  const topicStyle = "xl:border-2 hover:bg-primary xl:border-gray-300 px-3 py-2 rounded xl:rounded-full flex items-center justify-center gap-2 cursor-pointer text-black"
  return (
    <div className='xl:border-b-2 xl:border-gray-200 pb-6'>
      <h3 className='text-gray-500 font-semibold m-3 mt-4 hidden xl:block'>Popular Topics</h3>
      <div className='flex gap-3 flex-wrap'>
        {
          topics.map((singleTopic) =>(
            <Link href={`/?topic=${singleTopic.name}`} key={singleTopic.name}>
              <div className={topic === singleTopic.name ? activeTopicStyle : topicStyle}>
                <span className='font-bold text-2xl xl:text-md'>
                  {singleTopic.icon}
                </span>
                <span className='font-medium text-md hidden xl:block capitalize'>
                  {singleTopic.name}
                </span>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Discover