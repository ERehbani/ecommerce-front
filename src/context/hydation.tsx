"use client";

import * as React from "react";
import { useUserStore } from "@/context/store";

const Hydration = ({ children }: { children: React.ReactNode }) => {
  const [isHydrated, setIsHydrated] = React.useState(false);

  React.useEffect(() => {
    console.log("Hydration component mounted");
    console.log("Initial store state:", useUserStore.getState());

    const rehydrationResult = useUserStore.persist.rehydrate();

    // Check if rehydrationResult is a Promise
    if (rehydrationResult instanceof Promise) {
      rehydrationResult
        .then(() => {
          console.log("Store rehydrated");
          console.log("Rehydrated store state:", useUserStore.getState());
          setIsHydrated(true);
        })
        .catch((error: unknown) => {
          console.error("Error during rehydration:", error);
          setIsHydrated(true); // Set to true even on error to allow rendering
        });
    } else {
      // If it's not a Promise, it means rehydration was synchronous
      console.log("Store rehydrated synchronously");
      console.log("Rehydrated store state:", useUserStore.getState());
      setIsHydrated(true);
    }

    return () => {
      console.log("Hydration component unmounted");
    };
  }, []);

  if (!isHydrated) {
    console.log("Rendering loading state");
    return <div>Loading...</div>;
  }

  console.log("Rendering children");
  return <>{children}</>;
};

export default Hydration;