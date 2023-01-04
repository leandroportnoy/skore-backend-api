import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Content } from "../content.entity";
import { ContentDto } from "../dto/content-type.dto";
import { ReturnListContentDto } from "../dto/return-list-content.dto";
import { ContentRepository } from "../repository/content.repository";

@Injectable()
export class ContentService {

    constructor(
        @InjectRepository(ContentRepository)
        private contentRepository: ContentRepository
    ) {}

    async findAll(): Promise<Array<Content>> {
        return this.contentRepository.findAll()
    }

    async findByDescription(description: string): Promise<Array<Content>> {
        return this.contentRepository.findByDescription(description)
    }

    async createContent(contentDto: ContentDto): Promise<Content> {
        return this.contentRepository.createContent(contentDto)
    }

}