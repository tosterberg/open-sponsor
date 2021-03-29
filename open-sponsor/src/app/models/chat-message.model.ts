export class ChatMessage {
    key?: [{username: string}];
    username?: string;
    message?: string;
    timestamp?: Date = new Date();
}
