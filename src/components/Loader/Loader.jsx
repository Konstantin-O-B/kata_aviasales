import styles from '../Ticket/Ticket.module.css';

function Loader() {
  return (
    <div className={styles.loader_container}>
      <span className={styles.loader} />
    </div>
  );
}

export default Loader;
