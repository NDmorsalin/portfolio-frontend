import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import App from '../App';
import AllAdminProjects from '../Pages/AllAdminProjects';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path:'adminProjects',
                element: <AllAdminProjects/>
            }
        ]
    }
]);

export default router;