import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProfileUncheckedCreateNestedOneWithoutUserInput } from '../profile/profile-unchecked-create-nested-one-without-user.input';
import { TaskUncheckedCreateNestedManyWithoutAuthorInput } from '../task/task-unchecked-create-nested-many-without-author.input';

@InputType()
export class UserUncheckedCreateWithoutSharedTasksInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  password!: string;

  @Field(() => String, { nullable: true })
  roles?: string;

  @Field(() => ProfileUncheckedCreateNestedOneWithoutUserInput, {
    nullable: true,
  })
  profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;

  @Field(() => TaskUncheckedCreateNestedManyWithoutAuthorInput, {
    nullable: true,
  })
  tasks?: TaskUncheckedCreateNestedManyWithoutAuthorInput;
}