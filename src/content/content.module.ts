import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Content } from './content.entity';
import { ContentController } from './controller/content.controller';
import { ContentRepository } from './repository/content.repository';
import { ContentService } from './services/content.service';

@Module({
    imports: [TypeOrmModule.forFeature([Content])],
    providers: [ContentService, ContentRepository],
    controllers: [ContentController]
})

export class ContentModule {}
