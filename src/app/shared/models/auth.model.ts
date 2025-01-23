export interface RequestLoginDTO {
    email: string;
    password: string;
  }
  
  export interface ResponseLoginDTO {
    email: string;
    role: string;
    token: string;
  }
  
  export interface CreateAppUserDTO {
    username: string;
    email: string;
    password: string;
    roleId?: number; 
  }
  