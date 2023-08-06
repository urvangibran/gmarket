import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { Avatar, Box, Button, InputGroup, InputLeftElement, Text, Tr, WrapItem } from '@chakra-ui/react'
import { BsFillPencilFill, BsFillTicketDetailedFill } from 'react-icons/bs'
import { HiUser } from 'react-icons/hi'
import { BiNotepad, BiPhoneIncoming } from 'react-icons/bi'
import { GrNotification } from 'react-icons/gr'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { Input } from '@chakra-ui/react'
import Footer from '../../components/Footer'
import Profile from '../../components/Profile'

function Account() {
  const [isUsername, setIsUsername] = useState("urvangibran")
  const [imageUrl, setImageUrl] = useState('https://bit.ly/kent-c-dodds');
  
  const [accountSubMenuOpen, setAccountSubMenuOpen] = useState(false);
  const [orderSubMenuOpen, setOrderSubMenuOpen] = useState(false);

  const toggleAccountSubMenu = () => {
    setAccountSubMenuOpen(!accountSubMenuOpen);
  };

  const toggleOrderSubMenu = () => {
    setOrderSubMenuOpen(!orderSubMenuOpen);
  };

  return (

    <div>
      <div className='bg-[#F5F5F5] h-[1000px]'>
        <Navbar />
        <div className='grid place-items-center  '>
          <div className='grid grid-cols-[1fr,3fr] w-[1024px] h-screen'>

            <div className='bg-inherit mt-5 mr-3'>
              <div className='flex justify-center items-center gap-2 py-5'>
                <WrapItem>
                  <Avatar size='md' name={isUsername} src={imageUrl} />{' '}
                </WrapItem>
                <div className='flex flex-col'>
                  <h5>{isUsername}</h5>
                  <div className='flex items-center gap-1'>
                    <BsFillPencilFill className='w-3 h-3 text-gray-400' />
                    <h5 className='text-gray-400 cursor-pointer'> Change Profile</h5>
                  </div>
                </div>
              </div>
              <hr className='text-gray-500' />
              <div className='pl-7 mt-5'>
                <div className='flex items-center gap-2 mb-4'>
                  <HiUser className='w-6 h-6' />
                  <h5 className='font-semibold cursor-pointer hover:text-[#2c7da0]' onClick={toggleAccountSubMenu}>My Account</h5>
                </div>
                {accountSubMenuOpen && (
                  <div className='pl-9'>
                    <h5 className='mb-3 cursor-pointer text-[#2c7da0]'>Profile</h5>
                    <h5 className='mb-3 cursor-pointer hover:text-[#2c7da0]'>Bank & Cards</h5>
                    <h5 className='mb-3 cursor-pointer hover:text-[#2c7da0]'>Address</h5>
                    <h5 className='mb-3 cursor-pointer hover:text-[#2c7da0]'>Change Password</h5>
                    <h5 className='mb-4 cursor-pointer hover:text-[#2c7da0]'>Notification Settings</h5>
                  </div>
                )}
                <div className='flex items-center gap-2 mb-3'>
                  <BiNotepad className='w-6 h-6 text-[#A3B5D6] ' />
                  <h5 className='font-semibold cursor-pointer hover:text-[#2c7da0]' onClick={toggleOrderSubMenu}>My Orders</h5>
                </div>
                {orderSubMenuOpen && (
                  <div className='pl-9'>
                    <h5 className='mb-3 cursor-pointer text-[#2c7da0]'>Profile</h5>
                    <h5 className='mb-3 cursor-pointer hover:text-[#2c7da0]'>Bank & Cards</h5>
                    <h5 className='mb-3 cursor-pointer hover:text-[#2c7da0]'>Address</h5>
                    <h5 className='mb-3 cursor-pointer hover:text-[#2c7da0]'>Change Password</h5>
                    <h5 className='mb-4 cursor-pointer hover:text-[#2c7da0]'>Notification Settings</h5>
                  </div>
                )}
                <div className='flex items-center gap-2 mb-3'>
                  <GrNotification className='w-6 h-6 text-[#E27C63]' />
                  <h5 className='font-semibold cursor-pointer hover:text-[#2c7da0]'>Notifications</h5>
                </div>
                <div className='flex items-center gap-2 mb-3'>
                  <BsFillTicketDetailedFill className='w-6 h-6 text-[#E15F3F]' />
                  <h5 className='font-semibold cursor-pointer hover:text-[#2c7da0]'>My Vouchers</h5>
                </div>
                <div className='flex items-center gap-2 mb-3'>
                  <AiOutlineDollarCircle className='w-6 h-6 text-[#E8AE3C]' />
                  <h5 className='font-semibold cursor-pointer hover:text-[#2c7da0]'>My Shopee Coins</h5>
                </div>

              </div>
            </div>

            <Profile />
          </div>
        </div>
      </div >
      <Footer />
    </div>
  )
}

export default Account