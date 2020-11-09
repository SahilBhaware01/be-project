<template>
<div>
<div class="topdiv"></div>
<Mainpage1></Mainpage1>

<h1>project details page</h1>
</div>
</template>

<script>
import Mainpage1 from './student/mainpage1.vue';

export default {
 

  components: {
    Mainpage1,
  },
};
</script>

<style>
.topdiv{
    margin-top:40px;
    
}
</style>