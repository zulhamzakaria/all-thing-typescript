// value is numeric by default
enum LoginMode {
  email = 0,
  social = 1,
}

function initiateLogin(mode: LoginMode) {
  //do somn
}

// allows for passing existing enum index
initiateLogin(LoginMode.email);
initiateLogin(0);
initiateLogin(1);

// no checking on lookup
console.log(LoginMode["app"]);
console.log(LoginMode[99]);

enum LoginMode2 {
  email = "email",
  social = "social",
}

// type over enum
type LoginModeType = "app" | "email" | "social";

function initiateLogin2(loginMode: LoginModeType) {}

initiateLogin2("app");

//alternatively...
export const LoginModeConst = {
  device: "device",
  email: "email",
  social: "social",
} as const;

// type string literal cause of 'as const'
export type LoginMode3 = keyof typeof LoginModeConst;
