﻿import  SuperMap from '../SuperMap';/** * @class SuperMap.TransportationAnalystResultSetting * @description 交通网络分析结果参数类。 * 通过该类设置交通网络分析返回的结果，包括是否返回图片、是否返回弧段空间信息、是否返回结点空间信息等。 */export default  class TransportationAnalystResultSetting {    /**     * @member SuperMap.TransportationAnalystResultSetting.prototype.returnEdgeFeatures -{Boolean}     * @description 是否在分析结果中包含弧段要素集合。弧段要素包括弧段的空间信息和属性信息。     */    returnEdgeFeatures = false;    /**     * @member SuperMap.TransportationAnalystResultSetting.prototype.returnEdgeGeometry -{Boolean}     * @description 返回的弧段要素集合中是否包含几何对象信息。默认为 false。     */    returnEdgeGeometry = false;    /**     * @member SuperMap.TransportationAnalystResultSetting.prototype.returnEdgeIDs -{Boolean}     * @description 返回结果中是否包含经过弧段 ID 集合。默认为 false。     */    returnEdgeIDs = false;    /**     * @member SuperMap.TransportationAnalystResultSetting.prototype.returnNodeFeatures -{Boolean}     * @description 是否在分析结果中包含结点要素集合。     * 结点要素包括结点的空间信息和属性信息。其中返回的结点要素是否包含空间信息可通过 returnNodeGeometry 字段设置。默认为 false。     */    returnNodeFeatures = false;    /**     * @member SuperMap.TransportationAnalystResultSetting.prototype.returnNodeGeometry -{Boolean}     * @description 返回的结点要素集合中是否包含几何对象信息。默认为 false。     */    returnNodeGeometry = false;    /**     * @member SuperMap.TransportationAnalystResultSetting.prototype.returnNodeIDs -{Boolean}     * @description 返回结果中是否包含经过结点 ID 集合。默认为 false。     */    returnNodeIDs = false;    /**     * @member SuperMap.TransportationAnalystResultSetting.prototype.returnPathGuides -{Boolean}     * @description 返回分析结果中是否包含行驶导引集合。     */    returnPathGuides = false;    /**     * @member SuperMap.TransportationAnalystResultSetting.prototype.returnRoutes -{Boolean}     * @description 返回分析结果中是否包含路由对象的集合。     */    returnRoutes = false;    /**     * @function SuperMap.TransportationAnalystResultSetting.prototype.constructor     * @description 交通网络分析结果参数类构造函数。     * @param options - {Object} 可选参数。如:</br>     *        returnEdgeFeatures - {Boolean} 是否在分析结果中包含弧段要素集合。</br>     *        returnEdgeGeometry - {Boolean} 返回的弧段要素集合中是否包含几何对象信息。默认为 false。</br>     *        returnEdgeIDs - {Boolean} 返回结果中是否包含经过弧段 ID 集合。默认为 false。</br>     *        returnNodeFeatures - {Boolean} 是否在分析结果中包含结点要素集合。</br>     *        returnNodeGeometry - {Boolean} 返回的结点要素集合中是否包含几何对象信息。默认为 false。</br>     *        returnNodeIDs - {Boolean} 返回结果中是否包含经过结点 ID 集合。默认为 false。</br>     *        returnPathGuides - {Boolean} 返回分析结果中是否包含行驶导引集合。</br>     *        returnRoutes - {Boolean} 返回分析结果中是否包含路由对象的集合。     */    constructor(options) {        if (!options) {            return;        }        SuperMap.Util.extend(this, options);    }    /**     * @function SuperMap.TransportationAnalystResultSetting.prototype.destroy     * @description 释放资源，将引用资源的属性置空。     */    destroy() {        var me = this;        me.returnEdgeFeatures = null;        me.returnEdgeGeometry = null;        me.returnEdgeIDs = null;        me.returnNodeFeatures = null;        me.returnNodeGeometry = null;        me.returnNodeIDs = null;        me.returnPathGuides = null;        me.returnRoutes = null;    }    CLASS_NAME = "SuperMap.TransportationAnalystResultSetting"}SuperMap.TransportationAnalystResultSetting = TransportationAnalystResultSetting;