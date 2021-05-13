import { ObjectSchema } from "@hapi/joi";
import { ArgumentMetadata, PipeTransform } from "@nestjs/common";

export class JoiValidationPipe implements PipeTransform{
    constructor(private schema:ObjectSchema){}
    transform(value: any, metadata: ArgumentMetadata) {
        const {error} = this.schema.validate(value);
        if(error){
            throw new Error("Validation failed.");
        }
        return value;
    }
}