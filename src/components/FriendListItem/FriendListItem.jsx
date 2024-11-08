import style from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={clsx(style.item, isOnline ? style.statuson : style.statusof)}>
    <span className={style.status}></span>
    <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={style.name}>{name}</p>
  </li>
);

export default FriendListItem;
