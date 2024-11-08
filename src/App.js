import user from "./components/Profile/user.json";
import Profile from "./components/Profile/Profile.jsx";
import PropTypes from "prop-types";
import friends from "./components/FriendList/friends.json";
import FriendList from "./components/FriendList/FriendList.jsx";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";
import transactions from "./components/TransactionHistory/transactions.json";
import Statistics from "./components/Statistics/Statistics.jsx";
import statistics from "./components/Statistics/data.json";

const App = () => (
  <>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statistics}></Statistics>
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
