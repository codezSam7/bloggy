import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import Blogger from './Blogger'
import Invento from './Invento'
import { ProductsProvider } from './context/ProductsContext'
import { AppNameProvider } from './context/AppNameContext'
//import Playground from './Playground'
//import Swal from 'sweetalert2'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Blogger />
        {/* <Playground /> */}
        {/* <AppNameProvider>
            <ProductsProvider>
                <Invento />
            </ProductsProvider>
        </AppNameProvider> */}
    </StrictMode>,
)
