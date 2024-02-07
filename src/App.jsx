import './App.css'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './routes.jsx/Routes'

function App() {
  return (
    <>
      <main className="px-4 pt-6 pb-3 font-Inter lg:px-40 lg:pt-20" >
        <BrowserRouter>
          <Header />
          <MyRoutes/>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App


