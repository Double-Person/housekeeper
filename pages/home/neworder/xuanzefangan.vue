<template>
	<view class="index">
		<TopSearch placeholder="搜索订单" ref="topSearch" @search="searchPlant"></TopSearch>

		<view class="box">
			<view class="tit" v-for="(item,index) in list" :key="index">
				<view class="titT" @click="clickFirst(item, index)">
					<view class="titi">{{item.typename}}</view>
					<image src="/static/loginImg/hxiala.png" mode="" ></image>
				</view>
				<!-- item.isShow    -->
				<view v-show="item.isShow">
					<view class="titTs" v-for="(items,idex) in item.list" :key="idex">
						<view class="titBox" @click="clickSen(items,index,idex)">
							<view class="titi">{{items.seriesname}}</view>
							<image src="/static/loginImg/xlll.png" mode="" ></image>
						</view>
						<view v-show="items.isShow">
							<view class="text" v-for="(ele,idey) in items.list" :key="idey">
								<!-- seriesname -->
								<view class="textb" @click="clickThree(ele, index, idex, idey)">
									
									<image src="/static/loginImg/aaxa.png" mode="" v-show="checkProgrammeListId.includes(ele.programme_id)"></image>
									<image src="/static/loginImg/kax.png" mode="" v-show="!checkProgrammeListId.includes(ele.programme_id)"></image>
									<text>{{ele.name}}</text>
								</view>

							</view>
						</view>
					</view>
				</view>

			</view>
		</view>
		<!-- 开工时间 -->

		<view class="timek">
			<text>开工时间</text>
			<!-- <input type="text" value="填写" class="inp" /> -->
			<picker mode="date" :value="times.startDate" @change="bindDateChange($event,'startDate')">
				<view class="uni-input">{{times.startDate}}</view>
			</picker>
			<picker class="picker-time" mode="time" :value="times.startTimes" @change="bindTimeChange($event,'startTimes')">
				<view class="uni-input">{{times.startTimes}}</view>
			</picker>
		</view>
		<!-- 完工时间 -->
		<view class="timek">
			<text>完工时间</text>
			<picker mode="date" :value="times.endDate" @change="bindDateChange($event,'endDate')">
				<view class="uni-input">{{times.endDate}}</view>
			</picker>
			<picker class="picker-time" mode="time" :value="times.endTimes" @change="bindTimeChange($event,'endTimes')">
				<view class="uni-input">{{times.endTimes}}</view>
			</picker>
		</view>
		<!-- 确定 -->
		<view class="btn" @click="btn">确定</view>
	</view>
</template>

