import { Route, Routes } from "react-router"
import MainPage from "./pages/MainPage"
import AddCreator from "./pages/AddCreator"
import UpdateCreator from "./pages/UpdateCreator"
import { Toaster } from 'react-hot-toast'
import CreatorPage from "./pages/CreatorPage"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<MainPage/>} />
        <Route path = "/addcreator" element = {<AddCreator/>} />
        <Route path ="/updatecreator/:id" element = {<UpdateCreator/>} />
        <Route path ="/getcreator/:id" element = {<CreatorPage />} />
      </Routes>
      
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: '#333',
          color: '#fff',
        },
        success: {
          iconTheme: {
            primary: '#10B981',
            secondary: '#1F2937',
          },
        },
        error: {
          iconTheme: {
            primary: '#EF4444',
            secondary: '#1F2937',
          },
        },
      }}
    />
    </div>
  )
}

export default App

