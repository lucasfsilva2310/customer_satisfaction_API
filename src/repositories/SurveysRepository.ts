import { EntityRepository, Repository } from "typeorm";

// nos queremos que essa classe tambem tenha acesso aos metodos do typeORM
import { Survey } from "../models/Survey";

@EntityRepository(Survey)
class SurveysRepository extends Repository<Survey> {}

export { SurveysRepository };
