import { messages } from './messages.js';

export function getStatusMessage(statusCode, messageTone) {
    const validMessageTones = ["formal", "informal", "straightforward", "technical", "funny", "empathetic", "educational"];
    
    if (!messages[statusCode]) {
        throw new Error(`Invalid status code: ${statusCode}.`);
    }
    
    if (!validMessageTones.includes(messageTone)) {
        throw new Error(`Invalid message type: ${messageTone}. Valid types are: ${validMessageTones.join(', ')}.`);
    }
    
    return messages[statusCode][messageTone];
}
