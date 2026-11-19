type Dish = {
  name: string;
  description?: string;
  priceEuros?: number;
  allergens?: readonly string[];
};

type MenuCategory = {
  name: string;
  dishes: readonly Dish[];
};

export const menu: readonly MenuCategory[] = [];
