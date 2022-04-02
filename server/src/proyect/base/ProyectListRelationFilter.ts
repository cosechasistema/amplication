/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProyectWhereInput } from "./ProyectWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProyectListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ProyectWhereInput,
  })
  @ValidateNested()
  @Type(() => ProyectWhereInput)
  @IsOptional()
  @Field(() => ProyectWhereInput, {
    nullable: true,
  })
  every?: ProyectWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProyectWhereInput,
  })
  @ValidateNested()
  @Type(() => ProyectWhereInput)
  @IsOptional()
  @Field(() => ProyectWhereInput, {
    nullable: true,
  })
  some?: ProyectWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProyectWhereInput,
  })
  @ValidateNested()
  @Type(() => ProyectWhereInput)
  @IsOptional()
  @Field(() => ProyectWhereInput, {
    nullable: true,
  })
  none?: ProyectWhereInput;
}
export { ProyectListRelationFilter };