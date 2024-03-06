import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <ul className={styles.statlist}>
      {stats.map(({ id, label, percentage }, index) => (
        <li className={`${styles.item} ${styles[`color${index}`]}`} key={id}>
          <span className={styles.label}>{label}</span>
          <span className={styles.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Statistics;
