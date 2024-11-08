import style from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";
import PropTypes from "prop-types";

const map = ({ avatar, name, isOnline, id }) => (
  <FriendListItem
    avatar={avatar}
    name={name}
    isOnline={isOnline}
    key={id}
  ></FriendListItem>
);

const FriendList = ({ friends }) => (
  <ul className={style.friendlist}>{friends.map(map)}</ul>
);

export default FriendList;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
