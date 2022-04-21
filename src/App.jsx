import React, {lazy, Suspense} from 'react'
import MyComp from './components/myComp'
import LinearProgress from '@mui/material/LinearProgress';
const FRParent =  lazy( ()=> import('./components/FRParent'))


function App() {
  return (
    <div style={{display: "flex", 
    justifyContent: "center",
     backgroundColor : '#faf7eb', 
     alignItems: 'center', 
     marginTop: '10vh',
     padding: '100px'}} >
        <div>
        <p> App created by ajmal</p>
        <Suspense fallback={<LinearProgress />} >
        <MyComp />
        <FRParent />
        </Suspense>

    
 
        </div>
    
    </div>

  )
}

export default App