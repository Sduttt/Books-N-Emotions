'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const SuccessPage = () => {

  const router = useRouter();
  const searchParams = useSearchParams();
  const intentId = searchParams.get("payment_intent");

  // http://localhost:3000/success?payment_intent=pi_3Nlwc6SHHrG5CUzj1MzPAnPK&payment_intent_client_secret=pi_3Nlwc6SHHrG5CUzj1MzPAnPK_secret_wpubYjC6ezeRH9yKooFWEdy2X&redirect_status=succeeded
  useEffect(() => {
    const makeRequest = async () => {
      try {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/confirm/${intentId}`, {
          method: "PUT",
        });
        setTimeout(() => {
          router.push("/orders");
        }, 5000);
      } catch (error) {
        console.log(error)
      }
    };

    makeRequest();
    }, [intentId, router]);
    
  return (
    <div className="min-h-[calc(100vh-7rem)] sm:min-h-[calc(100vh-9rem)] md:min-h-[calc(100vh-11rem)]">
      Payment successful, redirecting...
    </div>
  )
}

export default SuccessPage