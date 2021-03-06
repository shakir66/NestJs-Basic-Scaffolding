import { Column, Entity } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { RoleType } from '../../common/enums/role-type';
import { UserDto } from './dto/UserDto';

@Entity({ name: 'users' })
export class UserEntity extends AbstractEntity<UserDto> {
    @Column({ nullable: true })
    firstName: string;

    @Column({ nullable: true })
    lastName: string;

    @Column({ type: 'enum', enum: RoleType, default: RoleType.USER })
    role: RoleType;

    @Column({ unique: true, nullable: true })
    email: string;

    @Column({ default: false })
    isSubscribed: boolean;

    @Column({ default: false })
    isVerified: boolean;

    @Column({ nullable: true })
    password: string;

    @Column({ nullable: true })
    phone: string;

    @Column({ nullable: true })
    profileImage: string;

    dtoClass = UserDto;
}
