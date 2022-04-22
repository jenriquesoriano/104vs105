/*
 * Copyright 2010-2017 interactive instruments GmbH
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Executable Test Suite Model
// ==============

// Includes file dependencies
define([
    "jquery",
    "backbone",
    "etf.webui/v2",
], function( $, Backbone, v2 ) {

    // The Model constructor
    var Model = Backbone.Model.extend( {

        initialize: function( attr, options ) {
        },

        getTranslation: function(name, language) {
            var translationTemplateCollections = this.get('translationTemplateCollections');
            var r;
            if(!_.isUndefined(translationTemplateCollections)) {
                _.each(translationTemplateCollections.LangTranslationTemplateCollection, function (c,i) {
                    if(c.name==name) {
                        return v2.jeach(c.translationTemplates.TranslationTemplate, function (t,i) {
                            if(t.language==language) {
                                r=t.$
                                return false;
                            }
                        });
                    }
                });
            }
            return r;
        },
    } );

    // Returns the Model class
    return Model;

} );
