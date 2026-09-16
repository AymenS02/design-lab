import {
  createContext,
  useContext,
} from "react";


interface TransitionContextType {
  navigateWithTransition: (path: string) => void;
} // for props, just says that the context will have a function called navigateWithTransition that takes a string and returns void


export const TransitionContext =
  createContext<TransitionContextType | undefined>(
    undefined
  ); // this is creating a context that we use to connect the 2 files PageTransition.tsx and TransitionLink.tsx


export function usePageTransition() {
  const context = useContext(TransitionContext);

  if (!context) {
    throw new Error(
      "usePageTransition must be inside PageTransition"
    );
  }

  return context;
}