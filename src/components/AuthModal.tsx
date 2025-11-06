import { React } from "react";
import { useNavigate } from "react-router-dom";
export interface AuthModalProps{
    modalInteract: ()=>void
}
export function AuthModal({modalInteract}:AuthModalProps) {
    const navigate = useNavigate()
  const handleRedirect=()=>{
    navigate("auth")
    modalInteract()
  }

  const handleParentClick=()=>{
    console.log("test");
    modalInteract()
  }
  const handleChildClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Child clicked!");
  };
  return (
    <div className="bg-black/20 backdrop-blur-md border-b border-white/30 w-full h-full fixed top-0 left-0 z-[900] flex items-center justify-center" onClick={handleParentClick}>
      <div className="max-w-[600px] w-[90%] h-[500px] bg-white px-7 rounded-2xl relative z-[902] flex items-center justify-center" onClick={handleChildClick}>
        <div className="w-full">
          <h1 className="font-bold text-5xl text-center">Welcome</h1>
          <p className="text-center text-xl mt-7">Sign In To Save The Energy!</p>
          <button class="text-lg flex items-center mt-8 mb-8 justify-center w-full max-w-sm mx-auto px-4 py-4 bg-white border border-gray-300 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 text-gray-700 font-medium" onClick={handleRedirect}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              className="inline-block mr-2"
            >
              <path
                fill="#4285F4"
                d="M17.64 9.2c0-.63-.06-1.25-.16-1.84H9v3.48h4.84c-.21 1.12-.85 2.07-1.8 2.7v2.24h2.92c1.71-1.58 2.68-3.9 2.68-6.58z"
              />
              <path
                fill="#34A853"
                d="M9 18c2.43 0 4.47-.8 5.96-2.16l-2.92-2.24c-.81.54-1.85.85-3.04.85-2.34 0-4.33-1.58-5.04-3.72H1.02v2.34C2.5 15.85 5.5 18 9 18z"
              />
              <path
                fill="#FBBC05"
                d="M3.92 11.79c-.18-.54-.28-1.12-.28-1.79s.1-1.25.28-1.79V5.87H1.02C.37 7.01 0 8.43 0 9.99s.37 2.98 1.02 4.12l2.9-2.32z"
              />
              <path
                fill="#EA4335"
                d="M9 3.59c1.32 0 2.5.45 3.43 1.34l2.57-2.57C13.44.86 11.42 0 9 0 5.5 0 2.5 2.15 1.02 5.87l2.9 2.33C4.67 5.17 6.66 3.59 9 3.59z"
              />
            </svg>
            Continue with Google
          </button>
          <p className="text-center text-xl">By signing in, you agree to our <a href="" className="text-blue-700 underline">Terms & Privacy Policy</a> </p>
        </div>
      </div>
    </div>
  );
}
