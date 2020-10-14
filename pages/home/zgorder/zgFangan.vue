<template>
	
	<view class="newfrom">
		
		<Topsearch @searchValue='searchValue' placeholder="搜索订单"/>
		
		<!--  -->
		<view class="top">
		
			<view v-for="(item, index) in titleList" :key="index" :class="{active: index === activeIndex}" @click="clickTitle(index)">{{item}}</view>
			
		</view>
		
		<!--  -->
		<view class="form_deta" :class="{block:act==0}">
			<fromDeatil msg="msg" :flag="8" @getDetail="getDetail(act)" @butongguo="butongguo" @tongyi="tongyi"></fromDeatil>
		</view>
	</view>
</template>

<script>
	import fromDeatil from "../../../components/fromAll.vue"
	import Topsearch from "../../../components/Topsearch.vue"
	export default {
		data() {
			return {
				activeIndex: 0,
				titleList: ['待通过', '已通过', '未通过'],
				act: 1
			}
		},
		components: {
			fromDeatil,
			Topsearch
		},
		methods: {
			searchValue(val) {
				
			},
			clickTitle(index) {
				this.activeIndex = index
			},
			getDetail(act){
				console.log(1)
				uni.navigateTo({
					url:'zgfanganxiangqing'
				})
			},
			// 施工跳转
			sgDetail(){
				uni.navigateTo({
					url:"./sgDetail"
				})
			},
			butongguo(){
				uni.navigateTo({
					url:"zgfanganquxiao"
				})
			},
			tongyi(){
				uni.navigateTo({
					url:'zgfanganNew'
				})
			}
		},
		
	}
</script>

<style lang="scss" scoped>
	
	.top {
		padding: 0 20upx;
		width: 710upx;
		height: 110upx;
		display: flex;
		flex-wrap: nowrap;
		overflow: hidden;
		// border: 1px solid red;
		display: flex;
		justify-content: space-between;
		background:rgba(255,255,255,1);
	}
	
	.top view {
		height: 61upx;
		float: left;
		// border: 1px solid red;
		margin-left: 67upx;
		font-size: 32upx;
		margin-top: 21upx;
		line-height: 61upx;
	}
	
	.top view:nth-of-type(1) {
		margin-left: 9upx;
	}
	.active {
		border-bottom: 6upx solid #FFC823;
		font-weight: 700;
	}
</style>
