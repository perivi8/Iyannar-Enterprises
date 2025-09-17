import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';

export interface CartItem {
  id: string;
  title: string;
  description: string;
  price: string;
  slug: string;
  quantity: number;
  features: string[];
  // Enhanced fields
  fromLocation?: string;
  toLocation?: string;
  vehicleType?: string;
  cargoType?: string;
  weight?: number;
  weightUnit?: 'kg' | 'tons';
  distance?: number;
  calculatedPrice?: number;
}

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'UPDATE_ITEM_DETAILS'; payload: { id: string; details: Partial<CartItem> } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_FROM_STORAGE'; payload: CartState };

interface CartContextType {
  state: CartState;
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  updateItemDetails: (id: string, details: Partial<CartItem>) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Local storage key
const CART_STORAGE_KEY = 'iyannar_cart_data';

// Load cart data from localStorage
const loadCartFromStorage = (): CartState => {
  try {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      // Validate the structure
      if (parsedCart && typeof parsedCart === 'object' && Array.isArray(parsedCart.items)) {
        return {
          items: parsedCart.items || [],
          totalItems: parsedCart.totalItems || 0,
          totalPrice: parsedCart.totalPrice || 0
        };
      }
    }
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
  }
  return {
    items: [],
    totalItems: 0,
    totalPrice: 0
  };
};

// Save cart data to localStorage
const saveCartToStorage = (state: CartState) => {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error('Error saving cart to localStorage:', error);
  }
};

// Pricing calculation function
const calculatePrice = (item: CartItem): number => {
  // For services with "Custom pricing", don't calculate a fixed price
  if (item.price === "Custom pricing" || item.slug === "logistics-support") {
    return 0; // Return 0 to indicate custom pricing
  }

  let basePrice = 0;
  const distance = item.distance || 50; // Default 50km
  const weight = item.weight || 1;
  
  // Base pricing per service type
  switch (item.slug) {
    case 'cargo-transport':
      basePrice = distance * 5; // ₹5 per km
      break;
    case 'vehicle-hire':
      basePrice = 1200; // ₹1200 per day
      break;
    case 'custom-solutions':
      basePrice = 2000; // Base ₹2000
      break;
    default:
      basePrice = 1000;
  }

  // Vehicle type multiplier
  const vehicleMultiplier = {
    'mini-truck': 1.0,
    'small-truck': 1.2,
    'medium-truck': 1.5,
    'large-truck': 2.0,
    'container': 2.5,
    'trailer': 3.0
  };

  const multiplier = vehicleMultiplier[item.vehicleType as keyof typeof vehicleMultiplier] || 1.0;
  
  // Weight multiplier
  const weightMultiplier = item.weightUnit === 'tons' ? weight * 10 : weight * 0.01;
  
  return Math.round(basePrice * multiplier * (1 + weightMultiplier));
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  let newState: CartState;

  switch (action.type) {
    case 'LOAD_FROM_STORAGE':
      return action.payload;

    case 'ADD_TO_CART': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        const totalPrice = updatedItems.reduce((total, item) => total + (item.calculatedPrice || 0) * item.quantity, 0);
        newState = {
          items: updatedItems,
          totalItems: updatedItems.reduce((total, item) => total + item.quantity, 0),
          totalPrice
        };
      } else {
        const newItem = { ...action.payload, quantity: 1, calculatedPrice: calculatePrice(action.payload as CartItem) };
        const newItems = [...state.items, newItem];
        const totalPrice = newItems.reduce((total, item) => total + (item.calculatedPrice || 0) * item.quantity, 0);
        newState = {
          items: newItems,
          totalItems: newItems.reduce((total, item) => total + item.quantity, 0),
          totalPrice
        };
      }
      break;
    }
    
    case 'REMOVE_FROM_CART': {
      const filteredItems = state.items.filter(item => item.id !== action.payload);
      const totalPrice = filteredItems.reduce((total, item) => total + (item.calculatedPrice || 0) * item.quantity, 0);
      newState = {
        items: filteredItems,
        totalItems: filteredItems.reduce((total, item) => total + item.quantity, 0),
        totalPrice
      };
      break;
    }
    
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        const filteredItems = state.items.filter(item => item.id !== action.payload.id);
        const totalPrice = filteredItems.reduce((total, item) => total + (item.calculatedPrice || 0) * item.quantity, 0);
        newState = {
          items: filteredItems,
          totalItems: filteredItems.reduce((total, item) => total + item.quantity, 0),
          totalPrice
        };
      } else {
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        );
        const totalPrice = updatedItems.reduce((total, item) => total + (item.calculatedPrice || 0) * item.quantity, 0);
        newState = {
          items: updatedItems,
          totalItems: updatedItems.reduce((total, item) => total + item.quantity, 0),
          totalPrice
        };
      }
      break;
    }

    case 'UPDATE_ITEM_DETAILS': {
      const updatedItems = state.items.map(item => {
        if (item.id === action.payload.id) {
          const updatedItem = { ...item, ...action.payload.details };
          updatedItem.calculatedPrice = calculatePrice(updatedItem);
          return updatedItem;
        }
        return item;
      });
      const totalPrice = updatedItems.reduce((total, item) => total + (item.calculatedPrice || 0) * item.quantity, 0);
      newState = {
        items: updatedItems,
        totalItems: updatedItems.reduce((total, item) => total + item.quantity, 0),
        totalPrice
      };
      break;
    }
    
    case 'CLEAR_CART':
      newState = {
        items: [],
        totalItems: 0,
        totalPrice: 0
      };
      break;
    
    default:
      return state;
  }

  // Save to localStorage after each state change
  saveCartToStorage(newState);
  return newState;
};

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart data from localStorage on component mount
  useEffect(() => {
    const savedCart = loadCartFromStorage();
    if (savedCart.items.length > 0 || savedCart.totalItems > 0) {
      dispatch({ type: 'LOAD_FROM_STORAGE', payload: savedCart });
    }
  }, []);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const removeFromCart = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const updateItemDetails = (id: string, details: Partial<CartItem>) => {
    dispatch({ type: 'UPDATE_ITEM_DETAILS', payload: { id, details } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{
      state,
      addToCart,
      removeFromCart,
      updateQuantity,
      updateItemDetails,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
