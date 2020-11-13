/**
 * Pizza size
 */
type SizeType = {
    size: 30 | 35;
    price: number;
};

/**
 * Dough thickness
 */
type DoughType = {
    name: string;
    id: number;
    value: 'thin' | 'thick';
};

/**
 * Sauce
 */
type SauceType = {
    id: number;
    name: string;
    value: 'tomato' | 'white' | 'hot';
};

/**
 * Selected Ingredient
 */
type IngredientType = {
    id: number;
    name: string;
    price: number;
    available?: boolean;
    image?: boolean;
};

/**
 * Array of available Selected Ingredient
 */
type IngredientValuesType = {
    cheeses: IngredientType[];
    vegetables: IngredientType[];
    meats: IngredientType[];
};

/**
 * Configurable pizza parameters
 */
type PizzaType = {
    size: SizeType['size'] | null;
    dough: DoughType | null;
    sauce: SauceType | null;
} & IngredientValuesType;
