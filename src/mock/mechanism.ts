import Mock, { Random } from "mockjs";
export default [
  {
    type: "get",
    url: "/mockApi/mechanismList",
    response: () => {
      return Mock.mock({
        code: 200,
        data: {
          pageNo: 1,
          pageSize: 10,
          total: 70,
          "list|70": [
            {
              "orgId|+1": 1,
              orgCode: Random.name(),
              orgName: Random.cname(),
              orgAdminName: Random.cname(),
              orgAdminAccount: Random.cname(),
              "orgPeopleNum|1-100": 40,
              "orgStatus|1": [0, 1],
              createUser: Random.cname(),
              createTime: Random.datetime(),
            },
          ],
        },
      });
    },
  },
];
