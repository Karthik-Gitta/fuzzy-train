/**
 * COOKIES AND CREAM (CNC) - OFFICIAL COMPLETE MENU REPOSITORY
 * Extracted directly from the official print edition menu.
 * Contains all items with exact pricing in INR (₹) and [V] / [NV] designations.
 */

const MENU_CATEGORIES = [
  { id: 'all', name: 'All Dishes', icon: 'fa-utensils' },
  { id: 'starters', name: 'Starters & Fries', icon: 'fa-bowl-food' },
  { id: 'fried-chicken', name: 'Fried Chicken', icon: 'fa-drumstick-bite' },
  { id: 'soups', name: 'Soups', icon: 'fa-mug-hot' },
  { id: 'salads', name: 'Salads', icon: 'fa-carrot' },
  { id: 'chinese-starters', name: 'Chinese Starters', icon: 'fa-fire-burner' },
  { id: 'noodles-rice', name: 'Noodles & Rice', icon: 'fa-bowl-rice' },
  { id: 'breads', name: 'Breads & Toast', icon: 'fa-bread-slice' },
  { id: 'burgers', name: 'Burgers', icon: 'fa-burger' },
  { id: 'sandwiches', name: 'Sandwiches', icon: 'fa-layer-group' },
  { id: 'pizza', name: 'Pizzas', icon: 'fa-pizza-slice' },
  { id: 'pasta', name: 'Pastas', icon: 'fa-wheat-awn' },
  { id: 'desserts', name: 'Desserts & Sizzlers', icon: 'fa-cake-candles' },
  { id: 'cheesecakes-donuts', name: 'Cheesecakes & Donuts', icon: 'fa-cookie' },
  { id: 'ice-cream', name: 'Ice Cream Scoops', icon: 'fa-ice-cream' },
  { id: 'iced-tea-matcha', name: 'Matcha & Iced Teas', icon: 'fa-leaf' },
  { id: 'coffee-frappe', name: 'Coffee & Frappes', icon: 'fa-mug-saucer' },
  { id: 'shakes', name: 'Thick Shakes', icon: 'fa-glass-water' },
  { id: 'coolers-beverages', name: 'Mocktails & Beverages', icon: 'fa-wine-glass' }
];



