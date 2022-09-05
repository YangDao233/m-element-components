import Mock, { Random } from "mockjs";
export default [
  {
    type: "get",
    url: "/mockApi/subjectSearchList",
    response: () => {
      return Mock.mock({
        code: 200,
        data: {
          pageNo: 1,
          pageSize: 10,
          total: 60,
          "list|60": [
            {
              "id|+1": 1,
              themeName: Random.name(),
              entityVoList: [
                { entityId: 2, templateId: 28 },
                { entityId: 1, templateId: 24 },
              ],
              userVo: Random.cname(),
              createTime: Random.datetime(),
            },
          ],
        },
      });
    },
  },
  {
    type: "get",
    url: "/mockApi/entityList",
    response: () => {
      return Mock.mock({
        code: 200,
        data: {
          pageNo: 1,
          pageSize: 10,
          total: 2,
          list: [
            {
              id: 1,
              nameCn: "企业基本信息表",
              nameEn: "i_zhss_t_enterprise_baseinfo_tmp",
            },
            { id: 2, nameCn: "人员表", nameEn: "people" },
          ],
        },
      });
    },
  },
  {
    type: "get",
    url: "/mockApi/templateList",
    response: () => {
      return Mock.mock({
        code: 200,
        data: {
          pageNo: 1,
          pageSize: 10,
          total: 9,
          list: [
            { entityId: 1, templateId: 1, templateName: "企业模板1" },
            { entityId: 1, templateId: 23, templateName: "企业模板2" },
            { entityId: 1, templateId: 24, templateName: "小鱼test" },
            { entityId: 1, templateId: 25, templateName: "test0309" },
            { entityId: 1, templateId: 26, templateName: "123" },
            { entityId: 1, templateId: 29, templateName: "3333" },
            { entityId: 1, templateId: 30, templateName: "test" },
            { entityId: 2, templateId: 27, templateName: "人员初始化模板" },
            { entityId: 2, templateId: 28, templateName: "人员姓名" },
          ],
        },
      });
    },
  },
];
