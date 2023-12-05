import { useSession, signIn } from 'next-auth/client';
import styles from './styles.module.scss';
import { sign } from 'crypto';

interface SubscribeButtoProps {
    priceId: string;
}

export function SubscribeButton({ priceId }:SubscribeButtoProps){
    const [session] = useSession();

    function handleSubscirbe() {
        if (!session){
            signIn('github')
            return;
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