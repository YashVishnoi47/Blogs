'use client';

import { UserProfile } from '@clerk/nextjs';


export default function DashProfile() {
  return (
    <div className='flex relative justify-center h-full items-center w-full'>
      <div className="bg absolute w-full h-full"></div>
      <UserProfile
        
        routing='hash'
      />
    </div>
  );
}