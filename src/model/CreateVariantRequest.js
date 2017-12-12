/**
 * Flagr
 * Flagr is a feature flagging, A/B testing and dynamic configuration microservice
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The CreateVariantRequest model module.
* @module model/CreateVariantRequest
* @version 1.0.0
*/
export default class CreateVariantRequest {
    /**
    * Constructs a new <code>CreateVariantRequest</code>.
    * @alias module:model/CreateVariantRequest
    * @class
    * @param key {String} 
    */

    constructor(key) {
        

        
        

        this['key'] = key;

        
    }

    /**
    * Constructs a <code>CreateVariantRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CreateVariantRequest} obj Optional instance to populate.
    * @return {module:model/CreateVariantRequest} The populated <code>CreateVariantRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateVariantRequest();

            
            
            

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('attachment')) {
                obj['attachment'] = ApiClient.convertToType(data['attachment'], Object);
            }
        }
        return obj;
    }

    /**
    * @member {String} key
    */
    key = undefined;
    /**
    * @member {Object} attachment
    */
    attachment = undefined;








}

