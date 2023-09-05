import { useSelector } from 'react-redux';
import plural from 'ru-plurals';
import { Alert } from 'antd';

import useFilter from '../../hooks/useFilter';

import styles from './Ticket.module.css';

function Ticket() {
  const { ticketsDate, sortedTickets, visibleTickets } = useSelector((state) => state.aviasalesApp);
  const filters = useSelector((state) => state.aviasalesCheckbox.filters);
  const filteredTickets = useFilter(
    // eslint-disable-next-line no-nested-ternary
    sortedTickets.length > 0 ? [].concat(...sortedTickets) : ticketsDate.length > 0 ? [].concat(...ticketsDate) : [],
    filters
  );

  const getTimes = (startTime, duration) => {
    const endTime = new Date(startTime).getTime() + duration * 60 * 1000;
    const startMinutes =
      new Date(startTime).getMinutes() < 10 ? `0${new Date(startTime).getMinutes()}` : new Date(startTime).getMinutes();
    const startHours =
      new Date(startTime).getHours() < 10 ? `0${new Date(startTime).getHours()}` : new Date(startTime).getHours();
    const endMinutes =
      new Date(endTime).getMinutes() < 10 ? `0${new Date(endTime).getMinutes()}` : new Date(endTime).getMinutes();
    const endHours =
      new Date(endTime).getHours() < 10 ? `0${new Date(endTime).getHours()}` : new Date(endTime).getHours();
    return `${startHours}:${startMinutes}-${endHours}:${endMinutes}`;
  };
  const getDurationTime = (duration) => {
    const hours = Math.floor(duration / 60) < 10 ? `${Math.floor(duration / 60)}` : Math.floor(duration / 60);
    const minutes = duration - hours * 60;
    return `${hours}ч ${minutes}м`;
  };

  const transfers = plural('пересадка', 'пересадки', 'пересадок');

  if (!filteredTickets.length) {
    return (
      <Alert
        message="Внимание"
        description="Рейсов, подходящих под заданные фильтры, не найдено."
        type="info"
        showIcon
        style={{ marginTop: 10 }}
      />
    );
  }

  // eslint-disable-next-line array-callback-return
  return filteredTickets.slice(0, visibleTickets).map((ticket, index) => (
    <section key={`id${Date.now() + index}`} className={styles.section}>
      <div className={styles.ticket_container}>
        <div className={styles.ticket_header}>
          <span>{ticket.price.toLocaleString('ru-RU')}</span>
          <div>
            <img src={`https://pics.avs.io/99/36/${ticket.carrier}.png`} alt="" />
          </div>
        </div>
        <div className={styles.ticket_body}>
          <section className={styles.ticket_body__track}>
            <div>
              <span>{`${ticket.segments[0].origin}-${ticket.segments[0].destination}`}</span>
              <span>{getTimes(ticket.segments[0].date, ticket.segments[0].duration)}</span>
            </div>
            <div>
              <span>{`${ticket.segments[1].origin}-${ticket.segments[1].destination}`}</span>
              <span>{getTimes(ticket.segments[1].date, ticket.segments[1].duration)}</span>
            </div>
          </section>

          <section className={styles.ticket_body__time}>
            <div>
              <span>В пути</span>
              <span>{getDurationTime(ticket.segments[0].duration)}</span>
            </div>
            <div>
              <span>В пути</span>
              <span>{getDurationTime(ticket.segments[1].duration)}</span>
            </div>
          </section>

          <section className={styles.ticket_body__transfer}>
            <div>
              <span>{transfers(ticket.segments[0].stops.length)}</span>
              <span>{ticket.segments[0].stops.join(', ') || '...'}</span>
            </div>
            <div>
              <span>{transfers(ticket.segments[1].stops.length)}</span>
              <span>{ticket.segments[1].stops.join(', ') || '...'}</span>
            </div>
          </section>
        </div>
      </div>
    </section>
  ));
}

export default Ticket;
