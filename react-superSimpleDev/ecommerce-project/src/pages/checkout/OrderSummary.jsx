import DeliveryOptions from "./DeliveryOptions";
import DeliveryDate from "./DeliveryDate";
import CartItemDetails from "./CartItemDetails";

function OrderSummary({ cart, deliveryOptions }) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          const selectedDeliveryOption = deliveryOptions.find(
            (deliveryOption) => {
              return deliveryOption.id === cartItem.deliveryOptionId;
            }
          );
          return (
            <div key={cartItem.productId} className="cart-item-container">
              <DeliveryDate selectedDeliveryOption={selectedDeliveryOption} />

              <CartItemDetails
                cartItem={cartItem}
                deliveryOptions={deliveryOptions}
              />
            </div>
          );
        })}
    </div>
  );
}

export default OrderSummary;
