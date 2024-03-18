<template>
  <div>
    <account-header
      :search-params="searchParams"
      @action-event="handleActionEvent"
    ></account-header>
    <account-table :account-list="accountList"></account-table>
  </div>
</template>

<script>
import AccountHeader from "@/business/system/account/header.vue";
import AccountTable from "@/business//system/account/table.vue";
import { getAccountList } from "@/api/system/account";
export default {
  components: {
    AccountHeader,
    AccountTable,
  },
  data() {
    return {
      searchParams: {
        page: 1,
        pageSize: 10,
        accountName: "",
        realName: "",
        accountStatus: null,
      },
      accountList: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      getAccountList(this.searchParams)
        .then((res) => (this.accountList = res.content))
        .catch(() => {});
    },
    handleActionEvent(action, data) {
      switch (action) {
        case "reset":
          this.searchParams = {
            page: 1,
            pageSize: 10,
            accountName: "",
            realName: "",
            accountStatus: null,
          };
          this.getList();
          break;
        case "search":
          this.getList();
          break;
      }
    },
  },
};
</script>
