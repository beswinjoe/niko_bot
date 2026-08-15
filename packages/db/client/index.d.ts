
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Guild
 * 
 */
export type Guild = $Result.DefaultSelection<Prisma.$GuildPayload>
/**
 * Model GuildSetting
 * 
 */
export type GuildSetting = $Result.DefaultSelection<Prisma.$GuildSettingPayload>
/**
 * Model ModerationCase
 * 
 */
export type ModerationCase = $Result.DefaultSelection<Prisma.$ModerationCasePayload>
/**
 * Model Warning
 * 
 */
export type Warning = $Result.DefaultSelection<Prisma.$WarningPayload>
/**
 * Model SecurityEvent
 * 
 */
export type SecurityEvent = $Result.DefaultSelection<Prisma.$SecurityEventPayload>
/**
 * Model RaidEvent
 * 
 */
export type RaidEvent = $Result.DefaultSelection<Prisma.$RaidEventPayload>
/**
 * Model MemberSnapshot
 * 
 */
export type MemberSnapshot = $Result.DefaultSelection<Prisma.$MemberSnapshotPayload>
/**
 * Model MessageActivity
 * 
 */
export type MessageActivity = $Result.DefaultSelection<Prisma.$MessageActivityPayload>
/**
 * Model BotStat
 * 
 */
export type BotStat = $Result.DefaultSelection<Prisma.$BotStatPayload>
/**
 * Model BotStatHistory
 * 
 */
export type BotStatHistory = $Result.DefaultSelection<Prisma.$BotStatHistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.guild`: Exposes CRUD operations for the **Guild** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Guilds
    * const guilds = await prisma.guild.findMany()
    * ```
    */
  get guild(): Prisma.GuildDelegate<ExtArgs>;

  /**
   * `prisma.guildSetting`: Exposes CRUD operations for the **GuildSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GuildSettings
    * const guildSettings = await prisma.guildSetting.findMany()
    * ```
    */
  get guildSetting(): Prisma.GuildSettingDelegate<ExtArgs>;

  /**
   * `prisma.moderationCase`: Exposes CRUD operations for the **ModerationCase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModerationCases
    * const moderationCases = await prisma.moderationCase.findMany()
    * ```
    */
  get moderationCase(): Prisma.ModerationCaseDelegate<ExtArgs>;

  /**
   * `prisma.warning`: Exposes CRUD operations for the **Warning** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Warnings
    * const warnings = await prisma.warning.findMany()
    * ```
    */
  get warning(): Prisma.WarningDelegate<ExtArgs>;

  /**
   * `prisma.securityEvent`: Exposes CRUD operations for the **SecurityEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SecurityEvents
    * const securityEvents = await prisma.securityEvent.findMany()
    * ```
    */
  get securityEvent(): Prisma.SecurityEventDelegate<ExtArgs>;

  /**
   * `prisma.raidEvent`: Exposes CRUD operations for the **RaidEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RaidEvents
    * const raidEvents = await prisma.raidEvent.findMany()
    * ```
    */
  get raidEvent(): Prisma.RaidEventDelegate<ExtArgs>;

  /**
   * `prisma.memberSnapshot`: Exposes CRUD operations for the **MemberSnapshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MemberSnapshots
    * const memberSnapshots = await prisma.memberSnapshot.findMany()
    * ```
    */
  get memberSnapshot(): Prisma.MemberSnapshotDelegate<ExtArgs>;

  /**
   * `prisma.messageActivity`: Exposes CRUD operations for the **MessageActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageActivities
    * const messageActivities = await prisma.messageActivity.findMany()
    * ```
    */
  get messageActivity(): Prisma.MessageActivityDelegate<ExtArgs>;

  /**
   * `prisma.botStat`: Exposes CRUD operations for the **BotStat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BotStats
    * const botStats = await prisma.botStat.findMany()
    * ```
    */
  get botStat(): Prisma.BotStatDelegate<ExtArgs>;

  /**
   * `prisma.botStatHistory`: Exposes CRUD operations for the **BotStatHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BotStatHistories
    * const botStatHistories = await prisma.botStatHistory.findMany()
    * ```
    */
  get botStatHistory(): Prisma.BotStatHistoryDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Guild: 'Guild',
    GuildSetting: 'GuildSetting',
    ModerationCase: 'ModerationCase',
    Warning: 'Warning',
    SecurityEvent: 'SecurityEvent',
    RaidEvent: 'RaidEvent',
    MemberSnapshot: 'MemberSnapshot',
    MessageActivity: 'MessageActivity',
    BotStat: 'BotStat',
    BotStatHistory: 'BotStatHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "guild" | "guildSetting" | "moderationCase" | "warning" | "securityEvent" | "raidEvent" | "memberSnapshot" | "messageActivity" | "botStat" | "botStatHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Guild: {
        payload: Prisma.$GuildPayload<ExtArgs>
        fields: Prisma.GuildFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuildFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuildFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>
          }
          findFirst: {
            args: Prisma.GuildFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuildFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>
          }
          findMany: {
            args: Prisma.GuildFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>[]
          }
          create: {
            args: Prisma.GuildCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>
          }
          createMany: {
            args: Prisma.GuildCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuildCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>[]
          }
          delete: {
            args: Prisma.GuildDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>
          }
          update: {
            args: Prisma.GuildUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>
          }
          deleteMany: {
            args: Prisma.GuildDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuildUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GuildUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>
          }
          aggregate: {
            args: Prisma.GuildAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuild>
          }
          groupBy: {
            args: Prisma.GuildGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuildGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuildCountArgs<ExtArgs>
            result: $Utils.Optional<GuildCountAggregateOutputType> | number
          }
        }
      }
      GuildSetting: {
        payload: Prisma.$GuildSettingPayload<ExtArgs>
        fields: Prisma.GuildSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuildSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuildSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildSettingPayload>
          }
          findFirst: {
            args: Prisma.GuildSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuildSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildSettingPayload>
          }
          findMany: {
            args: Prisma.GuildSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildSettingPayload>[]
          }
          create: {
            args: Prisma.GuildSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildSettingPayload>
          }
          createMany: {
            args: Prisma.GuildSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuildSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildSettingPayload>[]
          }
          delete: {
            args: Prisma.GuildSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildSettingPayload>
          }
          update: {
            args: Prisma.GuildSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildSettingPayload>
          }
          deleteMany: {
            args: Prisma.GuildSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuildSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GuildSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildSettingPayload>
          }
          aggregate: {
            args: Prisma.GuildSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuildSetting>
          }
          groupBy: {
            args: Prisma.GuildSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuildSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuildSettingCountArgs<ExtArgs>
            result: $Utils.Optional<GuildSettingCountAggregateOutputType> | number
          }
        }
      }
      ModerationCase: {
        payload: Prisma.$ModerationCasePayload<ExtArgs>
        fields: Prisma.ModerationCaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModerationCaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModerationCasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModerationCaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModerationCasePayload>
          }
          findFirst: {
            args: Prisma.ModerationCaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModerationCasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModerationCaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModerationCasePayload>
          }
          findMany: {
            args: Prisma.ModerationCaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModerationCasePayload>[]
          }
          create: {
            args: Prisma.ModerationCaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModerationCasePayload>
          }
          createMany: {
            args: Prisma.ModerationCaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModerationCaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModerationCasePayload>[]
          }
          delete: {
            args: Prisma.ModerationCaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModerationCasePayload>
          }
          update: {
            args: Prisma.ModerationCaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModerationCasePayload>
          }
          deleteMany: {
            args: Prisma.ModerationCaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModerationCaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ModerationCaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModerationCasePayload>
          }
          aggregate: {
            args: Prisma.ModerationCaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModerationCase>
          }
          groupBy: {
            args: Prisma.ModerationCaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModerationCaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModerationCaseCountArgs<ExtArgs>
            result: $Utils.Optional<ModerationCaseCountAggregateOutputType> | number
          }
        }
      }
      Warning: {
        payload: Prisma.$WarningPayload<ExtArgs>
        fields: Prisma.WarningFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WarningFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarningPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WarningFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarningPayload>
          }
          findFirst: {
            args: Prisma.WarningFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarningPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WarningFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarningPayload>
          }
          findMany: {
            args: Prisma.WarningFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarningPayload>[]
          }
          create: {
            args: Prisma.WarningCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarningPayload>
          }
          createMany: {
            args: Prisma.WarningCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WarningCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarningPayload>[]
          }
          delete: {
            args: Prisma.WarningDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarningPayload>
          }
          update: {
            args: Prisma.WarningUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarningPayload>
          }
          deleteMany: {
            args: Prisma.WarningDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WarningUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WarningUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarningPayload>
          }
          aggregate: {
            args: Prisma.WarningAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWarning>
          }
          groupBy: {
            args: Prisma.WarningGroupByArgs<ExtArgs>
            result: $Utils.Optional<WarningGroupByOutputType>[]
          }
          count: {
            args: Prisma.WarningCountArgs<ExtArgs>
            result: $Utils.Optional<WarningCountAggregateOutputType> | number
          }
        }
      }
      SecurityEvent: {
        payload: Prisma.$SecurityEventPayload<ExtArgs>
        fields: Prisma.SecurityEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SecurityEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SecurityEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload>
          }
          findFirst: {
            args: Prisma.SecurityEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SecurityEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload>
          }
          findMany: {
            args: Prisma.SecurityEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload>[]
          }
          create: {
            args: Prisma.SecurityEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload>
          }
          createMany: {
            args: Prisma.SecurityEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SecurityEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload>[]
          }
          delete: {
            args: Prisma.SecurityEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload>
          }
          update: {
            args: Prisma.SecurityEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload>
          }
          deleteMany: {
            args: Prisma.SecurityEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SecurityEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SecurityEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload>
          }
          aggregate: {
            args: Prisma.SecurityEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSecurityEvent>
          }
          groupBy: {
            args: Prisma.SecurityEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<SecurityEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.SecurityEventCountArgs<ExtArgs>
            result: $Utils.Optional<SecurityEventCountAggregateOutputType> | number
          }
        }
      }
      RaidEvent: {
        payload: Prisma.$RaidEventPayload<ExtArgs>
        fields: Prisma.RaidEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RaidEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RaidEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidEventPayload>
          }
          findFirst: {
            args: Prisma.RaidEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RaidEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidEventPayload>
          }
          findMany: {
            args: Prisma.RaidEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidEventPayload>[]
          }
          create: {
            args: Prisma.RaidEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidEventPayload>
          }
          createMany: {
            args: Prisma.RaidEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RaidEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidEventPayload>[]
          }
          delete: {
            args: Prisma.RaidEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidEventPayload>
          }
          update: {
            args: Prisma.RaidEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidEventPayload>
          }
          deleteMany: {
            args: Prisma.RaidEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RaidEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RaidEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidEventPayload>
          }
          aggregate: {
            args: Prisma.RaidEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRaidEvent>
          }
          groupBy: {
            args: Prisma.RaidEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<RaidEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.RaidEventCountArgs<ExtArgs>
            result: $Utils.Optional<RaidEventCountAggregateOutputType> | number
          }
        }
      }
      MemberSnapshot: {
        payload: Prisma.$MemberSnapshotPayload<ExtArgs>
        fields: Prisma.MemberSnapshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberSnapshotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberSnapshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberSnapshotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberSnapshotPayload>
          }
          findFirst: {
            args: Prisma.MemberSnapshotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberSnapshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberSnapshotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberSnapshotPayload>
          }
          findMany: {
            args: Prisma.MemberSnapshotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberSnapshotPayload>[]
          }
          create: {
            args: Prisma.MemberSnapshotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberSnapshotPayload>
          }
          createMany: {
            args: Prisma.MemberSnapshotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemberSnapshotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberSnapshotPayload>[]
          }
          delete: {
            args: Prisma.MemberSnapshotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberSnapshotPayload>
          }
          update: {
            args: Prisma.MemberSnapshotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberSnapshotPayload>
          }
          deleteMany: {
            args: Prisma.MemberSnapshotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberSnapshotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MemberSnapshotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberSnapshotPayload>
          }
          aggregate: {
            args: Prisma.MemberSnapshotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMemberSnapshot>
          }
          groupBy: {
            args: Prisma.MemberSnapshotGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberSnapshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberSnapshotCountArgs<ExtArgs>
            result: $Utils.Optional<MemberSnapshotCountAggregateOutputType> | number
          }
        }
      }
      MessageActivity: {
        payload: Prisma.$MessageActivityPayload<ExtArgs>
        fields: Prisma.MessageActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageActivityPayload>
          }
          findFirst: {
            args: Prisma.MessageActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageActivityPayload>
          }
          findMany: {
            args: Prisma.MessageActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageActivityPayload>[]
          }
          create: {
            args: Prisma.MessageActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageActivityPayload>
          }
          createMany: {
            args: Prisma.MessageActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageActivityPayload>[]
          }
          delete: {
            args: Prisma.MessageActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageActivityPayload>
          }
          update: {
            args: Prisma.MessageActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageActivityPayload>
          }
          deleteMany: {
            args: Prisma.MessageActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MessageActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageActivityPayload>
          }
          aggregate: {
            args: Prisma.MessageActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessageActivity>
          }
          groupBy: {
            args: Prisma.MessageActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageActivityCountArgs<ExtArgs>
            result: $Utils.Optional<MessageActivityCountAggregateOutputType> | number
          }
        }
      }
      BotStat: {
        payload: Prisma.$BotStatPayload<ExtArgs>
        fields: Prisma.BotStatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BotStatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotStatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BotStatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotStatPayload>
          }
          findFirst: {
            args: Prisma.BotStatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotStatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BotStatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotStatPayload>
          }
          findMany: {
            args: Prisma.BotStatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotStatPayload>[]
          }
          create: {
            args: Prisma.BotStatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotStatPayload>
          }
          createMany: {
            args: Prisma.BotStatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BotStatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotStatPayload>[]
          }
          delete: {
            args: Prisma.BotStatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotStatPayload>
          }
          update: {
            args: Prisma.BotStatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotStatPayload>
          }
          deleteMany: {
            args: Prisma.BotStatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BotStatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BotStatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotStatPayload>
          }
          aggregate: {
            args: Prisma.BotStatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBotStat>
          }
          groupBy: {
            args: Prisma.BotStatGroupByArgs<ExtArgs>
            result: $Utils.Optional<BotStatGroupByOutputType>[]
          }
          count: {
            args: Prisma.BotStatCountArgs<ExtArgs>
            result: $Utils.Optional<BotStatCountAggregateOutputType> | number
          }
        }
      }
      BotStatHistory: {
        payload: Prisma.$BotStatHistoryPayload<ExtArgs>
        fields: Prisma.BotStatHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BotStatHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotStatHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BotStatHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotStatHistoryPayload>
          }
          findFirst: {
            args: Prisma.BotStatHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotStatHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BotStatHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotStatHistoryPayload>
          }
          findMany: {
            args: Prisma.BotStatHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotStatHistoryPayload>[]
          }
          create: {
            args: Prisma.BotStatHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotStatHistoryPayload>
          }
          createMany: {
            args: Prisma.BotStatHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BotStatHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotStatHistoryPayload>[]
          }
          delete: {
            args: Prisma.BotStatHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotStatHistoryPayload>
          }
          update: {
            args: Prisma.BotStatHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotStatHistoryPayload>
          }
          deleteMany: {
            args: Prisma.BotStatHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BotStatHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BotStatHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotStatHistoryPayload>
          }
          aggregate: {
            args: Prisma.BotStatHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBotStatHistory>
          }
          groupBy: {
            args: Prisma.BotStatHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<BotStatHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.BotStatHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<BotStatHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    cases: number
    moderated: number
    warnings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cases?: boolean | UserCountOutputTypeCountCasesArgs
    moderated?: boolean | UserCountOutputTypeCountModeratedArgs
    warnings?: boolean | UserCountOutputTypeCountWarningsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModerationCaseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountModeratedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModerationCaseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWarningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarningWhereInput
  }


  /**
   * Count Type GuildCountOutputType
   */

  export type GuildCountOutputType = {
    cases: number
    warnings: number
    securityEvents: number
    raidEvents: number
    memberSnapshots: number
    messageActivity: number
  }

  export type GuildCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cases?: boolean | GuildCountOutputTypeCountCasesArgs
    warnings?: boolean | GuildCountOutputTypeCountWarningsArgs
    securityEvents?: boolean | GuildCountOutputTypeCountSecurityEventsArgs
    raidEvents?: boolean | GuildCountOutputTypeCountRaidEventsArgs
    memberSnapshots?: boolean | GuildCountOutputTypeCountMemberSnapshotsArgs
    messageActivity?: boolean | GuildCountOutputTypeCountMessageActivityArgs
  }

  // Custom InputTypes
  /**
   * GuildCountOutputType without action
   */
  export type GuildCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildCountOutputType
     */
    select?: GuildCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuildCountOutputType without action
   */
  export type GuildCountOutputTypeCountCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModerationCaseWhereInput
  }

  /**
   * GuildCountOutputType without action
   */
  export type GuildCountOutputTypeCountWarningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarningWhereInput
  }

  /**
   * GuildCountOutputType without action
   */
  export type GuildCountOutputTypeCountSecurityEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecurityEventWhereInput
  }

  /**
   * GuildCountOutputType without action
   */
  export type GuildCountOutputTypeCountRaidEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaidEventWhereInput
  }

  /**
   * GuildCountOutputType without action
   */
  export type GuildCountOutputTypeCountMemberSnapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberSnapshotWhereInput
  }

  /**
   * GuildCountOutputType without action
   */
  export type GuildCountOutputTypeCountMessageActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageActivityWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cases?: boolean | User$casesArgs<ExtArgs>
    moderated?: boolean | User$moderatedArgs<ExtArgs>
    warnings?: boolean | User$warningsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cases?: boolean | User$casesArgs<ExtArgs>
    moderated?: boolean | User$moderatedArgs<ExtArgs>
    warnings?: boolean | User$warningsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      cases: Prisma.$ModerationCasePayload<ExtArgs>[]
      moderated: Prisma.$ModerationCasePayload<ExtArgs>[]
      warnings: Prisma.$WarningPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cases<T extends User$casesArgs<ExtArgs> = {}>(args?: Subset<T, User$casesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModerationCasePayload<ExtArgs>, T, "findMany"> | Null>
    moderated<T extends User$moderatedArgs<ExtArgs> = {}>(args?: Subset<T, User$moderatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModerationCasePayload<ExtArgs>, T, "findMany"> | Null>
    warnings<T extends User$warningsArgs<ExtArgs> = {}>(args?: Subset<T, User$warningsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.cases
   */
  export type User$casesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModerationCase
     */
    select?: ModerationCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationCaseInclude<ExtArgs> | null
    where?: ModerationCaseWhereInput
    orderBy?: ModerationCaseOrderByWithRelationInput | ModerationCaseOrderByWithRelationInput[]
    cursor?: ModerationCaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModerationCaseScalarFieldEnum | ModerationCaseScalarFieldEnum[]
  }

  /**
   * User.moderated
   */
  export type User$moderatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModerationCase
     */
    select?: ModerationCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationCaseInclude<ExtArgs> | null
    where?: ModerationCaseWhereInput
    orderBy?: ModerationCaseOrderByWithRelationInput | ModerationCaseOrderByWithRelationInput[]
    cursor?: ModerationCaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModerationCaseScalarFieldEnum | ModerationCaseScalarFieldEnum[]
  }

  /**
   * User.warnings
   */
  export type User$warningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningInclude<ExtArgs> | null
    where?: WarningWhereInput
    orderBy?: WarningOrderByWithRelationInput | WarningOrderByWithRelationInput[]
    cursor?: WarningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WarningScalarFieldEnum | WarningScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Guild
   */

  export type AggregateGuild = {
    _count: GuildCountAggregateOutputType | null
    _avg: GuildAvgAggregateOutputType | null
    _sum: GuildSumAggregateOutputType | null
    _min: GuildMinAggregateOutputType | null
    _max: GuildMaxAggregateOutputType | null
  }

  export type GuildAvgAggregateOutputType = {
    memberCount: number | null
  }

  export type GuildSumAggregateOutputType = {
    memberCount: number | null
  }

  export type GuildMinAggregateOutputType = {
    id: string | null
    name: string | null
    memberCount: number | null
    joinedAt: Date | null
    updatedAt: Date | null
  }

  export type GuildMaxAggregateOutputType = {
    id: string | null
    name: string | null
    memberCount: number | null
    joinedAt: Date | null
    updatedAt: Date | null
  }

  export type GuildCountAggregateOutputType = {
    id: number
    name: number
    memberCount: number
    joinedAt: number
    updatedAt: number
    _all: number
  }


  export type GuildAvgAggregateInputType = {
    memberCount?: true
  }

  export type GuildSumAggregateInputType = {
    memberCount?: true
  }

  export type GuildMinAggregateInputType = {
    id?: true
    name?: true
    memberCount?: true
    joinedAt?: true
    updatedAt?: true
  }

  export type GuildMaxAggregateInputType = {
    id?: true
    name?: true
    memberCount?: true
    joinedAt?: true
    updatedAt?: true
  }

  export type GuildCountAggregateInputType = {
    id?: true
    name?: true
    memberCount?: true
    joinedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GuildAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guild to aggregate.
     */
    where?: GuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guilds to fetch.
     */
    orderBy?: GuildOrderByWithRelationInput | GuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Guilds
    **/
    _count?: true | GuildCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GuildAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GuildSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuildMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuildMaxAggregateInputType
  }

  export type GetGuildAggregateType<T extends GuildAggregateArgs> = {
        [P in keyof T & keyof AggregateGuild]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuild[P]>
      : GetScalarType<T[P], AggregateGuild[P]>
  }




  export type GuildGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuildWhereInput
    orderBy?: GuildOrderByWithAggregationInput | GuildOrderByWithAggregationInput[]
    by: GuildScalarFieldEnum[] | GuildScalarFieldEnum
    having?: GuildScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuildCountAggregateInputType | true
    _avg?: GuildAvgAggregateInputType
    _sum?: GuildSumAggregateInputType
    _min?: GuildMinAggregateInputType
    _max?: GuildMaxAggregateInputType
  }

  export type GuildGroupByOutputType = {
    id: string
    name: string
    memberCount: number
    joinedAt: Date
    updatedAt: Date
    _count: GuildCountAggregateOutputType | null
    _avg: GuildAvgAggregateOutputType | null
    _sum: GuildSumAggregateOutputType | null
    _min: GuildMinAggregateOutputType | null
    _max: GuildMaxAggregateOutputType | null
  }

  type GetGuildGroupByPayload<T extends GuildGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuildGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuildGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuildGroupByOutputType[P]>
            : GetScalarType<T[P], GuildGroupByOutputType[P]>
        }
      >
    >


  export type GuildSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    memberCount?: boolean
    joinedAt?: boolean
    updatedAt?: boolean
    settings?: boolean | Guild$settingsArgs<ExtArgs>
    cases?: boolean | Guild$casesArgs<ExtArgs>
    warnings?: boolean | Guild$warningsArgs<ExtArgs>
    securityEvents?: boolean | Guild$securityEventsArgs<ExtArgs>
    raidEvents?: boolean | Guild$raidEventsArgs<ExtArgs>
    memberSnapshots?: boolean | Guild$memberSnapshotsArgs<ExtArgs>
    messageActivity?: boolean | Guild$messageActivityArgs<ExtArgs>
    _count?: boolean | GuildCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guild"]>

  export type GuildSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    memberCount?: boolean
    joinedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["guild"]>

  export type GuildSelectScalar = {
    id?: boolean
    name?: boolean
    memberCount?: boolean
    joinedAt?: boolean
    updatedAt?: boolean
  }

  export type GuildInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    settings?: boolean | Guild$settingsArgs<ExtArgs>
    cases?: boolean | Guild$casesArgs<ExtArgs>
    warnings?: boolean | Guild$warningsArgs<ExtArgs>
    securityEvents?: boolean | Guild$securityEventsArgs<ExtArgs>
    raidEvents?: boolean | Guild$raidEventsArgs<ExtArgs>
    memberSnapshots?: boolean | Guild$memberSnapshotsArgs<ExtArgs>
    messageActivity?: boolean | Guild$messageActivityArgs<ExtArgs>
    _count?: boolean | GuildCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GuildIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GuildPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Guild"
    objects: {
      settings: Prisma.$GuildSettingPayload<ExtArgs> | null
      cases: Prisma.$ModerationCasePayload<ExtArgs>[]
      warnings: Prisma.$WarningPayload<ExtArgs>[]
      securityEvents: Prisma.$SecurityEventPayload<ExtArgs>[]
      raidEvents: Prisma.$RaidEventPayload<ExtArgs>[]
      memberSnapshots: Prisma.$MemberSnapshotPayload<ExtArgs>[]
      messageActivity: Prisma.$MessageActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      memberCount: number
      joinedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["guild"]>
    composites: {}
  }

  type GuildGetPayload<S extends boolean | null | undefined | GuildDefaultArgs> = $Result.GetResult<Prisma.$GuildPayload, S>

  type GuildCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GuildFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GuildCountAggregateInputType | true
    }

  export interface GuildDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Guild'], meta: { name: 'Guild' } }
    /**
     * Find zero or one Guild that matches the filter.
     * @param {GuildFindUniqueArgs} args - Arguments to find a Guild
     * @example
     * // Get one Guild
     * const guild = await prisma.guild.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuildFindUniqueArgs>(args: SelectSubset<T, GuildFindUniqueArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Guild that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GuildFindUniqueOrThrowArgs} args - Arguments to find a Guild
     * @example
     * // Get one Guild
     * const guild = await prisma.guild.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuildFindUniqueOrThrowArgs>(args: SelectSubset<T, GuildFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Guild that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildFindFirstArgs} args - Arguments to find a Guild
     * @example
     * // Get one Guild
     * const guild = await prisma.guild.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuildFindFirstArgs>(args?: SelectSubset<T, GuildFindFirstArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Guild that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildFindFirstOrThrowArgs} args - Arguments to find a Guild
     * @example
     * // Get one Guild
     * const guild = await prisma.guild.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuildFindFirstOrThrowArgs>(args?: SelectSubset<T, GuildFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Guilds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Guilds
     * const guilds = await prisma.guild.findMany()
     * 
     * // Get first 10 Guilds
     * const guilds = await prisma.guild.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guildWithIdOnly = await prisma.guild.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuildFindManyArgs>(args?: SelectSubset<T, GuildFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Guild.
     * @param {GuildCreateArgs} args - Arguments to create a Guild.
     * @example
     * // Create one Guild
     * const Guild = await prisma.guild.create({
     *   data: {
     *     // ... data to create a Guild
     *   }
     * })
     * 
     */
    create<T extends GuildCreateArgs>(args: SelectSubset<T, GuildCreateArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Guilds.
     * @param {GuildCreateManyArgs} args - Arguments to create many Guilds.
     * @example
     * // Create many Guilds
     * const guild = await prisma.guild.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuildCreateManyArgs>(args?: SelectSubset<T, GuildCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Guilds and returns the data saved in the database.
     * @param {GuildCreateManyAndReturnArgs} args - Arguments to create many Guilds.
     * @example
     * // Create many Guilds
     * const guild = await prisma.guild.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Guilds and only return the `id`
     * const guildWithIdOnly = await prisma.guild.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuildCreateManyAndReturnArgs>(args?: SelectSubset<T, GuildCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Guild.
     * @param {GuildDeleteArgs} args - Arguments to delete one Guild.
     * @example
     * // Delete one Guild
     * const Guild = await prisma.guild.delete({
     *   where: {
     *     // ... filter to delete one Guild
     *   }
     * })
     * 
     */
    delete<T extends GuildDeleteArgs>(args: SelectSubset<T, GuildDeleteArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Guild.
     * @param {GuildUpdateArgs} args - Arguments to update one Guild.
     * @example
     * // Update one Guild
     * const guild = await prisma.guild.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuildUpdateArgs>(args: SelectSubset<T, GuildUpdateArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Guilds.
     * @param {GuildDeleteManyArgs} args - Arguments to filter Guilds to delete.
     * @example
     * // Delete a few Guilds
     * const { count } = await prisma.guild.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuildDeleteManyArgs>(args?: SelectSubset<T, GuildDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guilds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Guilds
     * const guild = await prisma.guild.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuildUpdateManyArgs>(args: SelectSubset<T, GuildUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Guild.
     * @param {GuildUpsertArgs} args - Arguments to update or create a Guild.
     * @example
     * // Update or create a Guild
     * const guild = await prisma.guild.upsert({
     *   create: {
     *     // ... data to create a Guild
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guild we want to update
     *   }
     * })
     */
    upsert<T extends GuildUpsertArgs>(args: SelectSubset<T, GuildUpsertArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Guilds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildCountArgs} args - Arguments to filter Guilds to count.
     * @example
     * // Count the number of Guilds
     * const count = await prisma.guild.count({
     *   where: {
     *     // ... the filter for the Guilds we want to count
     *   }
     * })
    **/
    count<T extends GuildCountArgs>(
      args?: Subset<T, GuildCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuildCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GuildAggregateArgs>(args: Subset<T, GuildAggregateArgs>): Prisma.PrismaPromise<GetGuildAggregateType<T>>

    /**
     * Group by Guild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GuildGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuildGroupByArgs['orderBy'] }
        : { orderBy?: GuildGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GuildGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuildGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Guild model
   */
  readonly fields: GuildFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Guild.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuildClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    settings<T extends Guild$settingsArgs<ExtArgs> = {}>(args?: Subset<T, Guild$settingsArgs<ExtArgs>>): Prisma__GuildSettingClient<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    cases<T extends Guild$casesArgs<ExtArgs> = {}>(args?: Subset<T, Guild$casesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModerationCasePayload<ExtArgs>, T, "findMany"> | Null>
    warnings<T extends Guild$warningsArgs<ExtArgs> = {}>(args?: Subset<T, Guild$warningsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "findMany"> | Null>
    securityEvents<T extends Guild$securityEventsArgs<ExtArgs> = {}>(args?: Subset<T, Guild$securityEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "findMany"> | Null>
    raidEvents<T extends Guild$raidEventsArgs<ExtArgs> = {}>(args?: Subset<T, Guild$raidEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaidEventPayload<ExtArgs>, T, "findMany"> | Null>
    memberSnapshots<T extends Guild$memberSnapshotsArgs<ExtArgs> = {}>(args?: Subset<T, Guild$memberSnapshotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberSnapshotPayload<ExtArgs>, T, "findMany"> | Null>
    messageActivity<T extends Guild$messageActivityArgs<ExtArgs> = {}>(args?: Subset<T, Guild$messageActivityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageActivityPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Guild model
   */ 
  interface GuildFieldRefs {
    readonly id: FieldRef<"Guild", 'String'>
    readonly name: FieldRef<"Guild", 'String'>
    readonly memberCount: FieldRef<"Guild", 'Int'>
    readonly joinedAt: FieldRef<"Guild", 'DateTime'>
    readonly updatedAt: FieldRef<"Guild", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Guild findUnique
   */
  export type GuildFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * Filter, which Guild to fetch.
     */
    where: GuildWhereUniqueInput
  }

  /**
   * Guild findUniqueOrThrow
   */
  export type GuildFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * Filter, which Guild to fetch.
     */
    where: GuildWhereUniqueInput
  }

  /**
   * Guild findFirst
   */
  export type GuildFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * Filter, which Guild to fetch.
     */
    where?: GuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guilds to fetch.
     */
    orderBy?: GuildOrderByWithRelationInput | GuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guilds.
     */
    cursor?: GuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guilds.
     */
    distinct?: GuildScalarFieldEnum | GuildScalarFieldEnum[]
  }

  /**
   * Guild findFirstOrThrow
   */
  export type GuildFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * Filter, which Guild to fetch.
     */
    where?: GuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guilds to fetch.
     */
    orderBy?: GuildOrderByWithRelationInput | GuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guilds.
     */
    cursor?: GuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guilds.
     */
    distinct?: GuildScalarFieldEnum | GuildScalarFieldEnum[]
  }

  /**
   * Guild findMany
   */
  export type GuildFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * Filter, which Guilds to fetch.
     */
    where?: GuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guilds to fetch.
     */
    orderBy?: GuildOrderByWithRelationInput | GuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Guilds.
     */
    cursor?: GuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guilds.
     */
    skip?: number
    distinct?: GuildScalarFieldEnum | GuildScalarFieldEnum[]
  }

  /**
   * Guild create
   */
  export type GuildCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * The data needed to create a Guild.
     */
    data: XOR<GuildCreateInput, GuildUncheckedCreateInput>
  }

  /**
   * Guild createMany
   */
  export type GuildCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Guilds.
     */
    data: GuildCreateManyInput | GuildCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guild createManyAndReturn
   */
  export type GuildCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Guilds.
     */
    data: GuildCreateManyInput | GuildCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guild update
   */
  export type GuildUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * The data needed to update a Guild.
     */
    data: XOR<GuildUpdateInput, GuildUncheckedUpdateInput>
    /**
     * Choose, which Guild to update.
     */
    where: GuildWhereUniqueInput
  }

  /**
   * Guild updateMany
   */
  export type GuildUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Guilds.
     */
    data: XOR<GuildUpdateManyMutationInput, GuildUncheckedUpdateManyInput>
    /**
     * Filter which Guilds to update
     */
    where?: GuildWhereInput
  }

  /**
   * Guild upsert
   */
  export type GuildUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * The filter to search for the Guild to update in case it exists.
     */
    where: GuildWhereUniqueInput
    /**
     * In case the Guild found by the `where` argument doesn't exist, create a new Guild with this data.
     */
    create: XOR<GuildCreateInput, GuildUncheckedCreateInput>
    /**
     * In case the Guild was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuildUpdateInput, GuildUncheckedUpdateInput>
  }

  /**
   * Guild delete
   */
  export type GuildDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * Filter which Guild to delete.
     */
    where: GuildWhereUniqueInput
  }

  /**
   * Guild deleteMany
   */
  export type GuildDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guilds to delete
     */
    where?: GuildWhereInput
  }

  /**
   * Guild.settings
   */
  export type Guild$settingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSetting
     */
    select?: GuildSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildSettingInclude<ExtArgs> | null
    where?: GuildSettingWhereInput
  }

  /**
   * Guild.cases
   */
  export type Guild$casesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModerationCase
     */
    select?: ModerationCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationCaseInclude<ExtArgs> | null
    where?: ModerationCaseWhereInput
    orderBy?: ModerationCaseOrderByWithRelationInput | ModerationCaseOrderByWithRelationInput[]
    cursor?: ModerationCaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModerationCaseScalarFieldEnum | ModerationCaseScalarFieldEnum[]
  }

  /**
   * Guild.warnings
   */
  export type Guild$warningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningInclude<ExtArgs> | null
    where?: WarningWhereInput
    orderBy?: WarningOrderByWithRelationInput | WarningOrderByWithRelationInput[]
    cursor?: WarningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WarningScalarFieldEnum | WarningScalarFieldEnum[]
  }

  /**
   * Guild.securityEvents
   */
  export type Guild$securityEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    where?: SecurityEventWhereInput
    orderBy?: SecurityEventOrderByWithRelationInput | SecurityEventOrderByWithRelationInput[]
    cursor?: SecurityEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SecurityEventScalarFieldEnum | SecurityEventScalarFieldEnum[]
  }

  /**
   * Guild.raidEvents
   */
  export type Guild$raidEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidEvent
     */
    select?: RaidEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidEventInclude<ExtArgs> | null
    where?: RaidEventWhereInput
    orderBy?: RaidEventOrderByWithRelationInput | RaidEventOrderByWithRelationInput[]
    cursor?: RaidEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaidEventScalarFieldEnum | RaidEventScalarFieldEnum[]
  }

  /**
   * Guild.memberSnapshots
   */
  export type Guild$memberSnapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberSnapshot
     */
    select?: MemberSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberSnapshotInclude<ExtArgs> | null
    where?: MemberSnapshotWhereInput
    orderBy?: MemberSnapshotOrderByWithRelationInput | MemberSnapshotOrderByWithRelationInput[]
    cursor?: MemberSnapshotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberSnapshotScalarFieldEnum | MemberSnapshotScalarFieldEnum[]
  }

  /**
   * Guild.messageActivity
   */
  export type Guild$messageActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageActivity
     */
    select?: MessageActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageActivityInclude<ExtArgs> | null
    where?: MessageActivityWhereInput
    orderBy?: MessageActivityOrderByWithRelationInput | MessageActivityOrderByWithRelationInput[]
    cursor?: MessageActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageActivityScalarFieldEnum | MessageActivityScalarFieldEnum[]
  }

  /**
   * Guild without action
   */
  export type GuildDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
  }


  /**
   * Model GuildSetting
   */

  export type AggregateGuildSetting = {
    _count: GuildSettingCountAggregateOutputType | null
    _avg: GuildSettingAvgAggregateOutputType | null
    _sum: GuildSettingSumAggregateOutputType | null
    _min: GuildSettingMinAggregateOutputType | null
    _max: GuildSettingMaxAggregateOutputType | null
  }

  export type GuildSettingAvgAggregateOutputType = {
    aiActionThreshold: number | null
  }

  export type GuildSettingSumAggregateOutputType = {
    aiActionThreshold: number | null
  }

  export type GuildSettingMinAggregateOutputType = {
    guildId: string | null
    antiRaidEnabled: boolean | null
    antiNukeEnabled: boolean | null
    antiSpamEnabled: boolean | null
    antiMassMention: boolean | null
    antiWebhookAbuse: boolean | null
    scamDetection: boolean | null
    autoLockdown: boolean | null
    verificationSystem: boolean | null
    aiModerationEnabled: boolean | null
    aiLogChannelId: string | null
    aiActionThreshold: number | null
    modLogChannelId: string | null
    securityLogChannelId: string | null
  }

  export type GuildSettingMaxAggregateOutputType = {
    guildId: string | null
    antiRaidEnabled: boolean | null
    antiNukeEnabled: boolean | null
    antiSpamEnabled: boolean | null
    antiMassMention: boolean | null
    antiWebhookAbuse: boolean | null
    scamDetection: boolean | null
    autoLockdown: boolean | null
    verificationSystem: boolean | null
    aiModerationEnabled: boolean | null
    aiLogChannelId: string | null
    aiActionThreshold: number | null
    modLogChannelId: string | null
    securityLogChannelId: string | null
  }

  export type GuildSettingCountAggregateOutputType = {
    guildId: number
    antiRaidEnabled: number
    antiNukeEnabled: number
    antiSpamEnabled: number
    antiMassMention: number
    antiWebhookAbuse: number
    scamDetection: number
    autoLockdown: number
    verificationSystem: number
    aiModerationEnabled: number
    aiLogChannelId: number
    aiActionThreshold: number
    modLogChannelId: number
    securityLogChannelId: number
    _all: number
  }


  export type GuildSettingAvgAggregateInputType = {
    aiActionThreshold?: true
  }

  export type GuildSettingSumAggregateInputType = {
    aiActionThreshold?: true
  }

  export type GuildSettingMinAggregateInputType = {
    guildId?: true
    antiRaidEnabled?: true
    antiNukeEnabled?: true
    antiSpamEnabled?: true
    antiMassMention?: true
    antiWebhookAbuse?: true
    scamDetection?: true
    autoLockdown?: true
    verificationSystem?: true
    aiModerationEnabled?: true
    aiLogChannelId?: true
    aiActionThreshold?: true
    modLogChannelId?: true
    securityLogChannelId?: true
  }

  export type GuildSettingMaxAggregateInputType = {
    guildId?: true
    antiRaidEnabled?: true
    antiNukeEnabled?: true
    antiSpamEnabled?: true
    antiMassMention?: true
    antiWebhookAbuse?: true
    scamDetection?: true
    autoLockdown?: true
    verificationSystem?: true
    aiModerationEnabled?: true
    aiLogChannelId?: true
    aiActionThreshold?: true
    modLogChannelId?: true
    securityLogChannelId?: true
  }

  export type GuildSettingCountAggregateInputType = {
    guildId?: true
    antiRaidEnabled?: true
    antiNukeEnabled?: true
    antiSpamEnabled?: true
    antiMassMention?: true
    antiWebhookAbuse?: true
    scamDetection?: true
    autoLockdown?: true
    verificationSystem?: true
    aiModerationEnabled?: true
    aiLogChannelId?: true
    aiActionThreshold?: true
    modLogChannelId?: true
    securityLogChannelId?: true
    _all?: true
  }

  export type GuildSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuildSetting to aggregate.
     */
    where?: GuildSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildSettings to fetch.
     */
    orderBy?: GuildSettingOrderByWithRelationInput | GuildSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuildSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GuildSettings
    **/
    _count?: true | GuildSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GuildSettingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GuildSettingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuildSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuildSettingMaxAggregateInputType
  }

  export type GetGuildSettingAggregateType<T extends GuildSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateGuildSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuildSetting[P]>
      : GetScalarType<T[P], AggregateGuildSetting[P]>
  }




  export type GuildSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuildSettingWhereInput
    orderBy?: GuildSettingOrderByWithAggregationInput | GuildSettingOrderByWithAggregationInput[]
    by: GuildSettingScalarFieldEnum[] | GuildSettingScalarFieldEnum
    having?: GuildSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuildSettingCountAggregateInputType | true
    _avg?: GuildSettingAvgAggregateInputType
    _sum?: GuildSettingSumAggregateInputType
    _min?: GuildSettingMinAggregateInputType
    _max?: GuildSettingMaxAggregateInputType
  }

  export type GuildSettingGroupByOutputType = {
    guildId: string
    antiRaidEnabled: boolean
    antiNukeEnabled: boolean
    antiSpamEnabled: boolean
    antiMassMention: boolean
    antiWebhookAbuse: boolean
    scamDetection: boolean
    autoLockdown: boolean
    verificationSystem: boolean
    aiModerationEnabled: boolean
    aiLogChannelId: string | null
    aiActionThreshold: number
    modLogChannelId: string | null
    securityLogChannelId: string | null
    _count: GuildSettingCountAggregateOutputType | null
    _avg: GuildSettingAvgAggregateOutputType | null
    _sum: GuildSettingSumAggregateOutputType | null
    _min: GuildSettingMinAggregateOutputType | null
    _max: GuildSettingMaxAggregateOutputType | null
  }

  type GetGuildSettingGroupByPayload<T extends GuildSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuildSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuildSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuildSettingGroupByOutputType[P]>
            : GetScalarType<T[P], GuildSettingGroupByOutputType[P]>
        }
      >
    >


  export type GuildSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    guildId?: boolean
    antiRaidEnabled?: boolean
    antiNukeEnabled?: boolean
    antiSpamEnabled?: boolean
    antiMassMention?: boolean
    antiWebhookAbuse?: boolean
    scamDetection?: boolean
    autoLockdown?: boolean
    verificationSystem?: boolean
    aiModerationEnabled?: boolean
    aiLogChannelId?: boolean
    aiActionThreshold?: boolean
    modLogChannelId?: boolean
    securityLogChannelId?: boolean
    guild?: boolean | GuildDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guildSetting"]>

  export type GuildSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    guildId?: boolean
    antiRaidEnabled?: boolean
    antiNukeEnabled?: boolean
    antiSpamEnabled?: boolean
    antiMassMention?: boolean
    antiWebhookAbuse?: boolean
    scamDetection?: boolean
    autoLockdown?: boolean
    verificationSystem?: boolean
    aiModerationEnabled?: boolean
    aiLogChannelId?: boolean
    aiActionThreshold?: boolean
    modLogChannelId?: boolean
    securityLogChannelId?: boolean
    guild?: boolean | GuildDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guildSetting"]>

  export type GuildSettingSelectScalar = {
    guildId?: boolean
    antiRaidEnabled?: boolean
    antiNukeEnabled?: boolean
    antiSpamEnabled?: boolean
    antiMassMention?: boolean
    antiWebhookAbuse?: boolean
    scamDetection?: boolean
    autoLockdown?: boolean
    verificationSystem?: boolean
    aiModerationEnabled?: boolean
    aiLogChannelId?: boolean
    aiActionThreshold?: boolean
    modLogChannelId?: boolean
    securityLogChannelId?: boolean
  }

  export type GuildSettingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildDefaultArgs<ExtArgs>
  }
  export type GuildSettingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildDefaultArgs<ExtArgs>
  }

  export type $GuildSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GuildSetting"
    objects: {
      guild: Prisma.$GuildPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      guildId: string
      antiRaidEnabled: boolean
      antiNukeEnabled: boolean
      antiSpamEnabled: boolean
      antiMassMention: boolean
      antiWebhookAbuse: boolean
      scamDetection: boolean
      autoLockdown: boolean
      verificationSystem: boolean
      aiModerationEnabled: boolean
      aiLogChannelId: string | null
      aiActionThreshold: number
      modLogChannelId: string | null
      securityLogChannelId: string | null
    }, ExtArgs["result"]["guildSetting"]>
    composites: {}
  }

  type GuildSettingGetPayload<S extends boolean | null | undefined | GuildSettingDefaultArgs> = $Result.GetResult<Prisma.$GuildSettingPayload, S>

  type GuildSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GuildSettingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GuildSettingCountAggregateInputType | true
    }

  export interface GuildSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GuildSetting'], meta: { name: 'GuildSetting' } }
    /**
     * Find zero or one GuildSetting that matches the filter.
     * @param {GuildSettingFindUniqueArgs} args - Arguments to find a GuildSetting
     * @example
     * // Get one GuildSetting
     * const guildSetting = await prisma.guildSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuildSettingFindUniqueArgs>(args: SelectSubset<T, GuildSettingFindUniqueArgs<ExtArgs>>): Prisma__GuildSettingClient<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one GuildSetting that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GuildSettingFindUniqueOrThrowArgs} args - Arguments to find a GuildSetting
     * @example
     * // Get one GuildSetting
     * const guildSetting = await prisma.guildSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuildSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, GuildSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuildSettingClient<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first GuildSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildSettingFindFirstArgs} args - Arguments to find a GuildSetting
     * @example
     * // Get one GuildSetting
     * const guildSetting = await prisma.guildSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuildSettingFindFirstArgs>(args?: SelectSubset<T, GuildSettingFindFirstArgs<ExtArgs>>): Prisma__GuildSettingClient<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first GuildSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildSettingFindFirstOrThrowArgs} args - Arguments to find a GuildSetting
     * @example
     * // Get one GuildSetting
     * const guildSetting = await prisma.guildSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuildSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, GuildSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuildSettingClient<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more GuildSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GuildSettings
     * const guildSettings = await prisma.guildSetting.findMany()
     * 
     * // Get first 10 GuildSettings
     * const guildSettings = await prisma.guildSetting.findMany({ take: 10 })
     * 
     * // Only select the `guildId`
     * const guildSettingWithGuildIdOnly = await prisma.guildSetting.findMany({ select: { guildId: true } })
     * 
     */
    findMany<T extends GuildSettingFindManyArgs>(args?: SelectSubset<T, GuildSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a GuildSetting.
     * @param {GuildSettingCreateArgs} args - Arguments to create a GuildSetting.
     * @example
     * // Create one GuildSetting
     * const GuildSetting = await prisma.guildSetting.create({
     *   data: {
     *     // ... data to create a GuildSetting
     *   }
     * })
     * 
     */
    create<T extends GuildSettingCreateArgs>(args: SelectSubset<T, GuildSettingCreateArgs<ExtArgs>>): Prisma__GuildSettingClient<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many GuildSettings.
     * @param {GuildSettingCreateManyArgs} args - Arguments to create many GuildSettings.
     * @example
     * // Create many GuildSettings
     * const guildSetting = await prisma.guildSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuildSettingCreateManyArgs>(args?: SelectSubset<T, GuildSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GuildSettings and returns the data saved in the database.
     * @param {GuildSettingCreateManyAndReturnArgs} args - Arguments to create many GuildSettings.
     * @example
     * // Create many GuildSettings
     * const guildSetting = await prisma.guildSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GuildSettings and only return the `guildId`
     * const guildSettingWithGuildIdOnly = await prisma.guildSetting.createManyAndReturn({ 
     *   select: { guildId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuildSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, GuildSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a GuildSetting.
     * @param {GuildSettingDeleteArgs} args - Arguments to delete one GuildSetting.
     * @example
     * // Delete one GuildSetting
     * const GuildSetting = await prisma.guildSetting.delete({
     *   where: {
     *     // ... filter to delete one GuildSetting
     *   }
     * })
     * 
     */
    delete<T extends GuildSettingDeleteArgs>(args: SelectSubset<T, GuildSettingDeleteArgs<ExtArgs>>): Prisma__GuildSettingClient<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one GuildSetting.
     * @param {GuildSettingUpdateArgs} args - Arguments to update one GuildSetting.
     * @example
     * // Update one GuildSetting
     * const guildSetting = await prisma.guildSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuildSettingUpdateArgs>(args: SelectSubset<T, GuildSettingUpdateArgs<ExtArgs>>): Prisma__GuildSettingClient<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more GuildSettings.
     * @param {GuildSettingDeleteManyArgs} args - Arguments to filter GuildSettings to delete.
     * @example
     * // Delete a few GuildSettings
     * const { count } = await prisma.guildSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuildSettingDeleteManyArgs>(args?: SelectSubset<T, GuildSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuildSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GuildSettings
     * const guildSetting = await prisma.guildSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuildSettingUpdateManyArgs>(args: SelectSubset<T, GuildSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GuildSetting.
     * @param {GuildSettingUpsertArgs} args - Arguments to update or create a GuildSetting.
     * @example
     * // Update or create a GuildSetting
     * const guildSetting = await prisma.guildSetting.upsert({
     *   create: {
     *     // ... data to create a GuildSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GuildSetting we want to update
     *   }
     * })
     */
    upsert<T extends GuildSettingUpsertArgs>(args: SelectSubset<T, GuildSettingUpsertArgs<ExtArgs>>): Prisma__GuildSettingClient<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of GuildSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildSettingCountArgs} args - Arguments to filter GuildSettings to count.
     * @example
     * // Count the number of GuildSettings
     * const count = await prisma.guildSetting.count({
     *   where: {
     *     // ... the filter for the GuildSettings we want to count
     *   }
     * })
    **/
    count<T extends GuildSettingCountArgs>(
      args?: Subset<T, GuildSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuildSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GuildSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GuildSettingAggregateArgs>(args: Subset<T, GuildSettingAggregateArgs>): Prisma.PrismaPromise<GetGuildSettingAggregateType<T>>

    /**
     * Group by GuildSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildSettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GuildSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuildSettingGroupByArgs['orderBy'] }
        : { orderBy?: GuildSettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GuildSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuildSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GuildSetting model
   */
  readonly fields: GuildSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GuildSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuildSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guild<T extends GuildDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuildDefaultArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GuildSetting model
   */ 
  interface GuildSettingFieldRefs {
    readonly guildId: FieldRef<"GuildSetting", 'String'>
    readonly antiRaidEnabled: FieldRef<"GuildSetting", 'Boolean'>
    readonly antiNukeEnabled: FieldRef<"GuildSetting", 'Boolean'>
    readonly antiSpamEnabled: FieldRef<"GuildSetting", 'Boolean'>
    readonly antiMassMention: FieldRef<"GuildSetting", 'Boolean'>
    readonly antiWebhookAbuse: FieldRef<"GuildSetting", 'Boolean'>
    readonly scamDetection: FieldRef<"GuildSetting", 'Boolean'>
    readonly autoLockdown: FieldRef<"GuildSetting", 'Boolean'>
    readonly verificationSystem: FieldRef<"GuildSetting", 'Boolean'>
    readonly aiModerationEnabled: FieldRef<"GuildSetting", 'Boolean'>
    readonly aiLogChannelId: FieldRef<"GuildSetting", 'String'>
    readonly aiActionThreshold: FieldRef<"GuildSetting", 'Int'>
    readonly modLogChannelId: FieldRef<"GuildSetting", 'String'>
    readonly securityLogChannelId: FieldRef<"GuildSetting", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GuildSetting findUnique
   */
  export type GuildSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSetting
     */
    select?: GuildSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildSettingInclude<ExtArgs> | null
    /**
     * Filter, which GuildSetting to fetch.
     */
    where: GuildSettingWhereUniqueInput
  }

  /**
   * GuildSetting findUniqueOrThrow
   */
  export type GuildSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSetting
     */
    select?: GuildSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildSettingInclude<ExtArgs> | null
    /**
     * Filter, which GuildSetting to fetch.
     */
    where: GuildSettingWhereUniqueInput
  }

  /**
   * GuildSetting findFirst
   */
  export type GuildSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSetting
     */
    select?: GuildSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildSettingInclude<ExtArgs> | null
    /**
     * Filter, which GuildSetting to fetch.
     */
    where?: GuildSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildSettings to fetch.
     */
    orderBy?: GuildSettingOrderByWithRelationInput | GuildSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuildSettings.
     */
    cursor?: GuildSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuildSettings.
     */
    distinct?: GuildSettingScalarFieldEnum | GuildSettingScalarFieldEnum[]
  }

  /**
   * GuildSetting findFirstOrThrow
   */
  export type GuildSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSetting
     */
    select?: GuildSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildSettingInclude<ExtArgs> | null
    /**
     * Filter, which GuildSetting to fetch.
     */
    where?: GuildSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildSettings to fetch.
     */
    orderBy?: GuildSettingOrderByWithRelationInput | GuildSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuildSettings.
     */
    cursor?: GuildSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuildSettings.
     */
    distinct?: GuildSettingScalarFieldEnum | GuildSettingScalarFieldEnum[]
  }

  /**
   * GuildSetting findMany
   */
  export type GuildSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSetting
     */
    select?: GuildSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildSettingInclude<ExtArgs> | null
    /**
     * Filter, which GuildSettings to fetch.
     */
    where?: GuildSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildSettings to fetch.
     */
    orderBy?: GuildSettingOrderByWithRelationInput | GuildSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GuildSettings.
     */
    cursor?: GuildSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildSettings.
     */
    skip?: number
    distinct?: GuildSettingScalarFieldEnum | GuildSettingScalarFieldEnum[]
  }

  /**
   * GuildSetting create
   */
  export type GuildSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSetting
     */
    select?: GuildSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildSettingInclude<ExtArgs> | null
    /**
     * The data needed to create a GuildSetting.
     */
    data: XOR<GuildSettingCreateInput, GuildSettingUncheckedCreateInput>
  }

  /**
   * GuildSetting createMany
   */
  export type GuildSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GuildSettings.
     */
    data: GuildSettingCreateManyInput | GuildSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GuildSetting createManyAndReturn
   */
  export type GuildSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSetting
     */
    select?: GuildSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many GuildSettings.
     */
    data: GuildSettingCreateManyInput | GuildSettingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildSettingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuildSetting update
   */
  export type GuildSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSetting
     */
    select?: GuildSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildSettingInclude<ExtArgs> | null
    /**
     * The data needed to update a GuildSetting.
     */
    data: XOR<GuildSettingUpdateInput, GuildSettingUncheckedUpdateInput>
    /**
     * Choose, which GuildSetting to update.
     */
    where: GuildSettingWhereUniqueInput
  }

  /**
   * GuildSetting updateMany
   */
  export type GuildSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GuildSettings.
     */
    data: XOR<GuildSettingUpdateManyMutationInput, GuildSettingUncheckedUpdateManyInput>
    /**
     * Filter which GuildSettings to update
     */
    where?: GuildSettingWhereInput
  }

  /**
   * GuildSetting upsert
   */
  export type GuildSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSetting
     */
    select?: GuildSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildSettingInclude<ExtArgs> | null
    /**
     * The filter to search for the GuildSetting to update in case it exists.
     */
    where: GuildSettingWhereUniqueInput
    /**
     * In case the GuildSetting found by the `where` argument doesn't exist, create a new GuildSetting with this data.
     */
    create: XOR<GuildSettingCreateInput, GuildSettingUncheckedCreateInput>
    /**
     * In case the GuildSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuildSettingUpdateInput, GuildSettingUncheckedUpdateInput>
  }

  /**
   * GuildSetting delete
   */
  export type GuildSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSetting
     */
    select?: GuildSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildSettingInclude<ExtArgs> | null
    /**
     * Filter which GuildSetting to delete.
     */
    where: GuildSettingWhereUniqueInput
  }

  /**
   * GuildSetting deleteMany
   */
  export type GuildSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuildSettings to delete
     */
    where?: GuildSettingWhereInput
  }

  /**
   * GuildSetting without action
   */
  export type GuildSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSetting
     */
    select?: GuildSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildSettingInclude<ExtArgs> | null
  }


  /**
   * Model ModerationCase
   */

  export type AggregateModerationCase = {
    _count: ModerationCaseCountAggregateOutputType | null
    _avg: ModerationCaseAvgAggregateOutputType | null
    _sum: ModerationCaseSumAggregateOutputType | null
    _min: ModerationCaseMinAggregateOutputType | null
    _max: ModerationCaseMaxAggregateOutputType | null
  }

  export type ModerationCaseAvgAggregateOutputType = {
    id: number | null
  }

  export type ModerationCaseSumAggregateOutputType = {
    id: number | null
  }

  export type ModerationCaseMinAggregateOutputType = {
    id: number | null
    guildId: string | null
    userId: string | null
    moderatorId: string | null
    type: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type ModerationCaseMaxAggregateOutputType = {
    id: number | null
    guildId: string | null
    userId: string | null
    moderatorId: string | null
    type: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type ModerationCaseCountAggregateOutputType = {
    id: number
    guildId: number
    userId: number
    moderatorId: number
    type: number
    reason: number
    createdAt: number
    _all: number
  }


  export type ModerationCaseAvgAggregateInputType = {
    id?: true
  }

  export type ModerationCaseSumAggregateInputType = {
    id?: true
  }

  export type ModerationCaseMinAggregateInputType = {
    id?: true
    guildId?: true
    userId?: true
    moderatorId?: true
    type?: true
    reason?: true
    createdAt?: true
  }

  export type ModerationCaseMaxAggregateInputType = {
    id?: true
    guildId?: true
    userId?: true
    moderatorId?: true
    type?: true
    reason?: true
    createdAt?: true
  }

  export type ModerationCaseCountAggregateInputType = {
    id?: true
    guildId?: true
    userId?: true
    moderatorId?: true
    type?: true
    reason?: true
    createdAt?: true
    _all?: true
  }

  export type ModerationCaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModerationCase to aggregate.
     */
    where?: ModerationCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModerationCases to fetch.
     */
    orderBy?: ModerationCaseOrderByWithRelationInput | ModerationCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModerationCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModerationCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModerationCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModerationCases
    **/
    _count?: true | ModerationCaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModerationCaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModerationCaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModerationCaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModerationCaseMaxAggregateInputType
  }

  export type GetModerationCaseAggregateType<T extends ModerationCaseAggregateArgs> = {
        [P in keyof T & keyof AggregateModerationCase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModerationCase[P]>
      : GetScalarType<T[P], AggregateModerationCase[P]>
  }




  export type ModerationCaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModerationCaseWhereInput
    orderBy?: ModerationCaseOrderByWithAggregationInput | ModerationCaseOrderByWithAggregationInput[]
    by: ModerationCaseScalarFieldEnum[] | ModerationCaseScalarFieldEnum
    having?: ModerationCaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModerationCaseCountAggregateInputType | true
    _avg?: ModerationCaseAvgAggregateInputType
    _sum?: ModerationCaseSumAggregateInputType
    _min?: ModerationCaseMinAggregateInputType
    _max?: ModerationCaseMaxAggregateInputType
  }

  export type ModerationCaseGroupByOutputType = {
    id: number
    guildId: string
    userId: string
    moderatorId: string
    type: string
    reason: string | null
    createdAt: Date
    _count: ModerationCaseCountAggregateOutputType | null
    _avg: ModerationCaseAvgAggregateOutputType | null
    _sum: ModerationCaseSumAggregateOutputType | null
    _min: ModerationCaseMinAggregateOutputType | null
    _max: ModerationCaseMaxAggregateOutputType | null
  }

  type GetModerationCaseGroupByPayload<T extends ModerationCaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModerationCaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModerationCaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModerationCaseGroupByOutputType[P]>
            : GetScalarType<T[P], ModerationCaseGroupByOutputType[P]>
        }
      >
    >


  export type ModerationCaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    userId?: boolean
    moderatorId?: boolean
    type?: boolean
    reason?: boolean
    createdAt?: boolean
    guild?: boolean | GuildDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    moderator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moderationCase"]>

  export type ModerationCaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    userId?: boolean
    moderatorId?: boolean
    type?: boolean
    reason?: boolean
    createdAt?: boolean
    guild?: boolean | GuildDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    moderator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moderationCase"]>

  export type ModerationCaseSelectScalar = {
    id?: boolean
    guildId?: boolean
    userId?: boolean
    moderatorId?: boolean
    type?: boolean
    reason?: boolean
    createdAt?: boolean
  }

  export type ModerationCaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    moderator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ModerationCaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    moderator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ModerationCasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModerationCase"
    objects: {
      guild: Prisma.$GuildPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      moderator: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      guildId: string
      userId: string
      moderatorId: string
      type: string
      reason: string | null
      createdAt: Date
    }, ExtArgs["result"]["moderationCase"]>
    composites: {}
  }

  type ModerationCaseGetPayload<S extends boolean | null | undefined | ModerationCaseDefaultArgs> = $Result.GetResult<Prisma.$ModerationCasePayload, S>

  type ModerationCaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ModerationCaseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ModerationCaseCountAggregateInputType | true
    }

  export interface ModerationCaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModerationCase'], meta: { name: 'ModerationCase' } }
    /**
     * Find zero or one ModerationCase that matches the filter.
     * @param {ModerationCaseFindUniqueArgs} args - Arguments to find a ModerationCase
     * @example
     * // Get one ModerationCase
     * const moderationCase = await prisma.moderationCase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModerationCaseFindUniqueArgs>(args: SelectSubset<T, ModerationCaseFindUniqueArgs<ExtArgs>>): Prisma__ModerationCaseClient<$Result.GetResult<Prisma.$ModerationCasePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ModerationCase that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ModerationCaseFindUniqueOrThrowArgs} args - Arguments to find a ModerationCase
     * @example
     * // Get one ModerationCase
     * const moderationCase = await prisma.moderationCase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModerationCaseFindUniqueOrThrowArgs>(args: SelectSubset<T, ModerationCaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModerationCaseClient<$Result.GetResult<Prisma.$ModerationCasePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ModerationCase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModerationCaseFindFirstArgs} args - Arguments to find a ModerationCase
     * @example
     * // Get one ModerationCase
     * const moderationCase = await prisma.moderationCase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModerationCaseFindFirstArgs>(args?: SelectSubset<T, ModerationCaseFindFirstArgs<ExtArgs>>): Prisma__ModerationCaseClient<$Result.GetResult<Prisma.$ModerationCasePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ModerationCase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModerationCaseFindFirstOrThrowArgs} args - Arguments to find a ModerationCase
     * @example
     * // Get one ModerationCase
     * const moderationCase = await prisma.moderationCase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModerationCaseFindFirstOrThrowArgs>(args?: SelectSubset<T, ModerationCaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModerationCaseClient<$Result.GetResult<Prisma.$ModerationCasePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ModerationCases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModerationCaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModerationCases
     * const moderationCases = await prisma.moderationCase.findMany()
     * 
     * // Get first 10 ModerationCases
     * const moderationCases = await prisma.moderationCase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moderationCaseWithIdOnly = await prisma.moderationCase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModerationCaseFindManyArgs>(args?: SelectSubset<T, ModerationCaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModerationCasePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ModerationCase.
     * @param {ModerationCaseCreateArgs} args - Arguments to create a ModerationCase.
     * @example
     * // Create one ModerationCase
     * const ModerationCase = await prisma.moderationCase.create({
     *   data: {
     *     // ... data to create a ModerationCase
     *   }
     * })
     * 
     */
    create<T extends ModerationCaseCreateArgs>(args: SelectSubset<T, ModerationCaseCreateArgs<ExtArgs>>): Prisma__ModerationCaseClient<$Result.GetResult<Prisma.$ModerationCasePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ModerationCases.
     * @param {ModerationCaseCreateManyArgs} args - Arguments to create many ModerationCases.
     * @example
     * // Create many ModerationCases
     * const moderationCase = await prisma.moderationCase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModerationCaseCreateManyArgs>(args?: SelectSubset<T, ModerationCaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ModerationCases and returns the data saved in the database.
     * @param {ModerationCaseCreateManyAndReturnArgs} args - Arguments to create many ModerationCases.
     * @example
     * // Create many ModerationCases
     * const moderationCase = await prisma.moderationCase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ModerationCases and only return the `id`
     * const moderationCaseWithIdOnly = await prisma.moderationCase.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModerationCaseCreateManyAndReturnArgs>(args?: SelectSubset<T, ModerationCaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModerationCasePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ModerationCase.
     * @param {ModerationCaseDeleteArgs} args - Arguments to delete one ModerationCase.
     * @example
     * // Delete one ModerationCase
     * const ModerationCase = await prisma.moderationCase.delete({
     *   where: {
     *     // ... filter to delete one ModerationCase
     *   }
     * })
     * 
     */
    delete<T extends ModerationCaseDeleteArgs>(args: SelectSubset<T, ModerationCaseDeleteArgs<ExtArgs>>): Prisma__ModerationCaseClient<$Result.GetResult<Prisma.$ModerationCasePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ModerationCase.
     * @param {ModerationCaseUpdateArgs} args - Arguments to update one ModerationCase.
     * @example
     * // Update one ModerationCase
     * const moderationCase = await prisma.moderationCase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModerationCaseUpdateArgs>(args: SelectSubset<T, ModerationCaseUpdateArgs<ExtArgs>>): Prisma__ModerationCaseClient<$Result.GetResult<Prisma.$ModerationCasePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ModerationCases.
     * @param {ModerationCaseDeleteManyArgs} args - Arguments to filter ModerationCases to delete.
     * @example
     * // Delete a few ModerationCases
     * const { count } = await prisma.moderationCase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModerationCaseDeleteManyArgs>(args?: SelectSubset<T, ModerationCaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModerationCases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModerationCaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModerationCases
     * const moderationCase = await prisma.moderationCase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModerationCaseUpdateManyArgs>(args: SelectSubset<T, ModerationCaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ModerationCase.
     * @param {ModerationCaseUpsertArgs} args - Arguments to update or create a ModerationCase.
     * @example
     * // Update or create a ModerationCase
     * const moderationCase = await prisma.moderationCase.upsert({
     *   create: {
     *     // ... data to create a ModerationCase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModerationCase we want to update
     *   }
     * })
     */
    upsert<T extends ModerationCaseUpsertArgs>(args: SelectSubset<T, ModerationCaseUpsertArgs<ExtArgs>>): Prisma__ModerationCaseClient<$Result.GetResult<Prisma.$ModerationCasePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ModerationCases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModerationCaseCountArgs} args - Arguments to filter ModerationCases to count.
     * @example
     * // Count the number of ModerationCases
     * const count = await prisma.moderationCase.count({
     *   where: {
     *     // ... the filter for the ModerationCases we want to count
     *   }
     * })
    **/
    count<T extends ModerationCaseCountArgs>(
      args?: Subset<T, ModerationCaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModerationCaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModerationCase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModerationCaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModerationCaseAggregateArgs>(args: Subset<T, ModerationCaseAggregateArgs>): Prisma.PrismaPromise<GetModerationCaseAggregateType<T>>

    /**
     * Group by ModerationCase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModerationCaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModerationCaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModerationCaseGroupByArgs['orderBy'] }
        : { orderBy?: ModerationCaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModerationCaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModerationCaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModerationCase model
   */
  readonly fields: ModerationCaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModerationCase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModerationCaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guild<T extends GuildDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuildDefaultArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    moderator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ModerationCase model
   */ 
  interface ModerationCaseFieldRefs {
    readonly id: FieldRef<"ModerationCase", 'Int'>
    readonly guildId: FieldRef<"ModerationCase", 'String'>
    readonly userId: FieldRef<"ModerationCase", 'String'>
    readonly moderatorId: FieldRef<"ModerationCase", 'String'>
    readonly type: FieldRef<"ModerationCase", 'String'>
    readonly reason: FieldRef<"ModerationCase", 'String'>
    readonly createdAt: FieldRef<"ModerationCase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ModerationCase findUnique
   */
  export type ModerationCaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModerationCase
     */
    select?: ModerationCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationCaseInclude<ExtArgs> | null
    /**
     * Filter, which ModerationCase to fetch.
     */
    where: ModerationCaseWhereUniqueInput
  }

  /**
   * ModerationCase findUniqueOrThrow
   */
  export type ModerationCaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModerationCase
     */
    select?: ModerationCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationCaseInclude<ExtArgs> | null
    /**
     * Filter, which ModerationCase to fetch.
     */
    where: ModerationCaseWhereUniqueInput
  }

  /**
   * ModerationCase findFirst
   */
  export type ModerationCaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModerationCase
     */
    select?: ModerationCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationCaseInclude<ExtArgs> | null
    /**
     * Filter, which ModerationCase to fetch.
     */
    where?: ModerationCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModerationCases to fetch.
     */
    orderBy?: ModerationCaseOrderByWithRelationInput | ModerationCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModerationCases.
     */
    cursor?: ModerationCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModerationCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModerationCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModerationCases.
     */
    distinct?: ModerationCaseScalarFieldEnum | ModerationCaseScalarFieldEnum[]
  }

  /**
   * ModerationCase findFirstOrThrow
   */
  export type ModerationCaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModerationCase
     */
    select?: ModerationCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationCaseInclude<ExtArgs> | null
    /**
     * Filter, which ModerationCase to fetch.
     */
    where?: ModerationCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModerationCases to fetch.
     */
    orderBy?: ModerationCaseOrderByWithRelationInput | ModerationCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModerationCases.
     */
    cursor?: ModerationCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModerationCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModerationCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModerationCases.
     */
    distinct?: ModerationCaseScalarFieldEnum | ModerationCaseScalarFieldEnum[]
  }

  /**
   * ModerationCase findMany
   */
  export type ModerationCaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModerationCase
     */
    select?: ModerationCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationCaseInclude<ExtArgs> | null
    /**
     * Filter, which ModerationCases to fetch.
     */
    where?: ModerationCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModerationCases to fetch.
     */
    orderBy?: ModerationCaseOrderByWithRelationInput | ModerationCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModerationCases.
     */
    cursor?: ModerationCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModerationCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModerationCases.
     */
    skip?: number
    distinct?: ModerationCaseScalarFieldEnum | ModerationCaseScalarFieldEnum[]
  }

  /**
   * ModerationCase create
   */
  export type ModerationCaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModerationCase
     */
    select?: ModerationCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationCaseInclude<ExtArgs> | null
    /**
     * The data needed to create a ModerationCase.
     */
    data: XOR<ModerationCaseCreateInput, ModerationCaseUncheckedCreateInput>
  }

  /**
   * ModerationCase createMany
   */
  export type ModerationCaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModerationCases.
     */
    data: ModerationCaseCreateManyInput | ModerationCaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ModerationCase createManyAndReturn
   */
  export type ModerationCaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModerationCase
     */
    select?: ModerationCaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ModerationCases.
     */
    data: ModerationCaseCreateManyInput | ModerationCaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationCaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModerationCase update
   */
  export type ModerationCaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModerationCase
     */
    select?: ModerationCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationCaseInclude<ExtArgs> | null
    /**
     * The data needed to update a ModerationCase.
     */
    data: XOR<ModerationCaseUpdateInput, ModerationCaseUncheckedUpdateInput>
    /**
     * Choose, which ModerationCase to update.
     */
    where: ModerationCaseWhereUniqueInput
  }

  /**
   * ModerationCase updateMany
   */
  export type ModerationCaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModerationCases.
     */
    data: XOR<ModerationCaseUpdateManyMutationInput, ModerationCaseUncheckedUpdateManyInput>
    /**
     * Filter which ModerationCases to update
     */
    where?: ModerationCaseWhereInput
  }

  /**
   * ModerationCase upsert
   */
  export type ModerationCaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModerationCase
     */
    select?: ModerationCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationCaseInclude<ExtArgs> | null
    /**
     * The filter to search for the ModerationCase to update in case it exists.
     */
    where: ModerationCaseWhereUniqueInput
    /**
     * In case the ModerationCase found by the `where` argument doesn't exist, create a new ModerationCase with this data.
     */
    create: XOR<ModerationCaseCreateInput, ModerationCaseUncheckedCreateInput>
    /**
     * In case the ModerationCase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModerationCaseUpdateInput, ModerationCaseUncheckedUpdateInput>
  }

  /**
   * ModerationCase delete
   */
  export type ModerationCaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModerationCase
     */
    select?: ModerationCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationCaseInclude<ExtArgs> | null
    /**
     * Filter which ModerationCase to delete.
     */
    where: ModerationCaseWhereUniqueInput
  }

  /**
   * ModerationCase deleteMany
   */
  export type ModerationCaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModerationCases to delete
     */
    where?: ModerationCaseWhereInput
  }

  /**
   * ModerationCase without action
   */
  export type ModerationCaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModerationCase
     */
    select?: ModerationCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationCaseInclude<ExtArgs> | null
  }


  /**
   * Model Warning
   */

  export type AggregateWarning = {
    _count: WarningCountAggregateOutputType | null
    _avg: WarningAvgAggregateOutputType | null
    _sum: WarningSumAggregateOutputType | null
    _min: WarningMinAggregateOutputType | null
    _max: WarningMaxAggregateOutputType | null
  }

  export type WarningAvgAggregateOutputType = {
    id: number | null
  }

  export type WarningSumAggregateOutputType = {
    id: number | null
  }

  export type WarningMinAggregateOutputType = {
    id: number | null
    guildId: string | null
    userId: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type WarningMaxAggregateOutputType = {
    id: number | null
    guildId: string | null
    userId: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type WarningCountAggregateOutputType = {
    id: number
    guildId: number
    userId: number
    reason: number
    createdAt: number
    _all: number
  }


  export type WarningAvgAggregateInputType = {
    id?: true
  }

  export type WarningSumAggregateInputType = {
    id?: true
  }

  export type WarningMinAggregateInputType = {
    id?: true
    guildId?: true
    userId?: true
    reason?: true
    createdAt?: true
  }

  export type WarningMaxAggregateInputType = {
    id?: true
    guildId?: true
    userId?: true
    reason?: true
    createdAt?: true
  }

  export type WarningCountAggregateInputType = {
    id?: true
    guildId?: true
    userId?: true
    reason?: true
    createdAt?: true
    _all?: true
  }

  export type WarningAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warning to aggregate.
     */
    where?: WarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warnings to fetch.
     */
    orderBy?: WarningOrderByWithRelationInput | WarningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Warnings
    **/
    _count?: true | WarningCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WarningAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WarningSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WarningMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WarningMaxAggregateInputType
  }

  export type GetWarningAggregateType<T extends WarningAggregateArgs> = {
        [P in keyof T & keyof AggregateWarning]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWarning[P]>
      : GetScalarType<T[P], AggregateWarning[P]>
  }




  export type WarningGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarningWhereInput
    orderBy?: WarningOrderByWithAggregationInput | WarningOrderByWithAggregationInput[]
    by: WarningScalarFieldEnum[] | WarningScalarFieldEnum
    having?: WarningScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WarningCountAggregateInputType | true
    _avg?: WarningAvgAggregateInputType
    _sum?: WarningSumAggregateInputType
    _min?: WarningMinAggregateInputType
    _max?: WarningMaxAggregateInputType
  }

  export type WarningGroupByOutputType = {
    id: number
    guildId: string
    userId: string
    reason: string
    createdAt: Date
    _count: WarningCountAggregateOutputType | null
    _avg: WarningAvgAggregateOutputType | null
    _sum: WarningSumAggregateOutputType | null
    _min: WarningMinAggregateOutputType | null
    _max: WarningMaxAggregateOutputType | null
  }

  type GetWarningGroupByPayload<T extends WarningGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WarningGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WarningGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WarningGroupByOutputType[P]>
            : GetScalarType<T[P], WarningGroupByOutputType[P]>
        }
      >
    >


  export type WarningSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    userId?: boolean
    reason?: boolean
    createdAt?: boolean
    guild?: boolean | GuildDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warning"]>

  export type WarningSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    userId?: boolean
    reason?: boolean
    createdAt?: boolean
    guild?: boolean | GuildDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warning"]>

  export type WarningSelectScalar = {
    id?: boolean
    guildId?: boolean
    userId?: boolean
    reason?: boolean
    createdAt?: boolean
  }

  export type WarningInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WarningIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WarningPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Warning"
    objects: {
      guild: Prisma.$GuildPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      guildId: string
      userId: string
      reason: string
      createdAt: Date
    }, ExtArgs["result"]["warning"]>
    composites: {}
  }

  type WarningGetPayload<S extends boolean | null | undefined | WarningDefaultArgs> = $Result.GetResult<Prisma.$WarningPayload, S>

  type WarningCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WarningFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WarningCountAggregateInputType | true
    }

  export interface WarningDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Warning'], meta: { name: 'Warning' } }
    /**
     * Find zero or one Warning that matches the filter.
     * @param {WarningFindUniqueArgs} args - Arguments to find a Warning
     * @example
     * // Get one Warning
     * const warning = await prisma.warning.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WarningFindUniqueArgs>(args: SelectSubset<T, WarningFindUniqueArgs<ExtArgs>>): Prisma__WarningClient<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Warning that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WarningFindUniqueOrThrowArgs} args - Arguments to find a Warning
     * @example
     * // Get one Warning
     * const warning = await prisma.warning.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WarningFindUniqueOrThrowArgs>(args: SelectSubset<T, WarningFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WarningClient<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Warning that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarningFindFirstArgs} args - Arguments to find a Warning
     * @example
     * // Get one Warning
     * const warning = await prisma.warning.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WarningFindFirstArgs>(args?: SelectSubset<T, WarningFindFirstArgs<ExtArgs>>): Prisma__WarningClient<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Warning that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarningFindFirstOrThrowArgs} args - Arguments to find a Warning
     * @example
     * // Get one Warning
     * const warning = await prisma.warning.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WarningFindFirstOrThrowArgs>(args?: SelectSubset<T, WarningFindFirstOrThrowArgs<ExtArgs>>): Prisma__WarningClient<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Warnings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarningFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Warnings
     * const warnings = await prisma.warning.findMany()
     * 
     * // Get first 10 Warnings
     * const warnings = await prisma.warning.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const warningWithIdOnly = await prisma.warning.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WarningFindManyArgs>(args?: SelectSubset<T, WarningFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Warning.
     * @param {WarningCreateArgs} args - Arguments to create a Warning.
     * @example
     * // Create one Warning
     * const Warning = await prisma.warning.create({
     *   data: {
     *     // ... data to create a Warning
     *   }
     * })
     * 
     */
    create<T extends WarningCreateArgs>(args: SelectSubset<T, WarningCreateArgs<ExtArgs>>): Prisma__WarningClient<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Warnings.
     * @param {WarningCreateManyArgs} args - Arguments to create many Warnings.
     * @example
     * // Create many Warnings
     * const warning = await prisma.warning.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WarningCreateManyArgs>(args?: SelectSubset<T, WarningCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Warnings and returns the data saved in the database.
     * @param {WarningCreateManyAndReturnArgs} args - Arguments to create many Warnings.
     * @example
     * // Create many Warnings
     * const warning = await prisma.warning.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Warnings and only return the `id`
     * const warningWithIdOnly = await prisma.warning.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WarningCreateManyAndReturnArgs>(args?: SelectSubset<T, WarningCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Warning.
     * @param {WarningDeleteArgs} args - Arguments to delete one Warning.
     * @example
     * // Delete one Warning
     * const Warning = await prisma.warning.delete({
     *   where: {
     *     // ... filter to delete one Warning
     *   }
     * })
     * 
     */
    delete<T extends WarningDeleteArgs>(args: SelectSubset<T, WarningDeleteArgs<ExtArgs>>): Prisma__WarningClient<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Warning.
     * @param {WarningUpdateArgs} args - Arguments to update one Warning.
     * @example
     * // Update one Warning
     * const warning = await prisma.warning.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WarningUpdateArgs>(args: SelectSubset<T, WarningUpdateArgs<ExtArgs>>): Prisma__WarningClient<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Warnings.
     * @param {WarningDeleteManyArgs} args - Arguments to filter Warnings to delete.
     * @example
     * // Delete a few Warnings
     * const { count } = await prisma.warning.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WarningDeleteManyArgs>(args?: SelectSubset<T, WarningDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarningUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Warnings
     * const warning = await prisma.warning.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WarningUpdateManyArgs>(args: SelectSubset<T, WarningUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Warning.
     * @param {WarningUpsertArgs} args - Arguments to update or create a Warning.
     * @example
     * // Update or create a Warning
     * const warning = await prisma.warning.upsert({
     *   create: {
     *     // ... data to create a Warning
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Warning we want to update
     *   }
     * })
     */
    upsert<T extends WarningUpsertArgs>(args: SelectSubset<T, WarningUpsertArgs<ExtArgs>>): Prisma__WarningClient<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Warnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarningCountArgs} args - Arguments to filter Warnings to count.
     * @example
     * // Count the number of Warnings
     * const count = await prisma.warning.count({
     *   where: {
     *     // ... the filter for the Warnings we want to count
     *   }
     * })
    **/
    count<T extends WarningCountArgs>(
      args?: Subset<T, WarningCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WarningCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Warning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarningAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WarningAggregateArgs>(args: Subset<T, WarningAggregateArgs>): Prisma.PrismaPromise<GetWarningAggregateType<T>>

    /**
     * Group by Warning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarningGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WarningGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WarningGroupByArgs['orderBy'] }
        : { orderBy?: WarningGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WarningGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarningGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Warning model
   */
  readonly fields: WarningFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Warning.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WarningClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guild<T extends GuildDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuildDefaultArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Warning model
   */ 
  interface WarningFieldRefs {
    readonly id: FieldRef<"Warning", 'Int'>
    readonly guildId: FieldRef<"Warning", 'String'>
    readonly userId: FieldRef<"Warning", 'String'>
    readonly reason: FieldRef<"Warning", 'String'>
    readonly createdAt: FieldRef<"Warning", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Warning findUnique
   */
  export type WarningFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningInclude<ExtArgs> | null
    /**
     * Filter, which Warning to fetch.
     */
    where: WarningWhereUniqueInput
  }

  /**
   * Warning findUniqueOrThrow
   */
  export type WarningFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningInclude<ExtArgs> | null
    /**
     * Filter, which Warning to fetch.
     */
    where: WarningWhereUniqueInput
  }

  /**
   * Warning findFirst
   */
  export type WarningFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningInclude<ExtArgs> | null
    /**
     * Filter, which Warning to fetch.
     */
    where?: WarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warnings to fetch.
     */
    orderBy?: WarningOrderByWithRelationInput | WarningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warnings.
     */
    cursor?: WarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warnings.
     */
    distinct?: WarningScalarFieldEnum | WarningScalarFieldEnum[]
  }

  /**
   * Warning findFirstOrThrow
   */
  export type WarningFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningInclude<ExtArgs> | null
    /**
     * Filter, which Warning to fetch.
     */
    where?: WarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warnings to fetch.
     */
    orderBy?: WarningOrderByWithRelationInput | WarningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warnings.
     */
    cursor?: WarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warnings.
     */
    distinct?: WarningScalarFieldEnum | WarningScalarFieldEnum[]
  }

  /**
   * Warning findMany
   */
  export type WarningFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningInclude<ExtArgs> | null
    /**
     * Filter, which Warnings to fetch.
     */
    where?: WarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warnings to fetch.
     */
    orderBy?: WarningOrderByWithRelationInput | WarningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Warnings.
     */
    cursor?: WarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warnings.
     */
    skip?: number
    distinct?: WarningScalarFieldEnum | WarningScalarFieldEnum[]
  }

  /**
   * Warning create
   */
  export type WarningCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningInclude<ExtArgs> | null
    /**
     * The data needed to create a Warning.
     */
    data: XOR<WarningCreateInput, WarningUncheckedCreateInput>
  }

  /**
   * Warning createMany
   */
  export type WarningCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Warnings.
     */
    data: WarningCreateManyInput | WarningCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Warning createManyAndReturn
   */
  export type WarningCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Warnings.
     */
    data: WarningCreateManyInput | WarningCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Warning update
   */
  export type WarningUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningInclude<ExtArgs> | null
    /**
     * The data needed to update a Warning.
     */
    data: XOR<WarningUpdateInput, WarningUncheckedUpdateInput>
    /**
     * Choose, which Warning to update.
     */
    where: WarningWhereUniqueInput
  }

  /**
   * Warning updateMany
   */
  export type WarningUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Warnings.
     */
    data: XOR<WarningUpdateManyMutationInput, WarningUncheckedUpdateManyInput>
    /**
     * Filter which Warnings to update
     */
    where?: WarningWhereInput
  }

  /**
   * Warning upsert
   */
  export type WarningUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningInclude<ExtArgs> | null
    /**
     * The filter to search for the Warning to update in case it exists.
     */
    where: WarningWhereUniqueInput
    /**
     * In case the Warning found by the `where` argument doesn't exist, create a new Warning with this data.
     */
    create: XOR<WarningCreateInput, WarningUncheckedCreateInput>
    /**
     * In case the Warning was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WarningUpdateInput, WarningUncheckedUpdateInput>
  }

  /**
   * Warning delete
   */
  export type WarningDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningInclude<ExtArgs> | null
    /**
     * Filter which Warning to delete.
     */
    where: WarningWhereUniqueInput
  }

  /**
   * Warning deleteMany
   */
  export type WarningDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warnings to delete
     */
    where?: WarningWhereInput
  }

  /**
   * Warning without action
   */
  export type WarningDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningInclude<ExtArgs> | null
  }


  /**
   * Model SecurityEvent
   */

  export type AggregateSecurityEvent = {
    _count: SecurityEventCountAggregateOutputType | null
    _avg: SecurityEventAvgAggregateOutputType | null
    _sum: SecurityEventSumAggregateOutputType | null
    _min: SecurityEventMinAggregateOutputType | null
    _max: SecurityEventMaxAggregateOutputType | null
  }

  export type SecurityEventAvgAggregateOutputType = {
    id: number | null
  }

  export type SecurityEventSumAggregateOutputType = {
    id: number | null
  }

  export type SecurityEventMinAggregateOutputType = {
    id: number | null
    guildId: string | null
    type: string | null
    severity: string | null
    description: string | null
    createdAt: Date | null
  }

  export type SecurityEventMaxAggregateOutputType = {
    id: number | null
    guildId: string | null
    type: string | null
    severity: string | null
    description: string | null
    createdAt: Date | null
  }

  export type SecurityEventCountAggregateOutputType = {
    id: number
    guildId: number
    type: number
    severity: number
    description: number
    createdAt: number
    _all: number
  }


  export type SecurityEventAvgAggregateInputType = {
    id?: true
  }

  export type SecurityEventSumAggregateInputType = {
    id?: true
  }

  export type SecurityEventMinAggregateInputType = {
    id?: true
    guildId?: true
    type?: true
    severity?: true
    description?: true
    createdAt?: true
  }

  export type SecurityEventMaxAggregateInputType = {
    id?: true
    guildId?: true
    type?: true
    severity?: true
    description?: true
    createdAt?: true
  }

  export type SecurityEventCountAggregateInputType = {
    id?: true
    guildId?: true
    type?: true
    severity?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type SecurityEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecurityEvent to aggregate.
     */
    where?: SecurityEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityEvents to fetch.
     */
    orderBy?: SecurityEventOrderByWithRelationInput | SecurityEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SecurityEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SecurityEvents
    **/
    _count?: true | SecurityEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SecurityEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SecurityEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SecurityEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SecurityEventMaxAggregateInputType
  }

  export type GetSecurityEventAggregateType<T extends SecurityEventAggregateArgs> = {
        [P in keyof T & keyof AggregateSecurityEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecurityEvent[P]>
      : GetScalarType<T[P], AggregateSecurityEvent[P]>
  }




  export type SecurityEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecurityEventWhereInput
    orderBy?: SecurityEventOrderByWithAggregationInput | SecurityEventOrderByWithAggregationInput[]
    by: SecurityEventScalarFieldEnum[] | SecurityEventScalarFieldEnum
    having?: SecurityEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SecurityEventCountAggregateInputType | true
    _avg?: SecurityEventAvgAggregateInputType
    _sum?: SecurityEventSumAggregateInputType
    _min?: SecurityEventMinAggregateInputType
    _max?: SecurityEventMaxAggregateInputType
  }

  export type SecurityEventGroupByOutputType = {
    id: number
    guildId: string
    type: string
    severity: string
    description: string
    createdAt: Date
    _count: SecurityEventCountAggregateOutputType | null
    _avg: SecurityEventAvgAggregateOutputType | null
    _sum: SecurityEventSumAggregateOutputType | null
    _min: SecurityEventMinAggregateOutputType | null
    _max: SecurityEventMaxAggregateOutputType | null
  }

  type GetSecurityEventGroupByPayload<T extends SecurityEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SecurityEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SecurityEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SecurityEventGroupByOutputType[P]>
            : GetScalarType<T[P], SecurityEventGroupByOutputType[P]>
        }
      >
    >


  export type SecurityEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    type?: boolean
    severity?: boolean
    description?: boolean
    createdAt?: boolean
    guild?: boolean | GuildDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["securityEvent"]>

  export type SecurityEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    type?: boolean
    severity?: boolean
    description?: boolean
    createdAt?: boolean
    guild?: boolean | GuildDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["securityEvent"]>

  export type SecurityEventSelectScalar = {
    id?: boolean
    guildId?: boolean
    type?: boolean
    severity?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type SecurityEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildDefaultArgs<ExtArgs>
  }
  export type SecurityEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildDefaultArgs<ExtArgs>
  }

  export type $SecurityEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SecurityEvent"
    objects: {
      guild: Prisma.$GuildPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      guildId: string
      type: string
      severity: string
      description: string
      createdAt: Date
    }, ExtArgs["result"]["securityEvent"]>
    composites: {}
  }

  type SecurityEventGetPayload<S extends boolean | null | undefined | SecurityEventDefaultArgs> = $Result.GetResult<Prisma.$SecurityEventPayload, S>

  type SecurityEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SecurityEventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SecurityEventCountAggregateInputType | true
    }

  export interface SecurityEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SecurityEvent'], meta: { name: 'SecurityEvent' } }
    /**
     * Find zero or one SecurityEvent that matches the filter.
     * @param {SecurityEventFindUniqueArgs} args - Arguments to find a SecurityEvent
     * @example
     * // Get one SecurityEvent
     * const securityEvent = await prisma.securityEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SecurityEventFindUniqueArgs>(args: SelectSubset<T, SecurityEventFindUniqueArgs<ExtArgs>>): Prisma__SecurityEventClient<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SecurityEvent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SecurityEventFindUniqueOrThrowArgs} args - Arguments to find a SecurityEvent
     * @example
     * // Get one SecurityEvent
     * const securityEvent = await prisma.securityEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SecurityEventFindUniqueOrThrowArgs>(args: SelectSubset<T, SecurityEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SecurityEventClient<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SecurityEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityEventFindFirstArgs} args - Arguments to find a SecurityEvent
     * @example
     * // Get one SecurityEvent
     * const securityEvent = await prisma.securityEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SecurityEventFindFirstArgs>(args?: SelectSubset<T, SecurityEventFindFirstArgs<ExtArgs>>): Prisma__SecurityEventClient<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SecurityEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityEventFindFirstOrThrowArgs} args - Arguments to find a SecurityEvent
     * @example
     * // Get one SecurityEvent
     * const securityEvent = await prisma.securityEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SecurityEventFindFirstOrThrowArgs>(args?: SelectSubset<T, SecurityEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__SecurityEventClient<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SecurityEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SecurityEvents
     * const securityEvents = await prisma.securityEvent.findMany()
     * 
     * // Get first 10 SecurityEvents
     * const securityEvents = await prisma.securityEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const securityEventWithIdOnly = await prisma.securityEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SecurityEventFindManyArgs>(args?: SelectSubset<T, SecurityEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SecurityEvent.
     * @param {SecurityEventCreateArgs} args - Arguments to create a SecurityEvent.
     * @example
     * // Create one SecurityEvent
     * const SecurityEvent = await prisma.securityEvent.create({
     *   data: {
     *     // ... data to create a SecurityEvent
     *   }
     * })
     * 
     */
    create<T extends SecurityEventCreateArgs>(args: SelectSubset<T, SecurityEventCreateArgs<ExtArgs>>): Prisma__SecurityEventClient<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SecurityEvents.
     * @param {SecurityEventCreateManyArgs} args - Arguments to create many SecurityEvents.
     * @example
     * // Create many SecurityEvents
     * const securityEvent = await prisma.securityEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SecurityEventCreateManyArgs>(args?: SelectSubset<T, SecurityEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SecurityEvents and returns the data saved in the database.
     * @param {SecurityEventCreateManyAndReturnArgs} args - Arguments to create many SecurityEvents.
     * @example
     * // Create many SecurityEvents
     * const securityEvent = await prisma.securityEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SecurityEvents and only return the `id`
     * const securityEventWithIdOnly = await prisma.securityEvent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SecurityEventCreateManyAndReturnArgs>(args?: SelectSubset<T, SecurityEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SecurityEvent.
     * @param {SecurityEventDeleteArgs} args - Arguments to delete one SecurityEvent.
     * @example
     * // Delete one SecurityEvent
     * const SecurityEvent = await prisma.securityEvent.delete({
     *   where: {
     *     // ... filter to delete one SecurityEvent
     *   }
     * })
     * 
     */
    delete<T extends SecurityEventDeleteArgs>(args: SelectSubset<T, SecurityEventDeleteArgs<ExtArgs>>): Prisma__SecurityEventClient<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SecurityEvent.
     * @param {SecurityEventUpdateArgs} args - Arguments to update one SecurityEvent.
     * @example
     * // Update one SecurityEvent
     * const securityEvent = await prisma.securityEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SecurityEventUpdateArgs>(args: SelectSubset<T, SecurityEventUpdateArgs<ExtArgs>>): Prisma__SecurityEventClient<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SecurityEvents.
     * @param {SecurityEventDeleteManyArgs} args - Arguments to filter SecurityEvents to delete.
     * @example
     * // Delete a few SecurityEvents
     * const { count } = await prisma.securityEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SecurityEventDeleteManyArgs>(args?: SelectSubset<T, SecurityEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecurityEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SecurityEvents
     * const securityEvent = await prisma.securityEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SecurityEventUpdateManyArgs>(args: SelectSubset<T, SecurityEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SecurityEvent.
     * @param {SecurityEventUpsertArgs} args - Arguments to update or create a SecurityEvent.
     * @example
     * // Update or create a SecurityEvent
     * const securityEvent = await prisma.securityEvent.upsert({
     *   create: {
     *     // ... data to create a SecurityEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SecurityEvent we want to update
     *   }
     * })
     */
    upsert<T extends SecurityEventUpsertArgs>(args: SelectSubset<T, SecurityEventUpsertArgs<ExtArgs>>): Prisma__SecurityEventClient<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SecurityEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityEventCountArgs} args - Arguments to filter SecurityEvents to count.
     * @example
     * // Count the number of SecurityEvents
     * const count = await prisma.securityEvent.count({
     *   where: {
     *     // ... the filter for the SecurityEvents we want to count
     *   }
     * })
    **/
    count<T extends SecurityEventCountArgs>(
      args?: Subset<T, SecurityEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SecurityEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SecurityEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SecurityEventAggregateArgs>(args: Subset<T, SecurityEventAggregateArgs>): Prisma.PrismaPromise<GetSecurityEventAggregateType<T>>

    /**
     * Group by SecurityEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SecurityEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SecurityEventGroupByArgs['orderBy'] }
        : { orderBy?: SecurityEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SecurityEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecurityEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SecurityEvent model
   */
  readonly fields: SecurityEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SecurityEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SecurityEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guild<T extends GuildDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuildDefaultArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SecurityEvent model
   */ 
  interface SecurityEventFieldRefs {
    readonly id: FieldRef<"SecurityEvent", 'Int'>
    readonly guildId: FieldRef<"SecurityEvent", 'String'>
    readonly type: FieldRef<"SecurityEvent", 'String'>
    readonly severity: FieldRef<"SecurityEvent", 'String'>
    readonly description: FieldRef<"SecurityEvent", 'String'>
    readonly createdAt: FieldRef<"SecurityEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SecurityEvent findUnique
   */
  export type SecurityEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    /**
     * Filter, which SecurityEvent to fetch.
     */
    where: SecurityEventWhereUniqueInput
  }

  /**
   * SecurityEvent findUniqueOrThrow
   */
  export type SecurityEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    /**
     * Filter, which SecurityEvent to fetch.
     */
    where: SecurityEventWhereUniqueInput
  }

  /**
   * SecurityEvent findFirst
   */
  export type SecurityEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    /**
     * Filter, which SecurityEvent to fetch.
     */
    where?: SecurityEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityEvents to fetch.
     */
    orderBy?: SecurityEventOrderByWithRelationInput | SecurityEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecurityEvents.
     */
    cursor?: SecurityEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecurityEvents.
     */
    distinct?: SecurityEventScalarFieldEnum | SecurityEventScalarFieldEnum[]
  }

  /**
   * SecurityEvent findFirstOrThrow
   */
  export type SecurityEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    /**
     * Filter, which SecurityEvent to fetch.
     */
    where?: SecurityEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityEvents to fetch.
     */
    orderBy?: SecurityEventOrderByWithRelationInput | SecurityEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecurityEvents.
     */
    cursor?: SecurityEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecurityEvents.
     */
    distinct?: SecurityEventScalarFieldEnum | SecurityEventScalarFieldEnum[]
  }

  /**
   * SecurityEvent findMany
   */
  export type SecurityEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    /**
     * Filter, which SecurityEvents to fetch.
     */
    where?: SecurityEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityEvents to fetch.
     */
    orderBy?: SecurityEventOrderByWithRelationInput | SecurityEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SecurityEvents.
     */
    cursor?: SecurityEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityEvents.
     */
    skip?: number
    distinct?: SecurityEventScalarFieldEnum | SecurityEventScalarFieldEnum[]
  }

  /**
   * SecurityEvent create
   */
  export type SecurityEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    /**
     * The data needed to create a SecurityEvent.
     */
    data: XOR<SecurityEventCreateInput, SecurityEventUncheckedCreateInput>
  }

  /**
   * SecurityEvent createMany
   */
  export type SecurityEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SecurityEvents.
     */
    data: SecurityEventCreateManyInput | SecurityEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SecurityEvent createManyAndReturn
   */
  export type SecurityEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SecurityEvents.
     */
    data: SecurityEventCreateManyInput | SecurityEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SecurityEvent update
   */
  export type SecurityEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    /**
     * The data needed to update a SecurityEvent.
     */
    data: XOR<SecurityEventUpdateInput, SecurityEventUncheckedUpdateInput>
    /**
     * Choose, which SecurityEvent to update.
     */
    where: SecurityEventWhereUniqueInput
  }

  /**
   * SecurityEvent updateMany
   */
  export type SecurityEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SecurityEvents.
     */
    data: XOR<SecurityEventUpdateManyMutationInput, SecurityEventUncheckedUpdateManyInput>
    /**
     * Filter which SecurityEvents to update
     */
    where?: SecurityEventWhereInput
  }

  /**
   * SecurityEvent upsert
   */
  export type SecurityEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    /**
     * The filter to search for the SecurityEvent to update in case it exists.
     */
    where: SecurityEventWhereUniqueInput
    /**
     * In case the SecurityEvent found by the `where` argument doesn't exist, create a new SecurityEvent with this data.
     */
    create: XOR<SecurityEventCreateInput, SecurityEventUncheckedCreateInput>
    /**
     * In case the SecurityEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SecurityEventUpdateInput, SecurityEventUncheckedUpdateInput>
  }

  /**
   * SecurityEvent delete
   */
  export type SecurityEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    /**
     * Filter which SecurityEvent to delete.
     */
    where: SecurityEventWhereUniqueInput
  }

  /**
   * SecurityEvent deleteMany
   */
  export type SecurityEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecurityEvents to delete
     */
    where?: SecurityEventWhereInput
  }

  /**
   * SecurityEvent without action
   */
  export type SecurityEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
  }


  /**
   * Model RaidEvent
   */

  export type AggregateRaidEvent = {
    _count: RaidEventCountAggregateOutputType | null
    _avg: RaidEventAvgAggregateOutputType | null
    _sum: RaidEventSumAggregateOutputType | null
    _min: RaidEventMinAggregateOutputType | null
    _max: RaidEventMaxAggregateOutputType | null
  }

  export type RaidEventAvgAggregateOutputType = {
    id: number | null
  }

  export type RaidEventSumAggregateOutputType = {
    id: number | null
  }

  export type RaidEventMinAggregateOutputType = {
    id: number | null
    guildId: string | null
    status: string | null
    startedAt: Date | null
    endedAt: Date | null
  }

  export type RaidEventMaxAggregateOutputType = {
    id: number | null
    guildId: string | null
    status: string | null
    startedAt: Date | null
    endedAt: Date | null
  }

  export type RaidEventCountAggregateOutputType = {
    id: number
    guildId: number
    status: number
    startedAt: number
    endedAt: number
    _all: number
  }


  export type RaidEventAvgAggregateInputType = {
    id?: true
  }

  export type RaidEventSumAggregateInputType = {
    id?: true
  }

  export type RaidEventMinAggregateInputType = {
    id?: true
    guildId?: true
    status?: true
    startedAt?: true
    endedAt?: true
  }

  export type RaidEventMaxAggregateInputType = {
    id?: true
    guildId?: true
    status?: true
    startedAt?: true
    endedAt?: true
  }

  export type RaidEventCountAggregateInputType = {
    id?: true
    guildId?: true
    status?: true
    startedAt?: true
    endedAt?: true
    _all?: true
  }

  export type RaidEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaidEvent to aggregate.
     */
    where?: RaidEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaidEvents to fetch.
     */
    orderBy?: RaidEventOrderByWithRelationInput | RaidEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RaidEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaidEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaidEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RaidEvents
    **/
    _count?: true | RaidEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RaidEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RaidEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RaidEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RaidEventMaxAggregateInputType
  }

  export type GetRaidEventAggregateType<T extends RaidEventAggregateArgs> = {
        [P in keyof T & keyof AggregateRaidEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRaidEvent[P]>
      : GetScalarType<T[P], AggregateRaidEvent[P]>
  }




  export type RaidEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaidEventWhereInput
    orderBy?: RaidEventOrderByWithAggregationInput | RaidEventOrderByWithAggregationInput[]
    by: RaidEventScalarFieldEnum[] | RaidEventScalarFieldEnum
    having?: RaidEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RaidEventCountAggregateInputType | true
    _avg?: RaidEventAvgAggregateInputType
    _sum?: RaidEventSumAggregateInputType
    _min?: RaidEventMinAggregateInputType
    _max?: RaidEventMaxAggregateInputType
  }

  export type RaidEventGroupByOutputType = {
    id: number
    guildId: string
    status: string
    startedAt: Date
    endedAt: Date | null
    _count: RaidEventCountAggregateOutputType | null
    _avg: RaidEventAvgAggregateOutputType | null
    _sum: RaidEventSumAggregateOutputType | null
    _min: RaidEventMinAggregateOutputType | null
    _max: RaidEventMaxAggregateOutputType | null
  }

  type GetRaidEventGroupByPayload<T extends RaidEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RaidEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RaidEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RaidEventGroupByOutputType[P]>
            : GetScalarType<T[P], RaidEventGroupByOutputType[P]>
        }
      >
    >


  export type RaidEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    status?: boolean
    startedAt?: boolean
    endedAt?: boolean
    guild?: boolean | GuildDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raidEvent"]>

  export type RaidEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    status?: boolean
    startedAt?: boolean
    endedAt?: boolean
    guild?: boolean | GuildDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raidEvent"]>

  export type RaidEventSelectScalar = {
    id?: boolean
    guildId?: boolean
    status?: boolean
    startedAt?: boolean
    endedAt?: boolean
  }

  export type RaidEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildDefaultArgs<ExtArgs>
  }
  export type RaidEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildDefaultArgs<ExtArgs>
  }

  export type $RaidEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RaidEvent"
    objects: {
      guild: Prisma.$GuildPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      guildId: string
      status: string
      startedAt: Date
      endedAt: Date | null
    }, ExtArgs["result"]["raidEvent"]>
    composites: {}
  }

  type RaidEventGetPayload<S extends boolean | null | undefined | RaidEventDefaultArgs> = $Result.GetResult<Prisma.$RaidEventPayload, S>

  type RaidEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RaidEventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RaidEventCountAggregateInputType | true
    }

  export interface RaidEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RaidEvent'], meta: { name: 'RaidEvent' } }
    /**
     * Find zero or one RaidEvent that matches the filter.
     * @param {RaidEventFindUniqueArgs} args - Arguments to find a RaidEvent
     * @example
     * // Get one RaidEvent
     * const raidEvent = await prisma.raidEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RaidEventFindUniqueArgs>(args: SelectSubset<T, RaidEventFindUniqueArgs<ExtArgs>>): Prisma__RaidEventClient<$Result.GetResult<Prisma.$RaidEventPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RaidEvent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RaidEventFindUniqueOrThrowArgs} args - Arguments to find a RaidEvent
     * @example
     * // Get one RaidEvent
     * const raidEvent = await prisma.raidEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RaidEventFindUniqueOrThrowArgs>(args: SelectSubset<T, RaidEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RaidEventClient<$Result.GetResult<Prisma.$RaidEventPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RaidEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidEventFindFirstArgs} args - Arguments to find a RaidEvent
     * @example
     * // Get one RaidEvent
     * const raidEvent = await prisma.raidEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RaidEventFindFirstArgs>(args?: SelectSubset<T, RaidEventFindFirstArgs<ExtArgs>>): Prisma__RaidEventClient<$Result.GetResult<Prisma.$RaidEventPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RaidEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidEventFindFirstOrThrowArgs} args - Arguments to find a RaidEvent
     * @example
     * // Get one RaidEvent
     * const raidEvent = await prisma.raidEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RaidEventFindFirstOrThrowArgs>(args?: SelectSubset<T, RaidEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__RaidEventClient<$Result.GetResult<Prisma.$RaidEventPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RaidEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RaidEvents
     * const raidEvents = await prisma.raidEvent.findMany()
     * 
     * // Get first 10 RaidEvents
     * const raidEvents = await prisma.raidEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raidEventWithIdOnly = await prisma.raidEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RaidEventFindManyArgs>(args?: SelectSubset<T, RaidEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaidEventPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RaidEvent.
     * @param {RaidEventCreateArgs} args - Arguments to create a RaidEvent.
     * @example
     * // Create one RaidEvent
     * const RaidEvent = await prisma.raidEvent.create({
     *   data: {
     *     // ... data to create a RaidEvent
     *   }
     * })
     * 
     */
    create<T extends RaidEventCreateArgs>(args: SelectSubset<T, RaidEventCreateArgs<ExtArgs>>): Prisma__RaidEventClient<$Result.GetResult<Prisma.$RaidEventPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RaidEvents.
     * @param {RaidEventCreateManyArgs} args - Arguments to create many RaidEvents.
     * @example
     * // Create many RaidEvents
     * const raidEvent = await prisma.raidEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RaidEventCreateManyArgs>(args?: SelectSubset<T, RaidEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RaidEvents and returns the data saved in the database.
     * @param {RaidEventCreateManyAndReturnArgs} args - Arguments to create many RaidEvents.
     * @example
     * // Create many RaidEvents
     * const raidEvent = await prisma.raidEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RaidEvents and only return the `id`
     * const raidEventWithIdOnly = await prisma.raidEvent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RaidEventCreateManyAndReturnArgs>(args?: SelectSubset<T, RaidEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaidEventPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RaidEvent.
     * @param {RaidEventDeleteArgs} args - Arguments to delete one RaidEvent.
     * @example
     * // Delete one RaidEvent
     * const RaidEvent = await prisma.raidEvent.delete({
     *   where: {
     *     // ... filter to delete one RaidEvent
     *   }
     * })
     * 
     */
    delete<T extends RaidEventDeleteArgs>(args: SelectSubset<T, RaidEventDeleteArgs<ExtArgs>>): Prisma__RaidEventClient<$Result.GetResult<Prisma.$RaidEventPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RaidEvent.
     * @param {RaidEventUpdateArgs} args - Arguments to update one RaidEvent.
     * @example
     * // Update one RaidEvent
     * const raidEvent = await prisma.raidEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RaidEventUpdateArgs>(args: SelectSubset<T, RaidEventUpdateArgs<ExtArgs>>): Prisma__RaidEventClient<$Result.GetResult<Prisma.$RaidEventPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RaidEvents.
     * @param {RaidEventDeleteManyArgs} args - Arguments to filter RaidEvents to delete.
     * @example
     * // Delete a few RaidEvents
     * const { count } = await prisma.raidEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RaidEventDeleteManyArgs>(args?: SelectSubset<T, RaidEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RaidEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RaidEvents
     * const raidEvent = await prisma.raidEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RaidEventUpdateManyArgs>(args: SelectSubset<T, RaidEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RaidEvent.
     * @param {RaidEventUpsertArgs} args - Arguments to update or create a RaidEvent.
     * @example
     * // Update or create a RaidEvent
     * const raidEvent = await prisma.raidEvent.upsert({
     *   create: {
     *     // ... data to create a RaidEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RaidEvent we want to update
     *   }
     * })
     */
    upsert<T extends RaidEventUpsertArgs>(args: SelectSubset<T, RaidEventUpsertArgs<ExtArgs>>): Prisma__RaidEventClient<$Result.GetResult<Prisma.$RaidEventPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RaidEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidEventCountArgs} args - Arguments to filter RaidEvents to count.
     * @example
     * // Count the number of RaidEvents
     * const count = await prisma.raidEvent.count({
     *   where: {
     *     // ... the filter for the RaidEvents we want to count
     *   }
     * })
    **/
    count<T extends RaidEventCountArgs>(
      args?: Subset<T, RaidEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RaidEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RaidEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RaidEventAggregateArgs>(args: Subset<T, RaidEventAggregateArgs>): Prisma.PrismaPromise<GetRaidEventAggregateType<T>>

    /**
     * Group by RaidEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RaidEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RaidEventGroupByArgs['orderBy'] }
        : { orderBy?: RaidEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RaidEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaidEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RaidEvent model
   */
  readonly fields: RaidEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RaidEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RaidEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guild<T extends GuildDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuildDefaultArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RaidEvent model
   */ 
  interface RaidEventFieldRefs {
    readonly id: FieldRef<"RaidEvent", 'Int'>
    readonly guildId: FieldRef<"RaidEvent", 'String'>
    readonly status: FieldRef<"RaidEvent", 'String'>
    readonly startedAt: FieldRef<"RaidEvent", 'DateTime'>
    readonly endedAt: FieldRef<"RaidEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RaidEvent findUnique
   */
  export type RaidEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidEvent
     */
    select?: RaidEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidEventInclude<ExtArgs> | null
    /**
     * Filter, which RaidEvent to fetch.
     */
    where: RaidEventWhereUniqueInput
  }

  /**
   * RaidEvent findUniqueOrThrow
   */
  export type RaidEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidEvent
     */
    select?: RaidEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidEventInclude<ExtArgs> | null
    /**
     * Filter, which RaidEvent to fetch.
     */
    where: RaidEventWhereUniqueInput
  }

  /**
   * RaidEvent findFirst
   */
  export type RaidEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidEvent
     */
    select?: RaidEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidEventInclude<ExtArgs> | null
    /**
     * Filter, which RaidEvent to fetch.
     */
    where?: RaidEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaidEvents to fetch.
     */
    orderBy?: RaidEventOrderByWithRelationInput | RaidEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaidEvents.
     */
    cursor?: RaidEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaidEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaidEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaidEvents.
     */
    distinct?: RaidEventScalarFieldEnum | RaidEventScalarFieldEnum[]
  }

  /**
   * RaidEvent findFirstOrThrow
   */
  export type RaidEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidEvent
     */
    select?: RaidEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidEventInclude<ExtArgs> | null
    /**
     * Filter, which RaidEvent to fetch.
     */
    where?: RaidEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaidEvents to fetch.
     */
    orderBy?: RaidEventOrderByWithRelationInput | RaidEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaidEvents.
     */
    cursor?: RaidEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaidEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaidEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaidEvents.
     */
    distinct?: RaidEventScalarFieldEnum | RaidEventScalarFieldEnum[]
  }

  /**
   * RaidEvent findMany
   */
  export type RaidEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidEvent
     */
    select?: RaidEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidEventInclude<ExtArgs> | null
    /**
     * Filter, which RaidEvents to fetch.
     */
    where?: RaidEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaidEvents to fetch.
     */
    orderBy?: RaidEventOrderByWithRelationInput | RaidEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RaidEvents.
     */
    cursor?: RaidEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaidEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaidEvents.
     */
    skip?: number
    distinct?: RaidEventScalarFieldEnum | RaidEventScalarFieldEnum[]
  }

  /**
   * RaidEvent create
   */
  export type RaidEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidEvent
     */
    select?: RaidEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidEventInclude<ExtArgs> | null
    /**
     * The data needed to create a RaidEvent.
     */
    data: XOR<RaidEventCreateInput, RaidEventUncheckedCreateInput>
  }

  /**
   * RaidEvent createMany
   */
  export type RaidEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RaidEvents.
     */
    data: RaidEventCreateManyInput | RaidEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RaidEvent createManyAndReturn
   */
  export type RaidEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidEvent
     */
    select?: RaidEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RaidEvents.
     */
    data: RaidEventCreateManyInput | RaidEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RaidEvent update
   */
  export type RaidEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidEvent
     */
    select?: RaidEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidEventInclude<ExtArgs> | null
    /**
     * The data needed to update a RaidEvent.
     */
    data: XOR<RaidEventUpdateInput, RaidEventUncheckedUpdateInput>
    /**
     * Choose, which RaidEvent to update.
     */
    where: RaidEventWhereUniqueInput
  }

  /**
   * RaidEvent updateMany
   */
  export type RaidEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RaidEvents.
     */
    data: XOR<RaidEventUpdateManyMutationInput, RaidEventUncheckedUpdateManyInput>
    /**
     * Filter which RaidEvents to update
     */
    where?: RaidEventWhereInput
  }

  /**
   * RaidEvent upsert
   */
  export type RaidEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidEvent
     */
    select?: RaidEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidEventInclude<ExtArgs> | null
    /**
     * The filter to search for the RaidEvent to update in case it exists.
     */
    where: RaidEventWhereUniqueInput
    /**
     * In case the RaidEvent found by the `where` argument doesn't exist, create a new RaidEvent with this data.
     */
    create: XOR<RaidEventCreateInput, RaidEventUncheckedCreateInput>
    /**
     * In case the RaidEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RaidEventUpdateInput, RaidEventUncheckedUpdateInput>
  }

  /**
   * RaidEvent delete
   */
  export type RaidEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidEvent
     */
    select?: RaidEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidEventInclude<ExtArgs> | null
    /**
     * Filter which RaidEvent to delete.
     */
    where: RaidEventWhereUniqueInput
  }

  /**
   * RaidEvent deleteMany
   */
  export type RaidEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaidEvents to delete
     */
    where?: RaidEventWhereInput
  }

  /**
   * RaidEvent without action
   */
  export type RaidEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidEvent
     */
    select?: RaidEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidEventInclude<ExtArgs> | null
  }


  /**
   * Model MemberSnapshot
   */

  export type AggregateMemberSnapshot = {
    _count: MemberSnapshotCountAggregateOutputType | null
    _avg: MemberSnapshotAvgAggregateOutputType | null
    _sum: MemberSnapshotSumAggregateOutputType | null
    _min: MemberSnapshotMinAggregateOutputType | null
    _max: MemberSnapshotMaxAggregateOutputType | null
  }

  export type MemberSnapshotAvgAggregateOutputType = {
    id: number | null
    count: number | null
  }

  export type MemberSnapshotSumAggregateOutputType = {
    id: number | null
    count: number | null
  }

  export type MemberSnapshotMinAggregateOutputType = {
    id: number | null
    guildId: string | null
    count: number | null
    timestamp: Date | null
  }

  export type MemberSnapshotMaxAggregateOutputType = {
    id: number | null
    guildId: string | null
    count: number | null
    timestamp: Date | null
  }

  export type MemberSnapshotCountAggregateOutputType = {
    id: number
    guildId: number
    count: number
    timestamp: number
    _all: number
  }


  export type MemberSnapshotAvgAggregateInputType = {
    id?: true
    count?: true
  }

  export type MemberSnapshotSumAggregateInputType = {
    id?: true
    count?: true
  }

  export type MemberSnapshotMinAggregateInputType = {
    id?: true
    guildId?: true
    count?: true
    timestamp?: true
  }

  export type MemberSnapshotMaxAggregateInputType = {
    id?: true
    guildId?: true
    count?: true
    timestamp?: true
  }

  export type MemberSnapshotCountAggregateInputType = {
    id?: true
    guildId?: true
    count?: true
    timestamp?: true
    _all?: true
  }

  export type MemberSnapshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemberSnapshot to aggregate.
     */
    where?: MemberSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberSnapshots to fetch.
     */
    orderBy?: MemberSnapshotOrderByWithRelationInput | MemberSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MemberSnapshots
    **/
    _count?: true | MemberSnapshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemberSnapshotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemberSnapshotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberSnapshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberSnapshotMaxAggregateInputType
  }

  export type GetMemberSnapshotAggregateType<T extends MemberSnapshotAggregateArgs> = {
        [P in keyof T & keyof AggregateMemberSnapshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemberSnapshot[P]>
      : GetScalarType<T[P], AggregateMemberSnapshot[P]>
  }




  export type MemberSnapshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberSnapshotWhereInput
    orderBy?: MemberSnapshotOrderByWithAggregationInput | MemberSnapshotOrderByWithAggregationInput[]
    by: MemberSnapshotScalarFieldEnum[] | MemberSnapshotScalarFieldEnum
    having?: MemberSnapshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberSnapshotCountAggregateInputType | true
    _avg?: MemberSnapshotAvgAggregateInputType
    _sum?: MemberSnapshotSumAggregateInputType
    _min?: MemberSnapshotMinAggregateInputType
    _max?: MemberSnapshotMaxAggregateInputType
  }

  export type MemberSnapshotGroupByOutputType = {
    id: number
    guildId: string
    count: number
    timestamp: Date
    _count: MemberSnapshotCountAggregateOutputType | null
    _avg: MemberSnapshotAvgAggregateOutputType | null
    _sum: MemberSnapshotSumAggregateOutputType | null
    _min: MemberSnapshotMinAggregateOutputType | null
    _max: MemberSnapshotMaxAggregateOutputType | null
  }

  type GetMemberSnapshotGroupByPayload<T extends MemberSnapshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberSnapshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberSnapshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberSnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], MemberSnapshotGroupByOutputType[P]>
        }
      >
    >


  export type MemberSnapshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    count?: boolean
    timestamp?: boolean
    guild?: boolean | GuildDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberSnapshot"]>

  export type MemberSnapshotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    count?: boolean
    timestamp?: boolean
    guild?: boolean | GuildDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberSnapshot"]>

  export type MemberSnapshotSelectScalar = {
    id?: boolean
    guildId?: boolean
    count?: boolean
    timestamp?: boolean
  }

  export type MemberSnapshotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildDefaultArgs<ExtArgs>
  }
  export type MemberSnapshotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildDefaultArgs<ExtArgs>
  }

  export type $MemberSnapshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MemberSnapshot"
    objects: {
      guild: Prisma.$GuildPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      guildId: string
      count: number
      timestamp: Date
    }, ExtArgs["result"]["memberSnapshot"]>
    composites: {}
  }

  type MemberSnapshotGetPayload<S extends boolean | null | undefined | MemberSnapshotDefaultArgs> = $Result.GetResult<Prisma.$MemberSnapshotPayload, S>

  type MemberSnapshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MemberSnapshotFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MemberSnapshotCountAggregateInputType | true
    }

  export interface MemberSnapshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MemberSnapshot'], meta: { name: 'MemberSnapshot' } }
    /**
     * Find zero or one MemberSnapshot that matches the filter.
     * @param {MemberSnapshotFindUniqueArgs} args - Arguments to find a MemberSnapshot
     * @example
     * // Get one MemberSnapshot
     * const memberSnapshot = await prisma.memberSnapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberSnapshotFindUniqueArgs>(args: SelectSubset<T, MemberSnapshotFindUniqueArgs<ExtArgs>>): Prisma__MemberSnapshotClient<$Result.GetResult<Prisma.$MemberSnapshotPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MemberSnapshot that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MemberSnapshotFindUniqueOrThrowArgs} args - Arguments to find a MemberSnapshot
     * @example
     * // Get one MemberSnapshot
     * const memberSnapshot = await prisma.memberSnapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberSnapshotFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberSnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberSnapshotClient<$Result.GetResult<Prisma.$MemberSnapshotPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MemberSnapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberSnapshotFindFirstArgs} args - Arguments to find a MemberSnapshot
     * @example
     * // Get one MemberSnapshot
     * const memberSnapshot = await prisma.memberSnapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberSnapshotFindFirstArgs>(args?: SelectSubset<T, MemberSnapshotFindFirstArgs<ExtArgs>>): Prisma__MemberSnapshotClient<$Result.GetResult<Prisma.$MemberSnapshotPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MemberSnapshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberSnapshotFindFirstOrThrowArgs} args - Arguments to find a MemberSnapshot
     * @example
     * // Get one MemberSnapshot
     * const memberSnapshot = await prisma.memberSnapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberSnapshotFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberSnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberSnapshotClient<$Result.GetResult<Prisma.$MemberSnapshotPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MemberSnapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberSnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MemberSnapshots
     * const memberSnapshots = await prisma.memberSnapshot.findMany()
     * 
     * // Get first 10 MemberSnapshots
     * const memberSnapshots = await prisma.memberSnapshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberSnapshotWithIdOnly = await prisma.memberSnapshot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberSnapshotFindManyArgs>(args?: SelectSubset<T, MemberSnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberSnapshotPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MemberSnapshot.
     * @param {MemberSnapshotCreateArgs} args - Arguments to create a MemberSnapshot.
     * @example
     * // Create one MemberSnapshot
     * const MemberSnapshot = await prisma.memberSnapshot.create({
     *   data: {
     *     // ... data to create a MemberSnapshot
     *   }
     * })
     * 
     */
    create<T extends MemberSnapshotCreateArgs>(args: SelectSubset<T, MemberSnapshotCreateArgs<ExtArgs>>): Prisma__MemberSnapshotClient<$Result.GetResult<Prisma.$MemberSnapshotPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MemberSnapshots.
     * @param {MemberSnapshotCreateManyArgs} args - Arguments to create many MemberSnapshots.
     * @example
     * // Create many MemberSnapshots
     * const memberSnapshot = await prisma.memberSnapshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberSnapshotCreateManyArgs>(args?: SelectSubset<T, MemberSnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MemberSnapshots and returns the data saved in the database.
     * @param {MemberSnapshotCreateManyAndReturnArgs} args - Arguments to create many MemberSnapshots.
     * @example
     * // Create many MemberSnapshots
     * const memberSnapshot = await prisma.memberSnapshot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MemberSnapshots and only return the `id`
     * const memberSnapshotWithIdOnly = await prisma.memberSnapshot.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemberSnapshotCreateManyAndReturnArgs>(args?: SelectSubset<T, MemberSnapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberSnapshotPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MemberSnapshot.
     * @param {MemberSnapshotDeleteArgs} args - Arguments to delete one MemberSnapshot.
     * @example
     * // Delete one MemberSnapshot
     * const MemberSnapshot = await prisma.memberSnapshot.delete({
     *   where: {
     *     // ... filter to delete one MemberSnapshot
     *   }
     * })
     * 
     */
    delete<T extends MemberSnapshotDeleteArgs>(args: SelectSubset<T, MemberSnapshotDeleteArgs<ExtArgs>>): Prisma__MemberSnapshotClient<$Result.GetResult<Prisma.$MemberSnapshotPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MemberSnapshot.
     * @param {MemberSnapshotUpdateArgs} args - Arguments to update one MemberSnapshot.
     * @example
     * // Update one MemberSnapshot
     * const memberSnapshot = await prisma.memberSnapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberSnapshotUpdateArgs>(args: SelectSubset<T, MemberSnapshotUpdateArgs<ExtArgs>>): Prisma__MemberSnapshotClient<$Result.GetResult<Prisma.$MemberSnapshotPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MemberSnapshots.
     * @param {MemberSnapshotDeleteManyArgs} args - Arguments to filter MemberSnapshots to delete.
     * @example
     * // Delete a few MemberSnapshots
     * const { count } = await prisma.memberSnapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberSnapshotDeleteManyArgs>(args?: SelectSubset<T, MemberSnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemberSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberSnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MemberSnapshots
     * const memberSnapshot = await prisma.memberSnapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberSnapshotUpdateManyArgs>(args: SelectSubset<T, MemberSnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MemberSnapshot.
     * @param {MemberSnapshotUpsertArgs} args - Arguments to update or create a MemberSnapshot.
     * @example
     * // Update or create a MemberSnapshot
     * const memberSnapshot = await prisma.memberSnapshot.upsert({
     *   create: {
     *     // ... data to create a MemberSnapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MemberSnapshot we want to update
     *   }
     * })
     */
    upsert<T extends MemberSnapshotUpsertArgs>(args: SelectSubset<T, MemberSnapshotUpsertArgs<ExtArgs>>): Prisma__MemberSnapshotClient<$Result.GetResult<Prisma.$MemberSnapshotPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MemberSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberSnapshotCountArgs} args - Arguments to filter MemberSnapshots to count.
     * @example
     * // Count the number of MemberSnapshots
     * const count = await prisma.memberSnapshot.count({
     *   where: {
     *     // ... the filter for the MemberSnapshots we want to count
     *   }
     * })
    **/
    count<T extends MemberSnapshotCountArgs>(
      args?: Subset<T, MemberSnapshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberSnapshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MemberSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberSnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemberSnapshotAggregateArgs>(args: Subset<T, MemberSnapshotAggregateArgs>): Prisma.PrismaPromise<GetMemberSnapshotAggregateType<T>>

    /**
     * Group by MemberSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberSnapshotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemberSnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberSnapshotGroupByArgs['orderBy'] }
        : { orderBy?: MemberSnapshotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemberSnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberSnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MemberSnapshot model
   */
  readonly fields: MemberSnapshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MemberSnapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberSnapshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guild<T extends GuildDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuildDefaultArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MemberSnapshot model
   */ 
  interface MemberSnapshotFieldRefs {
    readonly id: FieldRef<"MemberSnapshot", 'Int'>
    readonly guildId: FieldRef<"MemberSnapshot", 'String'>
    readonly count: FieldRef<"MemberSnapshot", 'Int'>
    readonly timestamp: FieldRef<"MemberSnapshot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MemberSnapshot findUnique
   */
  export type MemberSnapshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberSnapshot
     */
    select?: MemberSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which MemberSnapshot to fetch.
     */
    where: MemberSnapshotWhereUniqueInput
  }

  /**
   * MemberSnapshot findUniqueOrThrow
   */
  export type MemberSnapshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberSnapshot
     */
    select?: MemberSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which MemberSnapshot to fetch.
     */
    where: MemberSnapshotWhereUniqueInput
  }

  /**
   * MemberSnapshot findFirst
   */
  export type MemberSnapshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberSnapshot
     */
    select?: MemberSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which MemberSnapshot to fetch.
     */
    where?: MemberSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberSnapshots to fetch.
     */
    orderBy?: MemberSnapshotOrderByWithRelationInput | MemberSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemberSnapshots.
     */
    cursor?: MemberSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberSnapshots.
     */
    distinct?: MemberSnapshotScalarFieldEnum | MemberSnapshotScalarFieldEnum[]
  }

  /**
   * MemberSnapshot findFirstOrThrow
   */
  export type MemberSnapshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberSnapshot
     */
    select?: MemberSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which MemberSnapshot to fetch.
     */
    where?: MemberSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberSnapshots to fetch.
     */
    orderBy?: MemberSnapshotOrderByWithRelationInput | MemberSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemberSnapshots.
     */
    cursor?: MemberSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberSnapshots.
     */
    distinct?: MemberSnapshotScalarFieldEnum | MemberSnapshotScalarFieldEnum[]
  }

  /**
   * MemberSnapshot findMany
   */
  export type MemberSnapshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberSnapshot
     */
    select?: MemberSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which MemberSnapshots to fetch.
     */
    where?: MemberSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberSnapshots to fetch.
     */
    orderBy?: MemberSnapshotOrderByWithRelationInput | MemberSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MemberSnapshots.
     */
    cursor?: MemberSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberSnapshots.
     */
    skip?: number
    distinct?: MemberSnapshotScalarFieldEnum | MemberSnapshotScalarFieldEnum[]
  }

  /**
   * MemberSnapshot create
   */
  export type MemberSnapshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberSnapshot
     */
    select?: MemberSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberSnapshotInclude<ExtArgs> | null
    /**
     * The data needed to create a MemberSnapshot.
     */
    data: XOR<MemberSnapshotCreateInput, MemberSnapshotUncheckedCreateInput>
  }

  /**
   * MemberSnapshot createMany
   */
  export type MemberSnapshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MemberSnapshots.
     */
    data: MemberSnapshotCreateManyInput | MemberSnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MemberSnapshot createManyAndReturn
   */
  export type MemberSnapshotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberSnapshot
     */
    select?: MemberSnapshotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MemberSnapshots.
     */
    data: MemberSnapshotCreateManyInput | MemberSnapshotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberSnapshotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MemberSnapshot update
   */
  export type MemberSnapshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberSnapshot
     */
    select?: MemberSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberSnapshotInclude<ExtArgs> | null
    /**
     * The data needed to update a MemberSnapshot.
     */
    data: XOR<MemberSnapshotUpdateInput, MemberSnapshotUncheckedUpdateInput>
    /**
     * Choose, which MemberSnapshot to update.
     */
    where: MemberSnapshotWhereUniqueInput
  }

  /**
   * MemberSnapshot updateMany
   */
  export type MemberSnapshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MemberSnapshots.
     */
    data: XOR<MemberSnapshotUpdateManyMutationInput, MemberSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which MemberSnapshots to update
     */
    where?: MemberSnapshotWhereInput
  }

  /**
   * MemberSnapshot upsert
   */
  export type MemberSnapshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberSnapshot
     */
    select?: MemberSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberSnapshotInclude<ExtArgs> | null
    /**
     * The filter to search for the MemberSnapshot to update in case it exists.
     */
    where: MemberSnapshotWhereUniqueInput
    /**
     * In case the MemberSnapshot found by the `where` argument doesn't exist, create a new MemberSnapshot with this data.
     */
    create: XOR<MemberSnapshotCreateInput, MemberSnapshotUncheckedCreateInput>
    /**
     * In case the MemberSnapshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberSnapshotUpdateInput, MemberSnapshotUncheckedUpdateInput>
  }

  /**
   * MemberSnapshot delete
   */
  export type MemberSnapshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberSnapshot
     */
    select?: MemberSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberSnapshotInclude<ExtArgs> | null
    /**
     * Filter which MemberSnapshot to delete.
     */
    where: MemberSnapshotWhereUniqueInput
  }

  /**
   * MemberSnapshot deleteMany
   */
  export type MemberSnapshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemberSnapshots to delete
     */
    where?: MemberSnapshotWhereInput
  }

  /**
   * MemberSnapshot without action
   */
  export type MemberSnapshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberSnapshot
     */
    select?: MemberSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberSnapshotInclude<ExtArgs> | null
  }


  /**
   * Model MessageActivity
   */

  export type AggregateMessageActivity = {
    _count: MessageActivityCountAggregateOutputType | null
    _avg: MessageActivityAvgAggregateOutputType | null
    _sum: MessageActivitySumAggregateOutputType | null
    _min: MessageActivityMinAggregateOutputType | null
    _max: MessageActivityMaxAggregateOutputType | null
  }

  export type MessageActivityAvgAggregateOutputType = {
    id: number | null
    count: number | null
  }

  export type MessageActivitySumAggregateOutputType = {
    id: number | null
    count: number | null
  }

  export type MessageActivityMinAggregateOutputType = {
    id: number | null
    guildId: string | null
    channelId: string | null
    count: number | null
    timestamp: Date | null
  }

  export type MessageActivityMaxAggregateOutputType = {
    id: number | null
    guildId: string | null
    channelId: string | null
    count: number | null
    timestamp: Date | null
  }

  export type MessageActivityCountAggregateOutputType = {
    id: number
    guildId: number
    channelId: number
    count: number
    timestamp: number
    _all: number
  }


  export type MessageActivityAvgAggregateInputType = {
    id?: true
    count?: true
  }

  export type MessageActivitySumAggregateInputType = {
    id?: true
    count?: true
  }

  export type MessageActivityMinAggregateInputType = {
    id?: true
    guildId?: true
    channelId?: true
    count?: true
    timestamp?: true
  }

  export type MessageActivityMaxAggregateInputType = {
    id?: true
    guildId?: true
    channelId?: true
    count?: true
    timestamp?: true
  }

  export type MessageActivityCountAggregateInputType = {
    id?: true
    guildId?: true
    channelId?: true
    count?: true
    timestamp?: true
    _all?: true
  }

  export type MessageActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageActivity to aggregate.
     */
    where?: MessageActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageActivities to fetch.
     */
    orderBy?: MessageActivityOrderByWithRelationInput | MessageActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageActivities
    **/
    _count?: true | MessageActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageActivityMaxAggregateInputType
  }

  export type GetMessageActivityAggregateType<T extends MessageActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageActivity[P]>
      : GetScalarType<T[P], AggregateMessageActivity[P]>
  }




  export type MessageActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageActivityWhereInput
    orderBy?: MessageActivityOrderByWithAggregationInput | MessageActivityOrderByWithAggregationInput[]
    by: MessageActivityScalarFieldEnum[] | MessageActivityScalarFieldEnum
    having?: MessageActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageActivityCountAggregateInputType | true
    _avg?: MessageActivityAvgAggregateInputType
    _sum?: MessageActivitySumAggregateInputType
    _min?: MessageActivityMinAggregateInputType
    _max?: MessageActivityMaxAggregateInputType
  }

  export type MessageActivityGroupByOutputType = {
    id: number
    guildId: string
    channelId: string
    count: number
    timestamp: Date
    _count: MessageActivityCountAggregateOutputType | null
    _avg: MessageActivityAvgAggregateOutputType | null
    _sum: MessageActivitySumAggregateOutputType | null
    _min: MessageActivityMinAggregateOutputType | null
    _max: MessageActivityMaxAggregateOutputType | null
  }

  type GetMessageActivityGroupByPayload<T extends MessageActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageActivityGroupByOutputType[P]>
            : GetScalarType<T[P], MessageActivityGroupByOutputType[P]>
        }
      >
    >


  export type MessageActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    channelId?: boolean
    count?: boolean
    timestamp?: boolean
    guild?: boolean | GuildDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageActivity"]>

  export type MessageActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    channelId?: boolean
    count?: boolean
    timestamp?: boolean
    guild?: boolean | GuildDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageActivity"]>

  export type MessageActivitySelectScalar = {
    id?: boolean
    guildId?: boolean
    channelId?: boolean
    count?: boolean
    timestamp?: boolean
  }

  export type MessageActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildDefaultArgs<ExtArgs>
  }
  export type MessageActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildDefaultArgs<ExtArgs>
  }

  export type $MessageActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MessageActivity"
    objects: {
      guild: Prisma.$GuildPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      guildId: string
      channelId: string
      count: number
      timestamp: Date
    }, ExtArgs["result"]["messageActivity"]>
    composites: {}
  }

  type MessageActivityGetPayload<S extends boolean | null | undefined | MessageActivityDefaultArgs> = $Result.GetResult<Prisma.$MessageActivityPayload, S>

  type MessageActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MessageActivityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MessageActivityCountAggregateInputType | true
    }

  export interface MessageActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessageActivity'], meta: { name: 'MessageActivity' } }
    /**
     * Find zero or one MessageActivity that matches the filter.
     * @param {MessageActivityFindUniqueArgs} args - Arguments to find a MessageActivity
     * @example
     * // Get one MessageActivity
     * const messageActivity = await prisma.messageActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageActivityFindUniqueArgs>(args: SelectSubset<T, MessageActivityFindUniqueArgs<ExtArgs>>): Prisma__MessageActivityClient<$Result.GetResult<Prisma.$MessageActivityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MessageActivity that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MessageActivityFindUniqueOrThrowArgs} args - Arguments to find a MessageActivity
     * @example
     * // Get one MessageActivity
     * const messageActivity = await prisma.messageActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageActivityClient<$Result.GetResult<Prisma.$MessageActivityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MessageActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageActivityFindFirstArgs} args - Arguments to find a MessageActivity
     * @example
     * // Get one MessageActivity
     * const messageActivity = await prisma.messageActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageActivityFindFirstArgs>(args?: SelectSubset<T, MessageActivityFindFirstArgs<ExtArgs>>): Prisma__MessageActivityClient<$Result.GetResult<Prisma.$MessageActivityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MessageActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageActivityFindFirstOrThrowArgs} args - Arguments to find a MessageActivity
     * @example
     * // Get one MessageActivity
     * const messageActivity = await prisma.messageActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageActivityClient<$Result.GetResult<Prisma.$MessageActivityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MessageActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageActivities
     * const messageActivities = await prisma.messageActivity.findMany()
     * 
     * // Get first 10 MessageActivities
     * const messageActivities = await prisma.messageActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageActivityWithIdOnly = await prisma.messageActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageActivityFindManyArgs>(args?: SelectSubset<T, MessageActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageActivityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MessageActivity.
     * @param {MessageActivityCreateArgs} args - Arguments to create a MessageActivity.
     * @example
     * // Create one MessageActivity
     * const MessageActivity = await prisma.messageActivity.create({
     *   data: {
     *     // ... data to create a MessageActivity
     *   }
     * })
     * 
     */
    create<T extends MessageActivityCreateArgs>(args: SelectSubset<T, MessageActivityCreateArgs<ExtArgs>>): Prisma__MessageActivityClient<$Result.GetResult<Prisma.$MessageActivityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MessageActivities.
     * @param {MessageActivityCreateManyArgs} args - Arguments to create many MessageActivities.
     * @example
     * // Create many MessageActivities
     * const messageActivity = await prisma.messageActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageActivityCreateManyArgs>(args?: SelectSubset<T, MessageActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MessageActivities and returns the data saved in the database.
     * @param {MessageActivityCreateManyAndReturnArgs} args - Arguments to create many MessageActivities.
     * @example
     * // Create many MessageActivities
     * const messageActivity = await prisma.messageActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MessageActivities and only return the `id`
     * const messageActivityWithIdOnly = await prisma.messageActivity.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageActivityPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MessageActivity.
     * @param {MessageActivityDeleteArgs} args - Arguments to delete one MessageActivity.
     * @example
     * // Delete one MessageActivity
     * const MessageActivity = await prisma.messageActivity.delete({
     *   where: {
     *     // ... filter to delete one MessageActivity
     *   }
     * })
     * 
     */
    delete<T extends MessageActivityDeleteArgs>(args: SelectSubset<T, MessageActivityDeleteArgs<ExtArgs>>): Prisma__MessageActivityClient<$Result.GetResult<Prisma.$MessageActivityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MessageActivity.
     * @param {MessageActivityUpdateArgs} args - Arguments to update one MessageActivity.
     * @example
     * // Update one MessageActivity
     * const messageActivity = await prisma.messageActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageActivityUpdateArgs>(args: SelectSubset<T, MessageActivityUpdateArgs<ExtArgs>>): Prisma__MessageActivityClient<$Result.GetResult<Prisma.$MessageActivityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MessageActivities.
     * @param {MessageActivityDeleteManyArgs} args - Arguments to filter MessageActivities to delete.
     * @example
     * // Delete a few MessageActivities
     * const { count } = await prisma.messageActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageActivityDeleteManyArgs>(args?: SelectSubset<T, MessageActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageActivities
     * const messageActivity = await prisma.messageActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageActivityUpdateManyArgs>(args: SelectSubset<T, MessageActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MessageActivity.
     * @param {MessageActivityUpsertArgs} args - Arguments to update or create a MessageActivity.
     * @example
     * // Update or create a MessageActivity
     * const messageActivity = await prisma.messageActivity.upsert({
     *   create: {
     *     // ... data to create a MessageActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageActivity we want to update
     *   }
     * })
     */
    upsert<T extends MessageActivityUpsertArgs>(args: SelectSubset<T, MessageActivityUpsertArgs<ExtArgs>>): Prisma__MessageActivityClient<$Result.GetResult<Prisma.$MessageActivityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MessageActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageActivityCountArgs} args - Arguments to filter MessageActivities to count.
     * @example
     * // Count the number of MessageActivities
     * const count = await prisma.messageActivity.count({
     *   where: {
     *     // ... the filter for the MessageActivities we want to count
     *   }
     * })
    **/
    count<T extends MessageActivityCountArgs>(
      args?: Subset<T, MessageActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageActivityAggregateArgs>(args: Subset<T, MessageActivityAggregateArgs>): Prisma.PrismaPromise<GetMessageActivityAggregateType<T>>

    /**
     * Group by MessageActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageActivityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageActivityGroupByArgs['orderBy'] }
        : { orderBy?: MessageActivityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MessageActivity model
   */
  readonly fields: MessageActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guild<T extends GuildDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuildDefaultArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MessageActivity model
   */ 
  interface MessageActivityFieldRefs {
    readonly id: FieldRef<"MessageActivity", 'Int'>
    readonly guildId: FieldRef<"MessageActivity", 'String'>
    readonly channelId: FieldRef<"MessageActivity", 'String'>
    readonly count: FieldRef<"MessageActivity", 'Int'>
    readonly timestamp: FieldRef<"MessageActivity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MessageActivity findUnique
   */
  export type MessageActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageActivity
     */
    select?: MessageActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageActivityInclude<ExtArgs> | null
    /**
     * Filter, which MessageActivity to fetch.
     */
    where: MessageActivityWhereUniqueInput
  }

  /**
   * MessageActivity findUniqueOrThrow
   */
  export type MessageActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageActivity
     */
    select?: MessageActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageActivityInclude<ExtArgs> | null
    /**
     * Filter, which MessageActivity to fetch.
     */
    where: MessageActivityWhereUniqueInput
  }

  /**
   * MessageActivity findFirst
   */
  export type MessageActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageActivity
     */
    select?: MessageActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageActivityInclude<ExtArgs> | null
    /**
     * Filter, which MessageActivity to fetch.
     */
    where?: MessageActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageActivities to fetch.
     */
    orderBy?: MessageActivityOrderByWithRelationInput | MessageActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageActivities.
     */
    cursor?: MessageActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageActivities.
     */
    distinct?: MessageActivityScalarFieldEnum | MessageActivityScalarFieldEnum[]
  }

  /**
   * MessageActivity findFirstOrThrow
   */
  export type MessageActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageActivity
     */
    select?: MessageActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageActivityInclude<ExtArgs> | null
    /**
     * Filter, which MessageActivity to fetch.
     */
    where?: MessageActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageActivities to fetch.
     */
    orderBy?: MessageActivityOrderByWithRelationInput | MessageActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageActivities.
     */
    cursor?: MessageActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageActivities.
     */
    distinct?: MessageActivityScalarFieldEnum | MessageActivityScalarFieldEnum[]
  }

  /**
   * MessageActivity findMany
   */
  export type MessageActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageActivity
     */
    select?: MessageActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageActivityInclude<ExtArgs> | null
    /**
     * Filter, which MessageActivities to fetch.
     */
    where?: MessageActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageActivities to fetch.
     */
    orderBy?: MessageActivityOrderByWithRelationInput | MessageActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageActivities.
     */
    cursor?: MessageActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageActivities.
     */
    skip?: number
    distinct?: MessageActivityScalarFieldEnum | MessageActivityScalarFieldEnum[]
  }

  /**
   * MessageActivity create
   */
  export type MessageActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageActivity
     */
    select?: MessageActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a MessageActivity.
     */
    data: XOR<MessageActivityCreateInput, MessageActivityUncheckedCreateInput>
  }

  /**
   * MessageActivity createMany
   */
  export type MessageActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageActivities.
     */
    data: MessageActivityCreateManyInput | MessageActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MessageActivity createManyAndReturn
   */
  export type MessageActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageActivity
     */
    select?: MessageActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MessageActivities.
     */
    data: MessageActivityCreateManyInput | MessageActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageActivity update
   */
  export type MessageActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageActivity
     */
    select?: MessageActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a MessageActivity.
     */
    data: XOR<MessageActivityUpdateInput, MessageActivityUncheckedUpdateInput>
    /**
     * Choose, which MessageActivity to update.
     */
    where: MessageActivityWhereUniqueInput
  }

  /**
   * MessageActivity updateMany
   */
  export type MessageActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageActivities.
     */
    data: XOR<MessageActivityUpdateManyMutationInput, MessageActivityUncheckedUpdateManyInput>
    /**
     * Filter which MessageActivities to update
     */
    where?: MessageActivityWhereInput
  }

  /**
   * MessageActivity upsert
   */
  export type MessageActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageActivity
     */
    select?: MessageActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the MessageActivity to update in case it exists.
     */
    where: MessageActivityWhereUniqueInput
    /**
     * In case the MessageActivity found by the `where` argument doesn't exist, create a new MessageActivity with this data.
     */
    create: XOR<MessageActivityCreateInput, MessageActivityUncheckedCreateInput>
    /**
     * In case the MessageActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageActivityUpdateInput, MessageActivityUncheckedUpdateInput>
  }

  /**
   * MessageActivity delete
   */
  export type MessageActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageActivity
     */
    select?: MessageActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageActivityInclude<ExtArgs> | null
    /**
     * Filter which MessageActivity to delete.
     */
    where: MessageActivityWhereUniqueInput
  }

  /**
   * MessageActivity deleteMany
   */
  export type MessageActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageActivities to delete
     */
    where?: MessageActivityWhereInput
  }

  /**
   * MessageActivity without action
   */
  export type MessageActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageActivity
     */
    select?: MessageActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageActivityInclude<ExtArgs> | null
  }


  /**
   * Model BotStat
   */

  export type AggregateBotStat = {
    _count: BotStatCountAggregateOutputType | null
    _avg: BotStatAvgAggregateOutputType | null
    _sum: BotStatSumAggregateOutputType | null
    _min: BotStatMinAggregateOutputType | null
    _max: BotStatMaxAggregateOutputType | null
  }

  export type BotStatAvgAggregateOutputType = {
    id: number | null
    serverCount: number | null
    userCount: number | null
    shardCount: number | null
  }

  export type BotStatSumAggregateOutputType = {
    id: number | null
    serverCount: number | null
    userCount: number | null
    shardCount: number | null
  }

  export type BotStatMinAggregateOutputType = {
    id: number | null
    serverCount: number | null
    userCount: number | null
    shardCount: number | null
    updatedAt: Date | null
  }

  export type BotStatMaxAggregateOutputType = {
    id: number | null
    serverCount: number | null
    userCount: number | null
    shardCount: number | null
    updatedAt: Date | null
  }

  export type BotStatCountAggregateOutputType = {
    id: number
    serverCount: number
    userCount: number
    shardCount: number
    updatedAt: number
    _all: number
  }


  export type BotStatAvgAggregateInputType = {
    id?: true
    serverCount?: true
    userCount?: true
    shardCount?: true
  }

  export type BotStatSumAggregateInputType = {
    id?: true
    serverCount?: true
    userCount?: true
    shardCount?: true
  }

  export type BotStatMinAggregateInputType = {
    id?: true
    serverCount?: true
    userCount?: true
    shardCount?: true
    updatedAt?: true
  }

  export type BotStatMaxAggregateInputType = {
    id?: true
    serverCount?: true
    userCount?: true
    shardCount?: true
    updatedAt?: true
  }

  export type BotStatCountAggregateInputType = {
    id?: true
    serverCount?: true
    userCount?: true
    shardCount?: true
    updatedAt?: true
    _all?: true
  }

  export type BotStatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BotStat to aggregate.
     */
    where?: BotStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BotStats to fetch.
     */
    orderBy?: BotStatOrderByWithRelationInput | BotStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BotStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BotStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BotStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BotStats
    **/
    _count?: true | BotStatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BotStatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BotStatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BotStatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BotStatMaxAggregateInputType
  }

  export type GetBotStatAggregateType<T extends BotStatAggregateArgs> = {
        [P in keyof T & keyof AggregateBotStat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBotStat[P]>
      : GetScalarType<T[P], AggregateBotStat[P]>
  }




  export type BotStatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BotStatWhereInput
    orderBy?: BotStatOrderByWithAggregationInput | BotStatOrderByWithAggregationInput[]
    by: BotStatScalarFieldEnum[] | BotStatScalarFieldEnum
    having?: BotStatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BotStatCountAggregateInputType | true
    _avg?: BotStatAvgAggregateInputType
    _sum?: BotStatSumAggregateInputType
    _min?: BotStatMinAggregateInputType
    _max?: BotStatMaxAggregateInputType
  }

  export type BotStatGroupByOutputType = {
    id: number
    serverCount: number
    userCount: number
    shardCount: number
    updatedAt: Date
    _count: BotStatCountAggregateOutputType | null
    _avg: BotStatAvgAggregateOutputType | null
    _sum: BotStatSumAggregateOutputType | null
    _min: BotStatMinAggregateOutputType | null
    _max: BotStatMaxAggregateOutputType | null
  }

  type GetBotStatGroupByPayload<T extends BotStatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BotStatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BotStatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BotStatGroupByOutputType[P]>
            : GetScalarType<T[P], BotStatGroupByOutputType[P]>
        }
      >
    >


  export type BotStatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serverCount?: boolean
    userCount?: boolean
    shardCount?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["botStat"]>

  export type BotStatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serverCount?: boolean
    userCount?: boolean
    shardCount?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["botStat"]>

  export type BotStatSelectScalar = {
    id?: boolean
    serverCount?: boolean
    userCount?: boolean
    shardCount?: boolean
    updatedAt?: boolean
  }


  export type $BotStatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BotStat"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      serverCount: number
      userCount: number
      shardCount: number
      updatedAt: Date
    }, ExtArgs["result"]["botStat"]>
    composites: {}
  }

  type BotStatGetPayload<S extends boolean | null | undefined | BotStatDefaultArgs> = $Result.GetResult<Prisma.$BotStatPayload, S>

  type BotStatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BotStatFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BotStatCountAggregateInputType | true
    }

  export interface BotStatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BotStat'], meta: { name: 'BotStat' } }
    /**
     * Find zero or one BotStat that matches the filter.
     * @param {BotStatFindUniqueArgs} args - Arguments to find a BotStat
     * @example
     * // Get one BotStat
     * const botStat = await prisma.botStat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BotStatFindUniqueArgs>(args: SelectSubset<T, BotStatFindUniqueArgs<ExtArgs>>): Prisma__BotStatClient<$Result.GetResult<Prisma.$BotStatPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BotStat that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BotStatFindUniqueOrThrowArgs} args - Arguments to find a BotStat
     * @example
     * // Get one BotStat
     * const botStat = await prisma.botStat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BotStatFindUniqueOrThrowArgs>(args: SelectSubset<T, BotStatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BotStatClient<$Result.GetResult<Prisma.$BotStatPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BotStat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotStatFindFirstArgs} args - Arguments to find a BotStat
     * @example
     * // Get one BotStat
     * const botStat = await prisma.botStat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BotStatFindFirstArgs>(args?: SelectSubset<T, BotStatFindFirstArgs<ExtArgs>>): Prisma__BotStatClient<$Result.GetResult<Prisma.$BotStatPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BotStat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotStatFindFirstOrThrowArgs} args - Arguments to find a BotStat
     * @example
     * // Get one BotStat
     * const botStat = await prisma.botStat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BotStatFindFirstOrThrowArgs>(args?: SelectSubset<T, BotStatFindFirstOrThrowArgs<ExtArgs>>): Prisma__BotStatClient<$Result.GetResult<Prisma.$BotStatPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BotStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotStatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BotStats
     * const botStats = await prisma.botStat.findMany()
     * 
     * // Get first 10 BotStats
     * const botStats = await prisma.botStat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const botStatWithIdOnly = await prisma.botStat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BotStatFindManyArgs>(args?: SelectSubset<T, BotStatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BotStatPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BotStat.
     * @param {BotStatCreateArgs} args - Arguments to create a BotStat.
     * @example
     * // Create one BotStat
     * const BotStat = await prisma.botStat.create({
     *   data: {
     *     // ... data to create a BotStat
     *   }
     * })
     * 
     */
    create<T extends BotStatCreateArgs>(args: SelectSubset<T, BotStatCreateArgs<ExtArgs>>): Prisma__BotStatClient<$Result.GetResult<Prisma.$BotStatPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BotStats.
     * @param {BotStatCreateManyArgs} args - Arguments to create many BotStats.
     * @example
     * // Create many BotStats
     * const botStat = await prisma.botStat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BotStatCreateManyArgs>(args?: SelectSubset<T, BotStatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BotStats and returns the data saved in the database.
     * @param {BotStatCreateManyAndReturnArgs} args - Arguments to create many BotStats.
     * @example
     * // Create many BotStats
     * const botStat = await prisma.botStat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BotStats and only return the `id`
     * const botStatWithIdOnly = await prisma.botStat.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BotStatCreateManyAndReturnArgs>(args?: SelectSubset<T, BotStatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BotStatPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BotStat.
     * @param {BotStatDeleteArgs} args - Arguments to delete one BotStat.
     * @example
     * // Delete one BotStat
     * const BotStat = await prisma.botStat.delete({
     *   where: {
     *     // ... filter to delete one BotStat
     *   }
     * })
     * 
     */
    delete<T extends BotStatDeleteArgs>(args: SelectSubset<T, BotStatDeleteArgs<ExtArgs>>): Prisma__BotStatClient<$Result.GetResult<Prisma.$BotStatPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BotStat.
     * @param {BotStatUpdateArgs} args - Arguments to update one BotStat.
     * @example
     * // Update one BotStat
     * const botStat = await prisma.botStat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BotStatUpdateArgs>(args: SelectSubset<T, BotStatUpdateArgs<ExtArgs>>): Prisma__BotStatClient<$Result.GetResult<Prisma.$BotStatPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BotStats.
     * @param {BotStatDeleteManyArgs} args - Arguments to filter BotStats to delete.
     * @example
     * // Delete a few BotStats
     * const { count } = await prisma.botStat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BotStatDeleteManyArgs>(args?: SelectSubset<T, BotStatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BotStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotStatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BotStats
     * const botStat = await prisma.botStat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BotStatUpdateManyArgs>(args: SelectSubset<T, BotStatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BotStat.
     * @param {BotStatUpsertArgs} args - Arguments to update or create a BotStat.
     * @example
     * // Update or create a BotStat
     * const botStat = await prisma.botStat.upsert({
     *   create: {
     *     // ... data to create a BotStat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BotStat we want to update
     *   }
     * })
     */
    upsert<T extends BotStatUpsertArgs>(args: SelectSubset<T, BotStatUpsertArgs<ExtArgs>>): Prisma__BotStatClient<$Result.GetResult<Prisma.$BotStatPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BotStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotStatCountArgs} args - Arguments to filter BotStats to count.
     * @example
     * // Count the number of BotStats
     * const count = await prisma.botStat.count({
     *   where: {
     *     // ... the filter for the BotStats we want to count
     *   }
     * })
    **/
    count<T extends BotStatCountArgs>(
      args?: Subset<T, BotStatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BotStatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BotStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotStatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BotStatAggregateArgs>(args: Subset<T, BotStatAggregateArgs>): Prisma.PrismaPromise<GetBotStatAggregateType<T>>

    /**
     * Group by BotStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotStatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BotStatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BotStatGroupByArgs['orderBy'] }
        : { orderBy?: BotStatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BotStatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBotStatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BotStat model
   */
  readonly fields: BotStatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BotStat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BotStatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BotStat model
   */ 
  interface BotStatFieldRefs {
    readonly id: FieldRef<"BotStat", 'Int'>
    readonly serverCount: FieldRef<"BotStat", 'Int'>
    readonly userCount: FieldRef<"BotStat", 'Int'>
    readonly shardCount: FieldRef<"BotStat", 'Int'>
    readonly updatedAt: FieldRef<"BotStat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BotStat findUnique
   */
  export type BotStatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotStat
     */
    select?: BotStatSelect<ExtArgs> | null
    /**
     * Filter, which BotStat to fetch.
     */
    where: BotStatWhereUniqueInput
  }

  /**
   * BotStat findUniqueOrThrow
   */
  export type BotStatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotStat
     */
    select?: BotStatSelect<ExtArgs> | null
    /**
     * Filter, which BotStat to fetch.
     */
    where: BotStatWhereUniqueInput
  }

  /**
   * BotStat findFirst
   */
  export type BotStatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotStat
     */
    select?: BotStatSelect<ExtArgs> | null
    /**
     * Filter, which BotStat to fetch.
     */
    where?: BotStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BotStats to fetch.
     */
    orderBy?: BotStatOrderByWithRelationInput | BotStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BotStats.
     */
    cursor?: BotStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BotStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BotStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BotStats.
     */
    distinct?: BotStatScalarFieldEnum | BotStatScalarFieldEnum[]
  }

  /**
   * BotStat findFirstOrThrow
   */
  export type BotStatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotStat
     */
    select?: BotStatSelect<ExtArgs> | null
    /**
     * Filter, which BotStat to fetch.
     */
    where?: BotStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BotStats to fetch.
     */
    orderBy?: BotStatOrderByWithRelationInput | BotStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BotStats.
     */
    cursor?: BotStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BotStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BotStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BotStats.
     */
    distinct?: BotStatScalarFieldEnum | BotStatScalarFieldEnum[]
  }

  /**
   * BotStat findMany
   */
  export type BotStatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotStat
     */
    select?: BotStatSelect<ExtArgs> | null
    /**
     * Filter, which BotStats to fetch.
     */
    where?: BotStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BotStats to fetch.
     */
    orderBy?: BotStatOrderByWithRelationInput | BotStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BotStats.
     */
    cursor?: BotStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BotStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BotStats.
     */
    skip?: number
    distinct?: BotStatScalarFieldEnum | BotStatScalarFieldEnum[]
  }

  /**
   * BotStat create
   */
  export type BotStatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotStat
     */
    select?: BotStatSelect<ExtArgs> | null
    /**
     * The data needed to create a BotStat.
     */
    data: XOR<BotStatCreateInput, BotStatUncheckedCreateInput>
  }

  /**
   * BotStat createMany
   */
  export type BotStatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BotStats.
     */
    data: BotStatCreateManyInput | BotStatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BotStat createManyAndReturn
   */
  export type BotStatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotStat
     */
    select?: BotStatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BotStats.
     */
    data: BotStatCreateManyInput | BotStatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BotStat update
   */
  export type BotStatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotStat
     */
    select?: BotStatSelect<ExtArgs> | null
    /**
     * The data needed to update a BotStat.
     */
    data: XOR<BotStatUpdateInput, BotStatUncheckedUpdateInput>
    /**
     * Choose, which BotStat to update.
     */
    where: BotStatWhereUniqueInput
  }

  /**
   * BotStat updateMany
   */
  export type BotStatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BotStats.
     */
    data: XOR<BotStatUpdateManyMutationInput, BotStatUncheckedUpdateManyInput>
    /**
     * Filter which BotStats to update
     */
    where?: BotStatWhereInput
  }

  /**
   * BotStat upsert
   */
  export type BotStatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotStat
     */
    select?: BotStatSelect<ExtArgs> | null
    /**
     * The filter to search for the BotStat to update in case it exists.
     */
    where: BotStatWhereUniqueInput
    /**
     * In case the BotStat found by the `where` argument doesn't exist, create a new BotStat with this data.
     */
    create: XOR<BotStatCreateInput, BotStatUncheckedCreateInput>
    /**
     * In case the BotStat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BotStatUpdateInput, BotStatUncheckedUpdateInput>
  }

  /**
   * BotStat delete
   */
  export type BotStatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotStat
     */
    select?: BotStatSelect<ExtArgs> | null
    /**
     * Filter which BotStat to delete.
     */
    where: BotStatWhereUniqueInput
  }

  /**
   * BotStat deleteMany
   */
  export type BotStatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BotStats to delete
     */
    where?: BotStatWhereInput
  }

  /**
   * BotStat without action
   */
  export type BotStatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotStat
     */
    select?: BotStatSelect<ExtArgs> | null
  }


  /**
   * Model BotStatHistory
   */

  export type AggregateBotStatHistory = {
    _count: BotStatHistoryCountAggregateOutputType | null
    _avg: BotStatHistoryAvgAggregateOutputType | null
    _sum: BotStatHistorySumAggregateOutputType | null
    _min: BotStatHistoryMinAggregateOutputType | null
    _max: BotStatHistoryMaxAggregateOutputType | null
  }

  export type BotStatHistoryAvgAggregateOutputType = {
    id: number | null
    serverCount: number | null
    userCount: number | null
    shardCount: number | null
  }

  export type BotStatHistorySumAggregateOutputType = {
    id: number | null
    serverCount: number | null
    userCount: number | null
    shardCount: number | null
  }

  export type BotStatHistoryMinAggregateOutputType = {
    id: number | null
    serverCount: number | null
    userCount: number | null
    shardCount: number | null
    timestamp: Date | null
  }

  export type BotStatHistoryMaxAggregateOutputType = {
    id: number | null
    serverCount: number | null
    userCount: number | null
    shardCount: number | null
    timestamp: Date | null
  }

  export type BotStatHistoryCountAggregateOutputType = {
    id: number
    serverCount: number
    userCount: number
    shardCount: number
    timestamp: number
    _all: number
  }


  export type BotStatHistoryAvgAggregateInputType = {
    id?: true
    serverCount?: true
    userCount?: true
    shardCount?: true
  }

  export type BotStatHistorySumAggregateInputType = {
    id?: true
    serverCount?: true
    userCount?: true
    shardCount?: true
  }

  export type BotStatHistoryMinAggregateInputType = {
    id?: true
    serverCount?: true
    userCount?: true
    shardCount?: true
    timestamp?: true
  }

  export type BotStatHistoryMaxAggregateInputType = {
    id?: true
    serverCount?: true
    userCount?: true
    shardCount?: true
    timestamp?: true
  }

  export type BotStatHistoryCountAggregateInputType = {
    id?: true
    serverCount?: true
    userCount?: true
    shardCount?: true
    timestamp?: true
    _all?: true
  }

  export type BotStatHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BotStatHistory to aggregate.
     */
    where?: BotStatHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BotStatHistories to fetch.
     */
    orderBy?: BotStatHistoryOrderByWithRelationInput | BotStatHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BotStatHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BotStatHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BotStatHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BotStatHistories
    **/
    _count?: true | BotStatHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BotStatHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BotStatHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BotStatHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BotStatHistoryMaxAggregateInputType
  }

  export type GetBotStatHistoryAggregateType<T extends BotStatHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateBotStatHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBotStatHistory[P]>
      : GetScalarType<T[P], AggregateBotStatHistory[P]>
  }




  export type BotStatHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BotStatHistoryWhereInput
    orderBy?: BotStatHistoryOrderByWithAggregationInput | BotStatHistoryOrderByWithAggregationInput[]
    by: BotStatHistoryScalarFieldEnum[] | BotStatHistoryScalarFieldEnum
    having?: BotStatHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BotStatHistoryCountAggregateInputType | true
    _avg?: BotStatHistoryAvgAggregateInputType
    _sum?: BotStatHistorySumAggregateInputType
    _min?: BotStatHistoryMinAggregateInputType
    _max?: BotStatHistoryMaxAggregateInputType
  }

  export type BotStatHistoryGroupByOutputType = {
    id: number
    serverCount: number
    userCount: number
    shardCount: number
    timestamp: Date
    _count: BotStatHistoryCountAggregateOutputType | null
    _avg: BotStatHistoryAvgAggregateOutputType | null
    _sum: BotStatHistorySumAggregateOutputType | null
    _min: BotStatHistoryMinAggregateOutputType | null
    _max: BotStatHistoryMaxAggregateOutputType | null
  }

  type GetBotStatHistoryGroupByPayload<T extends BotStatHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BotStatHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BotStatHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BotStatHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], BotStatHistoryGroupByOutputType[P]>
        }
      >
    >


  export type BotStatHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serverCount?: boolean
    userCount?: boolean
    shardCount?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["botStatHistory"]>

  export type BotStatHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serverCount?: boolean
    userCount?: boolean
    shardCount?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["botStatHistory"]>

  export type BotStatHistorySelectScalar = {
    id?: boolean
    serverCount?: boolean
    userCount?: boolean
    shardCount?: boolean
    timestamp?: boolean
  }


  export type $BotStatHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BotStatHistory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      serverCount: number
      userCount: number
      shardCount: number
      timestamp: Date
    }, ExtArgs["result"]["botStatHistory"]>
    composites: {}
  }

  type BotStatHistoryGetPayload<S extends boolean | null | undefined | BotStatHistoryDefaultArgs> = $Result.GetResult<Prisma.$BotStatHistoryPayload, S>

  type BotStatHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BotStatHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BotStatHistoryCountAggregateInputType | true
    }

  export interface BotStatHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BotStatHistory'], meta: { name: 'BotStatHistory' } }
    /**
     * Find zero or one BotStatHistory that matches the filter.
     * @param {BotStatHistoryFindUniqueArgs} args - Arguments to find a BotStatHistory
     * @example
     * // Get one BotStatHistory
     * const botStatHistory = await prisma.botStatHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BotStatHistoryFindUniqueArgs>(args: SelectSubset<T, BotStatHistoryFindUniqueArgs<ExtArgs>>): Prisma__BotStatHistoryClient<$Result.GetResult<Prisma.$BotStatHistoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BotStatHistory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BotStatHistoryFindUniqueOrThrowArgs} args - Arguments to find a BotStatHistory
     * @example
     * // Get one BotStatHistory
     * const botStatHistory = await prisma.botStatHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BotStatHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, BotStatHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BotStatHistoryClient<$Result.GetResult<Prisma.$BotStatHistoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BotStatHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotStatHistoryFindFirstArgs} args - Arguments to find a BotStatHistory
     * @example
     * // Get one BotStatHistory
     * const botStatHistory = await prisma.botStatHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BotStatHistoryFindFirstArgs>(args?: SelectSubset<T, BotStatHistoryFindFirstArgs<ExtArgs>>): Prisma__BotStatHistoryClient<$Result.GetResult<Prisma.$BotStatHistoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BotStatHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotStatHistoryFindFirstOrThrowArgs} args - Arguments to find a BotStatHistory
     * @example
     * // Get one BotStatHistory
     * const botStatHistory = await prisma.botStatHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BotStatHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, BotStatHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__BotStatHistoryClient<$Result.GetResult<Prisma.$BotStatHistoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BotStatHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotStatHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BotStatHistories
     * const botStatHistories = await prisma.botStatHistory.findMany()
     * 
     * // Get first 10 BotStatHistories
     * const botStatHistories = await prisma.botStatHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const botStatHistoryWithIdOnly = await prisma.botStatHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BotStatHistoryFindManyArgs>(args?: SelectSubset<T, BotStatHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BotStatHistoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BotStatHistory.
     * @param {BotStatHistoryCreateArgs} args - Arguments to create a BotStatHistory.
     * @example
     * // Create one BotStatHistory
     * const BotStatHistory = await prisma.botStatHistory.create({
     *   data: {
     *     // ... data to create a BotStatHistory
     *   }
     * })
     * 
     */
    create<T extends BotStatHistoryCreateArgs>(args: SelectSubset<T, BotStatHistoryCreateArgs<ExtArgs>>): Prisma__BotStatHistoryClient<$Result.GetResult<Prisma.$BotStatHistoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BotStatHistories.
     * @param {BotStatHistoryCreateManyArgs} args - Arguments to create many BotStatHistories.
     * @example
     * // Create many BotStatHistories
     * const botStatHistory = await prisma.botStatHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BotStatHistoryCreateManyArgs>(args?: SelectSubset<T, BotStatHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BotStatHistories and returns the data saved in the database.
     * @param {BotStatHistoryCreateManyAndReturnArgs} args - Arguments to create many BotStatHistories.
     * @example
     * // Create many BotStatHistories
     * const botStatHistory = await prisma.botStatHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BotStatHistories and only return the `id`
     * const botStatHistoryWithIdOnly = await prisma.botStatHistory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BotStatHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, BotStatHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BotStatHistoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BotStatHistory.
     * @param {BotStatHistoryDeleteArgs} args - Arguments to delete one BotStatHistory.
     * @example
     * // Delete one BotStatHistory
     * const BotStatHistory = await prisma.botStatHistory.delete({
     *   where: {
     *     // ... filter to delete one BotStatHistory
     *   }
     * })
     * 
     */
    delete<T extends BotStatHistoryDeleteArgs>(args: SelectSubset<T, BotStatHistoryDeleteArgs<ExtArgs>>): Prisma__BotStatHistoryClient<$Result.GetResult<Prisma.$BotStatHistoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BotStatHistory.
     * @param {BotStatHistoryUpdateArgs} args - Arguments to update one BotStatHistory.
     * @example
     * // Update one BotStatHistory
     * const botStatHistory = await prisma.botStatHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BotStatHistoryUpdateArgs>(args: SelectSubset<T, BotStatHistoryUpdateArgs<ExtArgs>>): Prisma__BotStatHistoryClient<$Result.GetResult<Prisma.$BotStatHistoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BotStatHistories.
     * @param {BotStatHistoryDeleteManyArgs} args - Arguments to filter BotStatHistories to delete.
     * @example
     * // Delete a few BotStatHistories
     * const { count } = await prisma.botStatHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BotStatHistoryDeleteManyArgs>(args?: SelectSubset<T, BotStatHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BotStatHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotStatHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BotStatHistories
     * const botStatHistory = await prisma.botStatHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BotStatHistoryUpdateManyArgs>(args: SelectSubset<T, BotStatHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BotStatHistory.
     * @param {BotStatHistoryUpsertArgs} args - Arguments to update or create a BotStatHistory.
     * @example
     * // Update or create a BotStatHistory
     * const botStatHistory = await prisma.botStatHistory.upsert({
     *   create: {
     *     // ... data to create a BotStatHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BotStatHistory we want to update
     *   }
     * })
     */
    upsert<T extends BotStatHistoryUpsertArgs>(args: SelectSubset<T, BotStatHistoryUpsertArgs<ExtArgs>>): Prisma__BotStatHistoryClient<$Result.GetResult<Prisma.$BotStatHistoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BotStatHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotStatHistoryCountArgs} args - Arguments to filter BotStatHistories to count.
     * @example
     * // Count the number of BotStatHistories
     * const count = await prisma.botStatHistory.count({
     *   where: {
     *     // ... the filter for the BotStatHistories we want to count
     *   }
     * })
    **/
    count<T extends BotStatHistoryCountArgs>(
      args?: Subset<T, BotStatHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BotStatHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BotStatHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotStatHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BotStatHistoryAggregateArgs>(args: Subset<T, BotStatHistoryAggregateArgs>): Prisma.PrismaPromise<GetBotStatHistoryAggregateType<T>>

    /**
     * Group by BotStatHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotStatHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BotStatHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BotStatHistoryGroupByArgs['orderBy'] }
        : { orderBy?: BotStatHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BotStatHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBotStatHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BotStatHistory model
   */
  readonly fields: BotStatHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BotStatHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BotStatHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BotStatHistory model
   */ 
  interface BotStatHistoryFieldRefs {
    readonly id: FieldRef<"BotStatHistory", 'Int'>
    readonly serverCount: FieldRef<"BotStatHistory", 'Int'>
    readonly userCount: FieldRef<"BotStatHistory", 'Int'>
    readonly shardCount: FieldRef<"BotStatHistory", 'Int'>
    readonly timestamp: FieldRef<"BotStatHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BotStatHistory findUnique
   */
  export type BotStatHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotStatHistory
     */
    select?: BotStatHistorySelect<ExtArgs> | null
    /**
     * Filter, which BotStatHistory to fetch.
     */
    where: BotStatHistoryWhereUniqueInput
  }

  /**
   * BotStatHistory findUniqueOrThrow
   */
  export type BotStatHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotStatHistory
     */
    select?: BotStatHistorySelect<ExtArgs> | null
    /**
     * Filter, which BotStatHistory to fetch.
     */
    where: BotStatHistoryWhereUniqueInput
  }

  /**
   * BotStatHistory findFirst
   */
  export type BotStatHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotStatHistory
     */
    select?: BotStatHistorySelect<ExtArgs> | null
    /**
     * Filter, which BotStatHistory to fetch.
     */
    where?: BotStatHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BotStatHistories to fetch.
     */
    orderBy?: BotStatHistoryOrderByWithRelationInput | BotStatHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BotStatHistories.
     */
    cursor?: BotStatHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BotStatHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BotStatHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BotStatHistories.
     */
    distinct?: BotStatHistoryScalarFieldEnum | BotStatHistoryScalarFieldEnum[]
  }

  /**
   * BotStatHistory findFirstOrThrow
   */
  export type BotStatHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotStatHistory
     */
    select?: BotStatHistorySelect<ExtArgs> | null
    /**
     * Filter, which BotStatHistory to fetch.
     */
    where?: BotStatHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BotStatHistories to fetch.
     */
    orderBy?: BotStatHistoryOrderByWithRelationInput | BotStatHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BotStatHistories.
     */
    cursor?: BotStatHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BotStatHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BotStatHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BotStatHistories.
     */
    distinct?: BotStatHistoryScalarFieldEnum | BotStatHistoryScalarFieldEnum[]
  }

  /**
   * BotStatHistory findMany
   */
  export type BotStatHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotStatHistory
     */
    select?: BotStatHistorySelect<ExtArgs> | null
    /**
     * Filter, which BotStatHistories to fetch.
     */
    where?: BotStatHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BotStatHistories to fetch.
     */
    orderBy?: BotStatHistoryOrderByWithRelationInput | BotStatHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BotStatHistories.
     */
    cursor?: BotStatHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BotStatHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BotStatHistories.
     */
    skip?: number
    distinct?: BotStatHistoryScalarFieldEnum | BotStatHistoryScalarFieldEnum[]
  }

  /**
   * BotStatHistory create
   */
  export type BotStatHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotStatHistory
     */
    select?: BotStatHistorySelect<ExtArgs> | null
    /**
     * The data needed to create a BotStatHistory.
     */
    data: XOR<BotStatHistoryCreateInput, BotStatHistoryUncheckedCreateInput>
  }

  /**
   * BotStatHistory createMany
   */
  export type BotStatHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BotStatHistories.
     */
    data: BotStatHistoryCreateManyInput | BotStatHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BotStatHistory createManyAndReturn
   */
  export type BotStatHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotStatHistory
     */
    select?: BotStatHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BotStatHistories.
     */
    data: BotStatHistoryCreateManyInput | BotStatHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BotStatHistory update
   */
  export type BotStatHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotStatHistory
     */
    select?: BotStatHistorySelect<ExtArgs> | null
    /**
     * The data needed to update a BotStatHistory.
     */
    data: XOR<BotStatHistoryUpdateInput, BotStatHistoryUncheckedUpdateInput>
    /**
     * Choose, which BotStatHistory to update.
     */
    where: BotStatHistoryWhereUniqueInput
  }

  /**
   * BotStatHistory updateMany
   */
  export type BotStatHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BotStatHistories.
     */
    data: XOR<BotStatHistoryUpdateManyMutationInput, BotStatHistoryUncheckedUpdateManyInput>
    /**
     * Filter which BotStatHistories to update
     */
    where?: BotStatHistoryWhereInput
  }

  /**
   * BotStatHistory upsert
   */
  export type BotStatHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotStatHistory
     */
    select?: BotStatHistorySelect<ExtArgs> | null
    /**
     * The filter to search for the BotStatHistory to update in case it exists.
     */
    where: BotStatHistoryWhereUniqueInput
    /**
     * In case the BotStatHistory found by the `where` argument doesn't exist, create a new BotStatHistory with this data.
     */
    create: XOR<BotStatHistoryCreateInput, BotStatHistoryUncheckedCreateInput>
    /**
     * In case the BotStatHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BotStatHistoryUpdateInput, BotStatHistoryUncheckedUpdateInput>
  }

  /**
   * BotStatHistory delete
   */
  export type BotStatHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotStatHistory
     */
    select?: BotStatHistorySelect<ExtArgs> | null
    /**
     * Filter which BotStatHistory to delete.
     */
    where: BotStatHistoryWhereUniqueInput
  }

  /**
   * BotStatHistory deleteMany
   */
  export type BotStatHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BotStatHistories to delete
     */
    where?: BotStatHistoryWhereInput
  }

  /**
   * BotStatHistory without action
   */
  export type BotStatHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotStatHistory
     */
    select?: BotStatHistorySelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GuildScalarFieldEnum: {
    id: 'id',
    name: 'name',
    memberCount: 'memberCount',
    joinedAt: 'joinedAt',
    updatedAt: 'updatedAt'
  };

  export type GuildScalarFieldEnum = (typeof GuildScalarFieldEnum)[keyof typeof GuildScalarFieldEnum]


  export const GuildSettingScalarFieldEnum: {
    guildId: 'guildId',
    antiRaidEnabled: 'antiRaidEnabled',
    antiNukeEnabled: 'antiNukeEnabled',
    antiSpamEnabled: 'antiSpamEnabled',
    antiMassMention: 'antiMassMention',
    antiWebhookAbuse: 'antiWebhookAbuse',
    scamDetection: 'scamDetection',
    autoLockdown: 'autoLockdown',
    verificationSystem: 'verificationSystem',
    aiModerationEnabled: 'aiModerationEnabled',
    aiLogChannelId: 'aiLogChannelId',
    aiActionThreshold: 'aiActionThreshold',
    modLogChannelId: 'modLogChannelId',
    securityLogChannelId: 'securityLogChannelId'
  };

  export type GuildSettingScalarFieldEnum = (typeof GuildSettingScalarFieldEnum)[keyof typeof GuildSettingScalarFieldEnum]


  export const ModerationCaseScalarFieldEnum: {
    id: 'id',
    guildId: 'guildId',
    userId: 'userId',
    moderatorId: 'moderatorId',
    type: 'type',
    reason: 'reason',
    createdAt: 'createdAt'
  };

  export type ModerationCaseScalarFieldEnum = (typeof ModerationCaseScalarFieldEnum)[keyof typeof ModerationCaseScalarFieldEnum]


  export const WarningScalarFieldEnum: {
    id: 'id',
    guildId: 'guildId',
    userId: 'userId',
    reason: 'reason',
    createdAt: 'createdAt'
  };

  export type WarningScalarFieldEnum = (typeof WarningScalarFieldEnum)[keyof typeof WarningScalarFieldEnum]


  export const SecurityEventScalarFieldEnum: {
    id: 'id',
    guildId: 'guildId',
    type: 'type',
    severity: 'severity',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type SecurityEventScalarFieldEnum = (typeof SecurityEventScalarFieldEnum)[keyof typeof SecurityEventScalarFieldEnum]


  export const RaidEventScalarFieldEnum: {
    id: 'id',
    guildId: 'guildId',
    status: 'status',
    startedAt: 'startedAt',
    endedAt: 'endedAt'
  };

  export type RaidEventScalarFieldEnum = (typeof RaidEventScalarFieldEnum)[keyof typeof RaidEventScalarFieldEnum]


  export const MemberSnapshotScalarFieldEnum: {
    id: 'id',
    guildId: 'guildId',
    count: 'count',
    timestamp: 'timestamp'
  };

  export type MemberSnapshotScalarFieldEnum = (typeof MemberSnapshotScalarFieldEnum)[keyof typeof MemberSnapshotScalarFieldEnum]


  export const MessageActivityScalarFieldEnum: {
    id: 'id',
    guildId: 'guildId',
    channelId: 'channelId',
    count: 'count',
    timestamp: 'timestamp'
  };

  export type MessageActivityScalarFieldEnum = (typeof MessageActivityScalarFieldEnum)[keyof typeof MessageActivityScalarFieldEnum]


  export const BotStatScalarFieldEnum: {
    id: 'id',
    serverCount: 'serverCount',
    userCount: 'userCount',
    shardCount: 'shardCount',
    updatedAt: 'updatedAt'
  };

  export type BotStatScalarFieldEnum = (typeof BotStatScalarFieldEnum)[keyof typeof BotStatScalarFieldEnum]


  export const BotStatHistoryScalarFieldEnum: {
    id: 'id',
    serverCount: 'serverCount',
    userCount: 'userCount',
    shardCount: 'shardCount',
    timestamp: 'timestamp'
  };

  export type BotStatHistoryScalarFieldEnum = (typeof BotStatHistoryScalarFieldEnum)[keyof typeof BotStatHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    cases?: ModerationCaseListRelationFilter
    moderated?: ModerationCaseListRelationFilter
    warnings?: WarningListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cases?: ModerationCaseOrderByRelationAggregateInput
    moderated?: ModerationCaseOrderByRelationAggregateInput
    warnings?: WarningOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    cases?: ModerationCaseListRelationFilter
    moderated?: ModerationCaseListRelationFilter
    warnings?: WarningListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type GuildWhereInput = {
    AND?: GuildWhereInput | GuildWhereInput[]
    OR?: GuildWhereInput[]
    NOT?: GuildWhereInput | GuildWhereInput[]
    id?: StringFilter<"Guild"> | string
    name?: StringFilter<"Guild"> | string
    memberCount?: IntFilter<"Guild"> | number
    joinedAt?: DateTimeFilter<"Guild"> | Date | string
    updatedAt?: DateTimeFilter<"Guild"> | Date | string
    settings?: XOR<GuildSettingNullableRelationFilter, GuildSettingWhereInput> | null
    cases?: ModerationCaseListRelationFilter
    warnings?: WarningListRelationFilter
    securityEvents?: SecurityEventListRelationFilter
    raidEvents?: RaidEventListRelationFilter
    memberSnapshots?: MemberSnapshotListRelationFilter
    messageActivity?: MessageActivityListRelationFilter
  }

  export type GuildOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    memberCount?: SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
    settings?: GuildSettingOrderByWithRelationInput
    cases?: ModerationCaseOrderByRelationAggregateInput
    warnings?: WarningOrderByRelationAggregateInput
    securityEvents?: SecurityEventOrderByRelationAggregateInput
    raidEvents?: RaidEventOrderByRelationAggregateInput
    memberSnapshots?: MemberSnapshotOrderByRelationAggregateInput
    messageActivity?: MessageActivityOrderByRelationAggregateInput
  }

  export type GuildWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GuildWhereInput | GuildWhereInput[]
    OR?: GuildWhereInput[]
    NOT?: GuildWhereInput | GuildWhereInput[]
    name?: StringFilter<"Guild"> | string
    memberCount?: IntFilter<"Guild"> | number
    joinedAt?: DateTimeFilter<"Guild"> | Date | string
    updatedAt?: DateTimeFilter<"Guild"> | Date | string
    settings?: XOR<GuildSettingNullableRelationFilter, GuildSettingWhereInput> | null
    cases?: ModerationCaseListRelationFilter
    warnings?: WarningListRelationFilter
    securityEvents?: SecurityEventListRelationFilter
    raidEvents?: RaidEventListRelationFilter
    memberSnapshots?: MemberSnapshotListRelationFilter
    messageActivity?: MessageActivityListRelationFilter
  }, "id">

  export type GuildOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    memberCount?: SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GuildCountOrderByAggregateInput
    _avg?: GuildAvgOrderByAggregateInput
    _max?: GuildMaxOrderByAggregateInput
    _min?: GuildMinOrderByAggregateInput
    _sum?: GuildSumOrderByAggregateInput
  }

  export type GuildScalarWhereWithAggregatesInput = {
    AND?: GuildScalarWhereWithAggregatesInput | GuildScalarWhereWithAggregatesInput[]
    OR?: GuildScalarWhereWithAggregatesInput[]
    NOT?: GuildScalarWhereWithAggregatesInput | GuildScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Guild"> | string
    name?: StringWithAggregatesFilter<"Guild"> | string
    memberCount?: IntWithAggregatesFilter<"Guild"> | number
    joinedAt?: DateTimeWithAggregatesFilter<"Guild"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Guild"> | Date | string
  }

  export type GuildSettingWhereInput = {
    AND?: GuildSettingWhereInput | GuildSettingWhereInput[]
    OR?: GuildSettingWhereInput[]
    NOT?: GuildSettingWhereInput | GuildSettingWhereInput[]
    guildId?: StringFilter<"GuildSetting"> | string
    antiRaidEnabled?: BoolFilter<"GuildSetting"> | boolean
    antiNukeEnabled?: BoolFilter<"GuildSetting"> | boolean
    antiSpamEnabled?: BoolFilter<"GuildSetting"> | boolean
    antiMassMention?: BoolFilter<"GuildSetting"> | boolean
    antiWebhookAbuse?: BoolFilter<"GuildSetting"> | boolean
    scamDetection?: BoolFilter<"GuildSetting"> | boolean
    autoLockdown?: BoolFilter<"GuildSetting"> | boolean
    verificationSystem?: BoolFilter<"GuildSetting"> | boolean
    aiModerationEnabled?: BoolFilter<"GuildSetting"> | boolean
    aiLogChannelId?: StringNullableFilter<"GuildSetting"> | string | null
    aiActionThreshold?: IntFilter<"GuildSetting"> | number
    modLogChannelId?: StringNullableFilter<"GuildSetting"> | string | null
    securityLogChannelId?: StringNullableFilter<"GuildSetting"> | string | null
    guild?: XOR<GuildRelationFilter, GuildWhereInput>
  }

  export type GuildSettingOrderByWithRelationInput = {
    guildId?: SortOrder
    antiRaidEnabled?: SortOrder
    antiNukeEnabled?: SortOrder
    antiSpamEnabled?: SortOrder
    antiMassMention?: SortOrder
    antiWebhookAbuse?: SortOrder
    scamDetection?: SortOrder
    autoLockdown?: SortOrder
    verificationSystem?: SortOrder
    aiModerationEnabled?: SortOrder
    aiLogChannelId?: SortOrderInput | SortOrder
    aiActionThreshold?: SortOrder
    modLogChannelId?: SortOrderInput | SortOrder
    securityLogChannelId?: SortOrderInput | SortOrder
    guild?: GuildOrderByWithRelationInput
  }

  export type GuildSettingWhereUniqueInput = Prisma.AtLeast<{
    guildId?: string
    AND?: GuildSettingWhereInput | GuildSettingWhereInput[]
    OR?: GuildSettingWhereInput[]
    NOT?: GuildSettingWhereInput | GuildSettingWhereInput[]
    antiRaidEnabled?: BoolFilter<"GuildSetting"> | boolean
    antiNukeEnabled?: BoolFilter<"GuildSetting"> | boolean
    antiSpamEnabled?: BoolFilter<"GuildSetting"> | boolean
    antiMassMention?: BoolFilter<"GuildSetting"> | boolean
    antiWebhookAbuse?: BoolFilter<"GuildSetting"> | boolean
    scamDetection?: BoolFilter<"GuildSetting"> | boolean
    autoLockdown?: BoolFilter<"GuildSetting"> | boolean
    verificationSystem?: BoolFilter<"GuildSetting"> | boolean
    aiModerationEnabled?: BoolFilter<"GuildSetting"> | boolean
    aiLogChannelId?: StringNullableFilter<"GuildSetting"> | string | null
    aiActionThreshold?: IntFilter<"GuildSetting"> | number
    modLogChannelId?: StringNullableFilter<"GuildSetting"> | string | null
    securityLogChannelId?: StringNullableFilter<"GuildSetting"> | string | null
    guild?: XOR<GuildRelationFilter, GuildWhereInput>
  }, "guildId">

  export type GuildSettingOrderByWithAggregationInput = {
    guildId?: SortOrder
    antiRaidEnabled?: SortOrder
    antiNukeEnabled?: SortOrder
    antiSpamEnabled?: SortOrder
    antiMassMention?: SortOrder
    antiWebhookAbuse?: SortOrder
    scamDetection?: SortOrder
    autoLockdown?: SortOrder
    verificationSystem?: SortOrder
    aiModerationEnabled?: SortOrder
    aiLogChannelId?: SortOrderInput | SortOrder
    aiActionThreshold?: SortOrder
    modLogChannelId?: SortOrderInput | SortOrder
    securityLogChannelId?: SortOrderInput | SortOrder
    _count?: GuildSettingCountOrderByAggregateInput
    _avg?: GuildSettingAvgOrderByAggregateInput
    _max?: GuildSettingMaxOrderByAggregateInput
    _min?: GuildSettingMinOrderByAggregateInput
    _sum?: GuildSettingSumOrderByAggregateInput
  }

  export type GuildSettingScalarWhereWithAggregatesInput = {
    AND?: GuildSettingScalarWhereWithAggregatesInput | GuildSettingScalarWhereWithAggregatesInput[]
    OR?: GuildSettingScalarWhereWithAggregatesInput[]
    NOT?: GuildSettingScalarWhereWithAggregatesInput | GuildSettingScalarWhereWithAggregatesInput[]
    guildId?: StringWithAggregatesFilter<"GuildSetting"> | string
    antiRaidEnabled?: BoolWithAggregatesFilter<"GuildSetting"> | boolean
    antiNukeEnabled?: BoolWithAggregatesFilter<"GuildSetting"> | boolean
    antiSpamEnabled?: BoolWithAggregatesFilter<"GuildSetting"> | boolean
    antiMassMention?: BoolWithAggregatesFilter<"GuildSetting"> | boolean
    antiWebhookAbuse?: BoolWithAggregatesFilter<"GuildSetting"> | boolean
    scamDetection?: BoolWithAggregatesFilter<"GuildSetting"> | boolean
    autoLockdown?: BoolWithAggregatesFilter<"GuildSetting"> | boolean
    verificationSystem?: BoolWithAggregatesFilter<"GuildSetting"> | boolean
    aiModerationEnabled?: BoolWithAggregatesFilter<"GuildSetting"> | boolean
    aiLogChannelId?: StringNullableWithAggregatesFilter<"GuildSetting"> | string | null
    aiActionThreshold?: IntWithAggregatesFilter<"GuildSetting"> | number
    modLogChannelId?: StringNullableWithAggregatesFilter<"GuildSetting"> | string | null
    securityLogChannelId?: StringNullableWithAggregatesFilter<"GuildSetting"> | string | null
  }

  export type ModerationCaseWhereInput = {
    AND?: ModerationCaseWhereInput | ModerationCaseWhereInput[]
    OR?: ModerationCaseWhereInput[]
    NOT?: ModerationCaseWhereInput | ModerationCaseWhereInput[]
    id?: IntFilter<"ModerationCase"> | number
    guildId?: StringFilter<"ModerationCase"> | string
    userId?: StringFilter<"ModerationCase"> | string
    moderatorId?: StringFilter<"ModerationCase"> | string
    type?: StringFilter<"ModerationCase"> | string
    reason?: StringNullableFilter<"ModerationCase"> | string | null
    createdAt?: DateTimeFilter<"ModerationCase"> | Date | string
    guild?: XOR<GuildRelationFilter, GuildWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    moderator?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ModerationCaseOrderByWithRelationInput = {
    id?: SortOrder
    guildId?: SortOrder
    userId?: SortOrder
    moderatorId?: SortOrder
    type?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    guild?: GuildOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    moderator?: UserOrderByWithRelationInput
  }

  export type ModerationCaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ModerationCaseWhereInput | ModerationCaseWhereInput[]
    OR?: ModerationCaseWhereInput[]
    NOT?: ModerationCaseWhereInput | ModerationCaseWhereInput[]
    guildId?: StringFilter<"ModerationCase"> | string
    userId?: StringFilter<"ModerationCase"> | string
    moderatorId?: StringFilter<"ModerationCase"> | string
    type?: StringFilter<"ModerationCase"> | string
    reason?: StringNullableFilter<"ModerationCase"> | string | null
    createdAt?: DateTimeFilter<"ModerationCase"> | Date | string
    guild?: XOR<GuildRelationFilter, GuildWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    moderator?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ModerationCaseOrderByWithAggregationInput = {
    id?: SortOrder
    guildId?: SortOrder
    userId?: SortOrder
    moderatorId?: SortOrder
    type?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ModerationCaseCountOrderByAggregateInput
    _avg?: ModerationCaseAvgOrderByAggregateInput
    _max?: ModerationCaseMaxOrderByAggregateInput
    _min?: ModerationCaseMinOrderByAggregateInput
    _sum?: ModerationCaseSumOrderByAggregateInput
  }

  export type ModerationCaseScalarWhereWithAggregatesInput = {
    AND?: ModerationCaseScalarWhereWithAggregatesInput | ModerationCaseScalarWhereWithAggregatesInput[]
    OR?: ModerationCaseScalarWhereWithAggregatesInput[]
    NOT?: ModerationCaseScalarWhereWithAggregatesInput | ModerationCaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ModerationCase"> | number
    guildId?: StringWithAggregatesFilter<"ModerationCase"> | string
    userId?: StringWithAggregatesFilter<"ModerationCase"> | string
    moderatorId?: StringWithAggregatesFilter<"ModerationCase"> | string
    type?: StringWithAggregatesFilter<"ModerationCase"> | string
    reason?: StringNullableWithAggregatesFilter<"ModerationCase"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ModerationCase"> | Date | string
  }

  export type WarningWhereInput = {
    AND?: WarningWhereInput | WarningWhereInput[]
    OR?: WarningWhereInput[]
    NOT?: WarningWhereInput | WarningWhereInput[]
    id?: IntFilter<"Warning"> | number
    guildId?: StringFilter<"Warning"> | string
    userId?: StringFilter<"Warning"> | string
    reason?: StringFilter<"Warning"> | string
    createdAt?: DateTimeFilter<"Warning"> | Date | string
    guild?: XOR<GuildRelationFilter, GuildWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type WarningOrderByWithRelationInput = {
    id?: SortOrder
    guildId?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    guild?: GuildOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type WarningWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WarningWhereInput | WarningWhereInput[]
    OR?: WarningWhereInput[]
    NOT?: WarningWhereInput | WarningWhereInput[]
    guildId?: StringFilter<"Warning"> | string
    userId?: StringFilter<"Warning"> | string
    reason?: StringFilter<"Warning"> | string
    createdAt?: DateTimeFilter<"Warning"> | Date | string
    guild?: XOR<GuildRelationFilter, GuildWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type WarningOrderByWithAggregationInput = {
    id?: SortOrder
    guildId?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    _count?: WarningCountOrderByAggregateInput
    _avg?: WarningAvgOrderByAggregateInput
    _max?: WarningMaxOrderByAggregateInput
    _min?: WarningMinOrderByAggregateInput
    _sum?: WarningSumOrderByAggregateInput
  }

  export type WarningScalarWhereWithAggregatesInput = {
    AND?: WarningScalarWhereWithAggregatesInput | WarningScalarWhereWithAggregatesInput[]
    OR?: WarningScalarWhereWithAggregatesInput[]
    NOT?: WarningScalarWhereWithAggregatesInput | WarningScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Warning"> | number
    guildId?: StringWithAggregatesFilter<"Warning"> | string
    userId?: StringWithAggregatesFilter<"Warning"> | string
    reason?: StringWithAggregatesFilter<"Warning"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Warning"> | Date | string
  }

  export type SecurityEventWhereInput = {
    AND?: SecurityEventWhereInput | SecurityEventWhereInput[]
    OR?: SecurityEventWhereInput[]
    NOT?: SecurityEventWhereInput | SecurityEventWhereInput[]
    id?: IntFilter<"SecurityEvent"> | number
    guildId?: StringFilter<"SecurityEvent"> | string
    type?: StringFilter<"SecurityEvent"> | string
    severity?: StringFilter<"SecurityEvent"> | string
    description?: StringFilter<"SecurityEvent"> | string
    createdAt?: DateTimeFilter<"SecurityEvent"> | Date | string
    guild?: XOR<GuildRelationFilter, GuildWhereInput>
  }

  export type SecurityEventOrderByWithRelationInput = {
    id?: SortOrder
    guildId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    guild?: GuildOrderByWithRelationInput
  }

  export type SecurityEventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SecurityEventWhereInput | SecurityEventWhereInput[]
    OR?: SecurityEventWhereInput[]
    NOT?: SecurityEventWhereInput | SecurityEventWhereInput[]
    guildId?: StringFilter<"SecurityEvent"> | string
    type?: StringFilter<"SecurityEvent"> | string
    severity?: StringFilter<"SecurityEvent"> | string
    description?: StringFilter<"SecurityEvent"> | string
    createdAt?: DateTimeFilter<"SecurityEvent"> | Date | string
    guild?: XOR<GuildRelationFilter, GuildWhereInput>
  }, "id">

  export type SecurityEventOrderByWithAggregationInput = {
    id?: SortOrder
    guildId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    _count?: SecurityEventCountOrderByAggregateInput
    _avg?: SecurityEventAvgOrderByAggregateInput
    _max?: SecurityEventMaxOrderByAggregateInput
    _min?: SecurityEventMinOrderByAggregateInput
    _sum?: SecurityEventSumOrderByAggregateInput
  }

  export type SecurityEventScalarWhereWithAggregatesInput = {
    AND?: SecurityEventScalarWhereWithAggregatesInput | SecurityEventScalarWhereWithAggregatesInput[]
    OR?: SecurityEventScalarWhereWithAggregatesInput[]
    NOT?: SecurityEventScalarWhereWithAggregatesInput | SecurityEventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SecurityEvent"> | number
    guildId?: StringWithAggregatesFilter<"SecurityEvent"> | string
    type?: StringWithAggregatesFilter<"SecurityEvent"> | string
    severity?: StringWithAggregatesFilter<"SecurityEvent"> | string
    description?: StringWithAggregatesFilter<"SecurityEvent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SecurityEvent"> | Date | string
  }

  export type RaidEventWhereInput = {
    AND?: RaidEventWhereInput | RaidEventWhereInput[]
    OR?: RaidEventWhereInput[]
    NOT?: RaidEventWhereInput | RaidEventWhereInput[]
    id?: IntFilter<"RaidEvent"> | number
    guildId?: StringFilter<"RaidEvent"> | string
    status?: StringFilter<"RaidEvent"> | string
    startedAt?: DateTimeFilter<"RaidEvent"> | Date | string
    endedAt?: DateTimeNullableFilter<"RaidEvent"> | Date | string | null
    guild?: XOR<GuildRelationFilter, GuildWhereInput>
  }

  export type RaidEventOrderByWithRelationInput = {
    id?: SortOrder
    guildId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    guild?: GuildOrderByWithRelationInput
  }

  export type RaidEventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RaidEventWhereInput | RaidEventWhereInput[]
    OR?: RaidEventWhereInput[]
    NOT?: RaidEventWhereInput | RaidEventWhereInput[]
    guildId?: StringFilter<"RaidEvent"> | string
    status?: StringFilter<"RaidEvent"> | string
    startedAt?: DateTimeFilter<"RaidEvent"> | Date | string
    endedAt?: DateTimeNullableFilter<"RaidEvent"> | Date | string | null
    guild?: XOR<GuildRelationFilter, GuildWhereInput>
  }, "id">

  export type RaidEventOrderByWithAggregationInput = {
    id?: SortOrder
    guildId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    _count?: RaidEventCountOrderByAggregateInput
    _avg?: RaidEventAvgOrderByAggregateInput
    _max?: RaidEventMaxOrderByAggregateInput
    _min?: RaidEventMinOrderByAggregateInput
    _sum?: RaidEventSumOrderByAggregateInput
  }

  export type RaidEventScalarWhereWithAggregatesInput = {
    AND?: RaidEventScalarWhereWithAggregatesInput | RaidEventScalarWhereWithAggregatesInput[]
    OR?: RaidEventScalarWhereWithAggregatesInput[]
    NOT?: RaidEventScalarWhereWithAggregatesInput | RaidEventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RaidEvent"> | number
    guildId?: StringWithAggregatesFilter<"RaidEvent"> | string
    status?: StringWithAggregatesFilter<"RaidEvent"> | string
    startedAt?: DateTimeWithAggregatesFilter<"RaidEvent"> | Date | string
    endedAt?: DateTimeNullableWithAggregatesFilter<"RaidEvent"> | Date | string | null
  }

  export type MemberSnapshotWhereInput = {
    AND?: MemberSnapshotWhereInput | MemberSnapshotWhereInput[]
    OR?: MemberSnapshotWhereInput[]
    NOT?: MemberSnapshotWhereInput | MemberSnapshotWhereInput[]
    id?: IntFilter<"MemberSnapshot"> | number
    guildId?: StringFilter<"MemberSnapshot"> | string
    count?: IntFilter<"MemberSnapshot"> | number
    timestamp?: DateTimeFilter<"MemberSnapshot"> | Date | string
    guild?: XOR<GuildRelationFilter, GuildWhereInput>
  }

  export type MemberSnapshotOrderByWithRelationInput = {
    id?: SortOrder
    guildId?: SortOrder
    count?: SortOrder
    timestamp?: SortOrder
    guild?: GuildOrderByWithRelationInput
  }

  export type MemberSnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MemberSnapshotWhereInput | MemberSnapshotWhereInput[]
    OR?: MemberSnapshotWhereInput[]
    NOT?: MemberSnapshotWhereInput | MemberSnapshotWhereInput[]
    guildId?: StringFilter<"MemberSnapshot"> | string
    count?: IntFilter<"MemberSnapshot"> | number
    timestamp?: DateTimeFilter<"MemberSnapshot"> | Date | string
    guild?: XOR<GuildRelationFilter, GuildWhereInput>
  }, "id">

  export type MemberSnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    guildId?: SortOrder
    count?: SortOrder
    timestamp?: SortOrder
    _count?: MemberSnapshotCountOrderByAggregateInput
    _avg?: MemberSnapshotAvgOrderByAggregateInput
    _max?: MemberSnapshotMaxOrderByAggregateInput
    _min?: MemberSnapshotMinOrderByAggregateInput
    _sum?: MemberSnapshotSumOrderByAggregateInput
  }

  export type MemberSnapshotScalarWhereWithAggregatesInput = {
    AND?: MemberSnapshotScalarWhereWithAggregatesInput | MemberSnapshotScalarWhereWithAggregatesInput[]
    OR?: MemberSnapshotScalarWhereWithAggregatesInput[]
    NOT?: MemberSnapshotScalarWhereWithAggregatesInput | MemberSnapshotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MemberSnapshot"> | number
    guildId?: StringWithAggregatesFilter<"MemberSnapshot"> | string
    count?: IntWithAggregatesFilter<"MemberSnapshot"> | number
    timestamp?: DateTimeWithAggregatesFilter<"MemberSnapshot"> | Date | string
  }

  export type MessageActivityWhereInput = {
    AND?: MessageActivityWhereInput | MessageActivityWhereInput[]
    OR?: MessageActivityWhereInput[]
    NOT?: MessageActivityWhereInput | MessageActivityWhereInput[]
    id?: IntFilter<"MessageActivity"> | number
    guildId?: StringFilter<"MessageActivity"> | string
    channelId?: StringFilter<"MessageActivity"> | string
    count?: IntFilter<"MessageActivity"> | number
    timestamp?: DateTimeFilter<"MessageActivity"> | Date | string
    guild?: XOR<GuildRelationFilter, GuildWhereInput>
  }

  export type MessageActivityOrderByWithRelationInput = {
    id?: SortOrder
    guildId?: SortOrder
    channelId?: SortOrder
    count?: SortOrder
    timestamp?: SortOrder
    guild?: GuildOrderByWithRelationInput
  }

  export type MessageActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    guildId_channelId_timestamp?: MessageActivityGuildIdChannelIdTimestampCompoundUniqueInput
    AND?: MessageActivityWhereInput | MessageActivityWhereInput[]
    OR?: MessageActivityWhereInput[]
    NOT?: MessageActivityWhereInput | MessageActivityWhereInput[]
    guildId?: StringFilter<"MessageActivity"> | string
    channelId?: StringFilter<"MessageActivity"> | string
    count?: IntFilter<"MessageActivity"> | number
    timestamp?: DateTimeFilter<"MessageActivity"> | Date | string
    guild?: XOR<GuildRelationFilter, GuildWhereInput>
  }, "id" | "guildId_channelId_timestamp">

  export type MessageActivityOrderByWithAggregationInput = {
    id?: SortOrder
    guildId?: SortOrder
    channelId?: SortOrder
    count?: SortOrder
    timestamp?: SortOrder
    _count?: MessageActivityCountOrderByAggregateInput
    _avg?: MessageActivityAvgOrderByAggregateInput
    _max?: MessageActivityMaxOrderByAggregateInput
    _min?: MessageActivityMinOrderByAggregateInput
    _sum?: MessageActivitySumOrderByAggregateInput
  }

  export type MessageActivityScalarWhereWithAggregatesInput = {
    AND?: MessageActivityScalarWhereWithAggregatesInput | MessageActivityScalarWhereWithAggregatesInput[]
    OR?: MessageActivityScalarWhereWithAggregatesInput[]
    NOT?: MessageActivityScalarWhereWithAggregatesInput | MessageActivityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MessageActivity"> | number
    guildId?: StringWithAggregatesFilter<"MessageActivity"> | string
    channelId?: StringWithAggregatesFilter<"MessageActivity"> | string
    count?: IntWithAggregatesFilter<"MessageActivity"> | number
    timestamp?: DateTimeWithAggregatesFilter<"MessageActivity"> | Date | string
  }

  export type BotStatWhereInput = {
    AND?: BotStatWhereInput | BotStatWhereInput[]
    OR?: BotStatWhereInput[]
    NOT?: BotStatWhereInput | BotStatWhereInput[]
    id?: IntFilter<"BotStat"> | number
    serverCount?: IntFilter<"BotStat"> | number
    userCount?: IntFilter<"BotStat"> | number
    shardCount?: IntFilter<"BotStat"> | number
    updatedAt?: DateTimeFilter<"BotStat"> | Date | string
  }

  export type BotStatOrderByWithRelationInput = {
    id?: SortOrder
    serverCount?: SortOrder
    userCount?: SortOrder
    shardCount?: SortOrder
    updatedAt?: SortOrder
  }

  export type BotStatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BotStatWhereInput | BotStatWhereInput[]
    OR?: BotStatWhereInput[]
    NOT?: BotStatWhereInput | BotStatWhereInput[]
    serverCount?: IntFilter<"BotStat"> | number
    userCount?: IntFilter<"BotStat"> | number
    shardCount?: IntFilter<"BotStat"> | number
    updatedAt?: DateTimeFilter<"BotStat"> | Date | string
  }, "id">

  export type BotStatOrderByWithAggregationInput = {
    id?: SortOrder
    serverCount?: SortOrder
    userCount?: SortOrder
    shardCount?: SortOrder
    updatedAt?: SortOrder
    _count?: BotStatCountOrderByAggregateInput
    _avg?: BotStatAvgOrderByAggregateInput
    _max?: BotStatMaxOrderByAggregateInput
    _min?: BotStatMinOrderByAggregateInput
    _sum?: BotStatSumOrderByAggregateInput
  }

  export type BotStatScalarWhereWithAggregatesInput = {
    AND?: BotStatScalarWhereWithAggregatesInput | BotStatScalarWhereWithAggregatesInput[]
    OR?: BotStatScalarWhereWithAggregatesInput[]
    NOT?: BotStatScalarWhereWithAggregatesInput | BotStatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BotStat"> | number
    serverCount?: IntWithAggregatesFilter<"BotStat"> | number
    userCount?: IntWithAggregatesFilter<"BotStat"> | number
    shardCount?: IntWithAggregatesFilter<"BotStat"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"BotStat"> | Date | string
  }

  export type BotStatHistoryWhereInput = {
    AND?: BotStatHistoryWhereInput | BotStatHistoryWhereInput[]
    OR?: BotStatHistoryWhereInput[]
    NOT?: BotStatHistoryWhereInput | BotStatHistoryWhereInput[]
    id?: IntFilter<"BotStatHistory"> | number
    serverCount?: IntFilter<"BotStatHistory"> | number
    userCount?: IntFilter<"BotStatHistory"> | number
    shardCount?: IntFilter<"BotStatHistory"> | number
    timestamp?: DateTimeFilter<"BotStatHistory"> | Date | string
  }

  export type BotStatHistoryOrderByWithRelationInput = {
    id?: SortOrder
    serverCount?: SortOrder
    userCount?: SortOrder
    shardCount?: SortOrder
    timestamp?: SortOrder
  }

  export type BotStatHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BotStatHistoryWhereInput | BotStatHistoryWhereInput[]
    OR?: BotStatHistoryWhereInput[]
    NOT?: BotStatHistoryWhereInput | BotStatHistoryWhereInput[]
    serverCount?: IntFilter<"BotStatHistory"> | number
    userCount?: IntFilter<"BotStatHistory"> | number
    shardCount?: IntFilter<"BotStatHistory"> | number
    timestamp?: DateTimeFilter<"BotStatHistory"> | Date | string
  }, "id">

  export type BotStatHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    serverCount?: SortOrder
    userCount?: SortOrder
    shardCount?: SortOrder
    timestamp?: SortOrder
    _count?: BotStatHistoryCountOrderByAggregateInput
    _avg?: BotStatHistoryAvgOrderByAggregateInput
    _max?: BotStatHistoryMaxOrderByAggregateInput
    _min?: BotStatHistoryMinOrderByAggregateInput
    _sum?: BotStatHistorySumOrderByAggregateInput
  }

  export type BotStatHistoryScalarWhereWithAggregatesInput = {
    AND?: BotStatHistoryScalarWhereWithAggregatesInput | BotStatHistoryScalarWhereWithAggregatesInput[]
    OR?: BotStatHistoryScalarWhereWithAggregatesInput[]
    NOT?: BotStatHistoryScalarWhereWithAggregatesInput | BotStatHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BotStatHistory"> | number
    serverCount?: IntWithAggregatesFilter<"BotStatHistory"> | number
    userCount?: IntWithAggregatesFilter<"BotStatHistory"> | number
    shardCount?: IntWithAggregatesFilter<"BotStatHistory"> | number
    timestamp?: DateTimeWithAggregatesFilter<"BotStatHistory"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cases?: ModerationCaseCreateNestedManyWithoutUserInput
    moderated?: ModerationCaseCreateNestedManyWithoutModeratorInput
    warnings?: WarningCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cases?: ModerationCaseUncheckedCreateNestedManyWithoutUserInput
    moderated?: ModerationCaseUncheckedCreateNestedManyWithoutModeratorInput
    warnings?: WarningUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cases?: ModerationCaseUpdateManyWithoutUserNestedInput
    moderated?: ModerationCaseUpdateManyWithoutModeratorNestedInput
    warnings?: WarningUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cases?: ModerationCaseUncheckedUpdateManyWithoutUserNestedInput
    moderated?: ModerationCaseUncheckedUpdateManyWithoutModeratorNestedInput
    warnings?: WarningUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuildCreateInput = {
    id: string
    name: string
    memberCount?: number
    joinedAt?: Date | string
    updatedAt?: Date | string
    settings?: GuildSettingCreateNestedOneWithoutGuildInput
    cases?: ModerationCaseCreateNestedManyWithoutGuildInput
    warnings?: WarningCreateNestedManyWithoutGuildInput
    securityEvents?: SecurityEventCreateNestedManyWithoutGuildInput
    raidEvents?: RaidEventCreateNestedManyWithoutGuildInput
    memberSnapshots?: MemberSnapshotCreateNestedManyWithoutGuildInput
    messageActivity?: MessageActivityCreateNestedManyWithoutGuildInput
  }

  export type GuildUncheckedCreateInput = {
    id: string
    name: string
    memberCount?: number
    joinedAt?: Date | string
    updatedAt?: Date | string
    settings?: GuildSettingUncheckedCreateNestedOneWithoutGuildInput
    cases?: ModerationCaseUncheckedCreateNestedManyWithoutGuildInput
    warnings?: WarningUncheckedCreateNestedManyWithoutGuildInput
    securityEvents?: SecurityEventUncheckedCreateNestedManyWithoutGuildInput
    raidEvents?: RaidEventUncheckedCreateNestedManyWithoutGuildInput
    memberSnapshots?: MemberSnapshotUncheckedCreateNestedManyWithoutGuildInput
    messageActivity?: MessageActivityUncheckedCreateNestedManyWithoutGuildInput
  }

  export type GuildUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    memberCount?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: GuildSettingUpdateOneWithoutGuildNestedInput
    cases?: ModerationCaseUpdateManyWithoutGuildNestedInput
    warnings?: WarningUpdateManyWithoutGuildNestedInput
    securityEvents?: SecurityEventUpdateManyWithoutGuildNestedInput
    raidEvents?: RaidEventUpdateManyWithoutGuildNestedInput
    memberSnapshots?: MemberSnapshotUpdateManyWithoutGuildNestedInput
    messageActivity?: MessageActivityUpdateManyWithoutGuildNestedInput
  }

  export type GuildUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    memberCount?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: GuildSettingUncheckedUpdateOneWithoutGuildNestedInput
    cases?: ModerationCaseUncheckedUpdateManyWithoutGuildNestedInput
    warnings?: WarningUncheckedUpdateManyWithoutGuildNestedInput
    securityEvents?: SecurityEventUncheckedUpdateManyWithoutGuildNestedInput
    raidEvents?: RaidEventUncheckedUpdateManyWithoutGuildNestedInput
    memberSnapshots?: MemberSnapshotUncheckedUpdateManyWithoutGuildNestedInput
    messageActivity?: MessageActivityUncheckedUpdateManyWithoutGuildNestedInput
  }

  export type GuildCreateManyInput = {
    id: string
    name: string
    memberCount?: number
    joinedAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuildUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    memberCount?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuildUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    memberCount?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuildSettingCreateInput = {
    antiRaidEnabled?: boolean
    antiNukeEnabled?: boolean
    antiSpamEnabled?: boolean
    antiMassMention?: boolean
    antiWebhookAbuse?: boolean
    scamDetection?: boolean
    autoLockdown?: boolean
    verificationSystem?: boolean
    aiModerationEnabled?: boolean
    aiLogChannelId?: string | null
    aiActionThreshold?: number
    modLogChannelId?: string | null
    securityLogChannelId?: string | null
    guild: GuildCreateNestedOneWithoutSettingsInput
  }

  export type GuildSettingUncheckedCreateInput = {
    guildId: string
    antiRaidEnabled?: boolean
    antiNukeEnabled?: boolean
    antiSpamEnabled?: boolean
    antiMassMention?: boolean
    antiWebhookAbuse?: boolean
    scamDetection?: boolean
    autoLockdown?: boolean
    verificationSystem?: boolean
    aiModerationEnabled?: boolean
    aiLogChannelId?: string | null
    aiActionThreshold?: number
    modLogChannelId?: string | null
    securityLogChannelId?: string | null
  }

  export type GuildSettingUpdateInput = {
    antiRaidEnabled?: BoolFieldUpdateOperationsInput | boolean
    antiNukeEnabled?: BoolFieldUpdateOperationsInput | boolean
    antiSpamEnabled?: BoolFieldUpdateOperationsInput | boolean
    antiMassMention?: BoolFieldUpdateOperationsInput | boolean
    antiWebhookAbuse?: BoolFieldUpdateOperationsInput | boolean
    scamDetection?: BoolFieldUpdateOperationsInput | boolean
    autoLockdown?: BoolFieldUpdateOperationsInput | boolean
    verificationSystem?: BoolFieldUpdateOperationsInput | boolean
    aiModerationEnabled?: BoolFieldUpdateOperationsInput | boolean
    aiLogChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    aiActionThreshold?: IntFieldUpdateOperationsInput | number
    modLogChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    securityLogChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    guild?: GuildUpdateOneRequiredWithoutSettingsNestedInput
  }

  export type GuildSettingUncheckedUpdateInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    antiRaidEnabled?: BoolFieldUpdateOperationsInput | boolean
    antiNukeEnabled?: BoolFieldUpdateOperationsInput | boolean
    antiSpamEnabled?: BoolFieldUpdateOperationsInput | boolean
    antiMassMention?: BoolFieldUpdateOperationsInput | boolean
    antiWebhookAbuse?: BoolFieldUpdateOperationsInput | boolean
    scamDetection?: BoolFieldUpdateOperationsInput | boolean
    autoLockdown?: BoolFieldUpdateOperationsInput | boolean
    verificationSystem?: BoolFieldUpdateOperationsInput | boolean
    aiModerationEnabled?: BoolFieldUpdateOperationsInput | boolean
    aiLogChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    aiActionThreshold?: IntFieldUpdateOperationsInput | number
    modLogChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    securityLogChannelId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GuildSettingCreateManyInput = {
    guildId: string
    antiRaidEnabled?: boolean
    antiNukeEnabled?: boolean
    antiSpamEnabled?: boolean
    antiMassMention?: boolean
    antiWebhookAbuse?: boolean
    scamDetection?: boolean
    autoLockdown?: boolean
    verificationSystem?: boolean
    aiModerationEnabled?: boolean
    aiLogChannelId?: string | null
    aiActionThreshold?: number
    modLogChannelId?: string | null
    securityLogChannelId?: string | null
  }

  export type GuildSettingUpdateManyMutationInput = {
    antiRaidEnabled?: BoolFieldUpdateOperationsInput | boolean
    antiNukeEnabled?: BoolFieldUpdateOperationsInput | boolean
    antiSpamEnabled?: BoolFieldUpdateOperationsInput | boolean
    antiMassMention?: BoolFieldUpdateOperationsInput | boolean
    antiWebhookAbuse?: BoolFieldUpdateOperationsInput | boolean
    scamDetection?: BoolFieldUpdateOperationsInput | boolean
    autoLockdown?: BoolFieldUpdateOperationsInput | boolean
    verificationSystem?: BoolFieldUpdateOperationsInput | boolean
    aiModerationEnabled?: BoolFieldUpdateOperationsInput | boolean
    aiLogChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    aiActionThreshold?: IntFieldUpdateOperationsInput | number
    modLogChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    securityLogChannelId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GuildSettingUncheckedUpdateManyInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    antiRaidEnabled?: BoolFieldUpdateOperationsInput | boolean
    antiNukeEnabled?: BoolFieldUpdateOperationsInput | boolean
    antiSpamEnabled?: BoolFieldUpdateOperationsInput | boolean
    antiMassMention?: BoolFieldUpdateOperationsInput | boolean
    antiWebhookAbuse?: BoolFieldUpdateOperationsInput | boolean
    scamDetection?: BoolFieldUpdateOperationsInput | boolean
    autoLockdown?: BoolFieldUpdateOperationsInput | boolean
    verificationSystem?: BoolFieldUpdateOperationsInput | boolean
    aiModerationEnabled?: BoolFieldUpdateOperationsInput | boolean
    aiLogChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    aiActionThreshold?: IntFieldUpdateOperationsInput | number
    modLogChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    securityLogChannelId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ModerationCaseCreateInput = {
    type: string
    reason?: string | null
    createdAt?: Date | string
    guild: GuildCreateNestedOneWithoutCasesInput
    user: UserCreateNestedOneWithoutCasesInput
    moderator: UserCreateNestedOneWithoutModeratedInput
  }

  export type ModerationCaseUncheckedCreateInput = {
    id?: number
    guildId: string
    userId: string
    moderatorId: string
    type: string
    reason?: string | null
    createdAt?: Date | string
  }

  export type ModerationCaseUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guild?: GuildUpdateOneRequiredWithoutCasesNestedInput
    user?: UserUpdateOneRequiredWithoutCasesNestedInput
    moderator?: UserUpdateOneRequiredWithoutModeratedNestedInput
  }

  export type ModerationCaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    moderatorId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModerationCaseCreateManyInput = {
    id?: number
    guildId: string
    userId: string
    moderatorId: string
    type: string
    reason?: string | null
    createdAt?: Date | string
  }

  export type ModerationCaseUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModerationCaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    moderatorId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarningCreateInput = {
    reason: string
    createdAt?: Date | string
    guild: GuildCreateNestedOneWithoutWarningsInput
    user: UserCreateNestedOneWithoutWarningsInput
  }

  export type WarningUncheckedCreateInput = {
    id?: number
    guildId: string
    userId: string
    reason: string
    createdAt?: Date | string
  }

  export type WarningUpdateInput = {
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guild?: GuildUpdateOneRequiredWithoutWarningsNestedInput
    user?: UserUpdateOneRequiredWithoutWarningsNestedInput
  }

  export type WarningUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarningCreateManyInput = {
    id?: number
    guildId: string
    userId: string
    reason: string
    createdAt?: Date | string
  }

  export type WarningUpdateManyMutationInput = {
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarningUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityEventCreateInput = {
    type: string
    severity: string
    description: string
    createdAt?: Date | string
    guild: GuildCreateNestedOneWithoutSecurityEventsInput
  }

  export type SecurityEventUncheckedCreateInput = {
    id?: number
    guildId: string
    type: string
    severity: string
    description: string
    createdAt?: Date | string
  }

  export type SecurityEventUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guild?: GuildUpdateOneRequiredWithoutSecurityEventsNestedInput
  }

  export type SecurityEventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityEventCreateManyInput = {
    id?: number
    guildId: string
    type: string
    severity: string
    description: string
    createdAt?: Date | string
  }

  export type SecurityEventUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityEventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaidEventCreateInput = {
    status: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    guild: GuildCreateNestedOneWithoutRaidEventsInput
  }

  export type RaidEventUncheckedCreateInput = {
    id?: number
    guildId: string
    status: string
    startedAt?: Date | string
    endedAt?: Date | string | null
  }

  export type RaidEventUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    guild?: GuildUpdateOneRequiredWithoutRaidEventsNestedInput
  }

  export type RaidEventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RaidEventCreateManyInput = {
    id?: number
    guildId: string
    status: string
    startedAt?: Date | string
    endedAt?: Date | string | null
  }

  export type RaidEventUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RaidEventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MemberSnapshotCreateInput = {
    count: number
    timestamp?: Date | string
    guild: GuildCreateNestedOneWithoutMemberSnapshotsInput
  }

  export type MemberSnapshotUncheckedCreateInput = {
    id?: number
    guildId: string
    count: number
    timestamp?: Date | string
  }

  export type MemberSnapshotUpdateInput = {
    count?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    guild?: GuildUpdateOneRequiredWithoutMemberSnapshotsNestedInput
  }

  export type MemberSnapshotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberSnapshotCreateManyInput = {
    id?: number
    guildId: string
    count: number
    timestamp?: Date | string
  }

  export type MemberSnapshotUpdateManyMutationInput = {
    count?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberSnapshotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageActivityCreateInput = {
    channelId: string
    count?: number
    timestamp?: Date | string
    guild: GuildCreateNestedOneWithoutMessageActivityInput
  }

  export type MessageActivityUncheckedCreateInput = {
    id?: number
    guildId: string
    channelId: string
    count?: number
    timestamp?: Date | string
  }

  export type MessageActivityUpdateInput = {
    channelId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    guild?: GuildUpdateOneRequiredWithoutMessageActivityNestedInput
  }

  export type MessageActivityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageActivityCreateManyInput = {
    id?: number
    guildId: string
    channelId: string
    count?: number
    timestamp?: Date | string
  }

  export type MessageActivityUpdateManyMutationInput = {
    channelId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageActivityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BotStatCreateInput = {
    serverCount: number
    userCount: number
    shardCount: number
    updatedAt?: Date | string
  }

  export type BotStatUncheckedCreateInput = {
    id?: number
    serverCount: number
    userCount: number
    shardCount: number
    updatedAt?: Date | string
  }

  export type BotStatUpdateInput = {
    serverCount?: IntFieldUpdateOperationsInput | number
    userCount?: IntFieldUpdateOperationsInput | number
    shardCount?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BotStatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    serverCount?: IntFieldUpdateOperationsInput | number
    userCount?: IntFieldUpdateOperationsInput | number
    shardCount?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BotStatCreateManyInput = {
    id?: number
    serverCount: number
    userCount: number
    shardCount: number
    updatedAt?: Date | string
  }

  export type BotStatUpdateManyMutationInput = {
    serverCount?: IntFieldUpdateOperationsInput | number
    userCount?: IntFieldUpdateOperationsInput | number
    shardCount?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BotStatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    serverCount?: IntFieldUpdateOperationsInput | number
    userCount?: IntFieldUpdateOperationsInput | number
    shardCount?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BotStatHistoryCreateInput = {
    serverCount: number
    userCount: number
    shardCount: number
    timestamp?: Date | string
  }

  export type BotStatHistoryUncheckedCreateInput = {
    id?: number
    serverCount: number
    userCount: number
    shardCount: number
    timestamp?: Date | string
  }

  export type BotStatHistoryUpdateInput = {
    serverCount?: IntFieldUpdateOperationsInput | number
    userCount?: IntFieldUpdateOperationsInput | number
    shardCount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BotStatHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    serverCount?: IntFieldUpdateOperationsInput | number
    userCount?: IntFieldUpdateOperationsInput | number
    shardCount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BotStatHistoryCreateManyInput = {
    id?: number
    serverCount: number
    userCount: number
    shardCount: number
    timestamp?: Date | string
  }

  export type BotStatHistoryUpdateManyMutationInput = {
    serverCount?: IntFieldUpdateOperationsInput | number
    userCount?: IntFieldUpdateOperationsInput | number
    shardCount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BotStatHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    serverCount?: IntFieldUpdateOperationsInput | number
    userCount?: IntFieldUpdateOperationsInput | number
    shardCount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ModerationCaseListRelationFilter = {
    every?: ModerationCaseWhereInput
    some?: ModerationCaseWhereInput
    none?: ModerationCaseWhereInput
  }

  export type WarningListRelationFilter = {
    every?: WarningWhereInput
    some?: WarningWhereInput
    none?: WarningWhereInput
  }

  export type ModerationCaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WarningOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type GuildSettingNullableRelationFilter = {
    is?: GuildSettingWhereInput | null
    isNot?: GuildSettingWhereInput | null
  }

  export type SecurityEventListRelationFilter = {
    every?: SecurityEventWhereInput
    some?: SecurityEventWhereInput
    none?: SecurityEventWhereInput
  }

  export type RaidEventListRelationFilter = {
    every?: RaidEventWhereInput
    some?: RaidEventWhereInput
    none?: RaidEventWhereInput
  }

  export type MemberSnapshotListRelationFilter = {
    every?: MemberSnapshotWhereInput
    some?: MemberSnapshotWhereInput
    none?: MemberSnapshotWhereInput
  }

  export type MessageActivityListRelationFilter = {
    every?: MessageActivityWhereInput
    some?: MessageActivityWhereInput
    none?: MessageActivityWhereInput
  }

  export type SecurityEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RaidEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberSnapshotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuildCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    memberCount?: SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuildAvgOrderByAggregateInput = {
    memberCount?: SortOrder
  }

  export type GuildMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    memberCount?: SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuildMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    memberCount?: SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuildSumOrderByAggregateInput = {
    memberCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type GuildRelationFilter = {
    is?: GuildWhereInput
    isNot?: GuildWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GuildSettingCountOrderByAggregateInput = {
    guildId?: SortOrder
    antiRaidEnabled?: SortOrder
    antiNukeEnabled?: SortOrder
    antiSpamEnabled?: SortOrder
    antiMassMention?: SortOrder
    antiWebhookAbuse?: SortOrder
    scamDetection?: SortOrder
    autoLockdown?: SortOrder
    verificationSystem?: SortOrder
    aiModerationEnabled?: SortOrder
    aiLogChannelId?: SortOrder
    aiActionThreshold?: SortOrder
    modLogChannelId?: SortOrder
    securityLogChannelId?: SortOrder
  }

  export type GuildSettingAvgOrderByAggregateInput = {
    aiActionThreshold?: SortOrder
  }

  export type GuildSettingMaxOrderByAggregateInput = {
    guildId?: SortOrder
    antiRaidEnabled?: SortOrder
    antiNukeEnabled?: SortOrder
    antiSpamEnabled?: SortOrder
    antiMassMention?: SortOrder
    antiWebhookAbuse?: SortOrder
    scamDetection?: SortOrder
    autoLockdown?: SortOrder
    verificationSystem?: SortOrder
    aiModerationEnabled?: SortOrder
    aiLogChannelId?: SortOrder
    aiActionThreshold?: SortOrder
    modLogChannelId?: SortOrder
    securityLogChannelId?: SortOrder
  }

  export type GuildSettingMinOrderByAggregateInput = {
    guildId?: SortOrder
    antiRaidEnabled?: SortOrder
    antiNukeEnabled?: SortOrder
    antiSpamEnabled?: SortOrder
    antiMassMention?: SortOrder
    antiWebhookAbuse?: SortOrder
    scamDetection?: SortOrder
    autoLockdown?: SortOrder
    verificationSystem?: SortOrder
    aiModerationEnabled?: SortOrder
    aiLogChannelId?: SortOrder
    aiActionThreshold?: SortOrder
    modLogChannelId?: SortOrder
    securityLogChannelId?: SortOrder
  }

  export type GuildSettingSumOrderByAggregateInput = {
    aiActionThreshold?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ModerationCaseCountOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    userId?: SortOrder
    moderatorId?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type ModerationCaseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ModerationCaseMaxOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    userId?: SortOrder
    moderatorId?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type ModerationCaseMinOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    userId?: SortOrder
    moderatorId?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type ModerationCaseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WarningCountOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type WarningAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WarningMaxOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type WarningMinOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type WarningSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SecurityEventCountOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type SecurityEventAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SecurityEventMaxOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type SecurityEventMinOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type SecurityEventSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type RaidEventCountOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type RaidEventAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RaidEventMaxOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type RaidEventMinOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type RaidEventSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type MemberSnapshotCountOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    count?: SortOrder
    timestamp?: SortOrder
  }

  export type MemberSnapshotAvgOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
  }

  export type MemberSnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    count?: SortOrder
    timestamp?: SortOrder
  }

  export type MemberSnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    count?: SortOrder
    timestamp?: SortOrder
  }

  export type MemberSnapshotSumOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
  }

  export type MessageActivityGuildIdChannelIdTimestampCompoundUniqueInput = {
    guildId: string
    channelId: string
    timestamp: Date | string
  }

  export type MessageActivityCountOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    channelId?: SortOrder
    count?: SortOrder
    timestamp?: SortOrder
  }

  export type MessageActivityAvgOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
  }

  export type MessageActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    channelId?: SortOrder
    count?: SortOrder
    timestamp?: SortOrder
  }

  export type MessageActivityMinOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    channelId?: SortOrder
    count?: SortOrder
    timestamp?: SortOrder
  }

  export type MessageActivitySumOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
  }

  export type BotStatCountOrderByAggregateInput = {
    id?: SortOrder
    serverCount?: SortOrder
    userCount?: SortOrder
    shardCount?: SortOrder
    updatedAt?: SortOrder
  }

  export type BotStatAvgOrderByAggregateInput = {
    id?: SortOrder
    serverCount?: SortOrder
    userCount?: SortOrder
    shardCount?: SortOrder
  }

  export type BotStatMaxOrderByAggregateInput = {
    id?: SortOrder
    serverCount?: SortOrder
    userCount?: SortOrder
    shardCount?: SortOrder
    updatedAt?: SortOrder
  }

  export type BotStatMinOrderByAggregateInput = {
    id?: SortOrder
    serverCount?: SortOrder
    userCount?: SortOrder
    shardCount?: SortOrder
    updatedAt?: SortOrder
  }

  export type BotStatSumOrderByAggregateInput = {
    id?: SortOrder
    serverCount?: SortOrder
    userCount?: SortOrder
    shardCount?: SortOrder
  }

  export type BotStatHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    serverCount?: SortOrder
    userCount?: SortOrder
    shardCount?: SortOrder
    timestamp?: SortOrder
  }

  export type BotStatHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    serverCount?: SortOrder
    userCount?: SortOrder
    shardCount?: SortOrder
  }

  export type BotStatHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    serverCount?: SortOrder
    userCount?: SortOrder
    shardCount?: SortOrder
    timestamp?: SortOrder
  }

  export type BotStatHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    serverCount?: SortOrder
    userCount?: SortOrder
    shardCount?: SortOrder
    timestamp?: SortOrder
  }

  export type BotStatHistorySumOrderByAggregateInput = {
    id?: SortOrder
    serverCount?: SortOrder
    userCount?: SortOrder
    shardCount?: SortOrder
  }

  export type ModerationCaseCreateNestedManyWithoutUserInput = {
    create?: XOR<ModerationCaseCreateWithoutUserInput, ModerationCaseUncheckedCreateWithoutUserInput> | ModerationCaseCreateWithoutUserInput[] | ModerationCaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ModerationCaseCreateOrConnectWithoutUserInput | ModerationCaseCreateOrConnectWithoutUserInput[]
    createMany?: ModerationCaseCreateManyUserInputEnvelope
    connect?: ModerationCaseWhereUniqueInput | ModerationCaseWhereUniqueInput[]
  }

  export type ModerationCaseCreateNestedManyWithoutModeratorInput = {
    create?: XOR<ModerationCaseCreateWithoutModeratorInput, ModerationCaseUncheckedCreateWithoutModeratorInput> | ModerationCaseCreateWithoutModeratorInput[] | ModerationCaseUncheckedCreateWithoutModeratorInput[]
    connectOrCreate?: ModerationCaseCreateOrConnectWithoutModeratorInput | ModerationCaseCreateOrConnectWithoutModeratorInput[]
    createMany?: ModerationCaseCreateManyModeratorInputEnvelope
    connect?: ModerationCaseWhereUniqueInput | ModerationCaseWhereUniqueInput[]
  }

  export type WarningCreateNestedManyWithoutUserInput = {
    create?: XOR<WarningCreateWithoutUserInput, WarningUncheckedCreateWithoutUserInput> | WarningCreateWithoutUserInput[] | WarningUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WarningCreateOrConnectWithoutUserInput | WarningCreateOrConnectWithoutUserInput[]
    createMany?: WarningCreateManyUserInputEnvelope
    connect?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
  }

  export type ModerationCaseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ModerationCaseCreateWithoutUserInput, ModerationCaseUncheckedCreateWithoutUserInput> | ModerationCaseCreateWithoutUserInput[] | ModerationCaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ModerationCaseCreateOrConnectWithoutUserInput | ModerationCaseCreateOrConnectWithoutUserInput[]
    createMany?: ModerationCaseCreateManyUserInputEnvelope
    connect?: ModerationCaseWhereUniqueInput | ModerationCaseWhereUniqueInput[]
  }

  export type ModerationCaseUncheckedCreateNestedManyWithoutModeratorInput = {
    create?: XOR<ModerationCaseCreateWithoutModeratorInput, ModerationCaseUncheckedCreateWithoutModeratorInput> | ModerationCaseCreateWithoutModeratorInput[] | ModerationCaseUncheckedCreateWithoutModeratorInput[]
    connectOrCreate?: ModerationCaseCreateOrConnectWithoutModeratorInput | ModerationCaseCreateOrConnectWithoutModeratorInput[]
    createMany?: ModerationCaseCreateManyModeratorInputEnvelope
    connect?: ModerationCaseWhereUniqueInput | ModerationCaseWhereUniqueInput[]
  }

  export type WarningUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WarningCreateWithoutUserInput, WarningUncheckedCreateWithoutUserInput> | WarningCreateWithoutUserInput[] | WarningUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WarningCreateOrConnectWithoutUserInput | WarningCreateOrConnectWithoutUserInput[]
    createMany?: WarningCreateManyUserInputEnvelope
    connect?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ModerationCaseUpdateManyWithoutUserNestedInput = {
    create?: XOR<ModerationCaseCreateWithoutUserInput, ModerationCaseUncheckedCreateWithoutUserInput> | ModerationCaseCreateWithoutUserInput[] | ModerationCaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ModerationCaseCreateOrConnectWithoutUserInput | ModerationCaseCreateOrConnectWithoutUserInput[]
    upsert?: ModerationCaseUpsertWithWhereUniqueWithoutUserInput | ModerationCaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ModerationCaseCreateManyUserInputEnvelope
    set?: ModerationCaseWhereUniqueInput | ModerationCaseWhereUniqueInput[]
    disconnect?: ModerationCaseWhereUniqueInput | ModerationCaseWhereUniqueInput[]
    delete?: ModerationCaseWhereUniqueInput | ModerationCaseWhereUniqueInput[]
    connect?: ModerationCaseWhereUniqueInput | ModerationCaseWhereUniqueInput[]
    update?: ModerationCaseUpdateWithWhereUniqueWithoutUserInput | ModerationCaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ModerationCaseUpdateManyWithWhereWithoutUserInput | ModerationCaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ModerationCaseScalarWhereInput | ModerationCaseScalarWhereInput[]
  }

  export type ModerationCaseUpdateManyWithoutModeratorNestedInput = {
    create?: XOR<ModerationCaseCreateWithoutModeratorInput, ModerationCaseUncheckedCreateWithoutModeratorInput> | ModerationCaseCreateWithoutModeratorInput[] | ModerationCaseUncheckedCreateWithoutModeratorInput[]
    connectOrCreate?: ModerationCaseCreateOrConnectWithoutModeratorInput | ModerationCaseCreateOrConnectWithoutModeratorInput[]
    upsert?: ModerationCaseUpsertWithWhereUniqueWithoutModeratorInput | ModerationCaseUpsertWithWhereUniqueWithoutModeratorInput[]
    createMany?: ModerationCaseCreateManyModeratorInputEnvelope
    set?: ModerationCaseWhereUniqueInput | ModerationCaseWhereUniqueInput[]
    disconnect?: ModerationCaseWhereUniqueInput | ModerationCaseWhereUniqueInput[]
    delete?: ModerationCaseWhereUniqueInput | ModerationCaseWhereUniqueInput[]
    connect?: ModerationCaseWhereUniqueInput | ModerationCaseWhereUniqueInput[]
    update?: ModerationCaseUpdateWithWhereUniqueWithoutModeratorInput | ModerationCaseUpdateWithWhereUniqueWithoutModeratorInput[]
    updateMany?: ModerationCaseUpdateManyWithWhereWithoutModeratorInput | ModerationCaseUpdateManyWithWhereWithoutModeratorInput[]
    deleteMany?: ModerationCaseScalarWhereInput | ModerationCaseScalarWhereInput[]
  }

  export type WarningUpdateManyWithoutUserNestedInput = {
    create?: XOR<WarningCreateWithoutUserInput, WarningUncheckedCreateWithoutUserInput> | WarningCreateWithoutUserInput[] | WarningUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WarningCreateOrConnectWithoutUserInput | WarningCreateOrConnectWithoutUserInput[]
    upsert?: WarningUpsertWithWhereUniqueWithoutUserInput | WarningUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WarningCreateManyUserInputEnvelope
    set?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    disconnect?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    delete?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    connect?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    update?: WarningUpdateWithWhereUniqueWithoutUserInput | WarningUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WarningUpdateManyWithWhereWithoutUserInput | WarningUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WarningScalarWhereInput | WarningScalarWhereInput[]
  }

  export type ModerationCaseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ModerationCaseCreateWithoutUserInput, ModerationCaseUncheckedCreateWithoutUserInput> | ModerationCaseCreateWithoutUserInput[] | ModerationCaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ModerationCaseCreateOrConnectWithoutUserInput | ModerationCaseCreateOrConnectWithoutUserInput[]
    upsert?: ModerationCaseUpsertWithWhereUniqueWithoutUserInput | ModerationCaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ModerationCaseCreateManyUserInputEnvelope
    set?: ModerationCaseWhereUniqueInput | ModerationCaseWhereUniqueInput[]
    disconnect?: ModerationCaseWhereUniqueInput | ModerationCaseWhereUniqueInput[]
    delete?: ModerationCaseWhereUniqueInput | ModerationCaseWhereUniqueInput[]
    connect?: ModerationCaseWhereUniqueInput | ModerationCaseWhereUniqueInput[]
    update?: ModerationCaseUpdateWithWhereUniqueWithoutUserInput | ModerationCaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ModerationCaseUpdateManyWithWhereWithoutUserInput | ModerationCaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ModerationCaseScalarWhereInput | ModerationCaseScalarWhereInput[]
  }

  export type ModerationCaseUncheckedUpdateManyWithoutModeratorNestedInput = {
    create?: XOR<ModerationCaseCreateWithoutModeratorInput, ModerationCaseUncheckedCreateWithoutModeratorInput> | ModerationCaseCreateWithoutModeratorInput[] | ModerationCaseUncheckedCreateWithoutModeratorInput[]
    connectOrCreate?: ModerationCaseCreateOrConnectWithoutModeratorInput | ModerationCaseCreateOrConnectWithoutModeratorInput[]
    upsert?: ModerationCaseUpsertWithWhereUniqueWithoutModeratorInput | ModerationCaseUpsertWithWhereUniqueWithoutModeratorInput[]
    createMany?: ModerationCaseCreateManyModeratorInputEnvelope
    set?: ModerationCaseWhereUniqueInput | ModerationCaseWhereUniqueInput[]
    disconnect?: ModerationCaseWhereUniqueInput | ModerationCaseWhereUniqueInput[]
    delete?: ModerationCaseWhereUniqueInput | ModerationCaseWhereUniqueInput[]
    connect?: ModerationCaseWhereUniqueInput | ModerationCaseWhereUniqueInput[]
    update?: ModerationCaseUpdateWithWhereUniqueWithoutModeratorInput | ModerationCaseUpdateWithWhereUniqueWithoutModeratorInput[]
    updateMany?: ModerationCaseUpdateManyWithWhereWithoutModeratorInput | ModerationCaseUpdateManyWithWhereWithoutModeratorInput[]
    deleteMany?: ModerationCaseScalarWhereInput | ModerationCaseScalarWhereInput[]
  }

  export type WarningUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WarningCreateWithoutUserInput, WarningUncheckedCreateWithoutUserInput> | WarningCreateWithoutUserInput[] | WarningUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WarningCreateOrConnectWithoutUserInput | WarningCreateOrConnectWithoutUserInput[]
    upsert?: WarningUpsertWithWhereUniqueWithoutUserInput | WarningUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WarningCreateManyUserInputEnvelope
    set?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    disconnect?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    delete?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    connect?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    update?: WarningUpdateWithWhereUniqueWithoutUserInput | WarningUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WarningUpdateManyWithWhereWithoutUserInput | WarningUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WarningScalarWhereInput | WarningScalarWhereInput[]
  }

  export type GuildSettingCreateNestedOneWithoutGuildInput = {
    create?: XOR<GuildSettingCreateWithoutGuildInput, GuildSettingUncheckedCreateWithoutGuildInput>
    connectOrCreate?: GuildSettingCreateOrConnectWithoutGuildInput
    connect?: GuildSettingWhereUniqueInput
  }

  export type ModerationCaseCreateNestedManyWithoutGuildInput = {
    create?: XOR<ModerationCaseCreateWithoutGuildInput, ModerationCaseUncheckedCreateWithoutGuildInput> | ModerationCaseCreateWithoutGuildInput[] | ModerationCaseUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: ModerationCaseCreateOrConnectWithoutGuildInput | ModerationCaseCreateOrConnectWithoutGuildInput[]
    createMany?: ModerationCaseCreateManyGuildInputEnvelope
    connect?: ModerationCaseWhereUniqueInput | ModerationCaseWhereUniqueInput[]
  }

  export type WarningCreateNestedManyWithoutGuildInput = {
    create?: XOR<WarningCreateWithoutGuildInput, WarningUncheckedCreateWithoutGuildInput> | WarningCreateWithoutGuildInput[] | WarningUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: WarningCreateOrConnectWithoutGuildInput | WarningCreateOrConnectWithoutGuildInput[]
    createMany?: WarningCreateManyGuildInputEnvelope
    connect?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
  }

  export type SecurityEventCreateNestedManyWithoutGuildInput = {
    create?: XOR<SecurityEventCreateWithoutGuildInput, SecurityEventUncheckedCreateWithoutGuildInput> | SecurityEventCreateWithoutGuildInput[] | SecurityEventUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: SecurityEventCreateOrConnectWithoutGuildInput | SecurityEventCreateOrConnectWithoutGuildInput[]
    createMany?: SecurityEventCreateManyGuildInputEnvelope
    connect?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
  }

  export type RaidEventCreateNestedManyWithoutGuildInput = {
    create?: XOR<RaidEventCreateWithoutGuildInput, RaidEventUncheckedCreateWithoutGuildInput> | RaidEventCreateWithoutGuildInput[] | RaidEventUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: RaidEventCreateOrConnectWithoutGuildInput | RaidEventCreateOrConnectWithoutGuildInput[]
    createMany?: RaidEventCreateManyGuildInputEnvelope
    connect?: RaidEventWhereUniqueInput | RaidEventWhereUniqueInput[]
  }

  export type MemberSnapshotCreateNestedManyWithoutGuildInput = {
    create?: XOR<MemberSnapshotCreateWithoutGuildInput, MemberSnapshotUncheckedCreateWithoutGuildInput> | MemberSnapshotCreateWithoutGuildInput[] | MemberSnapshotUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: MemberSnapshotCreateOrConnectWithoutGuildInput | MemberSnapshotCreateOrConnectWithoutGuildInput[]
    createMany?: MemberSnapshotCreateManyGuildInputEnvelope
    connect?: MemberSnapshotWhereUniqueInput | MemberSnapshotWhereUniqueInput[]
  }

  export type MessageActivityCreateNestedManyWithoutGuildInput = {
    create?: XOR<MessageActivityCreateWithoutGuildInput, MessageActivityUncheckedCreateWithoutGuildInput> | MessageActivityCreateWithoutGuildInput[] | MessageActivityUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: MessageActivityCreateOrConnectWithoutGuildInput | MessageActivityCreateOrConnectWithoutGuildInput[]
    createMany?: MessageActivityCreateManyGuildInputEnvelope
    connect?: MessageActivityWhereUniqueInput | MessageActivityWhereUniqueInput[]
  }

  export type GuildSettingUncheckedCreateNestedOneWithoutGuildInput = {
    create?: XOR<GuildSettingCreateWithoutGuildInput, GuildSettingUncheckedCreateWithoutGuildInput>
    connectOrCreate?: GuildSettingCreateOrConnectWithoutGuildInput
    connect?: GuildSettingWhereUniqueInput
  }

  export type ModerationCaseUncheckedCreateNestedManyWithoutGuildInput = {
    create?: XOR<ModerationCaseCreateWithoutGuildInput, ModerationCaseUncheckedCreateWithoutGuildInput> | ModerationCaseCreateWithoutGuildInput[] | ModerationCaseUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: ModerationCaseCreateOrConnectWithoutGuildInput | ModerationCaseCreateOrConnectWithoutGuildInput[]
    createMany?: ModerationCaseCreateManyGuildInputEnvelope
    connect?: ModerationCaseWhereUniqueInput | ModerationCaseWhereUniqueInput[]
  }

  export type WarningUncheckedCreateNestedManyWithoutGuildInput = {
    create?: XOR<WarningCreateWithoutGuildInput, WarningUncheckedCreateWithoutGuildInput> | WarningCreateWithoutGuildInput[] | WarningUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: WarningCreateOrConnectWithoutGuildInput | WarningCreateOrConnectWithoutGuildInput[]
    createMany?: WarningCreateManyGuildInputEnvelope
    connect?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
  }

  export type SecurityEventUncheckedCreateNestedManyWithoutGuildInput = {
    create?: XOR<SecurityEventCreateWithoutGuildInput, SecurityEventUncheckedCreateWithoutGuildInput> | SecurityEventCreateWithoutGuildInput[] | SecurityEventUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: SecurityEventCreateOrConnectWithoutGuildInput | SecurityEventCreateOrConnectWithoutGuildInput[]
    createMany?: SecurityEventCreateManyGuildInputEnvelope
    connect?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
  }

  export type RaidEventUncheckedCreateNestedManyWithoutGuildInput = {
    create?: XOR<RaidEventCreateWithoutGuildInput, RaidEventUncheckedCreateWithoutGuildInput> | RaidEventCreateWithoutGuildInput[] | RaidEventUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: RaidEventCreateOrConnectWithoutGuildInput | RaidEventCreateOrConnectWithoutGuildInput[]
    createMany?: RaidEventCreateManyGuildInputEnvelope
    connect?: RaidEventWhereUniqueInput | RaidEventWhereUniqueInput[]
  }

  export type MemberSnapshotUncheckedCreateNestedManyWithoutGuildInput = {
    create?: XOR<MemberSnapshotCreateWithoutGuildInput, MemberSnapshotUncheckedCreateWithoutGuildInput> | MemberSnapshotCreateWithoutGuildInput[] | MemberSnapshotUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: MemberSnapshotCreateOrConnectWithoutGuildInput | MemberSnapshotCreateOrConnectWithoutGuildInput[]
    createMany?: MemberSnapshotCreateManyGuildInputEnvelope
    connect?: MemberSnapshotWhereUniqueInput | MemberSnapshotWhereUniqueInput[]
  }

  export type MessageActivityUncheckedCreateNestedManyWithoutGuildInput = {
    create?: XOR<MessageActivityCreateWithoutGuildInput, MessageActivityUncheckedCreateWithoutGuildInput> | MessageActivityCreateWithoutGuildInput[] | MessageActivityUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: MessageActivityCreateOrConnectWithoutGuildInput | MessageActivityCreateOrConnectWithoutGuildInput[]
    createMany?: MessageActivityCreateManyGuildInputEnvelope
    connect?: MessageActivityWhereUniqueInput | MessageActivityWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GuildSettingUpdateOneWithoutGuildNestedInput = {
    create?: XOR<GuildSettingCreateWithoutGuildInput, GuildSettingUncheckedCreateWithoutGuildInput>
    connectOrCreate?: GuildSettingCreateOrConnectWithoutGuildInput
    upsert?: GuildSettingUpsertWithoutGuildInput
    disconnect?: GuildSettingWhereInput | boolean
    delete?: GuildSettingWhereInput | boolean
    connect?: GuildSettingWhereUniqueInput
    update?: XOR<XOR<GuildSettingUpdateToOneWithWhereWithoutGuildInput, GuildSettingUpdateWithoutGuildInput>, GuildSettingUncheckedUpdateWithoutGuildInput>
  }

  export type ModerationCaseUpdateManyWithoutGuildNestedInput = {
    create?: XOR<ModerationCaseCreateWithoutGuildInput, ModerationCaseUncheckedCreateWithoutGuildInput> | ModerationCaseCreateWithoutGuildInput[] | ModerationCaseUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: ModerationCaseCreateOrConnectWithoutGuildInput | ModerationCaseCreateOrConnectWithoutGuildInput[]
    upsert?: ModerationCaseUpsertWithWhereUniqueWithoutGuildInput | ModerationCaseUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: ModerationCaseCreateManyGuildInputEnvelope
    set?: ModerationCaseWhereUniqueInput | ModerationCaseWhereUniqueInput[]
    disconnect?: ModerationCaseWhereUniqueInput | ModerationCaseWhereUniqueInput[]
    delete?: ModerationCaseWhereUniqueInput | ModerationCaseWhereUniqueInput[]
    connect?: ModerationCaseWhereUniqueInput | ModerationCaseWhereUniqueInput[]
    update?: ModerationCaseUpdateWithWhereUniqueWithoutGuildInput | ModerationCaseUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: ModerationCaseUpdateManyWithWhereWithoutGuildInput | ModerationCaseUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: ModerationCaseScalarWhereInput | ModerationCaseScalarWhereInput[]
  }

  export type WarningUpdateManyWithoutGuildNestedInput = {
    create?: XOR<WarningCreateWithoutGuildInput, WarningUncheckedCreateWithoutGuildInput> | WarningCreateWithoutGuildInput[] | WarningUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: WarningCreateOrConnectWithoutGuildInput | WarningCreateOrConnectWithoutGuildInput[]
    upsert?: WarningUpsertWithWhereUniqueWithoutGuildInput | WarningUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: WarningCreateManyGuildInputEnvelope
    set?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    disconnect?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    delete?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    connect?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    update?: WarningUpdateWithWhereUniqueWithoutGuildInput | WarningUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: WarningUpdateManyWithWhereWithoutGuildInput | WarningUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: WarningScalarWhereInput | WarningScalarWhereInput[]
  }

  export type SecurityEventUpdateManyWithoutGuildNestedInput = {
    create?: XOR<SecurityEventCreateWithoutGuildInput, SecurityEventUncheckedCreateWithoutGuildInput> | SecurityEventCreateWithoutGuildInput[] | SecurityEventUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: SecurityEventCreateOrConnectWithoutGuildInput | SecurityEventCreateOrConnectWithoutGuildInput[]
    upsert?: SecurityEventUpsertWithWhereUniqueWithoutGuildInput | SecurityEventUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: SecurityEventCreateManyGuildInputEnvelope
    set?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
    disconnect?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
    delete?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
    connect?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
    update?: SecurityEventUpdateWithWhereUniqueWithoutGuildInput | SecurityEventUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: SecurityEventUpdateManyWithWhereWithoutGuildInput | SecurityEventUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: SecurityEventScalarWhereInput | SecurityEventScalarWhereInput[]
  }

  export type RaidEventUpdateManyWithoutGuildNestedInput = {
    create?: XOR<RaidEventCreateWithoutGuildInput, RaidEventUncheckedCreateWithoutGuildInput> | RaidEventCreateWithoutGuildInput[] | RaidEventUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: RaidEventCreateOrConnectWithoutGuildInput | RaidEventCreateOrConnectWithoutGuildInput[]
    upsert?: RaidEventUpsertWithWhereUniqueWithoutGuildInput | RaidEventUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: RaidEventCreateManyGuildInputEnvelope
    set?: RaidEventWhereUniqueInput | RaidEventWhereUniqueInput[]
    disconnect?: RaidEventWhereUniqueInput | RaidEventWhereUniqueInput[]
    delete?: RaidEventWhereUniqueInput | RaidEventWhereUniqueInput[]
    connect?: RaidEventWhereUniqueInput | RaidEventWhereUniqueInput[]
    update?: RaidEventUpdateWithWhereUniqueWithoutGuildInput | RaidEventUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: RaidEventUpdateManyWithWhereWithoutGuildInput | RaidEventUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: RaidEventScalarWhereInput | RaidEventScalarWhereInput[]
  }

  export type MemberSnapshotUpdateManyWithoutGuildNestedInput = {
    create?: XOR<MemberSnapshotCreateWithoutGuildInput, MemberSnapshotUncheckedCreateWithoutGuildInput> | MemberSnapshotCreateWithoutGuildInput[] | MemberSnapshotUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: MemberSnapshotCreateOrConnectWithoutGuildInput | MemberSnapshotCreateOrConnectWithoutGuildInput[]
    upsert?: MemberSnapshotUpsertWithWhereUniqueWithoutGuildInput | MemberSnapshotUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: MemberSnapshotCreateManyGuildInputEnvelope
    set?: MemberSnapshotWhereUniqueInput | MemberSnapshotWhereUniqueInput[]
    disconnect?: MemberSnapshotWhereUniqueInput | MemberSnapshotWhereUniqueInput[]
    delete?: MemberSnapshotWhereUniqueInput | MemberSnapshotWhereUniqueInput[]
    connect?: MemberSnapshotWhereUniqueInput | MemberSnapshotWhereUniqueInput[]
    update?: MemberSnapshotUpdateWithWhereUniqueWithoutGuildInput | MemberSnapshotUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: MemberSnapshotUpdateManyWithWhereWithoutGuildInput | MemberSnapshotUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: MemberSnapshotScalarWhereInput | MemberSnapshotScalarWhereInput[]
  }

  export type MessageActivityUpdateManyWithoutGuildNestedInput = {
    create?: XOR<MessageActivityCreateWithoutGuildInput, MessageActivityUncheckedCreateWithoutGuildInput> | MessageActivityCreateWithoutGuildInput[] | MessageActivityUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: MessageActivityCreateOrConnectWithoutGuildInput | MessageActivityCreateOrConnectWithoutGuildInput[]
    upsert?: MessageActivityUpsertWithWhereUniqueWithoutGuildInput | MessageActivityUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: MessageActivityCreateManyGuildInputEnvelope
    set?: MessageActivityWhereUniqueInput | MessageActivityWhereUniqueInput[]
    disconnect?: MessageActivityWhereUniqueInput | MessageActivityWhereUniqueInput[]
    delete?: MessageActivityWhereUniqueInput | MessageActivityWhereUniqueInput[]
    connect?: MessageActivityWhereUniqueInput | MessageActivityWhereUniqueInput[]
    update?: MessageActivityUpdateWithWhereUniqueWithoutGuildInput | MessageActivityUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: MessageActivityUpdateManyWithWhereWithoutGuildInput | MessageActivityUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: MessageActivityScalarWhereInput | MessageActivityScalarWhereInput[]
  }

  export type GuildSettingUncheckedUpdateOneWithoutGuildNestedInput = {
    create?: XOR<GuildSettingCreateWithoutGuildInput, GuildSettingUncheckedCreateWithoutGuildInput>
    connectOrCreate?: GuildSettingCreateOrConnectWithoutGuildInput
    upsert?: GuildSettingUpsertWithoutGuildInput
    disconnect?: GuildSettingWhereInput | boolean
    delete?: GuildSettingWhereInput | boolean
    connect?: GuildSettingWhereUniqueInput
    update?: XOR<XOR<GuildSettingUpdateToOneWithWhereWithoutGuildInput, GuildSettingUpdateWithoutGuildInput>, GuildSettingUncheckedUpdateWithoutGuildInput>
  }

  export type ModerationCaseUncheckedUpdateManyWithoutGuildNestedInput = {
    create?: XOR<ModerationCaseCreateWithoutGuildInput, ModerationCaseUncheckedCreateWithoutGuildInput> | ModerationCaseCreateWithoutGuildInput[] | ModerationCaseUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: ModerationCaseCreateOrConnectWithoutGuildInput | ModerationCaseCreateOrConnectWithoutGuildInput[]
    upsert?: ModerationCaseUpsertWithWhereUniqueWithoutGuildInput | ModerationCaseUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: ModerationCaseCreateManyGuildInputEnvelope
    set?: ModerationCaseWhereUniqueInput | ModerationCaseWhereUniqueInput[]
    disconnect?: ModerationCaseWhereUniqueInput | ModerationCaseWhereUniqueInput[]
    delete?: ModerationCaseWhereUniqueInput | ModerationCaseWhereUniqueInput[]
    connect?: ModerationCaseWhereUniqueInput | ModerationCaseWhereUniqueInput[]
    update?: ModerationCaseUpdateWithWhereUniqueWithoutGuildInput | ModerationCaseUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: ModerationCaseUpdateManyWithWhereWithoutGuildInput | ModerationCaseUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: ModerationCaseScalarWhereInput | ModerationCaseScalarWhereInput[]
  }

  export type WarningUncheckedUpdateManyWithoutGuildNestedInput = {
    create?: XOR<WarningCreateWithoutGuildInput, WarningUncheckedCreateWithoutGuildInput> | WarningCreateWithoutGuildInput[] | WarningUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: WarningCreateOrConnectWithoutGuildInput | WarningCreateOrConnectWithoutGuildInput[]
    upsert?: WarningUpsertWithWhereUniqueWithoutGuildInput | WarningUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: WarningCreateManyGuildInputEnvelope
    set?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    disconnect?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    delete?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    connect?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    update?: WarningUpdateWithWhereUniqueWithoutGuildInput | WarningUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: WarningUpdateManyWithWhereWithoutGuildInput | WarningUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: WarningScalarWhereInput | WarningScalarWhereInput[]
  }

  export type SecurityEventUncheckedUpdateManyWithoutGuildNestedInput = {
    create?: XOR<SecurityEventCreateWithoutGuildInput, SecurityEventUncheckedCreateWithoutGuildInput> | SecurityEventCreateWithoutGuildInput[] | SecurityEventUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: SecurityEventCreateOrConnectWithoutGuildInput | SecurityEventCreateOrConnectWithoutGuildInput[]
    upsert?: SecurityEventUpsertWithWhereUniqueWithoutGuildInput | SecurityEventUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: SecurityEventCreateManyGuildInputEnvelope
    set?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
    disconnect?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
    delete?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
    connect?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
    update?: SecurityEventUpdateWithWhereUniqueWithoutGuildInput | SecurityEventUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: SecurityEventUpdateManyWithWhereWithoutGuildInput | SecurityEventUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: SecurityEventScalarWhereInput | SecurityEventScalarWhereInput[]
  }

  export type RaidEventUncheckedUpdateManyWithoutGuildNestedInput = {
    create?: XOR<RaidEventCreateWithoutGuildInput, RaidEventUncheckedCreateWithoutGuildInput> | RaidEventCreateWithoutGuildInput[] | RaidEventUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: RaidEventCreateOrConnectWithoutGuildInput | RaidEventCreateOrConnectWithoutGuildInput[]
    upsert?: RaidEventUpsertWithWhereUniqueWithoutGuildInput | RaidEventUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: RaidEventCreateManyGuildInputEnvelope
    set?: RaidEventWhereUniqueInput | RaidEventWhereUniqueInput[]
    disconnect?: RaidEventWhereUniqueInput | RaidEventWhereUniqueInput[]
    delete?: RaidEventWhereUniqueInput | RaidEventWhereUniqueInput[]
    connect?: RaidEventWhereUniqueInput | RaidEventWhereUniqueInput[]
    update?: RaidEventUpdateWithWhereUniqueWithoutGuildInput | RaidEventUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: RaidEventUpdateManyWithWhereWithoutGuildInput | RaidEventUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: RaidEventScalarWhereInput | RaidEventScalarWhereInput[]
  }

  export type MemberSnapshotUncheckedUpdateManyWithoutGuildNestedInput = {
    create?: XOR<MemberSnapshotCreateWithoutGuildInput, MemberSnapshotUncheckedCreateWithoutGuildInput> | MemberSnapshotCreateWithoutGuildInput[] | MemberSnapshotUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: MemberSnapshotCreateOrConnectWithoutGuildInput | MemberSnapshotCreateOrConnectWithoutGuildInput[]
    upsert?: MemberSnapshotUpsertWithWhereUniqueWithoutGuildInput | MemberSnapshotUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: MemberSnapshotCreateManyGuildInputEnvelope
    set?: MemberSnapshotWhereUniqueInput | MemberSnapshotWhereUniqueInput[]
    disconnect?: MemberSnapshotWhereUniqueInput | MemberSnapshotWhereUniqueInput[]
    delete?: MemberSnapshotWhereUniqueInput | MemberSnapshotWhereUniqueInput[]
    connect?: MemberSnapshotWhereUniqueInput | MemberSnapshotWhereUniqueInput[]
    update?: MemberSnapshotUpdateWithWhereUniqueWithoutGuildInput | MemberSnapshotUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: MemberSnapshotUpdateManyWithWhereWithoutGuildInput | MemberSnapshotUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: MemberSnapshotScalarWhereInput | MemberSnapshotScalarWhereInput[]
  }

  export type MessageActivityUncheckedUpdateManyWithoutGuildNestedInput = {
    create?: XOR<MessageActivityCreateWithoutGuildInput, MessageActivityUncheckedCreateWithoutGuildInput> | MessageActivityCreateWithoutGuildInput[] | MessageActivityUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: MessageActivityCreateOrConnectWithoutGuildInput | MessageActivityCreateOrConnectWithoutGuildInput[]
    upsert?: MessageActivityUpsertWithWhereUniqueWithoutGuildInput | MessageActivityUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: MessageActivityCreateManyGuildInputEnvelope
    set?: MessageActivityWhereUniqueInput | MessageActivityWhereUniqueInput[]
    disconnect?: MessageActivityWhereUniqueInput | MessageActivityWhereUniqueInput[]
    delete?: MessageActivityWhereUniqueInput | MessageActivityWhereUniqueInput[]
    connect?: MessageActivityWhereUniqueInput | MessageActivityWhereUniqueInput[]
    update?: MessageActivityUpdateWithWhereUniqueWithoutGuildInput | MessageActivityUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: MessageActivityUpdateManyWithWhereWithoutGuildInput | MessageActivityUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: MessageActivityScalarWhereInput | MessageActivityScalarWhereInput[]
  }

  export type GuildCreateNestedOneWithoutSettingsInput = {
    create?: XOR<GuildCreateWithoutSettingsInput, GuildUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: GuildCreateOrConnectWithoutSettingsInput
    connect?: GuildWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type GuildUpdateOneRequiredWithoutSettingsNestedInput = {
    create?: XOR<GuildCreateWithoutSettingsInput, GuildUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: GuildCreateOrConnectWithoutSettingsInput
    upsert?: GuildUpsertWithoutSettingsInput
    connect?: GuildWhereUniqueInput
    update?: XOR<XOR<GuildUpdateToOneWithWhereWithoutSettingsInput, GuildUpdateWithoutSettingsInput>, GuildUncheckedUpdateWithoutSettingsInput>
  }

  export type GuildCreateNestedOneWithoutCasesInput = {
    create?: XOR<GuildCreateWithoutCasesInput, GuildUncheckedCreateWithoutCasesInput>
    connectOrCreate?: GuildCreateOrConnectWithoutCasesInput
    connect?: GuildWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCasesInput = {
    create?: XOR<UserCreateWithoutCasesInput, UserUncheckedCreateWithoutCasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCasesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutModeratedInput = {
    create?: XOR<UserCreateWithoutModeratedInput, UserUncheckedCreateWithoutModeratedInput>
    connectOrCreate?: UserCreateOrConnectWithoutModeratedInput
    connect?: UserWhereUniqueInput
  }

  export type GuildUpdateOneRequiredWithoutCasesNestedInput = {
    create?: XOR<GuildCreateWithoutCasesInput, GuildUncheckedCreateWithoutCasesInput>
    connectOrCreate?: GuildCreateOrConnectWithoutCasesInput
    upsert?: GuildUpsertWithoutCasesInput
    connect?: GuildWhereUniqueInput
    update?: XOR<XOR<GuildUpdateToOneWithWhereWithoutCasesInput, GuildUpdateWithoutCasesInput>, GuildUncheckedUpdateWithoutCasesInput>
  }

  export type UserUpdateOneRequiredWithoutCasesNestedInput = {
    create?: XOR<UserCreateWithoutCasesInput, UserUncheckedCreateWithoutCasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCasesInput
    upsert?: UserUpsertWithoutCasesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCasesInput, UserUpdateWithoutCasesInput>, UserUncheckedUpdateWithoutCasesInput>
  }

  export type UserUpdateOneRequiredWithoutModeratedNestedInput = {
    create?: XOR<UserCreateWithoutModeratedInput, UserUncheckedCreateWithoutModeratedInput>
    connectOrCreate?: UserCreateOrConnectWithoutModeratedInput
    upsert?: UserUpsertWithoutModeratedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutModeratedInput, UserUpdateWithoutModeratedInput>, UserUncheckedUpdateWithoutModeratedInput>
  }

  export type GuildCreateNestedOneWithoutWarningsInput = {
    create?: XOR<GuildCreateWithoutWarningsInput, GuildUncheckedCreateWithoutWarningsInput>
    connectOrCreate?: GuildCreateOrConnectWithoutWarningsInput
    connect?: GuildWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutWarningsInput = {
    create?: XOR<UserCreateWithoutWarningsInput, UserUncheckedCreateWithoutWarningsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWarningsInput
    connect?: UserWhereUniqueInput
  }

  export type GuildUpdateOneRequiredWithoutWarningsNestedInput = {
    create?: XOR<GuildCreateWithoutWarningsInput, GuildUncheckedCreateWithoutWarningsInput>
    connectOrCreate?: GuildCreateOrConnectWithoutWarningsInput
    upsert?: GuildUpsertWithoutWarningsInput
    connect?: GuildWhereUniqueInput
    update?: XOR<XOR<GuildUpdateToOneWithWhereWithoutWarningsInput, GuildUpdateWithoutWarningsInput>, GuildUncheckedUpdateWithoutWarningsInput>
  }

  export type UserUpdateOneRequiredWithoutWarningsNestedInput = {
    create?: XOR<UserCreateWithoutWarningsInput, UserUncheckedCreateWithoutWarningsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWarningsInput
    upsert?: UserUpsertWithoutWarningsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWarningsInput, UserUpdateWithoutWarningsInput>, UserUncheckedUpdateWithoutWarningsInput>
  }

  export type GuildCreateNestedOneWithoutSecurityEventsInput = {
    create?: XOR<GuildCreateWithoutSecurityEventsInput, GuildUncheckedCreateWithoutSecurityEventsInput>
    connectOrCreate?: GuildCreateOrConnectWithoutSecurityEventsInput
    connect?: GuildWhereUniqueInput
  }

  export type GuildUpdateOneRequiredWithoutSecurityEventsNestedInput = {
    create?: XOR<GuildCreateWithoutSecurityEventsInput, GuildUncheckedCreateWithoutSecurityEventsInput>
    connectOrCreate?: GuildCreateOrConnectWithoutSecurityEventsInput
    upsert?: GuildUpsertWithoutSecurityEventsInput
    connect?: GuildWhereUniqueInput
    update?: XOR<XOR<GuildUpdateToOneWithWhereWithoutSecurityEventsInput, GuildUpdateWithoutSecurityEventsInput>, GuildUncheckedUpdateWithoutSecurityEventsInput>
  }

  export type GuildCreateNestedOneWithoutRaidEventsInput = {
    create?: XOR<GuildCreateWithoutRaidEventsInput, GuildUncheckedCreateWithoutRaidEventsInput>
    connectOrCreate?: GuildCreateOrConnectWithoutRaidEventsInput
    connect?: GuildWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type GuildUpdateOneRequiredWithoutRaidEventsNestedInput = {
    create?: XOR<GuildCreateWithoutRaidEventsInput, GuildUncheckedCreateWithoutRaidEventsInput>
    connectOrCreate?: GuildCreateOrConnectWithoutRaidEventsInput
    upsert?: GuildUpsertWithoutRaidEventsInput
    connect?: GuildWhereUniqueInput
    update?: XOR<XOR<GuildUpdateToOneWithWhereWithoutRaidEventsInput, GuildUpdateWithoutRaidEventsInput>, GuildUncheckedUpdateWithoutRaidEventsInput>
  }

  export type GuildCreateNestedOneWithoutMemberSnapshotsInput = {
    create?: XOR<GuildCreateWithoutMemberSnapshotsInput, GuildUncheckedCreateWithoutMemberSnapshotsInput>
    connectOrCreate?: GuildCreateOrConnectWithoutMemberSnapshotsInput
    connect?: GuildWhereUniqueInput
  }

  export type GuildUpdateOneRequiredWithoutMemberSnapshotsNestedInput = {
    create?: XOR<GuildCreateWithoutMemberSnapshotsInput, GuildUncheckedCreateWithoutMemberSnapshotsInput>
    connectOrCreate?: GuildCreateOrConnectWithoutMemberSnapshotsInput
    upsert?: GuildUpsertWithoutMemberSnapshotsInput
    connect?: GuildWhereUniqueInput
    update?: XOR<XOR<GuildUpdateToOneWithWhereWithoutMemberSnapshotsInput, GuildUpdateWithoutMemberSnapshotsInput>, GuildUncheckedUpdateWithoutMemberSnapshotsInput>
  }

  export type GuildCreateNestedOneWithoutMessageActivityInput = {
    create?: XOR<GuildCreateWithoutMessageActivityInput, GuildUncheckedCreateWithoutMessageActivityInput>
    connectOrCreate?: GuildCreateOrConnectWithoutMessageActivityInput
    connect?: GuildWhereUniqueInput
  }

  export type GuildUpdateOneRequiredWithoutMessageActivityNestedInput = {
    create?: XOR<GuildCreateWithoutMessageActivityInput, GuildUncheckedCreateWithoutMessageActivityInput>
    connectOrCreate?: GuildCreateOrConnectWithoutMessageActivityInput
    upsert?: GuildUpsertWithoutMessageActivityInput
    connect?: GuildWhereUniqueInput
    update?: XOR<XOR<GuildUpdateToOneWithWhereWithoutMessageActivityInput, GuildUpdateWithoutMessageActivityInput>, GuildUncheckedUpdateWithoutMessageActivityInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ModerationCaseCreateWithoutUserInput = {
    type: string
    reason?: string | null
    createdAt?: Date | string
    guild: GuildCreateNestedOneWithoutCasesInput
    moderator: UserCreateNestedOneWithoutModeratedInput
  }

  export type ModerationCaseUncheckedCreateWithoutUserInput = {
    id?: number
    guildId: string
    moderatorId: string
    type: string
    reason?: string | null
    createdAt?: Date | string
  }

  export type ModerationCaseCreateOrConnectWithoutUserInput = {
    where: ModerationCaseWhereUniqueInput
    create: XOR<ModerationCaseCreateWithoutUserInput, ModerationCaseUncheckedCreateWithoutUserInput>
  }

  export type ModerationCaseCreateManyUserInputEnvelope = {
    data: ModerationCaseCreateManyUserInput | ModerationCaseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ModerationCaseCreateWithoutModeratorInput = {
    type: string
    reason?: string | null
    createdAt?: Date | string
    guild: GuildCreateNestedOneWithoutCasesInput
    user: UserCreateNestedOneWithoutCasesInput
  }

  export type ModerationCaseUncheckedCreateWithoutModeratorInput = {
    id?: number
    guildId: string
    userId: string
    type: string
    reason?: string | null
    createdAt?: Date | string
  }

  export type ModerationCaseCreateOrConnectWithoutModeratorInput = {
    where: ModerationCaseWhereUniqueInput
    create: XOR<ModerationCaseCreateWithoutModeratorInput, ModerationCaseUncheckedCreateWithoutModeratorInput>
  }

  export type ModerationCaseCreateManyModeratorInputEnvelope = {
    data: ModerationCaseCreateManyModeratorInput | ModerationCaseCreateManyModeratorInput[]
    skipDuplicates?: boolean
  }

  export type WarningCreateWithoutUserInput = {
    reason: string
    createdAt?: Date | string
    guild: GuildCreateNestedOneWithoutWarningsInput
  }

  export type WarningUncheckedCreateWithoutUserInput = {
    id?: number
    guildId: string
    reason: string
    createdAt?: Date | string
  }

  export type WarningCreateOrConnectWithoutUserInput = {
    where: WarningWhereUniqueInput
    create: XOR<WarningCreateWithoutUserInput, WarningUncheckedCreateWithoutUserInput>
  }

  export type WarningCreateManyUserInputEnvelope = {
    data: WarningCreateManyUserInput | WarningCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ModerationCaseUpsertWithWhereUniqueWithoutUserInput = {
    where: ModerationCaseWhereUniqueInput
    update: XOR<ModerationCaseUpdateWithoutUserInput, ModerationCaseUncheckedUpdateWithoutUserInput>
    create: XOR<ModerationCaseCreateWithoutUserInput, ModerationCaseUncheckedCreateWithoutUserInput>
  }

  export type ModerationCaseUpdateWithWhereUniqueWithoutUserInput = {
    where: ModerationCaseWhereUniqueInput
    data: XOR<ModerationCaseUpdateWithoutUserInput, ModerationCaseUncheckedUpdateWithoutUserInput>
  }

  export type ModerationCaseUpdateManyWithWhereWithoutUserInput = {
    where: ModerationCaseScalarWhereInput
    data: XOR<ModerationCaseUpdateManyMutationInput, ModerationCaseUncheckedUpdateManyWithoutUserInput>
  }

  export type ModerationCaseScalarWhereInput = {
    AND?: ModerationCaseScalarWhereInput | ModerationCaseScalarWhereInput[]
    OR?: ModerationCaseScalarWhereInput[]
    NOT?: ModerationCaseScalarWhereInput | ModerationCaseScalarWhereInput[]
    id?: IntFilter<"ModerationCase"> | number
    guildId?: StringFilter<"ModerationCase"> | string
    userId?: StringFilter<"ModerationCase"> | string
    moderatorId?: StringFilter<"ModerationCase"> | string
    type?: StringFilter<"ModerationCase"> | string
    reason?: StringNullableFilter<"ModerationCase"> | string | null
    createdAt?: DateTimeFilter<"ModerationCase"> | Date | string
  }

  export type ModerationCaseUpsertWithWhereUniqueWithoutModeratorInput = {
    where: ModerationCaseWhereUniqueInput
    update: XOR<ModerationCaseUpdateWithoutModeratorInput, ModerationCaseUncheckedUpdateWithoutModeratorInput>
    create: XOR<ModerationCaseCreateWithoutModeratorInput, ModerationCaseUncheckedCreateWithoutModeratorInput>
  }

  export type ModerationCaseUpdateWithWhereUniqueWithoutModeratorInput = {
    where: ModerationCaseWhereUniqueInput
    data: XOR<ModerationCaseUpdateWithoutModeratorInput, ModerationCaseUncheckedUpdateWithoutModeratorInput>
  }

  export type ModerationCaseUpdateManyWithWhereWithoutModeratorInput = {
    where: ModerationCaseScalarWhereInput
    data: XOR<ModerationCaseUpdateManyMutationInput, ModerationCaseUncheckedUpdateManyWithoutModeratorInput>
  }

  export type WarningUpsertWithWhereUniqueWithoutUserInput = {
    where: WarningWhereUniqueInput
    update: XOR<WarningUpdateWithoutUserInput, WarningUncheckedUpdateWithoutUserInput>
    create: XOR<WarningCreateWithoutUserInput, WarningUncheckedCreateWithoutUserInput>
  }

  export type WarningUpdateWithWhereUniqueWithoutUserInput = {
    where: WarningWhereUniqueInput
    data: XOR<WarningUpdateWithoutUserInput, WarningUncheckedUpdateWithoutUserInput>
  }

  export type WarningUpdateManyWithWhereWithoutUserInput = {
    where: WarningScalarWhereInput
    data: XOR<WarningUpdateManyMutationInput, WarningUncheckedUpdateManyWithoutUserInput>
  }

  export type WarningScalarWhereInput = {
    AND?: WarningScalarWhereInput | WarningScalarWhereInput[]
    OR?: WarningScalarWhereInput[]
    NOT?: WarningScalarWhereInput | WarningScalarWhereInput[]
    id?: IntFilter<"Warning"> | number
    guildId?: StringFilter<"Warning"> | string
    userId?: StringFilter<"Warning"> | string
    reason?: StringFilter<"Warning"> | string
    createdAt?: DateTimeFilter<"Warning"> | Date | string
  }

  export type GuildSettingCreateWithoutGuildInput = {
    antiRaidEnabled?: boolean
    antiNukeEnabled?: boolean
    antiSpamEnabled?: boolean
    antiMassMention?: boolean
    antiWebhookAbuse?: boolean
    scamDetection?: boolean
    autoLockdown?: boolean
    verificationSystem?: boolean
    aiModerationEnabled?: boolean
    aiLogChannelId?: string | null
    aiActionThreshold?: number
    modLogChannelId?: string | null
    securityLogChannelId?: string | null
  }

  export type GuildSettingUncheckedCreateWithoutGuildInput = {
    antiRaidEnabled?: boolean
    antiNukeEnabled?: boolean
    antiSpamEnabled?: boolean
    antiMassMention?: boolean
    antiWebhookAbuse?: boolean
    scamDetection?: boolean
    autoLockdown?: boolean
    verificationSystem?: boolean
    aiModerationEnabled?: boolean
    aiLogChannelId?: string | null
    aiActionThreshold?: number
    modLogChannelId?: string | null
    securityLogChannelId?: string | null
  }

  export type GuildSettingCreateOrConnectWithoutGuildInput = {
    where: GuildSettingWhereUniqueInput
    create: XOR<GuildSettingCreateWithoutGuildInput, GuildSettingUncheckedCreateWithoutGuildInput>
  }

  export type ModerationCaseCreateWithoutGuildInput = {
    type: string
    reason?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCasesInput
    moderator: UserCreateNestedOneWithoutModeratedInput
  }

  export type ModerationCaseUncheckedCreateWithoutGuildInput = {
    id?: number
    userId: string
    moderatorId: string
    type: string
    reason?: string | null
    createdAt?: Date | string
  }

  export type ModerationCaseCreateOrConnectWithoutGuildInput = {
    where: ModerationCaseWhereUniqueInput
    create: XOR<ModerationCaseCreateWithoutGuildInput, ModerationCaseUncheckedCreateWithoutGuildInput>
  }

  export type ModerationCaseCreateManyGuildInputEnvelope = {
    data: ModerationCaseCreateManyGuildInput | ModerationCaseCreateManyGuildInput[]
    skipDuplicates?: boolean
  }

  export type WarningCreateWithoutGuildInput = {
    reason: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWarningsInput
  }

  export type WarningUncheckedCreateWithoutGuildInput = {
    id?: number
    userId: string
    reason: string
    createdAt?: Date | string
  }

  export type WarningCreateOrConnectWithoutGuildInput = {
    where: WarningWhereUniqueInput
    create: XOR<WarningCreateWithoutGuildInput, WarningUncheckedCreateWithoutGuildInput>
  }

  export type WarningCreateManyGuildInputEnvelope = {
    data: WarningCreateManyGuildInput | WarningCreateManyGuildInput[]
    skipDuplicates?: boolean
  }

  export type SecurityEventCreateWithoutGuildInput = {
    type: string
    severity: string
    description: string
    createdAt?: Date | string
  }

  export type SecurityEventUncheckedCreateWithoutGuildInput = {
    id?: number
    type: string
    severity: string
    description: string
    createdAt?: Date | string
  }

  export type SecurityEventCreateOrConnectWithoutGuildInput = {
    where: SecurityEventWhereUniqueInput
    create: XOR<SecurityEventCreateWithoutGuildInput, SecurityEventUncheckedCreateWithoutGuildInput>
  }

  export type SecurityEventCreateManyGuildInputEnvelope = {
    data: SecurityEventCreateManyGuildInput | SecurityEventCreateManyGuildInput[]
    skipDuplicates?: boolean
  }

  export type RaidEventCreateWithoutGuildInput = {
    status: string
    startedAt?: Date | string
    endedAt?: Date | string | null
  }

  export type RaidEventUncheckedCreateWithoutGuildInput = {
    id?: number
    status: string
    startedAt?: Date | string
    endedAt?: Date | string | null
  }

  export type RaidEventCreateOrConnectWithoutGuildInput = {
    where: RaidEventWhereUniqueInput
    create: XOR<RaidEventCreateWithoutGuildInput, RaidEventUncheckedCreateWithoutGuildInput>
  }

  export type RaidEventCreateManyGuildInputEnvelope = {
    data: RaidEventCreateManyGuildInput | RaidEventCreateManyGuildInput[]
    skipDuplicates?: boolean
  }

  export type MemberSnapshotCreateWithoutGuildInput = {
    count: number
    timestamp?: Date | string
  }

  export type MemberSnapshotUncheckedCreateWithoutGuildInput = {
    id?: number
    count: number
    timestamp?: Date | string
  }

  export type MemberSnapshotCreateOrConnectWithoutGuildInput = {
    where: MemberSnapshotWhereUniqueInput
    create: XOR<MemberSnapshotCreateWithoutGuildInput, MemberSnapshotUncheckedCreateWithoutGuildInput>
  }

  export type MemberSnapshotCreateManyGuildInputEnvelope = {
    data: MemberSnapshotCreateManyGuildInput | MemberSnapshotCreateManyGuildInput[]
    skipDuplicates?: boolean
  }

  export type MessageActivityCreateWithoutGuildInput = {
    channelId: string
    count?: number
    timestamp?: Date | string
  }

  export type MessageActivityUncheckedCreateWithoutGuildInput = {
    id?: number
    channelId: string
    count?: number
    timestamp?: Date | string
  }

  export type MessageActivityCreateOrConnectWithoutGuildInput = {
    where: MessageActivityWhereUniqueInput
    create: XOR<MessageActivityCreateWithoutGuildInput, MessageActivityUncheckedCreateWithoutGuildInput>
  }

  export type MessageActivityCreateManyGuildInputEnvelope = {
    data: MessageActivityCreateManyGuildInput | MessageActivityCreateManyGuildInput[]
    skipDuplicates?: boolean
  }

  export type GuildSettingUpsertWithoutGuildInput = {
    update: XOR<GuildSettingUpdateWithoutGuildInput, GuildSettingUncheckedUpdateWithoutGuildInput>
    create: XOR<GuildSettingCreateWithoutGuildInput, GuildSettingUncheckedCreateWithoutGuildInput>
    where?: GuildSettingWhereInput
  }

  export type GuildSettingUpdateToOneWithWhereWithoutGuildInput = {
    where?: GuildSettingWhereInput
    data: XOR<GuildSettingUpdateWithoutGuildInput, GuildSettingUncheckedUpdateWithoutGuildInput>
  }

  export type GuildSettingUpdateWithoutGuildInput = {
    antiRaidEnabled?: BoolFieldUpdateOperationsInput | boolean
    antiNukeEnabled?: BoolFieldUpdateOperationsInput | boolean
    antiSpamEnabled?: BoolFieldUpdateOperationsInput | boolean
    antiMassMention?: BoolFieldUpdateOperationsInput | boolean
    antiWebhookAbuse?: BoolFieldUpdateOperationsInput | boolean
    scamDetection?: BoolFieldUpdateOperationsInput | boolean
    autoLockdown?: BoolFieldUpdateOperationsInput | boolean
    verificationSystem?: BoolFieldUpdateOperationsInput | boolean
    aiModerationEnabled?: BoolFieldUpdateOperationsInput | boolean
    aiLogChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    aiActionThreshold?: IntFieldUpdateOperationsInput | number
    modLogChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    securityLogChannelId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GuildSettingUncheckedUpdateWithoutGuildInput = {
    antiRaidEnabled?: BoolFieldUpdateOperationsInput | boolean
    antiNukeEnabled?: BoolFieldUpdateOperationsInput | boolean
    antiSpamEnabled?: BoolFieldUpdateOperationsInput | boolean
    antiMassMention?: BoolFieldUpdateOperationsInput | boolean
    antiWebhookAbuse?: BoolFieldUpdateOperationsInput | boolean
    scamDetection?: BoolFieldUpdateOperationsInput | boolean
    autoLockdown?: BoolFieldUpdateOperationsInput | boolean
    verificationSystem?: BoolFieldUpdateOperationsInput | boolean
    aiModerationEnabled?: BoolFieldUpdateOperationsInput | boolean
    aiLogChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    aiActionThreshold?: IntFieldUpdateOperationsInput | number
    modLogChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    securityLogChannelId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ModerationCaseUpsertWithWhereUniqueWithoutGuildInput = {
    where: ModerationCaseWhereUniqueInput
    update: XOR<ModerationCaseUpdateWithoutGuildInput, ModerationCaseUncheckedUpdateWithoutGuildInput>
    create: XOR<ModerationCaseCreateWithoutGuildInput, ModerationCaseUncheckedCreateWithoutGuildInput>
  }

  export type ModerationCaseUpdateWithWhereUniqueWithoutGuildInput = {
    where: ModerationCaseWhereUniqueInput
    data: XOR<ModerationCaseUpdateWithoutGuildInput, ModerationCaseUncheckedUpdateWithoutGuildInput>
  }

  export type ModerationCaseUpdateManyWithWhereWithoutGuildInput = {
    where: ModerationCaseScalarWhereInput
    data: XOR<ModerationCaseUpdateManyMutationInput, ModerationCaseUncheckedUpdateManyWithoutGuildInput>
  }

  export type WarningUpsertWithWhereUniqueWithoutGuildInput = {
    where: WarningWhereUniqueInput
    update: XOR<WarningUpdateWithoutGuildInput, WarningUncheckedUpdateWithoutGuildInput>
    create: XOR<WarningCreateWithoutGuildInput, WarningUncheckedCreateWithoutGuildInput>
  }

  export type WarningUpdateWithWhereUniqueWithoutGuildInput = {
    where: WarningWhereUniqueInput
    data: XOR<WarningUpdateWithoutGuildInput, WarningUncheckedUpdateWithoutGuildInput>
  }

  export type WarningUpdateManyWithWhereWithoutGuildInput = {
    where: WarningScalarWhereInput
    data: XOR<WarningUpdateManyMutationInput, WarningUncheckedUpdateManyWithoutGuildInput>
  }

  export type SecurityEventUpsertWithWhereUniqueWithoutGuildInput = {
    where: SecurityEventWhereUniqueInput
    update: XOR<SecurityEventUpdateWithoutGuildInput, SecurityEventUncheckedUpdateWithoutGuildInput>
    create: XOR<SecurityEventCreateWithoutGuildInput, SecurityEventUncheckedCreateWithoutGuildInput>
  }

  export type SecurityEventUpdateWithWhereUniqueWithoutGuildInput = {
    where: SecurityEventWhereUniqueInput
    data: XOR<SecurityEventUpdateWithoutGuildInput, SecurityEventUncheckedUpdateWithoutGuildInput>
  }

  export type SecurityEventUpdateManyWithWhereWithoutGuildInput = {
    where: SecurityEventScalarWhereInput
    data: XOR<SecurityEventUpdateManyMutationInput, SecurityEventUncheckedUpdateManyWithoutGuildInput>
  }

  export type SecurityEventScalarWhereInput = {
    AND?: SecurityEventScalarWhereInput | SecurityEventScalarWhereInput[]
    OR?: SecurityEventScalarWhereInput[]
    NOT?: SecurityEventScalarWhereInput | SecurityEventScalarWhereInput[]
    id?: IntFilter<"SecurityEvent"> | number
    guildId?: StringFilter<"SecurityEvent"> | string
    type?: StringFilter<"SecurityEvent"> | string
    severity?: StringFilter<"SecurityEvent"> | string
    description?: StringFilter<"SecurityEvent"> | string
    createdAt?: DateTimeFilter<"SecurityEvent"> | Date | string
  }

  export type RaidEventUpsertWithWhereUniqueWithoutGuildInput = {
    where: RaidEventWhereUniqueInput
    update: XOR<RaidEventUpdateWithoutGuildInput, RaidEventUncheckedUpdateWithoutGuildInput>
    create: XOR<RaidEventCreateWithoutGuildInput, RaidEventUncheckedCreateWithoutGuildInput>
  }

  export type RaidEventUpdateWithWhereUniqueWithoutGuildInput = {
    where: RaidEventWhereUniqueInput
    data: XOR<RaidEventUpdateWithoutGuildInput, RaidEventUncheckedUpdateWithoutGuildInput>
  }

  export type RaidEventUpdateManyWithWhereWithoutGuildInput = {
    where: RaidEventScalarWhereInput
    data: XOR<RaidEventUpdateManyMutationInput, RaidEventUncheckedUpdateManyWithoutGuildInput>
  }

  export type RaidEventScalarWhereInput = {
    AND?: RaidEventScalarWhereInput | RaidEventScalarWhereInput[]
    OR?: RaidEventScalarWhereInput[]
    NOT?: RaidEventScalarWhereInput | RaidEventScalarWhereInput[]
    id?: IntFilter<"RaidEvent"> | number
    guildId?: StringFilter<"RaidEvent"> | string
    status?: StringFilter<"RaidEvent"> | string
    startedAt?: DateTimeFilter<"RaidEvent"> | Date | string
    endedAt?: DateTimeNullableFilter<"RaidEvent"> | Date | string | null
  }

  export type MemberSnapshotUpsertWithWhereUniqueWithoutGuildInput = {
    where: MemberSnapshotWhereUniqueInput
    update: XOR<MemberSnapshotUpdateWithoutGuildInput, MemberSnapshotUncheckedUpdateWithoutGuildInput>
    create: XOR<MemberSnapshotCreateWithoutGuildInput, MemberSnapshotUncheckedCreateWithoutGuildInput>
  }

  export type MemberSnapshotUpdateWithWhereUniqueWithoutGuildInput = {
    where: MemberSnapshotWhereUniqueInput
    data: XOR<MemberSnapshotUpdateWithoutGuildInput, MemberSnapshotUncheckedUpdateWithoutGuildInput>
  }

  export type MemberSnapshotUpdateManyWithWhereWithoutGuildInput = {
    where: MemberSnapshotScalarWhereInput
    data: XOR<MemberSnapshotUpdateManyMutationInput, MemberSnapshotUncheckedUpdateManyWithoutGuildInput>
  }

  export type MemberSnapshotScalarWhereInput = {
    AND?: MemberSnapshotScalarWhereInput | MemberSnapshotScalarWhereInput[]
    OR?: MemberSnapshotScalarWhereInput[]
    NOT?: MemberSnapshotScalarWhereInput | MemberSnapshotScalarWhereInput[]
    id?: IntFilter<"MemberSnapshot"> | number
    guildId?: StringFilter<"MemberSnapshot"> | string
    count?: IntFilter<"MemberSnapshot"> | number
    timestamp?: DateTimeFilter<"MemberSnapshot"> | Date | string
  }

  export type MessageActivityUpsertWithWhereUniqueWithoutGuildInput = {
    where: MessageActivityWhereUniqueInput
    update: XOR<MessageActivityUpdateWithoutGuildInput, MessageActivityUncheckedUpdateWithoutGuildInput>
    create: XOR<MessageActivityCreateWithoutGuildInput, MessageActivityUncheckedCreateWithoutGuildInput>
  }

  export type MessageActivityUpdateWithWhereUniqueWithoutGuildInput = {
    where: MessageActivityWhereUniqueInput
    data: XOR<MessageActivityUpdateWithoutGuildInput, MessageActivityUncheckedUpdateWithoutGuildInput>
  }

  export type MessageActivityUpdateManyWithWhereWithoutGuildInput = {
    where: MessageActivityScalarWhereInput
    data: XOR<MessageActivityUpdateManyMutationInput, MessageActivityUncheckedUpdateManyWithoutGuildInput>
  }

  export type MessageActivityScalarWhereInput = {
    AND?: MessageActivityScalarWhereInput | MessageActivityScalarWhereInput[]
    OR?: MessageActivityScalarWhereInput[]
    NOT?: MessageActivityScalarWhereInput | MessageActivityScalarWhereInput[]
    id?: IntFilter<"MessageActivity"> | number
    guildId?: StringFilter<"MessageActivity"> | string
    channelId?: StringFilter<"MessageActivity"> | string
    count?: IntFilter<"MessageActivity"> | number
    timestamp?: DateTimeFilter<"MessageActivity"> | Date | string
  }

  export type GuildCreateWithoutSettingsInput = {
    id: string
    name: string
    memberCount?: number
    joinedAt?: Date | string
    updatedAt?: Date | string
    cases?: ModerationCaseCreateNestedManyWithoutGuildInput
    warnings?: WarningCreateNestedManyWithoutGuildInput
    securityEvents?: SecurityEventCreateNestedManyWithoutGuildInput
    raidEvents?: RaidEventCreateNestedManyWithoutGuildInput
    memberSnapshots?: MemberSnapshotCreateNestedManyWithoutGuildInput
    messageActivity?: MessageActivityCreateNestedManyWithoutGuildInput
  }

  export type GuildUncheckedCreateWithoutSettingsInput = {
    id: string
    name: string
    memberCount?: number
    joinedAt?: Date | string
    updatedAt?: Date | string
    cases?: ModerationCaseUncheckedCreateNestedManyWithoutGuildInput
    warnings?: WarningUncheckedCreateNestedManyWithoutGuildInput
    securityEvents?: SecurityEventUncheckedCreateNestedManyWithoutGuildInput
    raidEvents?: RaidEventUncheckedCreateNestedManyWithoutGuildInput
    memberSnapshots?: MemberSnapshotUncheckedCreateNestedManyWithoutGuildInput
    messageActivity?: MessageActivityUncheckedCreateNestedManyWithoutGuildInput
  }

  export type GuildCreateOrConnectWithoutSettingsInput = {
    where: GuildWhereUniqueInput
    create: XOR<GuildCreateWithoutSettingsInput, GuildUncheckedCreateWithoutSettingsInput>
  }

  export type GuildUpsertWithoutSettingsInput = {
    update: XOR<GuildUpdateWithoutSettingsInput, GuildUncheckedUpdateWithoutSettingsInput>
    create: XOR<GuildCreateWithoutSettingsInput, GuildUncheckedCreateWithoutSettingsInput>
    where?: GuildWhereInput
  }

  export type GuildUpdateToOneWithWhereWithoutSettingsInput = {
    where?: GuildWhereInput
    data: XOR<GuildUpdateWithoutSettingsInput, GuildUncheckedUpdateWithoutSettingsInput>
  }

  export type GuildUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    memberCount?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cases?: ModerationCaseUpdateManyWithoutGuildNestedInput
    warnings?: WarningUpdateManyWithoutGuildNestedInput
    securityEvents?: SecurityEventUpdateManyWithoutGuildNestedInput
    raidEvents?: RaidEventUpdateManyWithoutGuildNestedInput
    memberSnapshots?: MemberSnapshotUpdateManyWithoutGuildNestedInput
    messageActivity?: MessageActivityUpdateManyWithoutGuildNestedInput
  }

  export type GuildUncheckedUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    memberCount?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cases?: ModerationCaseUncheckedUpdateManyWithoutGuildNestedInput
    warnings?: WarningUncheckedUpdateManyWithoutGuildNestedInput
    securityEvents?: SecurityEventUncheckedUpdateManyWithoutGuildNestedInput
    raidEvents?: RaidEventUncheckedUpdateManyWithoutGuildNestedInput
    memberSnapshots?: MemberSnapshotUncheckedUpdateManyWithoutGuildNestedInput
    messageActivity?: MessageActivityUncheckedUpdateManyWithoutGuildNestedInput
  }

  export type GuildCreateWithoutCasesInput = {
    id: string
    name: string
    memberCount?: number
    joinedAt?: Date | string
    updatedAt?: Date | string
    settings?: GuildSettingCreateNestedOneWithoutGuildInput
    warnings?: WarningCreateNestedManyWithoutGuildInput
    securityEvents?: SecurityEventCreateNestedManyWithoutGuildInput
    raidEvents?: RaidEventCreateNestedManyWithoutGuildInput
    memberSnapshots?: MemberSnapshotCreateNestedManyWithoutGuildInput
    messageActivity?: MessageActivityCreateNestedManyWithoutGuildInput
  }

  export type GuildUncheckedCreateWithoutCasesInput = {
    id: string
    name: string
    memberCount?: number
    joinedAt?: Date | string
    updatedAt?: Date | string
    settings?: GuildSettingUncheckedCreateNestedOneWithoutGuildInput
    warnings?: WarningUncheckedCreateNestedManyWithoutGuildInput
    securityEvents?: SecurityEventUncheckedCreateNestedManyWithoutGuildInput
    raidEvents?: RaidEventUncheckedCreateNestedManyWithoutGuildInput
    memberSnapshots?: MemberSnapshotUncheckedCreateNestedManyWithoutGuildInput
    messageActivity?: MessageActivityUncheckedCreateNestedManyWithoutGuildInput
  }

  export type GuildCreateOrConnectWithoutCasesInput = {
    where: GuildWhereUniqueInput
    create: XOR<GuildCreateWithoutCasesInput, GuildUncheckedCreateWithoutCasesInput>
  }

  export type UserCreateWithoutCasesInput = {
    id: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moderated?: ModerationCaseCreateNestedManyWithoutModeratorInput
    warnings?: WarningCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCasesInput = {
    id: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moderated?: ModerationCaseUncheckedCreateNestedManyWithoutModeratorInput
    warnings?: WarningUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCasesInput, UserUncheckedCreateWithoutCasesInput>
  }

  export type UserCreateWithoutModeratedInput = {
    id: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cases?: ModerationCaseCreateNestedManyWithoutUserInput
    warnings?: WarningCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutModeratedInput = {
    id: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cases?: ModerationCaseUncheckedCreateNestedManyWithoutUserInput
    warnings?: WarningUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutModeratedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutModeratedInput, UserUncheckedCreateWithoutModeratedInput>
  }

  export type GuildUpsertWithoutCasesInput = {
    update: XOR<GuildUpdateWithoutCasesInput, GuildUncheckedUpdateWithoutCasesInput>
    create: XOR<GuildCreateWithoutCasesInput, GuildUncheckedCreateWithoutCasesInput>
    where?: GuildWhereInput
  }

  export type GuildUpdateToOneWithWhereWithoutCasesInput = {
    where?: GuildWhereInput
    data: XOR<GuildUpdateWithoutCasesInput, GuildUncheckedUpdateWithoutCasesInput>
  }

  export type GuildUpdateWithoutCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    memberCount?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: GuildSettingUpdateOneWithoutGuildNestedInput
    warnings?: WarningUpdateManyWithoutGuildNestedInput
    securityEvents?: SecurityEventUpdateManyWithoutGuildNestedInput
    raidEvents?: RaidEventUpdateManyWithoutGuildNestedInput
    memberSnapshots?: MemberSnapshotUpdateManyWithoutGuildNestedInput
    messageActivity?: MessageActivityUpdateManyWithoutGuildNestedInput
  }

  export type GuildUncheckedUpdateWithoutCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    memberCount?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: GuildSettingUncheckedUpdateOneWithoutGuildNestedInput
    warnings?: WarningUncheckedUpdateManyWithoutGuildNestedInput
    securityEvents?: SecurityEventUncheckedUpdateManyWithoutGuildNestedInput
    raidEvents?: RaidEventUncheckedUpdateManyWithoutGuildNestedInput
    memberSnapshots?: MemberSnapshotUncheckedUpdateManyWithoutGuildNestedInput
    messageActivity?: MessageActivityUncheckedUpdateManyWithoutGuildNestedInput
  }

  export type UserUpsertWithoutCasesInput = {
    update: XOR<UserUpdateWithoutCasesInput, UserUncheckedUpdateWithoutCasesInput>
    create: XOR<UserCreateWithoutCasesInput, UserUncheckedCreateWithoutCasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCasesInput, UserUncheckedUpdateWithoutCasesInput>
  }

  export type UserUpdateWithoutCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moderated?: ModerationCaseUpdateManyWithoutModeratorNestedInput
    warnings?: WarningUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moderated?: ModerationCaseUncheckedUpdateManyWithoutModeratorNestedInput
    warnings?: WarningUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutModeratedInput = {
    update: XOR<UserUpdateWithoutModeratedInput, UserUncheckedUpdateWithoutModeratedInput>
    create: XOR<UserCreateWithoutModeratedInput, UserUncheckedCreateWithoutModeratedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutModeratedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutModeratedInput, UserUncheckedUpdateWithoutModeratedInput>
  }

  export type UserUpdateWithoutModeratedInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cases?: ModerationCaseUpdateManyWithoutUserNestedInput
    warnings?: WarningUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutModeratedInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cases?: ModerationCaseUncheckedUpdateManyWithoutUserNestedInput
    warnings?: WarningUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GuildCreateWithoutWarningsInput = {
    id: string
    name: string
    memberCount?: number
    joinedAt?: Date | string
    updatedAt?: Date | string
    settings?: GuildSettingCreateNestedOneWithoutGuildInput
    cases?: ModerationCaseCreateNestedManyWithoutGuildInput
    securityEvents?: SecurityEventCreateNestedManyWithoutGuildInput
    raidEvents?: RaidEventCreateNestedManyWithoutGuildInput
    memberSnapshots?: MemberSnapshotCreateNestedManyWithoutGuildInput
    messageActivity?: MessageActivityCreateNestedManyWithoutGuildInput
  }

  export type GuildUncheckedCreateWithoutWarningsInput = {
    id: string
    name: string
    memberCount?: number
    joinedAt?: Date | string
    updatedAt?: Date | string
    settings?: GuildSettingUncheckedCreateNestedOneWithoutGuildInput
    cases?: ModerationCaseUncheckedCreateNestedManyWithoutGuildInput
    securityEvents?: SecurityEventUncheckedCreateNestedManyWithoutGuildInput
    raidEvents?: RaidEventUncheckedCreateNestedManyWithoutGuildInput
    memberSnapshots?: MemberSnapshotUncheckedCreateNestedManyWithoutGuildInput
    messageActivity?: MessageActivityUncheckedCreateNestedManyWithoutGuildInput
  }

  export type GuildCreateOrConnectWithoutWarningsInput = {
    where: GuildWhereUniqueInput
    create: XOR<GuildCreateWithoutWarningsInput, GuildUncheckedCreateWithoutWarningsInput>
  }

  export type UserCreateWithoutWarningsInput = {
    id: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cases?: ModerationCaseCreateNestedManyWithoutUserInput
    moderated?: ModerationCaseCreateNestedManyWithoutModeratorInput
  }

  export type UserUncheckedCreateWithoutWarningsInput = {
    id: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cases?: ModerationCaseUncheckedCreateNestedManyWithoutUserInput
    moderated?: ModerationCaseUncheckedCreateNestedManyWithoutModeratorInput
  }

  export type UserCreateOrConnectWithoutWarningsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWarningsInput, UserUncheckedCreateWithoutWarningsInput>
  }

  export type GuildUpsertWithoutWarningsInput = {
    update: XOR<GuildUpdateWithoutWarningsInput, GuildUncheckedUpdateWithoutWarningsInput>
    create: XOR<GuildCreateWithoutWarningsInput, GuildUncheckedCreateWithoutWarningsInput>
    where?: GuildWhereInput
  }

  export type GuildUpdateToOneWithWhereWithoutWarningsInput = {
    where?: GuildWhereInput
    data: XOR<GuildUpdateWithoutWarningsInput, GuildUncheckedUpdateWithoutWarningsInput>
  }

  export type GuildUpdateWithoutWarningsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    memberCount?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: GuildSettingUpdateOneWithoutGuildNestedInput
    cases?: ModerationCaseUpdateManyWithoutGuildNestedInput
    securityEvents?: SecurityEventUpdateManyWithoutGuildNestedInput
    raidEvents?: RaidEventUpdateManyWithoutGuildNestedInput
    memberSnapshots?: MemberSnapshotUpdateManyWithoutGuildNestedInput
    messageActivity?: MessageActivityUpdateManyWithoutGuildNestedInput
  }

  export type GuildUncheckedUpdateWithoutWarningsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    memberCount?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: GuildSettingUncheckedUpdateOneWithoutGuildNestedInput
    cases?: ModerationCaseUncheckedUpdateManyWithoutGuildNestedInput
    securityEvents?: SecurityEventUncheckedUpdateManyWithoutGuildNestedInput
    raidEvents?: RaidEventUncheckedUpdateManyWithoutGuildNestedInput
    memberSnapshots?: MemberSnapshotUncheckedUpdateManyWithoutGuildNestedInput
    messageActivity?: MessageActivityUncheckedUpdateManyWithoutGuildNestedInput
  }

  export type UserUpsertWithoutWarningsInput = {
    update: XOR<UserUpdateWithoutWarningsInput, UserUncheckedUpdateWithoutWarningsInput>
    create: XOR<UserCreateWithoutWarningsInput, UserUncheckedCreateWithoutWarningsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWarningsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWarningsInput, UserUncheckedUpdateWithoutWarningsInput>
  }

  export type UserUpdateWithoutWarningsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cases?: ModerationCaseUpdateManyWithoutUserNestedInput
    moderated?: ModerationCaseUpdateManyWithoutModeratorNestedInput
  }

  export type UserUncheckedUpdateWithoutWarningsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cases?: ModerationCaseUncheckedUpdateManyWithoutUserNestedInput
    moderated?: ModerationCaseUncheckedUpdateManyWithoutModeratorNestedInput
  }

  export type GuildCreateWithoutSecurityEventsInput = {
    id: string
    name: string
    memberCount?: number
    joinedAt?: Date | string
    updatedAt?: Date | string
    settings?: GuildSettingCreateNestedOneWithoutGuildInput
    cases?: ModerationCaseCreateNestedManyWithoutGuildInput
    warnings?: WarningCreateNestedManyWithoutGuildInput
    raidEvents?: RaidEventCreateNestedManyWithoutGuildInput
    memberSnapshots?: MemberSnapshotCreateNestedManyWithoutGuildInput
    messageActivity?: MessageActivityCreateNestedManyWithoutGuildInput
  }

  export type GuildUncheckedCreateWithoutSecurityEventsInput = {
    id: string
    name: string
    memberCount?: number
    joinedAt?: Date | string
    updatedAt?: Date | string
    settings?: GuildSettingUncheckedCreateNestedOneWithoutGuildInput
    cases?: ModerationCaseUncheckedCreateNestedManyWithoutGuildInput
    warnings?: WarningUncheckedCreateNestedManyWithoutGuildInput
    raidEvents?: RaidEventUncheckedCreateNestedManyWithoutGuildInput
    memberSnapshots?: MemberSnapshotUncheckedCreateNestedManyWithoutGuildInput
    messageActivity?: MessageActivityUncheckedCreateNestedManyWithoutGuildInput
  }

  export type GuildCreateOrConnectWithoutSecurityEventsInput = {
    where: GuildWhereUniqueInput
    create: XOR<GuildCreateWithoutSecurityEventsInput, GuildUncheckedCreateWithoutSecurityEventsInput>
  }

  export type GuildUpsertWithoutSecurityEventsInput = {
    update: XOR<GuildUpdateWithoutSecurityEventsInput, GuildUncheckedUpdateWithoutSecurityEventsInput>
    create: XOR<GuildCreateWithoutSecurityEventsInput, GuildUncheckedCreateWithoutSecurityEventsInput>
    where?: GuildWhereInput
  }

  export type GuildUpdateToOneWithWhereWithoutSecurityEventsInput = {
    where?: GuildWhereInput
    data: XOR<GuildUpdateWithoutSecurityEventsInput, GuildUncheckedUpdateWithoutSecurityEventsInput>
  }

  export type GuildUpdateWithoutSecurityEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    memberCount?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: GuildSettingUpdateOneWithoutGuildNestedInput
    cases?: ModerationCaseUpdateManyWithoutGuildNestedInput
    warnings?: WarningUpdateManyWithoutGuildNestedInput
    raidEvents?: RaidEventUpdateManyWithoutGuildNestedInput
    memberSnapshots?: MemberSnapshotUpdateManyWithoutGuildNestedInput
    messageActivity?: MessageActivityUpdateManyWithoutGuildNestedInput
  }

  export type GuildUncheckedUpdateWithoutSecurityEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    memberCount?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: GuildSettingUncheckedUpdateOneWithoutGuildNestedInput
    cases?: ModerationCaseUncheckedUpdateManyWithoutGuildNestedInput
    warnings?: WarningUncheckedUpdateManyWithoutGuildNestedInput
    raidEvents?: RaidEventUncheckedUpdateManyWithoutGuildNestedInput
    memberSnapshots?: MemberSnapshotUncheckedUpdateManyWithoutGuildNestedInput
    messageActivity?: MessageActivityUncheckedUpdateManyWithoutGuildNestedInput
  }

  export type GuildCreateWithoutRaidEventsInput = {
    id: string
    name: string
    memberCount?: number
    joinedAt?: Date | string
    updatedAt?: Date | string
    settings?: GuildSettingCreateNestedOneWithoutGuildInput
    cases?: ModerationCaseCreateNestedManyWithoutGuildInput
    warnings?: WarningCreateNestedManyWithoutGuildInput
    securityEvents?: SecurityEventCreateNestedManyWithoutGuildInput
    memberSnapshots?: MemberSnapshotCreateNestedManyWithoutGuildInput
    messageActivity?: MessageActivityCreateNestedManyWithoutGuildInput
  }

  export type GuildUncheckedCreateWithoutRaidEventsInput = {
    id: string
    name: string
    memberCount?: number
    joinedAt?: Date | string
    updatedAt?: Date | string
    settings?: GuildSettingUncheckedCreateNestedOneWithoutGuildInput
    cases?: ModerationCaseUncheckedCreateNestedManyWithoutGuildInput
    warnings?: WarningUncheckedCreateNestedManyWithoutGuildInput
    securityEvents?: SecurityEventUncheckedCreateNestedManyWithoutGuildInput
    memberSnapshots?: MemberSnapshotUncheckedCreateNestedManyWithoutGuildInput
    messageActivity?: MessageActivityUncheckedCreateNestedManyWithoutGuildInput
  }

  export type GuildCreateOrConnectWithoutRaidEventsInput = {
    where: GuildWhereUniqueInput
    create: XOR<GuildCreateWithoutRaidEventsInput, GuildUncheckedCreateWithoutRaidEventsInput>
  }

  export type GuildUpsertWithoutRaidEventsInput = {
    update: XOR<GuildUpdateWithoutRaidEventsInput, GuildUncheckedUpdateWithoutRaidEventsInput>
    create: XOR<GuildCreateWithoutRaidEventsInput, GuildUncheckedCreateWithoutRaidEventsInput>
    where?: GuildWhereInput
  }

  export type GuildUpdateToOneWithWhereWithoutRaidEventsInput = {
    where?: GuildWhereInput
    data: XOR<GuildUpdateWithoutRaidEventsInput, GuildUncheckedUpdateWithoutRaidEventsInput>
  }

  export type GuildUpdateWithoutRaidEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    memberCount?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: GuildSettingUpdateOneWithoutGuildNestedInput
    cases?: ModerationCaseUpdateManyWithoutGuildNestedInput
    warnings?: WarningUpdateManyWithoutGuildNestedInput
    securityEvents?: SecurityEventUpdateManyWithoutGuildNestedInput
    memberSnapshots?: MemberSnapshotUpdateManyWithoutGuildNestedInput
    messageActivity?: MessageActivityUpdateManyWithoutGuildNestedInput
  }

  export type GuildUncheckedUpdateWithoutRaidEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    memberCount?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: GuildSettingUncheckedUpdateOneWithoutGuildNestedInput
    cases?: ModerationCaseUncheckedUpdateManyWithoutGuildNestedInput
    warnings?: WarningUncheckedUpdateManyWithoutGuildNestedInput
    securityEvents?: SecurityEventUncheckedUpdateManyWithoutGuildNestedInput
    memberSnapshots?: MemberSnapshotUncheckedUpdateManyWithoutGuildNestedInput
    messageActivity?: MessageActivityUncheckedUpdateManyWithoutGuildNestedInput
  }

  export type GuildCreateWithoutMemberSnapshotsInput = {
    id: string
    name: string
    memberCount?: number
    joinedAt?: Date | string
    updatedAt?: Date | string
    settings?: GuildSettingCreateNestedOneWithoutGuildInput
    cases?: ModerationCaseCreateNestedManyWithoutGuildInput
    warnings?: WarningCreateNestedManyWithoutGuildInput
    securityEvents?: SecurityEventCreateNestedManyWithoutGuildInput
    raidEvents?: RaidEventCreateNestedManyWithoutGuildInput
    messageActivity?: MessageActivityCreateNestedManyWithoutGuildInput
  }

  export type GuildUncheckedCreateWithoutMemberSnapshotsInput = {
    id: string
    name: string
    memberCount?: number
    joinedAt?: Date | string
    updatedAt?: Date | string
    settings?: GuildSettingUncheckedCreateNestedOneWithoutGuildInput
    cases?: ModerationCaseUncheckedCreateNestedManyWithoutGuildInput
    warnings?: WarningUncheckedCreateNestedManyWithoutGuildInput
    securityEvents?: SecurityEventUncheckedCreateNestedManyWithoutGuildInput
    raidEvents?: RaidEventUncheckedCreateNestedManyWithoutGuildInput
    messageActivity?: MessageActivityUncheckedCreateNestedManyWithoutGuildInput
  }

  export type GuildCreateOrConnectWithoutMemberSnapshotsInput = {
    where: GuildWhereUniqueInput
    create: XOR<GuildCreateWithoutMemberSnapshotsInput, GuildUncheckedCreateWithoutMemberSnapshotsInput>
  }

  export type GuildUpsertWithoutMemberSnapshotsInput = {
    update: XOR<GuildUpdateWithoutMemberSnapshotsInput, GuildUncheckedUpdateWithoutMemberSnapshotsInput>
    create: XOR<GuildCreateWithoutMemberSnapshotsInput, GuildUncheckedCreateWithoutMemberSnapshotsInput>
    where?: GuildWhereInput
  }

  export type GuildUpdateToOneWithWhereWithoutMemberSnapshotsInput = {
    where?: GuildWhereInput
    data: XOR<GuildUpdateWithoutMemberSnapshotsInput, GuildUncheckedUpdateWithoutMemberSnapshotsInput>
  }

  export type GuildUpdateWithoutMemberSnapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    memberCount?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: GuildSettingUpdateOneWithoutGuildNestedInput
    cases?: ModerationCaseUpdateManyWithoutGuildNestedInput
    warnings?: WarningUpdateManyWithoutGuildNestedInput
    securityEvents?: SecurityEventUpdateManyWithoutGuildNestedInput
    raidEvents?: RaidEventUpdateManyWithoutGuildNestedInput
    messageActivity?: MessageActivityUpdateManyWithoutGuildNestedInput
  }

  export type GuildUncheckedUpdateWithoutMemberSnapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    memberCount?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: GuildSettingUncheckedUpdateOneWithoutGuildNestedInput
    cases?: ModerationCaseUncheckedUpdateManyWithoutGuildNestedInput
    warnings?: WarningUncheckedUpdateManyWithoutGuildNestedInput
    securityEvents?: SecurityEventUncheckedUpdateManyWithoutGuildNestedInput
    raidEvents?: RaidEventUncheckedUpdateManyWithoutGuildNestedInput
    messageActivity?: MessageActivityUncheckedUpdateManyWithoutGuildNestedInput
  }

  export type GuildCreateWithoutMessageActivityInput = {
    id: string
    name: string
    memberCount?: number
    joinedAt?: Date | string
    updatedAt?: Date | string
    settings?: GuildSettingCreateNestedOneWithoutGuildInput
    cases?: ModerationCaseCreateNestedManyWithoutGuildInput
    warnings?: WarningCreateNestedManyWithoutGuildInput
    securityEvents?: SecurityEventCreateNestedManyWithoutGuildInput
    raidEvents?: RaidEventCreateNestedManyWithoutGuildInput
    memberSnapshots?: MemberSnapshotCreateNestedManyWithoutGuildInput
  }

  export type GuildUncheckedCreateWithoutMessageActivityInput = {
    id: string
    name: string
    memberCount?: number
    joinedAt?: Date | string
    updatedAt?: Date | string
    settings?: GuildSettingUncheckedCreateNestedOneWithoutGuildInput
    cases?: ModerationCaseUncheckedCreateNestedManyWithoutGuildInput
    warnings?: WarningUncheckedCreateNestedManyWithoutGuildInput
    securityEvents?: SecurityEventUncheckedCreateNestedManyWithoutGuildInput
    raidEvents?: RaidEventUncheckedCreateNestedManyWithoutGuildInput
    memberSnapshots?: MemberSnapshotUncheckedCreateNestedManyWithoutGuildInput
  }

  export type GuildCreateOrConnectWithoutMessageActivityInput = {
    where: GuildWhereUniqueInput
    create: XOR<GuildCreateWithoutMessageActivityInput, GuildUncheckedCreateWithoutMessageActivityInput>
  }

  export type GuildUpsertWithoutMessageActivityInput = {
    update: XOR<GuildUpdateWithoutMessageActivityInput, GuildUncheckedUpdateWithoutMessageActivityInput>
    create: XOR<GuildCreateWithoutMessageActivityInput, GuildUncheckedCreateWithoutMessageActivityInput>
    where?: GuildWhereInput
  }

  export type GuildUpdateToOneWithWhereWithoutMessageActivityInput = {
    where?: GuildWhereInput
    data: XOR<GuildUpdateWithoutMessageActivityInput, GuildUncheckedUpdateWithoutMessageActivityInput>
  }

  export type GuildUpdateWithoutMessageActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    memberCount?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: GuildSettingUpdateOneWithoutGuildNestedInput
    cases?: ModerationCaseUpdateManyWithoutGuildNestedInput
    warnings?: WarningUpdateManyWithoutGuildNestedInput
    securityEvents?: SecurityEventUpdateManyWithoutGuildNestedInput
    raidEvents?: RaidEventUpdateManyWithoutGuildNestedInput
    memberSnapshots?: MemberSnapshotUpdateManyWithoutGuildNestedInput
  }

  export type GuildUncheckedUpdateWithoutMessageActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    memberCount?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: GuildSettingUncheckedUpdateOneWithoutGuildNestedInput
    cases?: ModerationCaseUncheckedUpdateManyWithoutGuildNestedInput
    warnings?: WarningUncheckedUpdateManyWithoutGuildNestedInput
    securityEvents?: SecurityEventUncheckedUpdateManyWithoutGuildNestedInput
    raidEvents?: RaidEventUncheckedUpdateManyWithoutGuildNestedInput
    memberSnapshots?: MemberSnapshotUncheckedUpdateManyWithoutGuildNestedInput
  }

  export type ModerationCaseCreateManyUserInput = {
    id?: number
    guildId: string
    moderatorId: string
    type: string
    reason?: string | null
    createdAt?: Date | string
  }

  export type ModerationCaseCreateManyModeratorInput = {
    id?: number
    guildId: string
    userId: string
    type: string
    reason?: string | null
    createdAt?: Date | string
  }

  export type WarningCreateManyUserInput = {
    id?: number
    guildId: string
    reason: string
    createdAt?: Date | string
  }

  export type ModerationCaseUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guild?: GuildUpdateOneRequiredWithoutCasesNestedInput
    moderator?: UserUpdateOneRequiredWithoutModeratedNestedInput
  }

  export type ModerationCaseUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    moderatorId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModerationCaseUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    moderatorId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModerationCaseUpdateWithoutModeratorInput = {
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guild?: GuildUpdateOneRequiredWithoutCasesNestedInput
    user?: UserUpdateOneRequiredWithoutCasesNestedInput
  }

  export type ModerationCaseUncheckedUpdateWithoutModeratorInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModerationCaseUncheckedUpdateManyWithoutModeratorInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarningUpdateWithoutUserInput = {
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guild?: GuildUpdateOneRequiredWithoutWarningsNestedInput
  }

  export type WarningUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarningUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModerationCaseCreateManyGuildInput = {
    id?: number
    userId: string
    moderatorId: string
    type: string
    reason?: string | null
    createdAt?: Date | string
  }

  export type WarningCreateManyGuildInput = {
    id?: number
    userId: string
    reason: string
    createdAt?: Date | string
  }

  export type SecurityEventCreateManyGuildInput = {
    id?: number
    type: string
    severity: string
    description: string
    createdAt?: Date | string
  }

  export type RaidEventCreateManyGuildInput = {
    id?: number
    status: string
    startedAt?: Date | string
    endedAt?: Date | string | null
  }

  export type MemberSnapshotCreateManyGuildInput = {
    id?: number
    count: number
    timestamp?: Date | string
  }

  export type MessageActivityCreateManyGuildInput = {
    id?: number
    channelId: string
    count?: number
    timestamp?: Date | string
  }

  export type ModerationCaseUpdateWithoutGuildInput = {
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCasesNestedInput
    moderator?: UserUpdateOneRequiredWithoutModeratedNestedInput
  }

  export type ModerationCaseUncheckedUpdateWithoutGuildInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    moderatorId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModerationCaseUncheckedUpdateManyWithoutGuildInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    moderatorId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarningUpdateWithoutGuildInput = {
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWarningsNestedInput
  }

  export type WarningUncheckedUpdateWithoutGuildInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarningUncheckedUpdateManyWithoutGuildInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityEventUpdateWithoutGuildInput = {
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityEventUncheckedUpdateWithoutGuildInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityEventUncheckedUpdateManyWithoutGuildInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaidEventUpdateWithoutGuildInput = {
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RaidEventUncheckedUpdateWithoutGuildInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RaidEventUncheckedUpdateManyWithoutGuildInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MemberSnapshotUpdateWithoutGuildInput = {
    count?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberSnapshotUncheckedUpdateWithoutGuildInput = {
    id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberSnapshotUncheckedUpdateManyWithoutGuildInput = {
    id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageActivityUpdateWithoutGuildInput = {
    channelId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageActivityUncheckedUpdateWithoutGuildInput = {
    id?: IntFieldUpdateOperationsInput | number
    channelId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageActivityUncheckedUpdateManyWithoutGuildInput = {
    id?: IntFieldUpdateOperationsInput | number
    channelId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GuildCountOutputTypeDefaultArgs instead
     */
    export type GuildCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GuildCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GuildDefaultArgs instead
     */
    export type GuildArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GuildDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GuildSettingDefaultArgs instead
     */
    export type GuildSettingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GuildSettingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ModerationCaseDefaultArgs instead
     */
    export type ModerationCaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ModerationCaseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WarningDefaultArgs instead
     */
    export type WarningArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WarningDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SecurityEventDefaultArgs instead
     */
    export type SecurityEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SecurityEventDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RaidEventDefaultArgs instead
     */
    export type RaidEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RaidEventDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MemberSnapshotDefaultArgs instead
     */
    export type MemberSnapshotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MemberSnapshotDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MessageActivityDefaultArgs instead
     */
    export type MessageActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MessageActivityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BotStatDefaultArgs instead
     */
    export type BotStatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BotStatDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BotStatHistoryDefaultArgs instead
     */
    export type BotStatHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BotStatHistoryDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}