const MENU_ITEMS = [
  /* ==========================================
     1. STARTERS (Page 1)
     ========================================== */
  { id: 'st-01', name: 'Salted French Fries', category: 'starters', categoryName: 'Starters & Fries', price: 99, isVeg: true },
  { id: 'st-02', name: 'Smiley Fries (8 pieces)', category: 'starters', categoryName: 'Starters & Fries', price: 99, isVeg: true },
  { id: 'st-03', name: 'Peri Peri Fries', category: 'starters', categoryName: 'Starters & Fries', price: 129, isVeg: true },
  { id: 'st-04', name: 'Smiley Peri Peri (8 pieces)', category: 'starters', categoryName: 'Starters & Fries', price: 129, isVeg: true },
  { id: 'st-05', name: 'Potato Wedges', category: 'starters', categoryName: 'Starters & Fries', price: 139, isVeg: true },
  { id: 'st-06', name: 'Pepper Fries', category: 'starters', categoryName: 'Starters & Fries', price: 159, isVeg: true },
  { id: 'st-07', name: 'Peri Peri Potato Wedges', category: 'starters', categoryName: 'Starters & Fries', price: 189, isVeg: true },
  { id: 'st-08', name: 'Creamy Cheese Fries', category: 'starters', categoryName: 'Starters & Fries', price: 189, isVeg: true },
  { id: 'st-09', name: 'Peri Peri Creamy Cheese Fries', category: 'starters', categoryName: 'Starters & Fries', price: 199, isVeg: true },
  { id: 'st-10', name: 'Veg Nuggets (8 pieces)', category: 'starters', categoryName: 'Starters & Fries', price: 219, isVeg: true },
  { id: 'st-11', name: 'Cheese Balls (8 pieces)', category: 'starters', categoryName: 'Starters & Fries', price: 249, isVeg: true },
  { id: 'st-12', name: 'Jalapeno Cheese Balls', category: 'starters', categoryName: 'Starters & Fries', price: 259, isVeg: true },
  { id: 'st-13', name: 'Pepper Paneer', category: 'starters', categoryName: 'Starters & Fries', price: 249, isVeg: true },
  { id: 'st-14', name: 'Cottage Cheese Finger (8 pieces)', category: 'starters', categoryName: 'Starters & Fries', price: 269, isVeg: true },
  { id: 'st-15', name: 'Capsicum Tikki', category: 'starters', categoryName: 'Starters & Fries', price: 269, isVeg: true },
  { id: 'st-16', name: 'Corn Cheese Croquettes (8 pieces)', category: 'starters', categoryName: 'Starters & Fries', price: 269, isVeg: true },
  { id: 'st-17', name: 'Veg Cutlet', category: 'starters', categoryName: 'Starters & Fries', price: 279, isVeg: true },

  /* ==========================================
     2. FRIED CHICKEN (Page 1)
     ========================================== */
  { id: 'fc-01', name: 'Chicken Pop Corn', category: 'fried-chicken', categoryName: 'Fried Chicken', price: 219, isVeg: false },
  { id: 'fc-02', name: 'Chicken Nuggets', category: 'fried-chicken', categoryName: 'Fried Chicken', price: 239, isVeg: false },
  { id: 'fc-03', name: 'Peri Peri Chicken', category: 'fried-chicken', categoryName: 'Fried Chicken', price: 249, isVeg: false },
  { id: 'fc-04', name: 'Pepper Chicken', category: 'fried-chicken', categoryName: 'Fried Chicken', price: 249, isVeg: false },
  { id: 'fc-05', name: 'Spicy Chicken Fingers', category: 'fried-chicken', categoryName: 'Fried Chicken', price: 269, isVeg: false },
  { id: 'fc-06', name: 'Crunchy Chicken', category: 'fried-chicken', categoryName: 'Fried Chicken', price: 269, isVeg: false },
  { id: 'fc-07', name: 'Chicken Cheese Balls', category: 'fried-chicken', categoryName: 'Fried Chicken', price: 289, isVeg: false },
  { id: 'fc-08', name: 'Crispy Fried Wings', category: 'fried-chicken', categoryName: 'Fried Chicken', price: 299, isVeg: false },
  { id: 'fc-09', name: 'Chicken Cutlet', category: 'fried-chicken', categoryName: 'Fried Chicken', price: 299, isVeg: false },
  { id: 'fc-10', name: 'Crispy Chicken (4 leg pieces)', category: 'fried-chicken', categoryName: 'Fried Chicken', price: 339, isVeg: false },
  { id: 'fc-11', name: 'Buffalo Wings with BBQ Sauce', category: 'fried-chicken', categoryName: 'Fried Chicken', price: 339, isVeg: false },
  { id: 'fc-12', name: 'Cookies N Creams Special Hot Wings', category: 'fried-chicken', categoryName: 'Fried Chicken', price: 349, isVeg: false },
  { id: 'fc-13', name: 'Spicy Thai Chicken Wings', category: 'fried-chicken', categoryName: 'Fried Chicken', price: 349, isVeg: false },

  /* ==========================================
     3. SOUPS - CONTINENTAL & CHINESE (Pages 1 & 2)
     ========================================== */
  { id: 'sp-01', name: 'Cream of Tomato Soup', category: 'soups', categoryName: 'Soups', price: 119, isVeg: true },
  { id: 'sp-02', name: 'Tomato Basil Soup', category: 'soups', categoryName: 'Soups', price: 129, isVeg: true },
  { id: 'sp-03', name: 'Cream of Mushroom Soup', category: 'soups', categoryName: 'Soups', price: 149, isVeg: true },
  { id: 'sp-04', name: 'Cream of Broccoli Soup', category: 'soups', categoryName: 'Soups', price: 149, isVeg: true },
  { id: 'sp-05', name: 'Roasted Almond Soup', category: 'soups', categoryName: 'Soups', price: 159, isVeg: true },
  { id: 'sp-06', name: 'Minestrone Soup', category: 'soups', categoryName: 'Soups', price: 159, isVeg: true },
  { id: 'sp-07', name: 'Cream of Chicken Soup', category: 'soups', categoryName: 'Soups', price: 159, isVeg: false },
  { id: 'sp-08', name: 'Roasted Almond Chicken Soup', category: 'soups', categoryName: 'Soups', price: 179, isVeg: false },
  { id: 'sp-09', name: 'Chicken Minestrone Soup', category: 'soups', categoryName: 'Soups', price: 179, isVeg: false },
  { id: 'sp-10', name: 'Manchow Soup (Veg)', category: 'soups', categoryName: 'Soups', price: 169, isVeg: true },
  { id: 'sp-11', name: 'Sweet Corn Soup (Veg)', category: 'soups', categoryName: 'Soups', price: 169, isVeg: true },
  { id: 'sp-12', name: 'Hot & Sour Soup (Veg)', category: 'soups', categoryName: 'Soups', price: 169, isVeg: true },
  { id: 'sp-13', name: 'Lemon Coriander Soup (Veg)', category: 'soups', categoryName: 'Soups', price: 169, isVeg: true },
  { id: 'sp-14', name: 'Veg Clear Soup', category: 'soups', categoryName: 'Soups', price: 199, isVeg: true },
  { id: 'sp-15', name: 'Chicken Manchow Soup', category: 'soups', categoryName: 'Soups', price: 189, isVeg: false },
  { id: 'sp-16', name: 'Chicken Sweet Corn Soup', category: 'soups', categoryName: 'Soups', price: 189, isVeg: false },
  { id: 'sp-17', name: 'Chicken Hot & Sour Soup', category: 'soups', categoryName: 'Soups', price: 189, isVeg: false },
  { id: 'sp-18', name: 'Chicken Lemon Coriander Soup', category: 'soups', categoryName: 'Soups', price: 189, isVeg: false },
  { id: 'sp-19', name: 'Chicken Clear Soup', category: 'soups', categoryName: 'Soups', price: 209, isVeg: false },

  /* ==========================================
     4. SALADS (Pages 1 & 2)
     ========================================== */
  { id: 'sl-01', name: 'Pasta Salad', category: 'salads', categoryName: 'Salads', price: 239, isVeg: true },
  { id: 'sl-02', name: 'Italian Salad', category: 'salads', categoryName: 'Salads', price: 229, isVeg: true },
  { id: 'sl-03', name: 'Mexican Salad', category: 'salads', categoryName: 'Salads', price: 229, isVeg: true },
  { id: 'sl-04', name: 'Russian Salad', category: 'salads', categoryName: 'Salads', price: 259, isVeg: true },
  { id: 'sl-05', name: 'Hawaiian Salad', category: 'salads', categoryName: 'Salads', price: 269, isVeg: true },
  { id: 'sl-06', name: 'Caesar Salad', category: 'salads', categoryName: 'Salads', price: 279, isVeg: true },
  { id: 'sl-07', name: 'BBQ Paneer Salad', category: 'salads', categoryName: 'Salads', price: 299, isVeg: true },
  { id: 'sl-08', name: 'Chicken Pasta Salad', category: 'salads', categoryName: 'Salads', price: 289, isVeg: false },
  { id: 'sl-09', name: 'Hawaiian Chicken Salad', category: 'salads', categoryName: 'Salads', price: 299, isVeg: false },
  { id: 'sl-10', name: 'Chicken Caesar Salad', category: 'salads', categoryName: 'Salads', price: 299, isVeg: false },
  { id: 'sl-11', name: 'Grill Chicken Salad', category: 'salads', categoryName: 'Salads', price: 299, isVeg: false },
  { id: 'sl-12', name: 'BBQ Chicken Salad', category: 'salads', categoryName: 'Salads', price: 299, isVeg: false },

  /* ==========================================
     5. CHINESE STARTERS (Veg, Egg, Non-Veg) (Page 2)
     ========================================== */
  { id: 'cs-01', name: 'Gobi Manchurian', category: 'chinese-starters', categoryName: 'Chinese Starters', price: 199, isVeg: true },
  { id: 'cs-02', name: 'Chilli Honey Potato', category: 'chinese-starters', categoryName: 'Chinese Starters', price: 199, isVeg: true },
  { id: 'cs-03', name: 'Corn Salt & Pepper', category: 'chinese-starters', categoryName: 'Chinese Starters', price: 199, isVeg: true },
  { id: 'cs-04', name: 'Chilli Gobi', category: 'chinese-starters', categoryName: 'Chinese Starters', price: 219, isVeg: true },
  { id: 'cs-05', name: 'Gobi 65', category: 'chinese-starters', categoryName: 'Chinese Starters', price: 219, isVeg: true },
  { id: 'cs-06', name: 'Chilli Baby Corn', category: 'chinese-starters', categoryName: 'Chinese Starters', price: 219, isVeg: true },
  { id: 'cs-07', name: 'Baby Corn Manchurian', category: 'chinese-starters', categoryName: 'Chinese Starters', price: 229, isVeg: true },
  { id: 'cs-08', name: 'Chilli Mushroom', category: 'chinese-starters', categoryName: 'Chinese Starters', price: 229, isVeg: true },
  { id: 'cs-09', name: 'Paneer Manchurian', category: 'chinese-starters', categoryName: 'Chinese Starters', price: 249, isVeg: true },
  { id: 'cs-10', name: 'Chilli Paneer', category: 'chinese-starters', categoryName: 'Chinese Starters', price: 249, isVeg: true },
  { id: 'cs-11', name: 'Kung Pao Mushroom', category: 'chinese-starters', categoryName: 'Chinese Starters', price: 249, isVeg: true },
  { id: 'cs-12', name: 'Mushroom Salt & Pepper', category: 'chinese-starters', categoryName: 'Chinese Starters', price: 249, isVeg: true },
  { id: 'cs-13', name: 'Paneer 65', category: 'chinese-starters', categoryName: 'Chinese Starters', price: 259, isVeg: true },
  { id: 'cs-14', name: 'Paneer Majestic', category: 'chinese-starters', categoryName: 'Chinese Starters', price: 289, isVeg: true },
  { id: 'cs-15', name: 'Spicy Sorted Paneer', category: 'chinese-starters', categoryName: 'Chinese Starters', price: 299, isVeg: true },
  { id: 'cs-16', name: 'Chilli Egg', category: 'chinese-starters', categoryName: 'Chinese Starters', price: 199, isVeg: false },
  { id: 'cs-17', name: 'Egg 65', category: 'chinese-starters', categoryName: 'Chinese Starters', price: 199, isVeg: false },
  { id: 'cs-18', name: 'Egg Manchurian', category: 'chinese-starters', categoryName: 'Chinese Starters', price: 199, isVeg: false },
  { id: 'cs-19', name: 'Chicken 65', category: 'chinese-starters', categoryName: 'Chinese Starters', price: 259, isVeg: false },
  { id: 'cs-20', name: 'Chilli Chicken', category: 'chinese-starters', categoryName: 'Chinese Starters', price: 269, isVeg: false },
  { id: 'cs-21', name: 'Chicken Manchurian', category: 'chinese-starters', categoryName: 'Chinese Starters', price: 269, isVeg: false },
  { id: 'cs-22', name: 'Dragon Chicken', category: 'chinese-starters', categoryName: 'Chinese Starters', price: 279, isVeg: false },
  { id: 'cs-23', name: 'Kung Pao Chicken', category: 'chinese-starters', categoryName: 'Chinese Starters', price: 299, isVeg: false },
  { id: 'cs-24', name: 'Mongolian Chicken', category: 'chinese-starters', categoryName: 'Chinese Starters', price: 299, isVeg: false },
  { id: 'cs-25', name: 'Chicken Drumstick', category: 'chinese-starters', categoryName: 'Chinese Starters', price: 299, isVeg: false },
  { id: 'cs-26', name: 'Sesame Chicken', category: 'chinese-starters', categoryName: 'Chinese Starters', price: 299, isVeg: false },
  { id: 'cs-27', name: 'Lemon Pepper Chicken', category: 'chinese-starters', categoryName: 'Chinese Starters', price: 299, isVeg: false },
  { id: 'cs-28', name: 'Spicy Hunan Chicken', category: 'chinese-starters', categoryName: 'Chinese Starters', price: 299, isVeg: false },
  { id: 'cs-29', name: 'Tai Pai Chicken', category: 'chinese-starters', categoryName: 'Chinese Starters', price: 299, isVeg: false },
  { id: 'cs-30', name: 'Korean Chicken', category: 'chinese-starters', categoryName: 'Chinese Starters', price: 299, isVeg: false },
  { id: 'cs-31', name: 'Chicken 555', category: 'chinese-starters', categoryName: 'Chinese Starters', price: 319, isVeg: false },
  { id: 'cs-32', name: 'Chicken Lollipop', category: 'chinese-starters', categoryName: 'Chinese Starters', price: 349, isVeg: false },

  /* ==========================================
     6. NOODLES & RICE BOWLS (Page 3)
     ========================================== */
  { id: 'nr-01', name: 'Veg Soft Noodles', category: 'noodles-rice', categoryName: 'Noodles & Rice', price: 199, isVeg: true },
  { id: 'nr-02', name: 'Veg Hakka Noodles', category: 'noodles-rice', categoryName: 'Noodles & Rice', price: 209, isVeg: true },
  { id: 'nr-03', name: 'Veg Chilli Garlic Noodles', category: 'noodles-rice', categoryName: 'Noodles & Rice', price: 219, isVeg: true },
  { id: 'nr-04', name: 'Veg Schezwan Noodles', category: 'noodles-rice', categoryName: 'Noodles & Rice', price: 249, isVeg: true },
  { id: 'nr-05', name: 'Mee Goreng Noodles', category: 'noodles-rice', categoryName: 'Noodles & Rice', price: 299, isVeg: true },
  { id: 'nr-06', name: 'Egg Soft Noodles', category: 'noodles-rice', categoryName: 'Noodles & Rice', price: 219, isVeg: false },
  { id: 'nr-07', name: 'Egg Chilli Garlic Noodles', category: 'noodles-rice', categoryName: 'Noodles & Rice', price: 239, isVeg: false },
  { id: 'nr-08', name: 'Egg Schezwan Noodles', category: 'noodles-rice', categoryName: 'Noodles & Rice', price: 269, isVeg: false },
  { id: 'nr-09', name: 'Chicken Soft Noodles', category: 'noodles-rice', categoryName: 'Noodles & Rice', price: 249, isVeg: false },
  { id: 'nr-10', name: 'Chicken Schezwan Noodles', category: 'noodles-rice', categoryName: 'Noodles & Rice', price: 269, isVeg: false },
  { id: 'nr-11', name: 'Chicken Chilli Garlic Noodles', category: 'noodles-rice', categoryName: 'Noodles & Rice', price: 279, isVeg: false },
  { id: 'nr-12', name: 'Chicken Hakka Noodles', category: 'noodles-rice', categoryName: 'Noodles & Rice', price: 299, isVeg: false },
  { id: 'nr-13', name: 'Veg Fried Rice', category: 'noodles-rice', categoryName: 'Noodles & Rice', price: 199, isVeg: true },
  { id: 'nr-14', name: 'Veg Chilli Garlic Fried Rice', category: 'noodles-rice', categoryName: 'Noodles & Rice', price: 219, isVeg: true },
  { id: 'nr-15', name: 'Veg Butter Garlic Fried Rice', category: 'noodles-rice', categoryName: 'Noodles & Rice', price: 229, isVeg: true },
  { id: 'nr-16', name: 'Veg Schezwan Fried Rice', category: 'noodles-rice', categoryName: 'Noodles & Rice', price: 249, isVeg: true },
  { id: 'nr-17', name: 'Classic Veg Fried Rice', category: 'noodles-rice', categoryName: 'Noodles & Rice', price: 269, isVeg: true },
  { id: 'nr-18', name: 'Nasi Goreng Fried Rice', category: 'noodles-rice', categoryName: 'Noodles & Rice', price: 299, isVeg: true },
  { id: 'nr-19', name: 'Egg Fried Rice', category: 'noodles-rice', categoryName: 'Noodles & Rice', price: 219, isVeg: false },
  { id: 'nr-20', name: 'Chilli Garlic Egg Fried Rice', category: 'noodles-rice', categoryName: 'Noodles & Rice', price: 239, isVeg: false },
  { id: 'nr-21', name: 'Schezwan Egg Fried Rice', category: 'noodles-rice', categoryName: 'Noodles & Rice', price: 259, isVeg: false },
  { id: 'nr-22', name: 'Chicken Fried Rice', category: 'noodles-rice', categoryName: 'Noodles & Rice', price: 249, isVeg: false },
  { id: 'nr-23', name: 'Chicken Brown Garlic Rice', category: 'noodles-rice', categoryName: 'Noodles & Rice', price: 259, isVeg: false },
  { id: 'nr-24', name: 'Chilli Garlic Chicken Fried Rice', category: 'noodles-rice', categoryName: 'Noodles & Rice', price: 269, isVeg: false },
  { id: 'nr-25', name: 'Chicken Schezwan Fried Rice', category: 'noodles-rice', categoryName: 'Noodles & Rice', price: 279, isVeg: false },

  /* ==========================================
     7. BREADS & TOAST (Page 3)
     ========================================== */
  { id: 'br-01', name: 'Garlic Bread', category: 'breads', categoryName: 'Breads & Toast', price: 109, isVeg: true },
  { id: 'br-02', name: 'Cheese Garlic Bread', category: 'breads', categoryName: 'Breads & Toast', price: 129, isVeg: true },
  { id: 'br-03', name: 'Cheese Chilli Toast', category: 'breads', categoryName: 'Breads & Toast', price: 159, isVeg: true },
  { id: 'br-04', name: 'Tomato and Basil Bruschetta', category: 'breads', categoryName: 'Breads & Toast', price: 189, isVeg: true },

  /* ==========================================
     8. BURGERS (Page 3)
     ========================================== */
  { id: 'bg-01', name: 'Mr Veg Burger', category: 'burgers', categoryName: 'Burgers', price: 149, isVeg: true },
  { id: 'bg-02', name: 'Veg Cheese Burger', category: 'burgers', categoryName: 'Burgers', price: 189, isVeg: true },
  { id: 'bg-03', name: 'Aloo Corn Veg Patty Burger', category: 'burgers', categoryName: 'Burgers', price: 189, isVeg: true },
  { id: 'bg-04', name: 'Paneer Grill Burger', category: 'burgers', categoryName: 'Burgers', price: 199, isVeg: true },
  { id: 'bg-05', name: 'Paneer Tikka Burger', category: 'burgers', categoryName: 'Burgers', price: 219, isVeg: true },
  { id: 'bg-06', name: 'Egg Burger', category: 'burgers', categoryName: 'Burgers', price: 169, isVeg: false },
  { id: 'bg-07', name: 'Mr Chicken Burger', category: 'burgers', categoryName: 'Burgers', price: 189, isVeg: false },
  { id: 'bg-08', name: 'Chicken Cheese Burger', category: 'burgers', categoryName: 'Burgers', price: 199, isVeg: false },
  { id: 'bg-09', name: 'Grill Chicken Burger', category: 'burgers', categoryName: 'Burgers', price: 209, isVeg: false },
  { id: 'bg-10', name: 'Crispy Chicken Burger', category: 'burgers', categoryName: 'Burgers', price: 229, isVeg: false },
  { id: 'bg-11', name: 'BBQ Chicken Burger', category: 'burgers', categoryName: 'Burgers', price: 229, isVeg: false },

  /* ==========================================
     9. SANDWICHES (Pages 3 & 4)
     ========================================== */
  { id: 'sw-01', name: 'Veg Sandwich (Cheese & Tomato)', category: 'sandwiches', categoryName: 'Sandwiches', price: 189, isVeg: true },
  { id: 'sw-02', name: 'Grill Veg Sandwich', category: 'sandwiches', categoryName: 'Sandwiches', price: 209, isVeg: true },
  { id: 'sw-03', name: 'Grill Cottage Cheese Sandwich', category: 'sandwiches', categoryName: 'Sandwiches', price: 269, isVeg: true },
  { id: 'sw-04', name: 'Veg Club Sandwich', category: 'sandwiches', categoryName: 'Sandwiches', price: 319, isVeg: true },
  { id: 'sw-05', name: 'Egg Sandwich', category: 'sandwiches', categoryName: 'Sandwiches', price: 209, isVeg: false },
  { id: 'sw-06', name: 'Egg Grill Sandwich', category: 'sandwiches', categoryName: 'Sandwiches', price: 229, isVeg: false },
  { id: 'sw-07', name: 'Chicken Sandwich', category: 'sandwiches', categoryName: 'Sandwiches', price: 249, isVeg: false },
  { id: 'sw-08', name: 'Grill Chicken Sandwich', category: 'sandwiches', categoryName: 'Sandwiches', price: 269, isVeg: false },
  { id: 'sw-09', name: 'Chicken Club Sandwich', category: 'sandwiches', categoryName: 'Sandwiches', price: 319, isVeg: false },

  /* ==========================================
     10. PIZZAS (Veg & Non-Veg) (Page 4)
     ========================================== */
  { id: 'pz-01', name: 'Margherita Pizza', category: 'pizza', categoryName: 'Pizzas', price: 299, isVeg: true },
  { id: 'pz-02', name: 'Corn Mushroom Pizza', category: 'pizza', categoryName: 'Pizzas', price: 309, isVeg: true },
  { id: 'pz-03', name: 'Sweet Mix Veg Pizza', category: 'pizza', categoryName: 'Pizzas', price: 309, isVeg: true },
  { id: 'pz-04', name: 'Garden Fresh Pizza', category: 'pizza', categoryName: 'Pizzas', price: 349, isVeg: true },
  { id: 'pz-05', name: 'Mexican Pizza', category: 'pizza', categoryName: 'Pizzas', price: 349, isVeg: true },
  { id: 'pz-06', name: 'Paneer Tikka Pizza', category: 'pizza', categoryName: 'Pizzas', price: 399, isVeg: true },
  { id: 'pz-07', name: 'Paneer Grill Pizza', category: 'pizza', categoryName: 'Pizzas', price: 419, isVeg: true },
  { id: 'pz-08', name: 'BBQ Paneer Pizza', category: 'pizza', categoryName: 'Pizzas', price: 419, isVeg: true },
  { id: 'pz-09', name: 'CNC Special Spicy Paneer Pizza', category: 'pizza', categoryName: 'Pizzas', price: 459, isVeg: true },
  { id: 'pz-10', name: 'Mexican Chicken Pizza', category: 'pizza', categoryName: 'Pizzas', price: 379, isVeg: false },
  { id: 'pz-11', name: 'Chicken Tikka Pizza', category: 'pizza', categoryName: 'Pizzas', price: 419, isVeg: false },
  { id: 'pz-12', name: 'Grill Chicken Pizza', category: 'pizza', categoryName: 'Pizzas', price: 439, isVeg: false },
  { id: 'pz-13', name: 'Crispy Chicken Pizza', category: 'pizza', categoryName: 'Pizzas', price: 459, isVeg: false },
  { id: 'pz-14', name: 'BBQ Chicken Pizza', category: 'pizza', categoryName: 'Pizzas', price: 479, isVeg: false },
  { id: 'pz-15', name: 'CNC Special Chicken Pizza', category: 'pizza', categoryName: 'Pizzas', price: 489, isVeg: false },
  { id: 'pz-16', name: 'Kheema Chicken Pizza', category: 'pizza', categoryName: 'Pizzas', price: 499, isVeg: false },

  /* ==========================================
     11. PASTA (Page 4)
     ========================================== */
  { id: 'pa-01', name: 'Arrabbiata Sauce Pasta (Veg)', category: 'pasta', categoryName: 'Pastas', price: 229, isVeg: true },
  { id: 'pa-02', name: 'Alfredo Sauce Pasta (Veg)', category: 'pasta', categoryName: 'Pastas', price: 279, isVeg: true },
  { id: 'pa-03', name: 'Rosatella Sauce Pasta (Veg)', category: 'pasta', categoryName: 'Pastas', price: 299, isVeg: true },
  { id: 'pa-04', name: 'Pesto Sauce Pasta (Veg)', category: 'pasta', categoryName: 'Pastas', price: 319, isVeg: true },
  { id: 'pa-05', name: 'Arrabbiata Chicken Sauce Pasta', category: 'pasta', categoryName: 'Pastas', price: 259, isVeg: false },
  { id: 'pa-06', name: 'Alfredo Chicken Sauce Pasta', category: 'pasta', categoryName: 'Pastas', price: 309, isVeg: false },
  { id: 'pa-07', name: 'Rosatella Chicken Sauce Pasta', category: 'pasta', categoryName: 'Pastas', price: 329, isVeg: false },
  { id: 'pa-08', name: 'Pesto Chicken Sauce Pasta', category: 'pasta', categoryName: 'Pastas', price: 349, isVeg: false },

  /* ==========================================
     12. DESSERTS & SIZZLERS (Page 4)
     ========================================== */
  { id: 'ds-01', name: 'Lava Cake', category: 'desserts', categoryName: 'Desserts & Sizzlers', price: 69, isVeg: true },
  { id: 'ds-02', name: 'Oreo Brownie', category: 'desserts', categoryName: 'Desserts & Sizzlers', price: 129, isVeg: true },
  { id: 'ds-03', name: 'Choco Chips Brownie', category: 'desserts', categoryName: 'Desserts & Sizzlers', price: 129, isVeg: true },
  { id: 'ds-04', name: 'Nutella Brownie', category: 'desserts', categoryName: 'Desserts & Sizzlers', price: 169, isVeg: true },
  { id: 'ds-05', name: 'Walnut Brownie', category: 'desserts', categoryName: 'Desserts & Sizzlers', price: 169, isVeg: true },
  { id: 'ds-06', name: 'Death by Chocolate', category: 'desserts', categoryName: 'Desserts & Sizzlers', price: 189, isVeg: true },
  { id: 'ds-07', name: 'Sizzling Brownie', category: 'desserts', categoryName: 'Desserts & Sizzlers', price: 219, isVeg: true },

  /* ==========================================
     13. CHEESECAKES & DONUTS (Pages 4 & 5)
     ========================================== */
  { id: 'cd-01', name: 'Strawberry Donut', category: 'cheesecakes-donuts', categoryName: 'Cheesecakes & Donuts', price: 79, isVeg: true },
  { id: 'cd-02', name: 'Mango Donut', category: 'cheesecakes-donuts', categoryName: 'Cheesecakes & Donuts', price: 89, isVeg: true },
  { id: 'cd-03', name: 'Chocolate Chip Donut', category: 'cheesecakes-donuts', categoryName: 'Cheesecakes & Donuts', price: 99, isVeg: true },
  { id: 'cd-04', name: 'White Chocolate Donut', category: 'cheesecakes-donuts', categoryName: 'Cheesecakes & Donuts', price: 109, isVeg: true },
  { id: 'cd-05', name: 'New York Cheese Cake', category: 'cheesecakes-donuts', categoryName: 'Cheesecakes & Donuts', price: 159, isVeg: true },
  { id: 'cd-06', name: 'Strawberry Cheese Cake', category: 'cheesecakes-donuts', categoryName: 'Cheesecakes & Donuts', price: 169, isVeg: true },
  { id: 'cd-07', name: 'Blueberry Cheese Cake', category: 'cheesecakes-donuts', categoryName: 'Cheesecakes & Donuts', price: 199, isVeg: true },
  { id: 'cd-08', name: 'Nutella Cheese Cake', category: 'cheesecakes-donuts', categoryName: 'Cheesecakes & Donuts', price: 209, isVeg: true },

  /* ==========================================
     14. ICE CREAM SCOOPS (Page 5)
     ========================================== */
  { id: 'ic-01', name: 'Vanilla Scoop', category: 'ice-cream', categoryName: 'Ice Cream Scoops', price: 39, isVeg: true },
  { id: 'ic-02', name: 'Strawberry Scoop', category: 'ice-cream', categoryName: 'Ice Cream Scoops', price: 49, isVeg: true },
  { id: 'ic-03', name: 'Mango Scoop', category: 'ice-cream', categoryName: 'Ice Cream Scoops', price: 49, isVeg: true },
  { id: 'ic-04', name: 'Chocolate Scoop', category: 'ice-cream', categoryName: 'Ice Cream Scoops', price: 59, isVeg: true },
  { id: 'ic-05', name: 'Butterscotch Scoop', category: 'ice-cream', categoryName: 'Ice Cream Scoops', price: 59, isVeg: true },
  { id: 'ic-06', name: 'Blackcurrant Scoop', category: 'ice-cream', categoryName: 'Ice Cream Scoops', price: 89, isVeg: true },
  { id: 'ic-07', name: 'American Delight Scoop', category: 'ice-cream', categoryName: 'Ice Cream Scoops', price: 99, isVeg: true },

  /* ==========================================
     15. ICED MATCHA & ICED TEA (Page 5)
     ========================================== */
  { id: 'mt-01', name: 'Lemon Iced Tea', category: 'iced-tea-matcha', categoryName: 'Matcha & Iced Teas', price: 129, isVeg: true },
  { id: 'mt-02', name: 'Peached Iced Tea', category: 'iced-tea-matcha', categoryName: 'Matcha & Iced Teas', price: 149, isVeg: true },
  { id: 'mt-03', name: 'Watermelon Iced Tea', category: 'iced-tea-matcha', categoryName: 'Matcha & Iced Teas', price: 149, isVeg: true },
  { id: 'mt-04', name: 'Green Apple Iced Tea', category: 'iced-tea-matcha', categoryName: 'Matcha & Iced Teas', price: 149, isVeg: true },
  { id: 'mt-05', name: 'Cranberry Iced Tea', category: 'iced-tea-matcha', categoryName: 'Matcha & Iced Teas', price: 159, isVeg: true },
  { id: 'mt-06', name: 'Orangeberry Iced Tea', category: 'iced-tea-matcha', categoryName: 'Matcha & Iced Teas', price: 169, isVeg: true },
  { id: 'mt-07', name: 'Iced Matcha Classic', category: 'iced-tea-matcha', categoryName: 'Matcha & Iced Teas', price: 189, isVeg: true },
  { id: 'mt-08', name: 'Iced Mango Matcha Latte', category: 'iced-tea-matcha', categoryName: 'Matcha & Iced Teas', price: 199, isVeg: true },
  { id: 'mt-09', name: 'Strawberry Iced Matcha', category: 'iced-tea-matcha', categoryName: 'Matcha & Iced Teas', price: 199, isVeg: true },
  { id: 'mt-10', name: 'Rose Matcha Latte', category: 'iced-tea-matcha', categoryName: 'Matcha & Iced Teas', price: 199, isVeg: true },
  { id: 'mt-11', name: 'Blueberry Matcha', category: 'iced-tea-matcha', categoryName: 'Matcha & Iced Teas', price: 229, isVeg: true },
  { id: 'mt-12', name: 'Lavender Iced Matcha', category: 'iced-tea-matcha', categoryName: 'Matcha & Iced Teas', price: 239, isVeg: true },
  { id: 'mt-13', name: 'Creamy Coconut Iced Matcha', category: 'iced-tea-matcha', categoryName: 'Matcha & Iced Teas', price: 249, isVeg: true },
  { id: 'mt-14', name: 'Dirty Matcha Latte', category: 'iced-tea-matcha', categoryName: 'Matcha & Iced Teas', price: 249, isVeg: true },

  /* ==========================================
     16. ICED COFFEE & FRAPPES (Page 5)
     ========================================== */
  { id: 'cf-01', name: 'Iced Americano', category: 'coffee-frappe', categoryName: 'Coffee & Frappes', price: 179, isVeg: true },
  { id: 'cf-02', name: 'Iced Cappuccino', category: 'coffee-frappe', categoryName: 'Coffee & Frappes', price: 189, isVeg: true },
  { id: 'cf-03', name: 'Iced Latte', category: 'coffee-frappe', categoryName: 'Coffee & Frappes', price: 199, isVeg: true },
  { id: 'cf-04', name: 'Frappe', category: 'coffee-frappe', categoryName: 'Coffee & Frappes', price: 199, isVeg: true },
  { id: 'cf-05', name: 'Iced Spanish Latte', category: 'coffee-frappe', categoryName: 'Coffee & Frappes', price: 209, isVeg: true },
  { id: 'cf-06', name: 'Iced Latte Cranberry', category: 'coffee-frappe', categoryName: 'Coffee & Frappes', price: 209, isVeg: true },
  { id: 'cf-07', name: 'Iced Latte Vanilla', category: 'coffee-frappe', categoryName: 'Coffee & Frappes', price: 209, isVeg: true },
  { id: 'cf-08', name: 'Iced Mocha', category: 'coffee-frappe', categoryName: 'Coffee & Frappes', price: 209, isVeg: true },
  { id: 'cf-09', name: 'Litchi & Coffee', category: 'coffee-frappe', categoryName: 'Coffee & Frappes', price: 209, isVeg: true },
  { id: 'cf-10', name: 'Cranberry Espresso', category: 'coffee-frappe', categoryName: 'Coffee & Frappes', price: 209, isVeg: true },
  { id: 'cf-11', name: 'Orange Espresso', category: 'coffee-frappe', categoryName: 'Coffee & Frappes', price: 209, isVeg: true },
  { id: 'cf-12', name: 'Pomegranate Espresso', category: 'coffee-frappe', categoryName: 'Coffee & Frappes', price: 209, isVeg: true },
  { id: 'cf-13', name: 'Iced Caramel Latte', category: 'coffee-frappe', categoryName: 'Coffee & Frappes', price: 219, isVeg: true },
  { id: 'cf-14', name: 'Oreo Frappe', category: 'coffee-frappe', categoryName: 'Coffee & Frappes', price: 209, isVeg: true },
  { id: 'cf-15', name: 'Vanilla Frappe', category: 'coffee-frappe', categoryName: 'Coffee & Frappes', price: 209, isVeg: true },
  { id: 'cf-16', name: 'Coffee Frappe Hazelnut', category: 'coffee-frappe', categoryName: 'Coffee & Frappes', price: 209, isVeg: true },
  { id: 'cf-17', name: 'Coffee Frappe Irish', category: 'coffee-frappe', categoryName: 'Coffee & Frappes', price: 209, isVeg: true },
  { id: 'cf-18', name: 'Caramel Frappe', category: 'coffee-frappe', categoryName: 'Coffee & Frappes', price: 209, isVeg: true },
  { id: 'cf-19', name: 'Nutella Frappe', category: 'coffee-frappe', categoryName: 'Coffee & Frappes', price: 219, isVeg: true },
  { id: 'cf-20', name: 'Peanut Butter Frappe', category: 'coffee-frappe', categoryName: 'Coffee & Frappes', price: 219, isVeg: true },
  { id: 'cf-21', name: 'Brownie Frappe', category: 'coffee-frappe', categoryName: 'Coffee & Frappes', price: 229, isVeg: true },
  { id: 'cf-22', name: 'Biscoff Frappe', category: 'coffee-frappe', categoryName: 'Coffee & Frappes', price: 249, isVeg: true },

  /* ==========================================
     17. SHAKES (Page 6)
     ========================================== */
  { id: 'sh-01', name: 'Strawberry Twist Shake', category: 'shakes', categoryName: 'Thick Shakes', price: 89, isVeg: true },
  { id: 'sh-02', name: 'Vanilla Shake', category: 'shakes', categoryName: 'Thick Shakes', price: 99, isVeg: true },
  { id: 'sh-03', name: 'Mango Shake', category: 'shakes', categoryName: 'Thick Shakes', price: 99, isVeg: true },
  { id: 'sh-04', name: 'Chocolate Shake', category: 'shakes', categoryName: 'Thick Shakes', price: 109, isVeg: true },
  { id: 'sh-05', name: 'Butterscotch Shake', category: 'shakes', categoryName: 'Thick Shakes', price: 109, isVeg: true },
  { id: 'sh-06', name: 'Hide & Seek Shake', category: 'shakes', categoryName: 'Thick Shakes', price: 109, isVeg: true },
  { id: 'sh-07', name: 'Dark Fantasy Shake', category: 'shakes', categoryName: 'Thick Shakes', price: 109, isVeg: true },
  { id: 'sh-08', name: 'Cadbury Cookies Shake', category: 'shakes', categoryName: 'Thick Shakes', price: 109, isVeg: true },
  { id: 'sh-09', name: 'Oreo Shake', category: 'shakes', categoryName: 'Thick Shakes', price: 119, isVeg: true },
  { id: 'sh-10', name: 'Choco Coffee Shake', category: 'shakes', categoryName: 'Thick Shakes', price: 129, isVeg: true },
  { id: 'sh-11', name: 'Kitkat Shake', category: 'shakes', categoryName: 'Thick Shakes', price: 129, isVeg: true },
  { id: 'sh-12', name: 'Crunchy Caramel Shake', category: 'shakes', categoryName: 'Thick Shakes', price: 129, isVeg: true },
  { id: 'sh-13', name: 'Oreo Brownie Shake', category: 'shakes', categoryName: 'Thick Shakes', price: 129, isVeg: true },
  { id: 'sh-14', name: 'Rose Shake', category: 'shakes', categoryName: 'Thick Shakes', price: 129, isVeg: true },
  { id: 'sh-15', name: 'Choco Brownie Shake', category: 'shakes', categoryName: 'Thick Shakes', price: 149, isVeg: true },
  { id: 'sh-16', name: 'Choco Freak Shake', category: 'shakes', categoryName: 'Thick Shakes', price: 159, isVeg: true },
  { id: 'sh-17', name: 'Ferrero Hazelnut Shake', category: 'shakes', categoryName: 'Thick Shakes', price: 179, isVeg: true },
  { id: 'sh-18', name: 'Black Currant Shake', category: 'shakes', categoryName: 'Thick Shakes', price: 179, isVeg: true },
  { id: 'sh-19', name: 'Blueberry Shake', category: 'shakes', categoryName: 'Thick Shakes', price: 179, isVeg: true },
  { id: 'sh-20', name: 'Fusion Nutella Shake', category: 'shakes', categoryName: 'Thick Shakes', price: 179, isVeg: true },
  { id: 'sh-21', name: 'American Delight Shake', category: 'shakes', categoryName: 'Thick Shakes', price: 189, isVeg: true },
  { id: 'sh-22', name: 'Lotus Biscoff Shake', category: 'shakes', categoryName: 'Thick Shakes', price: 199, isVeg: true },

  /* ==========================================
     18. MOCKTAILS, COOLERS & BEVERAGES (Page 6)
     ========================================== */
  { id: 'mc-01', name: 'Fresh Lime Soda', category: 'coolers-beverages', categoryName: 'Mocktails & Beverages', price: 59, isVeg: true },
  { id: 'mc-02', name: 'Blue Sea', category: 'coolers-beverages', categoryName: 'Mocktails & Beverages', price: 119, isVeg: true },
  { id: 'mc-03', name: 'Italian Soda', category: 'coolers-beverages', categoryName: 'Mocktails & Beverages', price: 119, isVeg: true },
  { id: 'mc-04', name: 'Virgin Mojito', category: 'coolers-beverages', categoryName: 'Mocktails & Beverages', price: 119, isVeg: true },
  { id: 'mc-05', name: 'Green Apple Mojito', category: 'coolers-beverages', categoryName: 'Mocktails & Beverages', price: 119, isVeg: true },
  { id: 'mc-06', name: 'Watermelon Mojito', category: 'coolers-beverages', categoryName: 'Mocktails & Beverages', price: 129, isVeg: true },
  { id: 'mc-07', name: 'Strawberry Slush', category: 'coolers-beverages', categoryName: 'Mocktails & Beverages', price: 129, isVeg: true },
  { id: 'mc-08', name: 'Litchi Love', category: 'coolers-beverages', categoryName: 'Mocktails & Beverages', price: 129, isVeg: true },
  { id: 'mc-09', name: 'Mango Mojito', category: 'coolers-beverages', categoryName: 'Mocktails & Beverages', price: 129, isVeg: true },
  { id: 'mc-10', name: 'Cranberry Mojito', category: 'coolers-beverages', categoryName: 'Mocktails & Beverages', price: 139, isVeg: true },
  { id: 'mc-11', name: 'Blueberry Mojito', category: 'coolers-beverages', categoryName: 'Mocktails & Beverages', price: 149, isVeg: true },
  { id: 'mc-12', name: 'Chilli Guava', category: 'coolers-beverages', categoryName: 'Mocktails & Beverages', price: 149, isVeg: true },
  { id: 'mc-13', name: 'Spicy Orange', category: 'coolers-beverages', categoryName: 'Mocktails & Beverages', price: 149, isVeg: true },
  { id: 'mc-14', name: 'Litchi Fantasy', category: 'coolers-beverages', categoryName: 'Mocktails & Beverages', price: 149, isVeg: true },
  { id: 'mc-15', name: 'Orange Lady', category: 'coolers-beverages', categoryName: 'Mocktails & Beverages', price: 169, isVeg: true },
  { id: 'mc-16', name: 'Red Wine (Non-Alcoholic)', category: 'coolers-beverages', categoryName: 'Mocktails & Beverages', price: 169, isVeg: true },
  { id: 'bv-01', name: 'Water Bottle', category: 'coolers-beverages', categoryName: 'Mocktails & Beverages', price: 15, isVeg: true },
  { id: 'bv-02', name: 'Coca Cola', category: 'coolers-beverages', categoryName: 'Mocktails & Beverages', price: 39, isVeg: true },
  { id: 'bv-03', name: 'Thums Up', category: 'coolers-beverages', categoryName: 'Mocktails & Beverages', price: 39, isVeg: true },
  { id: 'bv-04', name: 'Pepsi', category: 'coolers-beverages', categoryName: 'Mocktails & Beverages', price: 39, isVeg: true },
  { id: 'bv-05', name: 'Sprite', category: 'coolers-beverages', categoryName: 'Mocktails & Beverages', price: 39, isVeg: true },
  { id: 'bv-06', name: '7 Up', category: 'coolers-beverages', categoryName: 'Mocktails & Beverages', price: 39, isVeg: true },
  { id: 'bv-07', name: 'Red Bull', category: 'coolers-beverages', categoryName: 'Mocktails & Beverages', price: 129, isVeg: true }
];
