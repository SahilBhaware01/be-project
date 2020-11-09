import HelloWorld from './components/HelloWorld.vue'

import MainPage1 from './components/student/mainpage1.vue';
import MainPage2 from './components/guide/mainpage2.vue';
import MainPage3 from './components/hod/mainpage3.vue';
import MainPage4 from './components/director/mainpage4.vue';
import MainPage5 from './components/management/mainpage5.vue';


import Stu_Homepage from './components/student/stu_homepage.vue';
import AllTasks from './components/student/AllTasks.vue';

import GuideHome from './components/guide/guideHome.vue';
import GuideHome2 from './components/guide/guideHome2.vue';

import HodHome from './components/hod/hodhome.vue';
import HodAllProjects from './components/hod/hodallprojects.vue';

import DirHome from './components/director/dirhome.vue';
import DirAllProjects from './components/director/dirallprojects.vue';

import MnHome from './components/management/mnhome.vue';
import MnAllProjects from './components/management/mnallprojects.vue';

import ProjectDetails from './components/Project_details.vue';

export default[

    {path:'/',component:HelloWorld},
    {path:'/alltasks',component:AllTasks},
    {path:'/details',component:ProjectDetails},
    {path:'/stu_homepage',component:Stu_Homepage},

    {path:'/guidehome',component:GuideHome},
    {path:'/guidehome2',component:GuideHome2},

    {path:'/hodhome',component:HodHome},
    {path:'/hodall',component:HodAllProjects},

    {path:'/dirhome',component:DirHome},
    {path:'/dirall',component:DirAllProjects},

    {path:'/mnhome',component:MnHome},
    {path:'/mnall',component:MnAllProjects},

    {path:'/mainpage1',component:MainPage1},
    {path:'/mainpage2',component:MainPage2},
    {path:'/mainpage3',component:MainPage3},
    {path:'/mainpage4',component:MainPage4},
    {path:'/mainpage5',component:MainPage5},



]
