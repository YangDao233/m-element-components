import Mock, { Random } from "mockjs";
export default [
  {
    type: "get",
    url: "/mockApi/userList",
    response: () => {
      return {
        code: 200,
        data: Mock.mock({
          pageNo: 1,
          pageSize: 10,
          total: 50,
          "list|50": [
            {
              "id|+1": 1,
              loginAccount: Random.name(),
              userName: Random.name(),
              roleName: Random.name(),
              orgName: Random.cname(),
              deptName: Random.cname(),
              "status|1": [0, 1],
              phone: Mock.mock(/\d{11}/),
              email: Random.email(),
              createUser: Random.cname(),
              createTime: Random.datetime(),
            },
          ],
        }),
      };
    },
  },
];
