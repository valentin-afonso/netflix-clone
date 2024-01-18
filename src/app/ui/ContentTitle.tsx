import Image from 'next/image'
import Title from '@/app/ui/Title';

export default function ContentTitle() {

  return (
    <div className='absolute bottom-1/2 left-5 z-10'>
        <Image
            src="/logo-blade-runner.webp"
            width={868}
            height={417}
            alt="cover"
            className='w-56'
        />
        <Title>🔥 Welcome on Netflix clone</Title>
    </div>
  )
}
