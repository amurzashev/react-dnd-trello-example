import React, { useState } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import Board from 'components/organisms/Board';
import Lane from 'components/molecules/Lane';
import CardWrap from 'components/molecules/CardWrap';
import Card from 'components/atoms/Card';
import Caption from 'components/atoms/Caption';
import NewItem from 'components/atoms/NewItem';
import Title from 'components/atoms/Title';
import TextInput from 'components/atoms/TextInput';
import { addTodo, editTodo } from 'duck/actions/todos';
import { addLane } from 'duck/actions/lanes';

// TODO: CLEAN UP

const CardComponent = ({ card, bindEditTodo, lane }) => {
  const [isEditing, setIsEditing] = useState(true);
  const preCheckEdit = e => {
    if (e.target.value && e.target.value !== card.value && e.target.value.trim().length) {
      bindEditTodo(lane.id, card.id, e.target.value);
    }
    setIsEditing(!isEditing);
  };
  return (
    <Card>
      {isEditing ? <TextInput style={{ paddingBottom: 2 }} autoFocus onBlur={e => preCheckEdit(e)} defaultValue={card.value} placeholder={card.value || 'Untitled'} /> : <Caption onClick={() => setIsEditing(!isEditing)} size='m' color='text'>{card.value || 'Untitled'}</Caption>}
    </Card>
  )
};

const CardWrapComponent = ({ lane, bindAddTodo, bindEditTodo }) => {
  const cardItems = Object.keys(lane.cards);
  return (
    <CardWrap>
      {cardItems.map(k => {
        const card = lane.cards[k];
        return (
          <CardComponent card={card} key={card.id} bindEditTodo={bindEditTodo} lane={lane} />
        );
      })}
      <NewItem onClick={() => bindAddTodo(lane.id)}>
        <Caption color='text' size='xs'>New</Caption>
      </NewItem>
    </CardWrap>
  );
}

const Home  = props => {
  const { board, bindAddTodo, bindAddLane, bindEditTodo } = props;
  const onDragEnd = result => {
    console.log('end');
    console.log(result);
  };
  const boardLanes = Object.keys(board.lanes);
  if (!boardLanes.length) {
    return null;
  }
  const lanes = boardLanes.map(k => {
    const lane = board.lanes[k];
    return (
      <Lane key={lane.id}>
        <Title title={lane.title} bg={lane.bg} />
        <CardWrapComponent lane={lane} bindAddTodo={bindAddTodo} bindEditTodo={bindEditTodo} />
      </Lane>
    );
  });
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Board>
        {lanes}
        <Lane>
          <NewItem onClick={bindAddLane}>
            <Caption color='text' size='xs'>Add a Group</Caption>
          </NewItem>
        </Lane>
      </Board>
    </DragDropContext>
  );
};

const mapStateToProps = state => state;
const mapDispatchToProps = {
  bindAddTodo: addTodo,
  bindEditTodo: editTodo,
  bindAddLane: addLane,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
