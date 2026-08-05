import { createContext , useState , useContext} from "react";
const AppContext = createContext();

export const AppProvider = ({children})=>{
const [login, setLogin] = useState(false);


function login_func() {
    setLogin(true);
  }

  function login_func2() {
    setLogin(false);
  }

  const sharedItems = {
    login,
    login_func,
    login_func2
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