import React from 'react';
import { List, Edit, Create, Datagrid, SimpleForm, Filter } from 'react-admin';
import { TextField, ReferenceField, EditButton } from 'react-admin';
import { TextInput, ReferenceInput, SelectInput, LongTextInput } from 'react-admin';

const PostTitle = ({record}) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
}

const PostFilter = props => (
  <Filter {...props}>
    <TextInput label="Serach" source="q" alwaysOn />
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

export const PostList = props  => (
  <List {...props} filters={<PostFilter />}>
    <Datagrid>
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="id" />
      <TextField source="title" />
      <EditButton />
    </Datagrid>
  </List>
);

export const PostEdit = props => (
  <Edit title={<PostTitle />} {...props}>
      <SimpleForm>
          <ReferenceInput source="userId" reference="users">
            <SelectInput optionText="id" />
          </ReferenceInput>
          <TextInput source="id" />
          <TextInput source="title" />
          <TextInput source="body" />
      </SimpleForm>
  </Edit>
);

export const PostCreate = props => (
  <Create {...props}>
      <SimpleForm>
          <ReferenceInput source="userId" reference="users">
              <SelectInput optionText="name" />
          </ReferenceInput>
          <TextInput source="title" />
          <LongTextInput source="body" />
      </SimpleForm>
  </Create>
);
