'use client';

import {LuArrowLeftCircle} from 'react-icons/lu'
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

interface BackButtonProps {
    className?: string
    size?: number
}

const BackButton: React.FC<BackButtonProps> = ({className, size}) => {
    const router = useRouter()

    return ( <>
        <button onClick={() => router.back()}
        className={cn(`rounded-full h-[${size}px] hover:bg-purple-500 transition`, className)}>
            <LuArrowLeftCircle size={size}/>
        </button>
        
    </> );
}
 
export default BackButton;