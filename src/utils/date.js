
import { formatDistanceToNow } from 'date-fns';

export const dateAgoPeriod = (date) => {
    const timeAgo = formatDistanceToNow(new Date(date), { addSuffix: true });
    return timeAgo
}