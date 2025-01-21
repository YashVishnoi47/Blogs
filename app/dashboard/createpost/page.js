'use client'
import React from "react";

import { useUser } from "@clerk/nextjs";

const createPost = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return null;
  }

  if(isSignedIn && user.publicMetadata.isAdmin){
      return <div>Create Post</div>;
  }else{
    return <h1 className="text-black">You are not allowed to enter</h1>
  }
};

export default createPost;
