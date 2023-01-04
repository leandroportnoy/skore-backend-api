import { ContentDto } from "./content-type.dto";

export class ReturnListContentDto {
    contents: Array<ContentDto>;
    message: string;
}