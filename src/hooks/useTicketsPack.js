import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

import getResources from '../services/API_SERVICE/service_api';
import { TICKETS_URL } from '../services/API_SERVICE/constants';
import { getItemFromLS } from '../services/LS_SERVICE/service_ls';

function useTicketPack() {
  const { ticketsDate } = useSelector((state) => state.aviasalesApp);
  const ticketsPack = useQuery({
    queryKey: ['ticketsPack', ticketsDate],
    queryFn: () => {
      const id = getItemFromLS('searchID');
      const newURL = new URL(TICKETS_URL);
      newURL.searchParams.append('searchId', id);
      return getResources(newURL.toString());
    },
  });
  return ticketsPack;
}

export default useTicketPack;
