sample
===
* 注释

	select #use("cols")# from MER_INFO_T  where  #use("condition")#

cols
===
	REVISION,CREATED_BY,CREATED_TIME,UPDATED_BY,UPDATED_TIME,DELETE_TIME,DELETE_BY,ID,MERC_TYPE,CUSTOM_MCC_TYPE,MERC_NUM,MERC_NAME,PROV_CODE,CITY_CODE,AREA_CODE,LEGAL_PERSON,LEGAL_PHONE,LEGAL_ID_CARD_NUM,BUS_LICENSE_NO,LEGAL_ID_CARD_VALIDITY_PEROID,BUS_LICENSE_VALIDITY_PEROID,LINK_PERSON,LINK_PHONE,MERC_SHORT_NAME,ADDR_DETAIL,INCOME_TYPE,RATE_CODE,CHANNEL_CODE,RATE,STATUS,DATA_STATUS,SETTLE_WAY,PRODUCT,EMAIL,AP_CODE,AP_MERC_CODE

updateSample
===
	
	REVISION=#revision#,CREATED_BY=#createdBy#,CREATED_TIME=#createdTime#,UPDATED_BY=#updatedBy#,UPDATED_TIME=#updatedTime#,DELETE_TIME=#deleteTime#,DELETE_BY=#deleteBy#,ID=#id#,MERC_TYPE=#mercType#,CUSTOM_MCC_TYPE=#customMccType#,MERC_NUM=#mercNum#,MERC_NAME=#mercName#,PROV_CODE=#provCode#,CITY_CODE=#cityCode#,AREA_CODE=#areaCode#,LEGAL_PERSON=#legalPerson#,LEGAL_PHONE=#legalPhone#,LEGAL_ID_CARD_NUM=#legalIdCardNum#,BUS_LICENSE_NO=#busLicenseNo#,LEGAL_ID_CARD_VALIDITY_PEROID=#legalIdCardValidityPeroid#,BUS_LICENSE_VALIDITY_PEROID=#busLicenseValidityPeroid#,LINK_PERSON=#linkPerson#,LINK_PHONE=#linkPhone#,MERC_SHORT_NAME=#mercShortName#,ADDR_DETAIL=#addrDetail#,INCOME_TYPE=#incomeType#,RATE_CODE=#rateCode#,CHANNEL_CODE=#channelCode#,RATE=#rate#,STATUS=#status#,DATA_STATUS=#dataStatus#,SETTLE_WAY=#settleWay#,PRODUCT=#product#,EMAIL=#email#,AP_CODE=#apCode#,AP_MERC_CODE=#apMercCode#

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
	@if(!isEmpty(mercType)){
	 and MERC_TYPE=#mercType#
	@}
	@if(!isEmpty(customMccType)){
	 and CUSTOM_MCC_TYPE=#customMccType#
	@}
	@if(!isEmpty(mercNum)){
	 and MERC_NUM=#mercNum#
	@}
	@if(!isEmpty(mercName)){
	 and MERC_NAME=#mercName#
	@}
	@if(!isEmpty(provCode)){
	 and PROV_CODE=#provCode#
	@}
	@if(!isEmpty(cityCode)){
	 and CITY_CODE=#cityCode#
	@}
	@if(!isEmpty(areaCode)){
	 and AREA_CODE=#areaCode#
	@}
	@if(!isEmpty(legalPerson)){
	 and LEGAL_PERSON=#legalPerson#
	@}
	@if(!isEmpty(legalPhone)){
	 and LEGAL_PHONE=#legalPhone#
	@}
	@if(!isEmpty(legalIdCardNum)){
	 and LEGAL_ID_CARD_NUM=#legalIdCardNum#
	@}
	@if(!isEmpty(busLicenseNo)){
	 and BUS_LICENSE_NO=#busLicenseNo#
	@}
	@if(!isEmpty(legalIdCardValidityPeroid)){
	 and LEGAL_ID_CARD_VALIDITY_PEROID=#legalIdCardValidityPeroid#
	@}
	@if(!isEmpty(busLicenseValidityPeroid)){
	 and BUS_LICENSE_VALIDITY_PEROID=#busLicenseValidityPeroid#
	@}
	@if(!isEmpty(linkPerson)){
	 and LINK_PERSON=#linkPerson#
	@}
	@if(!isEmpty(linkPhone)){
	 and LINK_PHONE=#linkPhone#
	@}
	@if(!isEmpty(mercShortName)){
	 and MERC_SHORT_NAME=#mercShortName#
	@}
	@if(!isEmpty(addrDetail)){
	 and ADDR_DETAIL=#addrDetail#
	@}
	@if(!isEmpty(incomeType)){
	 and INCOME_TYPE=#incomeType#
	@}
	@if(!isEmpty(rateCode)){
	 and RATE_CODE=#rateCode#
	@}
	@if(!isEmpty(channelCode)){
	 and CHANNEL_CODE=#channelCode#
	@}
	@if(!isEmpty(rate)){
	 and RATE=#rate#
	@}
	@if(!isEmpty(status)){
	 and STATUS=#status#
	@}
	@if(!isEmpty(dataStatus)){
	 and DATA_STATUS=#dataStatus#
	@}
	@if(!isEmpty(settleWay)){
	 and SETTLE_WAY=#settleWay#
	@}
	@if(!isEmpty(product)){
	 and PRODUCT=#product#
	@}
	@if(!isEmpty(email)){
	 and EMAIL=#email#
	@}
	@if(!isEmpty(apCode)){
	 and AP_CODE=#apCode#
	@}
	@if(!isEmpty(apMercCode)){
	 and AP_MERC_CODE=#apMercCode#
	@}
	
	