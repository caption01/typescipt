import { Request, Response, NextFunction } from "express";

import { get, controller, use } from "./decorator/index";

function echo(req: Request, res: Response, next: NextFunction) {
  console.log("Hello");
  next();
  return;
}

@controller("/auth")
class LoginController {
  @get("/login")
  @use(echo)
  getLogin(req: Request, res: Response): void {
    res.send(`
    <form method="post">
      <div>
        <labe>Email</labe>
        <input name="email" />
      </div>
      <div>
        <labe>Password</labe>
        <input name="password" type="password" />
      </div>
      <button>Submit</button>
    </form>
    `);
  }
}
