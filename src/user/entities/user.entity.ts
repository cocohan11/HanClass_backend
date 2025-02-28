import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, VersionColumn } from "typeorm";
import { Exclude } from "class-transformer";
import { IsPhoneNumber } from "class-validator";
import { BaseTable } from "src/common/entity/base.entity";


// Enum 정의
export enum LoginType { 
    KAKAO = 'kakao',
    GOOGLE = 'google',
    NAVER = 'naver',
    EMAIL = 'email' // 현재는 email이 디폴트. 추후 확장예정
}
export enum Role { 
    admin, // 0
    teacher, // 1
    student, // 2
}

@Entity() 
export class User extends BaseTable {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, name: 'email' })
    email: string;

    @Column()
    @Exclude({ toPlainOnly: true }) // 은닉
    password: string;

    @Column({
        type: 'enum',
        enum: LoginType,
        default: LoginType.EMAIL
    })
    loginType: string;

    @Column({
        type: 'enum',
        enum: Role,
        default: Role.student
    })
    role: string;

    @Column({ unique: true })
    @IsPhoneNumber(null, { message: '유효한 전화번호 형식이 아닙니다.' })
    phone: string;

    @Column() // 필수값 
    name: string;

    @Column({ default: true })
    isActive: boolean;
    
    //------------ 필수 X ---------------

    @Column({ 
        nullable: true, 
        // default: 'https://example.com/default-profile.png' 
    }) // 수정 : url을 고정시킬 때, 도메인변경하면? 차라리 null처리하고 프론트에서 null이면 기본이미지띄우는게 나을 듯
    profileImgUrl: string;
    
}
