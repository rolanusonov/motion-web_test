import React from 'react';

const Card = ({el}) => {
    return (
        <div>
            <img src={el.image} alt="no img"/>
                                     <h1>
                                         {el.question_ru}
                                     </h1>
        </div>
    );
};

export default Card;