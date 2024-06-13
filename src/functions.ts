import { messages } from './messages';
import { MessageTone } from './types';

export function getStatusQuote(statusCode: number, messageTone: MessageTone): string {
    const validMessageTones: MessageTone[] = ["formal", "informal", "straightforward", "technical", "funny", "empathetic", "educational"];
    
    if (!messages[statusCode]) {
        throw new Error(`Invalid status code: ${statusCode}.`);
    }
    
    if (!validMessageTones.includes(messageTone)) {
        throw new Error(`Invalid message type: ${messageTone}. Valid types are: ${validMessageTones.join(', ')}.`);
    }
    
    return messages[statusCode][messageTone];
}
