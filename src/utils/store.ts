import { ActionTypes, Cart } from "@/types/types"
import { create } from "zustand"
import { persist } from "zustand/middleware"

const INITIAL_STATE = {
    products: [],
    totalPrice: 0,
    totalQuantity: 0
}

export const useCartStore = create(
    persist<Cart & ActionTypes>((set, get) => ({
        products: INITIAL_STATE.products,
        totalPrice: INITIAL_STATE.totalPrice,
        totalQuantity: INITIAL_STATE.totalQuantity,
        addToCart(item) {

            const products = get().products
            const productInState = products.find(product => product.id === item.id)

            if (productInState) {
                const updateProducts = products.map(product => {
                    return product.id === productInState.id ?
                        {
                            ...item,
                            quantity: Number(item.quantity) + Number(product.quantity),
                            price: Number(item.price) + Number(product.price)
                        } : item
                });
                set(state => ({
                    products: updateProducts,
                    totalQuantity: Number(state.totalQuantity) + Number(item.quantity),
                    totalPrice: Number(state.totalPrice) + Number(item.price),
                }));

            } else {
                set(state => ({
                    products: [...state.products, item],
                    totalQuantity: Number(state.totalQuantity) + Number(item.quantity),
                    totalPrice: Number(state.totalPrice) + Number(item.price)
                }))
            }
        },
        removeFromCart(item) {
            set(state => ({
                products: state.products.filter(product => product.id !== item.id),
                totalQuantity: Number(state.totalQuantity) - Number(item.quantity),
                totalPrice: Number(state.totalPrice) - Number(item.price)
            }))
        }
    }), { name: "cart", skipHydration: true }))
