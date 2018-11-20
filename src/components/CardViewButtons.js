import React from 'react';
import Button from '../elements/Button';


export default class CardViewButtons extends React.Component {

  render() {
    const { adding, editing, isBlack} = this.props;
    const { handleAddClick, handleApplyClick, handleEditClick, handleRemoveClick} = this.props;
    return (
      <div>
      {adding && 
        <Button
          onClick={handleAddClick}
          inverse={isBlack}>
            Add
        </Button>}
      {editing &&
        <Button
          onClick={handleApplyClick}
          inverse={isBlack}>
            Apply
        </Button>}
      {(!adding && !editing) &&
        <div>
          <Button
            onClick={handleEditClick}
            inverse={isBlack}>
              Edit
          </Button>
          <Button
            onClick={handleRemoveClick}
            inverse={isBlack}>
              Remove
          </Button>
        </div>}
      </div>
    )
  }
}