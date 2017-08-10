﻿import SuperMap from '../SuperMap';

/**
 * @class SuperMap.StopQueryParameters
 * @classdesc 站点查询参数类。
 * @param options - {Object} 可選参数。如:</br>
 *        keyWord - {String} 站点名称关键字。</br>
 *        returnPosition - {Boolean} 是否返回站点坐标信息。</br>
 */
export default  class StopQueryParameters {
    /**
     *  @member SuperMap.StopQueryParameters.prototype.keyWord -{String}
     *  @description 站点名称关键字。
     */
    keyWord = null;

    /**
     * @member SuperMap.StopQueryParameters.prototype.returnPosition -{Boolean}
     * @description 是否返回站点坐标信息。
     */
    returnPosition = false;

    /*
     * @function SuperMap.StopQueryParameters.prototype.constructor
     * @description SuperMap.StopQueryParameters 的构造函数
     * @param options - {Object} 交互服务时所需可选参数。
     */

    constructor(options) {
        options = options || {};
        SuperMap.Util.extend(this, options);
    }

    /**
     * @function SuperMap.StopQueryParameters.prototype.destroy
     * @description 释放资源，将引用资源的属性置空。
     */
    destroy() {
        SuperMap.Util.reset(this);
    }

    CLASS_NAME = "SuperMap.StopQueryParameters"
}

SuperMap.StopQueryParameters = StopQueryParameters;