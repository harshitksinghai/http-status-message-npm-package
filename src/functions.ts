import { emojis } from './messages/emojis';
import { messages } from './messages/messages';
import { MessageTone } from './types';

interface StatusResponse {
    message: string;
    emoji: string;
}

export function getStatusMessage(statusCode: number, messageTone: MessageTone): StatusResponse {
    const validMessageTones: MessageTone[] = ["formal", "informal", "straightforward", "technical", "funny", "empathetic", "educational", "short"];

    if (!validMessageTones.includes(messageTone)) {
        throw new Error("Invalid message tone provided.");
    }

    if (!messages[statusCode] || !messages[statusCode][messageTone]) {
        throw new Error("Message not found for the given status code and tone.");
    }

    if (!emojis[statusCode]) {
        throw new Error("Emoji not found for the given status code.");
    }

    return {
        "message": messages[statusCode][messageTone],
        "emoji": emojis[statusCode]
    };
}



