namespace MenuInterface {
  export interface Item {
    key: string;
    title: string;
    icon: string;
    children?: Array<Item>;
  }
}
export default MenuInterface;
