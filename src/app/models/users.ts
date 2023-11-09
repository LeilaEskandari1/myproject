enum Gender{MALE,FAMEL};

export class users{
    
    constructor(
        public Firstname:string,
        public Lastname:string,
       public  Age:number,
        public Password:string,
        public ConfirmPassword:string,
      public gender: Gender ,
        public Email:string,
        ) {}
      
}