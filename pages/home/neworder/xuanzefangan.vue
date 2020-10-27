<template>
	<view class="index">
		<TopSearch placeholder="搜索订单"></TopSearch>

		<view class="box">
			<view class="tit" v-for="(item,index) in list" :key="index">
				<view class="titT">
					<view class="titi">{{item.typename}}</view>
					<image src="/static/loginImg/hxiala.png" mode="" @click="clickFirst(item, index)"></image>
				</view>
				<!-- item.isShow    -->
				<view v-show="item.isShow">
					<view class="titTs" v-for="(items,idex) in item.list" :key="idex">
						<view class="titBox">
							<view class="titi">{{items.seriesname}}</view>
							<image src="/static/loginImg/xlll.png" mode="" @click="clickSen(items,index,idex)"></image>
						</view>
						<view v-show="items.isShow">
							<view class="text" v-for="(ele,idey) in items.list" :key="idey">
								<!-- seriesname -->
								<view class="textb" @click="clickThree(ele, index, idex, idey)"> 
									<image src="/static/loginImg/aaxa.png" mode="" v-show="checkSeriesId == ele.series_id"></image>
									<image src="/static/loginImg/kax.png" mode="" v-show="checkSeriesId != ele.series_id"></image>
									<text>三级名称名称名称名称名称名称名称</text>
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
			<input type="text" value="填写" class="inp" />
		</view>
		<!-- 完工时间 -->
		<view class="timek">
			<text>完工时间</text>
			<input type="text" value="填写" class="inp" />
		</view>
		<!-- 确定 -->
		<view class="btn" @click="btn">确定</view>
	</view>
</template>

<script>
	import TopSearch from "@/components/TopSearch.vue"
	import {
		programme1, programme2, programme3
	} from "@/components/api/api.js"
	export default {
		components: {
			TopSearch
		},
		data() {
			return {
				checkSeriesId: '',
				list: []

			}
		},
		onLoad() {
			this._programme1()
		},
		methods: { // typeid   series_id
			// 点击第一层
			clickFirst(item, index) {
				this.list[index].isShow = !item.isShow
				this._programme2(item.programmetype_id, index)
				
			},
			// 点击第二层
			clickSen(item, index1, index) {
				this._programme3(item, index1, index)
				this.$forceUpdate()
			},
			// 点击第三层
			clickThree(ele, index, idex, idey) {
				this.checkSeriesId = ele.series_id
				this.$forceUpdate()
			},
		
			// 获取第一级数据
			_programme1() {
				programme1().then(res => {
					this.list = res.returnMsg
					this.list.forEach(ele => {
						ele.isShow = false
					})
				})
			},
			// 获取第二级数据
			_programme2(typeid,index) {
				programme2({typeid}).then(res => {
					this.list[index].list = res.returnMsg
					this.list[index].list.forEach(ele => {
						ele.isShow = false
					})
				}).finally(() => {
					this.$forceUpdate()
				})
			},
			// 获取第三级数据
			_programme3(obj, index1, index) {
				programme2({typeid: obj.typeid, series_id: obj.series_id}).then(res => {
					this.list[index1].list[index].list = res.returnMsg;
					this.list[index1].list[index].isShow = !obj.isShow
					console.log('获取第三级数据', this.list[index1].list[index].list)
				}).finally(() => {
					this.$forceUpdate()
				})
			},

			// 确定
			btn() {
				uni.navigateTo({
					url: 'dingdanzhongxin'
				})
			}


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
		width: 24rpx;
		height: 13rpx;
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
				padding: 15rpx 25upx;
				width: 620upx;
				// height: 132upx;
				background: rgba(242, 242, 242, 1);
				border-radius: 12upx;

				.textb {
					height: 50upx;
					display: flex;
					align-items: center;

					image {
						display: block;
						width: 34upx;
						height: 34upx;
						margin-right: 16upx;
					}

					text {
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
