const state ={
	orderList:[],
	params:{}
}
const getters ={
	orderList:state => state.orderList
}
const actions ={
	fetchOrderList({commit,state}){
		Vue.http.post('api/getOrderList',state.params).then((res)=>{
			commit('changeOrderList',res.data.list)
			// state.orderList = res.data.list
			// state.total = res.data.total
		},(err)=>{

		})
	}
}
const mutations ={
	changeOrderList(state,orderList){
		state.orderList = orderList
	}
}
export default{
	state,
	getters,
	actions,
	mutations
}