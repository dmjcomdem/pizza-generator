import React from 'react';

export const OrderPizza: React.FC<PizzaType> = ({
    size,
    dough,
    sauce,
    cheeses,
    vegetables,
    meats,
    totalPrice
}) => {
    return (
        <>
            <h1>Оформление заказа</h1>

            <ul className="list">
                <li>
                    {size.size} см на {dough.name} тесте
                </li>

                <li>{sauce.name} соус</li>

                {cheeses.map(cheese => (
                    <li key={cheese.id}>{cheese.name}</li>
                ))}

                {vegetables?.map(vegetable => (
                    <li key={vegetable.id}>{vegetable.name}</li>
                ))}

                {meats?.map(meat => (
                    <li key={meat.id}>{meat.name}</li>
                ))}
            </ul>

            <button>Заказать за {totalPrice} руб.</button>
        </>
    );
};
