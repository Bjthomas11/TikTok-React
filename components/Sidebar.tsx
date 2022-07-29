import React, {useState} from 'react'
import {NextPage} from 'next'
import {useRouter} from 'next/router'
import Link from 'next/link';
import GoogleLogin from 'react-google-login';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import {ImCancelCircle} from 'react-icons/im'
import Discover from './Discover';
import SuggestedAccounts from './SuggestedAccounts';
import Footer from './Footer';


const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true)
  const [user, setUser] = useState(true)

  const normalLink = 'flex items-center gap-3 hover:bg-primary p-3 cursor-pointer justify-center xl:justify-start font-semibold text-[#f51997] rounded'
  return (
    <div>
      {/* mobile sidebar */}
      <div className='block xl:hidden m-2 ml-4 mt-3 text-lg cursor-pointer' onClick={(() => setShowSidebar((prev) => !prev))}>
    {
      showSidebar ? (
        <ImCancelCircle /> 
      ) : (
        <AiOutlineMenu />
      )
    }
      </div>
      { showSidebar && (
        <div className='xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3'>
          <div className='xl:border-b-2 border-gray-200 xl:pb-4 '>
            <Link href="/">
              <div className={normalLink}>
                <p className='text-2xl'>
                  <AiFillHome />
                </p>
                <span className='text-xl hidden xl:block'>For You</span>
              </div>
            </Link>
          </div>
          {
          user && (
              <div className='px-2 py-4 hidden xl:block'>
                <p className='text-gray-400 '>Login</p>
                <div className='pr-4'>
                  <GoogleLogin
                    clientId=""
                    onSuccess={(res) => {}}
                    onFailure={(res) => {}}
                    cookiePolicy={'single_host_origin'}
                    render={(renderProps) => (
                      <button className='bg-white text-lg text-[#f51997] cursor-pointer border-[1px] border-[#f51997] rounded-md outline-none mt-3 w-full font-semibold px-6 py-3 hover:text-white hover:bg-[#f51997]' onClick={renderProps.onClick} disabled={renderProps.disabled}>Login</button>
                    )}
                  />
                </div>
              </div>
          )
        }
        <Discover />
        <SuggestedAccounts />
        <Footer/>
        </div>
      )}
    </div>
  )
}

export default Sidebar;