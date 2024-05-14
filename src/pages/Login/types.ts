export interface IFormLogin {
    email: string;
    password: string;
}

export const defaultValues: IFormLogin = {
    email: '',
    password: ''
}

export  interface IButtonProps {
    title: string;
    disabled?: boolean; 
}