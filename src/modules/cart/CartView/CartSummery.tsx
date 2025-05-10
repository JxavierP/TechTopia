import CartItemLarge from "../CartItem/Large";

const CartSummary = () => {
  // const cartItems = useCart();
  // const { totalQuantity } = useCartStore();
  return (
    <div class="flex grow flex-col items-start">
      <div class="mb-2 flex w-full items-end justify-between border-black">
        <h1 class="text-3xl font-semibold">Your Cart</h1>
        <span class="text-2xl text-gray-500">Products / Individual Items</span>
      </div>
      <div class="flex h-max w-full flex-col space-y-2 divide-black">
        <CartItemLarge />
        <CartItemLarge />
        <CartItemLarge />
        <div class="mt-10 flex flex-col items-center">
          <p>Your Cart Is Currently Empty.</p>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
