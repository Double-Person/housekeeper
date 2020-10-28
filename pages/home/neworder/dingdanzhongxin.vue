<template>
	<view class="newfrom">
		
		
		<view class="top">
			<view v-for="(item, index) in titleList" :key="index" :class="{active: index === activeIndex}" @click="clickTitle(index, item.value)">{{item.label}}</view>
		</view>
		
		<TopSearch placeholder="搜索订单" @search="search"></TopSearch>
		
		<scroll-view :scroll-y="true" class="scroll-view-tab-list-body" :lower-threshold="100" @scrolltolower="scrolltolower">
			<view class="padding-bottom150">
				<view v-if="technicianOrderStatus.ALL === currentTabBar">
					<fromDeatil 
					:msg="(item.states == 0 && '设置方案') || (item.states == 1 && '完成') || (item.states == 2 && '取消')" :item="item" 
					v-for="(item,index) in titleList[activeIndex].list" :key="index"
					 @getDetail="getDetail(act)" @butongguo="butongguo" @tongyi="tongyi">
						<view class="slot-warp" v-if="item.states == 0">
						  <view class="slot-active"  @click="Aszfa(item)">设置方案</view>
						</view>
					 </fromDeatil>
					 <NoData :show="titleList[activeIndex].hasData"/>
				 </view>
				 <!-- 运行中 -->
				 <view v-if="technicianOrderStatus.ONGOING === currentTabBar">
				 	<fromDeatil 
					:msg="(item.states == 0 && '设置方案') || (item.states == 1 && '完成') || (item.states == 2 && '取消')" :item="item" 
					v-for="(item,index) in titleList[activeIndex].list" :key="index"
				 	 >
						 <view class="slot-warp">
						   <view class="slot-active" @click="Aszfa(item)">设置方案</view>
						 </view>
					 </fromDeatil>
					 <NoData :show="titleList[activeIndex].hasData"/>
				 </view>
				 <!-- 已完成 -->
				 <view v-if="technicianOrderStatus.COMPLETED === currentTabBar">
				 	<fromDeatil :msg="(item.states == 0 && '设置方案') || (item.states == 1 && '完成') || (item.states == 2 && '取消')" :item="item" v-for="(item,index) in titleList[activeIndex].list" :key="index"
				 	 @getDetail="yiwancheng"></fromDeatil>
					 <NoData :show="titleList[activeIndex].hasData"/>
				 </view>
				 <!-- 已取消 -->
				 <view v-if="technicianOrderStatus.CANCELLED === currentTabBar">
				 	<fromDeatil :msg="(item.states == 0 && '设置方案') || (item.states == 1 && '完成') || (item.states == 2 && '取消')" :item="item" v-for="(item,index) in titleList[activeIndex].list" :key="index"
				 	 @getDetail="yiquxiao"></fromDeatil>
					 <NoData :show="titleList[activeIndex].hasData"/>
				 </view>
				 
			</view>
		</scroll-view>
		
		
	</view>
</template>

<script>
	import fromDeatil from "@/components/fromAll.vue"
	import TopSearch from "@/components/TopSearch.vue"
	import NoData from "@/components/NoData.vue" 
	import {technicianOrderStatus} from '@/variable/orderCenter.js'
	import { technicianListAllById, selectgoodname } from "@/components/api/api.js"
	
	export default {
		data() {
			return {
				objParmas: {},
				currentTabBar: -1,
				activeIndex: 0,
				technicianOrderStatus: technicianOrderStatus,
				titleList: [{
						value: technicianOrderStatus.ALL,
						label: '全部',
						hasData: true,
						list: []
					},
					{
						value: technicianOrderStatus.ONGOING,
						label: '进行中',
						hasData: true,
						list: []
					},
					{
						value: technicianOrderStatus.COMPLETED,
						label: '已完成',
						hasData: true,
						list: []
					},
					{
						value: technicianOrderStatus.CANCELLED,
						label: '已取消',
						hasData: true,
						list: []
					}
				],
			}
		},
		components: {
			fromDeatil,
			TopSearch,
			NoData
		},
		async onLoad() {
			console.log('onLoad')
			this.currentTabBar = await this.titleList && this.titleList[0].value;
			await this._initParmas()
			await this.getList()
		},
		mounted() {
			 console.log('mounted')
		},
		methods: {
			// 初始化请求参数
			_initParmas() {
				this.objParmas = { technician_id: uni.getStorageSync('WORKERS_ID')}
				if(this.currentTabBar == 0) { // 0 进行中  1 已完成  2 已取消
					this.objParmas.states = ''
				}else if(this.currentTabBar == 1) {
					this.objParmas.states = 0
				}else if(this.currentTabBar == 2) {
					this.objParmas.states = 1
				}else if(this.currentTabBar == 3) {
					this.objParmas.states = 2
				}
			},
			async clickTitle(index, value) {
				this.activeIndex = await index;
				this.currentTabBar = await value
				await this._initParmas()
				await this.getList()
			},
			// 获取列表
			async getList () {
				await this._initParmas()
				await technicianListAllById(this.objParmas).then(res => {
					this.titleList[this.currentTabBar].hasData = (res.varList.length === 0)
					this.titleList[this.currentTabBar].list = res.varList
				})
			},
			search(val) {
				// technician_id 技术员id    states（全部不传）   0设置方案、1完成、2取消、3重新设置、4、待审核     query 参数
				this.objParmas.query = val
				selectgoodname(this.objParmas).then(res => {
					this.titleList[this.currentTabBar].list = res.varList
				})
			},
			scrolltolower(e) {},
			// 施工跳转
			getDetail(){
				uni.navigateTo({
					url:"./sgdetailAll"
				})
			},
			
			yiwancheng(){
				uni.navigateTo({
					url:'dyixiangqing'
				})
			},
			yiquxiao(){
				uni.navigateTo({
					url:'dmeixiangqing'
				})
			},
			Aszfa(item){
				uni.navigateTo({
					url:'shezhifangan?info=' + JSON.stringify(item)
				})
			}
		},
		
	}
</script>

<style lang="scss" scoped>
	@import '../../../common/style/tabList.scss';
	
	.top{
		padding: 0;
		width: 100%;
	}

	
</style>
