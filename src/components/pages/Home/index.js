import React from 'react';
import { connect } from 'react-redux';
import Board from '../../organisms/Board';
import List from '../../molecules/List';
import Card from '../../atoms/Card';


const Home  = props => {
  const { board } = props;
  return (
    <Board>
      {board.lanes.map(li => (
          <List key={li.id}>
            <div style={{ height: 50, width: 50, background: li.bg }}>
              hello
            </div>
            {li.cards.map(card => <Card key={card.id}>{card.value}</Card>)}
          </List>
      ))}
    </Board>
  );
};

const mapStateToProps = state => state;
export default connect(mapStateToProps)(Home);
