/**
 * Flagr
 * Flagr is a feature flagging, A/B testing and dynamic configuration microservice
 *
 * OpenAPI spec version: 1.0.8
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Flag'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Flag'));
  } else {
    // Browser globals (root is window)
    if (!root.Flagr) {
      root.Flagr = {};
    }
    root.Flagr.FlagSnapshot = factory(root.Flagr.ApiClient, root.Flagr.Flag);
  }
}(this, function(ApiClient, Flag) {
  'use strict';




  /**
   * The FlagSnapshot model module.
   * @module model/FlagSnapshot
   * @version 1.0.8
   */

  /**
   * Constructs a new <code>FlagSnapshot</code>.
   * @alias module:model/FlagSnapshot
   * @class
   * @param id {Number} 
   * @param flag {module:model/Flag} 
   * @param updatedAt {String} 
   */
  var exports = function(id, flag, updatedAt) {
    var _this = this;

    _this['id'] = id;

    _this['flag'] = flag;
    _this['updatedAt'] = updatedAt;
  };

  /**
   * Constructs a <code>FlagSnapshot</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FlagSnapshot} obj Optional instance to populate.
   * @return {module:model/FlagSnapshot} The populated <code>FlagSnapshot</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('updatedBy')) {
        obj['updatedBy'] = ApiClient.convertToType(data['updatedBy'], 'String');
      }
      if (data.hasOwnProperty('flag')) {
        obj['flag'] = Flag.constructFromObject(data['flag']);
      }
      if (data.hasOwnProperty('updatedAt')) {
        obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} updatedBy
   */
  exports.prototype['updatedBy'] = undefined;
  /**
   * @member {module:model/Flag} flag
   */
  exports.prototype['flag'] = undefined;
  /**
   * @member {String} updatedAt
   */
  exports.prototype['updatedAt'] = undefined;



  return exports;
}));


