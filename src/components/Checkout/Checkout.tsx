import React, { useState, useContext } from "react";
import { Context } from "../context/Context";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

interface Props {
  amount: number;
  currency: string;
  onCheckoutSuccess: () => void;
}

const Checkout: React.FC<Props> = ({ amount, currency, onCheckoutSuccess }) => {
  const {state} = useContext(Context)
  const navigate = useNavigate()
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setError("Card element not found");
      setIsProcessing(false);
      return;
    }

    const { error: stripeError, paymentMethod } =
      await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (stripeError) {
        setError(stripeError.message ?? "An unknown error occurred");
        setIsProcessing(false);
        return;
      }


	if(!error) {
    // Send the payment method ID to your server to create a charge
    // Replace this with your own server-side code
    const response = await axios.post("http://localhost:9000/checkout/posted", {
		paymentMethodId: paymentMethod?.id,
        amount,
        currency,
    });
    const response2 = response.data
    console.log(response2.payVerified)
    response2.payVerified === true ? setIsProcessing(false) : setIsProcessing(true)
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Tu pago ha sido realizado. Te llegara un mail con el seguimiento'
    }).then((result) => {
      if(result.isConfirmed) {
        navigate("/home")
      }
    });
    
}

};
console.log(state.user, "USUSARIOS")
  return (
    <form onSubmit={handleSubmit} className="bg-gray flex justify-center items-center">
		<div className="space-y-16">
      <div className="w-96 h-56 bg-red-100 rounded-xl text-white shadow-2xl transition-transform transform hover:scale-110">
	
        <div className="italic w-full px-8 absolute top-8">
          <label>
		  <div className="flex justify-between p-3 text-gray-900">
		  Detalles de la tarjeta
		  </div>
            <CardElement />
          </label>
        
		<div className="p-20 font-bold text-gray">
        {error && <div>{error}</div>}
        <button className="bg-gray-700 rounded p-1" type="submit" disabled={isProcessing}>
          {isProcessing ? "Procesando..." : `Pagar ${amount} ${currency}`}
        </button>
		</div>
		</div>
      </div>
	  </div>
    </form>
  );
};
export default Checkout;
