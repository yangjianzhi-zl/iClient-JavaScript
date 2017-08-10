import SuperMap from '../SuperMap';
import {ServerType} from '../REST';
import '../security/SecurityManager';
import {FetchRequest} from '../util/FetchRequest';
/**
 * @class SuperMap.iPortalServiceBase
 * @classdesc iPortal服务基类(有权限限制的类需要实现此类)
 */


export default  class IPortalServiceBase {
    /**
     * @function SuperMap.iPortalServiceBase.prototype.constructor
     *
     * @param url -{String}-服务器域名+端口，如：http://localhost:8092
     */
    constructor(url) {
        var me = this;
        me.serviceUrl = url;
        me.serverType = ServerType.iPortal;
    }

    /**
     * @function SuperMap.iPortalServiceBase.prototype.request
     * @description 子类统一通过该方法发送请求
     * @param url -{String}-服务器域名+端口，如：http://localhost:8092
     * @param method -{INT}
     * @param requestOptions -{Object}
     * @description 获取返回参数的json数组
     *
     */

    request(method, url, param, requestOptions) {
        url = this.createCredentialUrl(url);
        return FetchRequest.commit(method, url, param, requestOptions).then(function (response) {
            return response.json();
        });
    }



    /**
     * @function SuperMap.iPortalServiceBase.prototype.createCredentialUrl
     * @description 追加授权信息
     * @param url -{String}-服务器域名+端口，如：http://localhost:8092
     * @return {string} 新地址
     */

    createCredentialUrl(url) {
        var newUrl = url,
            credential = this.getCredential();

        if (credential) {
            var endStr = newUrl.substring(newUrl.length - 1, newUrl.length);

            if (newUrl.indexOf("?") > -1 && endStr === "?") {
                newUrl += credential.getUrlParameters();
            } else if (newUrl.indexOf("?") > -1 && endStr !== "?") {
                newUrl += "&" + credential.getUrlParameters();
            } else {
                newUrl += "?" + credential.getUrlParameters();
            }
        }
        return newUrl;
    }


    /**
     * @function SuperMap.iPortalServiceBase.prototype.getCredential
     * @description 获取token
     * @return {string } 返回获取的token
     *
     */

    getCredential() {
        var credential,
            value = SuperMap.SecurityManager.getToken(this.serviceUrl);
        credential = value ? new SuperMap.Credential(value, "token") : null;
        if (!credential) {
            value = this.getKey();
            credential = value ? new SuperMap.Credential(value, "key") : null;
        }
        return credential;
    }


    /**
     * @function SuperMap.iPortalServiceBase.prototype.getKey
     * @description 其子类需要重写该方法，修改其中获取key的字段
     * 存储key可能是服务id字段，可能是url
     */
    getKey() {
        //return SuperMap.SecurityManager.getKey(this.id);
        //或
        //return SuperMap.SecurityManager.getKey(this.serviceUrl);
    }


    CLASS_NAME = "SuperMap.iPortalServiceBase"

}

SuperMap.iPortalServiceBase = IPortalServiceBase;
