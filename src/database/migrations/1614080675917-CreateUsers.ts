import { MigrationInterface, QueryRunner, Table } from "typeorm";
//o QUe é uma migration? é basicamente um histórico de tudo o que foi alterado no banco de dados
// ao rodar as migrations, os banco de dados sao atualizados e todos ficam na mesma 'pagina'
// pra  isso, é necessário adicionar essa configuração no package.json, ou adicionar através do yarn add o cli
//para criar as migrations, é necessário definir um caminho ( path ) pra elas, se não elas vao ser criadas na raiz do projeto,
// entao a organização do projeto vai ficar confusa. (olhar ormconfigo.json)
//para criar a migration: yarn typeorm migration:create -n <nome da migration>
export class CreateUsers1614080675917 implements MigrationInterface {
  //o método up é quando vc quer criar uma migration
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  //o método down é pra quando o migration vai ser removido
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}

//como testar e ver se os migrations deram certo?
// colocar nas ormconfig.json
//rodar um yarn typeorm migrations:run
//para reverter a migration - yarn typeorm migration:revert
//vc pode usar a extensao SQlite, nesse caso, pra fazer o teste
//ou vc pode usar uma ferramenta chamada beekeeper studio, selecione SQLite, o path do arquivo, e faz o teste para verificar as migrations

//proximo passo: criar um controller( basicamente como se fosse uma pasta de componente, com cada função separada)
