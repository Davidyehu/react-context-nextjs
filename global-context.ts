import React from "react";
import { createContext } from "react";

export const LoadingContext = createContext<{
  loading: boolean;
  setLoading: React.Dispatch<boolean>;
}>({ loading: false, setLoading: (loading: boolean) => {} });
