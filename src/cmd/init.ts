/**
 * We are going to initialize core modules here.
 */
import repository from "../core/domains/hello-world/repository";
import service from "../core/domains/hello-world/service";

// Setting the repository
const helloWorldRepository = repository()

// Setting the service and export
export const greetService = service({
    helloWorldRepository
})
