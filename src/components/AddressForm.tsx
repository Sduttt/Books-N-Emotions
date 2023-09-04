import { AddressElement } from "@stripe/react-stripe-js"


const AddressForm = () => {
    return (
        <>
            <h3 className="">Address</h3>
            <AddressElement options={{ mode: "shipping" }} onChange={(e) => {
                if(e.complete){
                    const address = e.value.address;
                }
            }} />
        </>
    )
}

export default AddressForm