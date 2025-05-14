import {
    Home
} from './pages';
import {Layout} from './containers';

export const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
]