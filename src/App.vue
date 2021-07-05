<template>
  <div id="app">
    <div class="nav">
      <ul>
        <li>
          <router-link to="*">
            <el-button type="primary">登录页面</el-button>
          </router-link>
        </li>
        <li>
          <router-link to="/oa">
            <el-button type="primary">OA管理系统</el-button>
          </router-link>
        </li>
      </ul>


    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scope>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}
#app {
  margin-top: 20px;
}
.nav>ul{
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}
.nav>ul li{
  padding: 0 20px;
}
</style>