<script>
	import TopSearch from "@/components/TopSearch.vue"
	import { eventBus } from "@/components/eventBus/eventBus.js"
	import {
		programme1,
		programme2,
		programme3,
		search
	} from "@/components/api/api.js"
	export default {
		components: {
			TopSearch
		},
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				hierarchy: '1', // 层级
				query: '',
				first: {},
				sen: {},
				
				
				checkProgrammeId: '',
				checkProgrammeList: [],
				checkProgrammeListId: [],
				list: [],
				times: {
					endDate: this.getDate(), // 结束日期
					endTimes: `${(new Date()).getHours()}:${(new Date()).getMinutes()} `, // 结束时间
					startDate: this.getDate(), // currentDate, // 开始日期
					startTimes: `${(new Date()).getHours()}:${(new Date()).getMinutes()} `, // 开始时间
				},
				info: {},
				order_id: '',
				selectList: [], // 选择的数据

			}
		},
		onLoad(option) {
			if(option.info) {
				this.info = JSON.parse(option.info)
			}
			
			
			if(option.order_id) {
				this.order_id = option.order_id
			}
			this._programme1()
		},
		
		methods: { // typeid   series_id
			// 顶部搜素
			searchPlant(info) {
				this.query = info;			
				if(this.hierarchy == '1') {
					this._programme1()
				}else if(this.hierarchy == '2') {
					let { id, index, isShow} = this.first;
					if(!isShow) this._programme1()
					else this._programme2(id, index)
				}else if(this.hierarchy == '3') {
					let { item, index1, index, isShow } = this.sen;
					if(!isShow) {
						let { id, index} = this.first;
						this._programme2(id, index)
					}else{
						this._programme3(item, index1, index)
					}
					
				}
				// if(this.query.trim() == '') {
				// 	this._programme1()
				// }
				// search({info}).then(res => { })
			},
			// 点击第一层
			clickFirst(item, index) {
				this.list[index].isShow = !item.isShow
				this._programme2(item.programmetype_id, index)
				this.first = { id: item.programmetype_id, index: index, isShow: item.isShow };
				this.hierarchy = '2'
				this.$refs.topSearch.clear();
				this.query = ''
			},
			// 点击第二层
			clickSen(item, index1, index) {
				this._programme3(item, index1, index)
				
				this.sen = { item, index1, index, isShow: item.isShow };
				this.hierarchy = '3'
				
				this.$refs.topSearch.clear();
				this.query = ''
				// this.$forceUpdate()
			},
			// 点击第三层
			clickThree(ele, index, idex, idey) {
				this.checkProgrammeId = ele.programme_id
				if( !this.checkProgrammeListId.includes(ele.programme_id) ) {
					this.checkProgrammeListId.push(ele.programme_id);
					ele.num = ''
					this.selectList.push(ele)
				}else {
					let findIndexNum = this.checkProgrammeListId.findIndex( item => item == ele.programme_id );
					this.checkProgrammeListId.splice(findIndexNum, 1)
					this.selectList = this.selectList.filter(item => item.programme_id != ele.programme_id)
				}
				console.log(ele.programme_id)
				
				this.$refs.topSearch.clear();
				this.query = ''
				console.log(this.selectList)
				
				this.$forceUpdate()
				return false;
			},

			// 确定按钮
			btn() {
				let endtime = this.formatTime(this.times.endDate + ' ' + this.times.endTimes);
				let starttime = this.formatTime(this.times.startDate + ' ' + this.times.startTimes);
				let selectPlant = {
					endtime,
					starttime,
					list: this.selectList
				}			
				if(this.selectList.length === 0) {
					uni.showToast({
						title: '请至少选择一种方案',
						icon: 'none'
					})
				}
		
				// eventBus.$emit('selectPlant', selectPlant);
				
				setTimeout(() => {
					uni.$emit("selectPlant", selectPlant);
				}, 500)
				console.log('发送时间')
				
				uni.navigateTo({
					url: './shezhifangan?info=' + JSON.stringify(this.info) + '&order_id=' + this.order_id
				})
			},
			
			formatTime(time) {
				let newTime = new Date( time );
				let year = newTime.getFullYear(), 
					month = this.padStart(newTime.getMonth() + 1) ,
					day = this.padStart(newTime.getDate()),
					hours = this.padStart(newTime.getHours()),
					minutes = this.padStart(newTime.getMinutes()),
					seconds = this.padStart(newTime.getSeconds()) || '00';
				let timeStr = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
				return timeStr
			},
			padStart(val) {
				return val < 10 ?  '0' + val : val
			},

			// 选择日期
			bindDateChange(event, type) {
				let arr = event.target.value.split('-')
				this.times[type] = arr[0] + '-'+ arr[1] + '-'+ arr[2]
			},
			// 选择时间
			bindTimeChange(event, type) {
				let arr = event.target.value.split(':')
				this.times[type] = arr[0] + ':'+ arr[1]
			},

			// 获取第一级数据
			_programme1() {
				let token = uni.getStorageSync('HOUSE_TOKEN');
				uni.showLoading({
					title: '加载中',
					mask: true
				})
				programme1({token, query: this.query}).then( res => {
					this.list = res.returnMsg
					this.list && this.list.forEach(ele => {
						ele.isShow = false
					})
				}).finally(() => {
					uni.hideLoading();
				})
			},
			// 获取第二级数据
			_programme2(typeid, index) {
				let token = uni.getStorageSync('HOUSE_TOKEN');
				uni.showLoading({
					title: '加载中',
					mask: true
				})
				programme2({
					typeid, token, query: this.query
				}).then(res => {
					this.list[index].list = res.returnMsg
					this.list[index].list.forEach(ele => {
						ele.isShow = false
					})
				}).finally(() => {
					uni.hideLoading();
					this.$forceUpdate()
				})
			},
			// 获取第三级数据
			_programme3(obj, index1, index) {
				let token = uni.getStorageSync('HOUSE_TOKEN');
				uni.showLoading({
					title: '加载中',
					mask: true
				})
				programme3({
					typeid: obj.typeid,
					series_id: obj.series_id,
					token, query: this.query
				}).then(res => {
					this.list[index1].list[index].list = res.returnMsg;
					this.list[index1].list[index].isShow = !obj.isShow
				}).finally(() => {
					uni.hideLoading();
					this.$forceUpdate()
				})
			},

			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},



		}
	}
