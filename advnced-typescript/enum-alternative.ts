// was never a part of javascript
// TS will never complain if u provide non existant enum val
// always define the valu i.e app was added later
enum Types{
    app=2,
    email = 0,
    social=1
}

//alternatives

//1. Type; allows for type annotation
type Login = 'app' | 'email' | 'social'

//2. const. add 'as const' to narrow it down to literal
export const LoginMode ={device:'device', email:'email', social:'social'} as const
export type LoginMode = keyof typeof LoginMode //gets the key of LoginMode type
export function initiateLogin(loginMode: LoginMode){
//do somn here
}

initiateLogin('device')
initiateLogin(LoginMode.device)