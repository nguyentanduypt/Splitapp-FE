export {};

declare global {
  // interface IBackendRes<T> {
  //   error?: string | string[];
  //   message: string | string[];
  //   statusCode: number | string;
  //   data?: T;
  // }

  // Response sau khi register hoặc login
  interface IUserAuth {
    token: string; // token JWT trả về từ BE
    userName: string; // tên user
    role: string; // role của user, ví dụ "USER" hoặc "ADMIN"
  }
}
