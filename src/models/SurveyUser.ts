import {
  Column,
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("surveys_users")
class SurveyUser {
  @PrimaryColumn()
  readonly id: string;
  //para usuario nao conseguir alterar o id

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  survey_id: string;

  @Column()
  value: number;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    //verificar se o constructor tem o id diferente da classe User, para diferenciar testes de uma criação real
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { SurveyUser };
