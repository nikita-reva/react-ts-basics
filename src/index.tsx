import ReactDOM from 'react-dom';
import EventComponent from './events/EventComponent';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 24 },
  { name: 'Michael', age: 30 },
];

const App = () => {
  return (
    <div>
      <GuestList />
      <UserSearch users={users} />
      <EventComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
