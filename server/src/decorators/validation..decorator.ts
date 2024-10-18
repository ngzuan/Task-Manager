
import { applyDecorators } from "@nestjs/common"
import { ApiProperty } from "@nestjs/swagger"
import { IsArray, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator"

type UUIDOptions = { optional?: boolean; each?: boolean };
export const ValidateUUID = (options?: UUIDOptions) => {
    const { optional, each } = { optional: false, each: false, ...options };
    return applyDecorators(
        IsUUID(undefined, { each }),
        ApiProperty({ format: 'uuid' }),
        optional ? IsOptional() : IsNotEmpty(),
        each ? IsArray() : IsString(),
    );
};


export const ValidateDate = () => {


}