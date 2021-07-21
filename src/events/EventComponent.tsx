import React from 'react';

const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
  console.log(event.target.value);

const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
  console.log("I'm being dragged!");
};

const EventComponent = () => {
  return (
    <div>
      <h3>Events</h3>
      <input onChange={(e) => onChange(e)} />
      <div draggable onDragStart={onDragStart}>
        Drag me!
      </div>
    </div>
  );
};

export default EventComponent;
