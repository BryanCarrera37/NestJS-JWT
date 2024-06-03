# NestJS-JWT

This is a library made for your projects so that you can have a several functions that you can use to implement the Bearer Authentication.

## Installation

You can use **npm** or **yarn:**

```bash
$ npm install @bryancm/nestjs-jwt
```

```bash
$ yarn add @bryancm/nestjs-jwt
```

## Usage

After install the package you only have to import the module **TokenizationModule** to your project.

```ts
import { TokenizationModule } from '@bryancm/nestjs-jwt';

@Module({
    imports: [ TokenizationModule ]
})
export class AppModule {}
```

Then you're free to use **Dependency Injection** for the service **TokenizationService** and implement methods like:

- extractTokenFromTheHeader
- generateToken
- getPayloadFromTheToken