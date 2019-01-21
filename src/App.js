import React from 'react';
import {Admin, Resource } from 'react-admin';
// import {ListGuesser, EditGuesser} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserList from './components/users';
import {PostList, PostEdit, PostCreate} from './components/posts';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} />
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate}/>
  </Admin>
);

export default App;