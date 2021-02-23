<template>
	<view class="contract">
		<!-- 施工合同 -->
		<!-- 第一页 -->
		<view class="page" id="contractimage1">
		
			<view class="fl a-i-center"><text class="serial-number">编号：</text><input type="text" class="contract-input" :disabled="isDisabled" v-model="form.value1" /></view>
			<view class="text-center contract-name">四川房管家信息科技有限公司施工合同</view>
			
			<view class="fl a-i-center jc-center"><text class="serial-number">甲方：</text><input type="text" :disabled="isDisabled" v-model="form.value2" class="contract-input" /></view>
			<view class="fl a-i-center jc-center"><text class="serial-number">乙方：</text>四川房管家信息科技有限公司</view>
			
			<view class="fl a-i-center jc-center">
				<text class="serial-number">签订日期：</text>
				<input :disabled="isDisabled" type="text" class="date-input" v-model="form.value3" />
				<text class="serial-number">年</text>
				<input :disabled="isDisabled" type="text" class="date-input" v-model="form.value4" />
				<text class="serial-number">月</text>
				<input :disabled="isDisabled" type="text" class="date-input" v-model="form.value5" />
				<text class="serial-number">日</text>
			</view>
			
			<view class="page-number">
				第1页 共{{ pages }}页
			</view>
		</view>

		<!-- 第二页 -->
		<view class="page" id="contractimage2">
			<view class="fl a-i-center"><text class="serial-number">甲方：</text><input :disabled="isDisabled" type="text" v-model="form.value6" class="contract-input" /></view>
			<view class="fl a-i-center"><text class="serial-number">负责人：</text><input :disabled="isDisabled" type="text" v-model="form.value7" class="contract-input" /></view>
			<view class="fl a-i-center"><text class="serial-number">地址：</text><input :disabled="isDisabled" type="text" v-model="form.value8" class="contract-input" /></view>
			<view class="fl a-i-center"><text class="serial-number">联系方式：</text><input :disabled="isDisabled" type="text" v-model="form.value9" class="contract-input" /></view>
			<view class="fl a-i-center"><text class="serial-number">乙方：四川房管家信息科技有限公司</text></view>
			<view class="fl a-i-center"><text class="serial-number">公司负责人：</text><input :disabled="isDisabled" type="text" v-model="form.value10" class="contract-input" /></view>
			<view class="fl a-i-center"><text class="serial-number">公司地址：四川省绵阳市经开区贾家店89号</text></view>
			<view class="fl a-i-center"><text class="serial-number">联系方式：0816—2859598</text></view>
				
			<view class="content">
				根据《中华人民共和国合同法》和《中华人民共和国建筑法》及其它有关法律、行政法规，为明确双方在维修过程中的权利、义务，
				经双方协商自愿签订如下合同条款，以致共同遵守：
			</view>

			<view class="article">第一条工程项目</view>
			<view class="point">（一）、工程名称：<input :disabled="isDisabled" type="text" class="contract-input" v-model="form.value11" /></view>
			<view class="point">（二）、工程地址：<input :disabled="isDisabled" type="text" class="contract-input" v-model="form.value12" /></view>
			<view class="point">（三）、工程范围：（ 详见“世隆房管”APP施工方案详情）</view>
			<view class="point">（四）、承包方式： 双方商定采取乙方包工、包全部材料;</view>
			<view class="point">（五）、合同价款：￥<input :disabled="isDisabled" type="text" class="date-input" v-model="form.value13"/>元，大写(人民币)：<input :disabled="isDisabled" type="text" class="date-input" v-model="form.value14" /></view>


			<view class="article">第二条 工程期限</view>
			<view class="content">
				本工程经甲乙双方协商一致，总工期
				<input :disabled="isDisabled" type="text" class="date-input" v-model="form.value15" />
				天（<input :disabled="isDisabled" type="text" class="date-input" v-model="form.value16" />年
				<input :disabled="isDisabled" type="text" class="date-input" v-model="form.value17"  />月
				<input :disabled="isDisabled" type="text" class="date-input" v-model="form.value18"  />日至
				<input :disabled="isDisabled" type="text" class="date-input" v-model="form.value19"  />年
				<input :disabled="isDisabled" type="text" class="date-input" v-model="form.value20"  />月
				<input :disabled="isDisabled" type="text" class="date-input" v-model="form.value21" />日
			</view>
			<view class="article">第三条 工程质量管理及验收</view>
			
			
			<view class="page-number">
				第2页 共{{ pages }}页
			</view>
		</view>

		<!-- 第三页 -->
		<view class="page" id="contractimage3">
			<view class="point">
				（一）、工程具备隐蔽条件，乙方先进行自检，并在隐蔽验收前通知甲方验收。验收合格，甲方现场代表在
				<text class="keywords">APP</text>验收记录上确认
					<text class="keywords">签字</text>。验收不合格，乙方予以整改后再交由甲方重新验收。
			</view>
			
			<view class="point">（二）、工程具备竣工验收条件，乙方按国家工程竣工验收有关规定，向甲方提供完整竣工资料。验收合格的，双方进行交接，验收不合格的，乙方应及时返工。
			</view>
			<view class="point">（三）、工程质量应符合国家及行业规定的检验评定的“合格”标准。</view>
			<view class="article">第四条关于工程款项支付的约定</view>
			<view class="point">
				双方商定本合同价款采用固定价格，甲方分2次支付合同款项：第1次支付合同总价款的
				<input :disabled="isDisabled" type="text" class="date-input" v-model="form.value22" />% ,竣工验收合格后甲方
				<text class="keywords">须</text>3个工作日内支付余下总价款。
			</view>
			
			<view class="content">
				甲方应将工程款项通过世隆房管APP线上支付，若甲方将工程款交予乙方其他人员而造成的损失，相关责任由甲方自行负责。
			</view>

			<view class="content">
				甲方应严格履行本合同关于工程款项支付的约定，如甲方有违约行为，需向乙方支付工程总价款<text class="keywords">10%</text>的违约金，并承担因此造成的经济损失。
			</view>

			<view class="article">第五条 其它约定</view>
			<view class="point">（一）、甲方的责任</view>
			<view class="content">
				1、开工前，与乙方确认施工方案（作法说明，<text class="keywords">详情见APP施工方案</text>）。
				向乙方提供施工所需的水、电、气及电讯等设备，并说明使用注意事项。办理施工所涉及的各种申请、批件等手续。
			</view>
			<view class="content">
				2、指派
				<input :disabled="isDisabled" type="text" class="date-input" v-model="form.value23" />
				为甲方驻工地代表，负责合同履行。对工程质量、进度进行监督检查，办理验收、变更、登记手续和其他事宜。
			</view>
			
			
			<view class="page-number">
				第3页 共{{ pages }}页
			</view>
		</view>

		<!-- 第四页 -->
		<view class="page" id="contractimage4">
			<view class="content">
				3、参与对工程质量、施工进度的监督及对材料进场、工程竣工的验收。甲方应向乙方提供必要的施工条件及所需使用的材料堆放区，负责做好施工现场的安全等工作
			</view>
			<view class="content">
				4、工程所在的物业或其他管理单位因施工而收取的各项管理费用，由甲方承担，乙方协助提供物管或其他管理单位所需相关资料。
			</view>
			<view class="content">
				5、协调乙方与邻里关系，协助有关部门做好现场安全等工作，并承担相应费用。
			</view>
			<view class="content">
				6、在工程施工过程中遇需相关部门及单位审批的施工项目，甲方必须提供相关部门及单位的同意施工相关文件或通知。
			</view>
			<view class="content">
				7、未办理合法手续，要求乙方拆改原施工现场管线、重要设施设备及结构主体，由此发生的损失或事故（包括罚款），由甲方负责并承担损失。
			</view>
			<view class="point">（二）、乙方的责任</view>
			
			<view class="content">
				1、根据甲、乙双方确认的施工方案，制定进度计划，交甲方审定。
			</view>
			<view class="content">
				2、指派
				<input :disabled="isDisabled" type="text" class="date-input" v-model="form.value24" />
				为乙方驻工地代表，负责合同履行。按要求组织施工，保质、保量、按期完成施工任务，解决由乙方负责的各项事宜。
			</view>
			<view class="content">
				3、遵守国家或地方政府及有关部门对施工现场管理的规定，严格按照施工方案（作法说明）进行施工，妥善保护好
				施工现场周围建筑物、设备管线。做好施工现场垃圾消纳等工作，做好各项质量检查记录，加强施工人员的安全教育管理，参加竣工验收。
			</view>
			<view class="content">
				4、在工程施工过程中遇需相关部门及单位审批的施工项目，甲方不能提供相关部门及单位的同意施工相关文件或通知，乙方有权拒绝。
			</view>
			<view class="content">
				5、由于乙方在施工生产过程中违反有关安全操作规程，导致发生安全事故，乙方应承担由此引发相应的经济损失。
			</view>
			
			
			<view class="page-number">
				第4页 共{{ pages }}页
			</view>
		</view>

		<!-- 第五页 -->
		<view class="page" id="contractimage5">
			<view class="article">第六条 工程保修约定</view>
			<view class="content">
				施工项目保修期<input :disabled="isDisabled" type="text" class="date-input" v-model="form.value25" />年；
			</view>
			<view class="content">
				本施工项目保修期自竣工验收合格之日起计算；②如甲方未按本合同规定按时向乙方支付工程施工费用或因地震、洪灾、在连续24小时内降雨量达到200毫米（含200毫米）以上、
				在任何6小时内降雪量达到300毫米（含300毫米）以上等特殊情况导致本施工项目出现质量问题的，乙方不予承担保修责任。
			</view>
			
			<view class="content keywords">
				保修期间因人为因素导致施工项目成品及设施而出现的质量问题，乙方不予承担保修责任。
			</view>
			<view class="article">第七条　纠纷解决办法 </view>
			<view class="content">
				因本合同产生纠纷，如协商无法解决，双方均有权向乙方所在地人民法院提起诉讼。
			</view>
			
			<view class="article">第八条附则</view>
			<view class="content">
				本合同一式二份，甲乙双方各执一份，自双方签字，后生效。
			</view>
			
			<view class="fl jc-between">
				<view class="signature">
					<view class="fl a-i-center"><text class="serial-number">甲方：</text>
						<input :disabled="isDisabled" type="text" class="date-input-ml" v-model="form.value26" v-if="!autographurl"  />
						<image class="sign" :src=" imgBaseUrl+ autographurl" mode="" v-if="autographurl"></image>
					</view>
					<view class="fl a-i-center"><text class="serial-number">负责人：</text>
						<input :disabled="isDisabled" type="text" class="date-input-ml" v-model="form.value27" v-if="!autographurl2" />
						<image class="sign" :src="imgBaseUrl+ autographurl2" mode="" v-if="autographurl2"></image>
					</view>
					<input :disabled="isDisabled" type="text"  v-model="form.value28" class="date-input" />
					<text class="serial-number">年</text>
					<input :disabled="isDisabled" type="text"  v-model="form.value29" class="date-input-sm" />
					<text class="serial-number">月</text>
					<input :disabled="isDisabled" type="text" class="date-input-sm"  v-model="form.value30" />
					<text class="serial-number">日</text>
				</view>
				
				<view class="signature">
					<view class="fl a-i-center"><text class="serial-number">乙方：</text><text class="company">四川房管家信息科技有限公司</text></view>
					<view class="fl a-i-center"><text class="serial-number">负责人：</text><input :disabled="isDisabled" type="text" class="date-input-ml" v-model="form.value31" /></view>
					<input :disabled="isDisabled" type="text" class="date-input" v-model="form.value32" />
					<text class="serial-number">年</text>
					<input :disabled="isDisabled" type="text" class="date-input-sm"  v-model="form.value33" />
					<text class="serial-number">月</text>
					<input :disabled="isDisabled" type="text" class="date-input-sm" v-model="form.value34" />
					<text class="serial-number">日</text>
				</view>
			</view>
			
			
			<view class="page-number">
				第5页 共{{ pages }}页
			</view>
		</view>

		<!-- 施工合同 -->
		
		<button @click="renderScript.emitData">提交合同</button>
		<!-- <button @click="renderScript.emitData">提交合同</button> -->


	</view>
