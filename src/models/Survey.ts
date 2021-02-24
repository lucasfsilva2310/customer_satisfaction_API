import { Column, Entity, PrimaryColumn, CreateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("surveys")
class Survey {
  @PrimaryColumn()
  readonly id: string;
  //para usuario nao conseguir alterar o id

  @Column()
  title: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    //verificar se o constructor tem o id diferente da classe User, para diferenciar testes de uma criação real
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Survey };
