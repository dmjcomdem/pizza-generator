import React from 'react';
import { data } from '@/data';
import { OrderPizza } from './OrderPizza';
import { Checkbox, RadioButton } from '@/components';

export const PizzaGenerator: React.FC = () => {
    const [orderPizza, setOrderPizza] = React.useState(false);
    const [totalPrice, setTotalPrice] = React.useState(0);

    const [size, setSize] = React.useState<SizeType>(() => data.sizes[0]);
    const [dough, setDough] = React.useState<DoughType>(() => data.doughs[0]);
    const [sauce, setSauce] = React.useState<SauceType>(() => data.sauces[0]);
    const [cheeses, setCheeses] = React.useState<IngredientType[]>([]);
    const [vegetables, setVegetables] = React.useState<IngredientType[]>([]);
    const [meats, setMeats] = React.useState<IngredientType[]>([]);

    const sizeRefs = React.useRef<HTMLInputElement[]>([]);
    const doughRefs = React.useRef<HTMLInputElement[]>([]);
    const sauceRefs = React.useRef<HTMLInputElement[]>([]);
    const cheeseRefs = React.useRef<HTMLInputElement[]>([]);
    const vegetableRefs = React.useRef<HTMLInputElement[]>([]);
    const meatRefs = React.useRef<HTMLInputElement[]>([]);

    const handleChange = () => {
        setSize(data.sizes.find(size => sizeRefs.current[size.size].checked)!);
        setDough(data.doughs.find(dough => doughRefs.current[dough.id].checked)!);
        setSauce(data.sauces.find(sauce => sauceRefs.current[sauce.id].checked)!);
        setCheeses(data.cheeses.filter(cheese => cheeseRefs.current[cheese.id].checked));
        // prettier-ignore
        setVegetables(data.vegetables.filter(vegetable => vegetableRefs.current[vegetable.id].checked));
        setMeats(data.meats.filter(meat => meatRefs.current[meat.id].checked));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setOrderPizza(true);
    };

    React.useEffect(() => {
        const getPriceIngredient = (ingredients: IngredientType[]) =>
            ingredients.reduce((acc, v) => acc + v.price, 0);

        const sumPrice =
            size.price +
            getPriceIngredient(cheeses) +
            getPriceIngredient(vegetables) +
            getPriceIngredient(meats);

        setTotalPrice(sumPrice);
    }, [size, cheeses, vegetables, meats]);

    return (
        <>
            {!orderPizza && (
                <>
                    <h1>🍕Выберите пиццу</h1>
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>Размер</legend>
                            {data.sizes.map(item => (
                                <RadioButton
                                    ref={(el: HTMLInputElement) =>
                                        (sizeRefs.current[item.size] = el)
                                    }
                                    key={item.size}
                                    label={item.size + 'см'}
                                    name="size"
                                    defaultChecked={size.size === item.size}
                                    onChange={handleChange}
                                />
                            ))}
                        </fieldset>

                        <fieldset>
                            <legend>Тесто</legend>
                            {data.doughs.map(item => (
                                <RadioButton
                                    ref={(el: HTMLInputElement) =>
                                        (doughRefs.current[item.id] = el)
                                    }
                                    key={item.id}
                                    label={item.name}
                                    name="dough"
                                    defaultChecked={dough.id === item.id}
                                    onChange={handleChange}
                                />
                            ))}
                        </fieldset>

                        <fieldset>
                            <legend>Выберите соус</legend>
                            {data.sauces.map(item => (
                                <RadioButton
                                    ref={(el: HTMLInputElement) =>
                                        (sauceRefs.current[item.id] = el)
                                    }
                                    key={item.id}
                                    label={item.name}
                                    name="sauce"
                                    defaultChecked={sauce.id === item.id}
                                    onChange={handleChange}
                                />
                            ))}
                        </fieldset>

                        <fieldset>
                            <legend>Добавьте сыр</legend>
                            {data.cheeses.map(item => (
                                <Checkbox
                                    ref={(el: HTMLInputElement) =>
                                        (cheeseRefs.current[item.id] = el)
                                    }
                                    key={item.id}
                                    label={item.name}
                                    onChange={handleChange}
                                />
                            ))}
                        </fieldset>

                        <fieldset>
                            <legend>Добавьте овощи</legend>
                            {data.vegetables.map(item => (
                                <Checkbox
                                    ref={(el: HTMLInputElement) =>
                                        (vegetableRefs.current[item.id] = el)
                                    }
                                    key={item.id}
                                    label={item.name}
                                    onChange={handleChange}
                                />
                            ))}
                        </fieldset>

                        <fieldset>
                            <legend>Добавьте овощи</legend>
                            {data.meats.map(item => (
                                <Checkbox
                                    ref={(el: HTMLInputElement) =>
                                        (meatRefs.current[item.id] = el)
                                    }
                                    key={item.id}
                                    label={item.name}
                                    onChange={handleChange}
                                />
                            ))}
                        </fieldset>

                        <button>Заказать за {totalPrice} руб.</button>
                    </form>
                </>
            )}

            {orderPizza && (
                <OrderPizza
                    size={size}
                    dough={dough}
                    sauce={sauce}
                    cheeses={cheeses}
                    vegetables={vegetables}
                    meats={meats}
                    totalPrice={totalPrice}
                />
            )}
        </>
    );
};
