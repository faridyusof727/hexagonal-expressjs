import {IHelloWorldService} from "./port";
import {Request, Response} from "express";

type Services = {
    greetService: IHelloWorldService
}

export default function (services: Services) {
    return {
        greetAction(req: Request, res: Response) {
            const name = req.params.name
            res.json({
                message: services.greetService.greet(name)
            })
        }
    }
}
