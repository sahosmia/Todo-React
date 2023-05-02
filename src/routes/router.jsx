import { Route, Routes } from 'react-router-dom';

import PublicLayout from '../layouts/PublicLayout';

// Page 
import Important from '../pages/Important';
import Today from '../pages/Today';
import Completed from '../pages/Completed';
import Due from '../pages/Due';
import Tasks from '../pages/Tasks';


export default function router() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Today />} />
        
   
        <Route path='tasks' element={<Tasks />} />
        <Route path='important' element={<Important />} />
        <Route path='completed' element={<Completed />} />
        <Route path='due' element={<Due />} />

      </Route>
    </Routes>
  );
}
