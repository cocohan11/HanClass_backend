import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    @IsString()
    password: string;
    
    @IsNotEmpty()
    @IsString()
    loginType: string;
    
    @IsNotEmpty() 
    @IsPhoneNumber('KR') 
    phone: string;
    
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsString()
    @IsNotEmpty()
    role: string;
    // isActive: boolean; // 회원생성 시 서버에서 알아서 true
    
    @IsOptional()
    profileImgUrl: string;

}
