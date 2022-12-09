# Staake common-lib

This repository is a Node.js package.\
It is ment to be shared between all backend services.\
It contains database connections, TypeORM entities, and other reused helper functions.

## Usage

To install this package in **target** services, run:
```sh
npm i git+ssh://git@git.era2140.tech/Staake/common-lib.git
```

It can then be used as follows:
```typescript
import { OnChainDatabase, OffChainDatabase } from 'staake-common-lib';

await OnChainDatabase.initialize();
await OffChainDatabase.initialize();

// OR

import { OnChainDatabase } from 'staake-common-lib/dist/database/on-chain';
import { OffChainDatabase } from 'staake-common-lib/dist/database/off-chain';

await OnChainDatabase.initialize();
await OffChainDatabase.initialize();
```

## Contributing

To update this repository, update files in the `src` folder, then run:
```sh
npm run build
```

You can then push all changes to the `dev` branch.

To test out the changes in **target** services, run:
```sh
npm i git+ssh://git@git.era2140.tech/Staake/common-lib.git#dev
```

## TypeORM migrations

Because this repository contains the TypeORM database entities, it must also contain migrations for the on-chain and off-chain databases.

To automatically generate migrations, first make sure the `dist` folder is up to date with:
```sh
npm run build
```

Then, use the TypeORM CLI to generate the migrations in the correct folder by running:
```sh
npx typeorm migration:generate -d dist/database/on-chain src/database/on-chain/migration/<name>
# OR
npx typeorm migration:generate -d dist/database/off-chain src/database/off-chain/migration/<name>
```

Finally, before commiting, update the `dist` folder again with:
```sh
npm run build
```

## Updating

After each change to this package merged onto the `main` branch, **target** services must be updated to use the new version.

To do so, run the following in the **target** services:
```sh
npm up staake-common-lib
```
