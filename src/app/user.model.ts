export class User{
    public name: string;
    public email: string;
    public phoneno: string;
    public password: string;
    public cpassword: string;

    constructor(name:string, email:string, phoneno:string, password:string, cpassword:string){
        this.name = name;
        this.email = email;
        this.phoneno = phoneno;
        this.password = password;
        this.cpassword = cpassword;
    }
}