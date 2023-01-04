import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Content } from "../content.entity";
import { ContentDto } from "../dto/content-type.dto";
import { ReturnListContentDto } from "../dto/return-list-content.dto";

@Injectable()
export class ContentRepository extends Repository<Content> {

    constructor(
        @InjectRepository(Content)
          repository: Repository<Content>
      ) {
        super(repository.target, repository.manager, repository.queryRunner);
      }


      async findAll(): Promise<Array<Content>> {
        return this.find()
      }

      async findByDescription(description: string): Promise<Array<Content>> {
        return this.findBy({ description })
      }

      async createContent(contentDto: ContentDto): Promise<Content> {

        const content = this.create();

        content.name = contentDto.name
        content.description = contentDto.description
        content.type = contentDto.type
        
        try {
          await content.save();
          return content          
        } catch (error) {
          throw new InternalServerErrorException(
            'Erro ao salvar o Conteúdo no banco de dados',
          );
        }

      }


}