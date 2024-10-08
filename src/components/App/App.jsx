import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import userData from '../../userData.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}
