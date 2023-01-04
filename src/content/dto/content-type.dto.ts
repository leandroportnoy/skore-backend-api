import { ContentType } from "../enums/content-type.enums"

export class ContentDto {
    name: string;
    description: string;
    type: ContentType;
}