/**
 * We are going to initialize core modules here.
 */
import repository from "../core/domains/hello-world/repository";
import service from "../core/domains/hello-world/service";
import handler from "../core/domains/hello-world/handler";

// Setting the repository
const helloWorldRepository = repository()

// Setting the service
const greetService = service({
    helloWorldRepository
})

// Setting the handler and export
export const greetHandler = handler({
    greetService
})
