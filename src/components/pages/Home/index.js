import React from 'react';
import { connect } from 'react-redux';
import Board from '../../organisms/Board';
import List from '../../molecules/List';
import Card from '../../atoms/Card';
import Caption from '../../atoms/Caption';


const Home  = props => {
  const { board } = props;
  return (
    <Board>
      {board.lanes.map(li => (
          <List key={li.id}>
            {li.cards.map(card => <Card key={card.id}><Caption>{card.value}</Caption></Card>)}
          </List>
      ))}
    </Board>
  );
};

const mapStateToProps = state => state;
export default connect(mapStateToProps)(Home);
