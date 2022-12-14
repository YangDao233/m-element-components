import Mock, { Random } from "mockjs";
export default [
  {
    type: "get",
    url: "/mockApi/roseList",
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
              roleName: Random.name(),
              roleDesc: Random.cname(),
              "status|1": [0, 1],
              roleType: Random.cname(),
              createUser: Random.cname(),
              createTime: Random.datetime(),
            },
          ],
        },
      });
    },
  },
  {
    type: "get",
    url: "/mockApi/permissionList",
    response: {
      code: 200,
      data: {
        data: {
          "3": {
            "1": [
              {
                id: 100,
                parId: 0,
                authName: "用户管理",
                authType: 1,
                authCode: "01030000",
                children: null,
              },
              {
                id: 200,
                parId: 0,
                authName: "角色管理",
                authType: 1,
                authCode: "01030100",
                children: [
                  {
                    id: 201,
                    parId: 200,
                    authName: "新增",
                    authType: 1,
                    authCode: "01030101",
                    children: null,
                  },
                ],
              },
              {
                id: 300,
                parId: 0,
                authName: "机构管理",
                authType: 1,
                authCode: "01030200",
                children: null,
              },
              {
                id: 400,
                parId: 0,
                authName: "部门管理",
                authType: 1,
                authCode: "01030300",
                children: null,
              },
              {
                id: 600,
                parId: 0,
                authName: "实体检索配置",
                authType: 1,
                authCode: "01030500",
                children: null,
              },
              {
                id: 700,
                parId: 0,
                authName: "主题检索配置",
                authType: 1,
                authCode: "01030600",
                children: null,
              },
              {
                id: 800,
                parId: 0,
                authName: "操作日志",
                authType: 1,
                authCode: "01030700",
                children: null,
              },
              {
                id: 900,
                parId: 0,
                authName: "数据检索页面",
                authType: 1,
                authCode: "01030800",
                children: [
                  {
                    id: 901,
                    parId: 900,
                    authName: "检索",
                    authType: 1,
                    authCode: "01030801",
                    children: null,
                  },
                  {
                    id: 902,
                    parId: 900,
                    authName: "批量检索",
                    authType: 1,
                    authCode: "01030802",
                    children: [
                      {
                        id: 904,
                        parId: 902,
                        authName: "下载明细表",
                        authType: 1,
                        authCode: "01030804",
                        children: null,
                      },
                    ],
                  },
                  {
                    id: 903,
                    parId: 900,
                    authName: "高级检索",
                    authType: 1,
                    authCode: "01030803",
                    children: [
                      {
                        id: 905,
                        parId: 903,
                        authName: "结果详情",
                        authType: 1,
                        authCode: "01030805",
                        children: [
                          {
                            id: 907,
                            parId: 905,
                            authName: "下载明细表",
                            authType: 1,
                            authCode: "01030807",
                            children: null,
                          },
                        ],
                      },
                      {
                        id: 906,
                        parId: 903,
                        authName: "结果分析",
                        authType: 1,
                        authCode: "01030806",
                        children: null,
                      },
                    ],
                  },
                ],
              },
            ],
            "2": [
              {
                id: 500,
                parId: 0,
                authName: "企业基本信息表",
                authType: 2,
                authCode: "02030400",
                children: [
                  {
                    id: 3,
                    parId: 500,
                    authName: "企业名称",
                    authType: 2,
                    authCode: "02030403",
                    children: null,
                  },
                  {
                    id: 4,
                    parId: 500,
                    authName: "统一社会信用代码",
                    authType: 2,
                    authCode: "02030404",
                    children: null,
                  },
                  {
                    id: 8,
                    parId: 500,
                    authName: "注册资金",
                    authType: 2,
                    authCode: "02030408",
                    children: null,
                  },
                  {
                    id: 9,
                    parId: 500,
                    authName: "注册地址",
                    authType: 2,
                    authCode: "02030409",
                    children: null,
                  },
                  {
                    id: 10,
                    parId: 500,
                    authName: "所在区域",
                    authType: 2,
                    authCode: "02030410",
                    children: null,
                  },
                  {
                    id: 11,
                    parId: 500,
                    authName: "注册时间",
                    authType: 2,
                    authCode: "02030411",
                    children: null,
                  },
                  {
                    id: 16,
                    parId: 500,
                    authName: "集群注册",
                    authType: 2,
                    authCode: "02030416",
                    children: null,
                  },
                  {
                    id: 19,
                    parId: 500,
                    authName: "法人代表",
                    authType: 2,
                    authCode: "02030419",
                    children: null,
                  },
                  {
                    id: 20,
                    parId: 500,
                    authName: "联系电话",
                    authType: 2,
                    authCode: "02030420",
                    children: null,
                  },
                  {
                    id: 21,
                    parId: 500,
                    authName: "经营范围",
                    authType: 2,
                    authCode: "02030421",
                    children: null,
                  },
                  {
                    id: 22,
                    parId: 500,
                    authName: "行业门类名称",
                    authType: 2,
                    authCode: "02030422",
                    children: null,
                  },
                  {
                    id: 24,
                    parId: 500,
                    authName: "新企业类型",
                    authType: 2,
                    authCode: "02030424",
                    children: null,
                  },
                  {
                    id: 25,
                    parId: 500,
                    authName: "注销时间",
                    authType: 2,
                    authCode: "02030425",
                    children: null,
                  },
                  {
                    id: 26,
                    parId: 500,
                    authName: "注销原因",
                    authType: 2,
                    authCode: "02030426",
                    children: null,
                  },
                  {
                    id: 27,
                    parId: 500,
                    authName: "所属街道",
                    authType: 2,
                    authCode: "02030427",
                    children: null,
                  },
                  {
                    id: 34,
                    parId: 500,
                    authName: "企业状态",
                    authType: 2,
                    authCode: "02030429",
                    children: null,
                  },
                ],
              },
            ],
          },
        },
      },
    },
  },
  {
    type: "get",
    url: "/mockApi/userRoseList",
    response: {
      code: 200,
      data: {
        data: [
          { id: 1, loginAccount: "zcx_admin" },
          { id: 142, loginAccount: "shenpiju" },
          { id: 145, loginAccount: "cloudwalk001" },
          { id: 146, loginAccount: "cloudwalk002" },
          { id: 147, loginAccount: "cloudwalk003" },
          { id: 148, loginAccount: "shenpiju2" },
          { id: 149, loginAccount: "cloudwalk004" },
          { id: 150, loginAccount: "cloudwalk005" },
          { id: 152, loginAccount: "shenpiju3" },
          { id: 153, loginAccount: "cloudwalk006" },
          { id: 154, loginAccount: "shenpiju4" },
          { id: 155, loginAccount: "cloudwalk007" },
          { id: 156, loginAccount: "dddddddddddd" },
          { id: 158, loginAccount: "shenpiju5" },
          { id: 159, loginAccount: "ttttttttt" },
          { id: 160, loginAccount: "cloudwalk011" },
          { id: 161, loginAccount: "act001" },
          { id: 164, loginAccount: "yuncong001" },
          { id: 165, loginAccount: "system" },
          { id: 166, loginAccount: "yuncong0011" },
          { id: 167, loginAccount: "yuncong002" },
          { id: 168, loginAccount: "yuncong004" },
          { id: 169, loginAccount: "act003" },
          { id: 170, loginAccount: "act004" },
          { id: 171, loginAccount: "cloudwalk0011" },
          { id: 174, loginAccount: "aaa001000" },
          { id: 176, loginAccount: "jigou8" },
          { id: 177, loginAccount: "ceshi001" },
          { id: 178, loginAccount: "bct001" },
          { id: 179, loginAccount: "bct002" },
          { id: 180, loginAccount: "bct003" },
          { id: 181, loginAccount: "bct004" },
          { id: 183, loginAccount: "ceAAAAAAA" },
          { id: 184, loginAccount: "cloudwalk00714" },
          { id: 185, loginAccount: "cloudwalk00713" },
          { id: 187, loginAccount: "cmt18408220906" },
          { id: 188, loginAccount: "tx18408220906" },
          { id: 189, loginAccount: "zhangchuangxin" },
          { id: 190, loginAccount: "cmt1840822" },
          { id: 191, loginAccount: "18408220806xt" },
          { id: 193, loginAccount: "cloudwalk008" },
          { id: 194, loginAccount: "wangyanjuanAAA" },
          { id: 195, loginAccount: "18408220906cmt" },
          { id: 196, loginAccount: "couldwalk009" },
          { id: 197, loginAccount: "18408220906cmt1" },
          { id: 198, loginAccount: "18408220806xt44" },
          { id: 199, loginAccount: "18408220906cmt343" },
          { id: 200, loginAccount: "pt18408220906" },
          { id: 201, loginAccount: "cmt1840822f" },
          { id: 202, loginAccount: "cloudwalk009" },
          { id: 203, loginAccount: "ask001" },
          { id: 204, loginAccount: "ask002" },
          { id: 205, loginAccount: "cloudwalk0010" },
          { id: 206, loginAccount: "cloudwalk0012" },
          { id: 207, loginAccount: "18408220906cmt111" },
          { id: 208, loginAccount: "cloudwalk0013" },
          { id: 209, loginAccount: "cloudwalk0014" },
          { id: 210, loginAccount: "18408220906cmte111" },
          { id: 211, loginAccount: "cloudwalk00715" },
          { id: 212, loginAccount: "ask003" },
          { id: 213, loginAccount: "cloudwalk0078" },
          { id: 214, loginAccount: "cloudwalk0079" },
          { id: 219, loginAccount: "18408220906cmt0" },
          { id: 220, loginAccount: "18408220906cmt144" },
          { id: 221, loginAccount: "4344343434" },
          { id: 222, loginAccount: "44444444" },
          { id: 223, loginAccount: "18408220906cmt14" },
          { id: 224, loginAccount: "18408220906tx1" },
          { id: 225, loginAccount: "cmt184082233333333" },
          { id: 226, loginAccount: "baize001" },
          { id: 227, loginAccount: "cmt1840822pt" },
          { id: 228, loginAccount: "cmt184082222" },
          { id: 229, loginAccount: "edeccd4444" },
          { id: 230, loginAccount: "18408220906cmt3434" },
          { id: 231, loginAccount: "ask004" },
          { id: 232, loginAccount: "ask005" },
          { id: 233, loginAccount: "cloudwalk0075" },
          { id: 234, loginAccount: "18408220906cmt122" },
          { id: 235, loginAccount: "cmt184082299900" },
          { id: 236, loginAccount: "38cmtdeddd" },
          { id: 237, loginAccount: "ask006" },
          { id: 238, loginAccount: "38cmtdjsjdjsjdj" },
          { id: 239, loginAccount: "eeeeeeeeeeeeeee" },
          { id: 240, loginAccount: "18408220906cmt1cf" },
          { id: 241, loginAccount: "18408220906c66mt" },
          { id: 242, loginAccount: "cmt1840822565" },
          { id: 243, loginAccount: "cmt18408225567" },
          { id: 244, loginAccount: "cmt1840822uuuu" },
          { id: 245, loginAccount: "cmt184082232q" },
          { id: 246, loginAccount: "cuiyibiao001" },
          { id: 247, loginAccount: "huangmin001" },
          { id: 248, loginAccount: "18408220906cmt0309" },
          { id: 249, loginAccount: "18408220906cm411" },
          { id: 250, loginAccount: "dfdfdfdfdfdf" },
          { id: 251, loginAccount: "cw001" },
          { id: 252, loginAccount: "cmt1840822094994" },
          { id: 253, loginAccount: "xiaxiaoyu" },
          { id: 254, loginAccount: "chenfeilong001" },
          { id: 255, loginAccount: "zhongjunwei001" },
          { id: 257, loginAccount: "JIUGOU001" },
          { id: 258, loginAccount: "tongjigouA01" },
          { id: 259, loginAccount: "JADIA0111" },
          { id: 289, loginAccount: "abcd1214" },
          { id: 290, loginAccount: "zhangwenbin001" },
          { id: 291, loginAccount: "zhangwenbin002" },
          { id: 292, loginAccount: "zhangwenbin003" },
          { id: 293, loginAccount: "zhangwenbin004" },
          { id: 294, loginAccount: "ceshiA01" },
          { id: 295, loginAccount: "cloudwalk0001919" },
          { id: 297, loginAccount: "amin11000" },
          { id: 298, loginAccount: "amin11001" },
          { id: 299, loginAccount: "zhangyan001" },
          { id: 300, loginAccount: "1212121" },
          { id: 301, loginAccount: "23823883889cmu" },
          { id: 303, loginAccount: "zhangwenbin005" },
          { id: 304, loginAccount: "333333qwqwqssd" },
          { id: 305, loginAccount: "333333qwqwqssd9" },
          { id: 306, loginAccount: "zhangwenbin006" },
          { id: 307, loginAccount: "zhangwenbin007" },
          { id: 309, loginAccount: "shenpiju6" },
          { id: 310, loginAccount: "xiaxiaoyu001" },
          { id: 311, loginAccount: "yuncong0318" },
          { id: 312, loginAccount: "sefdfdfgrrt5656" },
          { id: 313, loginAccount: "cmt03191" },
          { id: 314, loginAccount: "11837788595" },
          { id: 315, loginAccount: "2323455666_" },
          { id: 317, loginAccount: "zhangyanceee" },
          { id: 318, loginAccount: "edweddwe" },
          { id: 319, loginAccount: "zhangyan999" },
          { id: 320, loginAccount: "gavinyang" },
          { id: 323, loginAccount: "zhangwenbin010" },
          { id: 325, loginAccount: "ewewrwr_" },
          { id: 339, loginAccount: "zhangwenbin011" },
          { id: 340, loginAccount: "111111111zy" },
          { id: 341, loginAccount: "zhangyan11111" },
          { id: 342, loginAccount: "xutao_001" },
          { id: 343, loginAccount: "ceshi1234" },
          { id: 347, loginAccount: "zy123456" },
          { id: 348, loginAccount: "3232zy" },
          { id: 349, loginAccount: "zyzy12345" },
          { id: 350, loginAccount: "13888822355rgtgtgt" },
          { id: 352, loginAccount: "dedefr_666ee" },
          { id: 353, loginAccount: "xtt_test" },
          { id: 355, loginAccount: "ceshi001001" },
          { id: 500, loginAccount: "admin" },
          { id: 504, loginAccount: "edweddwea1111" },
          { id: 505, loginAccount: "xutao_002" },
          { id: 506, loginAccount: "cloudwalk0041" },
          { id: 510, loginAccount: "18709090999cmtt" },
          { id: 516, loginAccount: "434wrdfdfgrt56" },
          { id: 519, loginAccount: "gavinyangtest10001" },
          { id: 520, loginAccount: "xjjj1001" },
          { id: 521, loginAccount: "cjdcjiiii3033" },
          { id: 522, loginAccount: "liuxiaosan" },
          { id: 523, loginAccount: "123test" },
          { id: 532, loginAccount: "fzq_admin" },
        ],
      },
    },
  },
  {
    type: "get",
    url: "/mockApi/selectEnableUserList",
    response: {
      code: 200,
      data: [
        { id: 350, loginAccount: "13888822355rgtgtgt" },
        { id: 195, loginAccount: "18408220906cmt" },
        { id: 197, loginAccount: "18408220906cmt1" },
        { id: 500, loginAccount: "admin" },
        { id: 145, loginAccount: "cloudwalk001" },
        { id: 146, loginAccount: "cloudwalk002" },
        { id: 149, loginAccount: "cloudwalk004" },
        { id: 155, loginAccount: "cloudwalk007" },
        { id: 313, loginAccount: "cmt03191" },
        { id: 251, loginAccount: "cw001" },
        { id: 156, loginAccount: "dddddddddddd" },
        { id: 352, loginAccount: "dedefr_666ee" },
        { id: 325, loginAccount: "ewewrwr_" },
        { id: 532, loginAccount: "fzq_admin" },
        { id: 142, loginAccount: "shenpiju" },
        { id: 1, loginAccount: "zcx_admin" },
        { id: 291, loginAccount: "zhangwenbin002" },
        { id: 255, loginAccount: "zhongjunwei001" },
      ],
    },
  },
];
