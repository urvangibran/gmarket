import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { Avatar, Box, Button, InputGroup, InputLeftElement, Text, Tr, WrapItem } from '@chakra-ui/react';
import { BsFillPencilFill, BsFillTicketDetailedFill } from 'react-icons/bs';
import { HiUser } from 'react-icons/hi';
import { BiNotepad, BiPhoneIncoming } from 'react-icons/bi';
import { GrNotification } from 'react-icons/gr';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { Input } from '@chakra-ui/react';
import Footer from '../../components/Footer';
import Profile from '../../components/Profile';
import { Link } from 'react-router-dom';

function Account() {
  const [isUsername, setIsUsername] = useState("urvangibran");
  const [imageUrl, setImageUrl] = useState('https://bit.ly/kent-c-dodds');
  const [accountSubMenuOpen, setAccountSubMenuOpen] = useState(true);
  const [accountActive, setAccountActive] = useState(false)
  const [orderSubMenuOpen, setOrderSubMenuOpen] = useState(false);
  const [orderActive, setOrderActive] = useState(false)
  const [notificationSubMenuOpen, setNotificationSubMenuOpen] = useState(false);
  const [notificationActive, setNotificationActive] = useState(false)
  const [voucherSubMenuOpen, setVoucherSubMenuOpen] = useState(false);
  const [voucherActive, setVoucherActive] = useState(false)
  const [coinSubMenuOpen, setCoinSubMenuOpen] = useState(false);
  const [coinActive, setCoinActive] = useState(false)

  const reset = () => {
    setAccountActive(false)
    setAccountSubMenuOpen(false)
    setCoinActive(false)
    setCoinSubMenuOpen(false)
    setNotificationActive(false)
    setNotificationSubMenuOpen(false)
    setOrderActive(false)
    setOrderSubMenuOpen(false)
    setVoucherActive(false)
    setVoucherSubMenuOpen(false)
  }

  const toggleAccountSubMenu = () => {
    reset()
    setAccountActive(!accountActive)
    setAccountSubMenuOpen(!accountSubMenuOpen);
  };

  const toggleOrderSubMenu = () => {
    reset()
    setOrderActive(!orderActive)
    setOrderSubMenuOpen(!orderSubMenuOpen);
  };

  const toggleNotificationSubMenu = () => {
    reset()
    setNotificationActive(!notificationActive)
    setNotificationSubMenuOpen(!notificationSubMenuOpen)
  };

  const toggleVoucherSubMenu = () => {
    reset()
    setVoucherActive(!voucherActive)
    setVoucherSubMenuOpen(!voucherSubMenuOpen)
  };

  const toggleCoinSubMenu = () => {
    reset()
    setCoinActive(!coinActive)
    setCoinSubMenuOpen(!coinSubMenuOpen)
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
                  <h5 className={`font-semibold cursor-pointer hover:text-[#2c7da0]  ${!accountActive && "text-[#2c7da0]"} `} onClick={toggleAccountSubMenu}>My Account</h5>
                </div>
                {accountSubMenuOpen && (
                  <div className='pl-9'>
                    <Link to="/account/profile">
                      <h5 className='mb-3 cursor-pointer text-[#2c7da0]'>Profile</h5>
                    </Link>
                    <Link to="/account/bank&cards">
                      <h5 className='mb-3 cursor-pointer hover:text-[#2c7da0]'>Bank & Cards</h5>
                    </Link>
                    <Link to="/account/address">
                      <h5 className='mb-3 cursor-pointer hover:text-[#2c7da0]'>Address</h5>
                    </Link>
                    <Link to="/account/password">
                      <h5 className='mb-3 cursor-pointer hover:text-[#2c7da0]'>Change Password</h5>
                    </Link>
                    <Link to="/account/notifications">
                      <h5 className='mb-4 cursor-pointer hover:text-[#2c7da0]'>Notification Settings</h5>
                    </Link>
                  </div>
                )}
                <div className='flex items-center gap-2 mb-3'>
                  <BiNotepad className='w-6 h-6 text-[#A3B5D6] ' />
                  <h5 className={`font-semibold cursor-pointer hover:text-[#2c7da0] ${orderActive && "text-[#2c7da0]"} `} onClick={toggleOrderSubMenu}>My Orders</h5>
                </div>
                {orderSubMenuOpen && (
                  <div className='pl-9'>
                    <h5 className='mb-3 cursor-pointer hover:text-[#2c7da0]'>Last Week</h5>
                    <h5 className='mb-4 cursor-pointer hover:text-[#2c7da0]'>Last Month</h5>
                  </div>
                )}
                <div className='flex items-center gap-2 mb-3'>
                  <GrNotification className='w-6 h-6 text-[#E27C63]' />
                  <h5 className={`font-semibold cursor-pointer hover:text-[#2c7da0] ${notificationActive && "text-[#2c7da0]"}`} onClick={toggleNotificationSubMenu}>Notifications</h5>
                </div>
                {notificationSubMenuOpen && (
                  <div className='pl-9'>
                    <h5 className='mb-3 cursor-pointer hover:text-[#2c7da0]'>Order Status</h5>
                    <h5 className='mb-4 cursor-pointer hover:text-[#2c7da0]'>GMarket Promos</h5>
                    <h5 className='mb-4 cursor-pointer hover:text-[#2c7da0]'>GMarket Info</h5>
                  </div>
                )}
                <div className='flex items-center gap-2 mb-3'>
                  <BsFillTicketDetailedFill className='w-6 h-6 text-[#E15F3F]' />
                  <h5 className={`font-semibold cursor-pointer hover:text-[#2c7da0] ${voucherActive && "text-[#2c7da0]"} `} onClick={toggleVoucherSubMenu} >My Vouchers</h5>
                </div>
                {voucherSubMenuOpen && (
                  <div className='pl-9'>
                    <h5 className='mb-3 cursor-pointer hover:text-[#2c7da0]'>Voucher Management</h5>
                    <h5 className='mb-4 cursor-pointer hover:text-[#2c7da0]'>Redeem Vouchers</h5>
                    <h5 className='mb-4 cursor-pointer hover:text-[#2c7da0]'>Voucher History</h5>
                    <h5 className='mb-4 cursor-pointer hover:text-[#2c7da0]'>Coupon Center</h5>
                  </div>
                )}
                <div className='flex items-center gap-2 mb-3'>
                  <AiOutlineDollarCircle className='w-6 h-6 text-[#E8AE3C]' />
                  <h5 className={`font-semibold cursor-pointer hover:text-[#2c7da0] ${voucherActive && "text-[#2c7da0]"} `} onClick={toggleCoinSubMenu} >My GMarket Coins</h5>
                </div>
                {coinSubMenuOpen && (
                  <div className='pl-9'>
                    <h5 className='mb-3 cursor-pointer hover:text-[#2c7da0]'>My Coins</h5>
                    <h5 className='mb-4 cursor-pointer hover:text-[#2c7da0]'>Virtual Currency</h5>
                    <h5 className='mb-4 cursor-pointer hover:text-[#2c7da0]'>Coin Balance</h5>
                  </div>
                )}
              </div>
            </div>
            <Profile
              isUsername={isUsername}
              imageUrl={imageUrl}
              updateUsername={setIsUsername}
              updateImageUrl={setImageUrl}
            />
          </div>
        </div>
      </div >
      <Footer />
    </div>
  )
}

export default Account