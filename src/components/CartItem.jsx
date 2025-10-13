import { useState } from "react";
import { useDispatch } from "react-redux";

function CartItem({ item }) {
	const [itemQuantity, setItemQuantity] = useState(item.quantity);

	const dispatch = useDispatch();

	return (
		<tr>
			<td>
				<div className="product">
					<img
						src={item.image}
						className="product-img"
						alt={item.title}
					/>
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
						onClick={() => {
							if (item.quantity <= 1) {
								return alert(`Quantity can not be less not 1`);
							}
							setItemQuantity(itemQuantity - 1);
							dispatch({
								type: "cart/modifyQuantityOfAnItem",
								payload: {
									id: item.id,
									quantity: itemQuantity - 1,
								},
							});
						}}
					>
						<figure>-</figure>
					</button>
					<input
						className="product-qty"
						type="number"
						name="product-qty"
						value={itemQuantity}
						min="1"
						onChange={(event) => {
							console.log(typeof event.target.value);
							const newQuantity = Number(event.target.value);
							setItemQuantity(newQuantity);
							dispatch({
								type: "cart/modifyQuantityOfAnItem",
								payload: { id: item.id, quantity: newQuantity },
							});
						}}
					/>
					<button
						className="qty-count qty-count--add"
						data-action="add"
						type="button"
						onClick={() => {
							setItemQuantity(itemQuantity + 1);
							dispatch({
								type: "cart/modifyQuantityOfAnItem",
								payload: {
									id: item.id,
									quantity: itemQuantity + 1,
								},
							});
						}}
					>
						<figure>+</figure>
					</button>
				</div>
			</td>
			<td>$ {item.price * item.quantity}</td>
			<td>
				<button
					onClick={() =>
						dispatch({
							type: "cart/removeProductFromCart",
							payload: item.id,
						})
					}
					className="cross-icon"
				>
					x
				</button>
			</td>
		</tr>
	);
}

export default CartItem;
