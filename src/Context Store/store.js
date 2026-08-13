import { createContext , useState , useContext} from "react";
const AppContext = createContext();

export const AppProvider = ({children})=>{
const [isLoggedIn, setIsLoggedIn] = useState(true);
const [user, setUser] = useState(null);
const [isSideBarOpen, setIsSideBarOpen] = useState(false);
const [isMobile, setIsMobile] = useState(getdeviceType());
const [isPopup, setIsPopup] = useState(false)
const [isManager, setIsManager] = useState(false)
const [isHRAdmin, setIsHRAdmin] = useState(true)


function getdeviceType() {
  const userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.includes("mobile")) {
    return true; // Mobile device
  } else {
    return false; // Desktop device
  }
}




  const sharedItems = {
    isLoggedIn,
    setIsLoggedIn,
    user,
    setUser,
    isSideBarOpen,
    setIsSideBarOpen,
    isMobile,
    setIsMobile, isPopup, setIsPopup,isManager, isHRAdmin 
  }
  
  return (
    <AppContext.Provider value={sharedItems}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
} ;