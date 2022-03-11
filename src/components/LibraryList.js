import React from 'react';
import {connect} from 'react-redux';
import {FlatList} from 'react-native';
import ListItem from './ListItem';

const LibraryList = props => {
  console.log(props.libraries);
  return (
    <FlatList
      data={props.libraries}
      keyExtractor={library => library.id}
      renderItem={renderItem}
    />
  );
};

const mapStateToProps = state => {
  return {libraries: state.libraries};
};

const renderItem = library => {
  return <ListItem library={library} />;
};

export default connect(mapStateToProps)(LibraryList);
