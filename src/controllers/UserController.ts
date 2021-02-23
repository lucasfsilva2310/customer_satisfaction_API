import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../models/User";

class UserController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;
    const usersRepository = getRepository(User);

    //verificar se o email ja existe no servidor
    // SELECT * FROM USERS WHERE EMAIL = "EMAIL"
    const userAlreadyExists = await usersRepository.findOne({
      email,
    });

    if (userAlreadyExists) {
      return response.send(400).json({
        error: "User already exists!",
      });
    }

    //vc precisa primeiro criar o usuario usando o repositorio, pra DEPOIS salvar, o await serve tambem pra isso
    //adicionar as entidades no ormconfig.json
    const user = usersRepository.create({
      name,
      email,
    });

    await usersRepository.save(user);

    return response.send();
    //precisamos chamar esse body no server para testar
    // e precisamos das rotas
    // o body nao recebe só dados em JSON, portanto , nos precisamos informar ao server que vamos usar o formato JSON com o body
  }
}

export { UserController };
