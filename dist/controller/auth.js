"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
const User = db_1.default.import('../models/user');
exports.login = async (ctx) => {
    const { email, password } = ctx.body;
    console.log(ctx.body);
    const user = await User.findOne();
    ctx.body = {
        user: user,
        status: {
            code: 0
        }
    };
};
// const auth = {
//   async login(ctx: Koa.Context) {
//     const { email, password } = ctx.request.body;
//     const users = await auth.fnHasUser(email);
//     console.log(users);
//     // 如果有注册过，就返回用户信息
//     if (users && users.length) {
//       // 如果密码争正确
//       const user = users[0];
//       console.log(user.password, password);
//       if (user.password === password) {
//         ctx.body = {
//           data: {
//             user: user
//           },
//           status: {
//             code: 0
//           }
//         };
//       } else {
//         // 如果密码不正确
//         ctx.body = {
//           data: {
//             user: {}
//           },
//           status: {
//             code: 400,
//             msg: userCode.FAIL_USER_NAME_OR_PASSWORD_ERROR
//           }
//         };
//       }
//     } else {
//       ctx.body = {
//         status: {
//           code: 400,
//           msg: userCode.FAIL_USER_NO_EXIST
//         }
//       };
//     }
//   },
//   // 查询是否存在user
//   fnHasUser(email: string) {
//     return new Promise(async (resolve, reject) => {
//       try {
//         let user = await User.findAll({
//           where: {
//             email: email
//           }
//         });
//         if (user.length) {
//           return resolve(user);
//         } else {
//           return resolve(null);
//         }
//       } catch (error) {
//         return reject(error);
//       }
//     });
//   },
//   // 更新user
//   async update(ctx: Koa.Context) {},
//   async register(ctx: Koa.Context) {
//     const { email, password } = ctx.request.body;
//     const hasUser = await auth.fnHasUser(email);
//     // 如果注册过
//     if (hasUser.length) {
//       ctx.body = {
//         msg: userCode.FAIL_EMAIL_IS_EXIST,
//         status: {
//           code: 402
//         }
//       };
//     } else {
//       // 新建用户
//       const newUser = {
//         email: email,
//         password: password
//       };
//       await User.create(newUser);
//       ctx.body = {
//         status: {
//           code: 0
//         },
//         token: JWT.sign(newUser)
//       };
//     }
//   }
// };
// module.exports = auth;
//# sourceMappingURL=auth.js.map