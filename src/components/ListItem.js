import React from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  UIManager,
} from 'react-native';
import {CardSection} from './common';
import {connect} from 'react-redux';
import * as actions from '../actions';

const ListItem = props => {
  UIManager.setLayoutAnimationEnabledExperimental(true);
  const {titleStyle} = styles;
  const {id, title, description} = props.library.item;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        props.selectLibrary(id);
      }}>
      <View>
        <CardSection>
          <Text style={titleStyle}>{title}</Text>
        </CardSection>
        <Text>{props.expanded ? description : null}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.index;
  return {expanded};
};

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};
export default connect(mapStateToProps, actions)(ListItem);