</template>

<script>
	import {
		pathToBase64,
		base64ToPath
	} from 'image-tools'
	import {
		upLoadFile, contractApiAdd, contractById
	} from "@/components/api/api.js"
		import {imgBaseUrl} from '@/components/api/request.js'
	export default {
		data() {
			return {
				disabel: '',
				info: {},
				selectPlant: {},
				order_id: '',
				contract_id: '',
				pages: 5,
				imgBaseUrl: imgBaseUrl,
				autographurl: '',
				autographurl2: '',
				imgs: {
					contractimage1: '',
					contractimage2: '',
					contractimage3: '',
					contractimage4: '',
					contractimage5: '',
				},
				form: {
					value1: 'value1',
					value2: 'value2',
					value3: 'value3',
					value4: 'value4',
					value5: 'value5',
					value6: 'value6',
					value7: 'value7',		
					value8: 'value8',
					value9: 'value9',
					value10: 'value10',
					value11: 'value11',
					value12: 'value12',
					value13: 'value13',
					value14: 'value14',
					value15: 'value15',
					value16: 'value16',
					value17: 'value17',
					value18: 'value18',
					value18: 'value18',
					value19: 'value19',
					value20: 'value20',
					value21: 'value21',
					value22: 'value22',
					value23: 'value23',
					value24: 'value24',
					value25: 'value25',
					value26: 'value26',
					value27: 'value27',
					value28: 'value28',
					value29: 'value29',
					value30: 'value30',
					value31: 'value31',
					value32: 'value32',
					value33: 'value33',
					value34: 'value34',
				}
			};
		},
		onLoad(opt) {
			this.order_id = opt.order_id;
			if(opt.info) {
				this.info = JSON.parse(opt.info);
			}
			if(opt.disabel) {
				this.disabel = opt.disabel
			}
			this._contractById()
			uni.$on('selectPlant', (value) => {
				if (value) {
				  this.selectPlant = value;
				  uni.$off('selectPlant')
				} 
			})
		},

		computed:{
			isDisabled() {
				return (this.disabel == 'disabel')
			}
		},
		methods: {
			_contractApiAdd() {
				let arr = Object.values(this.form);
				let trimArr = arr.filter(ele => ele);
				if(trimArr.length <34) {
					let { value26, value27 } = this.form;
					if(!value26.trim() || !value27.trim()) {
						return uni.showToast({ title: '请完善合同信息', icon: 'none' })
					}
				}
			
				// order_id    订单id
				// contract_type  合同类型 1 施工、2维修
				let parmas ={
					order_id: this.order_id,
					contract_type: 1,
					...this.form,
					...this.imgs
				}
				console.log('++++', parmas);
				
				contractApiAdd(parmas).then(res => {
					this.contract_id = res.contract_id;
					// let selectPlant = JSON.stringify(this.selectPlant);
					let info = JSON.stringify(this.info);
					setTimeout(() => {
						uni.$emit("selectPlant", this.selectPlant);
					}, 500)
					uni.navigateTo({
						url:'../home/neworder/shezhifangan?info='+ info+ '&order_id=' + this.order_id + '&contract_id=' + res.contract_id
					})
				})
			},
			
			// 查询合同详情
			_contractById() {
				contractById({order_id: this.order_id}).then(res => {
					if(res.varList && res.varList.contractxq) {
						let { contractxq, autographurl, autographurl2 } = res.varList;
						this.form = contractxq;
						this.autographurl = autographurl;
						this.autographurl2 = autographurl2
					}
				})
			},
			
			receiveRenderData(opt) {
				const that = this;
				base64ToPath(opt.val)
					.then(base64 => {
						
						upLoadFile({ path: base64 }).then((upFile) => {
							console.log(upFile)
						  let url = this.imgBaseUrl + JSON.parse(upFile.data).data;
						  console.log('=====', opt.ele, url)
						  this.imgs[opt.ele] = url
						  
						  let imgsList = Object.values(this.imgs)
						if(imgsList.length == 5) {
							// this._contractApiAdd()
						}
						});
					})
			},
		
		}
	}
