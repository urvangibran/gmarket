import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';

function FooterComponent() {
    return (
        <div className='bg-gray-100 py-10'>
            <div className=' mx-auto flex justify-center ml-4 md:ml-0'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-14 max-w-6xl'>
                    <div>
                        <h2 className='font-bold text-lg mb-2'>GMarket</h2>
                        <h3 className='text-gray-600 text-sm mb-1 hover:text-[#012A4A] hover:font-medium icursor-pointer'>About Gmarket</h3>
                        <h3 className='text-gray-600 text-sm mb-1 hover:text-[#012A4A] hover:font-medium cursor-pointer'>Intellectual Property Rights</h3>
                        <h3 className='text-gray-600 text-sm mb-1 hover:text-[#012A4A] hover:font-medium cursor-pointer'>Career</h3>
                        <h3 className='text-gray-600 text-sm mb-1 hover:text-[#012A4A] hover:font-medium cursor-pointer'>Blog</h3>
                        <h3 className='text-gray-600 text-sm mb-1 hover:text-[#012A4A] hover:font-medium cursor-pointer'>Bridestory</h3>
                        <h3 className='text-gray-600 text-sm mb-1 hover:text-[#012A4A] hover:font-medium cursor-pointer'>Tokopedia Parents</h3>
                        <h3 className='text-gray-600 text-sm mb-1 hover:text-[#012A4A] hover:font-medium cursor-pointer'>Mitra Blog</h3>
                        <h3 className='text-gray-600 text-sm mb-1 hover:text-[#012A4A] hover:font-medium cursor-pointer'>GMarket Affiliate Program</h3>
                        <h3 className='text-gray-600 text-sm mb-1 hover:text-[#012A4A] hover:font-medium cursor-pointer'>GMarket B2B Digital</h3>
                    </div>
                    <div>
                        <h2 className='font-bold text-lg mb-2'>Buy</h2>
                        <h3 className='text-gray-600 text-sm mb-1 hover:text-[#012A4A] hover:font-medium cursor-pointer'>Bill & Top Up</h3>
                        <h3 className='text-gray-600 text-sm mb-1 hover:text-[#012A4A] hover:font-medium cursor-pointer'>Trade In Handphone</h3>
                        <h3 className='text-gray-600 text-sm mb-1 hover:text-[#012A4A] hover:font-medium cursor-pointer'>GMarket COD</h3>
                    </div>
                    <div>
                        <h2 className='font-bold text-lg mb-2'>Sell</h2>
                        <h3 className='text-gray-600 text-sm mb-1 hover:text-[#012A4A] hover:font-medium cursor-pointer'>Bill & Top Up</h3>
                        <h3 className='text-gray-600 text-sm mb-1 hover:text-[#012A4A] hover:font-medium cursor-pointer'>Trade In Handphone</h3>
                        <h3 className='text-gray-600 text-sm mb-1 hover:text-[#012A4A] hover:font-medium cursor-pointer'>Seller Education Centre</h3>
                        <h3 className='text-gray-600 text-sm mb-1 hover:text-[#012A4A] hover:font-medium cursor-pointer'>Mitra Toppers</h3>
                        <h3 className='text-gray-600 text-sm mb-1 hover:text-[#012A4A] hover:font-medium cursor-pointer'>Register Official Store</h3>
                    </div>
                    <div>
                        <h2 className='font-bold text-lg mb-2'>Guide and Help</h2>
                        <h3 className='text-gray-600 text-sm mb-1 hover:text-[#012A4A] hover:font-medium cursor-pointer'>GMarket Care</h3>
                        <h3 className='text-gray-600 text-sm mb-1 hover:text-[#012A4A] hover:font-medium cursor-pointer'>Terms and Condition</h3>
                        <h3 className='text-gray-600 text-sm mb-1 hover:text-[#012A4A] hover:font-medium cursor-pointer'>Privacy</h3>
                        <h3 className='text-gray-600 text-sm mb-1 hover:text-[#012A4A] hover:font-medium cursor-pointer'>Mitra</h3>
                    </div>
                </div>
            </div>
            <hr className='border-t my-6' />
            <div className='container mx-auto text-center text-gray-600'>
                <div className='flex justify-center space-x-4'>
                    <BsFacebook className='text-2xl hover:text-blue-500 cursor-pointer' />
                    <FaInstagramSquare className='text-2xl hover:text-purple-600 cursor-pointer rounded-[50%]' />
                    <AiFillTwitterCircle className='text-2xl hover:text-blue-400 cursor-pointer' />
                </div>
                <p className='mt-4'>&copy; GMarket {new Date().getFullYear()}</p>
            </div>
        </div>
    );
}

export default FooterComponent;
