import {Outlet} from 'react-router-dom';

import {Nav} from '../containers';
import {Sidebar} from '../components';

export default function Layout() {
    return (
        <>
            <Nav />
            <div className="mt-[28px]">
                <Sidebar />
                <div className="wrapper">
                    <Outlet />
                </div>
            </div>
        </>
    )
}