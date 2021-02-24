import { EntityRepository, Repository } from "typeorm";

// nos queremos que essa classe tambem tenha acesso aos metodos do typeORM
import { User } from "../models/User";

@EntityRepository(User)
class UsersRepository extends Repository<User> {}

export { UsersRepository };
