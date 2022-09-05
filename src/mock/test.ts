

export default [
    {
      type: "get",
      url: "/mockApi/getTest",
      response: () => {
        return [{ name: "tttt", age: 18 }];
      },
    },
  ];