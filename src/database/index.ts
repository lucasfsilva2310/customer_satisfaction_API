import { createConnection, Connection, getConnectionOptions } from "typeorm";

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();
  return createConnection(
    Object.assign(defaultOptions, {
      database:
        process.env.NODE_ENV === "test"
          ? "./src/database/database.test.sqlite"
          : defaultOptions.database,
    })
  );
  // agora é necessario criar um método para saber se esse async vai ser usado pra testes ou pro yarn dev, por exemplo
};
