import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';
import SideNavbar from '../components/SideNavbar/SideNavbar';
import TaskData from "../data/Task.json";
import { useState } from 'react';
import { DataContext } from '../hook/dataContext';


export default function PublicLayout() {
  const [tasks, setTasks] = useState(TaskData);

  return (
    <>
      <DataContext.Provider value={{ tasks, setTasks }}>
        <div className="layoutMain">
          <SideNavbar />
          <div className="body-bg">
            <Header />
            <main>
              <article>
                <Outlet />
              </article>
            </main>
            <Footer />
          </div>
        </div>
      </DataContext.Provider>
    </>
  );
}
