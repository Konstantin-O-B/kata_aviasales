import { useMemo } from 'react';

function useFilter(tickets, filters) {
  const filteredTickets = useMemo(() => {
    if (filters[0].checked) {
      return tickets;
    }
    return tickets.filter((ticket) => {
      const stops = ticket.segments.map((seg) => seg.stops.length);
      return filters.some((filter) => filter.checked && stops.includes(filter.transfers));
    });
  }, [tickets, filters]);

  return filteredTickets;
}

export default useFilter;