</script>

<script module="renderScript" lang="renderjs">
	import html2canvas from 'html2canvas';
	export default {
		methods: {
			// 发送数据到逻辑层
			emitData(e, ownerVm) {
				for(let i = 1; i <= 1; i ++ ){  // 5
					this.screenshots(e, ownerVm, 'contractimage' + 4);
				}
				// this.screenshots(e, ownerVm, 'contractimage3');
			},
			screenshots(e, ownerVm, ele) {
				const dom = document.getElementById(ele);
				// const dom = document.body;
				console.log('clientHeight:', dom.clientHeight);
				console.log('scrollHeight:', dom.scrollHeight);
				console.log('scrollTop:', dom.scrollTop);
				console.log('body', document.body.clientHeight)
				console.log('body', document.body.scrollHeight)
				return false;
				setTimeout(() => {
					html2canvas(dom, {
						scale: 1, // 用于渲染的比例尺。默认为浏览器设备像素比率。
						 windowWidth: dom.scrollWidth,
						 windowHeight: dom.scrollHeight,
						// width: dom.offsetWidth, //dom 原始宽度
						// height: dom.offsetHeight,// ,5000, // dom.offsetHeight,616
						// scrollY: -2570, // html2canvas默认绘制视图内的页面，需要把scrollY，scrollX设置为0 (2450)  -2570 (dom.clientHeight * 4)
						// scrollX: 0,
						useCORS: true, 
						
					}).then((canvas) => {
						ownerVm.callMethod('receiveRenderData', {val: canvas.toDataURL('image/png'), ele})
					});
				}, 1000)
				
			},
		}
	};
</script>

<style lang="scss" scoped>
	@import "~@/common/style/contract.scss";
	
</style>
