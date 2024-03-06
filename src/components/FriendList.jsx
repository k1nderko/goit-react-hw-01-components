import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(({ id, ...friend }) => (
      <FriendListItem key={id} {...friend} />
    ))}
  </ul>
);

export default FriendList;
