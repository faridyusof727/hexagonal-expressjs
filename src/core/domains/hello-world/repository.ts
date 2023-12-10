import {IHelloWorldRepository} from "./port";

/**
 * We can inject data provider such as MySQL, Postgres, etc...
 *
 * e.g.
 *
 * export default function (dbInstance: instance): IHelloWorldRepository {
 *    ...
 * }
 *
 * If you have multiple data sources, you might want to implement
 * specific interface for them. Example above only to provide one instance.
 *
 * To get the idea, see the assumption below
 *
 * export default function (dataSource: DataSource): IHelloWorldRepository {
 *    ...
 *    return {
 *      exampleFunction() {
 *          dataSource.select("user").where("id = ?", 1).findOne()
 *      }
 *    }
 * }
 *
 * The dataSource might be coming from Postgres or MysQL, does not matter.
 */
export default function (): IHelloWorldRepository {
    return {
        getHelloWorld(name: string) {
            /**
             * You can use injected instance here to get result
             *
             * e.g.
             *
             * dbInstance.query("SELECT * FROM ...");
             */
            return `Hello World, ${name}`;
        }
    }
}
