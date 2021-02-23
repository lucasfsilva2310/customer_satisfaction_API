import { Column, Entity, PrimaryColumn, CreateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
//precisamos importar o Entity no tsconfig
@Entity("users")
class User {
  @PrimaryColumn()
  readonly id: string;
  //para usuario nao conseguir alterar o id

  @Column()
  name: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    //verificar se o constructor tem o id diferente da classe User, para diferenciar testes de uma criação real
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };

//necessario biblioteca uuid
//yarn add uuid
// yarn add @types/uuid -D
//biblioteca responsavel por criar o tipo de ID
