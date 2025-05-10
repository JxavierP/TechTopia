import { createStore } from "solid-js/store";

type Option = {
  type: string;
  value: string;
}

export interface CartProduct {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  selectedOptions: Option[]
}

type CartStore = {
  cart: CartProduct[];
  totalPrice: number;
  totalQuantity: number;
  addToCart: (product: CartProduct) => void;
  removeOneFromCart: (product: CartProduct) => void;
  removeFromCart: (product: CartProduct) => void;
  emptyCart: () => void;
};

export const [store, setStore] = createStore<CartStore>({
  cart: [],
  totalPrice: 0,
  totalQuantity: 0,
  addToCart: (product: CartProduct) => {
    setStore("cart", (currentCart) => {
      const itemAlreadyInCart = currentCart.find((item) => item.id === product.id);
      if (itemAlreadyInCart) { 
        itemAlreadyInCart.quantity += 1;
        setStore("totalPrice", (prev) => prev + product.price);
        setStore("totalQuantity", (prev) => prev + 1);
        return currentCart;
      } else {
        setStore("totalPrice", (prev) => prev + product.price);
        setStore("totalQuantity", (prev) => prev + 1);
        return [...currentCart, { ...product, quantity: 1 }];
      }
    });
  },
  removeOneFromCart: (product: CartProduct) => {
    setStore("cart", (prev) => {
      const index = prev.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        const updatedCart = [...prev];
        updatedCart[index].quantity -= 1;
        if (updatedCart[index].quantity === 0) {
          updatedCart.splice(index, 1);
        }
        return updatedCart;
      }
      return prev;
    });
    setStore("totalPrice", (prev) => prev - product.price);
    setStore("totalQuantity", (prev) => prev - 1);
  },
  removeFromCart(product: CartProduct) {
    setStore("cart", (prev) => prev.filter((item) => item.id !== product.id));
    setStore("totalPrice", (prev) => prev - product.price * product.quantity);
    setStore("totalQuantity", (prev) => prev - product.quantity);
  },
  emptyCart() {
    setStore("cart", []);
    setStore("totalPrice", 0);
    setStore("totalQuantity", 0);
  },
})