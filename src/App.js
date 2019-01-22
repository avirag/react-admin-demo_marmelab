import React from 'react';
import {Admin, Resource } from 'react-admin';
// import {ListGuesser, EditGuesser} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserList from './components/users';
import {PostList, PostEdit, PostCreate} from './components/posts';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './components/dashboard';
import authProvider from './authProvider'

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="users" list={UserList} icon={PostIcon} />
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={UserIcon}/>
  </Admin>
);

export default App;