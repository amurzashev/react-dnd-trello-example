import React, { useState } from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Board from 'components/organisms/Board';
import Lane from 'components/molecules/Lane';
import CardWrap from 'components/molecules/CardWrap';
import Card from 'components/atoms/Card';
import Caption from 'components/atoms/Caption';
import NewItem from 'components/atoms/NewItem';
import TitleInput from 'components/atoms/TitleInput';
import Title from 'components/atoms/Title';
import TextInput from 'components/atoms/TextInput';
import { addCard } from 'duck/actions/cards';
import { addLane, editLane } from 'duck/actions/lanes';

// TODO: CLEAN UP

const CardComponent = ({ laneIndex, cardIndex, card, bindEditTodo, lane }) => {
  const [isEditing, setIsEditing] = useState(true);
  const preCheckEdit = val => {
    if (val && val !== card.value && val.trim().length) {
      bindEditTodo(laneIndex, cardIndex, val);
    }
    setIsEditing(!isEditing);
  };
  const submitForm = e => {
    e.preventDefault();
    return preCheckEdit(e.target[0].value);
  };
  return (
    <Draggable draggableId={card.id} index={cardIndex}>
      {(provided, snapshot) => (
        <Card
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {isEditing ? <form onSubmit={submitForm}><TextInput style={{ paddingBottom: 2 }} autoFocus onBlur={e => preCheckEdit(e.target.value)} defaultValue={card.value} placeholder={card.value || 'Untitled'} /></form> : <Caption onClick={() => setIsEditing(!isEditing)} size='m' color='text'>{card.value || 'Untitled'}</Caption>}
        </Card>
      )}
    </Draggable>
  )
};

const CardWrapComponent = ({ cards, lane, laneIndex, bindAddCard, bindEditTodo }) => {
  return (
    <CardWrap>
      <NewItem onClick={() => bindAddCard(lane.id)}>
        <Caption color='text' size='xs'>New</Caption>
      </NewItem>
      {lane.cards.map((k, cardIndex) => {
        const card = cards[k];
        return (
          <CardComponent card={card} laneIndex={laneIndex} cardIndex={cardIndex} key={card.id} bindEditTodo={bindEditTodo} lane={lane} />
        );
      })}
    </CardWrap>
  );
}
// TODO: onEnter listener or form?? fix styling too long string!
const TitleComponent = ({ lane, bindEditLane }) => {
  const [isEditing, setIsEditing] = useState(false);
  const preCheckEdit = val => {
    if (val && val !== lane.title) {
      bindEditLane(lane.id, val);
    }
    setIsEditing(!isEditing);
  };
  return isEditing ? <div><TitleInput defaultValue={lane.title} autoFocus onBlur={e => preCheckEdit(e.target.value)} /></div> : <Title onClick={() => setIsEditing(!isEditing)} title={lane.title || 'Untitled Group'} bg={lane.bg} />;
};

const Home  = props => {
  const { lanes, cards, bindAddCard, bindAddLane, bindEditLane } = props;
  const onDragEnd = result => {
    console.log(result);
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // const lane = board.lanes[source.droppableId];
    // const newCardIds = Array.from(lane.cards);

    // newCardIds.splice(source.index, 1);
    // newCardIds.splice(destination.index, 0, draggableId);

    // const newLanes = {
    //   ...lane,
    //   cards: newCardIds,
    // };

    // bindReorderTodo(newLanes);


  };

  const lanesArr = Object.keys(lanes);
  if (!lanesArr.length) {
    return null;
  }
  const renderLanes = lanesArr.map((k, index) => {
    const lane = lanes[k];
    return (
      <Droppable droppableId={lane.id} key={lane.id}>
        {(provided) => (
          <Lane
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <TitleComponent lane={lane} bindEditLane={bindEditLane} />
            <CardWrapComponent cards={cards} laneIndex={index} lane={lane} bindAddCard={bindAddCard} />
            {provided.placeholder}
          </Lane>
        )}
      </Droppable>
    );
  });
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Board>
        {renderLanes}
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
  bindAddCard: addCard,
  bindAddLane: addLane,
  bindEditLane: editLane,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
