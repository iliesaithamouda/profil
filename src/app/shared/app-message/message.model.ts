import { messageState } from '../types';

export interface Message {
    description: string;
    state: messageState;
}