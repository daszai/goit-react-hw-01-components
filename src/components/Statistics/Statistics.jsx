import style from "./Statistics.module.css";

const map = (item) => (
  <li className={style.item} key={item.id}>
    <span className={style.label}>{item.label}</span>
    <span className={style.percentage}>{item.percentage}%</span>
  </li>
);

const Statistics = ({ title, stats }) => (
  <section className={style.statistics}>
    {title && <h2 className={style.title}>{title}</h2>}
    <ul className={style["stat-list"]}>{stats.map(map)}</ul>
  </section>
);

export default Statistics;
