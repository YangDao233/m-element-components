/*
 * @Description:
 * @Author: fengzhaoquan@cloudwalk.com
 * @Date: 2022-06-21 21:10:41
 * @LastEditTime: 2022-07-14 14:37:52
 */
namespace FormInterface {
  export interface Form {
    [propName: string]: any;
  }
  export type ItemType =
    | null
    | "input"
    | "input-pwd"
    | "select"
    | "range-picker"
    | "cascader"
    | "switch"
    | "tree-select"
    | "transfer"
    | "special-table"
    | "input-number";
  export interface OptionItem {
    label: string;
    value: number;
    [propName: string]: any;
  }
  export interface Controls {
    options?: any[];
    treeData?: any[];
    style?: any;
    [propName: string]: any;
  }
  export interface FieldItem {
    order?: number;
    itemType: ItemType;
    value?: string;
    label: string | null;
    fieldHidden?: boolean;
    field?: Controls;
    [propName: string]: any;
  }
  export interface Props {
    form: Form;
    fields: Array<FieldItem>;
    isShowForm?: boolean;
  }
}

export default FormInterface;
