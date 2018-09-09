package com.xtf.aggregatepay.handler;

import com.xtf.aggregatepay.Consts;
import com.xtf.aggregatepay.core.LogicException;
import com.xtf.aggregatepay.core.ValidationException;
import com.xtf.aggregatepay.dto.ApiResp;
import lombok.extern.log4j.Log4j2;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * 简介
 * <p>
 * 项目名称:   [aggregate-pay]
 * 包:        [com.xtf.aggregatepay.handler]
 * 类名称:    [ExceptionHandler]
 * 类描述:    []
 * 创建人:    [于海慧]
 * 创建时间:  [2018/9/4]
 * 修改人:    []
 * 修改时间:  []
 * 修改备注:  []
 * 版本:     [v1.0]
 */

@ControllerAdvice
@Log4j2
public class GlobalExceptionHandler {

    /**
     * 处理所有不可知的异常
     * @param e
     * @return
     */
    @ExceptionHandler(Exception.class)
    @ResponseBody
    public ApiResp handleException(Exception e){
        log.error("系统错误：异常信息为>>{}",e.getMessage());
        return ApiResp.builder().respCode(Consts.SYS_COMMON_ERR_CODE).respMsg("系统错误:"+e.getMessage()).build();
    }

    /**
     * 处理所有业务异常
     * @param e
     * @return
     */
    @ExceptionHandler(LogicException.class)
    @ResponseBody
    ApiResp handleBusinessException(LogicException e){
        log.error("系统业务操作失败：异常信息>>{}",e.getMessage());
        return ApiResp.builder().respCode(Consts.SYS_COMMON_ERR_CODE).respMsg(e.getPrettyExceptionMsg()).build();
    }

    /**
     * 处理所有接口数据验证异常
     * @param e
     * @return
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseBody
    ApiResp handleMethodArgumentNotValidException(MethodArgumentNotValidException e){
        log.error("数据不合法：异常信息>>{}",e.getMessage());
        BindingResult bindingResult = e.getBindingResult();
        String errorMesssage = "请求参数不合法:\n";
        for (FieldError fieldError : bindingResult.getFieldErrors()) {
            errorMesssage += fieldError.getDefaultMessage() + "\n";
        }
        log.error("数据校验失败原因:"+errorMesssage);

        return ApiResp.builder().respCode(Consts.SYS_COMMON_ERR_CODE).respMsg(errorMesssage).build();
    }

    @ExceptionHandler(value =BindException.class)
    @ResponseBody
    public ApiResp handleBindException(BindException e) throws BindException {
        // ex.getFieldError():随机返回一个对象属性的异常信息。如果要一次性返回所有对象属性异常信息，则调用ex.getAllErrors()
        log.error("数据绑定失败：异常信息>>{}",e.getMessage());
        FieldError fieldError = e.getFieldError();
        StringBuilder sb = new StringBuilder();
        sb.append(fieldError.getField()).append("=[").append(fieldError.getRejectedValue()).append("]")
                .append(fieldError.getDefaultMessage());
        return ApiResp.builder().respCode(Consts.SYS_COMMON_ERR_CODE).respMsg(sb.toString()).build();
    }

    @ExceptionHandler(value =ValidationException.class)
    @ResponseBody
    public ApiResp handleValidationException(ValidationException e) throws BindException {
        log.error("手动执行数据校验：校验未通过，校验结果为>>{}",e.getMessage());
        return ApiResp.builder().respCode(Consts.SYS_COMMON_ERR_CODE).respMsg(e.getMessage()).build();
    }


}
