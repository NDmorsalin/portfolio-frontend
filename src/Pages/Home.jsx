import React from 'react';
import Circle from '../Components/Circle';
import AdminView from '../feature/AdminView';

function Home() {
    return (
        <div className="h-[150vh]">
            <Circle w="w-[40rem]" h="h-[40rem]" left="-left-[25rem]" top="-top-[25rem]" />
            <AdminView />
        </div>
    );
}
export default Home;
