## SETUP

Next.js, Prisma, TawilwindCSS, PostgreSQL, TypeScript, Docker

### Docker Flow

Install Docker (We going to have database in a container)

Check _docker-compose.yml_ file, and _.env_ file to
check our configuration

Run our container

```
docker compose up
```

Stop our container

```
docker compose down
```

Check docker config

```
docker compose config
```

### Prisma Flow

Quick Documentation - https://www.prisma.io/docs/getting-started/quickstart

After updating _url = env("DATABASE_URL")_

Migrate

```
npx prisma migrate dev
```

Create a "example" model for migration

```
model Developer {
  id Int @id @default(autoincrement())
  name String
  lastname String
  job String
}
```
