import { formatMoney } from "../../utils/money";
import DeliveryOptions from "./DeliveryOptions";

function CartItemDetails({ cartItem, deliveryOptions }) {
  return (
    <div className="cart-item-details-grid">
      <img className="product-image" src={cartItem.product.image} />

      <div className="cart-item-details">
        <div className="product-name">{cartItem.product.name}</div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity:{cartItem.quantity}
            <span className="quantity-label">{cartItem.product.quantity}</span>
          </span>
          <span className="update-quantity-link link-primary">Update</span>
          <span className="delete-quantity-link link-primary">Delete</span>
        </div>
      </div>

      <DeliveryOptions deliveryOptions={deliveryOptions} cartItem={cartItem} />
    </div>
  );
}

export default CartItemDetails;
