import {GreetMessage} from "./model";

export interface IHelloWorldRepository {
    getHelloWorld(name: string): string
}

export interface IHelloWorldService {
    greet(name: string): GreetMessage
}
