import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import Board from '../../organisms/Board';
import Lane from '../../molecules/Lane';
import CardWrap from '../../molecules/CardWrap';
import Card from '../../atoms/Card';
import Caption from '../../atoms/Caption';
import NewItem from '../../atoms/NewItem';
import TextInput from '../../atoms/TextInput';
import Title from '../../atoms/Title';
import { addTodo } from '../../../duck/actions/todos';
import { addLane } from '../../../duck/actions/lanes';


const Home  = props => {
  const { board, bindAddTodo, bindAddLane } = props;
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
        <CardWrap>
          {lane.cards.map(card => ( /** TODO: onClick turn into input field */
            <Card key={card.id}>
              <Caption size='m' color='text'>{card.value || 'Untitled'}</Caption>
            </Card>
          ))}
          <NewItem onClick={() => bindAddTodo(lane.id)}>
            <Caption color='text' size='xs'>New</Caption>
          </NewItem>
        </CardWrap>
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
  bindAddLane: addLane,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
