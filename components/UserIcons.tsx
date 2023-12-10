import Image from 'next/image'


const UserIcons = () => {
  return (
    <div className='max-w-[1500px] mx-auto gap-6 mt-[100px] mb-[128px] items-center justify-center flex flex-col'>
      <p className='text-center text-base text-[#525252]'>
      Loved by {' '}
      <span className='text-[#8036FF]'>20,000</span> 
     {' '} users around the world
      </p>
      <Image
      src='/laptop-landing-2.png'
        alt='laptop'
        width={1040}
        height={800}
        className="w-[336px]"
        />
    </div>
  )
}

export default UserIcons