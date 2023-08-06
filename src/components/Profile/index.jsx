import React, { useState } from 'react'
import { Avatar, Box, Button, InputGroup, InputLeftElement, Text, WrapItem } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { BiPhoneIncoming } from 'react-icons/bi';

function Profile() {
    const [imageSizeError, setImageSizeError] = useState(false);
    const [imageFormatError, setImageFormatError] = useState(false);
    const [isUsername, setIsUsername] = useState("urvangibran")
    const [imageUrl, setImageUrl] = useState('https://bit.ly/kent-c-dodds');


    const handleImageUpload = (event) => {
        const file = event.target.files[0];

        if (file) {
            const allowedFormats = ['image/jpeg', 'image/png'];
            const maxSize = 1024 * 1024; // 1 MB

            if (allowedFormats.includes(file.type)) {
                if (file.size <= maxSize) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        setImageUrl(e.target.result);
                        setImageSizeError(false);
                        setImageFormatError(false);
                    };
                    reader.readAsDataURL(file);
                } else {
                    setImageSizeError(true);
                    setImageFormatError(false);
                }
            } else {
                setImageFormatError(true);
                setImageSizeError(false);
            }
        }
    };
    const handleUsername = (event) => {
        setIsUsername(event.target.value)
    }

    return (
        <div className='bg-white mt-7 pl-7 pt-4 rounded-md'>
            <div className=''>
                <h4 className='font-semibold' >My Profile</h4>
                <h5>Manage your profile information to control, protect, and secure your account</h5>
            </div>
            <hr className='my-4 text-gray-500' />
            <div className='grid grid-cols-[2fr,1fr] gap-8 pr-8 pb-8'>
                <div className='bg-white p-6 rounded-lg shadow-md'>
                    <div className='mb-6 flex items-center'>
                        <label className='w-32 text-gray-600 text-left pr-4'>Username</label>
                        <input className='border-2 border-gray-300 rounded-lg w-full ml-10 py-2 px-3 focus:outline-none focus:border-blue-500' type="text" value={isUsername} onChange={handleUsername} />
                    </div>

                    <div className='mb-6 flex items-center'>
                        <label className='w-32 text-gray-600 text-left pr-4'>Full Name</label>
                        <input className='border-2 border-gray-300 rounded-lg w-full ml-10 py-2 px-3 focus:outline-none focus:border-blue-500' type="text" value="Muchammad Urvan Gibran Addhuha Bi Abra" />
                    </div>

                    <div className='mb-6 flex items-center'>
                        <label className='w-32 text-gray-600 text-left pr-4'>Instagram</label>
                        <h5 className='border-2 border-gray-300 rounded-lg p-2 bg-gray-100 flex-1'>urvangibran</h5>
                    </div>

                    <div className='mb-6 flex items-center'>
                        <label className='w-32 text-gray-600 text-left pr-4'>Email Address</label>
                        <h5 className='border-2 border-gray-300 rounded-lg p-2 bg-gray-100 flex-1'>urvngibran@gmail.com</h5>
                    </div>

                    <div className='mb-6 flex items-center'>
                        <label className='w-32 text-gray-600 text-left pr-4'>Phone Number</label>
                        <div>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <BiPhoneIncoming color='gray.300' />
                                </InputLeftElement>
                                <Input type='tel' placeholder='Phone number' value="123-456-789" />
                            </InputGroup>
                        </div>
                    </div>


                    <div className='mb-6 flex items-center '>
                        <label className='w-36 text-gray-600 text-left'>Shop Name</label>
                        <input className='border-2 border-gray-300 rounded-lg w-full ml-8 py-2 px-3 focus:outline-none focus:border-blue-500' type="text" value="GMarket Shop" />
                    </div>

                    <div className='mb-6 flex items-center'>
                        <label className='w-32 text-gray-600 text-left pr-4'>Gender</label>
                        <div className='flex items-center'>
                            <label htmlFor="man" className='mr-2'>Male</label>
                            <input id="man" className='border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500' type="radio" checked />
                            <label htmlFor="man" className='mx-2'>Female</label>
                            <input id="man" className='border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500' type="radio" />
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <label className='w-32 text-gray-600 text-left pr-4'>Date of Birth</label>
                        <input
                            className='border-2 border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500'
                            type="datetime-local"
                            value="2004-02-29T12:00"
                        />

                    </div>
                </div>

                <Box bg='gray.100' rounded='lg' p={6} textAlign='center'>
                    <div className='flex justify-center'>
                        <WrapItem>
                            <Avatar size='xl' name={isUsername} src={imageUrl} />
                        </WrapItem>
                    </div>

                    <div className='my-2'>
                        <label htmlFor='image-upload' style={{ display: 'block', mt: '4' }}>
                            <Button as='span' colorScheme='blue' size='sm'>
                                Upload Image
                            </Button>
                        </label>
                        <Input
                            id='image-upload'
                            type='file'
                            accept='.jpeg, .png'
                            style={{ display: 'none' }}
                            onChange={handleImageUpload}
                        />
                    </div>

                    <div className='text-sm w-32'>
                        <p>Image size: <br /> max. 1 MB</p>
                        <p>Image format: <br /> .JPEG, .PNG</p>
                    </div>
                    {imageSizeError && <Text color='red'>Image size exceeds 1 MB.</Text>}
                    {imageFormatError && <Text color='red'>Invalid image format. Allowed formats: .JPEG, .PNG</Text>}
                </Box>

            </div>


        </div>
    )
}

export default Profile