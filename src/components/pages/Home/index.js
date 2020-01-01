import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import Board from '../../organisms/Board';
import Lane from '../../molecules/Lane';
import CardWrap from '../../molecules/CardWrap';
import Card from '../../atoms/Card';
import Caption from '../../atoms/Caption';
import NewItem from '../../atoms/NewItem';
import Title from '../../atoms/Title';
import { addTodo } from '../../../duck/actions/todos';


const Home  = props => {
  const { board, bindAddTodo } = props;
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
      </Lane>
    );
  });
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Board>
        {lanes}
      </Board>
    </DragDropContext>
  );
};

const mapStateToProps = state => state;
const mapDispatchToProps = {
  bindAddTodo: addTodo,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
