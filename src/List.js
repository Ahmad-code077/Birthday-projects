import React from 'react';

const List = ({ people, setPeople }) => {
  const handleRemove = (id) => {
    let filterItem = people.filter((item) => {
      return item.id !== id;
    });
    setPeople(filterItem);
  };
  return (
    <>
      {people.map((item) => {
        const { name, id, image, age } = item;
        return (
          <article className='person' key={id}>
            <img src={image} alt={name} />
            <div>
              <h2>{name}</h2>
              <p>{age} years</p>
              <button
                style={{ width: '100px', margin: 0 }}
                onClick={() => handleRemove(id)}
              >
                remove
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
