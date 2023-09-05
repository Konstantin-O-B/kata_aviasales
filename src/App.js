import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import Checkbox from './components/Checkbox/Checkbox';
import Header from './components/header/Header';
import Filter from './components/Filter/Filter';
import Ticket from './components/Ticket/Ticket';
import Button from './components/Button/Button';
import getResources from './services/API_SERVICE/service_api';
import { setItemToLS, getItemFromLS } from './services/LS_SERVICE/service_ls';
import { SEARCH_URL, TICKETS_URL } from './services/API_SERVICE/constants';
import { addTickets, setLoader } from './store/aviasalesAppSlice';
import ScrollUp from './components/Button/ScrollUp';
import Loader from './components/Loader/Loader';

function App() {
  const { ticketsDate, loader } = useSelector((state) => state.aviasalesApp);
  const dispatch = useDispatch();

  const searchID = useQuery({
    queryKey: ['searchID'],
    queryFn: () => getResources(SEARCH_URL),
  });

  const ticketsPack = useQuery({
    queryKey: ['ticketsPack', ticketsDate],
    queryFn: () => {
      const id = getItemFromLS('searchID');
      const newURL = new URL(TICKETS_URL);
      newURL.searchParams.append('searchId', id);
      return getResources(newURL.toString());
    },
  });

  function getTickets() {
    if (ticketsPack.data) {
      dispatch(setLoader(true));
      if (ticketsPack.data.stop && ticketsDate.length !== 0) {
        dispatch(setLoader(false));
        /* console.log('Все билеты получены'); */
        return;
      }
      dispatch(addTickets(ticketsPack.data.tickets));
    }
  }

  useEffect(() => {
    if (!searchID.isLoading) {
      setItemToLS('searchID', searchID.data.searchId);
      getTickets();
    }
  }, [searchID.isLoading, ticketsPack.data]);

  return (
    <div className="App">
      <Header />
      <div className="main_container">
        <div className="main_left-container">
          <Checkbox />
          <ScrollUp />
        </div>
        <div className="main_right-container">
          <Filter />
          {loader && <Loader />}
          <Ticket />
          <Button />
        </div>
      </div>
    </div>
  );
}

export default App;
