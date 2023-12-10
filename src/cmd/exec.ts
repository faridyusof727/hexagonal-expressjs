import {greetService} from "./init";

const args = process.argv.slice(2);

if (args.length === 0) {
    console.error("No argument");
    process.exit(1);
}

const message = greetService.greet(args[0])

console.info(message)
