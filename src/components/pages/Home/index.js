import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import Board from '../../organisms/Board';
import List from '../../molecules/List';
import Card from '../../atoms/Card';
import Caption from '../../atoms/Caption';
import Title from '../../atoms/Title';


const Home  = props => {
  const { board } = props;
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
              {li.cards.map(card => (
                <Card key={card.id}>
                  <Caption size='s' color='text'>{card.value}</Caption>
                </Card>
              ))}
            </List>
        ))}
      </Board>
    </DragDropContext>
  );
};

const mapStateToProps = state => state;
export default connect(mapStateToProps)(Home);
