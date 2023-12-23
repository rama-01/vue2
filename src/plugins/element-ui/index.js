import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';
//按需引入
import { Button, Menu, Submenu, MenuItem, MenuItemGroup, Dropdown, DropdownMenu, DropdownItem, MessageBox, Message, Row, Col } from 'element-ui';
//也可以写为
Vue.use(Button)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Col)

// Vue.use(MessageBox)  //这里不能use方法，否则刷新页面会先执行一次
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;
