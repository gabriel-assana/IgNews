import styles from './styles.module.scss';

interface SubscribeButtoProps {
    priceId: string;
}

export function SubscribeButton({ priceId }:SubscribeButtoProps){
    return(
        <button
            type="button"
            className={styles.subscribeButton}
        >
            Subscribe now
        </button>
    );
}