import { Body, Controller, Get, Post } from "@nestjs/common";
import { ContentDto } from "../dto/content-type.dto";
import { ReturnListContentDto } from "../dto/return-list-content.dto";
import { ContentService } from "../services/content.service";

@Controller('contents')
export class ContentController {
    constructor(private contentService: ContentService) {}

    @Get()
    async findAll(): Promise<ReturnListContentDto> {
      const contents = await this.contentService.findAll();
      return {
        contents,
        message: ''
      }
    }

    @Get("/findByDescription")
    async findByDescription(@Body() description: string): Promise<ReturnListContentDto> {
        const contents = await this.contentService.findByDescription(description)
        return { 
            contents,
            message: ''
        }
        
    }

    @Post()
    async createContent(@Body() contentDto: ContentDto): Promise<ContentDto> {
      const content = await this.contentService.createContent(contentDto)
      return {
        name: content.name,
        description: content.description,
        type: content.type
      }
    }


}