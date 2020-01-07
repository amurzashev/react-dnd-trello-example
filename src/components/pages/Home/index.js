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
import { addCard, editCard } from 'duck/actions/cards';
import { addLane, editLane, reorderCards, reorderBetweenLanes } from 'duck/actions/lanes';

// TODO: CLEAN UP

const CardComponent = ({ laneIndex, cardIndex, card, bindEditCard, lane }) => {
  const [isEditing, setIsEditing] = useState(false);
  const preCheckEdit = val => {
    if (val && val !== card.value && val.trim().length) {
      bindEditCard(card.id, val);
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
          {isEditing ? <form onSubmit={submitForm}><TextInput autoFocus onBlur={e => preCheckEdit(e.target.value)} defaultValue={card.value} placeholder={card.value || 'Untitled'} /></form> : <Caption onClick={() => setIsEditing(!isEditing)} size='m' color='text'>{card.value || 'Untitled'}</Caption>}
        </Card>
      )}
    </Draggable>
  )
};

const CardWrapComponent = ({ cards, lane, laneIndex, bindAddCard, bindEditCard }) => {
  return (
    <CardWrap>
      {lane.cards.map((k, cardIndex) => {
        const card = cards[k];
        return (
          <CardComponent card={card} laneIndex={laneIndex} cardIndex={cardIndex} key={card.id} bindEditCard={bindEditCard} lane={lane} />
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
  const { lanes, cards, bindAddCard, bindReorderBetweenLanes, bindEditCard, bindAddLane, bindEditLane, bindReorderCards, order } = props;
  const onDragEnd = result => {
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

    const start = lanes[source.droppableId];
    const finish = lanes[destination.droppableId];

    if (start === finish) {
      const newCardIds = Array.from(start.cards);

      newCardIds.splice(source.index, 1);
      newCardIds.splice(destination.index, 0, draggableId);

      const newLanes = {
        ...start,
        cards: newCardIds,
      };

      bindReorderCards(newLanes);
      return;
    }

    const startCards = Array.from(start.cards);
    startCards.splice(source.index, 1);
    const newStart = {
      ...start,
      cards: startCards,
    };

    const finishCards = Array.from(finish.cards);
    finishCards.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      cards: finishCards,
    };

    bindReorderBetweenLanes(newStart, newFinish);
  };

  const renderLanes = order.columns.map((laneId, index) => {
    const lane = lanes[laneId];
    return (
      <Lane key={lane.id}>
        <TitleComponent lane={lane} bindEditLane={bindEditLane} />
        <NewItem onClick={() => bindAddCard(lane.id)} style={{ marginTop: 10 }}>
          <Caption color='text' size='xs'>New Card</Caption>
        </NewItem>
      <Droppable droppableId={lane.id}>
        {(provided) => (
            <div ref={provided.innerRef}
            {...provided.droppableProps}>
            <CardWrapComponent cards={cards} laneIndex={index} lane={lane} bindAddCard={bindAddCard} bindEditCard={bindEditCard} />
            {provided.placeholder}
            </div>
        )}
      </Droppable>
      </Lane>

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
  bindEditCard: editCard,
  bindAddLane: addLane,
  bindEditLane: editLane,
  bindReorderCards: reorderCards,
  bindReorderBetweenLanes: reorderBetweenLanes,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
