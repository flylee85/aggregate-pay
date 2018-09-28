package com.xtf.aggregatepay.client;

import cn.hutool.http.HttpRequest;
import cn.hutool.http.HttpResponse;
import cn.hutool.json.JSONUtil;
import com.alibaba.fastjson.JSONObject;
import com.xtf.aggregatepay.MsgProp;
import com.xtf.aggregatepay.core.LogicException;
import com.xtf.aggregatepay.dto.TradeResp;
import com.xtf.aggregatepay.util.APUtil;
import com.xtf.aggregatepay.util.Sha256;
import lombok.extern.log4j.Log4j2;
import org.apache.logging.log4j.LoggingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Map;

@Log4j2
@Component
public class TradeClient {
    @Autowired
    private  MsgProp msgProp;
    @Value("${xyf.url.scanChannel}")
    private String scanChannelUrl;
    @Value("${xyf.request.timeout}")
    private int requestTimeout;
    /**
     * 渠道接口调用 主扫交易
     * @param param
     * @return
     */
    public TradeResp addTrade(String param){
        String agentKey=APUtil.getAgentKey();
        log.info("开始向xyf发送主扫请求，数据内容为 {}",param);
        HttpResponse httpResponse=HttpRequest.post(scanChannelUrl).body(param).timeout(requestTimeout).execute();
        log.info("请求成功，返回数据为："+httpResponse.body());
        if(httpResponse.getStatus()!=200){
            log.error("请求响应状态为："+httpResponse.getStatus()+",请求失败");
            throw new LogicException("主扫交易请求失败");
        }else{
            String retBody=httpResponse.body();
            TradeResp httpResp=JSONObject.parseObject(retBody,TradeResp.class);
            if(httpResp.getResCode().equals("SUCCESS")){
                String retSign=Sha256.sha256ByAgentKey(retBody,agentKey);
                if(!retSign.equals(httpResp.getSign()))throw new LoggingException(msgProp.getServerRetSign_err());
                return httpResp;
            }else{
                throw new LogicException(httpResp.getResCode(),httpResp.getResMsg());
            }
        }
    }

    /**
     * 向下游客户端发起主扫交易回调处理
     * @param map
     */
    public void downCallback(String downCallbackUrl,Map map){
        log.info("向下游客户发起主扫交易回调处理");
        HttpResponse httpResponse=HttpRequest.post(downCallbackUrl).form("merNo",map.get("merNo")).form("merOrder",map.get("merOrder")).form("orderStatus",map.get("orderStatus")).timeout(requestTimeout).execute();
        if(httpResponse.getStatus()!=200){
            log.error("下游交易回调响应失败，响应码 {}",httpResponse.getStatus() );
        }else{
            log.info("下游交易回调成功");
        }
    }


    public TradeResp queryOrderStatus(String param){
        String agentKey=APUtil.getAgentKey();
        log.info("开始向xyf发送订单状态查询，数据内容为 ${}",param);
        HttpResponse httpResponse=HttpRequest.post(scanChannelUrl).body(param).timeout(requestTimeout).execute();
        log.info("请求成功，返回数据为："+httpResponse.body());
        if(httpResponse.getStatus()!=200){
            log.error("请求响应状态为："+httpResponse.getStatus()+",请求失败");
            throw new LogicException("主扫交易请求失败");
        }else{
            String retBody=httpResponse.body();
            TradeResp httpResp=JSONObject.parseObject(retBody,TradeResp.class);
            String retSign=Sha256.sha256ByAgentKey(retBody,agentKey);
            if(!retSign.equals(httpResp.getSign()))throw new LoggingException(msgProp.getServerRetSign_err());
//            if(httpResp.getResCode().equals("SUCCESS")){
                return httpResp;
//            }else{
//                log.info("订单状态查询失败， 错误编号 ${},错误原因 ${}",httpResp.getResCode(),httpResp.getResMsg());
//                throw new LogicException(httpResp.getResCode(),httpResp.getResMsg());
//            }
        }
    }
}