</script>

<style lang="scss" scoped>
	.index {
		width: 750upx;
		height: 100vh;
		background: #f2f2f2;

	}

	image {
		width: 13rpx;
		height: 24rpx;
	}

	.box {
		margin-bottom: 19upx;
		padding: 25upx 40upx;
		width: 670upx;
		background: rgba(255, 255, 255, 1);

		.tit {

			.titT {
				width: 670upx;
				height: 80upx;
				border-bottom: 1upx solid rgba(191, 191, 191, 1);
				display: flex;
				justify-content: flex-end;
				align-items: center;

				.titi {
					font-size: 28upx;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(26, 26, 26, 1);
					line-height: 80upx;
				}

				image {
					margin-left: auto;
					display: block;
					width: 40upx;
					height: 40upx;
				}
			}

			.titTs {
				.titBox {
					padding-left: 20upx;
					width: 650upx;
					height: 70upx;
					display: flex;
					justify-content: flex-end;
					align-items: center;

					.titi {
						font-size: 28upx;
						font-family: PingFang SC;
						font-weight: 400;
						color: rgba(169, 169, 169, 1);
					}

					image {
						margin-left: auto;
						display: block;
					}

					.imgH {
						width: 24upx;
						height: 13upx;
					}

					.imgW {
						width: 13upx;
						height: 24upx;
					}
				}
			}

			.text {
				margin-bottom: 15rpx;
				padding: 15rpx 25upx;
				width: 620upx;
				// height: 132upx;
				background: rgba(242, 242, 242, 1);
				border-radius: 12upx;

				.textb {
					min-height: 50upx;
					display: flex;
					align-items: center;

					image {
						display: block;
						width: 34upx;
						height: 34upx;
						margin-right: 16upx;
					}

					text {
						width: 580rpx;
						font-size: 28upx;
						font-family: PingFang SC;
						font-weight: 400;
						color: rgba(26, 26, 26, 1);
					}
				}
			}
		}
	}

	.timek {
		margin-bottom: 10upx;
		padding: 0 40upx;
		width: 670upx;
		height: 80upx;
		background: rgba(255, 255, 255, 1);
		display: flex;
		align-items: center;
		.picker-time{
			margin-left: 50rpx;
		}

		text {
			display: block;
			width: 160upx;
			font-size: 28upx;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(26, 26, 26, 1);
		}

		.inp {
			margin-left: 127upx;
			width: 152upx;
			font-size: 28upx;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(169, 169, 169, 1);

		}
	}

	.btn {
		// position: fixed;
		// left: 15upx;
		// bottom: 32upx;
		margin: 50rpx auto;
		width: 715upx;
		height: 91upx;
		text-align: center;
		line-height: 91upx;
		font-size: 36upx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		background: #FFC10C;
		border-radius: 10upx;
	}
</style>
