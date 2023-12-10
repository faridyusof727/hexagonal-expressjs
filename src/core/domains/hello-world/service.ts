import {IHelloWorldRepository, IHelloWorldService} from "./port";
import {GreetMessage} from "./model";

type Repositories = {
    helloWorldRepository: IHelloWorldRepository
}

export default function (repo: Repositories): IHelloWorldService {
    return {
        greet(name: string): GreetMessage {
            return repo.helloWorldRepository.getHelloWorld(name)
        }
    }
}
