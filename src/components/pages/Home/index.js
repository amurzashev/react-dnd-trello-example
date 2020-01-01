import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import Board from '../../organisms/Board';
import List from '../../molecules/List';
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
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Board>
        {board.lanes.map(li => (
            <List key={li.id}>
              <Title title={li.title} bg={li.bg} />
              <CardWrap>
                {li.cards.map(card => (
                  <Card key={card.id}>
                    <Caption size='s' color='text'>{card.value}</Caption>
                  </Card>
                ))}
                <NewItem onClick={bindAddTodo}>New</NewItem>
              </CardWrap>
            </List>
        ))}
      </Board>
    </DragDropContext>
  );
};

const mapStateToProps = state => state;
const mapDispatchToProps = {
  bindAddTodo: addTodo,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
