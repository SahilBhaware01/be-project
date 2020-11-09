<template>
<div>    
<!-- ///////////////////////////////////////////////////////////////////////////// -->
<header data-v-1bcdaf04="" class="d-print-none header-style v-sheet theme--dark v-toolbar v-app-bar v-app-bar--fixed" 
data-booted="true" style="height: 56px; margin-top: 0px; transform: translateY(0px); left: 0px; right: 0px;">
        <div class="v-toolbar__content" style="height: 56px;">
            <button data-v-1bcdaf04="" type="button" class="v-app-bar__nav-icon v-btn v-btn--flat v-btn--icon v-btn--round theme--dark v-size--default">
                <span class="v-btn__content">
                    <i data-v-1bcdaf04="" aria-hidden="true" class="v-icon notranslate mdi mdi-menu theme--dark" @click.stop="drawer = !drawer"></i>
                </span>
            </button>
            <div data-v-1bcdaf04="" class="v-toolbar__title ml-0 pl-4" style="width: 300px;">
                <span data-v-1bcdaf04="" class="hidden-sm-and-down">
                <div data-v-1bcdaf04="" aria-label="School Logo" role="img" class="v-image v-responsive shrink mr-2 theme--dark" 
                    style="width: 130px; height: 94px;">
                    <div class="v-responsive__sizer" style="padding-bottom: 44.6839%;">
                        </div>
                        <div class="v-responsive__content" style="width: 1392px;"></div>
                    </div>
                </span>
            </div>
            <div data-v-1bcdaf04="" class="spacer">
            </div>
            <div data-v-1bcdaf04="" class="v-toolbar__title ml-0 pl-4" style="width: 250px;">
                <span data-v-1bcdaf04="" class="hidden-sm-and-down" style="color: white; font-size: 16px; float: right;"> sahil.17u422@viit.ac.in 
                </span>
            </div>
            
            <v-btn icon>
                 <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
            
            
        </div>
    </header>
<!-- ////////////////////////////////////////////////////////////////////////////// -->
  <!-- <v-card
    class="mx-auto overflow-hidden"
    height="400"
    width="100%"
    opacity="100%"
  >
     -->

    <v-navigation-drawer
      v-model="drawer"
      absolute
      left
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title><router-link to="/guideHome">HomePage</router-link></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><router-link to="/guideHome2">Projects</router-link></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><router-link to="/details">ProjectDetails</router-link></v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
   
    </v-navigation-drawer>
    <div class="topdiv">mainpage3</div>
    <router-view></router-view>
 
  <!-- </v-card> -->
  </div>
</template>

<script>

  export default {
    components: {
      
  },
    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = true
      },
    },
  }
</script>