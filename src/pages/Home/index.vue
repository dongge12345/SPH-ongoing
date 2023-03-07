<template>
  <div>
    <TypeNav />
    <ListContainer />
    <TodayRecommend />
    <Rank />
    <Like />
    <Floor />
    <Floor />
    <Brank />
  </div>
</template>

<script>
import TypeNav from '@/components/TypeNav'
import ListContainer from './ListContainer'
import TodayRecommend from './TodayRecommend'
import Like from './Like'
import Rank from './Rank'
import Floor from './Floor'
import Brank from './Brank'
export default {
    name:"Home",
    props:['params1','query1'],
    mounted(){
    },
    components:{
        TypeNav,
        ListContainer,
        TodayRecommend,
        Rank,
        Like,
        Floor,
        Brank
    }
}
</script>

<style>

</style>