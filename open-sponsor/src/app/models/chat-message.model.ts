export class ChatMessage {
    key?: [{username: string}];
    _id?: string;
    username?: string;
    message?: string;
    timestamp?: Date = new Date();
}
