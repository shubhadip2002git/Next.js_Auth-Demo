"use client";

import { useAuth, useUser } from "@clerk/nextjs"; //hooks
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  //use one at a time between useAuth and useUser hooks

  // const { isLoaded, userId, sessionId, getToken } = useAuth();   // if need only userId to personal experience will use useAuth
  // if (!isLoaded || !userId) {
  //   return null;
  // }

  const { isLoaded, isSignedIn, user } = useUser(); // if need full user info will use useUser
  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};
