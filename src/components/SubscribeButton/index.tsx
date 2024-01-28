import { useSession, signIn } from 'next-auth/client';
import { api } from '../../services/api';
import styles from './styles.module.scss';
import { getStripeJs } from '../../services/stripe-js';
import { Any } from 'faunadb';
import { useRouter } from 'next/router';


interface SubscribeButtoProps {
    priceId: string;
}

export function SubscribeButton({ priceId }:SubscribeButtoProps){
    const [session] = useSession();
    const router = useRouter()

    async function handleSubscirbe() {
        if (!session){
            signIn('github')
            return;
        }

        if (session.activeSubscription) {
            router.push('/posts')
            return;
        }

        try {
            const response = await api.post('/subscribe')

            const { sessionId } =  response.data

            const stripe = await getStripeJs()

            await stripe.redirectToCheckout({ sessionId })
        } catch (err){
            alert(err.message);
        }        
    }

    return(
        <button
            type="button"
            className={styles.subscribeButton}
            onClick={handleSubscirbe}
        >
            Subscribe now
        </button>
    );
}