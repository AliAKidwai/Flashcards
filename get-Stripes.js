import { loadStripe } from '@stripe/stripe-js'

let stripePromise

const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) // Might have to change
    }
    return stripePromise
}

export default getStripe