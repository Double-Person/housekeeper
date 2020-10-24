<template>
	<view class="sou">
		<uni-search-bar :radius="100" :placeholder="placeholder" @confirm="search" class="input-search-own" cancelButton="none"></uni-search-bar>
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
	
		methods: {
			search(val) {
				// this.$emit('searchValue', val.value)
				this.$emit('search', val.value)
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
	
	::v-deep .uni-searchbar__box{
		border-color: #fff !important;
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

	
</style>
