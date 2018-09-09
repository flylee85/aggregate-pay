sample
===
* 注释

	select #use("cols")# from TRADE_DATA_T  where  #use("condition")#

cols
===
	REVISION,CREATED_BY,CREATED_TIME,UPDATED_BY,UPDATED_TIME,DELETE_TIME,DELETE_BY,ID,CHANNEL_CODE,MERCHANT_NO,AGENT_NO,MER_ORDER,PRODUCT_NAME,TRADE_AMOUNT,CALL_BACK_URL,DOWN_CALL_BACK_URL,TRADE_TYPE,BIZ_TYPE,RES_CODE,RES_MSG,PAY_ORDER_NO,CODEURL,BANK_ORDER,SUB_APPID,SUB_OPENID,FINISH_TIME,TIME_END,ORDER_STATUS,SETTLE_STATUS

updateSample
===
	
	REVISION=#revision#,CREATED_BY=#createdBy#,CREATED_TIME=#createdTime#,UPDATED_BY=#updatedBy#,UPDATED_TIME=#updatedTime#,DELETE_TIME=#deleteTime#,DELETE_BY=#deleteBy#,ID=#id#,CHANNEL_CODE=#channelCode#,MERCHANT_NO=#merchantNo#,AGENT_NO=#agentNo#,MER_ORDER=#merOrder#,PRODUCT_NAME=#productName#,TRADE_AMOUNT=#tradeAmount#,CALL_BACK_URL=#callBackUrl#,DOWN_CALL_BACK_URL=#downCallBackUrl#,TRADE_TYPE=#tradeType#,BIZ_TYPE=#bizType#,RES_CODE=#resCode#,RES_MSG=#resMsg#,PAY_ORDER_NO=#payOrderNo#,CODEURL=#codeurl#,BANK_ORDER=#bankOrder#,SUB_APPID=#subAppid#,SUB_OPENID=#subOpenid#,FINISH_TIME=#finishTime#,TIME_END=#timeEnd#,ORDER_STATUS=#orderStatus#,SETTLE_STATUS=#settleStatus#

condition
===

	1 = 1  
	@if(!isEmpty(revision)){
	 and REVISION=#revision#
	@}
	@if(!isEmpty(createdBy)){
	 and CREATED_BY=#createdBy#
	@}
	@if(!isEmpty(createdTime)){
	 and CREATED_TIME=#createdTime#
	@}
	@if(!isEmpty(updatedBy)){
	 and UPDATED_BY=#updatedBy#
	@}
	@if(!isEmpty(updatedTime)){
	 and UPDATED_TIME=#updatedTime#
	@}
	@if(!isEmpty(deleteTime)){
	 and DELETE_TIME=#deleteTime#
	@}
	@if(!isEmpty(deleteBy)){
	 and DELETE_BY=#deleteBy#
	@}
	@if(!isEmpty(id)){
	 and ID=#id#
	@}
	@if(!isEmpty(channelCode)){
	 and CHANNEL_CODE=#channelCode#
	@}
	@if(!isEmpty(merchantNo)){
	 and MERCHANT_NO=#merchantNo#
	@}
	@if(!isEmpty(agentNo)){
	 and AGENT_NO=#agentNo#
	@}
	@if(!isEmpty(merOrder)){
	 and MER_ORDER=#merOrder#
	@}
	@if(!isEmpty(productName)){
	 and PRODUCT_NAME=#productName#
	@}
	@if(!isEmpty(tradeAmount)){
	 and TRADE_AMOUNT=#tradeAmount#
	@}
	@if(!isEmpty(callBackUrl)){
	 and CALL_BACK_URL=#callBackUrl#
	@}
	@if(!isEmpty(downCallBackUrl)){
	 and DOWN_CALL_BACK_URL=#downCallBackUrl#
	@}
	@if(!isEmpty(tradeType)){
	 and TRADE_TYPE=#tradeType#
	@}
	@if(!isEmpty(bizType)){
	 and BIZ_TYPE=#bizType#
	@}
	@if(!isEmpty(resCode)){
	 and RES_CODE=#resCode#
	@}
	@if(!isEmpty(resMsg)){
	 and RES_MSG=#resMsg#
	@}
	@if(!isEmpty(payOrderNo)){
	 and PAY_ORDER_NO=#payOrderNo#
	@}
	@if(!isEmpty(codeurl)){
	 and CODEURL=#codeurl#
	@}
	@if(!isEmpty(bankOrder)){
	 and BANK_ORDER=#bankOrder#
	@}
	@if(!isEmpty(subAppid)){
	 and SUB_APPID=#subAppid#
	@}
	@if(!isEmpty(subOpenid)){
	 and SUB_OPENID=#subOpenid#
	@}
	@if(!isEmpty(finishTime)){
	 and FINISH_TIME=#finishTime#
	@}
	@if(!isEmpty(timeEnd)){
	 and TIME_END=#timeEnd#
	@}
	@if(!isEmpty(orderStatus)){
	 and ORDER_STATUS=#orderStatus#
	@}
	@if(!isEmpty(settleStatus)){
	 and SETTLE_STATUS=#settleStatus#
	@}
	
sumTradeAmount
===

select sum(TRADE_AMOUNT) from TRADE_DATA_T where and MERCHANT_NO=#merNum# and (ORDER_STATUS ='success'
 or ORDER_STATUS ='processing') and  to_days(TIME_END) = to_days(now())  
	