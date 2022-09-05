import Mock, { Random } from "mockjs";
export default [
  {
    type: "get",
    url: "/mockApi/operationLogList",
    response: () => {
      return Mock.mock({
        code: 200,
        data: {
          pageNo: 1,
          pageSize: 10,
          total: 80,
          "list|80": [
            {
              "id|+1": 1,
              username: Random.name(),
              org: Random.cname(),
              optionType: Random.cname(),
              userIp: Random.cname(),
              searchType: Random.cname(),
              optionTime: Random.datetime(),
            },
          ],
        },
      });
    },
  },
];
