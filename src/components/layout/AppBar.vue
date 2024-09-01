<template>
  <v-app-bar class="v-app-bar">
    <v-app-bar-nav-icon v-if="shouldShowDrawer && !isLgAndUp" @click="drawer = !drawer" />

    <div class="logo-main">s
      <img :src="logoAnid" alt="ANID Logo" />
    </div>

    <div v-if="activeUser" class="block-user-v1">
      <img class="block-user-v1--img" :src="activeUser.profileImg" :alt="activeUser.name" />
      <div class="block-user-v1--profile">
        <div class="block-user-v1--name">{{ activeUser.name }}</div>
        <div class="block-user-v1--org">{{ activeUser.org }}</div>
        <div class="block-user-v1--hist">Último ingreso: {{ activeUser.lastLogin }}</div>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
// import logoAnid from '../../assets/images/logo-anid.png';

export default {
  name: "AppBar",
  data() {
    return {
      logoAnid,
      users: [
        {
          role: 'role1',
          name: 'Patricio Garrido',
          org: 'patricio@usach.cl',
          lastLogin: '22:12:12 - 8/10/24',
          profileImg: 'https://idd.cl/d/anid/assets/img/profile-pato.png',
        },
        {
          role: 'role2a',
          name: 'María José Ensignia',
          org: 'PUC.cl',
          lastLogin: '10:21:21 - 9/11/24',
          profileImg: 'https://idd.cl/d/anid/assets/img/profile-cote.png',
        },
        {
          role: 'role2b',
          name: 'María José Ensignia(R)',
          org: 'PUC.cl',
          lastLogin: '10:21:21 - 9/11/24',
          profileImg: 'https://idd.cl/d/anid/assets/img/profile-cote.png',
        },
      ],
    };
  },
  computed: {
    activeUser() {
      if (this.isActiveRole1) return this.users.find(user => user.role === 'role1');
      if (this.isActiveRole2a) return this.users.find(user => user.role === 'role2a');
      if (this.isActiveRole2b) return this.users.find(user => user.role === 'role2b');
      return null;
    },
  },
};
</script>

<style scoped>
.logo-main  {
  border: 1px solid #ff0!important;

}
.logo-main img {
  height: 40px;
  margin-left: 24px;
}

.block-user-v1 {
  display: flex;
  align-items: center;
}

.block-user-v1--img {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.block-user-v1--profile {
  display: flex;
  flex-direction: column;
}

.block-user-v1--name {
  font-weight: bold;
}

.block-user-v1--org {
  color: gray;
}

.block-user-v1--hist {
  font-size: 0.8em;
  color: darkgray;
}
</style>
