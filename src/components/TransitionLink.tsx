import { usePageTransition } from "./page-transition-context";

interface TransitionLinkProps {
  to: string;
  children: React.ReactNode;
} //these r props so we dont get type errors

export default function TransitionLink({
  to,
  children,
}: TransitionLinkProps) {

  const { navigateWithTransition } = usePageTransition(); // this gets the function from the context so we can use it in this component

  return (
    <button
      onClick={() => navigateWithTransition(to)} // this activates the function from the context and passes the path to it hence starting the transition and navigating to the new page
      className="text-left w-full"
    >
      {children}
    </button>
  );
}