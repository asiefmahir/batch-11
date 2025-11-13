"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { useCart } from "@/app/contexts/Cart";

function CartItem({ item }) {
	const [quantity, setQuantity] = useState(item.quantity);

	const { updateQuantity, removeFromCart } = useCart();
	return (
		<tr>
			<td>
				<div className="product">
					<img src={item.image} className="product-img" alt="" />
				</div>
			</td>
			<td>
				<p>{item.title}</p>
			</td>
			<td>$ {item.price}</td>
			<td>
				<div className="qty_input">
					<button
						className="qty-count qty-count--minus"
						data-action="minus"
						type="button"
					>
						<figure
							onClick={() => {
								if (quantity > 1) {
									setQuantity(quantity - 1);
									updateQuantity(item._id, quantity - 1);
								} else {
									return alert(`Quantity must be above 1`);
								}
							}}
						>
							-
						</figure>
					</button>
					<input
						className="product-qty"
						type="number"
						name="product-qty"
						value={quantity}
						min="1"
						onChange={(e) => {
							if (parseInt(e.target.value) >= 0) {
								setQuantity(parseInt(e.target.value));
								updateQuantity(
									item._id,
									Number(e.target.value),
								);
							}
						}}
					/>
					<button
						className="qty-count qty-count--add"
						data-action="add"
						type="button"
					>
						<figure
							onClick={() => {
								if (quantity >= 0) {
									setQuantity((prevQuantity) => {
										return prevQuantity + 1;
									});
									updateQuantity(item._id, quantity + 1);
								}
							}}
						>
							+
							{/* <img alt="Increase Item" src={icons.plusIcon} /> */}
						</figure>
					</button>
				</div>
			</td>
			<td>$ {item.quantity ? item.price * item.quantity : 0}</td>
			<td onClick={() => removeFromCart(item._id)}>x</td>
		</tr>
	);
}

export default CartItem;
