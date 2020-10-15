<template>
	<view class="sou">
		<uni-search-bar :radius="100" :placeholder="placeholder" @confirm="search" class="input-search-own" cancelButton="none"></uni-search-bar>
		<!-- <view class="sou_ipt">
			<input type="text" v-model="value" @input="inputSearch" />
			<view class="order_txt" v-if="isShow">
				<view class="sou_icon">
					<image src="../static/order_icon/sou.png"></image>
				</view>
				<view class="text">{{placeholder}}</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	import uniSearchBar from "./uni-search-bar/uni-search-bar.vue"
	// /components/uni-badge/uni-badge.vue
	export default {
		props: {
			placeholder: {
				type: String,
				default: '搜索'
			}
		},
		components: {
			uniSearchBar
		},
		data() {
			return {
				isShow: true,
				value: ''
			}
		},
		created() {
			console.log('--')
		},
		methods: {
			search(val) {
				this.$emit('searchValue', val.value)
			},
			inputSearch() {
				console.log(this.value)
				if (this.value.length) {
					this.isShow = false
				} else {
					this.isShow = true
				}
				this.$emit('searchValue', this.value)
			}
		}
	}
</script>

<style scoped>
	.sou {
		width: 100%;
		height: 130upx;
		background-image: url(../static/order_icon/suo_big.png);
		overflow: hidden;
		position: relative;
	}

	.input-search-own {
		position: absolute;
		left: 40upx;
		right: 40upx;
		top: 50%;
		transform: translateY(-50%);
	}

	.uni-searchbar {
		padding: 0;
		border-radius: 200upx;
	}

	.sou_ipt {
		width: 671upx;
		height: 71upx;
		overflow: hidden;
		margin: 28upx auto 0 auto;
		border-radius: 50upx;
		position: relative;
		background-color: #fff;
	}

	input {
		width: 100%;
		height: 71upx;

		padding-left: 40upx;
		position: absolute;
		position: relative;
		z-index: 3;
		background: rgba(0, 0, 0, 0);
	}

	.order_txt {
		position: absolute;
		z-index: 2;
		width: 100%;
		height: 34upx;
		top: 16upx;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.sou_icon {
		width: 30upx;
		height: 30upx;
		position: relative;
		/* float: left; */
	}

	.sou_icon image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		vertical-align: middle;
		border: none;
		font-size: 0;
		position: absolute;
		top: 0;

	}

	.order_txt .text {
		display: block;
		float: left;
		font-size: 28upx;
		color: #B2B2B2;
		margin-left: 19upx;
		margin-top: 6upx;
	}
</style>
