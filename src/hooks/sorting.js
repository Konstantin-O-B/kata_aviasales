const sorting = (tickets, id) => {
  // eslint-disable-next-line consistent-return, react-hooks/rules-of-hooks
  // eslint-disable-next-line array-callback-return, consistent-return
  const newTickets = tickets.map((arr) => {
    const array = [...arr];
    if (id === '0') {
      array.sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      });
      return array;
    }
    if (id === '1') {
      array.sort((a, b) => {
        const totalDurationA = a.segments[0].duration + a.segments[1].duration;
        const totalDurationB = b.segments[0].duration + b.segments[1].duration;
        if (totalDurationA > totalDurationB) {
          return 1;
        }
        if (totalDurationA < totalDurationB) {
          return -1;
        }
        return 0;
      });
      return array;
    }
    if (id === '2') {
      array.sort((a, b) => {
        const totalDurationA = a.segments[0].duration + a.segments[1].duration;
        const totalDurationB = b.segments[0].duration + b.segments[1].duration;
        if (a.price / totalDurationA > b.price / totalDurationB) {
          return 1;
        }
        if (a.price / totalDurationA < b.price / totalDurationB) {
          return -1;
        }
        return 0;
      });
      return array;
    }
  });
  return newTickets;
};

export default sorting;
