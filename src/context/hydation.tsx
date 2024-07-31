"use client";

import * as React from "react";
import { useBearStore } from "@/context/store";

const Hydration = () => {
  React.useEffect(() => {
    useBearStore.persist.rehydrate();
  }, []);

  return null;
};

export default Hydration;