import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

// ALT + SHIFT + O remove todos os imports nao utilizados!

class UserController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;
    const usersRepository = getCustomRepository(UsersRepository);

    //verificar se o email ja existe no servidor
    // SELECT * FROM USERS WHERE EMAIL = "EMAIL"
    const userAlreadyExists = await usersRepository.findOne({
      email,
    });

    if (userAlreadyExists) {
      return response.status(400).json({
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

    return response.status(201).json(user);
    //precisamos chamar esse body no server para testar
    // e precisamos das rotas
    // o body nao recebe só dados em JSON, portanto , nos precisamos informar ao server que vamos usar o formato JSON com o body
  }
}

export { UserController };
