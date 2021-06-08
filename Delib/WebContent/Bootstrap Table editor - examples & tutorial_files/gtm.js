
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"590",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\/https:\\\/\\\/mdbootstrap.com\\\/[^\/]+\\\/([^\/]+)\\\/.*\/;return(a=document.URL.match(a))?a[1]:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\/\\\/.*\\\/cat\\\/([^\/]+)\/;return(a=document.URL.match(a))?a[1]:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\/https:\\\/\\\/mdbootstrap\\.com\\\/products\\\/(?:[^-]+)-([^\/]+)\/;return(a=document.URL.match(a))?a[1]:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\/https:\\\/\\\/mdbootstrap.com\\\/[^\/]+\\\/[^\/]+\\\/([^\/]+)\\\/.*\/;return(a=document.URL.match(a))?a[1]:null})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":["macro",2],
      "vtp_map":["list",["map","key",".*\/.+\/cat\/.*","value",["macro",3]],["map","key",".*\/products\/.*","value",["macro",4]],["map","key",".*\/docs\/.*","value",["macro",5]]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=5;return function(a){a.set(\"dimension\"+b,a.get(\"clientId\"))}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(new Date).getTime()+\".\"+Math.random().toString(36).substring(5)})();"]
    },{
      "function":"__vis",
      "convert_null_to":"Logged Out",
      "convert_true_to":"Logged In",
      "convert_false_to":"Logged Out",
      "vtp_elementId":"navbar-account",
      "vtp_outputMethod":"BOOLEAN",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"50"
    },{
      "function":"__vis",
      "convert_null_to":"Logged Out",
      "convert_true_to":"Logged In",
      "convert_false_to":"Logged Out",
      "vtp_elementId":"snippet-button-account",
      "vtp_outputMethod":"BOOLEAN",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"50"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":["macro",9],
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\/snippets\/.+","value",["macro",10]]]
    },{
      "function":"__c",
      "vtp_value":"UA-60512242-3"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",12],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",15],8,16],";switch(a){case \"start\":return\"Play\";case \"pause\":return\"Pause\";case \"seek\":return\"Seeking\";case \"progress\":return+",["escape",["macro",16],8,16],"+\"% Watched\";case \"complete\":return\"100% Watched\"}})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.videoTitle",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"gdpr_ga"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"gdpr_country"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",23],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"Download Direct",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*directDownload.*","value","Download Direct"],["map","key",".*gitDownload.*","value","Download Github"],["map","key",".*snippet-button-save.*","value","Download Snippet"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",1],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*getting-started.*","value","MDB Free"],["map","key",".*freebies.*","value","Freebie"],["map","key",".*snippets.*","value","MDB Free"],["map","key",".*boilerplate.*","value","Boilerplate Free"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"Standard",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*jquery.*","value","jQuery"],["map","key",".*angular.*","value","Angular"],["map","key",".*react.*","value","React"],["map","key",".*vue.*","value","Vue"],["map","key",".*standard.*","value","Standard"]]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){classNames=\"\";for(el=",["escape",["macro",28],8,16],";!classNames.includes(\"mdb-skin-custom\");)classNames+=el.className+\" \",el=el.parentElement;return classNames})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",29],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*navbar.*","value","Navigation"],["map","key",".*page-footer.*","value","Navigation"],["map","key",".*side-nav.*","value","Navigation"],["map","key",".*menu-item.*","value","Navigation"],["map","key",".*switch-to.*","value","Navigation"],["map","key",".*logo-sn.*ps--theme_default","value","Navigation"],["map","key",".*smooth-scroll.*","value","Navigation"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",29],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":["template",["macro",30]," Click"],
      "vtp_map":["list",["map","key",".*mask.*","value",["template",["macro",30]," Image click"]],["map","key",".*img-fluid.*","value",["template",["macro",30]," Image click"]],["map","key",".*btn.*","value",["template",["macro",30]," Button click"]],["map","key",".*custom-select.*","value",["template",["macro",30]," Select click"]],["map","key",".*switch-to.*","value",["template",["macro",30]," Switch click"]],["map","key",".*close.*","value",["template",["macro",30]," Button click"]],["map","key",".*dropdown-toggle.*","value",["template",["macro",30]," Dropdown Toggle click"]],["map","key",".*dropdown-item.*","value",["template",["macro",30]," Dropdown Item click"]]]
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",28],8,16],";return a=a.closest(\".modal\").id})();"]
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-dismiss"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"alt"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){element=",["escape",["macro",28],8,16],";imgType=element.previousElementSibling.tagName;return\"PICTURE\"==imgType?pictureAlt=element.previousElementSibling.getElementsByTagName(\"img\")[0].alt:imgAlt=element.previousElementSibling.alt})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",29],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":["macro",35],
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*view.*","value",["macro",36]]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",32],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":["macro",32],
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\\s","value",["macro",37]],["map","key","undefined","value",["macro",37]]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",34],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":["macro",38],
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","modal","value","x"]]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionTotal"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"MDBFreeUserCookie"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionProducts.0.name"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"cookieReferrer"
    },{
      "function":"__e"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"firstCampaign"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"lastCampaign"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenStandardAdModal"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\\\/$","value","true"],["map","key",".*getting-started.*","value","true"],["map","key",".*pricing.*","value","true"],["map","key",".*checkout.*","value","true"],["map","key",".*cart.*","value","true"],["map","key",".*pro.*","value","true"],["map","key","\\\/docs\\\/standard\\\/$","value","true"],["map","key","\\\/docs\\\/jquery\\\/$","value","true"],["map","key","\\\/docs\\\/angular\\\/$","value","true"],["map","key","\\\/docs\\\/react\\\/$","value","true"],["map","key","\\\/docs\\\/vue\\\/$","value","true"],["map","key",".*products.*","value","true"],["map","key",".*get-started.*","value","true"],["map","key",".*thank-you.*","value","true"]]
    },{
      "function":"__vis",
      "vtp_outputMethod":"BOOLEAN",
      "vtp_elementSelector":"[id$=-pro]",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"pageviewCount"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenGodFingerAdModal"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",28],8,16],";return a=a.closest(\"section\").id})();"]
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"URL",
      "vtp_component":"PATH",
      "vtp_defaultPages":["list"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenOnboardingSnippetAd"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"firstSeen"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenSubscriptionAdModal"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenInstallationPage"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenProPage"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"dc_step",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"s4Left"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenNewsletterConfirmation"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"s6Left"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(null!=document.querySelector(\"[id^\\x3ddpl-gtm-]\")){classNames=idNames=\"\";for(el=",["escape",["macro",28],8,16],";!classNames.includes(\"mdb-skin-custom\");)idNames+=el.id+\" \",classNames+=el.className+\" \",el=el.parentElement;idArray=idNames.split(\/(\\s+)\/);return idArray[2]}})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenFreeSurveyPage"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(null!=document.querySelector(\"[id^\\x3ddpl-gtm-]\")){classNames=idNames=\"\";for(el=",["escape",["macro",28],8,16],";!classNames.includes(\"mdb-skin-custom\");)idNames+=el.id+\" \",classNames+=el.className+\" \",el=el.parentElement;return idArray=idNames.split(\/(\\s+)\/)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",1],8,16],";return\"\"===a.split(\"\/\")[1]?\"\/\":a.split(\"\/\")[1]})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"pageviewCLICount"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"s4LeftDiscount"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.querySelector(\"[id^\\x3d'gtmDC-frontpage']\"),b=document.querySelector(\"[id^\\x3d'gtmDC-scroll']\");if(null!=a)return a.firstElementChild.id;if(null!=b)return b.firstElementChild.id})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"subDcViewCount"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenAfterPurchaseSurveyPage"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenAfterUseSurveyPage"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"is_incognito"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenCLIInstallationPage"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenBigMaySaleAdModal"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenPHLunchAdModal"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"gdpr_fbp"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"firstDownload"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"firstConversion"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_campaign",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenStartModal"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenExitIntentCheckout"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenChinaShareModal"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenChineseSurveyTaken"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",1],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\/sale\/exclusive\/","value","firstSeenSaleExclusive"],["map","key","\/sale\/exclusive-newsletter\/","value","firstSeenSaleNewsletter"],["map","key","\/sale\/free\/","value","firstSeenSaleFree"]]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":["macro",86]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",1],8,16],";return\"\/\"+a.split(\"\/\")[1]+\"\/\"+a.split(\"\/\")[3]+\"\/\"+a.split(\"\/\")[4]+\"\/\"+a.split(\"\/\")[5]})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"https:\/\/mdbootstrap.com\/docs\/standard\/getting-started\/",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\/education\/wordpress\/(.*)","value","\/docs\/standard\/cli\/tutorial\/wordpress\/"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"Bootstrap",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*angular.*","value","Angular"],["map","key",".*react.*","value","React"],["map","key",".*vue.*","value","Vue"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{if(",["escape",["macro",79],8,16],"){var a=(new Date).getTime();return a-=",["escape",["macro",79],8,16],"}}catch(b){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{if(",["escape",["macro",56],8,16],"){var a=(new Date).getTime();return a-=",["escape",["macro",56],8,16],"}}catch(b){}})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"firstDownloadTechnology"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionCurrency"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionPromoCode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionPaymentType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionTotal"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionProducts.0.category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",28],8,16],";return a=a.closest(\"li\").id})();"]
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-target"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",24],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":["macro",24],
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^#$","value",["macro",101]]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",28],8,16],";return a=a.previousSibling.innerHTML})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\/[a-zA-Z]+\/,b=",["escape",["macro",32],8,16],";return a=b.match(a)})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"clickedToGitHubMDB5"
    },{
      "function":"__vis",
      "vtp_outputMethod":"BOOLEAN",
      "vtp_elementSelector":"[id$=-unlogged]",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50"
    },{
      "function":"__vis",
      "vtp_outputMethod":"BOOLEAN",
      "vtp_elementSelector":"[id$=-logged]",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=[\"fr\",\"en\",\"nl\"],b=0;b\u003Ca.length;b++)if(-1\u003Cwindow.location.href.indexOf(\"\/\"+a[b]+\"\/\"))return a[b];return a[0]})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenGodFingerAdModalMDB5"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenGodFingerAdModalBlackNovember"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenThankYouPage"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenBigMaySale"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__r"
    },{
      "function":"__v",
      "vtp_name":"gtm.videoProvider",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoDuration",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoVisible",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoCurrentTime",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollDirection",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleTime",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":1000,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(b,c,d){var a=new Date;a.setTime(a.getTime()+864E5*d);document.cookie=b+\"\\x3d\"+c+\";path\\x3d\/;expires\\x3d\"+a.toGMTString()}var now=(new Date).getTime();setCookie(\"",["escape",["macro",86],7],"\",now,365);\u003C\/script\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1928
    },{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a='\\x3cdiv class\\x3d\"col-12 mt-3 alert font-weight-bold text-center alert-secondary\" data-color\\x3d\"secondary\" \\x3e Already have one of our products? Get \\x3cu\\x3e50% OFF\\x3c\/u\\x3e any MDB5 plan. Use code \\x3ccode class\\x3d\"text-uppercase bg-white px-2 rounded\"\\x3ezrhbksnm\\x3c\/code\\x3e on the checkout to receive the discount. \\x3c\/div\\x3e';null!=document.querySelector(\"[id^\\x3dgtmDC-propageMDB5-]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-propageMDB5-]\").innerHTML=a)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1528
    },{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=' \\x3cdiv class\\x3d\"alert alert-primary\" role\\x3d\"alert\" data-mdb-color\\x3d\"primary\"\\x3e \\x3cdiv class\\x3d\"row\"\\x3e \\x3cdiv class\\x3d\"col-md-4 text-center\"\\x3e \\x3cdiv class\\x3d\"mt-1\"\\x3e \\x3cimg src\\x3d\"https:\/\/mdbootstrap.com\/img\/Marketing\/gtm\/thailand-flag.jpg\" class\\x3d\"img-fluid shadow-2-strong text-center \" style\\x3d\"width: 35% !important;\" alt\\x3d\"\" \/\\x3e \\x3c\/div\\x3e \\x3c\/div\\x3e \\x3cdi class\\x3d\"col-md-6 mt-2\"\\x3e \\x3cp\\x3eWe noticed you are coming from \\x3cstrong\\x3eThailand\\x3c\/strong\\x3e where this product may be a bit expensive.\\x3cbr\\x3e We want our products to be affordable for everyone around the world. If you need it, use the code \\x3ccode\\x3eTHAILANDLOVE\\x3c\/code\\x3e for an extra \\x3cstrong\\x3e56.4% OFF MDB Essential\\x3c\/strong\\x3e.\\x3c\/p\\x3e \\x3c\/di\\x3e \\x3c\/div\\x3e \\x3c\/div\\x3e';\nnull!=document.querySelector(\"[id^\\x3dgtmDC-propageMDB5-]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-propageMDB5-]\").innerHTML=a)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1941
    },{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=' \\x3cdiv class\\x3d\"alert alert-primary\" role\\x3d\"alert\" data-mdb-color\\x3d\"primary\"\\x3e \\x3cdiv class\\x3d\"row\"\\x3e \\x3cdiv class\\x3d\"col-md-4 text-center\"\\x3e \\x3cdiv class\\x3d\"mt-1\"\\x3e \\x3cimg src\\x3d\"https:\/\/mdbootstrap.com\/img\/Marketing\/gtm\/india-flag.png\" class\\x3d\"img-fluid shadow-2-strong text-center \" style\\x3d\"width: 35% !important;\" alt\\x3d\"\" \/\\x3e \\x3c\/div\\x3e \\x3c\/div\\x3e \\x3cdi class\\x3d\"col-md-6 mt-3\"\\x3e \\x3cp\\x3eWe noticed you are coming from \\x3cstrong\\x3eIndia\\x3c\/strong\\x3e where this product may be a bit expensive.\\x3cbr\\x3e We want our products to be affordable for everyone around the world. If you need it, use the code \\x3ccode\\x3eINDIALOVE\\x3c\/code\\x3e for an extra \\x3cstrong\\x3e56.4% OFF MDB Essential\\x3c\/strong\\x3e.\\x3c\/p\\x3e \\x3c\/di\\x3e \\x3c\/div\\x3e \\x3c\/div\\x3e';\nnull!=document.querySelector(\"[id^\\x3dgtmDC-propageMDB5-]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-propageMDB5-]\").innerHTML=a)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1943
    },{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=' \\x3cdiv class\\x3d\"alert alert-primary\" role\\x3d\"alert\" data-mdb-color\\x3d\"primary\"\\x3e \\x3cdiv class\\x3d\"row\"\\x3e \\x3cdiv class\\x3d\"col-md-4 text-center\"\\x3e \\x3cdiv class\\x3d\"mt-1\"\\x3e \\x3cimg src\\x3d\"https:\/\/mdbootstrap.com\/img\/Marketing\/gtm\/south-africa-flag.png\" class\\x3d\"img-fluid shadow-2-strong text-center \" style\\x3d\"width: 35% !important;\" alt\\x3d\"\" \/\\x3e \\x3c\/div\\x3e \\x3c\/div\\x3e \\x3cdi class\\x3d\"col-md-6 mt-3\"\\x3e \\x3cp\\x3eWe noticed you are coming from \\x3cstrong\\x3eSouth Africa\\x3c\/strong\\x3e where this product may be a bit expensive. We want our products to be affordable for everyone around the world. If you need it, use the code \\x3ccode\\x3eAFRICALOVE\\x3c\/code\\x3e for an extra \\x3cstrong\\x3e56.4% OFF MDB Essential\\x3c\/strong\\x3e.\\x3c\/p\\x3e \\x3c\/di\\x3e \\x3c\/div\\x3e \\x3c\/div\\x3e';\nnull!=document.querySelector(\"[id^\\x3dgtmDC-propageMDB5-]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-propageMDB5-]\").innerHTML=a)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1944
    },{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a='\\x3cdiv class\\x3d\"alert alert-primary\" role\\x3d\"alert\" data-mdb-color\\x3d\"primary\"\\x3e \\x3cdiv class\\x3d\"row\"\\x3e \\x3cdiv class\\x3d\"col-md-4 text-center\"\\x3e \\x3cdiv class\\x3d\"mt-1\"\\x3e \\x3cimg src\\x3d\"https:\/\/mdbootstrap.com\/img\/Marketing\/gtm\/brazil-flag.jpg\" class\\x3d\"img-fluid shadow-2-strong text-center \" style\\x3d\"width: 35% !important;\" alt\\x3d\"\" \/\\x3e \\x3c\/div\\x3e \\x3c\/div\\x3e \\x3cdi class\\x3d\"col-md-6 mt-3\"\\x3e \\x3cp\\x3eWe noticed you are coming from \\x3cstrong\\x3eBrazil\\x3c\/strong\\x3e where this product may be a bit expensive.\\x3cbr\\x3e We want our products to be affordable for everyone around the world. If you need it, use the code \\x3ccode\\x3eBRAZILLOVE\\x3c\/code\\x3e for an extra \\x3cstrong\\x3e56.4% OFF MDB Essential\\x3c\/strong\\x3e.\\x3c\/p\\x3e \\x3c\/di\\x3e \\x3c\/div\\x3e \\x3c\/div\\x3e';\nnull!=document.querySelector(\"[id^\\x3dgtmDC-propageMDB5-]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-propageMDB5-]\").innerHTML=a)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1945
    },{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){var a='\\x3cdiv class\\x3d\"alert alert-secondary\" role\\x3d\"alert\" data-mdb-color\\x3d\"secondary\"\\x3e\\x3cstrong\\x3eHelp us improve \\x3cbr\\x3e MDB Go\\x3c\/strong\\x3e\\x3cp class\\x3d\"mt-2\"\\x3eGive us your feedback so we can make MDB GO even better and keep it free.\\x3c\/p\\x3e\\x3ca href\\x3d\"https:\/\/forms.gle\/bcQ5F8v318wFuMP9A\" class\\x3d\"btn btn-secondary\"\\x3e \\x3ci class\\x3d\"fas fa-edit\"\\x3e\\x3c\/i\\x3e Take Survey\\x3c\/a\\x3e\\x3c\/div\\x3e';null!=document.querySelector(\"[id^\\x3dgtmDC-scroll]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-scroll]\").innerHTML=\na)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1976
    },{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){var a='\\x3cdiv class\\x3d\"alert alert-secondary text-center\" role\\x3d\"alert\" data-mdb-color\\x3d\"secondary\"\\x3e \\x3cstrong\\x3eHelp us improve MDB Go\\x3c\/strong\\x3e \\x3cp class\\x3d\"mt-2\"\\x3eGive us your feedback so we can make MDB GO even better and keep it free.\\x3c\/p\\x3e \\x3ca href\\x3d\"https:\/\/forms.gle\/bcQ5F8v318wFuMP9A\" class\\x3d\"btn btn-secondary\"\\x3e \\x3ci class\\x3d\"fas fa-edit\"\\x3e\\x3c\/i\\x3e Take Survey\\x3c\/a\\x3e \\x3c\/div\\x3e';null!=document.querySelector(\"[id^\\x3dgtmDC-cli]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-cli]\").innerHTML=\na)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1978
    },{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var a='\\x3cdiv class\\x3d\"border border-danger p-4 text-center\"\\x3e\\x3cp\\x3e \\x3cstrong\\x3eThis content is for the previous 4th version of Bootstrap\\x3c\/strong\\x3e \\x3c\/p\\x3e \\x3cp\\x3eWe have prepared new and free, high-quality tutorials using the latest \\x3cbr\\x3e Bootstrap 5\\x3c\/p\\x3e \\x3ca type\\x3d\"button\" class\\x3d\"btn mt-2 btn-danger waves-effect waves-light\" href\\x3d\"",["escape",["macro",89],7],"\"\\x3e \\x3ci class\\x3d\"fas fa-graduation-cap\"\\x3e\\x3c\/i\\x3e Start new tutorials\\x3c\/a\\x3e \\x3c\/div\\x3e';\nnull!=document.querySelector(\"[id^\\x3dgtmDC-tutorials]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-tutorials]\").innerHTML=a)})();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1981
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_contentGroup":["list",["map","index","4","group",["macro",6]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",7]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","4","dimension",["macro",8]],["map","index","7","dimension",["macro",11]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",12],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"YouTube Videos",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":["macro",17],
      "vtp_eventLabel":["macro",18],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":525
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Scroll Depth",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":["template",["macro",19],"%"],
      "vtp_eventLabel":["macro",1],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":526
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"979879318",
      "vtp_customParamsFormat":"NONE",
      "vtp_conversionLabel":"uIBJCPv423AQlouf0wM",
      "vtp_rdp":false,
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",22],
      "vtp_enableRdpCheckbox":true,
      "tag_id":815
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Goals",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":["macro",25],
      "vtp_eventLabel":["template",["macro",26]," ",["macro",27]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":833
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Snippets",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":["macro",31],
      "vtp_eventLabel":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":845
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Modals",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":["template","Clicked ",["macro",39]],
      "vtp_eventLabel":["macro",33],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":851
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Outbound links",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":["macro",24],
      "vtp_eventLabel":["macro",40],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":855
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",41],
      "vtp_eventCategory":["macro",42],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":"Purchase",
      "vtp_eventLabel":["macro",43],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":866
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",41],
      "vtp_eventCategory":["macro",44],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":"Purchase",
      "vtp_eventLabel":["macro",43],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":867
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"Ecommerce helper",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":["macro",45],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":873
    },{
      "function":"__mf",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_projectId":"9165eec4-fcd5-4c79-aa25-5d2d8d5eee4d",
      "tag_id":888
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Goals",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":"Add to cart",
      "vtp_eventLabel":["macro",43],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":892
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"First Campaign",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":"Purchase",
      "vtp_eventLabel":["macro",46],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":901
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Last Campaign",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":"Purchase",
      "vtp_eventLabel":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":902
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"First Campaign",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":"Download",
      "vtp_eventLabel":["macro",46],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":903
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Last Campaign",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":"Download",
      "vtp_eventLabel":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":904
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Modals",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":"Viewed",
      "vtp_eventLabel":["macro",33],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":905
    },{
      "function":"__bzi",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_id":"1795625",
      "tag_id":909
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Goals",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":"Mobile",
      "vtp_eventLabel":"Angular Download",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1337
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1358
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1412
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Content Clicks",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":["template",["macro",53]," click"],
      "vtp_eventLabel":["template",["macro",38]," ",["macro",54]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1417
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1439
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1491
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":1508
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1514
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1520
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1523
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1713
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1811
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1813
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1817
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1819
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1821
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1832
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1835
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1838
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1840
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1842
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1851
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1857
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1863
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","Dynamic Content ",["macro",67]],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":"Clicked",
      "vtp_eventLabel":["macro",64],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1870
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template","Dynamic Content ",["macro",67]],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":"Viewed",
      "vtp_eventLabel":["macro",70],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1873
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1876
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1877
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1878
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1887
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1888
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1889
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1894
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1896
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1897
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1898
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1899
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1912
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1913
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1914
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1915
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1933
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1935
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1949
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1950
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1956
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1957
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":2023
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":2028
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":2031
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":2033
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":2036
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":2039
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":2040
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":2043
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":2044
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":2059
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":2060
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":2061
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":2074
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":2076
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":2078
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":2080
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":2082
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":2084
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":2091
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":2092
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"25,50,75",
      "vtp_captureComplete":true,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":true,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"2340190_699",
      "vtp_enableTriggerStartOption":true,
      "tag_id":2093
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25,50,75,100",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"2340190_702",
      "vtp_enableTriggerStartOption":true,
      "tag_id":2094
    },{
      "function":"__cl",
      "tag_id":2095
    },{
      "function":"__cl",
      "tag_id":2096
    },{
      "function":"__cl",
      "tag_id":2097
    },{
      "function":"__cl",
      "tag_id":2098
    },{
      "function":"__cl",
      "tag_id":2099
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2340190_1203",
      "tag_id":2100
    },{
      "function":"__cl",
      "tag_id":2101
    },{
      "function":"__cl",
      "tag_id":2102
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","2340190_1264_1182"],
      "vtp_uniqueTriggerId":"2340190_1264",
      "tag_id":2103
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"2340190_1264_1182",
      "tag_id":2104
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":".modal",
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1302",
      "tag_id":2105
    },{
      "function":"__cl",
      "tag_id":2106
    },{
      "function":"__cl",
      "tag_id":2107
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"40",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"2340190_1341",
      "vtp_enableTriggerStartOption":true,
      "tag_id":2108
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"33",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"2340190_1361",
      "vtp_enableTriggerStartOption":true,
      "tag_id":2109
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2340190_1369",
      "tag_id":2110
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"33",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"2340190_1411",
      "vtp_enableTriggerStartOption":true,
      "tag_id":2111
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2340190_1416",
      "tag_id":2112
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-nav-']:not([id$='-sub'])",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1431",
      "tag_id":2113
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"40",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"2340190_1489",
      "vtp_enableTriggerStartOption":true,
      "tag_id":2114
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"33",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"2340190_1492",
      "vtp_enableTriggerStartOption":true,
      "tag_id":2115
    },{
      "function":"__cl",
      "tag_id":2116
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"33",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"2340190_1513",
      "vtp_enableTriggerStartOption":true,
      "tag_id":2117
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"33",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"2340190_1524",
      "vtp_enableTriggerStartOption":true,
      "tag_id":2118
    },{
      "function":"__evl",
      "vtp_elementId":"exampleModalLabel",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1525",
      "tag_id":2119
    },{
      "function":"__evl",
      "vtp_elementId":"gtmDC-propageMDB5-pro",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1527",
      "tag_id":2120
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1714",
      "tag_id":2121
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"50",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"2340190_1722",
      "vtp_enableTriggerStartOption":true,
      "tag_id":2122
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^=gtmDC-scroll]",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"1",
      "vtp_uniqueTriggerId":"2340190_1781",
      "tag_id":2123
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^=gtmDC-scroll-]",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"1",
      "vtp_uniqueTriggerId":"2340190_1786",
      "tag_id":2124
    },{
      "function":"__evl",
      "vtp_elementId":"section-pricing",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"20",
      "vtp_uniqueTriggerId":"2340190_1802",
      "tag_id":2125
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1810",
      "tag_id":2126
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1812",
      "tag_id":2127
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1816",
      "tag_id":2128
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1818",
      "tag_id":2129
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1820",
      "tag_id":2130
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"50",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"2340190_1847",
      "vtp_enableTriggerStartOption":true,
      "tag_id":2131
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^=gtmDC-frontpage-]",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"1",
      "vtp_uniqueTriggerId":"2340190_1850",
      "tag_id":2132
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1852",
      "tag_id":2133
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1856",
      "tag_id":2134
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2340190_1871",
      "tag_id":2135
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1879",
      "tag_id":2136
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1880",
      "tag_id":2137
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1881",
      "tag_id":2138
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1890",
      "tag_id":2139
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1891",
      "tag_id":2140
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1892",
      "tag_id":2141
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1893",
      "tag_id":2142
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-'][id$='-pro']",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1901",
      "tag_id":2143
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-'][id$='-pro']",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1902",
      "tag_id":2144
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-'][id$='-pro']",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1903",
      "tag_id":2145
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-'][id$='-pro']",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1904",
      "tag_id":2146
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC'][id$='sub']",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1916",
      "tag_id":2147
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-'][id$='-sub']",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1919",
      "tag_id":2148
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-'][id$='-sub']",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1926",
      "tag_id":2149
    },{
      "function":"__evl",
      "vtp_elementId":"gtmDc-mdb4-jquery",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1937",
      "tag_id":2150
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2340190_1939",
      "tag_id":2151
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1942",
      "tag_id":2152
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1946",
      "tag_id":2153
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1947",
      "tag_id":2154
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1948",
      "tag_id":2155
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1951",
      "tag_id":2156
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1952",
      "tag_id":2157
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-scroll-']",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1975",
      "tag_id":2158
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":"[id^='gtmDC-cli-']",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1977",
      "tag_id":2159
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"[id^='gtmDC-tutorials-']",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1982",
      "tag_id":2160
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1994",
      "tag_id":2161
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1995",
      "tag_id":2162
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1999",
      "tag_id":2163
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_2000",
      "tag_id":2164
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_2004",
      "tag_id":2165
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_2005",
      "tag_id":2166
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"[id^='gtmDC-nav-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_2022",
      "tag_id":2167
    },{
      "function":"__evl",
      "vtp_elementId":"BigMaySaleAd",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_2024",
      "tag_id":2168
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"[id^='gtmDC-navbar-']:not([id$='-sub']):not([id$='-logged']):not([id$='-unlogged'])",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_2029",
      "tag_id":2169
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"[id^='gtmDC-nav-']:not([id$='-sub']):not([id$='-logged']):not([id$='-unlogged'])",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_2030",
      "tag_id":2170
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"[id^='gtmDC-navbar-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_2032",
      "tag_id":2171
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"[id^='gtmDC-'][id$='-pro']",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_2035",
      "tag_id":2172
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"[id^='gtmDC-'][id$='-sub']",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_2037",
      "tag_id":2173
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub'])",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_2038",
      "tag_id":2174
    },{
      "function":"__evl",
      "vtp_elementId":"PhModal",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_2046",
      "tag_id":2175
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"[id^='gtmDC-navbar-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_2048",
      "tag_id":2176
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"[id^='gtmDC-nav-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_2049",
      "tag_id":2177
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_2070",
      "tag_id":2178
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_2071",
      "tag_id":2179
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_2072",
      "tag_id":2180
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"[id^='gtmDC-'][id$='-pro']",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_2073",
      "tag_id":2181
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"[id^='gtmDC-'][id$='-pro']",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_2075",
      "tag_id":2182
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"[id^='gtmDC-'][id$='-pro']",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_2077",
      "tag_id":2183
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"[id^='gtmDC-'][id$='-sub']",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_2079",
      "tag_id":2184
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"[id^='gtmDC-'][id$='-sub']",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_2081",
      "tag_id":2185
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"[id^='gtmDC-'][id$='-sub']",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_2083",
      "tag_id":2186
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"[id^='gtmDC-'][id$='-sub']",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_2086",
      "tag_id":2187
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"[id^='gtmDC-'][id$='-pro']",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_2088",
      "tag_id":2188
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"289867067833087\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=289867067833087\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":836
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"289867067833087\");fbq(\"track\",\"mdbFreeDownload\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=289867067833087\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":837
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",251,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(b,c,d){var a=new Date;a.setTime(a.getTime()+864E5*d);document.cookie=b+\"\\x3d\"+c+\";path\\x3d\/;expires\\x3d\"+a.toGMTString()}var now=(new Date).getTime();setCookie(\"firstSeen\",now,365);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":877
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",249,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(b,c,d){var a=new Date;a.setTime(a.getTime()+864E5*d);document.cookie=b+\"\\x3d\"+c+\";path\\x3d\/;expires\\x3d\"+a.toGMTString()}var now=(new Date).getTime();setCookie(\"firstDownload\",now,365);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":878
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",252,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(b,c,d){var a=new Date;a.setTime(a.getTime()+864E5*d);document.cookie=b+\"\\x3d\"+c+\";path\\x3d\/;expires\\x3d\"+a.toGMTString()}var now=(new Date).getTime();setCookie(\"firstConversion\",now,365);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":879
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(b,c,d){var a=new Date;a.setTime(a.getTime()+864E5*d);document.cookie=b+\"\\x3d\"+c+\";path\\x3d\/;expires\\x3d\"+a.toGMTString()}setCookie(\"firstDownloadTechnology\",",["escape",["macro",27],8,16],",365);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":883
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Evar stb_exitintent=!1;document.addEventListener(\"mousemove\",function(a){var b=window.pageYOffset||document.documentElement.scrollTop;10\u003Ea.pageY-b\u0026\u00260==stb_exitintent\u0026\u0026(dataLayer.push({event:\"exit_intent\"}),stb_exitintent=!0)});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":890
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction createCookie(c,d,b){var a=\"\";b\u0026\u0026(a=new Date,a.setTime(a.getTime()+864E5*b),a=\"; expires\\x3d\"+a.toUTCString());document.cookie=c+\"\\x3d\"+d+a+\"; path\\x3d\/\"}createCookie(\"firstCampaign\",\"",["escape",["macro",81],7],"\",365);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":897
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction createCookie(c,d,b){var a=\"\";b\u0026\u0026(a=new Date,a.setTime(a.getTime()+864E5*b),a=\"; expires\\x3d\"+a.toUTCString());document.cookie=c+\"\\x3d\"+d+a+\"; path\\x3d\/\"}createCookie(\"lastCampaign\",\"",["escape",["macro",81],7],"\",365);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":900
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",201,0]],
      "once_per_event":true,
      "vtp_html":"\n     \u003Cdiv class=\"modal fade right\" id=\"startModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"startModalLabel\" aria-hidden=\"true\"\u003E\n     \u003Cdiv class=\"modal-dialog\" role=\"document\"\u003E\n       \u003Cdiv class=\"modal-content\"\u003E\n         \u003Cdiv class=\"modal-header\"\u003E\n           \u003Ch5 class=\"modal-title\" id=\"startModalLabel\"\u003E\u003Cb\u003EFirst time on mdbootstrap?\u003C\/b\u003E\u003C\/h5\u003E\n           \u003Cbutton type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"\u003E\n             \u003Cspan aria-hidden=\"true\"\u003E×\u003C\/span\u003E\n           \u003C\/button\u003E\n         \u003C\/div\u003E\n\n         \u003Cdiv class=\"modal-body text-center\"\u003E     \n\n          \u003Ci class=\"far fa-smile fa-5x text-info my-4\"\u003E\u003C\/i\u003E\n\n          \u003Cp\u003E\u003Cstrong\u003EDo you want us to help you get started?\u003C\/strong\u003E\u003C\/p\u003E\n\n          \u003Chr class=\"my-2\"\u003E\n         \n          \u003Ca class=\"btn btn-primary btn-sm float-right\" href=\"https:\/\/mdbootstrap.com\/docs\/standard\/getting-started\/\" role=\"button\"\u003EYes, do it\u003Ci class=\"fas fa-arrow-alt-circle-right ml-2\"\u003E\u003C\/i\u003E\u003C\/a\u003E \n          \u003Cbutton type=\"button\" class=\"btn btn-outline-primary btn-sm float-right\" data-dismiss=\"modal\"\u003E No, thanks \u003C\/button\u003E \n         \u003C\/div\u003E\n       \u003C\/div\u003E\n     \u003C\/div\u003E\n   \u003C\/div\u003E\n\n   \n\u003Cscript\u003E$(\"#startModal\").modal(\"show\");$(\"#startModal\").parent().css(\"display\",\"block\");$(\"#startModal\").parent().css(\"visibility\",\"visible\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1342
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Efunction setCookie(a,b){var c=\"Mon, 18 Jan 2038 03:14:07\";document.cookie=a+\"\\x3d\"+b+\";path\\x3d\/;expires\\x3d\"+c}setCookie(\"seenStartModal\",!0);\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1345
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(a,b){var c=\"Mon, 18 Jan 2038 03:14:07\";document.cookie=a+\"\\x3d\"+b+\";path\\x3d\/;expires\\x3d\"+c}function getCookie(a){for(var b=document.cookie.split(\";\"),c,d=0;d\u003Cb.length;d++){var e=b[d].trim();0===e.indexOf(a+\"\\x3d\")\u0026\u0026(c=e.substring((a+\"\\x3d\").length,e.length))}return c}(function(){var a=getCookie(\"pageviewCount\");\"undefined\"===typeof a?a=1:a++;setCookie(\"pageviewCount\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1356
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Efunction setCookie(a,b){var c=\"Mon, 18 Jan 2038 03:14:07\";document.cookie=a+\"\\x3d\"+b+\";path\\x3d\/;expires\\x3d\"+c}setCookie(\"clickedToGitHubMDB5\",!0);\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1368
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",201,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cdiv class=\"modal fade\" id=\"startModal\" tabindex=\"-1\" aria-labelledby=\"startModalLabel\" aria-hidden=\"true\"\u003E\n   \u003Cdiv class=\"modal-dialog\"\u003E\n      \u003Cdiv class=\"modal-content\"\u003E\n         \u003Cdiv class=\"modal-header\"\u003E\n            \u003Ch5 class=\"modal-title\"\u003EFirst time on mdbootstrap?\u003C\/h5\u003E\n            \u003Cbutton type=\"button\" class=\"close\" data-mdb-dismiss=\"modal\" aria-label=\"Close\"\u003E \u003Cspan aria-hidden=\"true\"\u003E×\u003C\/span\u003E \u003C\/button\u003E \n         \u003C\/div\u003E\n         \u003Cdiv class=\"modal-body text-center\"\u003E\n            \u003Ci class=\"far fa-smile fa-5x text-info my-4\"\u003E\u003C\/i\u003E \n            \u003Cp\u003E\u003Cstrong\u003EDo you want us to help you get started?\u003C\/strong\u003E\u003C\/p\u003E\n         \u003C\/div\u003E\n         \u003Cdiv class=\"modal-footer\"\u003E \u003Cbutton type=\"button\" class=\"btn btn-outline-primary\" data-mdb-dismiss=\"modal\"\u003E No, thanks \u003C\/button\u003E \u003Ca class=\"btn btn-primary\" href=\"https:\/\/mdbootstrap.com\/docs\/standard\/getting-started\/\" role=\"button\"\u003EYes, do it \u003Ci class=\"fas fa-arrow-alt-circle-right ms-2\"\u003E\u003C\/i\u003E\u003C\/a\u003E \u003C\/div\u003E\n      \u003C\/div\u003E\n   \u003C\/div\u003E\n\u003C\/div\u003E\n\n\u003Cscript\u003Evar myModalEl=document.getElementById(\"startModal\"),modal=new mdb.Modal(myModalEl);modal.toggle();myModalEl.parentElement.style.display=\"block\";myModalEl.parentElement.style.visibility=\"visible\";\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1490
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",250,0]],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cdiv class=\"modal fade\" id=\"exitIntentCheckout\" tabindex=\"-1\" aria-labelledby=\"exitIntentCheckout\" aria-hidden=\"true\" data-backdrop=\"static\"\u003E\n  \u003Cdiv class=\"modal-dialog\"\u003E\n    \u003Cdiv class=\"modal-content\"\u003E\n      \u003Cdiv class=\"modal-header bg-danger text-white\"\u003E\n        \u003Ch5 class=\"modal-title\"\u003EOne time gift | Additional \u003Cu\u003E15% CUT\u003C\/u\u003E\u003C\/h5\u003E\n      \u003C\/div\u003E\n      \u003Cdiv class=\"modal-body\"\u003E\n        \u003Cdiv class=\"text-center text-black\"\u003E\n          \u003Cp class=\"display-3 fw-bold text-danger my-3\"\u003E\u003Cspan id=\"time-counter\"\u003E\u003C\/span\u003E\u003C\/p\u003E\n          \u003Cp\u003EThis additional discount will be added on top, because it seems that you are still undecided, but this is a one-time offer, you will not be able to calim it ever again.\u003C\/p\u003E          \n          \u003Cp class=\"font-weight-bold\"\u003EClaim \u0026amp; complete the order before the offer expires.\u003C\/p\u003E\n        \u003C\/div\u003E\n      \u003C\/div\u003E\n      \u003Cdiv class=\"modal-footer\"\u003E\n        \u003Ca type=\"button\" class=\"btn btn-grey\" data-mdb-dismiss=\"modal\"\u003E\n          DISCARD FOREVER\n        \u003C\/a\u003E\n        \u003Ca href=\"https:\/\/mdbootstrap.com\/checkout\/?coupon_code=yn7q3457\" type=\"button\" class=\"btn btn-danger flex-fill\"\u003ECLAIM OFFER NOW\u003C\/a\u003E\n      \u003C\/div\u003E\n    \u003C\/div\u003E\n  \u003C\/div\u003E\n\u003C\/div\u003E\n\n\n\n\u003Cscript\u003Evar myModalEl=document.getElementById(\"exitIntentCheckout\"),modal=new mdb.Modal(myModalEl);modal.toggle();myModalEl.parentElement.style.display=\"block\";myModalEl.parentElement.style.visibility=\"visible\";var startDate=(new Date).getTime(),countDownDate=new Date(startDate+9E5),counterElement=document.getElementById(\"time-counter\");\nfunction startCounter(){if(null!=counterElement)var d=setInterval(function(){var a=(new Date).getTime();a=countDownDate-a;var b=Math.floor(a%36E5\/6E4),c=Math.floor(a%6E4\/1E3);counterElement.innerHTML=b+\"m \"+c+\"s\";0\u003Ea\u0026\u0026(clearInterval(d),document.getElementById(\"time-counter\").innerHTML='\\x3cp class\\x3d\"h3 grey-text\"\\x3eSale ended :(\\x3c\/p\\x3e')},1E3)}startCounter();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1707
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",253,0]],
      "once_per_event":true,
      "vtp_html":" \u003Cdiv class=\"modal fade\" id=\"chinaShareModal\" data-mdb-backdrop=\"static\" data-mdb-keyboard=\"false\" tabindex=\"-1\" aria-labelledby=\"chinaShareModalLabel\" aria-hidden=\"true\"\u003E \u003Cdiv class=\"modal-dialog modal-xl\"\u003E \u003Cdiv class=\"modal-content\"\u003E \u003Cdiv class=\"modal-header\"\u003E \u003Ch5 class=\"modal-title\" id=\"chinaShareModalLabel\"\u003E请在社交媒体上分享我们的资源\u003C\/h5\u003E \u003Cbutton type=\"button\" class=\"btn-close\" data-mdb-dismiss=\"modal\" aria-label=\"Close\"\u003E\u003C\/button\u003E \u003C\/div\u003E\u003Cdiv class=\"modal-body\"\u003E \u003Cdiv class=\"text-center\"\u003E \u003Cp\u003E我们拥有的中文用户越多，我们越会尝试定制模板和组件来满足中文网络的需求。 请帮助我们改进，您将很快获得更多免费资源。\u003C\/p\u003E\u003Cdiv class=\"row justify-content-center my-5\"\u003E \u003Cdiv class=\"col-md-2\"\u003E \u003Cp\u003E分享人人\u003C\/p\u003E\u003Ca href=\"http:\/\/share.renren.com\/share\/buttonshare.do?link=https:\/\/mdbootstrap.com\/\u0026amp;title=UI\" target=\"_blank\"\u003E\u003Ci class=\"fab fa-renren fa-4x\"\u003E\u003C\/i\u003E\u003C\/a\u003E \u003C\/div\u003E\u003Cdiv class=\"col-md-2\"\u003E \u003Cp\u003E在百度论坛上分享\u003C\/p\u003E\u003Ca href=\"http:\/\/like.baidu.com\/set?buttontype=small\u0026amp;cb=bdShare.ajax._callbacks.bd4bb141b\u0026amp;index=0\u0026amp;url=https:\/\/mdbootstrap.com\/\" target=\"_blank\"\u003E\u003Ci class=\"fas fa-paw fa-4x\"\u003E\u003C\/i\u003E\u003C\/a\u003E \u003C\/div\u003E\u003Cdiv class=\"col-md-2\"\u003E \u003Cp\u003E分享到百度\u003C\/p\u003E\u003Ca href=\"http:\/\/tieba.baidu.com\/f\/commit\/share\/openShareApi?url=https:\/\/mdbootstrap.com\/\u0026amp;link=https:\/\/mdbootstrap.com\/\" target=\"_blank\"\u003E\u003Ci class=\"fas fa-paw fa-4x\"\u003E\u003C\/i\u003E\u003C\/a\u003E \u003C\/div\u003E\u003Cdiv class=\"col-md-2\"\u003E \u003Cp\u003E分享到新浪微博\u003C\/p\u003E\u003Ca href=\"http:\/\/service.weibo.com\/share\/share.php?url=https:\/\/mdbootstrap.com\/\u0026amp;appkey=\u0026amp;title=UI\u0026amp;pic=\u0026amp;ralateUid=\u0026amp;language=zh_cn\" target=\"_blank\"\u003E\u003Ci class=\"fab fa-weibo fa-4x\"\u003E\u003C\/i\u003E\u003C\/a\u003E \u003C\/div\u003E\u003Cdiv class=\"col-md-2\"\u003E \u003Cp\u003E在领英上分享\u003C\/p\u003E\u003Ca href=\"https:\/\/www.linkedin.com\/sharing\/share-offsite\/?url=https:\/\/mdbootstrap.com\/\" target=\"_blank\"\u003E\u003Ci class=\"fab fa-linkedin fa-4x\"\u003E\u003C\/i\u003E\u003C\/a\u003E \u003C\/div\u003E\u003C\/div\u003E\u003Cp\u003E某事不起作用？\u003Ca href=\"https:\/\/mdbootstrap.com\/general\/contact\/\"\u003E联系我们\u003C\/a\u003E\u003C\/p\u003E\u003C\/div\u003E\u003C\/div\u003E\u003C\/div\u003E\u003C\/div\u003E\u003C\/div\u003E\u003Cscript\u003Evar myModalEl=document.getElementById(\"chinaShareModal\"),modal=new mdb.Modal(myModalEl);modal.toggle();myModalEl.parentElement.style.display=\"block\";myModalEl.parentElement.style.visibility=\"visible\";\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1725
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cdiv class=\"toast border border-black show fade mx-auto\" id=\"mdbLabShare\" role=\"alert\" style=\"position:fixed;bottom:50px;right:20px;\"\u003E\n    \u003Cdiv class=\"toast-body text-black\" style=\"background-color: white\"\u003E\n      \u003Cdiv class=\"text-center mb-2\"\u003E\n        \u003Cp\u003E\u003Cstrong\u003EDon\u0026#39;t let your peers miss out.\u003C\/strong\u003E\u003C\/p\u003E\n        \u003Cp\u003EBe the one who shares the most fun \u0026amp; useful content.\u003C\/p\u003E\n         \u003Ca class=\"btn-floating  btn-fb\" href=\"https:\/\/facebook.com\/sharer\/sharer.php?u=https:\/\/mdbootstrap.com\/docs\/standard\/lab\/\" rel=\"nofollow\" target=\"_blank\" type=\"button\" role=\"button\"\u003E\u003Ci class=\"fa fa-facebook\" aria-hidden=\"true\"\u003E\u003C\/i\u003E\u003C\/a\u003E\n          \n            \u003Ca class=\"btn-floating  btn-tw\" href=\"https:\/\/twitter.com\/intent\/tweet?text=Check out these amazing concepts: Amazon, Facebook, Instagram, and more recreated with the latest Bootstrap 5. They are sometimes made available for free 🤩 - worth keeping an eye on. \u0026amp;url=https:\/\/mdbootstrap.com\/docs\/standard\/lab\/\u0026amp;hashtags=mdblab,mdbootstrap\" rel=\"nofollow\" target=\"_blank\" type=\"button\" role=\"button\"\u003E\u003Ci class=\"fa fa-twitter\" aria-hidden=\"true\"\u003E\u003C\/i\u003E\u003C\/a\u003E\n          \n          \n            \u003Ca href=\"mailto: ?subject=I found a very useful templates collection\u0026amp;body=Check out these amazing concepts: Amazon, Facebook, Instagram, and more recreated with the latest Bootstrap 5. They are sometimes made available for free - worth an keeping eye on. \nhttps:\/\/mdbootstrap.com\/docs\/standard\/lab\/\" rel=\"nofollow\" target=\"_blank\" class=\"btn-floating btn-gplus\" type=\"button\" role=\"button\"\u003E\u003Ci class=\"fa fa-envelope-o\" aria-hidden=\"true\"\u003E\u003C\/i\u003E\u003C\/a\u003E\n            \n      \n      \n      \u003C\/div\u003E\n\n\n    \u003C\/div\u003E\n  \u003C\/div\u003E\n\n\u003Cscript\u003Evar instructionAlert=document.getElementById(\"mdbLabShare\");instructionAlert.parentElement.style.display=\"block\";instructionAlert.parentElement.style.visibility=\"visible\";\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1779
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a='\\x3cdiv class\\x3d\"alert alert-black\" role\\x3d\"alert\" data-color\\x3d\"danger\"\\x3e \\x3cp class\\x3d\"font-weight-bold\"\\x3eGet MDB PRO for \\x3cspan\\x3e\\u20ac1\\x3c\/span\\x3e. \\x3cspan class\\x3d\"text-danger mb-0\"\\x3eOffers limited!\\x3c\/span\\x3e\\x3c\/p\\x3e\\x3cp \\x3e99% discount for taking a \\x3cspan class\\x3d\"font-weight-bold\"\\x3e4 minute survey\\x3c\/span\\x3e about MDB performance in \\x3cspan class\\x3d\"font-weight-bold\"\\x3eChina\\x3c\/span\\x3e.\\x3c\/p\\x3e\\x3cdiv class\\x3d\"text-center\"\\x3e \\x3ca target\\x3d\"_blank\" href\\x3d\"https:\/\/forms.office.com\/Pages\/ResponsePage.aspx?id\\x3dDQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__QrlYClUOTg3T1pFOUlZVTNFTVQyMVdEMDkxWTE5My4u\" class\\x3d\"btn btn-danger btn-sm mt-2\"\\x3eANSWER \\x26 CLAIM REWARD NOW\\x3c\/a\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e';\ndocument.querySelector(\"[id^\\x3dgtmDC-scroll-]\").innerHTML=a})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1780
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Efunction setCookie(a,b){var c=\"Mon, 18 Jan 2038 03:14:07\";document.cookie=a+\"\\x3d\"+b+\";path\\x3d\/;expires\\x3d\"+c}setCookie(\"seenChineseSurveyTaken\",!0);\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1783
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Efunction setCookie(a,b){var c=\"Mon, 18 Jan 2038 03:14:07\";document.cookie=a+\"\\x3d\"+b+\";path\\x3d\/;expires\\x3d\"+c}setCookie(\"seenInstallationPage\",!0);\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1792
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Efunction setCookie(a,b){var c=\"Mon, 18 Jan 2038 03:14:07\";document.cookie=a+\"\\x3d\"+b+\";path\\x3d\/;expires\\x3d\"+c}setCookie(\"seenNewsletterConfirmation\",!0);\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1797
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(a,b){var c=\"Mon, 18 Jan 2038 03:14:07\";document.cookie=a+\"\\x3d\"+b+\";path\\x3d\/;expires\\x3d\"+c}function getCookie(a){for(var b=document.cookie.split(\";\"),c,d=0;d\u003Cb.length;d++){var e=b[d].trim();0===e.indexOf(a+\"\\x3d\")\u0026\u0026(c=e.substring((a+\"\\x3d\").length,e.length))}return c}(function(){var a=getCookie(\"s4Left\");a=\"undefined\"===typeof a?47:a-Math.floor(5*Math.random());setCookie(\"s4Left\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1798
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Efunction setCookie(a,b){var c=\"Mon, 18 Jan 2038 03:14:07\";document.cookie=a+\"\\x3d\"+b+\";path\\x3d\/;expires\\x3d\"+c}setCookie(\"seenProPage\",!0);\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1800
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(a,b){var c=\"Mon, 18 Jan 2038 03:14:07\";document.cookie=a+\"\\x3d\"+b+\";path\\x3d\/;expires\\x3d\"+c}function getCookie(a){for(var b=document.cookie.split(\";\"),c,d=0;d\u003Cb.length;d++){var e=b[d].trim();0===e.indexOf(a+\"\\x3d\")\u0026\u0026(c=e.substring((a+\"\\x3d\").length,e.length))}return c}(function(){var a=getCookie(\"s6Left\");a=\"undefined\"===typeof a?27:a-Math.floor(6*Math.random());setCookie(\"s6Left\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1806
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a='\\x3cdiv class\\x3d\"px-lg-3 w-100\"\\x3e \\x3col class\\x3d\"list-unstyled\"\\x3e \\x3cp class\\x3d\"fw-bold text-danger h5 mb-3\"\\x3eGet MDB PRO for \\u20ac1 - LIMITED OFFER!\\x3c\/p\\x3e\\x3cli class\\x3d\"mb-2 fw-bold\"\\x3e \\x3ci class\\x3d\"fas fa-check text-danger me-2\"\\x3e\\x3c\/i\\x3eTake 4 minutes to answer 10 simple questions \\x3c\/li\\x3e\\x3cli class\\x3d\"mb-2\"\\x3e \\x3ci class\\x3d\"fas fa-check text-danger me-2\"\\x3e\\x3c\/i\\x3eHelp us improve the quality of our website in China \\x3c\/li\\x3e\\x3cli class\\x3d\"mb-2\"\\x3e \\x3ci class\\x3d\"fas fa-check text-danger me-2\"\\x3e\\x3c\/i\\x3eGet access to \\x3cstrong\\x3e5000+\\x3c\/strong\\x3e premium components, design blocks, templates, plugins, pro tutorials, git repo access, npm install \\x26 professional support with \\x3cstrong\\x3efor \\u20ac1\\x3c\/strong\\x3e \\x3c\/li\\x3e\\x3cli class\\x3d\"mb-2\"\\x3e \\x3ci class\\x3d\"fas fa-check text-danger me-2\"\\x3e\\x3c\/i\\x3eDiscount applies to all products - MDB Standard, Angular, React \\x26 \\x3cstrong\\x3eVue\\x3c\/strong\\x3e versions \\x3c\/li\\x3e\\x3c\/ol\\x3e \\x3ca class\\x3d\"btn btn-danger btn-lg btn-block m-1\" href\\x3d\"https:\/\/forms.office.com\/Pages\/ResponsePage.aspx?id\\x3dDQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__QrlYClUOTg3T1pFOUlZVTNFTVQyMVdEMDkxWTE5My4u\" role\\x3d\"button\" target\\x3d\"_blank\"\\x3eANSWER \\x26 CLAIM DISCOUNT NOW\\x3c\/a\\x3e \\x3c\/div\\x3e';\ndocument.querySelector(\"[id^\\x3dgtmDC-frontpage-]\").innerHTML=a})();\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1846
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(a,b){var c=\"Mon, 18 Jan 2038 03:14:07\";document.cookie=a+\"\\x3d\"+b+\";path\\x3d\/;expires\\x3d\"+c}setCookie(\"seenFreeSurveyPage\",!0);\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1855
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var a='\\x3cdiv class\\x3d\"alert mt-3 alert-danger\" role\\x3d\"alert\" data-mdb-color\\x3d\"danger\"\\x3e        Important: The number od rewards is limited. \\x3cstrong\\x3eThere is '+",["escape",["macro",61],8,16],"+\" coupon uses left\\x3c\/strong\\x3e.\\x3c\/div\\x3e\";0\u003C",["escape",["macro",61],8,16],"\u0026\u0026(document.querySelector(\"#gtmDC-free-survey\").innerHTML=a)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1866
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(a,b){var c=\"Mon, 18 Jan 2038 03:14:07\";document.cookie=a+\"\\x3d\"+b+\";path\\x3d\/;expires\\x3d\"+c}function getCookie(a){for(var b=document.cookie.split(\";\"),c,d=0;d\u003Cb.length;d++){var e=b[d].trim();0===e.indexOf(a+\"\\x3d\")\u0026\u0026(c=e.substring((a+\"\\x3d\").length,e.length))}return c}(function(){var a=getCookie(\"subDcViewCount\");\"undefined\"===typeof a?a=1:a++;setCookie(\"subDcViewCount\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1917
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(a,b){var c=\"Mon, 18 Jan 2038 03:14:07\";document.cookie=a+\"\\x3d\"+b+\";path\\x3d\/;expires\\x3d\"+c}setCookie(\"seenAfterPurchaseSurveyPage\",!0);\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1921
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(a,b){var c=\"Mon, 18 Jan 2038 03:14:07\";document.cookie=a+\"\\x3d\"+b+\";path\\x3d\/;expires\\x3d\"+c}setCookie(\"seenAfterUseSurveyPage\",!0);\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1925
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar countDownDate=new Date(parseInt(",["escape",["macro",87],8,16],")+172819081),counterElement=document.getElementById(\"time-counter\");\nfunction startCounter(){if(null!=counterElement)var f=setInterval(function(){var a=(new Date).getTime();a=countDownDate-a;var b=Math.floor(a\/864E5),c=Math.floor(a%864E5\/36E5),d=Math.floor(a%36E5\/6E4),e=Math.floor(a%6E4\/1E3);counterElement.innerHTML=b+\"d \"+c+\"h \"+d+\"m \"+e+\"s\";0\u003Ea\u0026\u0026(clearInterval(f),document.getElementById(\"time-counter\").innerHTML='\\x3cp class\\x3d\"h3 grey-text\"\\x3eSale ended :(\\x3c\/p\\x3e',window.location.href=\"https:\/\/mdbootstrap.com\/pro\/\")},1E3)}startCounter();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1932
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var a='\\x3cp class\\x3d\"note note-warning\"\\x3e \\x3cstrong\\x3eNote:\\x3c\/strong\\x3e This documentation is for an older version of Bootstrap (v.4). A newer version is available for Bootstrap 5. We recommend migrating to the latest version of our product - \\x3ca class\\x3d\"font-weight-bold\" target\\x3d\"_blank\" href\\x3d\"https:\/\/mdbootstrap.com\/docs\/standard\/\"\\x3eMaterial Design for Bootstrap 5.\\x3c\/a\\x3e \\x3cbr\\x3e \\x3ca class\\x3d\"btn btn-danger btn-sm ml-0\" target\\x3d\"_blank\" href\\x3d\"",["escape",["macro",88],7],"\" role\\x3d\"button\"\\x3eGo to docs v.5\\x3c\/a\\x3e \\x3c\/p\\x3e';\ndocument.querySelector(\"#gtmDc-mdb4-jquery\").innerHTML=a})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1938
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Efunction setCookie(a,b){var c=\"Mon, 18 Jan 2038 03:14:07\";document.cookie=a+\"\\x3d\"+b+\";path\\x3d\/;expires\\x3d\"+c}setCookie(\"seenCLIInstallationPage\",!0);\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1954
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _hmt=_hmt||[];(function(){var a=document.createElement(\"script\");a.src=\"https:\/\/hm.baidu.com\/hm.js?0a5f6fca6a017723c5d21849d8917487\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1974
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){var a=' \\x3cdiv id\\x3d\"free1-video\" class\\x3d\"bg-image hover-overlay ripple shadow-3 rounded-3\" data-ripple-color\\x3d\"light\"\\x3e \\x3cimg src\\x3d\"https:\/\/mdbootstrap.com\/wp-content\/themes\/mdbootstrap4\/content\/en\/_mdb5\/standard\/getting-started\/_main\/assets\/mdb-main.jpg\" class\\x3d\"w-100\" \/\\x3e \\x3ca href\\x3d\"https:\/\/www.youtube.com\/watch?v\\x3dhb5ypV0ZHt0\\x26list\\x3dPLl1gkwYU90QkeAAHno3iVJokh2evwMwaX\\x26index\\x3d1\" rel\\x3d\"nofollow\" target\\x3d\"_blank\"\\x3e \\x3cdiv class\\x3d\"mask\" style\\x3d\"background-color: rgba(251, 251, 251, 0.2)\"\\x3e\\x3c\/div\\x3e \\x3c\/a\\x3e \\x3c\/div\\x3e';\nnull!=document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\").innerHTML=a)})();\u003C\/script\u003E\n\n\u003Cscript\u003Eif(null!=document.getElementById(\"dpl-gtm-frontpage\")){var element=document.getElementById(\"dpl-gtm-frontpage\"),animate=new mdb.Animate(element,{animation:\"fade-in\",animationStart:\"onLoad\",animationDelay:\"0\",animationDuration:\"1000\"});animate.init()};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1988
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){var a='\\x3cdiv id\\x3d\"free2-mdbpro\" class\\x3d\"bg-image hover-overlay ripple shadow-3 rounded-3\" data-ripple-color\\x3d\"light\"\\x3e \\x3cimg src\\x3d\"https:\/\/mdbcdn.b-cdn.net\/wp-content\/themes\/mdbootstrap4\/content\/en\/_mdb5\/standard\/pro\/_main\/assets\/mdb5-templates.jpg\" class\\x3d\"w-100\" \/\\x3e \\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/pro\/\"\\x3e \\x3cdiv class\\x3d\"mask\" style\\x3d\"background-color: rgba(251, 251, 251, 0.2)\"\\x3e\\x3c\/div\\x3e \\x3c\/a\\x3e \\x3cdiv class\\x3d\"bg-light p-4 d-flex text-start justify-content-between\"\\x3e \\x3cdiv\\x3e \\x3ch3 class\\x3d\"text-primary fw-bold\"\\x3eTry MDB Pro\\x3c\/h3\\x3e \\x3cp class\\x3d\"mb-2\"\\x3e \\x3cu class\\x3d\"fw-bold\"\\x3e5000+ premium components\\x3c\/u\\x3e. Multiple useful plugins and gorgeous templates. Bootstrap v5 \\x26amp; v4. Angular, React, Vue, jQuery or plain JS versions. \\x3c\/p\\x3e \\x3cimg src\\x3d\"https:\/\/mdbootstrap.com\/wp-content\/themes\/mdbootstrap4\/content\/en\/_mdb5\/_assets\/img\/icons\/bootstrap.png\" alt\\x3d\"\" height\\x3d\"17px\" class\\x3d\"me-1\" \/\\x3e \\x3cimg src\\x3d\"https:\/\/mdbootstrap.com\/wp-content\/themes\/mdbootstrap4\/content\/en\/_mdb5\/_assets\/img\/icons\/angular.png\" alt\\x3d\"\" height\\x3d\"17px\" class\\x3d\"me-1\" \/\\x3e \\x3cimg src\\x3d\"https:\/\/mdbootstrap.com\/wp-content\/themes\/mdbootstrap4\/content\/en\/_mdb5\/_assets\/img\/icons\/react.png\" alt\\x3d\"\" height\\x3d\"17px\" class\\x3d\"me-1\" \/\\x3e \\x3cimg src\\x3d\"https:\/\/mdbootstrap.com\/wp-content\/themes\/mdbootstrap4\/content\/en\/_mdb5\/_assets\/img\/icons\/vue.png\" alt\\x3d\"\" height\\x3d\"17px\" class\\x3d\"me-1\" \/\\x3e \\x3cimg src\\x3d\"https:\/\/mdbootstrap.com\/wp-content\/themes\/mdbootstrap4\/content\/en\/_mdb5\/_assets\/img\/icons\/jquery.png\" alt\\x3d\"\" height\\x3d\"17px\" class\\x3d\"me-1\" \/\\x3e \\x3cimg src\\x3d\"https:\/\/mdbootstrap.com\/wp-content\/themes\/mdbootstrap4\/content\/en\/_mdb5\/_assets\/img\/icons\/javascript.png\" alt\\x3d\"\" height\\x3d\"17px\" \/\\x3e \\x3c\/div\\x3e \\x3ci class\\x3d\"fas fa-chevron-circle-right fa-lg text-primary ms-3\" style\\x3d\"margin-top:60px !important\"\\x3e\\x3c\/i\\x3e \\x3c\/div\\x3e \\x3c\/div\\x3e';\nnull!=document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\").innerHTML=a)})();\u003C\/script\u003E\n\n\u003Cscript\u003Eif(null!=document.getElementById(\"dpl-gtm-frontpage\")){var element=document.getElementById(\"dpl-gtm-frontpage\"),animate=new mdb.Animate(element,{animation:\"fade-in\",animationStart:\"onLoad\",animationDelay:\"0\",animationDuration:\"1000\"});animate.init()};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1989
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){var a='\\x3cdiv id\\x3d\"free3-mdbgo\" class\\x3d\"bg-image hover-overlay ripple shadow-0 rounded-3\" style\\x3d\"border: 1px solid #004d40\" data-ripple-color\\x3d\"light\"\\x3e \\x3cimg src\\x3d\"https:\/\/mdbootstrap.com\/wp-content\/themes\/mdbootstrap4\/content\/en\/_mdb5\/standard\/cli\/about\/assets\/featured.jpg\" class\\x3d\"w-100\" \/\\x3e \\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/docs\/standard\/cli\/\"\\x3e \\x3cdiv class\\x3d\"mask\" style\\x3d\"background-color: rgba(251, 251, 251, 0.2)\"\\x3e\\x3c\/div\\x3e \\x3c\/a\\x3e \\x3cdiv class\\x3d\"bg-light p-4 d-flex text-start justify-content-between\"\\x3e \\x3cdiv\\x3e \\x3ch3 class\\x3d\"fw-bold\" style\\x3d\"color: #004d40\"\\x3e Try \\x3cu\\x3efree\\x3c\/u\\x3e MDB GO hosting \\x3c\/h3\\x3e \\x3cp class\\x3d\"mb-1\"\\x3eCreate, deploy and host anything with a single command\\x3c\/p\\x3e \\x3c\/div\\x3e \\x3ci class\\x3d\"fas fa-chevron-circle-right fa-lg ms-3 mt-4\" style\\x3d\"color: #004d40\"\\x3e\\x3c\/i\\x3e \\x3c\/div\\x3e\\x3c\/div\\x3e';\nnull!=document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\").innerHTML=a)})();\u003C\/script\u003E\n\n\u003Cscript\u003Eif(null!=document.getElementById(\"dpl-gtm-frontpage\")){var element=document.getElementById(\"dpl-gtm-frontpage\"),animate=new mdb.Animate(element,{animation:\"fade-in\",animationStart:\"onLoad\",animationDelay:\"0\",animationDuration:\"1000\"});animate.init()};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1990
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var a='\\x3cdiv id\\x3d\"free4-discount\" class\\x3d\"alert alert-light p-5 text-start shadow-5\" role\\x3d\"alert\" data-color\\x3d\"danger\"\\x3e \\x3cp class\\x3d\"fw-bold text-black h1 mb-3 text-center\"\\x3e\\x3cspan class\\x3d\"text-danger fw-bold\"\\x3e",["escape",["macro",69],7]," offers\\x3c\/span\\x3e left\\x3c\/p\\x3e\\x3cp class\\x3d\"mb-0\"\\x3eOne-time chance to get premium \\x3cspan class\\x3d\"fw-bold\"\\x3ecomponents\\x3c\/span\\x3e, \\x3cspan class\\x3d\"fw-bold\"\\x3etemplates\\x3c\/span\\x3e \\x26amp; \\x3cspan class\\x3d\"fw-bold\"\\x3eplugins\\x3c\/span\\x3e \\x3cbr\\x3ewith \\x3cstrong\\x3e30% OFF\\x3c\/strong\\x3e. Discount applies to Standard Bootstrap, Angular, React or Vue purchases. \\x3c\/p\\x3e\\x3cp class\\x3d\"h3 px-2 py-2 text-center\"\\x3e\\x3ccode\\x3ePZ8G7V24\\x3c\/code\\x3e\\x3c\/p\\x3e\\x3cp\\x3eCopy the coupon and use it on the checkout to get discount. \\x3cstrong\\x3eHurry up! Offers are limited.\\x3c\/strong\\x3e\\x3c\/p\\x3e\\x3cp class\\x3d\"text-center mb-0 mt-4\"\\x3e\\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/pro\/\" class\\x3d\"btn btn-danger btn-lg text-center\"\\x3eclaim discount now\\x3c\/a\\x3e\\x3c\/p\\x3e\\x3c\/div\\x3e';\nnull!=document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\").innerHTML=a)})();\u003C\/script\u003E\n\n\u003Cscript\u003Eif(null!=document.getElementById(\"dpl-gtm-frontpage\")){var element=document.getElementById(\"dpl-gtm-frontpage\"),animate=new mdb.Animate(element,{animation:\"fade-in\",animationStart:\"onLoad\",animationDelay:\"0\",animationDuration:\"1000\"});animate.init()};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1991
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){var a='\\x3cdiv id\\x3d\"free5-newsletter\" class\\x3d\" bg-image hover-overlay ripple shadow-3 rounded-3\" data-ripple-color\\x3d\"light\"\\x3e \\x3cimg src\\x3d\"https:\/\/mdbootstrap.com\/img\/Marketing\/gtm\/newsletter-v1.jpg\" class\\x3d\"w-100\" \/\\x3e \\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/newsletter\/\"\\x3e \\x3cdiv class\\x3d\"mask\" style\\x3d\"background-color: rgba(251, 251, 251, 0.2)\"\\x3e\\x3c\/div\\x3e \\x3c\/a\\x3e \\x3cdiv class\\x3d\"bg-light p-4 d-flex justify-content-between text-start\"\\x3e \\x3cdiv\\x3e \\x3ch3 class\\x3d\"fw-bold\" style\\x3d\"color: #8F7FF6\"\\x3e \\x3cstrong\\x3eGet more free resources \\x3c\/strong\\x3e \\x3c\/h3\\x3e \\x3cp\\x3e Unlock access to exclusive content, templates, tips \\x26 tutorials. \\x3cbr\\x3eJoin our mailing list and receive gifts directly to your inbox.\\x3c\/p\\x3e \\x3cp\\x3e \\x3c\/p\\x3e \\x3c\/div\\x3e \\x3ci class\\x3d\"fas fa-chevron-circle-right fa-lg ms-3 mt-5\" style\\x3d\"color: #8F7FF6\"\\x3e\\x3c\/i\\x3e \\x3c\/div\\x3e \\x3c\/div\\x3e';\nnull!=document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\").innerHTML=a)})();\u003C\/script\u003E\n\n\u003Cscript\u003Eif(null!=document.getElementById(\"dpl-gtm-frontpage\")){var element=document.getElementById(\"dpl-gtm-frontpage\"),animate=new mdb.Animate(element,{animation:\"fade-in\",animationStart:\"onLoad\",animationDelay:\"0\",animationDuration:\"1000\"});animate.init()};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1992
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){var a='\\x3cdiv id\\x3d\"free6-mdbpro\" class\\x3d\"bg-image hover-overlay ripple shadow-3 rounded-3\" style\\x3d\"border: 1px solid #845DC9\" data-ripple-color\\x3d\"light\"\\x3e \\x3cimg src\\x3d\"https:\/\/mdbootstrap.com\/wp-content\/themes\/mdbootstrap4\/content\/en\/_mdb5\/standard\/pro\/_main\/assets\/mdb5-pro.jpg\" class\\x3d\"w-100\" \/\\x3e \\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/pro\/\"\\x3e \\x3cdiv class\\x3d\"mask\" style\\x3d\"background-color: rgba(251, 251, 251, 0.2)\"\\x3e\\x3c\/div\\x3e \\x3c\/a\\x3e \\x3cdiv class\\x3d\"bg-light p-4 d-flex text-start justify-content-between\"\\x3e \\x3cdiv\\x3e \\x3ch3 class\\x3d\"text-primary fw-bold\" style\\x3d\"color: #845DC9 !important;\"\\x3eTry MDB Pro\\x3c\/h3\\x3e \\x3cp class\\x3d\"mb-2\"\\x3e \\x3cu class\\x3d\"fw-bold\"\\x3e5000+ premium components\\x3c\/u\\x3e. Multiple useful plugins and gorgeous templates. Bootstrap v5 \\x26amp; v4. Angular, React, Vue, jQuery or plain JS versions. \\x3c\/p\\x3e \\x3cimg src\\x3d\"https:\/\/mdbootstrap.com\/wp-content\/themes\/mdbootstrap4\/content\/en\/_mdb5\/_assets\/img\/icons\/bootstrap.png\" alt\\x3d\"\" height\\x3d\"17px\" class\\x3d\"me-1\" \/\\x3e \\x3cimg src\\x3d\"https:\/\/mdbootstrap.com\/wp-content\/themes\/mdbootstrap4\/content\/en\/_mdb5\/_assets\/img\/icons\/angular.png\" alt\\x3d\"\" height\\x3d\"17px\" class\\x3d\"me-1\" \/\\x3e \\x3cimg src\\x3d\"https:\/\/mdbootstrap.com\/wp-content\/themes\/mdbootstrap4\/content\/en\/_mdb5\/_assets\/img\/icons\/react.png\" alt\\x3d\"\" height\\x3d\"17px\" class\\x3d\"me-1\" \/\\x3e \\x3cimg src\\x3d\"https:\/\/mdbootstrap.com\/wp-content\/themes\/mdbootstrap4\/content\/en\/_mdb5\/_assets\/img\/icons\/vue.png\" alt\\x3d\"\" height\\x3d\"17px\" class\\x3d\"me-1\" \/\\x3e \\x3cimg src\\x3d\"https:\/\/mdbootstrap.com\/wp-content\/themes\/mdbootstrap4\/content\/en\/_mdb5\/_assets\/img\/icons\/jquery.png\" alt\\x3d\"\" height\\x3d\"17px\" class\\x3d\"me-1\" \/\\x3e \\x3cimg src\\x3d\"https:\/\/mdbootstrap.com\/wp-content\/themes\/mdbootstrap4\/content\/en\/_mdb5\/_assets\/img\/icons\/javascript.png\" alt\\x3d\"\" height\\x3d\"17px\" \/\\x3e \\x3c\/div\\x3e \\x3ci class\\x3d\"fas fa-chevron-circle-right fa-lg text-primary ms-3\" style\\x3d\"color: #845DC9 !important;margin-top:60px !important\"\\x3e\\x3c\/i\\x3e \\x3c\/div\\x3e \\x3c\/div\\x3e';\nnull!=document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\").innerHTML=a)})();\u003C\/script\u003E\n\n\u003Cscript\u003Eif(null!=document.getElementById(\"dpl-gtm-frontpage\")){var element=document.getElementById(\"dpl-gtm-frontpage\"),animate=new mdb.Animate(element,{animation:\"fade-in\",animationStart:\"onLoad\",animationDelay:\"0\",animationDuration:\"1000\"});animate.init()};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1993
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(a,b){var c=\"Mon, 18 Jan 2038 03:14:07\";document.cookie=a+\"\\x3d\"+b+\";path\\x3d\/;expires\\x3d\"+c}function getCookie(a){for(var b=document.cookie.split(\";\"),c,d=0;d\u003Cb.length;d++){var e=b[d].trim();0===e.indexOf(a+\"\\x3d\")\u0026\u0026(c=e.substring((a+\"\\x3d\").length,e.length))}return c}(function(){var a=getCookie(\"pageviewCLICount\");\"undefined\"===typeof a?a=1:a++;setCookie(\"pageviewCLICount\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1998
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(a,b){var c=\"Mon, 18 Jan 2038 03:14:07\";document.cookie=a+\"\\x3d\"+b+\";path\\x3d\/;expires\\x3d\"+c}function getCookie(a){for(var b=document.cookie.split(\";\"),c,d=0;d\u003Cb.length;d++){var e=b[d].trim();0===e.indexOf(a+\"\\x3d\")\u0026\u0026(c=e.substring((a+\"\\x3d\").length,e.length))}return c}(function(){var a=getCookie(\"s4LeftDiscount\");a=\"undefined\"===typeof a?47:a-Math.floor(5*Math.random());setCookie(\"s4LeftDiscount\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":2002
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){var a='\\x3cdiv id\\x3d\"free1-video\" class\\x3d\"alert alert-light shadow-3 border\" role\\x3d\"alert\" data-mdb-color\\x3d\"light\"\\x3e \\x3cstrong\\x3eMDB Quick Start\\x3c\/strong\\x3e \\x3cp class\\x3d\"mb-1\"\\x3eStart building projects with MDB right away. Learn how to install, build \\x26 deploy. \\x3c\/p\\x3e\\x3ca href\\x3d\"https:\/\/www.youtube.com\/watch?v\\x3dgWs4y2DZngg\\x26list\\x3dPLl1gkwYU90QkeAAHno3iVJokh2evwMwaX\\x26index\\x3d2\\x26ab_channel\\x3dKeepcoding\" target\\x3d\"_blank\" class\\x3d\"btn btn-sm btn-dark btn-block\"\\x3e \\x3ci class\\x3d\"fab fa-lg fa-youtube me-2 mr-2\"\\x3e\\x3c\/i\\x3eWATCH NOW\\x3c\/a\\x3e \\x3c\/div\\x3e';\nnull!=document.querySelector(\"[id^\\x3dgtmDC-scroll]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-scroll]\").innerHTML=a)})();\u003C\/script\u003E\n\n\n\u003Cscript\u003Evar element=document.getElementById(\"dpl-gtm-scroll\");if(null!=element){var animate=new mdb.Animate(element,{animation:\"fade-in-down\",animationStart:\"onLoad\",animationDelay:\"0\",animationDuration:\"500\"});animate.init()};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":2007
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){var a='\\x3cdiv id\\x3d\"free2-mdbpro\" class\\x3d\"alert alert-light shadow-0 border border-secondary\" role\\x3d\"alert\" data-mdb-color\\x3d\"light\"\\x3e \\x3cstrong class\\x3d\"text-secondary\"\\x3eMDB PRO\\x3c\/strong\\x3e \\x3cp class\\x3d\"mb-1\"\\x3eTemplates, plugins, design blocks, \\x3cstrong\\x3e5000+\\x3c\/strong\\x3e premium components \\x26 more\\x3c\/p\\x3e\\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/pro\/\" class\\x3d\"btn btn-sm btn-secondary btn-block\"\\x3e \\x3ci class\\x3d\"far fa-sm fa-gem me-2 mr-2\"\\x3e\\x3c\/i\\x3eEXPLORE NOW\\x3c\/a\\x3e \\x3c\/div\\x3e';\nnull!=document.querySelector(\"[id^\\x3dgtmDC-scroll]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-scroll]\").innerHTML=a)})();\u003C\/script\u003E\n\n\u003Cscript\u003Eif(null!=document.querySelector(\"[id^\\x3ddpl-gtm-scroll]\")){var element=document.querySelector(\"[id^\\x3ddpl-gtm-scroll]\"),animate=new mdb.Animate(element,{animation:\"fade-in-down\",animationStart:\"onLoad\",animationDelay:\"0\",animationDuration:\"500\"});animate.init()};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":2008
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var a='\\x3cdiv id\\x3d\"free3-mdbgo\" style\\x3d\"border: 1px solid #004d40\" class\\x3d\"alert alert-light shadow-0\" role\\x3d\"alert\" data-mdb-color\\x3d\"light\"\\x3e \\x3cstrong style\\x3d\"color: #004d40\"\\x3eFree Hosting for ",["escape",["macro",90],7]," Projects\\x3c\/strong\\x3e \\x3cp class\\x3d\"mb-1\"\\x3eEasy deployment with a \\x3cstrong\\x3e  single command\\x3c\/strong\\x3e, domains, repos, backend templates \\x26 more\\x3c\/p\\x3e\\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/docs\/standard\/cli\/\" class\\x3d\"btn btn-sm btn-secondary btn-block\" style\\x3d\"background-color: #004d40 !important;\"\\x3e \\x3ci class\\x3d\"fas fa-sm fa-terminal me-2 mr-2\"\\x3e\\x3c\/i\\x3eUSE MDB GO\\x3c\/a\\x3e \\x3c\/div\\x3e';\nnull!=document.querySelector(\"[id^\\x3dgtmDC-scroll]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-scroll]\").innerHTML=a)})();\u003C\/script\u003E\n\n\u003Cscript\u003Eif(null!=document.querySelector(\"[id^\\x3ddpl-gtm-scroll]\")){var element=document.querySelector(\"[id^\\x3ddpl-gtm-scroll]\"),animate=new mdb.Animate(element,{animation:\"fade-in-down\",animationStart:\"onLoad\",animationDelay:\"0\",animationDuration:\"500\"});animate.init()};\u003C\/script\u003E\n\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":2009
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var a='\\x3cdiv id\\x3d\"free4-discount\" class\\x3d\"alert alert-light shadow-3 border border-danger\" role\\x3d\"alert\" data-mdb-color\\x3d\"light\"\\x3e\\x3cstrong class\\x3d\"text-uppercase\"\\x3e\\x3cspan class\\x3d\"text-danger\"\\x3e",["escape",["macro",69],7],"\\x3c\/span\\x3e Offers Left\\x3c\/strong\\x3e \\x3cp class\\x3d\"mb-1 mt-2\"\\x3eGet MDB PRO with \\x3cstrong\\x3e30% discount\\x3c\/strong\\x3e\\x3c\/p\\x3e\\x3ccode\\x3ePZ8G7V24\\x3c\/code\\x3e\\x3cp class\\x3d\"mb-2\"\\x3eCopy \\x26 use this code on the checkout\\x3c\/p\\x3e\\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/pro\/\" class\\x3d\"btn btn-sm btn-danger btn-block\"\\x3eCLAIM NOW\\x3c\/a\\x3e \\x3c\/div\\x3e';\nnull!=document.querySelector(\"[id^\\x3dgtmDC-scroll]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-scroll]\").innerHTML=a)})();\u003C\/script\u003E\n\n\u003Cscript\u003Eif(null!=document.querySelector(\"[id^\\x3ddpl-gtm-scroll]\")){var element=document.querySelector(\"[id^\\x3ddpl-gtm-scroll]\"),animate=new mdb.Animate(element,{animation:\"fade-in-down\",animationStart:\"onLoad\",animationDelay:\"0\",animationDuration:\"500\"});animate.init()};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":2010
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){var a='\\x3cdiv id\\x3d\"free5-newsletter\" class\\x3d\"alert alert-light shadow-0\" role\\x3d\"alert\" data-mdb-color\\x3d\"light\" style\\x3d\"border: 1px solid #8F7FF6\"\\x3e\\x3cstrong style\\x3d\"color: #8F7FF6\"\\x3eFree Resources\\x3c\/strong\\x3e \\x3cp class\\x3d\"mb-1\"\\x3eUnlock access to exclusive templates, tips \\x26 tutorials. Join our private list.\\x3c\/p\\x3e\\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/newsletter\/\" class\\x3d\"btn btn-sm btn-primary btn-block\" style\\x3d\"background-color: #8F7FF6 !important\"\\x3e\\x3ci class\\x3d\"far fa-lg fa-envelope me-2 mr-2\"\\x3e\\x3c\/i\\x3e Join now\\x3c\/a\\x3e \\x3c\/div\\x3e';\nnull!=document.querySelector(\"[id^\\x3dgtmDC-scroll]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-scroll]\").innerHTML=a)})();\u003C\/script\u003E\n\n\u003Cscript\u003Eif(null!=document.querySelector(\"[id^\\x3ddpl-gtm-scroll]\")){var element=document.querySelector(\"[id^\\x3ddpl-gtm-scroll]\"),animate=new mdb.Animate(element,{animation:\"fade-in-down\",animationStart:\"onLoad\",animationDelay:\"0\",animationDuration:\"500\"});animate.init()};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":2011
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){var a='\\x3cdiv id\\x3d\"free6-mdbpro\" class\\x3d\"alert alert-light shadow-0 border border-primary\" role\\x3d\"alert\" data-mdb-color\\x3d\"light\"\\x3e\\x3cstrong class\\x3d\"text-primary\"\\x3eGO PRO\\x3c\/strong\\x3e \\x3cp class\\x3d\"mb-1\"\\x3eSpeed up your work with the help of \\x3cstrong\\x3e5000+\\x3c\/strong\\x3e professionally designed components \\x3c\/p\\x3e\\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/pro\/\" class\\x3d\"btn btn-sm btn-primary btn-block\"\\x3e\\x3ci class\\x3d\"far fa-lg fa-gem me-2 mr-2\"\\x3e\\x3c\/i\\x3e BUY NOW\\x3c\/a\\x3e \\x3c\/div\\x3e';\nnull!=document.querySelector(\"[id^\\x3dgtmDC-scroll]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-scroll]\").innerHTML=a)})();\u003C\/script\u003E\n\n\u003Cscript\u003Eif(null!=document.querySelector(\"[id^\\x3ddpl-gtm-scroll]\")){var element=document.querySelector(\"[id^\\x3ddpl-gtm-scroll]\"),animate=new mdb.Animate(element,{animation:\"fade-in-down\",animationStart:\"onLoad\",animationDelay:\"0\",animationDuration:\"500\"});animate.init()};\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":2012
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Efunction setCookie(a,b){var c=\"Mon, 18 Jan 2038 03:14:07\";document.cookie=a+\"\\x3d\"+b+\";path\\x3d\/;expires\\x3d\"+c}setCookie(\"seenBigMaySale\",!0);\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":2015
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Efunction setCookie(a,b){var c=\"Mon, 18 Jan 2038 03:14:07\";document.cookie=a+\"\\x3d\"+b+\";path\\x3d\/;expires\\x3d\"+c}setCookie(\"seenBigMaySaleAdModal\",!0);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":2020
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Efunction setCookie(a,b){var c=\"Mon, 18 Jan 2038 03:14:07\";document.cookie=a+\"\\x3d\"+b+\";path\\x3d\/;expires\\x3d\"+c}setCookie(\"seenPHLunchAdModal\",!0);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":2045
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){var a='\\x3cdiv id\\x3d\"free1-video\" class\\x3d\"alert alert-light shadow-3 border\" role\\x3d\"alert\" data-mdb-color\\x3d\"light\"\\x3e \\x3cstrong\\x3eMDB Quick Start\\x3c\/strong\\x3e \\x3cp class\\x3d\"mb-1\"\\x3eStart building projects with MDB right away. Learn how to install, build \\x26 deploy. \\x3c\/p\\x3e\\x3ca href\\x3d\"https:\/\/www.youtube.com\/watch?v\\x3dgWs4y2DZngg\\x26list\\x3dPLl1gkwYU90QkeAAHno3iVJokh2evwMwaX\\x26index\\x3d2\\x26ab_channel\\x3dKeepcoding\" target\\x3d\"_blank\" class\\x3d\"btn btn-sm btn-dark btn-block\"\\x3e \\x3ci class\\x3d\"fab fa-lg fa-youtube me-2 mr-2\"\\x3e\\x3c\/i\\x3eWATCH NOW\\x3c\/a\\x3e \\x3c\/div\\x3e';\nnull!=document.querySelector(\"[id^\\x3dgtmDC-scroll]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-scroll]\").innerHTML=a)})();\u003C\/script\u003E\n\n\u003Cscript\u003Eif(null!=document.querySelector(\"[id^\\x3ddpl-gtm-scroll]\")){var element=document.querySelector(\"[id^\\x3ddpl-gtm-scroll]\"),animate=new mdb.Animate(element,{animation:\"fade-in-down\",animationStart:\"onLoad\",animationDelay:\"0\",animationDuration:\"500\"});animate.init()};\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":2067
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){var a='\\x3cdiv id\\x3d\"free1-video\" class\\x3d\"alert alert-light shadow-3 border\" role\\x3d\"alert\" data-mdb-color\\x3d\"light\"\\x3e \\x3cstrong\\x3eMDB Quick Start\\x3c\/strong\\x3e \\x3cp class\\x3d\"mb-1\"\\x3eStart building projects with MDB right away. Learn how to install, build \\x26 deploy. \\x3c\/p\\x3e\\x3ca href\\x3d\"https:\/\/www.youtube.com\/watch?v\\x3dgWs4y2DZngg\\x26list\\x3dPLl1gkwYU90QkeAAHno3iVJokh2evwMwaX\\x26index\\x3d2\\x26ab_channel\\x3dKeepcoding\" target\\x3d\"_blank\" class\\x3d\"btn btn-sm btn-dark btn-block\"\\x3e \\x3ci class\\x3d\"fab fa-lg fa-youtube me-2 mr-2\"\\x3e\\x3c\/i\\x3eWATCH NOW\\x3c\/a\\x3e \\x3c\/div\\x3e';\nnull!=document.querySelector(\"[id^\\x3dgtmDC-scroll]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-scroll]\").innerHTML=a)})();\u003C\/script\u003E\n\n\u003Cscript\u003Eif(null!=document.querySelector(\"[id^\\x3ddpl-gtm-scroll]\")){var element=document.querySelector(\"[id^\\x3ddpl-gtm-scroll]\"),animate=new mdb.Animate(element,{animation:\"fade-in-down\",animationStart:\"onLoad\",animationDelay:\"0\",animationDuration:\"500\"});animate.init()};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":2068
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){var a='\\x3cdiv id\\x3d\"free1-video\" class\\x3d\"alert alert-light shadow-3 border\" role\\x3d\"alert\" data-mdb-color\\x3d\"light\"\\x3e \\x3cstrong\\x3eMDB Quick Start\\x3c\/strong\\x3e \\x3cp class\\x3d\"mb-1\"\\x3eStart building projects with MDB right away. Learn how to install, build \\x26 deploy. \\x3c\/p\\x3e\\x3ca href\\x3d\"https:\/\/www.youtube.com\/watch?v\\x3dgWs4y2DZngg\\x26list\\x3dPLl1gkwYU90QkeAAHno3iVJokh2evwMwaX\\x26index\\x3d2\\x26ab_channel\\x3dKeepcoding\" target\\x3d\"_blank\" class\\x3d\"btn btn-sm btn-dark btn-block\"\\x3e \\x3ci class\\x3d\"fab fa-lg fa-youtube me-2 mr-2\"\\x3e\\x3c\/i\\x3eWATCH NOW\\x3c\/a\\x3e \\x3c\/div\\x3e';\nnull!=document.querySelector(\"[id^\\x3dgtmDC-scroll]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-scroll]\").innerHTML=a)})();\u003C\/script\u003E\n\n\u003Cscript\u003Eif(null!=document.querySelector(\"[id^\\x3ddpl-gtm-scroll]\")){var element=document.querySelector(\"[id^\\x3ddpl-gtm-scroll]\"),animate=new mdb.Animate(element,{animation:\"fade-in-down\",animationStart:\"onLoad\",animationDelay:\"0\",animationDuration:\"500\"});animate.init()};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":2069
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var a='\\x3cdiv id\\x3d\"sub1-mdbgo\" style\\x3d\"border: 1px solid #004d40\" class\\x3d\"alert alert-light shadow-0\" role\\x3d\"alert\" data-mdb-color\\x3d\"light\"\\x3e \\x3cstrong style\\x3d\"color: #004d40\"\\x3eFree Hosting for ",["escape",["macro",90],7]," Projects\\x3c\/strong\\x3e \\x3cp class\\x3d\"mb-1\"\\x3eEasy deployment with a \\x3cstrong\\x3e  single command\\x3c\/strong\\x3e, domains, repos, backend templates \\x26 more\\x3c\/p\\x3e\\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/docs\/standard\/cli\/\" class\\x3d\"btn btn-sm btn-secondary btn-block\" style\\x3d\"background-color: #004d40 !important;\"\\x3e \\x3ci class\\x3d\"fas fa-sm fa-terminal me-2 mr-2\"\\x3e\\x3c\/i\\x3eUSE MDB GO\\x3c\/a\\x3e \\x3c\/div\\x3e';\nnull!=document.querySelector(\"[id^\\x3dgtmDC-scroll]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-scroll]\").innerHTML=a)})();\u003C\/script\u003E\n\n\u003Cscript\u003Eif(null!=document.querySelector(\"[id^\\x3ddpl-gtm-scroll]\")){var element=document.querySelector(\"[id^\\x3ddpl-gtm-scroll]\"),animate=new mdb.Animate(element,{animation:\"fade-in-down\",animationStart:\"onLoad\",animationDelay:\"0\",animationDuration:\"500\"});animate.init()};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":2085
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var a='\\x3cdiv id\\x3d\"sub1-mdbgo\" style\\x3d\"border: 1px solid #004d40\" class\\x3d\"alert alert-light shadow-0\" role\\x3d\"alert\" data-mdb-color\\x3d\"light\"\\x3e \\x3cstrong style\\x3d\"color: #004d40\"\\x3eFree Hosting for ",["escape",["macro",90],7]," Projects\\x3c\/strong\\x3e \\x3cp class\\x3d\"mb-1\"\\x3eEasy deployment with a \\x3cstrong\\x3e  single command\\x3c\/strong\\x3e, domains, repos, backend templates \\x26 more\\x3c\/p\\x3e\\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/docs\/standard\/cli\/\" class\\x3d\"btn btn-sm btn-secondary btn-block\" style\\x3d\"background-color: #004d40 !important;\"\\x3e \\x3ci class\\x3d\"fas fa-sm fa-terminal me-2 mr-2\"\\x3e\\x3c\/i\\x3eUSE MDB GO\\x3c\/a\\x3e \\x3c\/div\\x3e';\nnull!=document.querySelector(\"[id^\\x3dgtmDC-scroll]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-scroll]\").innerHTML=a)})();\u003C\/script\u003E\n\n\u003Cscript\u003Eif(null!=document.querySelector(\"[id^\\x3ddpl-gtm-scroll]\")){var element=document.querySelector(\"[id^\\x3ddpl-gtm-scroll]\"),animate=new mdb.Animate(element,{animation:\"fade-in-down\",animationStart:\"onLoad\",animationDelay:\"0\",animationDuration:\"500\"});animate.init()};\u003C\/script\u003E\n\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":2087
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){var a='\\x3cdiv id\\x3d\"pro1-mdbgo\" class\\x3d\"bg-image hover-overlay ripple shadow-0 rounded-3\" style\\x3d\"border: 1px solid #004d40\" data-ripple-color\\x3d\"light\"\\x3e \\x3cimg src\\x3d\"https:\/\/mdbootstrap.com\/wp-content\/themes\/mdbootstrap4\/content\/en\/_mdb5\/standard\/cli\/about\/assets\/featured.jpg\" class\\x3d\"w-100\" \/\\x3e \\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/docs\/standard\/cli\/\"\\x3e \\x3cdiv class\\x3d\"mask\" style\\x3d\"background-color: rgba(251, 251, 251, 0.2)\"\\x3e\\x3c\/div\\x3e \\x3c\/a\\x3e \\x3cdiv class\\x3d\"bg-light p-4 d-flex text-start justify-content-between\"\\x3e \\x3cdiv\\x3e \\x3ch3 class\\x3d\"fw-bold\" style\\x3d\"color: #004d40\"\\x3e Try \\x3cu\\x3efree\\x3c\/u\\x3e MDB GO hosting \\x3c\/h3\\x3e \\x3cp class\\x3d\"mb-1\"\\x3eCreate, deploy and host anything with a single command\\x3c\/p\\x3e \\x3c\/div\\x3e \\x3ci class\\x3d\"fas fa-chevron-circle-right fa-lg ms-3 mt-4\" style\\x3d\"color: #004d40\"\\x3e\\x3c\/i\\x3e \\x3c\/div\\x3e\\x3c\/div\\x3e';\nnull!=document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\").innerHTML=a)})();\u003C\/script\u003E\n\n\u003Cscript\u003Eif(null!=document.getElementById(\"dpl-gtm-frontpage\")){var element=document.getElementById(\"dpl-gtm-frontpage\"),animate=new mdb.Animate(element,{animation:\"fade-in\",animationStart:\"onLoad\",animationDelay:\"0\",animationDuration:\"1000\"});animate.init()};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":2089
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){var a='\\x3cdiv id\\x3d\"sub1-mdbgo\" class\\x3d\"bg-image hover-overlay ripple shadow-0 rounded-3\" style\\x3d\"border: 1px solid #004d40\" data-ripple-color\\x3d\"light\"\\x3e \\x3cimg src\\x3d\"https:\/\/mdbootstrap.com\/wp-content\/themes\/mdbootstrap4\/content\/en\/_mdb5\/standard\/cli\/about\/assets\/featured.jpg\" class\\x3d\"w-100\" \/\\x3e \\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/docs\/standard\/cli\/\"\\x3e \\x3cdiv class\\x3d\"mask\" style\\x3d\"background-color: rgba(251, 251, 251, 0.2)\"\\x3e\\x3c\/div\\x3e \\x3c\/a\\x3e \\x3cdiv class\\x3d\"bg-light p-4 d-flex text-start justify-content-between\"\\x3e \\x3cdiv\\x3e \\x3ch3 class\\x3d\"fw-bold\" style\\x3d\"color: #004d40\"\\x3e Try \\x3cu\\x3efree\\x3c\/u\\x3e MDB GO hosting \\x3c\/h3\\x3e \\x3cp class\\x3d\"mb-1\"\\x3eCreate, deploy and host anything with a single command\\x3c\/p\\x3e \\x3c\/div\\x3e \\x3ci class\\x3d\"fas fa-chevron-circle-right fa-lg ms-3 mt-4\" style\\x3d\"color: #004d40\"\\x3e\\x3c\/i\\x3e \\x3c\/div\\x3e\\x3c\/div\\x3e';\nnull!=document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\").innerHTML=a)})();\u003C\/script\u003E\n\n\u003Cscript\u003Eif(null!=document.getElementById(\"dpl-gtm-frontpage\")){var element=document.getElementById(\"dpl-gtm-frontpage\"),animate=new mdb.Animate(element,{animation:\"fade-in\",animationStart:\"onLoad\",animationDelay:\"0\",animationDuration:\"1000\"});animate.init()};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":2090
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",91],
      "vtp_eventCategory":["template","First conversions ",["macro",27]],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":"First Download",
      "vtp_eventLabel":["macro",92],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":881
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Efunction setCookie(b,c,d){var a=new Date;a.setTime(a.getTime()+864E5*d);document.cookie=b+\"\\x3d\"+c+\";path\\x3d\/;expires\\x3d\"+a.toGMTString()}var now=(new Date).getTime();setCookie(\"seenExitIntentCheckout\",!0,60);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1702
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":["template","First conversions ",["macro",27]],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":"First Seen",
      "vtp_eventLabel":"0",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":880
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",91],
      "vtp_eventCategory":["template","First conversions ",["macro",93]],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":"First Conversion",
      "vtp_eventLabel":["macro",91],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":882
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Efunction setCookie(b,c,d){var a=new Date;a.setTime(a.getTime()+864E5*d);document.cookie=b+\"\\x3d\"+c+\";path\\x3d\/;expires\\x3d\"+a.toGMTString()}var now=(new Date).getTime();setCookie(\"seenChinaShareModal\",!0,365);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1719
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.video"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_699($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_702($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"0"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":".*"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"CN"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"directDownload"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"gitDownload"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"snippet-button-save"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"\/archive\/main.zip"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1939($|,)))"
    },{
      "function":"_sw",
      "arg0":["macro",23],
      "arg1":"snippet-button"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":".+ click"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"mdbootstrap.com"
    },{
      "function":"_sw",
      "arg0":["macro",24],
      "arg1":"http"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1203($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm4wp.orderCompletedEEC"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"gtm4wp.addProductToCartEEC|gtm4wp.productClickEEC|gtm4wp.removeFromCartEEC|gtm4wp.checkoutOptionEEC|gtm4wp.changeDetailViewEEC|gtm4wp.checkoutStepEEC"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm4wp.addProductToCart"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"thank-you"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"download"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"freebies"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1302($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"angular-mobile-download"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"vue-mobile-download"
    },{
      "function":"_eq",
      "arg0":["macro",48],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",49],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",50],
      "arg1":"true"
    },{
      "function":"_ge",
      "arg0":["macro",51],
      "arg1":"10"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"(jquery|angular|react|vue)"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1361($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1411($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"Navigation"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/snippets\/"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/user\/"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1416($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"[object HTMLButtonElement]"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/standard\/"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1431($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"standard"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1492($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",55],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"\/snippets\/"
    },{
      "function":"_gt",
      "arg0":["macro",56],
      "arg1":"1610623800000"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1513($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/pro\/thank-you\/"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1524($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",40],
      "arg1":"\/docs\/standard\/pro\/thank-you\/"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1525($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":".+\\\/pro\\\/$"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1714($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"angular|react|vue|^\\\/$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",58],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",59],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",21],
      "arg1":"CN"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/getting-started\/installation\/"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/cli\/reference\/"
    },{
      "function":"_eq",
      "arg0":["macro",60],
      "arg1":"undefined"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/cli\/"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1810($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",60],
      "arg1":"1"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1812($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",60],
      "arg1":"2"
    },{
      "function":"_le",
      "arg0":["macro",61],
      "arg1":"0"
    },{
      "function":"_gt",
      "arg0":["macro",61],
      "arg1":"-80"
    },{
      "function":"_eq",
      "arg0":["macro",62],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1816($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",60],
      "arg1":"5"
    },{
      "function":"_le",
      "arg0":["macro",61],
      "arg1":"-80"
    },{
      "function":"_gt",
      "arg0":["macro",63],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",64],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1818($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",60],
      "arg1":"6"
    },{
      "function":"_le",
      "arg0":["macro",63],
      "arg1":"0"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1820($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",60],
      "arg1":"7"
    },{
      "function":"_eq",
      "arg0":["macro",65],
      "arg1":"true"
    },{
      "function":"_gt",
      "arg0":["macro",61],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"\/cli\/reference\/"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1856($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",60],
      "arg1":"4"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1852($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",60],
      "arg1":"3"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"gtmDC-"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1871($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"cli"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"angular"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"vue"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"react"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1994($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"cli"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_2035($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_2037($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1995($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",68],
      "arg1":"undefined|(1|2|3)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1999($|,)))"
    },{
      "function":"_gt",
      "arg0":["macro",68],
      "arg1":"3"
    },{
      "function":"_gt",
      "arg0":["macro",69],
      "arg1":"0"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_2000($|,)))"
    },{
      "function":"_le",
      "arg0":["macro",69],
      "arg1":"0"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_2004($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_2005($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_2038($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_2072($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_2071($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_2070($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_2073($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_2075($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_2077($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_2083($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_2081($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_2079($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"angular"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1879($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"react"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1880($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/vue\/"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1893($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/angular\/"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1890($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/react\/"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1891($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"\\\/standard\\\/|\\\/jquery\\\/"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1892($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"vue"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1881($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1901($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1902($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1903($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1904($|,)))"
    },{
      "function":"_gt",
      "arg0":["macro",71],
      "arg1":"0"
    },{
      "function":"_le",
      "arg0":["macro",71],
      "arg1":"300"
    },{
      "function":"_eq",
      "arg0":["macro",72],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1919($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",60],
      "arg1":"8"
    },{
      "function":"_gt",
      "arg0":["macro",71],
      "arg1":"300"
    },{
      "function":"_eq",
      "arg0":["macro",73],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1926($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",60],
      "arg1":"9"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/sale\/exclusive\/"
    },{
      "function":"_eq",
      "arg0":["macro",74],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",75],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1951($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1952($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",76],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/docs\/"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_2022($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_2029($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_2030($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_2032($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",77],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_2049($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_2048($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_2088($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",78],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",79],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.triggerGroup"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1264($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",80],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",81],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",82],
      "arg1":"true"
    },{
      "function":"_lt",
      "arg0":["macro",51],
      "arg1":"10"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1341($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"\/docs\/standard\/getting-started\/"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"https:\/\/github.com\/mdbootstrap\/mdb-ui-kit"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1369($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1489($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1527($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/checkout\/"
    },{
      "function":"_eq",
      "arg0":["macro",83],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"exit_intent"
    },{
      "function":"_eq",
      "arg0":["macro",84],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1722($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/snippets\/standard\/mdb-lab\/"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/cn\/"
    },{
      "function":"_eq",
      "arg0":["macro",85],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1781($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1786($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/survey-taken\/"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"confirm"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/pro\/"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1802($|,)))"
    },{
      "function":"_lt",
      "arg0":["macro",61],
      "arg1":"-80"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1850($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/free-survey\/"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1916($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/after-purchase-survey\/"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/after-use-survey\/"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/sale\/"
    },{
      "function":"_eq",
      "arg0":["macro",87],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.dom"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/jquery\/"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/plugins\/"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1937($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",21],
      "arg1":"TH"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1942($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",21],
      "arg1":"IN"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1947($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",21],
      "arg1":"ZA"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1948($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",21],
      "arg1":"BR"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1946($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/standard\/cli\/getting-started\/"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"\\\/cli\\\/"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"support"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1975($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1977($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/education\/"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1982($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"may-sale"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_2024($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_2086($|,)))"
    }],
  "rules":[
    [["if",0],["add",9,12,20,27,34,69,191,197,202,224,95,97,98,99,100,101,102,103,104,105,107,108,109,112,114,115,118,121,122,123,125,126,127,128,129,130,131,132,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190]],
    [["if",1,2],["add",10]],
    [["if",3,4],["add",11]],
    [["if",8,9],["add",13,24,25,106,192]],
    [["if",9,10],["add",13,24,25,192]],
    [["if",9,11],["add",13,24,25]],
    [["if",12,13,14],["add",13]],
    [["if",9,15],["add",14]],
    [["if",9,17],["unless",16],["add",15]],
    [["if",13,19,20],["unless",18],["add",16]],
    [["if",21],["add",17,18]],
    [["if",22],["add",19]],
    [["if",23],["add",21]],
    [["if",0,24],["add",22,23]],
    [["if",9,25,26],["add",24,25,192]],
    [["if",27,28],["add",26]],
    [["if",9,29],["add",28]],
    [["if",9,30],["add",28]],
    [["if",3,34,35,36],["unless",31,32,33],["add",29]],
    [["if",3,35,38],["unless",32,37],["add",30]],
    [["if",13,16,42],["unless",39,40,41],["add",31]],
    [["if",9,43],["add",31]],
    [["if",27,44,45],["add",32]],
    [["if",3,34,46,47],["unless",31,32,33],["add",33]],
    [["if",3,49,50,51],["unless",32,48],["add",35]],
    [["if",3,53,54],["unless",52],["add",36]],
    [["if",27,55,56],["add",37]],
    [["if",27,57,58],["add",38]],
    [["if",27,65,67],["unless",59,60,61,62,63,64,66],["add",39]],
    [["if",0,68],["add",39,54,55,60]],
    [["if",27,60,65,69],["unless",61,62,64,66],["add",40,44]],
    [["if",0,70],["add",40,44]],
    [["if",27,65,71,72,74],["unless",62,64,66,73],["add",41,46]],
    [["if",0,75],["add",41,46]],
    [["if",27,76,77,78,79],["unless",62,64,66],["add",42,47]],
    [["if",0,80],["add",42,47]],
    [["if",27,65,81,82],["unless",62,64,66],["add",43,48]],
    [["if",0,83],["add",43,48]],
    [["if",27,65,84,85,87],["unless",62,86],["add",45,50]],
    [["if",0,88],["add",45,50,72,73]],
    [["if",27,61,65,89],["unless",62,84,86],["add",49,51]],
    [["if",0,90],["add",49,51,71,74]],
    [["if",13,91,92],["add",52]],
    [["if",27,97],["unless",60,61,62,93,94,95,96],["add",53,225,233]],
    [["if",27,99],["unless",62,94,95,96,98],["add",53,79,85]],
    [["if",27,100],["unless",62,94,95,96,98],["add",53,84,86]],
    [["if",27,60,101],["unless",61,62,93],["add",53,226,234]],
    [["if",27,61,102,103],["unless",62,93],["add",53,227,235]],
    [["if",27,104,105,106],["unless",62,93],["add",53,228,236]],
    [["if",27,107,108],["unless",62,73,93],["add",53,229,237]],
    [["if",27,73,109],["unless",62,93],["add",53,230,238]],
    [["if",27,110],["unless",98],["add",53,80,81]],
    [["if",27,94,111],["unless",60,61,62,93],["add",53,242]],
    [["if",27,96,112],["unless",60,61,62,98],["add",53,243]],
    [["if",27,95,113],["unless",60,61,62,93],["add",53,244]],
    [["if",27,94,114],["unless",62,98],["add",53,87]],
    [["if",27,96,115],["unless",62,98],["add",53,88]],
    [["if",27,95,116],["unless",62,98],["add",53,89]],
    [["if",27,94,117],["unless",62,98],["add",53,92]],
    [["if",27,96,118],["unless",62,98],["add",53,91]],
    [["if",27,95,119],["unless",62,98],["add",53,90]],
    [["if",27,65,120,121],["unless",60,61,62,63],["add",54]],
    [["if",27,65,122,123],["unless",60,61,62,63],["add",55]],
    [["if",27,124,125],["add",56]],
    [["if",27,126,127],["add",57]],
    [["if",27,128,129],["add",58]],
    [["if",27,130,131],["unless",64],["add",59]],
    [["if",27,65,132,133],["unless",60,61,62,63],["add",60]],
    [["if",27,126,134],["add",61]],
    [["if",27,128,135],["add",62]],
    [["if",27,130,136],["unless",64,66],["add",63]],
    [["if",27,124,137],["add",64]],
    [["if",27,65,138,139,141],["unless",66,140],["add",65,67]],
    [["if",0,142],["add",65,67]],
    [["if",27,65,143,145],["unless",66,144],["add",66,68]],
    [["if",0,146],["add",66,68]],
    [["if",0,147,148],["add",70]],
    [["if",27,61,65,150],["unless",62,66,149],["add",71,74]],
    [["if",27,65,149,151],["unless",62,66],["add",72,73]],
    [["if",27,153,154],["unless",152],["add",75]],
    [["if",27,153,155],["unless",152],["add",76]],
    [["if",27,153,156],["unless",152],["add",77]],
    [["if",27,153,157],["unless",152],["add",78]],
    [["if",27,153,159],["unless",158],["add",82]],
    [["if",27,153,160],["unless",158],["add",83]],
    [["if",27,161],["unless",62,93],["add",93,94,246,247]],
    [["if",162],["add",96,110,111,113,116,117,119,120,124,133]],
    [["if",0,164],["add",193]],
    [["if",165,166,167],["add",194,196]],
    [["if",0,24,168],["unless",165],["add",195]],
    [["if",0,169],["add",198]],
    [["if",0],["unless",170],["add",199]],
    [["if",3,35,172,173],["unless",32,33,171],["add",200]],
    [["if",0,174],["add",201]],
    [["if",13,175,176],["add",203]],
    [["if",3,46,172,177],["unless",32,33,171],["add",204]],
    [["if",27,178],["add",1]],
    [["if",179,181],["unless",180],["add",205]],
    [["if",3,62,183],["unless",182],["add",206]],
    [["if",0,184],["add",207]],
    [["if",27,185,187],["unless",186],["add",208]],
    [["if",27,62,188],["unless",186],["add",208]],
    [["if",0,189],["add",209]],
    [["if",0,63],["add",210]],
    [["if",0,190],["add",211]],
    [["if",0,84],["add",212]],
    [["if",27,191,192],["add",213]],
    [["if",0,193],["add",214]],
    [["if",27,62,194],["unless",186],["add",215]],
    [["if",0,195],["add",216,217]],
    [["if",27,196],["add",218]],
    [["if",0,197],["add",219]],
    [["if",0,198],["add",220]],
    [["if",0,199,200],["add",0]],
    [["if",199,201],["add",221]],
    [["if",27,202,204],["unless",203],["add",222]],
    [["if",27,205,206],["add",2]],
    [["if",27,207,208],["add",3]],
    [["if",27,209,210],["add",4]],
    [["if",27,211,212],["add",5]],
    [["if",0,213],["add",223]],
    [["if",27,214,216],["unless",215],["add",6]],
    [["if",27,66,217],["add",7]],
    [["if",27,218,219],["add",8]],
    [["if",0,98],["add",231]],
    [["if",0,104],["add",232]],
    [["if",0,220],["add",239]],
    [["if",27,153,221],["add",240,241]],
    [["if",27,222],["unless",62,93],["add",245,248]],
    [["if",5,6],["block",12]],
    [["if",0,7],["block",12,191,192]],
    [["if",6,163],["block",191,192]]]
},
"runtime":[[50,"__mf",[46,"a"],[41,"h"],[52,"b",["require","createQueue"]],[52,"c",["require","injectScript"]],[52,"d",["require","makeNumber"]],[52,"e",["require","setInWindow"]],[22,[17,[15,"a"],"path"],[46,["e","mouseflowPath",[17,[15,"a"],"path"]]]],[52,"f",["d",[17,[15,"a"],"htmlDelay"]]],[22,[18,[15,"f"],0],[46,["e","mouseflowHtmlDelay",[15,"f"]]]],[52,"g",[17,[15,"a"],"customVars"]],[22,[15,"g"],[46,[53,[52,"i",["b","_mfq"]],[47,"h",[15,"g"],[46,["i",[7,"setVariable",[15,"h"],[16,[15,"g"],[15,"h"]]]]]]]]],["c",[0,[0,"https://cdn.mouseflow.com/projects/",[17,[15,"a"],"projectId"]],".js"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],[0,"mouse",[17,[15,"a"],"projectId"]]]],[50,"__bzi",[46,"a"],[52,"b",["require","injectScript"]],[52,"c",["require","setInWindow"]],["c","_linkedin_data_partner_id",[17,[15,"a"],"id"]],["b","https://snap.licdn.com/li.lms-analytics/insight.min.js",[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"]]]]
,"permissions":{"__mf":{"access_globals":{"keys":[{"key":"mouseflowPath","read":true,"write":true,"execute":false},{"key":"mouseflowHtmlDelay","read":true,"write":true,"execute":false},{"key":"_mfq","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/cdn.mouseflow.com\/projects\/*"]}},"__bzi":{"access_globals":{"keys":[{"key":"_linkedin_data_partner_id","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js"]}}}

,"security_groups":{
"nonGoogleScripts":["__mf","__bzi"]}

};
(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var C=this||self,D=function(n,v){var w=n.split("."),q=C;w[0]in q||"undefined"==typeof q.execScript||q.execScript("var "+w[0]);for(var t;w.length&&(t=w.shift());)w.length||void 0===v?q=q[t]&&q[t]!==Object.prototype[t]?q[t]:q[t]={}:q[t]=v};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var E,F=function(){};
(function(){function n(h,m){h=h||"";m=m||{};for(var y in v)v.hasOwnProperty(y)&&(m.N&&(m["fix_"+y]=!0),m.G=m.G||m["fix_"+y]);var z={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},e={comment:function(){var a=h.indexOf("--\x3e");if(0<=a)return{content:h.substr(4,a),length:a+3}},endTag:function(){var a=h.match(q);if(a)return{tagName:a[1],length:a[0].length}},atomicTag:function(){var a=e.startTag();if(a){var b=h.slice(a.length);
if(b.match(new RegExp("</\\s*"+a.tagName+"\\s*>","i"))){var c=b.match(new RegExp("([\\s\\S]*?)</\\s*"+a.tagName+"\\s*>","i"));if(c)return{tagName:a.tagName,g:a.g,content:c[1],length:c[0].length+a.length}}}},startTag:function(){var a=h.match(w);if(a){var b={};a[2].replace(t,function(c,d,k,g,r){var u=k||g||r||B.test(d)&&d||null,l=document.createElement("div");l.innerHTML=u;b[d]=l.textContent||l.innerText||u});return{tagName:a[1],g:b,s:!!a[3],length:a[0].length}}},chars:function(){var a=h.indexOf("<");
return{length:0<=a?a:h.length}}},f=function(){for(var a in z)if(z[a].test(h)){var b=e[a]();return b?(b.type=b.type||a,b.text=h.substr(0,b.length),h=h.slice(b.length),b):null}};m.G&&function(){var a=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,b=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,c=[];c.H=function(){return this[this.length-1]};c.v=function(l){var p=this.H();return p&&p.tagName&&p.tagName.toUpperCase()===l.toUpperCase()};c.V=function(l){for(var p=
0,x;x=this[p];p++)if(x.tagName===l)return!0;return!1};var d=function(l){l&&"startTag"===l.type&&(l.s=a.test(l.tagName)||l.s);return l},k=f,g=function(){h="</"+c.pop().tagName+">"+h},r={startTag:function(l){var p=l.tagName;"TR"===p.toUpperCase()&&c.v("TABLE")?(h="<TBODY>"+h,u()):m.oa&&b.test(p)&&c.V(p)?c.v(p)?g():(h="</"+l.tagName+">"+h,u()):l.s||c.push(l)},endTag:function(l){c.H()?m.W&&!c.v(l.tagName)?g():c.pop():m.W&&(k(),u())}},u=function(){var l=h,p=d(k());h=l;if(p&&r[p.type])r[p.type](p)};f=function(){u();
return d(k())}}();return{append:function(a){h+=a},ea:f,sa:function(a){for(var b;(b=f())&&(!a[b.type]||!1!==a[b.type](b)););},clear:function(){var a=h;h="";return a},ta:function(){return h},stack:[]}}var v=function(){var h={},m=this.document.createElement("div");m.innerHTML="<P><I></P></I>";h.va="<P><I></P></I>"!==m.innerHTML;m.innerHTML="<P><i><P></P></i></P>";h.ua=2===m.childNodes.length;return h}(),w=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
q=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,t=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,B=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;n.supports=v;for(var A in v);E=n})();
(function(){function n(){}function v(e){return void 0!==e&&null!==e}function w(e,f,a){var b,c=e&&e.length||0;for(b=0;b<c;b++)f.call(a,e[b],b)}function q(e,f,a){for(var b in e)e.hasOwnProperty(b)&&f.call(a,b,e[b])}function t(e,f){q(f,function(a,b){e[a]=b});return e}function B(e,f){e=e||{};q(f,function(a,b){v(e[a])||(e[a]=b)});return e}function A(e){try{return y.call(e)}catch(a){var f=[];w(e,function(b){f.push(b)});return f}}var h={J:n,K:n,L:n,M:n,O:n,P:function(e){return e},done:n,error:function(e){throw e;
},fa:!1},m=this;if(!m.postscribe){var y=Array.prototype.slice,z=function(){function e(a,b,c){var d="data-ps-"+b;if(2===arguments.length){var k=a.getAttribute(d);return v(k)?String(k):k}v(c)&&""!==c?a.setAttribute(d,c):a.removeAttribute(d)}function f(a,b){var c=a.ownerDocument;t(this,{root:a,options:b,l:c.defaultView||c.parentWindow,i:c,o:E("",{N:!0}),u:[a],B:"",C:c.createElement(a.nodeName),j:[],h:[]});e(this.C,"proxyof",0)}f.prototype.write=function(){[].push.apply(this.h,arguments);for(var a;!this.m&&
this.h.length;)a=this.h.shift(),"function"===typeof a?this.U(a):this.D(a)};f.prototype.U=function(a){var b={type:"function",value:a.name||a.toString()};this.A(b);a.call(this.l,this.i);this.I(b)};f.prototype.D=function(a){this.o.append(a);for(var b,c=[],d,k;(b=this.o.ea())&&!(d=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("script"):!1)&&!(k=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("style"):!1);)c.push(b);this.ka(c);d&&this.X(b);k&&this.Y(b)};f.prototype.ka=function(a){var b=this.R(a);
b.F&&(b.Z=this.B+b.F,this.B+=b.da,this.C.innerHTML=b.Z,this.ia())};f.prototype.R=function(a){var b=this.u.length,c=[],d=[],k=[];w(a,function(g){c.push(g.text);if(g.g){if(!/^noscript$/i.test(g.tagName)){var r=b++;d.push(g.text.replace(/(\/?>)/," data-ps-id="+r+" $1"));"ps-script"!==g.g.id&&"ps-style"!==g.g.id&&k.push("atomicTag"===g.type?"":"<"+g.tagName+" data-ps-proxyof="+r+(g.s?" />":">"))}}else d.push(g.text),k.push("endTag"===g.type?g.text:"")});return{wa:a,raw:c.join(""),F:d.join(""),da:k.join("")}};
f.prototype.ia=function(){for(var a,b=[this.C];v(a=b.shift());){var c=1===a.nodeType;if(!c||!e(a,"proxyof")){c&&(this.u[e(a,"id")]=a,e(a,"id",null));var d=a.parentNode&&e(a.parentNode,"proxyof");d&&this.u[d].appendChild(a)}b.unshift.apply(b,A(a.childNodes))}};f.prototype.X=function(a){var b=this.o.clear();b&&this.h.unshift(b);a.src=a.g.src||a.g.ma;a.src&&this.j.length?this.m=a:this.A(a);var c=this;this.ja(a,function(){c.I(a)})};f.prototype.Y=function(a){var b=this.o.clear();b&&this.h.unshift(b);a.type=
a.g.type||a.g.TYPE||"text/css";this.la(a);b&&this.write()};f.prototype.la=function(a){var b=this.T(a);this.aa(b);a.content&&(b.styleSheet&&!b.sheet?b.styleSheet.cssText=a.content:b.appendChild(this.i.createTextNode(a.content)))};f.prototype.T=function(a){var b=this.i.createElement(a.tagName);b.setAttribute("type",a.type);q(a.g,function(c,d){b.setAttribute(c,d)});return b};f.prototype.aa=function(a){this.D('<span id="ps-style"/>');var b=this.i.getElementById("ps-style");b.parentNode.replaceChild(a,
b)};f.prototype.A=function(a){a.ba=this.h;this.h=[];this.j.unshift(a)};f.prototype.I=function(a){a!==this.j[0]?this.options.error({message:"Bad script nesting or script finished twice"}):(this.j.shift(),this.write.apply(this,a.ba),!this.j.length&&this.m&&(this.A(this.m),this.m=null))};f.prototype.ja=function(a,b){var c=this.S(a),d=this.ha(c),k=this.options.J;a.src&&(c.src=a.src,this.ga(c,d?k:function(){b();k()}));try{this.$(c),a.src&&!d||b()}catch(g){this.options.error(g),b()}};f.prototype.S=function(a){var b=
this.i.createElement(a.tagName);q(a.g,function(c,d){b.setAttribute(c,d)});a.content&&(b.text=a.content);return b};f.prototype.$=function(a){this.D('<span id="ps-script"/>');var b=this.i.getElementById("ps-script");b.parentNode.replaceChild(a,b)};f.prototype.ga=function(a,b){function c(){a=a.onload=a.onreadystatechange=a.onerror=null}var d=this.options.error;t(a,{onload:function(){c();b()},onreadystatechange:function(){/^(loaded|complete)$/.test(a.readyState)&&(c(),b())},onerror:function(){var k={message:"remote script failed "+
a.src};c();d(k);b()}})};f.prototype.ha=function(a){return!/^script$/i.test(a.nodeName)||!!(this.options.fa&&a.src&&a.hasAttribute("async"))};return f}();m.postscribe=function(){function e(){var d=b.shift(),k;d&&(k=d[d.length-1],k.K(),d.stream=f.apply(null,d),k.L())}function f(d,k,g){function r(x){x=g.P(x);c.write(x);g.M(x)}c=new z(d,g);c.id=a++;c.name=g.name||c.id;var u=d.ownerDocument,l={close:u.close,open:u.open,write:u.write,writeln:u.writeln};t(u,{close:n,open:n,write:function(){return r(A(arguments).join(""))},
writeln:function(){return r(A(arguments).join("")+"\n")}});var p=c.l.onerror||n;c.l.onerror=function(x,G,H){g.error({qa:x+" - "+G+":"+H});p.apply(c.l,arguments)};c.write(k,function(){t(u,l);c.l.onerror=p;g.done();c=null;e()});return c}var a=0,b=[],c=null;return t(function(d,k,g){"function"===typeof g&&(g={done:g});g=B(g,h);d=/^#/.test(d)?m.document.getElementById(d.substr(1)):d.pa?d[0]:d;var r=[d,k,g];d.ca={cancel:function(){r.stream?r.stream.abort():r[1]=n}};g.O(r);b.push(r);c||e();return d.ca},
{streams:{},ra:b,na:z})}();F=m.postscribe}})();D("google_tag_manager_external.postscribe.installPostscribe",function(){var n=window.google_tag_manager;n&&(n.postscribe||(n.postscribe=window.postscribe||F))});D("google_tag_manager_external.postscribe.getPostscribe",function(){return window.google_tag_manager.postscribe});}).call(this);
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var k,aa=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},ba=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}},ea="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;
if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ia={a:!0},ka={};try{ka.__proto__=ia;ha=ka.a;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var la=fa,ma=function(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(la)la(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Ui=b.prototype},na=this||self,oa=function(a){return a};var ra=function(a,b){this.g=a;this.o=b};var sa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ta=function(){this.s={};this.D=!1;this.N={}},ua=function(a,b){var c=[],d;for(d in a.s)if(a.s.hasOwnProperty(d))switch(d=d.substr(5),b){case 1:c.push(d);break;case 2:c.push(a.get(d));break;case 3:c.push([d,a.get(d)])}return c};ta.prototype.get=function(a){return this.s["dust."+a]};ta.prototype.set=function(a,b){this.D||(a="dust."+a,this.N.hasOwnProperty(a)||(this.s[a]=b))};
ta.prototype.has=function(a){return this.s.hasOwnProperty("dust."+a)};var va=function(a,b){b="dust."+b;a.D||a.N.hasOwnProperty(b)||delete a.s[b]};ta.prototype.$a=function(){this.D=!0};var n=function(a){this.o=new ta;this.g=[];this.s=!1;a=a||[];for(var b in a)a.hasOwnProperty(b)&&(sa(b)?this.g[Number(b)]=a[Number(b)]:this.o.set(b,a[b]))};k=n.prototype;k.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.g.length;c++){var d=this.g[c];null===d||void 0===d?b.push(""):d instanceof n?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
k.set=function(a,b){if(!this.s)if("length"===a){if(!sa(b))throw Error("RangeError: Length property must be a valid integer.");this.g.length=Number(b)}else sa(a)?this.g[Number(a)]=b:this.o.set(a,b)};k.get=function(a){return"length"===a?this.length():sa(a)?this.g[Number(a)]:this.o.get(a)};k.length=function(){return this.g.length};k.Za=function(){for(var a=ua(this.o,1),b=0;b<this.g.length;b++)a.push(b+"");return new n(a)};var wa=function(a,b){sa(b)?delete a.g[Number(b)]:va(a.o,b)};k=n.prototype;
k.pop=function(){return this.g.pop()};k.push=function(a){return this.g.push.apply(this.g,Array.prototype.slice.call(arguments))};k.shift=function(){return this.g.shift()};k.splice=function(a,b,c){return new n(this.g.splice.apply(this.g,arguments))};k.unshift=function(a){return this.g.unshift.apply(this.g,Array.prototype.slice.call(arguments))};k.has=function(a){return sa(a)&&this.g.hasOwnProperty(a)||this.o.has(a)};k.$a=function(){this.s=!0;Object.freeze(this.g);this.o.$a()};var za=function(){function a(f,g){if(b[f]){if(b[f].Tc+g>b[f].max)throw Error("Quota exceeded");b[f].Tc+=g}}var b={},c=void 0,d=void 0,e={ci:function(f){c=f},Qf:function(){c&&a(c,1)},ei:function(f){d=f},ab:function(f){d&&a(d,f)},vi:function(f,g){b[f]=b[f]||{Tc:0};b[f].max=g},Jh:function(f){return b[f]&&b[f].Tc||0},reset:function(){b={}},xh:a};e.onFnConsume=e.ci;e.consumeFn=e.Qf;e.onStorageConsume=e.ei;e.consumeStorage=e.ab;e.setMax=e.vi;e.getConsumed=e.Jh;e.reset=e.reset;e.consume=e.xh;return e};var Aa=function(a,b){this.s=a;this.O=function(c,d,e){return c.apply(d,e)};this.D=b;this.o=new ta;this.g=this.N=void 0};Aa.prototype.add=function(a,b){Ca(this,a,b,!1)};var Ca=function(a,b,c,d){if(!a.o.D)if(a.s.ab(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.o;e.set(b,c);e.N["dust."+b]=!0}else a.o.set(b,c)};
Aa.prototype.set=function(a,b){this.o.D||(!this.o.has(a)&&this.D&&this.D.has(a)?this.D.set(a,b):(this.s.ab(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.o.set(a,b)))};Aa.prototype.get=function(a){return this.o.has(a)?this.o.get(a):this.D?this.D.get(a):void 0};Aa.prototype.has=function(a){return!!this.o.has(a)||!(!this.D||!this.D.has(a))};var Da=function(a){var b=new Aa(a.s,a);a.N&&(b.N=a.N);b.O=a.O;b.g=a.g;return b};var Ea={},Fa=function(a,b){Ea[a]=Ea[a]||[];Ea[a][b]=!0},Ga=function(a){for(var b=[],c=Ea[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var Ha=function(){},Ja=function(a){return"function"==typeof a},A=function(a){return"string"==typeof a},Ka=function(a){return"number"==typeof a&&!isNaN(a)},La=function(a){var b="[object Array]"==Object.prototype.toString.call(Object(a));Array.isArray?Array.isArray(a)!==b&&Fa("TAGGING",4):Fa("TAGGING",5);return b},Ma=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Na=function(a,b){if(a&&La(a))for(var c=
0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Oa=function(a,b){if(!Ka(a)||!Ka(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Qa=function(a,b){for(var c=new Pa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Ra=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Sa=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Va=
function(a){return Math.round(Number(a))||0},Wa=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Xa=function(a){var b=[];if(La(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},$a=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},ab=function(){return(new Date).getTime()},Pa=function(){this.prefix="gtm.";this.values={}};Pa.prototype.set=function(a,b){this.values[this.prefix+a]=b};Pa.prototype.get=function(a){return this.values[this.prefix+a]};
var bb=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},cb=function(a){var b=a;return function(){if(b){var c=b;b=void 0;try{c()}catch(d){}}}},eb=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},fb=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},gb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},hb=function(a,b){var c=E;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=
Ma(b,d))return}return d},ib=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},jb=/^\w{1,9}$/,lb=function(a){var b=[];Ra(a,function(c,d){jb.test(c)&&d&&b.push(c)});return b.join(",")};var mb=function(a,b){ta.call(this);this.O=a;this.Na=b};ma(mb,ta);mb.prototype.toString=function(){return this.O};mb.prototype.Za=function(){return new n(ua(this,1))};mb.prototype.g=function(a,b){a.s.Qf();return this.Na.apply(new nb(this,a),Array.prototype.slice.call(arguments,1))};mb.prototype.o=function(a,b){try{return this.g.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};
var pb=function(a,b){for(var c,d=0;d<b.length&&!(c=ob(a,b[d]),c instanceof ra);d++);return c},ob=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof mb))throw Error("Attempting to execute non-function "+b[0]+".");return c.g.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.N;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}},nb=function(a,b){this.o=a;this.g=b},G=function(a,b){var c=a.g;return La(b)?ob(c,b):b},I=function(a){return a.o.O};var qb=function(){ta.call(this)};ma(qb,ta);qb.prototype.Za=function(){return new n(ua(this,1))};var rb={control:function(a,b){return new ra(a,G(this,b))},fn:function(a,b,c){var d=this.g,e=G(this,b);if(!(e instanceof n))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.g.s.ab(a.length+f.length);return new mb(a,function(){return function(g){var h=Da(d);void 0===h.g&&(h.g=this.g.g);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=G(this,l[m]),l[m]instanceof ra)return l[m];for(var p=e.get("length"),r=
0;r<p;r++)r<l.length?h.add(e.get(r),l[r]):h.add(e.get(r),void 0);h.add("arguments",new n(l));var q=pb(h,f);if(q instanceof ra)return"return"===q.g?q.o:q}}())},list:function(a){var b=this.g.s;b.ab(arguments.length);for(var c=new n,d=0;d<arguments.length;d++){var e=G(this,arguments[d]);"string"===typeof e&&b.ab(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.g.s,c=new qb,d=0;d<arguments.length-1;d+=2){var e=G(this,arguments[d])+"",f=G(this,arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.ab(g);c.set(e,f)}return c},undefined:function(){}};var sb=function(){this.s=za();this.g=new Aa(this.s)},tb=function(a,b,c){var d=new mb(b,c);d.$a();a.g.set(b,d)};sb.prototype.Xc=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.o(c)};sb.prototype.o=function(a){for(var b,c=0;c<arguments.length;c++)b=ob(this.g,arguments[c]);return b};sb.prototype.D=function(a,b){var c=Da(this.g);c.g=a;for(var d,e=1;e<arguments.length;e++)d=d=ob(c,arguments[e]);return d};var ub=function(a){if(a instanceof ub)return a;this.Ga=a};ub.prototype.toString=function(){return String(this.Ga)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var xb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,yb=function(a){if(null==a)return String(a);var b=xb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},zb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ab=function(a){if(!a||"object"!=yb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!zb(a,"constructor")&&!zb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||zb(a,b)},J=function(a,b){var c=b||("array"==yb(a)?[]:{}),d;for(d in a)if(zb(a,d)){var e=a[d];"array"==yb(e)?("array"!=yb(c[d])&&(c[d]=[]),c[d]=J(e,c[d])):Ab(e)?(Ab(c[d])||(c[d]={}),c[d]=J(e,c[d])):c[d]=e}return c};var Cb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m=ua(h,1),p=0;p<m.length;p++)l[m[p]]=g(h.get(m[p]))},g=function(h){var l=Ma(d,h);if(-1<l)return e[l];if(h instanceof n){var m=[];d.push(h);e.push(m);for(var p=h.Za(),r=0;r<p.length();r++)m[p.get(r)]=g(h.get(p.get(r)));return m}if(h instanceof qb){var q={};d.push(h);e.push(q);f(h,q);return q}if(h instanceof mb){var t=function(){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=Bb(u[v],b,!!c);var x=b?b.s:za(),z=new Aa(x);
b&&(z.g=b.g);return g(h.g.apply(h,[z].concat(u)))};d.push(h);e.push(t);f(h,t);return t}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return g(a)},Bb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m in h)h.hasOwnProperty(m)&&l.set(m,g(h[m]))},g=function(h){var l=Ma(d,
h);if(-1<l)return e[l];if(La(h)||Sa(h)){var m=new n([]);d.push(h);e.push(m);for(var p in h)h.hasOwnProperty(p)&&m.set(p,g(h[p]));return m}if(Ab(h)){var r=new qb;d.push(h);e.push(r);f(h,r);return r}if("function"===typeof h){var q=new mb("",function(u){for(var v=Array.prototype.slice.call(arguments,0),x=0;x<v.length;x++)v[x]=Cb(G(this,v[x]),b,!!c);return g((0,this.g.O)(h,h,v))});d.push(h);e.push(q);f(h,q);return q}var t=typeof h;if(null===h||"string"===t||"number"===t||"boolean"===t)return h;};return g(a)};var Db=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Eb=function(a){if(void 0===a||La(a)||Ab(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Fb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof n)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new n(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.g(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.g(a,this.get(e),e,this)&&d.push(this.get(e));return new n(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.g(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.g(a,this.get(e),e,this));return new n(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Db(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):wa(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new n(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.g(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Db(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.g(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):wa(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var Gb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Hb=new ra("break"),Ib=new ra("continue"),Jb=function(a,b){return G(this,a)+G(this,b)},Kb=function(a,b){return G(this,a)&&G(this,b)},Lb=function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);if(!(c instanceof n))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"===typeof a||"number"===typeof a){if("toString"===b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(0<=Ma(Gb,b)){var d=Cb(c);return Bb(a[b].apply(a,d),this.g)}throw Error("TypeError: "+b+" is not a function");}if(a instanceof n){if(a.has(b)){var e=a.get(b);if(e instanceof mb){var f=Db(c);f.unshift(this.g);return e.g.apply(e,f)}throw Error("TypeError: "+b+" is not a function");}if(0<=Ma(Fb.supportedMethods,b)){var g=
Db(c);g.unshift(this.g);return Fb[b].apply(a,g)}}if(a instanceof mb||a instanceof qb){if(a.has(b)){var h=a.get(b);if(h instanceof mb){var l=Db(c);l.unshift(this.g);return h.g.apply(h,l)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof mb?a.O:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,Db(c))}if(a instanceof ub&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},Ob=function(a,b){a=G(this,a);if("string"!==
typeof a)throw Error("Invalid key name given for assignment.");var c=this.g;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=G(this,b);c.set(a,d);return d},Pb=function(a){var b=Da(this.g),c=pb(b,Array.prototype.slice.apply(arguments));if(c instanceof ra)return c},Qb=function(){return Hb},Rb=function(a){for(var b=G(this,a),c=0;c<b.length;c++){var d=G(this,b[c]);if(d instanceof ra)return d}},Sb=function(a){for(var b=this.g,c=0;c<arguments.length-1;c+=2){var d=arguments[c];
if("string"===typeof d){var e=G(this,arguments[c+1]);Ca(b,d,e,!0)}}},Tb=function(){return Ib},Ub=function(a,b,c){var d=new n;b=G(this,b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.g.add(a,G(this,f))},Vb=function(a,b){return G(this,a)/G(this,b)},Wb=function(a,b){a=G(this,a);b=G(this,b);var c=a instanceof ub,d=b instanceof ub;return c||d?c&&d?a.Ga==b.Ga:!1:a==b},Xb=function(a){for(var b,c=0;c<arguments.length;c++)b=
G(this,arguments[c]);return b};function Yb(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=pb(f,d);if(g instanceof ra){if("break"===g.g)break;if("return"===g.g)return g}}}function Zb(a,b,c){if("string"===typeof b)return Yb(a,function(){return b.length},function(f){return f},c);if(b instanceof qb||b instanceof n||b instanceof mb){var d=b.Za(),e=d.length();return Yb(a,function(){return e},function(f){return d.get(f)},c)}}
var $b=function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);var d=this.g;return Zb(function(e){d.set(a,e);return d},b,c)},ac=function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);var d=this.g;return Zb(function(e){var f=Da(d);Ca(f,a,e,!0);return f},b,c)},bc=function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);var d=this.g;return Zb(function(e){var f=Da(d);f.add(a,e);return f},b,c)},ic=function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);var d=this.g;return hc(function(e){d.set(a,e);return d},b,c)},jc=
function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);var d=this.g;return hc(function(e){var f=Da(d);Ca(f,a,e,!0);return f},b,c)},kc=function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);var d=this.g;return hc(function(e){var f=Da(d);f.add(a,e);return f},b,c)};
function hc(a,b,c){if("string"===typeof b)return Yb(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof n)return Yb(a,function(){return b.length()},function(d){return b.get(d)},c);throw new TypeError("The value is not iterable.");}
var lc=function(a,b,c,d){function e(p,r){for(var q=0;q<f.length();q++){var t=f.get(q);r.add(t,p.get(t))}}var f=G(this,a);if(!(f instanceof n))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.g;d=G(this,d);var h=Da(g);for(e(g,h);ob(h,b);){var l=pb(h,d);if(l instanceof ra){if("break"===l.g)break;if("return"===l.g)return l}var m=Da(g);e(h,m);ob(m,c);h=m}},mc=function(a){a=G(this,a);var b=this.g,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},nc=function(a,b){var c;a=G(this,a);b=G(this,b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof qb||a instanceof n||a instanceof mb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:sa(b)&&(c=a[b]);else if(a instanceof ub)return;return c},oc=function(a,b){return G(this,a)>G(this,
b)},pc=function(a,b){return G(this,a)>=G(this,b)},qc=function(a,b){a=G(this,a);b=G(this,b);a instanceof ub&&(a=a.Ga);b instanceof ub&&(b=b.Ga);return a===b},rc=function(a,b){return!qc.call(this,a,b)},sc=function(a,b,c){var d=[];G(this,a)?d=G(this,b):c&&(d=G(this,c));var e=pb(this.g,d);if(e instanceof ra)return e},tc=function(a,b){return G(this,a)<G(this,b)},uc=function(a,b){return G(this,a)<=G(this,b)},vc=function(a,b){return G(this,a)%G(this,b)},yc=function(a,b){return G(this,a)*G(this,b)},zc=function(a){return-G(this,
a)},Ac=function(a){return!G(this,a)},Bc=function(a,b){return!Wb.call(this,a,b)},Cc=function(){return null},Dc=function(a,b){return G(this,a)||G(this,b)},Ec=function(a,b){var c=G(this,a);G(this,b);return c},Fc=function(a){return G(this,a)},Gc=function(a){return Array.prototype.slice.apply(arguments)},Hc=function(a){return new ra("return",G(this,a))},Ic=function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof
mb||a instanceof n||a instanceof qb)&&a.set(b,c);return c},Jc=function(a,b){return G(this,a)-G(this,b)},Rc=function(a,b,c){a=G(this,a);var d=G(this,b),e=G(this,c);if(!La(d)||!La(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===G(this,d[h]))if(f=G(this,e[h]),f instanceof ra){var l=f.g;if("break"===l)return;if("return"===l||"continue"===l)return f}else g=!0;if(e.length===d.length+1&&(f=G(this,e[e.length-1]),f instanceof ra&&("return"===f.g||"continue"===
f.g)))return f},Sc=function(a,b,c){return G(this,a)?G(this,b):G(this,c)},Tc=function(a){a=G(this,a);return a instanceof mb?"function":typeof a},Uc=function(a){for(var b=this.g,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},Vc=function(a,b,c,d){var e=G(this,d);if(G(this,c)){var f=pb(this.g,e);if(f instanceof ra){if("break"===f.g)return;if("return"===f.g)return f}}for(;G(this,a);){var g=pb(this.g,e);if(g instanceof ra){if("break"===g.g)break;if("return"===g.g)return g}G(this,
b)}},Wc=function(a){return~Number(G(this,a))},Xc=function(a,b){return Number(G(this,a))<<Number(G(this,b))},Yc=function(a,b){return Number(G(this,a))>>Number(G(this,b))},Zc=function(a,b){return Number(G(this,a))>>>Number(G(this,b))},$c=function(a,b){return Number(G(this,a))&Number(G(this,b))},ad=function(a,b){return Number(G(this,a))^Number(G(this,b))},bd=function(a,b){return Number(G(this,a))|Number(G(this,b))};var dd=function(){this.g=new sb;cd(this)};dd.prototype.Xc=function(a){return ed(this.g.o(a))};
var gd=function(a,b){return ed(fd.g.D(a,b))},cd=function(a){var b=function(d,e){var f=a.g,g=String(e);rb.hasOwnProperty(d)&&tb(f,g||d,rb[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){tb(a.g,String(d),e)};c(0,Jb);c(1,Kb);c(2,Lb);c(3,Ob);c(53,Pb);c(4,Qb);c(5,Rb);c(52,Sb);c(6,Tb);c(9,Rb);c(50,Ub);c(10,Vb);c(12,Wb);c(13,Xb);c(47,$b);c(54,ac);c(55,bc);c(63,lc);c(64,ic);c(65,jc);c(66,kc);c(15,mc);c(16,nc);c(17,nc);c(18,oc);c(19,pc);c(20,qc);c(21,rc);c(22,sc);
c(23,tc);c(24,uc);c(25,vc);c(26,yc);c(27,zc);c(28,Ac);c(29,Bc);c(45,Cc);c(30,Dc);c(32,Ec);c(33,Ec);c(34,Fc);c(35,Fc);c(46,Gc);c(36,Hc);c(43,Ic);c(37,Jc);c(38,Rc);c(39,Sc);c(40,Tc);c(41,Uc);c(42,Vc);c(58,Wc);c(57,Xc);c(60,Yc);c(61,Zc);c(56,$c);c(62,ad);c(59,bd)},id=function(){var a=fd,b=hd();tb(a.g,"require",b)},jd=function(a,b){a.g.g.O=b};
function ed(a){if(a instanceof ra||a instanceof mb||a instanceof n||a instanceof qb||a instanceof ub||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};var kd=function(){var a=function(b){return{toString:function(){return b}}};return{sg:a("consent"),md:a("consent_always_fire"),Oe:a("convert_case_to"),Pe:a("convert_false_to"),Qe:a("convert_null_to"),Re:a("convert_true_to"),Se:a("convert_undefined_to"),Di:a("debug_mode_metadata"),Ya:a("function"),dh:a("instance_name"),fh:a("live_only"),gh:a("malware_disabled"),hh:a("metadata"),Hi:a("original_activity_id"),Ii:a("original_vendor_template_id"),jh:a("once_per_event"),Bf:a("once_per_load"),Ki:a("priority_override"),
Li:a("respected_consent_types"),If:a("setup_tags"),Jf:a("tag_id"),Kf:a("teardown_tags")}}();
var ld=[],md={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},od=function(a){return md[a]},pd=/[\x00\x22\x26\x27\x3c\x3e]/g;var td=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,ud={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},vd=function(a){return ud[a]};ld[7]=function(a){return String(a).replace(td,vd)};
ld[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(td,vd)+"'"}};var Dd=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Ed={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Fd=function(a){return Ed[a]};ld[16]=function(a){return a};var Hd;
var Id=[],Jd=[],Kd=[],Ld=[],Md=[],Nd={},Od,Pd,Qd,Rd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Sd=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Nd[c],e={},f;for(f in a)if(a.hasOwnProperty(f))if(0===f.indexOf("vtp_"))d&&b&&b.Pf&&b.Pf(a[f]),e[void 0!==d?f:f.substr(4)]=a[f];else if(f===kd.md.toString()&&a[f]){}d&&b&&b.Of&&(e.vtp_gtmCachedValues=b.Of);return void 0!==d?d(e):Hd(c,e,b)},Ud=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Td(a[e],b,c));return d},Td=function(a,b,c){if(La(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Td(a[e],b,c));return d;case "macro":var f=
a[1];if(c[f])return;var g=Id[f];if(!g||b.qe(g))return;c[f]=!0;try{var h=Ud(g,b,c);h.vtp_gtmEventId=b.id;d=Sd(h,b);Qd&&(d=Qd.yh(d,h))}catch(z){b.bg&&b.bg(z,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Td(a[l],b,c)]=Td(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,p=1;p<a.length;p++){var r=Td(a[p],b,c);Pd&&(m=m||r===Pd.Kc);d.push(r)}return Pd&&m?Pd.Bh(d):d.join("");case "escape":d=Td(a[1],b,c);if(Pd&&La(a[1])&&"macro"===a[1][0]&&Pd.Rh(a))return Pd.hi(d);d=
String(d);for(var q=2;q<a.length;q++)ld[a[q]]&&(d=ld[a[q]](d));return d;case "tag":var t=a[1];if(!Ld[t])throw Error("Unable to resolve tag reference "+t+".");return d={Wf:a[2],index:t};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=Vd(u,b,c),x=!!a[4];return x||2!==v?x!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Vd=function(a,b,c){try{return Od(Ud(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Wd=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.o=a;this.g=c};ma(Wd,Error);function Xd(a,b){if(La(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)Xd(a[c],b[c])}};var ae=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.s=a;this.o=b;this.g=[]};ma(ae,Error);var ce=function(){return function(a,b){a instanceof ae||(a=new ae(a,be));b&&a.g.push(b);throw a;}};function be(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ka(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var fe=function(a){function b(q){for(var t=0;t<q.length;t++)d[q[t]]=!0}for(var c=[],d=[],e=de(a),f=0;f<Jd.length;f++){var g=Jd[f],h=ee(g,e);if(h){for(var l=g.add||[],m=0;m<l.length;m++)c[l[m]]=!0;b(g.block||[])}else null===h&&b(g.block||[]);}for(var p=[],r=0;r<Ld.length;r++)c[r]&&!d[r]&&(p[r]=!0);return p},ee=function(a,b){for(var c=a["if"]||[],d=0;d<c.length;d++){var e=b(c[d]);if(0===e)return!1;if(2===e)return null}for(var f=
a.unless||[],g=0;g<f.length;g++){var h=b(f[g]);if(2===h)return null;if(1===h)return!1}return!0},de=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Vd(Kd[c],a));return b[c]}};var ge={yh:function(a,b){b[kd.Oe]&&"string"===typeof a&&(a=1==b[kd.Oe]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(kd.Qe)&&null===a&&(a=b[kd.Qe]);b.hasOwnProperty(kd.Se)&&void 0===a&&(a=b[kd.Se]);b.hasOwnProperty(kd.Re)&&!0===a&&(a=b[kd.Re]);b.hasOwnProperty(kd.Pe)&&!1===a&&(a=b[kd.Pe]);return a}};var he=function(){this.g={}};function ie(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new Wd(c,d,g);}}function je(a,b,c){return function(){var d=arguments[0];if(d){var e=a.g[d],f=a.g.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));ie(e,b,d,g);ie(f,b,d,g)}}}};var ne=function(a){var b=ke.J,c=this;this.o=new he;this.g={};var d={},e=je(this.o,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Ra(a,function(f,g){var h={};Ra(g,function(l,m){var p=le(l,m);h[l]=p.assert;d[l]||(d[l]=p.S)});c.g[f]=function(l,m){var p=h[l];if(!p)throw me(l,{},"The requested permission "+l+" is not configured.");var r=Array.prototype.slice.call(arguments,0);p.apply(void 0,r);e.apply(void 0,r)}})},pe=function(a){return oe.g[a]||
function(){}};function le(a,b){var c=Rd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=me;try{return Sd(c)}catch(d){return{assert:function(e){throw new Wd(e,{},"Permission "+e+" is unknown.");},S:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function me(a,b,c){return new Wd(a,b,c)};var qe=!1;var re={};re.Ci=Wa('');re.Eh=Wa('');var se=qe,te=re.Eh,ue=re.Ci;
var Je=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},Ke=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;Je(b,"/*")&&(b=b.slice(0,-2));Je(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},Le=/^[a-z0-9-]+$/i,Me=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
Oe=function(a,b){var c;if(!(c=!Ne(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!Le.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,m=b[g];if(!Me.exec(m))throw Error("Invalid Wildcard");var p=m.slice(8),r=p.slice(0,p.indexOf("/")),q;var t=l.hostname,u=r;if(0!==u.indexOf("*."))q=t.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=t.toLowerCase().indexOf(u.toLowerCase());q=-1===v?!1:t.length===u.length?
!0:t.length!==u.length+v?!1:"."===t[v-1]}if(q){var x=p.slice(p.indexOf("/"));h=Ke(l.pathname+l.search,x)?!0:!1}else h=!1;if(h)return!0}return!1},Ne=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};var Pe=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,Qe={Fn:"function",DustMap:"Object",List:"Array"},K=function(a,b,c){for(var d=0;d<b.length;d++){var e=Pe.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var p=typeof l;l instanceof mb?p="Fn":l instanceof n?p="List":l instanceof qb?p="DustMap":
l instanceof ub&&(p="OpaqueValue");if(p!=h)throw Error("Error in "+a+". Argument "+f+" has type "+p+", which does not match required type "+(Qe[h]||h)+".");}}};function Re(a){return""+a}
function Se(a,b){var c=[];return c};var Te=function(a,b){var c=new mb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=G(this,d[e]);return b.apply(this,d)});c.$a();return c},Ue=function(a,b){var c=new qb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ja(e)?c.set(d,Te(a+"_"+d,e)):(Ka(e)||A(e)||"boolean"==typeof e)&&c.set(d,e)}c.$a();return c};var Ve=function(a,b){K(I(this),["apiName:!string","message:?string"],arguments);var c={},d=new qb;return d=Ue("AssertApiSubject",c)};var We=function(a,b){K(I(this),["actual:?*","message:?string"],arguments);var c={},d=new qb;
return d=Ue("AssertThatSubject",c)};function Xe(a){return function(){for(var b=[],c=this.g,d=0;d<arguments.length;++d)b.push(Cb(arguments[d],c));return Bb(a.apply(null,b))}}var Ze=function(){for(var a=Math,b=Ye,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=Xe(a[e].bind(a)))}return c};var $e=function(a){var b;return b};var af=function(a){var b;return b};var bf=function(a){K(I(this),["uri:!string"],arguments);return encodeURI(a)};var cf=function(a){K(I(this),["uri:!string"],arguments);return encodeURIComponent(a)};var jf=function(a){K(I(this),["message:?string"],arguments);};var kf=function(a,b){K(I(this),["min:!number","max:!number"],arguments);return Oa(a,b)};var lf=function(a,b,c){var d=a.g.g;if(!d)throw Error("Missing program state.");d.th.apply(null,Array.prototype.slice.call(arguments,1))};var mf=function(){lf(this,"read_container_data");var a=new qb;a.set("containerId",'GTM-W7MBMN');a.set("version",'590');a.set("environmentName",'');a.set("debugMode",se);a.set("previewMode",ue);a.set("environmentMode",te);a.$a();return a};var nf=function(){return(new Date).getTime()};var of=function(a){if(null===a)return"null";if(a instanceof n)return"array";if(a instanceof mb)return"function";if(a instanceof ub){a=a.Ga;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var pf=function(a){function b(c){return function(d){try{return c(d)}catch(e){(se||ue)&&a.call(this,e.message)}}}return{parse:b(function(c){return Bb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(Cb(c))})}};var qf=function(a){return Va(Cb(a,this.g))};var rf=function(a){return Number(Cb(a,this.g))};var sf=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var tf=function(a,b,c){var d=null,e=!1;return e?d:null};var Ye="floor ceil round max min abs pow sqrt".split(" ");var uf=function(){var a={};return{Kh:function(b){return a.hasOwnProperty(b)?a[b]:void 0},wi:function(b,c){a[b]=c},reset:function(){a={}}}},vf=function(a,b){K(I(this),["apiName:!string","mock:?*"],arguments);};var wf={};
wf.keys=function(a){return new n};
wf.values=function(a){return new n};
wf.entries=function(a){return new n};wf.freeze=function(a){return a};var yf=function(){this.g={};this.o={};};yf.prototype.get=function(a,b){var c=this.g.hasOwnProperty(a)?this.g[a]:void 0;return c};
yf.prototype.add=function(a,b,c){if(this.g.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.o.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.g[a]=c?void 0:Ja(b)?Te(a,b):Ue(a,b)};
var Af=function(a,b,c){if(a.o.hasOwnProperty(b))throw"Attempting to add a private function which already exists: "+b+".";if(a.g.hasOwnProperty(b))throw"Attempting to add a private function with an existing API name: "+b+".";a.o[b]=Ja(c)?Te(b,c):Ue(b,c)};function zf(a,b){var c=void 0;return c};function Bf(){var a={};return a};var L={Rb:"_ee",Pc:"_syn_or_mod",Ni:"_uei",Od:"_eu",Ji:"_pci",Cd:"event_callback",Ec:"event_timeout",ja:"gtag.config",Ba:"gtag.get",ia:"purchase",ob:"refund",Va:"begin_checkout",mb:"add_to_cart",nb:"remove_from_cart",Cg:"view_cart",We:"add_to_wishlist",Aa:"view_item",Ve:"view_promotion",Ue:"select_promotion",pd:"select_item",zc:"view_item_list",Te:"add_payment_info",Bg:"add_shipping_info",Pa:"value_key",Oa:"value_callback",sa:"allow_ad_personalization_signals",Nb:"restricted_data_processing",Jb:"allow_google_signals",
va:"cookie_expires",Kb:"cookie_update",Pb:"session_duration",Hc:"session_engaged_time",Fa:"user_properties",la:"transport_url",R:"ads_data_redaction",Nd:"user_data",Lb:"first_party_collection",C:"ad_storage",H:"analytics_storage",nd:"region",Ne:"wait_for_update",Da:"conversion_linker",Ca:"conversion_cookie_prefix",ca:"value",Z:"currency",qf:"trip_type",X:"items",hf:"passengers"};L.tf=[L.ia,L.ob,L.Va,L.mb,L.nb,L.Cg,L.We,L.Aa,L.Ve,L.Ue,L.zc,L.pd,L.Te,L.Bg];
L.sf=[L.sa,L.Jb,L.Kb];L.uf=[L.va,L.Ec,L.Pb,L.Hc];var Df=function(a){Fa("GTM",a)};var Ef=function(a,b){this.g=a;this.defaultValue=void 0===b?!1:b};var Ff=new Ef(1936,!0),Gf=new Ef(1933),Hf=new Ef(373442741);var If=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Jf=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var Kf,Lf=function(){if(void 0===Kf){var a=null,b=na.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:oa,createScript:oa,createScriptURL:oa})}catch(c){na.console&&na.console.error(c.message)}Kf=a}else Kf=a}return Kf};var Nf=function(a,b){this.g=b===Mf?a:""};Nf.prototype.toString=function(){return this.g+""};var Mf={},Of=function(a){var b=Lf(),c=b?b.createScriptURL(a):a;return new Nf(c,Mf)};var Pf=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Qf;a:{var Rf=na.navigator;if(Rf){var Sf=Rf.userAgent;if(Sf){Qf=Sf;break a}}Qf=""}var Tf=function(a){return-1!=Qf.indexOf(a)};var Vf=function(a,b,c){this.g=c===Uf?a:""};Vf.prototype.toString=function(){return this.g.toString()};var Wf=function(a){return a instanceof Vf&&a.constructor===Vf?a.g:"type_error:SafeHtml"},Uf={},Xf=function(a){var b=Lf(),c=b?b.createHTML(a):a;return new Vf(c,null,Uf)},Yf=new Vf(na.trustedTypes&&na.trustedTypes.emptyHTML||"",0,Uf);var Zf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);var c=a.firstChild.firstChild;a.innerHTML=Wf(Yf);return!c.parentElement}),$f=function(a,b){if(Zf())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Wf(b)},bg=function(a,b){a.src=b instanceof Nf&&b.constructor===Nf?b.g:"type_error:TrustedResourceUrl";var c;a:{var d=(a.ownerDocument&&
a.ownerDocument.defaultView||na).document;if(d.querySelector){var e=d.querySelector("script[nonce]");if(e){var f=e.nonce||e.getAttribute("nonce");if(f&&ag.test(f)){c=f;break a}}}c=""}var g=c;g&&a.setAttribute("nonce",g)},ag=/^[\w+/_-]+[=]{0,2}$/;var E=window,M=document,cg=navigator,dg=M.currentScript&&M.currentScript.src,eg=function(a,b){var c=E[a];E[a]=void 0===c?b:c;return E[a]},fg=function(a){var b=M.getElementsByTagName("script")[0]||M.body||M.head;b.parentNode.insertBefore(a,b)},gg=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},hg={async:1,nonce:1,onerror:1,onload:1,src:1,type:1},ig=function(a,b,c,d){var e=M.createElement("script");
d&&Ra(d,function(f,g){f=f.toLowerCase();hg.hasOwnProperty(f)||e.setAttribute(f,g)});e.type="text/javascript";e.async=!0;bg(e,Of(a));gg(e,b);c&&(e.onerror=c);fg(e);return e},jg=function(){if(dg){var a=dg.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},kg=function(a,b){var c=M.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=M.body&&M.body.lastChild||M.body||M.head;d.parentNode.insertBefore(c,
d);gg(c,b);void 0!==a&&(c.src=a);return c},lg=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},mg=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},ng=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},P=function(a){E.setTimeout(a,0)},og=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:
null},pg=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},qg=function(a){var b=M.createElement("div"),c=Xf("A<div>"+a+"</div>");$f(b,c);b=b.lastChild;for(var d=[];b.firstChild;)d.push(b.removeChild(b.firstChild));return d},rg=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},
sg=function(a){cg.sendBeacon&&cg.sendBeacon(a)||lg(a)},tg=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var ug=function(){var a={};this.g=function(b,c){return null!=a[b]?a[b]:c};this.o=function(){a[Gf.g]=!0}};ug.g=void 0;ug.o=function(){return ug.g?ug.g:ug.g=new ug};var vg=function(a){return ug.o().g(a.g,a.defaultValue)};var wg=[];function xg(){var a=eg("google_tag_data",{});a.ics||(a.ics={entries:{},set:yg,update:zg,addListener:Ag,notifyListeners:Bg,active:!1,usedDefault:!1});return a.ics}
function yg(a,b,c,d,e,f){var g=xg();g.active=!0;g.usedDefault=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},m=l.region,p=c&&A(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(""===d||p===e||(p===d?m!==e:!p&&!m)){var r=!!(f&&0<f&&void 0===l.update),q={region:p,initial:"granted"===b,update:l.update,quiet:r};if(""!==d||!1!==l.initial)h[a]=q;r&&E.setTimeout(function(){h[a]===q&&q.quiet&&(q.quiet=!1,Cg(a),Bg(),Fa("TAGGING",2))},f)}}}
function zg(a,b){var c=xg();c.active=!0;if(void 0!=b){var d=Dg(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=Dg(a);f.quiet?(f.quiet=!1,Cg(a)):g!==d&&Cg(a)}}function Ag(a,b){wg.push({be:a,Gh:b})}function Cg(a){for(var b=0;b<wg.length;++b){var c=wg[b];La(c.be)&&-1!==c.be.indexOf(a)&&(c.dg=!0)}}function Bg(a){for(var b=0;b<wg.length;++b){var c=wg[b];if(c.dg){c.dg=!1;try{c.Gh({wh:a})}catch(d){}}}}
var Dg=function(a){var b=xg().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},Eg=function(a){return(xg().entries[a]||{}).initial},Fg=function(a){return!(xg().entries[a]||{}).quiet},Gg=function(){return vg(Gf)?xg().active:!1},Hg=function(){return xg().usedDefault},Ig=function(a,b){xg().addListener(a,b)},Jg=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!Fg(b[e]))return!0;return!1}if(c()){var d=!1;Ig(b,function(e){d||c()||(d=!0,a(e))})}else a({})},Ng=
function(a,b){function c(){for(var f=[],g=0;g<d.length;g++){var h=d[g];!1===Dg(h)||e[h]||(f.push(h),e[h]=!0)}return f}var d=A(b)?[b]:b,e={};c().length!==d.length&&Ig(d,function(f){var g=c();0<g.length&&(f.be=g,a(f))})};function Og(a){for(var b=[],c=0;c<Pg.length;c++){var d=a(Pg[c]);b[c]=!0===d?"1":!1===d?"0":"-"}return b.join("")}
var Pg=[L.C,L.H],Qg=function(a){var b=a[L.nd];b&&Df(40);var c=a[L.Ne];c&&Df(41);for(var d=La(b)?b:[b],e=0;e<d.length;++e)for(var f in a)if(a.hasOwnProperty(f)&&f!==L.nd&&f!==L.Ne)if(-1<Ma(Pg,f)){var g=f,h=a[f],l=d[e];xg().set(g,h,l,"MA","MA-03",c)}else{}},Rg=function(a,
b){for(var c in a)if(a.hasOwnProperty(c))if(-1<Ma(Pg,c)){var d=c,e=a[c];xg().update(d,e)}else{}xg().notifyListeners(b)},Sg=function(a){var b=Dg(a);return void 0!=b?b:!0},Tg=function(){return"G1"+Og(Dg)},Ug=function(a,b){Ig(a,b)},Vg=function(a,b){Ng(a,b)},Wg=function(a,b){Jg(a,b)};var Yg=function(a){return Xg?M.querySelectorAll(a):null},Zg=function(a,b){if(!Xg)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!M.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},$g=!1;if(M.querySelectorAll)try{var ah=M.querySelectorAll(":root");ah&&1==ah.length&&ah[0]==M.documentElement&&($g=!0)}catch(a){}var Xg=$g;var bh=function(a){if(M.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!E.getComputedStyle)return!0;var c=E.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=E.getComputedStyle(d,
null))}return!1};
var ch=function(){var a=M.body,b=M.documentElement||a&&a.parentElement,c,d;if(M.compatMode&&"BackCompat"!==M.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};Df(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},dh=function(a){var b=ch(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0};var eh=[],fh=!(!E.IntersectionObserver||!E.IntersectionObserverEntry),gh=function(a,b,c){for(var d=new E.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<eh.length;f++)if(!eh[f])return eh[f]=d,f;return eh.push(d)-1},hh=function(a,b,c){function d(h,l){var m={top:0,bottom:0,right:0,left:0,width:0,height:0},p={boundingClientRect:h.getBoundingClientRect(),
intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:h,time:ab()};P(function(){return a(p)})}for(var e=[],f=[],g=0;g<b.length;g++)e.push(0),f.push(-1);c.sort(function(h,l){return h-l});return function(){for(var h=0;h<b.length;h++){var l=dh(b[h]);if(l>e[h])for(;f[h]<c.length-1&&l>=c[f[h]+1];)d(b[h],l),f[h]++;else if(l<e[h])for(;0<=f[h]&&l<=c[f[h]];)d(b[h],l),f[h]--;e[h]=l}}},ih=function(a,b,c){for(var d=0;d<c.length;d++)1<c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(fh){var e=!1;P(function(){e||
hh(a,b,c)()});return gh(function(f){e=!0;for(var g={Fb:0};g.Fb<f.length;g={Fb:g.Fb},g.Fb++)P(function(h){return function(){return a(f[h.Fb])}}(g))},b,c)}return E.setInterval(hh(a,b,c),1E3)},jh=function(a){fh?0<=a&&a<eh.length&&eh[a]&&(eh[a].disconnect(),eh[a]=void 0):E.clearInterval(a)};var kh=/:[0-9]+$/,lh=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},oh=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=mh(a.protocol)||mh(E.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
E.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||E.location.hostname).replace(kh,"").toLowerCase());return nh(a,b,c,d,e)},nh=function(a,b,c,d,e){var f,g=mh(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=ph(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(kh,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||Fa("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Ma(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=lh(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},mh=function(a){return a?a.replace(":",
"").toLowerCase():""},ph=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},qh=function(a){var b=M.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Fa("TAGGING",1),c="/"+c);var d=b.hostname.replace(kh,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},rh=function(a){function b(m){var p=m.split("=")[0];return 0>d.indexOf(p)?m:p+"=0"}function c(m){return m.split("&").map(b).filter(function(p){return void 0!=
p}).join("&")}var d="gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),e=qh(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};var sh=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),th=new RegExp(/@(gmail|googlemail)\./i),uh=new RegExp(/support|noreply/i),vh="SCRIPT STYLE IMG SVG PATH BR".split(" "),wh=["BR"];function xh(a){var b;if(a===M.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=xh(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
function yh(a,b){if(1>=a.length)return a;var c=a.filter(b);return 0==c.length?a:c}function zh(a){if(0==a.length)return null;var b;b=yh(a,function(c){return!uh.test(c.Eb)});b=yh(b,function(c){return"INPUT"===c.element.tagName.toUpperCase()});b=yh(b,function(c){return!bh(c.element)});return b[0]}
var Ah=function(){var a;var b=[],c=M.body;if(c){for(var d=c.querySelectorAll("*"),e=0;e<d.length&&1E4>e;e++){var f=d[e];if(!(0<=vh.indexOf(f.tagName.toUpperCase()))){for(var g=!1,h=0;h<f.childElementCount&&1E4>h;h++)if(!(0<=wh.indexOf(f.children[h].tagName.toUpperCase()))){g=!0;break}g||b.push(f)}}a={elements:b,status:1E4<d.length?"2":"1"}}else a={elements:b,status:"4"};for(var l=a,m=l.elements,p=[],r=0;r<m.length;r++){var q=m[r],t=q.textContent;q.value&&(t=q.value);if(t){var u=t.match(sh);if(u){var v=
u[0],x;if(E.location){var z=nh(E.location,"host",!0);x=0<=v.toLowerCase().indexOf(z)}else x=!1;x||p.push({element:q,Eb:v})}}}var w=zh(p),y=[];if(w){var B=w.element,C={Eb:w.Eb,tagName:B.tagName,type:1};C.querySelector=xh(B);C.isVisible=!bh(B);y.push(C)}return{elements:y,status:10<p.length?"3":l.status}},Bh=function(a){return a.tagName+":"+a.isVisible+":"+a.Eb.length+":"+th.test(a.Eb)};var ke={},Sh=null,Th=Math.random();ke.J="GTM-W7MBMN";ke.Oc="5j0";ke.Gi="";ke.vg="ChAI8MCyhQYQl/Xf+9e5rNNzEiMAgfRtnI9rZuunFDsaEzy3jNNwbGCIorP7MBhgRGn1xMeodhoCGEc\x3d";var Uh={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Vh={__paused:!0,__tg:!0},Wh;for(Wh in Uh)Uh.hasOwnProperty(Wh)&&(Vh[Wh]=!0);var Xh="www.googletagmanager.com/gtm.js";
var Yh=Xh,Zh=Wa(""),$h=null,ai=null,bi="https://www.googletagmanager.com/a?id="+ke.J+"&cv=590",ci={},di={},ei=function(){var a=Sh.sequence||1;Sh.sequence=a+1;return a};ke.ug="";var fi={},gi=new Pa,hi={},ii={},li={name:"dataLayer",set:function(a,b){J(ib(a,b),hi);ji()},get:function(a){return ki(a,2)},reset:function(){gi=new Pa;hi={};ji()}},ki=function(a,b){return 2!=b?gi.get(a):mi(a)},mi=function(a,b){var c=a.split(".");b=b||[];for(var d=hi,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==Ma(b,d))return}return d},ni=function(a,b){ii.hasOwnProperty(a)||(gi.set(a,b),J(ib(a,b),hi),ji())},oi=function(){for(var a=["gtm.allowlist","gtm.blocklist",
"gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],b=0;b<a.length;b++){var c=a[b],d=ki(c,1);if(La(d)||Ab(d))d=J(d);ii[c]=d}},ji=function(a){Ra(ii,function(b,c){gi.set(b,c);J(ib(b,void 0),hi);J(ib(b,c),hi);a&&delete ii[b]})},qi=function(a,b,c){fi[a]=fi[a]||{};fi[a][b]=pi(b,c)},pi=function(a,b){var c,d=1!==(void 0===b?2:b)?mi(a):gi.get(a);"array"===yb(d)||"object"===yb(d)?c=J(d):c=d;return c},ri=function(a,b){if(fi[a])return fi[a][b]},si=function(a,b){fi[a]&&delete fi[a][b]};var vi={},wi=function(a,b){if(E._gtmexpgrp&&E._gtmexpgrp.hasOwnProperty(a))return E._gtmexpgrp[a];void 0===vi[a]&&(vi[a]=Math.floor(Math.random()*b));return vi[a]};function xi(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};function yi(a){return vg(Hf)&&!a.navigator.cookieEnabled?!1:"null"!==a.origin};var Bi=function(a,b,c,d){return zi(d)?xi(a,String(b||Ai()),c):[]},Ei=function(a,b,c,d,e){if(zi(e)){var f=Ci(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=Di(f,function(g){return g.Wc},b);if(1===f.length)return f[0].id;f=Di(f,function(g){return g.jc},c);return f[0]?f[0].id:void 0}}};function Fi(a,b,c,d){var e=Ai(),f=window;yi(f)&&(f.document.cookie=a);var g=Ai();return e!=g||void 0!=c&&0<=Bi(b,g,!1,d).indexOf(c)}
var Ji=function(a,b,c,d){function e(x,z,w){if(null==w)return delete h[z],x;h[z]=w;return x+"; "+z+"="+w}function f(x,z){if(null==z)return delete h[z],x;h[z]=!0;return x+"; "+z}if(!zi(c.La))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Gi(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.ai);g=e(g,"samesite",
c.oi);c.si&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var p=Hi(),r=void 0,q=!1,t=0;t<p.length;++t){var u="none"!==p[t]?p[t]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,h)}catch(x){r=x;continue}q=!0;if(!Ii(u,c.path)&&Fi(v,a,b,c.La))return 0}if(r&&!q)throw r;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,h);return Ii(m,c.path)?1:Fi(g,a,b,c.La)?0:1},Ki=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Ji(a,b,c)};
function Di(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function Ci(a,b,c){for(var d=[],e=Bi(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),Wc:1*l[0]||1,jc:1*l[1]||1}))}}return d}
var Gi=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Li=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Mi=/(^|\.)doubleclick\.net$/i,Ii=function(a,b){return Mi.test(window.document.location.hostname)||"/"===b&&Li.test(a)},Ai=function(){return yi(window)?window.document.cookie:""},Hi=function(){var a=[],b=window.document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));
var e=window.document.location.hostname;Mi.test(e)||Li.test(e)||a.push("none");return a},zi=function(a){if(!vg(Gf)||!a||!Gg())return!0;if(!Fg(a))return!1;var b=Dg(a);return null==b?!0:!!b};var Ni=function(){return[Math.round(2147483647*Math.random()),Math.round(ab()/1E3)].join(".")},Qi=function(a,b,c,d,e){var f=Oi(b);return Ei(a,f,Pi(c),d,e)},Ri=function(a,b,c,d){var e=""+Oi(c),f=Pi(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Oi=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Pi=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Si(a,b,c){var d,e=Number(null!=a.fb?a.fb:void 0);0!==e&&(d=new Date((b||ab())+1E3*(e||7776E3)));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var Ti=["1"],Ui={},Yi=function(a){var b=Vi(a.prefix);if(!Ui[b]&&!Wi(b,a.path,a.domain)){var c=Ni();if(0===Xi(b,c,a)){var d=eg("google_tag_data",{});d._gcl_au?Fa("GTM",57):d._gcl_au=c}Wi(b,a.path,a.domain)}};function Xi(a,b,c){var d=Ri(b,"1",c.domain,c.path),e=Si(c);e.La="ad_storage";return Ki(a,d,e)}function Wi(a,b,c){var d=Qi(a,b,c,Ti,"ad_storage");d&&(Ui[a]=d);return d}function Vi(a){return(a||"_gcl")+"_au"};var Zi=function(a){for(var b=[],c=M.cookie.split(";"),d=new RegExp("^\\s*"+(a||"_gac")+"_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Je:f[1],value:f[2],timestamp:Number(f[2].split(".")[1])||0})}b.sort(function(g,h){return h.timestamp-g.timestamp});return b};
function $i(a,b){var c=Zi(a),d={};if(!c||!c.length)return d;for(var e=0;e<c.length;e++){var f=c[e].value.split(".");if(!("1"!==f[0]||b&&3>f.length||!b&&3!==f.length)&&Number(f[1])){d[c[e].Je]||(d[c[e].Je]=[]);var g={version:f[0],timestamp:1E3*Number(f[1]),oa:f[2]};b&&3<f.length&&(g.labels=f.slice(3));d[c[e].Je].push(g)}}return d};function aj(){for(var a=bj,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function cj(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var bj,dj;
function ej(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),p=dj[m];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}bj=bj||cj();dj=dj||aj();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var fj;var jj=function(){var a=gj,b=hj,c=ij(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){mg(M,"mousedown",d);mg(M,"keyup",d);mg(M,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},kj=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};ij().decorators.push(f)},lj=function(a,b,c){for(var d=ij().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,m=a,p=!!g.sameHost;if(l&&(p||m!==M.location.hostname))for(var r=0;r<l.length;r++)if(l[r]instanceof RegExp){if(l[r].test(m)){h=!0;break a}}else if(0<=m.indexOf(l[r])||p&&0<=l[r].indexOf(m)){h=!0;break a}h=!1}if(h){var q=g.placement;void 0==q&&(q=g.fragment?2:1);q===b&&eb(e,g.callback())}}return e},ij=function(){var a=eg("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var mj=/(.*?)\*(.*?)\*(.*)/,nj=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,oj=/^(?:www\.|m\.|amp\.)+/,pj=/([^?#]+)(\?[^#]*)?(#.*)?/;function qj(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var sj=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()){b.push(c);var e=b,f=e.push,g,h=String(d);bj=bj||cj();dj=dj||aj();for(var l=[],m=0;m<h.length;m+=3){var p=m+1<h.length,r=m+2<h.length,q=h.charCodeAt(m),t=p?h.charCodeAt(m+1):0,u=r?h.charCodeAt(m+2):0,v=q>>2,x=(q&3)<<4|t>>4,z=(t&15)<<2|u>>6,w=u&63;r||(w=64,p||(z=64));l.push(bj[v],bj[x],bj[z],bj[w])}g=l.join("");f.call(e,g)}}var y=b.join("*");return["1",rj(y),
y].join("*")},rj=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=fj)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}fj=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^fj[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},uj=function(){return function(a){var b=qh(E.location.href),
c=b.search.replace("?",""),d=lh(c,"_gl",!1,!0)||"";a.query=tj(d)||{};var e=oh(b,"fragment").match(qj("_gl"));a.fragment=tj(e&&e[3]||"")||{}}},vj=function(a){var b=uj(),c=ij();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(eb(d,e.query),a&&eb(d,e.fragment));return d},tj=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=mj.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var m=g[2],p=
0;p<b;++p)if(m===rj(h,p)){l=!0;break a}l=!1}if(l){for(var r={},q=h?h.split("*"):[],t=0;t<q.length;t+=2)r[q[t]]=ej(q[t+1]);return r}}}}catch(u){}};function wj(a,b,c,d){function e(p){var r=p,q=qj(a).exec(r),t=r;if(q){var u=q[2],v=q[4];t=q[1];v&&(t=t+u+v)}p=t;var x=p.charAt(p.length-1);p&&"&"!==x&&(p+="&");return p+m}d=void 0===d?!1:d;var f=pj.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function xj(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=lj(b,1,c),e=lj(b,2,c),f=lj(b,3,c);if(fb(d)){var g=sj(d);c?yj("_gl",g,a):zj("_gl",g,a,!1)}if(!c&&fb(e)){var h=sj(e);zj("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,p=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){zj(m,p,r,void 0);break a}if("form"===r.tagName.toLowerCase()){yj(m,p,r);break a}}"string"==typeof r&&wj(m,p,r,void 0)}}
function zj(a,b,c,d){if(c.href){var e=wj(a,b,c.href,void 0===d?!1:d);Pf.test(e)&&(c.href=e)}}
function yj(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=M.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=wj(a,b,c.action);Pf.test(m)&&(c.action=m)}}}
var gj=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||xj(e,e.hostname)}}catch(g){}},hj=function(a){try{if(a.action){var b=oh(qh(a.action),"host");xj(a,b)}}catch(c){}},Aj=function(a,b,c,d){jj();kj(a,b,"fragment"===c?2:1,!!d,!1)},Bj=function(a,b){jj();kj(a,[nh(E.location,"host",!0)],b,!0,!0)},Gj=function(){var a=M.location.hostname,b=nj.exec(M.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(oj,""),l=e.replace(oj,""),m;if(!(m=h===l)){var p="."+l;m=h.substring(h.length-p.length,h.length)===p}return m},Hj=function(a,b){return!1===a?!1:a||b||Gj()};var Ij={};var Jj=/^\w+$/,Kj=/^[\w-]+$/,Lj={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp",gb:"_gb"},Mj=function(){if(!vg(Gf)||!Gg())return!0;var a=Dg("ad_storage");return null==a?!0:!!a},Nj=function(a,b){Fg("ad_storage")?Mj()?a():Ng(a,"ad_storage"):b?Fa("TAGGING",3):Jg(function(){Nj(a,!0)},["ad_storage"])},Pj=function(a){return Oj(a).map(function(b){return b.oa})},Oj=function(a){var b=[];if(!yi(E)||!M.cookie)return b;var c=Bi(a,M.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d={},e=0;e<c.length;d=
{vc:d.vc},e++){var f=Qj(c[e]);if(null!=f){var g=f,h=g.version;d.vc=g.oa;var l=g.timestamp,m=g.labels,p=Na(b,function(r){return function(q){return q.oa===r.vc}}(d));p?(p.timestamp=Math.max(p.timestamp,l),p.labels=Rj(p.labels,m||[])):b.push({version:h,oa:d.vc,timestamp:l,labels:m})}}b.sort(function(r,q){return q.timestamp-r.timestamp});return Sj(b)};function Rj(a,b){for(var c={},d=[],e=0;e<a.length;e++)c[a[e]]=!0,d.push(a[e]);for(var f=0;f<b.length;f++)c[b[f]]||d.push(b[f]);return d}
function Tj(a){return a&&"string"==typeof a&&a.match(Jj)?a:"_gcl"}
var Vj=function(){var a=qh(E.location.href),b=oh(a,"query",!1,void 0,"gclid"),c=oh(a,"query",!1,void 0,"gclsrc"),d=oh(a,"query",!1,void 0,"wbraid"),e=oh(a,"query",!1,void 0,"dclid");if(!b||!c||!d){var f=a.hash.replace("#","");b=b||lh(f,"gclid",!1,void 0);c=c||lh(f,"gclsrc",!1,void 0);d=d||lh(f,"wbraid",!1,void 0)}return Uj(b,c,e,d)},Uj=function(a,b,c,d){var e={},f=function(g,h){e[h]||(e[h]=[]);e[h].push(g)};e.gclid=a;e.gclsrc=b;e.dclid=c;void 0!==d&&Kj.test(d)&&(e.gbraid=d,f(d,"gb"));if(void 0!==
a&&a.match(Kj))switch(b){case void 0:f(a,"aw");break;case "aw.ds":f(a,"aw");f(a,"dc");break;case "ds":f(a,"dc");break;case "3p.ds":f(a,"dc");break;case "gf":f(a,"gf");break;case "ha":f(a,"ha")}c&&f(c,"dc");return e},Wj=function(a,b){switch(a){case void 0:case "aw":return"aw"===b;case "aw.ds":return"aw"===b||"dc"===b;case "ds":case "3p.ds":return"dc"===b;case "gf":return"gf"===b;case "ha":return"ha"===b}return!1},Yj=function(a){var b=Vj();Nj(function(){Xj(b,a)})};
function Xj(a,b,c,d){function e(p,r){var q=Zj(p,f);q&&(Ki(q,r,g),h=!0)}b=b||{};d=d||[];var f=Tj(b.prefix);c=c||ab();var g=Si(b,c,!0);g.La="ad_storage";var h=!1,l=Math.round(c/1E3),m=function(p){var r=["GCL",l,p];0<d.length&&r.push(d.join("."));return r.join(".")};a.aw&&e("aw",m(a.aw[0]));a.dc&&e("dc",m(a.dc[0]));a.gf&&e("gf",m(a.gf[0]));a.ha&&e("ha",m(a.ha[0]));a.gp&&e("gp",m(a.gp[0]));(void 0==Ij.enable_gbraid_cookie_write?0:Ij.enable_gbraid_cookie_write)&&!h&&a.gb&&e("gb",m(a.gb[0]))}
var bk=function(a,b){var c=vj(!0);Nj(function(){for(var d=Tj(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Lj[f]){var g=Zj(f,d),h=c[g];if(h){var l=Math.min(ak(h),ab()),m;b:{var p=l,r=g;if(yi(E))for(var q=Bi(r,M.cookie,void 0,"ad_storage"),t=0;t<q.length;++t)if(ak(q[t])>p){m=!0;break b}m=!1}if(!m){var u=Si(b,l,!0);u.La="ad_storage";Ki(g,h,u)}}}}Xj(Uj(c.gclid,c.gclsrc),b)})},Zj=function(a,b){var c=Lj[a];if(void 0!==c)return b+c},ak=function(a){return 0!==ck(a.split(".")).length?1E3*(Number(a.split(".")[1])||
0):0};function Qj(a){var b=ck(a.split("."));return 0===b.length?null:{version:b[0],oa:b[2],timestamp:1E3*(Number(b[1])||0),labels:b.slice(3)}}function ck(a){return 3>a.length||"GCL"!==a[0]&&"1"!==a[0]||!/^\d+$/.test(a[1])||!Kj.test(a[2])?[]:a}
var dk=function(a,b,c,d,e){if(La(b)&&yi(E)){var f=Tj(e),g=function(){for(var h={},l=0;l<a.length;++l){var m=Zj(a[l],f);if(m){var p=Bi(m,M.cookie,void 0,"ad_storage");p.length&&(h[m]=p.sort()[p.length-1])}}return h};Nj(function(){Aj(g,b,c,d)})}},Sj=function(a){return a.filter(function(b){return Kj.test(b.oa)})},ek=function(a,b){if(yi(E)){for(var c=Tj(b.prefix),d={},e=0;e<a.length;e++)Lj[a[e]]&&(d[a[e]]=Lj[a[e]]);Nj(function(){Ra(d,function(f,g){var h=Bi(c+g,M.cookie,void 0,"ad_storage");h.sort(function(t,
u){return ak(u)-ak(t)});if(h.length){var l=h[0],m=ak(l),p=0!==ck(l.split(".")).length?l.split(".").slice(3):[],r={},q;q=0!==ck(l.split(".")).length?l.split(".")[2]:void 0;r[f]=[q];Xj(r,b,m,p)}})})}};function fk(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var gk=function(a){function b(e,f,g){g&&(e[f]=g)}if(Gg()){var c=Vj();if(fk(c,a)){var d={};b(d,"gclid",c.gclid);b(d,"dclid",c.dclid);b(d,"gclsrc",c.gclsrc);b(d,"wbraid",c.gbraid);Bj(function(){return d},3);Bj(function(){var e={};return e._up="1",e},1)}}};function hk(a,b){var c=Tj(b),d=Zj(a,c);if(!d)return 0;for(var e=Oj(d),f=0,g=0;g<e.length;g++)f=Math.max(f,e[g].timestamp);return f}
function ik(a){var b=0,c;for(c in a)for(var d=a[c],e=0;e<d.length;e++)b=Math.max(b,Number(d[e].timestamp));return b};var jk=/^\d+\.fls\.doubleclick\.net$/;function kk(a,b){Fg(L.C)?Sg(L.C)?a():Ng(a,L.C):b?Df(42):Wg(function(){kk(a,!0)},[L.C])}function lk(a){var b=qh(E.location.href),c=oh(b,"host",!1);if(c&&c.match(jk)){var d=oh(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function mk(a,b,c){if("aw"===a||"dc"===a||"gb"===a){var d=lk("gcl"+a);if(d)return d.split(".")}var e=Tj(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!Sg(L.C)&&c,g;g=Vj()[a]||[];if(0<g.length)return f?["0"]:g}var h=Zj(a,e);return h?Pj(h):[]}function nk(a){var b=[];Ra(a,function(c,d){d=Sj(d);for(var e=[],f=0;f<d.length;f++)e.push(d[f].oa);e.length&&b.push(c+":"+e.join(","))});return b.join(";")}
var ok=function(a){var b=lk("gac");return b?!Sg(L.C)&&a?"0":decodeURIComponent(b):nk(Mj()?$i():{})},pk=function(a){var b=lk("gacgb");return b?!Sg(L.C)&&a?"0":decodeURIComponent(b):nk(Mj()?$i("_gac_gb",!0):{})},qk=function(a,b,c){var d=Vj(),e=[],f=d.gclid,g=d.dclid,h=d.gclsrc||"aw";!f||"aw.ds"!==h&&"aw"!==h&&"ds"!==h||c&&!Wj(h,c)||e.push({oa:f,je:h});!g||c&&"dc"!==c||e.push({oa:g,je:"ds"});kk(function(){Yi(b);var l=Ui[Vi(b.prefix)],m=!1;if(l&&0<e.length)for(var p=Sh.joined_auid=Sh.joined_auid||{},r=0;r<e.length;r++){var q=e[r],t=q.oa,u=q.je,v=(b.prefix||"_gcl")+"."+u+"."+t;if(!p[v]){var x="https://adservice.google.com/pagead/regclk";x="gb"===u?x+"?gbraid="+t+"&auid="+l:x+"?gclid="+t+"&auid="+l+"&gclsrc="+u;sg(x);m=p[v]=!0}}null==a&&(a=
m);if(a&&l){var z=Vi(b.prefix),w=Ui[z];w&&Xi(z,w,b)}})},rk=function(a){var b;if(lk("gclaw")||lk("gac")||0<(Vj().aw||[]).length)b=!1;else{var c;if(0<(Vj().gb||[]).length)c=!0;else{var d=Math.max(hk("aw",a),ik(Mj()?$i():{}));c=Math.max(hk("gb",a),ik(Mj()?$i("_gac_gb",!0):{}))>d}b=c}return b};var sk=/[A-Z]+/,tk=/\s/,uk=function(a){if(A(a)&&(a=$a(a),!tk.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(sk.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],K:d}}}}},wk=function(a){for(var b={},c=0;c<a.length;++c){var d=uk(a[c]);d&&(b[d.id]=d)}vk(b);var e=[];Ra(b,function(f,g){e.push(g)});return e};
function vk(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.K[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var xk=function(){var a=!1;return a};var zk=function(a,b,c,d){return(2===yk()||d||"http:"!=E.location.protocol?a:b)+c},yk=function(){var a=jg(),b;if(1===a)a:{var c=Yh;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=M.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var Mk=function(a){if(Sg(L.C))return a;a=a.replace(/&url=([^&#]+)/,function(b,c){var d=rh(decodeURIComponent(c));return"&url="+encodeURIComponent(d)});a=a.replace(/&ref=([^&#]+)/,function(b,c){var d=rh(decodeURIComponent(c));return"&ref="+encodeURIComponent(d)});return a},Nk=function(){var a;if(!(a=Zh)){var b;if(!0===E._gtmdgs)b=!0;else{var c=cg&&cg.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||
11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=Va("1");return wi(1,100)<d?wi(2,2):-1},Ok=function(a){var b;if(!a||!a.length)return;for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&e.estimated_delivery_date?c.push(""+e.estimated_delivery_date):c.push("")}b=c.join(",");return b};var Pk=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Qk={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Rk={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Sk="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Tk=function(){var a=!1;return a},Vk=function(a){var b=ki("gtm.allowlist")||ki("gtm.whitelist");b&&Df(9);Tk()&&(b="google gtagfl lcl zone oid op".split(" "));var c=b&&gb(Xa(b),Qk),d=ki("gtm.blocklist")||
ki("gtm.blacklist");d||(d=ki("tagTypeBlacklist"))&&Df(3);d?Df(8):d=[];Uk()&&(d=Xa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Ma(Xa(d),"google")&&Df(2);var e=d&&gb(Xa(d),Rk),f={};return function(g){var h=g&&g[kd.Ya];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=di[h]||[],m=a(h,l);if(b){var p;if(p=
m)a:{if(0>Ma(c,h))if(l&&0<l.length)for(var r=0;r<l.length;r++){if(0>Ma(c,l[r])){Df(11);p=!1;break a}}else{p=!1;break a}p=!0}m=p}var q=!1;if(d){var t=0<=Ma(e,h);if(t)q=t;else{var u=Qa(e,l||[]);u&&Df(10);q=u}}var v=!m||q;v||!(0<=Ma(l,"sandboxedScripts"))||c&&-1!==Ma(c,"sandboxedScripts")||(v=Qa(e,Sk));return f[h]=v}},Uk=function(){return Pk.test(E.location&&E.location.hostname)};var Wk={active:!0,isAllowed:function(){return!0}},Xk=function(a){var b=Sh.zones;return b?b.checkState(ke.J,a):Wk},Yk=function(a){var b=Sh.zones;!b&&a&&(b=Sh.zones=a());return b};var Zk=function(){},$k=function(){};var al=!1,bl=0,cl=[];function dl(a){if(!al){var b=M.createEventObject,c="complete"==M.readyState,d="interactive"==M.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){al=!0;for(var e=0;e<cl.length;e++)P(cl[e])}cl.push=function(){for(var f=0;f<arguments.length;f++)P(arguments[f]);return 0}}}function el(){if(!al&&140>bl){bl++;try{M.documentElement.doScroll("left"),dl()}catch(a){E.setTimeout(el,50)}}}var fl=function(a){al?a():cl.push(a)};var hl=function(a,b){this.g=!1;this.D=[];this.N={tags:[]};this.O=!1;this.o=this.s=0;gl(this,a,b)},il=function(a,b,c,d){if(Vh.hasOwnProperty(b)||"__zone"===b)return-1;var e={};Ab(d)&&(e=J(d,e));e.id=c;e.status="timeout";return a.N.tags.push(e)-1},jl=function(a,b,c,d){var e=a.N.tags[b];e&&(e.status=c,e.executionTime=d)},kl=function(a){if(!a.g){for(var b=a.D,c=0;c<b.length;c++)b[c]();a.g=!0;a.D.length=0}},gl=function(a,b,c){Ja(b)&&a.Wb(b);c&&E.setTimeout(function(){return kl(a)},Number(c))};
hl.prototype.Wb=function(a){var b=this,c=cb(function(){return P(function(){a(ke.J,b.N)})});this.g?c():this.D.push(c)};var ll=function(a){a.s++;return cb(function(){a.o++;a.O&&a.o>=a.s&&kl(a)})};var ml=function(){function a(d){return!Ka(d)||0>d?0:d}if(!Sh._li&&E.performance&&E.performance.timing){var b=E.performance.timing.navigationStart,c=Ka(li.get("gtm.start"))?li.get("gtm.start"):0;Sh._li={cst:a(c-b),cbt:a(ai-b)}}},nl=function(a){E.performance&&E.performance.mark(ke.J+"_"+a+"_start")},ol=function(a){if(E.performance){var b=ke.J+"_"+a+"_start",c=ke.J+"_"+a+"_duration";E.performance.measure(c,b);var d=E.performance.getEntriesByName(c)[0];E.performance.clearMarks(b);E.performance.clearMeasures(c);
var e=Sh._p||{};void 0===e[a]&&(e[a]=d.duration,Sh._p=e);return d.duration}},pl=function(){if(E.performance&&E.performance.now){var a=Sh._p||{};a.PAGEVIEW=E.performance.now();Sh._p=a}};var ql={},rl=function(){return E.GoogleAnalyticsObject&&E[E.GoogleAnalyticsObject]},sl=!1;
var tl=function(a){E.GoogleAnalyticsObject||(E.GoogleAnalyticsObject=a||"ga");var b=E.GoogleAnalyticsObject;if(E[b])E.hasOwnProperty(b)||Df(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);E[b]=c}ml();return E[b]},ul=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=rl();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},vl=function(a){if(!Gg())return;var b=rl();b(a+"require","linker");b(a+
"linker:passthrough",!0);};
var xl=function(a){},wl=function(){return E.GoogleAnalyticsObject||"ga"},yl=function(a,b){return function(){var c=rl(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var Gl=function(){},Hl=function(){return"&tc="+Ld.filter(function(a){return a}).length},Kl=function(){2022<=Il().length&&Jl()},Ml=function(){Ll||(Ll=E.setTimeout(Jl,500))},Jl=function(){Ll&&(E.clearTimeout(Ll),Ll=void 0);void 0===Nl||Ol[Nl]&&!Pl&&!Ql||(Rl[Nl]||Sl.Sh()||
0>=Tl--?(Df(1),Rl[Nl]=!0):(Sl.ki(),lg(Il()),Ol[Nl]=!0,Ul=Vl=Wl=Ql=Pl=""))},Il=function(){var a=Nl;if(void 0===a)return"";var b=Ga("GTM"),c=Ga("TAGGING");return[Xl,Ol[a]?"":"&es=1",Yl[a],b?"&u="+b:"",c?"&ut="+c:"",Hl(),Pl,Ql,Wl,Vl,Gl(),Ul,"&z=0"].join("")},$l=function(){Xl=Zl()},Zl=function(){return[bi,"&v=3&t=t","&pid="+Oa(),"&rv="+ke.Oc].join("")},Fl=Object.keys({Fi:"L",Mi:"S",Oi:"Y"}).length,am="0.005000">Math.random(),Xl=Zl(),Ol={},Pl="",Ql="",Ul="",Vl="",El={},Dl=!1,Wl="",Nl=
void 0,Yl={},Rl={},Ll=void 0,Sl=function(a,b){var c=0,d=0;return{Sh:function(){if(c<a)return!1;ab()-d>=b&&(c=0);return c>=a},ki:function(){ab()-d>=b&&(c=0);c++;d=ab()}}}(2,1E3),Tl=1E3,bm=function(a,b,c){if(am&&!Rl[a]&&b){a!==Nl&&(Jl(),Nl=a);var d,e=String(b[kd.Ya]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;Pl=Pl?Pl+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");
var h=(Nd[g]?"1":"2")+d;Ul=Ul?Ul+"."+h:"&ti="+h;Ml();Kl()}};var dm=function(a,b,c){if(am&&!Rl[a]){a!==Nl&&(Jl(),Nl=a);var d=c+b;Ql=Ql?Ql+"."+d:"&epr="+d;Ml();Kl()}},em=function(a,b,c){};
var fm=function(){return!1},gm=function(){var a={};return function(b,c,d){}};function hm(a,b,c,d){var e=Ld[a],f=im(a,b,c,d);if(!f)return null;var g=Td(e[kd.If],c,[]);if(g&&g.length){var h=g[0];f=hm(h.index,{onSuccess:f,onFailure:1===h.Wf?b.terminate:f,terminate:b.terminate},c,d)}return f}
function im(a,b,c,d){function e(){if(f[kd.gh])h();else{var x=Ud(f,c,[]);var y=il(c.Sa,String(f[kd.Ya]),Number(f[kd.Jf]),x[kd.hh]),B=!1;x.vtp_gtmOnSuccess=function(){if(!B){B=!0;var H=ab()-D;bm(c.id,Ld[a],"5");jl(c.Sa,y,"success",
H);g()}};x.vtp_gtmOnFailure=function(){if(!B){B=!0;var H=ab()-D;bm(c.id,Ld[a],"6");jl(c.Sa,y,"failure",H);h()}};x.vtp_gtmTagId=f.tag_id;x.vtp_gtmEventId=c.id;bm(c.id,f,"1");var C=function(){var H=ab()-D;bm(c.id,f,"7");jl(c.Sa,y,"exception",H);B||(B=!0,h())};var D=ab();try{Sd(x,c)}catch(H){C(H)}}}var f=Ld[a],g=b.onSuccess,h=b.onFailure,l=b.terminate;if(c.qe(f))return null;var m=Td(f[kd.Kf],c,[]);if(m&&m.length){var p=m[0],r=hm(p.index,{onSuccess:g,onFailure:h,terminate:l},c,d);if(!r)return null;g=r;h=2===p.Wf?l:r}if(f[kd.Bf]||f[kd.jh]){var q=f[kd.Bf]?Md:
c.xi,t=g,u=h;if(!q[a]){e=cb(e);var v=jm(a,q,e);g=v.onSuccess;h=v.onFailure}return function(){q[a](t,u)}}return e}function jm(a,b,c){var d=[],e=[];b[a]=km(d,e,c);return{onSuccess:function(){b[a]=lm;for(var f=0;f<d.length;f++)d[f]()},onFailure:function(){b[a]=mm;for(var f=0;f<e.length;f++)e[f]()}}}function km(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function lm(a){a()}function mm(a,b){b()};var pm=function(a,b){for(var c=[],d=0;d<Ld.length;d++)if(a[d]){var e=Ld[d];var f=ll(b.Sa);try{var g=hm(d,{onSuccess:f,onFailure:f,terminate:f},b,d);if(g){var h=c,l=h.push,m=d,p=e["function"];if(!p)throw"Error: No function name given for function call.";var r=Nd[p];l.call(h,{mg:m,eg:r?r.priorityOverride||0:0,Xc:g})}else nm(d,b),f()}catch(u){f()}}var q=b.Sa;q.O=!0;q.o>=q.s&&kl(q);c.sort(om);for(var t=0;t<c.length;t++)c[t].Xc();
return 0<c.length};function om(a,b){var c,d=b.eg,e=a.eg;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.mg,h=b.mg;f=g>h?1:g<h?-1:0}return f}function nm(a,b){if(!am)return;var c=function(d){var e=b.qe(Ld[d])?"3":"4",f=Td(Ld[d][kd.If],b,[]);f&&f.length&&c(f[0].index);bm(b.id,Ld[d],e);var g=Td(Ld[d][kd.Kf],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var qm=!1,wm=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(qm)return!1;qm=!0;}var f=Xk(b),g=!1;if(!f.active){if("gtm.js"!==c)return!1;g=!0;f=Xk(Number.MAX_SAFE_INTEGER)}am&&
!Rl[b]&&Nl!==b&&(Jl(),Nl=b,Ul=Pl="",Yl[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,Ml());var h=a.eventCallback,l=a.eventTimeout,m={id:b,name:c,qe:Vk(f.isAllowed),xi:[],bg:function(){Df(6)},Pf:rm(b),Sa:new hl(h,l)};m.Of=sm();tm(b,m.Sa);var p=fe(m);
g&&(p=um(p));var r=pm(p,m);"gtm.js"!==c&&"gtm.sync"!==c||xl(ke.J);switch(c){case "gtm.init":r&&Df(20)}return vm(p,r)};function rm(a){return function(b){am&&(Eb(b)||em(a,"input",b))}}function tm(a,b){qi(a,"event",1);qi(a,"ecommerce",1);qi(a,"gtm");qi(a,"eventModel");}
function sm(){var a={};a.event=pi("event",1);a.ecommerce=pi("ecommerce",1);a.gtm=pi("gtm");a.eventModel=pi("eventModel");return a}function um(a){for(var b=[],c=0;c<a.length;c++)a[c]&&Uh[String(Ld[c][kd.Ya])]&&(b[c]=!0);return b}function vm(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Ld[c]&&!Vh[String(Ld[c][kd.Ya])])return!0;return!1}function xm(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return qh(""+c+b).href}}function ym(a,b){return zm()?xm(a,b):void 0}function zm(){var a=!1;return a};var Am=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.remoteConfig={};this.globalConfig={};this.onSuccess=function(){};this.onFailure=function(){};this.setContainerTypeLoaded=function(){};this.getContainerTypeLoaded=function(){};this.eventId=void 0;this.isGtmEvent=!1},Bm=function(a){var b=new Am;b.eventModel=a;return b},Cm=function(a,b){a.targetConfig=b;return a},Dm=function(a,b){a.containerConfig=b;return a},Em=function(a,b){a.remoteConfig=b;return a},Fm=function(a,
b){a.globalConfig=b;return a},Gm=function(a,b){a.onSuccess=b;return a},Hm=function(a,b){a.setContainerTypeLoaded=b;return a},Im=function(a,b){a.getContainerTypeLoaded=b;return a},Jm=function(a,b){a.onFailure=b;return a};
Am.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.remoteConfig[a])return this.remoteConfig[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Km=function(a){function b(e){Ra(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Ra(c,function(e){d.push(e)});return d};var Lm;if(3===ke.Oc.length)Lm="g";else{var Mm="G";Lm=Mm}
var Nm={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Lm,OPT:"o"},Om=function(a){var b=ke.J.split("-"),c=b[0].toUpperCase(),d=Nm[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===ke.Oc.length){var g="w";f="2"+g}else f="";return f+d+ke.Oc+e};var Pm=function(a,b){a.addEventListener&&a.addEventListener.call(a,"message",b,!1)};var Qm=function(){return Tf("iPhone")&&!Tf("iPod")&&!Tf("iPad")};Tf("Opera");Tf("Trident")||Tf("MSIE");Tf("Edge");!Tf("Gecko")||-1!=Qf.toLowerCase().indexOf("webkit")&&!Tf("Edge")||Tf("Trident")||Tf("MSIE")||Tf("Edge");-1!=Qf.toLowerCase().indexOf("webkit")&&!Tf("Edge")&&Tf("Mobile");Tf("Macintosh");Tf("Windows");Tf("Linux")||Tf("CrOS");var Rm=na.navigator||null;Rm&&(Rm.appVersion||"").indexOf("X11");Tf("Android");Qm();Tf("iPad");Tf("iPod");Qm()||Tf("iPad")||Tf("iPod");Qf.toLowerCase().indexOf("kaios");var Sm=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null};var Tm=function(){};var Um=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},Vm=function(a,b){this.o=a;this.g=null;this.D={};this.O=0;this.N=void 0===b?500:b;this.s=null};ma(Vm,Tm);
var Xm=function(a){return"function"===typeof a.o.__tcfapi||null!=Wm(a)};
Vm.prototype.addEventListener=function(a){var b={},c=Jf(function(){return a(b)}),d=0;-1!==this.N&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.N));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=Um(b),g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{Ym(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};Vm.prototype.removeEventListener=function(a){a&&a.listenerId&&Ym(this,"removeEventListener",null,a.listenerId)};
var $m=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var l;if(0===h)if(a.purpose&&a.vendor){var m=Zm(a.vendor.consents,void 0===d?"755":d);l=m&&"1"===b&&a.purposeOneTreatment&&("DE"===a.publisherCC||vg(Ff)&&"CH"===a.publisherCC)?!0:m&&Zm(a.purpose.consents,b)}else l=!0;else l=
1===h?a.purpose&&a.vendor?Zm(a.purpose.legitimateInterests,b)&&Zm(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},Zm=function(a,b){return!(!a||!a[b])},Ym=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.o.__tcfapi){var e=a.o.__tcfapi;e(b,2,c,d)}else if(Wm(a)){an(a);var f=++a.O;a.D[f]=c;if(a.g){var g={};a.g.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},Wm=function(a){if(a.g)return a.g;a.g=Sm(a.o,"__tcfapiLocator");return a.g},
an=function(a){a.s||(a.s=function(b){try{var c;c=("string"===typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.D[c.callId](c.returnValue,c.success)}catch(d){}},Pm(a.o,a.s))};var bn=!0;bn=!1;var cn={1:0,3:0,4:0,7:3,9:3,10:3};function dn(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var en=dn("",550),fn=dn("",500);function gn(){var a=Sh.tcf||{};return Sh.tcf=a}
var hn=function(a,b){this.s=a;this.g=b;this.o=ab();},jn=function(a){},kn=function(a){},qn=function(){var a=gn(),b=new Vm(E,bn?3E3:-1),c=new hn(b,a);if((ln()?!0===E.gtag_enable_tcf_support:!1!==E.gtag_enable_tcf_support)&&!a.active&&("function"===typeof E.__tcfapi||Xm(b))){a.active=!0;a.mc={};mn();var d=null;bn?d=E.setTimeout(function(){nn(a);on(a);d=null},fn):a.tcString="tcunavailable";try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)nn(a),on(a),jn(c);
else{var f;a.gdprApplies=e.gdprApplies;if(!1===e.gdprApplies)f=pn(),b.removeEventListener(e);else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in cn)if(cn.hasOwnProperty(h))if("1"===h){var l,m=e,p=!0;p=void 0===p?!1:p;var r;var q=m;!1===q.gdprApplies?r=!0:(void 0===q.internalErrorState&&(q.internalErrorState=Um(q)),r="error"===q.cmpStatus||0!==q.internalErrorState||"loaded"===q.cmpStatus&&("tcloaded"===q.eventStatus||"useractioncomplete"===
q.eventStatus)?!0:!1);l=r?!1===m.gdprApplies||"tcunavailable"===m.tcString||void 0===m.gdprApplies&&!p||"string"!==typeof m.tcString||!m.tcString.length?!0:$m(m,"1",0):!1;g["1"]=l}else g[h]=$m(e,h,cn[h]);f=g}f&&(a.tcString=e.tcString||"tcempty",a.mc=f,on(a),jn(c))}}),kn(c)}catch(e){d&&(clearTimeout(d),d=null),nn(a),on(a)}}};function nn(a){a.type="e";a.tcString="tcunavailable";bn&&(a.mc=pn())}function mn(){var a={},b=(a.ad_storage="denied",a.wait_for_update=en,a);Qg(b)}
var ln=function(){var a=!1;a=!0;return a};function pn(){var a={},b;for(b in cn)cn.hasOwnProperty(b)&&(a[b]=!0);return a}function on(a){var b={},c=(b.ad_storage=a.mc["1"]?"granted":"denied",b);rn();Rg(c,0)}
var sn=function(){var a=gn();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},rn=function(){var a=gn();return a.active?a.tcString||"":""},tn=function(){var a=gn();return a.active&&void 0!==a.gdprApplies?a.gdprApplies?"1":"0":""},un=function(a){if(!cn.hasOwnProperty(String(a)))return!0;var b=gn();return b.active&&b.mc?!!b.mc[String(a)]:!0};var vn=!1;function wn(a){var b=String(E.location).split(/[?#]/)[0],c=ke.vg||E._CONSENT_MODE_SALT,d;if(a){var e;if(c){var f=b+a+c,g=1,h,l,m;if(f)for(g=0,l=f.length-1;0<=l;l--)m=f.charCodeAt(l),g=(g<<6&268435455)+m+(m<<14),h=g&266338304,g=0!=h?g^h>>21:g;e=String(g)}else e="0";d=e}else d="";return d}
function xn(a){function b(u){var v;Sh.reported_gclid||(Sh.reported_gclid={});v=Sh.reported_gclid;var x;x=vn&&g&&(!Gg()||Sg(L.C))?l+"."+(f.prefix||"_gcl")+(u?"gcu":"gcs"):l+(u?"gcu":"gcs");if(!v[x]){v[x]=!0;var z=[],w={},y=function(R,Q){Q&&(z.push(R+"="+encodeURIComponent(Q)),w[R]=!0)},B="https://www.google.com";if(Gg()){var C=Sg(L.C);y("gcs",Tg());u&&y("gcu","1");Hg()&&y("gcd","G1"+Og(Eg));
Sh.dedupe_gclid||(Sh.dedupe_gclid=""+Ni());y("rnd",Sh.dedupe_gclid);if((!l||m&&"aw.ds"!==m)&&Sg(L.C)){var D=Pj("_gcl_aw");y("gclaw",D.join("."))}y("url",String(E.location).split(/[?#]/)[0]);y("dclid",yn(d,p));var H=!1;H=!0;C||!d&&!H||(B="https://pagead2.googlesyndication.com")}
y("gdpr_consent",rn()),y("gdpr",tn());"1"===vj(!1)._up&&y("gtm_up","1");y("gclid",yn(d,l));y("gclsrc",m);if(!(w.gclid||w.dclid||w.gclaw)&&(y("gbraid",yn(d,r)),!w.gbraid&&Gg()&&Sg(L.C))){var F=Pj("_gcl_gb");y("gclgb",F.join("."))}y("gtm",Om(!e));vn&&g&&Sg(L.C)&&(Yi(f||{}),y("auid",Ui[Vi(f.prefix)]||""));
a.Tf&&y("did",a.Tf);var S=B+"/pagead/landing?"+z.join("&");sg(S)}}var c=!!a.ae,d=!!a.ya,e=a.U,f=void 0===a.Uc?{}:a.Uc,g=void 0===a.ad?!0:a.ad,h=Vj(),l=h.gclid||"",m=h.gclsrc,p=h.dclid||"",r=h.gbraid||"",q=!c&&((!l||m&&"aw.ds"!==m?!1:!0)||r),t=Gg();if(q||t)t?Wg(function(){b();Sg(L.C)||Vg(function(u){return b(!0,u.wh)},L.C)},[L.C]):b()}function yn(a,b){var c=a&&!Sg(L.C);return b&&c?"0":b}var xo=function(){var a=!0;un(7)&&un(9)&&un(10)||(a=!1);var b=!0;b=!1;b&&!wo()&&(a=!1);return a},wo=function(){var a=!0;un(3)&&un(4)||(a=!1);return a};var Vo=!1;function Wo(){var a=Sh;return a.gcq=a.gcq||new Xo}
var Yo=function(a,b,c){Wo().register(a,b,c)},Zo=function(a,b,c,d){Wo().push("event",[b,a],c,d)},$o=function(a,b){Wo().push("config",[a],b)},ap=function(a,b,c,d){Wo().push("get",[a,b],c,d)},bp=function(a){return Wo().getRemoteConfig(a)},cp={},dp=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.remoteConfig={};this.o=null;this.g=!1},ep=function(a,b,c,d,e){this.type=a;this.s=b;this.U=c||"";this.g=d;this.o=e},Xo=function(){this.D={};this.o={};this.g=[];this.s={AW:!1,UA:!1};this.enableDeferrableCommandAfterConfig=
Vo},fp=function(a,b){var c=uk(b);return a.D[c.containerId]=a.D[c.containerId]||new dp},gp=function(a,b,c){if(b){var d=uk(b);if(d&&1===fp(a,b).status){fp(a,b).status=2;var e={};am&&(e.timeoutId=E.setTimeout(function(){Df(38);Ml()},3E3));a.push("require",[e],d.containerId);cp[d.containerId]=ab();if(xk()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=E.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=ym(c,g)||h;ig(l)}}}},hp=function(a,b,c,d){if(d.U){var e=fp(a,d.U),f=e.o;if(f){var g=J(c),h=J(e.targetConfig[d.U]),l=J(e.containerConfig),m=J(e.remoteConfig),p=J(a.o),r=ki("gtm.uniqueEventId"),q=uk(d.U).prefix,t=Im(Hm(Jm(Gm(Fm(Em(Dm(Cm(Bm(g),h),l),m),p),function(){
dm(r,q,"2");}),function(){dm(r,q,"3");}),function(u,v){a.s[u]=v}),function(u){return a.s[u]});try{dm(r,q,"1");f(d.U,b,d.s,t)}catch(u){dm(r,q,"4");}}}};k=Xo.prototype;
k.register=function(a,b,c){var d=fp(this,a);if(3!==d.status){d.o=b;d.status=3;if(c){J(d.remoteConfig,c);d.remoteConfig=c}var e=uk(a),f=cp[e.containerId];if(void 0!==f){var g=Sh[e.containerId].bootstrap,h=e.prefix.toUpperCase();Sh[e.containerId]._spx&&(h=h.toLowerCase());var l=ki("gtm.uniqueEventId"),m=h,p=ab()-g;if(am&&!Rl[l]){l!==Nl&&(Jl(),Nl=l);var r=m+"."+Math.floor(g-
f)+"."+Math.floor(p);Vl=Vl?Vl+","+r:"&cl="+r}delete cp[e.containerId]}this.flush()}};k.push=function(a,b,c,d){var e=Math.floor(ab()/1E3);gp(this,c,b[0][L.la]||this.o[L.la]);Vo&&c&&fp(this,c).g&&(d=!1);this.g.push(new ep(a,e,c,b,d));d||this.flush()};k.insert=function(a,b,c){var d=Math.floor(ab()/1E3);0<this.g.length?this.g.splice(1,0,new ep(a,d,c,b,!1)):this.g.push(new ep(a,d,c,b,!1))};
k.flush=function(a){for(var b=this,c=[],d=!1,e={};this.g.length;){var f=this.g[0];if(f.o)Vo?!f.U||fp(this,f.U).g?(f.o=!1,this.g.push(f)):c.push(f):(f.o=!1,this.g.push(f));else switch(f.type){case "require":if(3!==fp(this,f.U).status&&!a){Vo&&this.g.push.apply(this.g,c);return}am&&E.clearTimeout(f.g[0].timeoutId);break;case "set":Ra(f.g[0],function(q,t){J(ib(q,t),b.o)});break;case "config":e.za={};Ra(f.g[0],function(q){return function(t,u){J(ib(t,u),q.za)}}(e));var g=!!e.za[L.Jc];delete e.za[L.Jc];
var h=fp(this,f.U),l=uk(f.U),m=l.containerId===l.id;g||(m?h.containerConfig={}:h.targetConfig[f.U]={});h.g&&g||hp(this,L.ja,e.za,f);h.g=!0;delete e.za[L.Rb];m?J(e.za,h.containerConfig):J(e.za,h.targetConfig[f.U]);Vo&&(d=!0);break;case "event":e.uc={};Ra(f.g[0],function(q){return function(t,u){J(ib(t,u),q.uc)}}(e));hp(this,f.g[1],e.uc,f);break;case "get":var p={},r=(p[L.Pa]=f.g[0],p[L.Oa]=f.g[1],p);hp(this,L.Ba,r,f)}this.g.shift();e={za:e.za,uc:e.uc}}Vo&&(this.g.push.apply(this.g,c),d&&this.flush())};
k.getRemoteConfig=function(a){return fp(this,a).remoteConfig};function ip(a,b){var c=this;};function jp(a,b,c){};function kp(a,b,c,d){};function lp(a){};var mp=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":tg(a,"className"),"gtm.elementId":a["for"]||og(a,"id")||"","gtm.elementTarget":a.formTarget||tg(a,"target")||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||tg(a,"href")||a.src||a.code||a.codebase||"";return d},np=function(a){Sh.hasOwnProperty("autoEventsSettings")||(Sh.autoEventsSettings={});var b=Sh.autoEventsSettings;b.hasOwnProperty(a)||(b[a]=
{});return b[a]},op=function(a,b,c){np(a)[b]=c},pp=function(a,b,c,d){var e=np(a),f=bb(e,b,d);e[b]=c(f)},qp=function(a,b,c){var d=np(a);return bb(d,b,c)};var rp={},sp=[];
var zp=function(a,b){};

function Cp(a,b){};var Dp=/^\s*$/,Ep,Fp=!1;
function Qp(a,b){}function Rp(a,b,c){};var Sp=!!E.MutationObserver,Tp=void 0,Up=function(a){if(!Tp){var b=function(){var c=M.body;if(c)if(Sp)(new MutationObserver(function(){for(var e=0;e<Tp.length;e++)P(Tp[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;mg(c,"DOMNodeInserted",function(){d||(d=!0,P(function(){d=!1;for(var e=0;e<Tp.length;e++)P(Tp[e])}))})}};Tp=[];M.body?b():P(b)}Tp.push(a)};
var Vp=function(a,b,c){function d(){var g=a();f+=e?(ab()-e)*g.playbackRate/1E3:0;e=ab()}var e=0,f=0;return{createEvent:function(g,h,l){var m=a(),p=m.fe,r=void 0!==l?Math.round(l):void 0!==h?Math.round(m.fe*h):Math.round(m.Sf),q=void 0!==h?Math.round(100*h):0>=p?0:Math.round(r/p*100),t=M.hidden?!1:.5<=dh(c);d();var u=void 0;void 0!==b&&(u=[b]);var v=mp(c,"gtm.video",u);v["gtm.videoProvider"]="youtube";v["gtm.videoStatus"]=g;v["gtm.videoUrl"]=m.url;v["gtm.videoTitle"]=m.title;v["gtm.videoDuration"]=
Math.round(p);v["gtm.videoCurrentTime"]=Math.round(r);v["gtm.videoElapsedTime"]=Math.round(f);v["gtm.videoPercent"]=q;v["gtm.videoVisible"]=t;return v},hg:function(){e=ab()},yb:function(){d()}}};var Wp=["www.youtube.com","www.youtube-nocookie.com"],Xp,Yp=!1,Zp=0;
function iq(a,b){}function jq(a,b){return!0};function kq(a,b,c){};function lq(a,b){var c;return c};function mq(a){};function nq(a){};var oq=!1,pq=[];function qq(){if(!oq){oq=!0;for(var a=0;a<pq.length;a++)P(pq[a])}}var rq=function(a){oq?P(a):pq.push(a)};function sq(a){K(I(this),["listener:!Fn"],arguments);lf(this,"process_dom_events","window","load");rq(Cb(a))};function tq(a){var b;return b};function uq(a,b){var c;var d=!1;var e=Bb(c,this.g,d);void 0===e&&void 0!==c&&Df(45);return e};function vq(a){var b;return b};function wq(a,b){var c=null,d=!1;return Bb(c,this.g,d)};function xq(a){var b;K(I(this),["path:!string"],arguments);lf(this,"access_globals","readwrite",a);var c=a.split("."),d=hb(c,[E,M]),e=c[c.length-1];if(void 0===d)throw Error("Path "+a+" does not exist.");var f=d[e];void 0===f&&(f=[],d[e]=f);b=function(){if(!Ja(f.push))throw Error("Object at "+a+" in window is not an array.");f.push.apply(f,Array.prototype.slice.call(arguments,0))};var g=!1;return Bb(b,this.g,g)};var yq=function(a){var b;return b};function zq(a,b){b=void 0===b?!0:b;var c;return c};function Aq(a){var b=null;return b};function Bq(a,b){var c;return c};function Cq(a,b){var c;return c};function Dq(a){var b="";return b};function Eq(a,b){var c;return c};function Fq(a){var b="";return b};function Gq(){lf(this,"get_user_agent");return E.navigator.userAgent};function Hq(a,b){};var Iq={};function Jq(a,b,c,d,e,f){f?e[f]?(e[f][0].push(c),e[f][1].push(d)):(e[f]=[[c],[d]],ig(a,function(){for(var g=e[f][0],h=0;h<g.length;h++)P(g[h]);g.push=function(l){P(l);return 0}},function(){for(var g=e[f][1],h=0;h<g.length;h++)P(g[h]);e[f]=null},b)):ig(a,c,d,b)}
function Kq(a,b,c,d){K(I(this),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);lf(this,"inject_script",a);var e=this.g;Jq(a,void 0,function(){b&&b.o(e)},function(){c&&c.o(e)},Iq,d);}var Lq=Object.freeze({dl:1,id:1}),Mq={};
function Nq(a,b,c,d){};function Oq(a){var b=!0;return b};var Pq=function(){return!1},Qq={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};function Rq(){};function Sq(a,b){var c;return c};function Tq(a){var b=void 0;return b};function Uq(a,b){var c=!1;return c};function Vq(){var a="";return a};function Wq(){var a="";return a};function Xq(){};function Yq(a,b,c,d){d=void 0===d?!1:d;};function Zq(a,b,c){};function $q(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};function ar(a){K(I(this),["consentSettings:!DustMap"],arguments);for(var b=a.Za(),c=b.length(),d=0;d<c;d++){var e=b.get(d);e!==L.nd&&lf(this,"access_consent",e,"write")}Qg(Cb(a))};function br(a,b,c){K(I(this),["path:!string","value:?*","overrideExisting:?boolean"],arguments);lf(this,"access_globals","readwrite",a);var d=!1;var e=a.split("."),f=hb(e,[E,M]),g=e.pop();if(f&&(void 0===f[g]||c))return f[g]=Cb(b,this.g,d),!0;return!1};function cr(a,b,c){}
;var dr=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};function er(a,b,c,d){var e=this;};function fr(a,b,c){}
;var gr={},hr={};gr.getItem=function(a){var b=null;return b};
gr.setItem=function(a,b){};
gr.removeItem=function(a){};gr.clear=function(){};var ir=function(a){var b;return b};function jr(a){K(I(this),["consentSettings:!DustMap"],arguments);var b=Cb(a),c;for(c in b)b.hasOwnProperty(c)&&lf(this,"access_consent",c,"write");Rg(b)};var hd=function(){var a=new yf;xk()?(a.add("injectHiddenIframe",Ha),a.add("injectScript",Ha)):(a.add("injectHiddenIframe",Hq),a.add("injectScript",Kq));var b=Zq;a.add("Math",Ze());a.add("TestHelper",Bf());a.add("addEventCallback",lp);a.add("aliasInWindow",jq);a.add("assertApi",Ve);a.add("assertThat",We);a.add("callInWindow",
lq);a.add("callLater",mq);a.add("copyFromDataLayer",uq);a.add("copyFromWindow",vq);a.add("createArgumentsQueue",wq);a.add("createQueue",xq);a.add("decodeUri",$e);a.add("decodeUriComponent",af);a.add("encodeUri",bf);a.add("encodeUriComponent",cf);a.add("fail",jf);a.add("fromBase64",yq,!("atob"in E));a.add("generateRandom",kf);a.add("getContainerVersion",mf);a.add("getCookieValues",zq);a.add("getQueryParameters",Bq);a.add("getReferrerQueryParameters",Cq);a.add("getReferrerUrl",Dq);a.add("getTimestamp",
nf);a.add("getTimestampMillis",nf);a.add("getType",of);a.add("getUrl",Fq);a.add("localStorage",Qq,!Pq());a.add("logToConsole",Rq);a.add("makeInteger",qf);a.add("makeNumber",rf);a.add("makeString",sf);a.add("makeTableMap",tf);a.add("mock",vf);a.add("parseUrl",Tq);a.add("queryPermission",Uq);a.add("readCharacterSet",Vq);a.add("readTitle",Wq);a.add("sendPixel",b);a.add("setCookie",$q);a.add("setInWindow",br);a.add("sha256",er);a.add("templateStorage",gr);a.add("toBase64",ir,!("btoa"in E));a.add("JSON",
pf(function(d){var e=this.g.g;e&&e.log.call(this,"error",d)}));var c=!1;c&&a.add("setDefaultConsentState",ar);
Af(a,"callOnWindowLoad",sq);xk()?Af(a,"internal.injectScript",
Ha):Af(a,"internal.injectScript",Nq);return function(d){var e;if(a.g.hasOwnProperty(d))e=a.get(d,this);else{var f;if(f=a.o.hasOwnProperty(d)){var g=!1,h=this.g.g;if(h){var l=h.bc();if(l){0!==l.indexOf("__cvt_")&&(g=!0);}}f=g}if(f){var m=a.o.hasOwnProperty(d)?
a.o[d]:void 0;e=m}else throw Error(d+" is not a valid API name.");}return e}};var fd,oe;
function kr(){var a=data.runtime||[],b=data.runtime_lines;fd=new dd;lr();Hd=function(e,f,g){mr(f);var h=new qb;Ra(f,function(t,u){var v=Bb(u);void 0===v&&void 0!==u&&Df(44);h.set(t,v)});fd.g.g.N=ce();var l={th:pe(e),eventId:void 0!==g?g.id:void 0,Wb:void 0!==g?function(t){return g.Sa.Wb(t)}:void 0,bc:function(){return e},log:function(){}};if(fm()){var m=gm(),
p=void 0,r=void 0;l.ra={Xb:{},Ab:function(t,u,v){1===u&&(p=t);7===u&&(r=v);m(t,u,v)},ue:uf()};l.log=function(t,u){if(p){var v=Array.prototype.slice.call(arguments,1);m(p,4,{level:t,source:r,message:v})}}}var q=gd(l,[e,h]);fd.g.g.N=void 0;q instanceof ra&&"return"===q.g&&(q=q.o);return Cb(q)};id();for(var c=0;c<a.length;c++){var d=a[c];if(!La(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&Xd(d,b[c]);fd.Xc(d)}}
function mr(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ja(b)&&(a.gtmOnSuccess=function(){P(b)});Ja(c)&&(a.gtmOnFailure=function(){P(c)})}function lr(){var a=fd;Sh.SANDBOXED_JS_SEMAPHORE=Sh.SANDBOXED_JS_SEMAPHORE||0;jd(a,function(b,c,d){Sh.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{Sh.SANDBOXED_JS_SEMAPHORE--}})}function nr(a){void 0!==a&&Ra(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");di[e]=di[e]||[];di[e].push(b)}})};var or="HA GF G UA AW DC".split(" "),pr=!1,qr={},rr=!1;function sr(a,b){var c={event:a};b&&(c.eventModel=J(b),b[L.Cd]&&(c.eventCallback=b[L.Cd]),b[L.Ec]&&(c.eventTimeout=b[L.Ec]));return c}function tr(a){a.hasOwnProperty("gtm.uniqueEventId")||Object.defineProperty(a,"gtm.uniqueEventId",{value:ei()});return a["gtm.uniqueEventId"]}
function ur(){return pr}
var xr={config:function(a){var b,c;void 0===c&&(c=ei());return b},consent:function(a){function b(){ur()&&J(a[2],{subcommand:a[1]})}if(3===a.length){Df(39);var c=ei(),d=a[1];"default"===d?(b(),Qg(a[2])):"update"===d&&(b(),Rg(a[2],c))}},event:function(a){var b=a[1];if(!(2>a.length)&&A(b)){var c;if(2<a.length){if(!Ab(a[2])&&
void 0!=a[2]||3<a.length)return;c=a[2]}var d=sr(b,c),e=void 0;void 0===e&&ei();return d}},get:function(a){},js:function(a){if(2==a.length&&a[1].getTime){rr=!0;ur();var b={event:"gtm.js","gtm.start":a[1].getTime()};return b}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=oe.o;d.g[b]?d.g[b].push(c):
d.g[b]=[c]}},set:function(a){var b;2==a.length&&Ab(a[1])?b=J(a[1]):3==a.length&&A(a[1])&&(b={},Ab(a[2])||La(a[2])?b[a[1]]=J(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},yr={policy:!0};var zr=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Br=function(a){var b=Ar(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Sr=function(a){if(Rr(a))return a;this.g=a};Sr.prototype.Nh=function(){return this.g};var Rr=function(a){return!a||"object"!==yb(a)||Ab(a)?!1:"getUntrustedUpdateValue"in a};Sr.prototype.getUntrustedUpdateValue=Sr.prototype.Nh;var Tr=[],Ur=!1,Vr=!1,Wr=!1,Xr=function(a){return E["dataLayer"].push(a)},Yr=function(a){var b=Sh["dataLayer"],c=b?b.subscribers:1,d=0,e=a;return function(){++d===c&&(e(),e=null)}};
function Zr(a){var b=a._clear;Ra(a,function(d,e){"_clear"!==d&&(b&&ni(d,void 0),ni(d,e))});$h||($h=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=ei(),a["gtm.uniqueEventId"]=c,ni("gtm.uniqueEventId",c));return wm(a)}function $r(){var a=Tr[0];if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(Sa(a)){var b=a[0];if("config"===b||"event"===b||"js"===b)return!0}return!1}
function as(){for(var a=!1;!Wr&&0<Tr.length;){var b=!1;if(b&&!Vr&&$r()){var c={};Tr.unshift((c.event=
"gtm.init",c));Vr=!0}var d=!1;if(d&&!Ur&&$r()){var e={};Tr.unshift((e.event="gtm.init_consent",e));Ur=!0}Wr=!0;delete hi.eventModel;ji();var f=Tr.shift();if(null!=f){var g=Rr(f);
if(g){var h=f;f=Rr(h)?h.getUntrustedUpdateValue():void 0;oi()}try{if(Ja(f))try{f.call(li)}catch(v){}else if(La(f)){var l=f;if(A(l[0])){var m=l[0].split("."),p=m.pop(),r=l.slice(1),q=ki(m.join("."),2);if(void 0!==q&&null!==q)try{q[p].apply(q,r)}catch(v){}}}else{if(Sa(f)){a:{var t=f;if(t.length&&A(t[0])){var u=xr[t[0]];if(u&&(!g||!yr[t[0]])){f=u(t);break a}}f=void 0}if(!f){Wr=!1;continue}}a=Zr(f)||a}}finally{g&&ji(!0)}}Wr=!1}
return!a}function bs(){var b=as();try{zr(E["dataLayer"],ke.J)}catch(c){}return b}
var ds=function(){var a=eg("dataLayer",[]),b=eg("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};fl(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});rq(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<Sh.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new Sr(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);Tr.push.apply(Tr,e);if(300<
this.length)for(Df(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return as()&&h};var d=a.slice(0);Tr.push.apply(Tr,d);if(cs()){P(bs)}},cs=function(){var a=!0;return a};var es={};es.Kc=new String("undefined");
var fs=function(a){this.g=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===es.Kc?b:a[d]);return c.join("")}};fs.prototype.toString=function(){return this.g("undefined")};fs.prototype.valueOf=fs.prototype.toString;es.mh=fs;es.Vd={};es.Bh=function(a){return new fs(a)};var gs={};es.li=function(a,b){var c=ei();gs[c]=[a,b];return c};es.Rf=function(a){var b=a?0:1;return function(c){var d=gs[c];if(d&&"function"===typeof d[b])d[b]();gs[c]=void 0}};es.Rh=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};es.hi=function(a){if(a===es.Kc)return a;var b=ei();es.Vd[b]=a;return'google_tag_manager["'+ke.J+'"].macro('+b+")"};es.bi=function(a,b,c){a instanceof es.mh&&(a=a.g(es.li(b,c)),b=Ha);return{Oh:a,onSuccess:b}};var hs=["input","select","textarea"],is=["button","hidden","image","reset","submit"],js=function(a){var b=a.tagName.toLowerCase();return!Na(hs,function(c){return c===b})||"input"===b&&Na(is,function(c){return c===a.type.toLowerCase()})?!1:!0},ks=function(a){return a.form?a.form.tagName?a.form:M.getElementById(a.form):rg(a,["form"],100)},ls=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(js(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var ws=E.clearTimeout,xs=E.setTimeout,U=function(a,b,c){if(xk()){b&&P(b)}else return ig(a,b,c)},ys=function(){return new Date},zs=function(){return E.location.href},As=function(a){return oh(qh(a),"fragment")},Bs=function(a){return ph(qh(a))},Cs=function(a,b){return ki(a,b||2)},Ds=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Xr(a)):d=Xr(a);return d},Es=function(a,b){E[a]=b},V=function(a,b,c){b&&
(void 0===E[a]||c&&!E[a])&&(E[a]=b);return E[a]},Fs=function(a,b,c){return Bi(a,b,void 0===c?!0:!!c)},Gs=function(a,b,c){return 0===Ki(a,b,c)},Hs=function(a,b){if(xk()){b&&P(b)}else kg(a,b)},Is=function(a){return!!qp(a,"init",!1)},Js=function(a){op(a,"init",!0)},Ks=function(a){var b=Yh+"?id="+encodeURIComponent(a)+"&l=dataLayer";U(zk("https://","http://",b))},Ls=function(a,b,c){am&&(Eb(a)||em(c,b,a))};
var Ms=es.bi;function it(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var jt=new Pa;function kt(a,b,c){var d=c?"i":void 0;try{var e=String(b)+d,f=jt.get(e);f||(f=new RegExp(b,d),jt.set(e,f));return f.test(a)}catch(g){return!1}}
function lt(a,b){function c(g){var h=qh(g),l=oh(h,"protocol"),m=oh(h,"host",!0),p=oh(h,"port"),r=oh(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,m,p,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function mt(a){return nt(a)?1:0}
function nt(a){var b=a.arg0,c=a.arg1;if(a.any_of&&La(c)){for(var d=0;d<c.length;d++){var e=J(a,{});J({arg1:c[d],any_of:void 0},e);if(mt(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(m){}}f=!1}return f;case "_ew":return it(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=Ma(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":return kt(b,c,a.ignore_case);case "_sw":return 0==String(b).indexOf(String(c));case "_um":return lt(b,c)}return!1};var ot=encodeURI,W=encodeURIComponent,pt=lg;var qt=function(a,b){if(!a)return!1;var c=oh(qh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var rt=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};function Zu(){return E.gaGlobal=E.gaGlobal||{}}var $u=function(){var a=Zu();a.hid=a.hid||Oa();return a.hid},av=function(a,b){var c=Zu();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var xv=function(){if(Ja(E.__uspapi)){var a="";try{E.__uspapi("getUSPData",1,function(b,c){if(c&&b){var d=b.uspString;d&&/^[\da-zA-Z-]{1,20}$/.test(d)&&(a=d)}})}catch(b){}return a}};var Rv=window,Sv=document,Tv=function(a){var b=Rv._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Rv["ga-disable-"+a])return!0;try{var c=Rv.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=xi("AMP_TOKEN",String(Sv.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Sv.getElementById("__gaOptOutExtension")?!0:!1};var Uv={};function Xv(a){delete a.eventModel[L.Rb];Zv(a.eventModel)}var Zv=function(a){Ra(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[L.Fa]||{};Ra(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var bw=function(a,b,c){Zo(b,c,a)},cw=function(a,b,c){Zo(b,c,a,!0)},iw=function(a,b){};
function dw(a,b){}var X={h:{}};
X.h.vis=["google"],function(){var a={};(function(b){X.__vis=b;X.__vis.i="vis";X.__vis.m=!0;X.__vis.priorityOverride=0})(function(b){var c,d=[];d.push("CSS"===b.vtp_selectorType?b.vtp_elementSelector:"#"+b.vtp_elementId);d.push(b.vtp_outputMethod);"BOOLEAN"==b.vtp_outputMethod&&d.push(b.vtp_onScreenRatio);c=d.join("&");var e=a[c],f=Number(ys());if(e&&250>f-e.time)return e.value;e={time:f,value:null};var g=b.vtp_outputMethod,h=null;if("CSS"==b.vtp_selectorType)try{var l=Yg(b.vtp_elementSelector);l&&
0<l.length&&(h=l[0])}catch(p){h=null}else h=M.getElementById(b.vtp_elementId);if(h)switch(g){case "BOOLEAN":var m=(Number(b.vtp_onScreenRatio)||50)/100;e.value=dh(h)>=m&&!bh(h);break;case "PERCENT":e.value=0,bh(h)||(e.value=Math.round(1E3*dh(h))/10)}a[c]=e;return e.value})}();
X.h.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(w){for(var y=[],B=w.split(","),C=0;C<B.length;C++){var D=Number(B[C]);if(isNaN(D))return[];p.test(B[C])||y.push(D)}return y}function c(){var w=0,y=0;return function(){var B=ch(),C=B.height;w=Math.max(v.scrollLeft+B.width,w);y=Math.max(v.scrollTop+C,y);return{de:w,ee:y}}}function d(){t=V("self");
u=t.document;v=u.scrollingElement||u.body&&u.body.parentNode;z=c()}function e(w,y,B,C){var D=l(y),H={},F;for(F in D){H.kb=F;if(D.hasOwnProperty(H.kb)){var S=Number(H.kb);w<S||(Ds({event:"gtm.scrollDepth","gtm.scrollThreshold":S,"gtm.scrollUnits":B.toLowerCase(),"gtm.scrollDirection":C,"gtm.triggers":D[H.kb].join(",")}),pp("sdl",y,function(R){return function(Q){delete Q[R.kb];return Q}}(H),{}))}H={kb:H.kb}}}function f(){var w=z(),y=w.de,B=w.ee,C=y/v.scrollWidth*100,D=B/v.scrollHeight*100;e(y,"horiz.pix",
r.Mc,q.vf);e(C,"horiz.pct",r.Lc,q.vf);e(B,"vert.pix",r.Mc,q.Lf);e(D,"vert.pct",r.Lc,q.Lf);op("sdl","pending",!1)}function g(){var w=250,y=!1;u.scrollingElement&&u.documentElement&&t.addEventListener&&(w=50,y=!0);var B=0,C=!1,D=function(){C?B=xs(D,w):(B=0,f(),Is("sdl")&&!a()&&(ng(t,"scroll",H),ng(t,"resize",H),op("sdl","init",!1)));C=!1},H=function(){y&&z();B?C=!0:(B=xs(D,w),op("sdl","pending",!0))};return H}function h(w,y,B){if(y){var C=b(String(w));pp("sdl",B,function(D){for(var H=0;H<C.length;H++){var F=
String(C[H]);D.hasOwnProperty(F)||(D[F]=[]);D[F].push(y)}return D},{})}}function l(w){return qp("sdl",w,{})}function m(w){P(w.vtp_gtmOnSuccess);var y=w.vtp_uniqueTriggerId,B=w.vtp_horizontalThresholdsPixels,C=w.vtp_horizontalThresholdsPercent,D=w.vtp_verticalThresholdUnits,H=w.vtp_verticalThresholdsPixels,F=w.vtp_verticalThresholdsPercent;switch(w.vtp_horizontalThresholdUnits){case r.Mc:h(B,y,"horiz.pix");break;case r.Lc:h(C,y,"horiz.pct")}switch(D){case r.Mc:h(H,y,"vert.pix");break;case r.Lc:h(F,
y,"vert.pct")}Is("sdl")?qp("sdl","pending")||(x||(d(),x=!0),P(function(){return f()})):(d(),x=!0,v&&(Js("sdl"),op("sdl","pending",!0),P(function(){f();if(a()){var S=g();mg(t,"scroll",S);mg(t,"resize",S)}else op("sdl","init",!1)})))}var p=/^\s*$/,r={Lc:"PERCENT",Mc:"PIXELS"},q={Lf:"vertical",vf:"horizontal"},t,u,v,x=!1,z;(function(w){X.__sdl=w;X.__sdl.i="sdl";X.__sdl.m=!0;X.__sdl.priorityOverride=0})(function(w){w.vtp_triggerStartOption?m(w):rq(function(){m(w)})})}();

X.h.jsm=["customScripts"],function(){(function(a){X.__jsm=a;X.__jsm.i="jsm";X.__jsm.m=!0;X.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=V("google_tag_manager");var d=c&&c.e&&c.e(b);Ls(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();
X.h.sp=["google"],function(){var a=!1;(function(b){X.__sp=b;X.__sp.i="sp";X.__sp.m=!0;X.__sp.priorityOverride=0})(function(b){function c(){var r={};"DATA_LAYER"==b.vtp_customParamsFormat?r=b.vtp_dataLayerVariable:"USER_SPECIFIED"==b.vtp_customParamsFormat&&(r=rt(b.vtp_customParams,"key","value"));return r}if(a){}else{var g=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?
"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",h=b.vtp_gtmOnFailure,l=function(){var r=V("google_trackConversion");if(Ja(r)){var q=c(),t={google_conversion_id:b.vtp_conversionId,google_conversion_label:b.vtp_conversionLabel,google_custom_params:q,google_remarketing_only:!0,onload_callback:b.vtp_gtmOnSuccess,google_gtm:Om()};b.vtp_enableDynamicRemarketing&&(b.vtp_eventName&&(q.event=b.vtp_eventName),b.vtp_eventValue&&(t.google_conversion_value=
b.vtp_eventValue),b.vtp_eventItems&&(t.google_gtag_event_data={items:b.vtp_eventItems}));var u=function(v,x){(t.google_additional_params=t.google_additional_params||{})[v]=x};b.vtp_rdp&&(t.google_restricted_data_processing=!0);b.vtp_userId&&(t.google_user_id=b.vtp_userId);u("gdpr_consent",rn()),u("gdpr",tn());r(t)||h()}else h()},m=function(){U(g,l,h)},p=!1;Gg()&&!p?Wg(function(){Sg(L.C)?m():Ng(m,L.C)},[L.C]):(ml(),m())}});}();
X.h.c=["google"],function(){(function(a){X.__c=a;X.__c.i="c";X.__c.m=!0;X.__c.priorityOverride=0})(function(a){Ls(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
X.h.e=["google"],function(){(function(a){X.__e=a;X.__e.i="e";X.__e.m=!0;X.__e.priorityOverride=0})(function(a){var b=String(ri(a.vtp_gtmEventId,"event"));a.vtp_gtmCachedValues&&(b=String(a.vtp_gtmCachedValues.event));return b})}();
X.h.f=["google"],function(){(function(a){X.__f=a;X.__f.i="f";X.__f.m=!0;X.__f.priorityOverride=0})(function(a){var b=Cs("gtm.referrer",1)||M.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?oh(qh(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Bs(String(b)):String(b)})}();
X.h.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=mp(c,"gtm.click");Ds(d)}}(function(b){X.__cl=b;X.__cl.i="cl";X.__cl.m=!0;X.__cl.priorityOverride=0})(function(b){if(!Is("cl")){var c=V("document");mg(c,"click",a,!0);Js("cl")}P(b.vtp_gtmOnSuccess)})}();X.h.k=["google"],function(){(function(a){X.__k=a;X.__k.i="k";X.__k.m=!0;X.__k.priorityOverride=0})(function(a){return Fs(a.vtp_name,Cs("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

X.h.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){X.__access_globals=b;X.__access_globals.i="access_globals";X.__access_globals.m=!0;X.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(p,r,q){if(!A(q))throw d(p,{},"Key must be a string.");if("read"===r){if(-1<Ma(e,q))return}else if("write"===r){if(-1<Ma(f,q))return}else if("readwrite"===r){if(-1<Ma(f,q)&&-1<Ma(e,q))return}else if("execute"===r){if(-1<Ma(g,q))return}else throw d(p,{},"Operation must be either 'read', 'write', or 'execute', was "+r);throw d(p,{},"Prohibited "+r+" on global variable: "+
q+".");},S:a}})}();X.h.r=["google"],function(){(function(a){X.__r=a;X.__r.i="r";X.__r.m=!0;X.__r.priorityOverride=0})(function(a){return Oa(a.vtp_min,a.vtp_max)})}();
X.h.tg=["google"],function(){function a(g){f.push(g);1<f.length||P(function(){var h=f.join(",");f=[];Ds({event:"gtm.triggerGroup","gtm.triggers":h})})}function b(g,h){var l=c[h],m=l.indexOf(g);-1!==m&&(l.splice(m,1),l.length||a(h))}var c={},d={},e=[],f=[];(function(g){X.__tg=g;X.__tg.i="tg";X.__tg.m=!0;X.__tg.priorityOverride=0})(function(g){P(g.vtp_gtmOnSuccess);var h=g.vtp_uniqueTriggerId,l=g.vtp_triggerIds,m=g.vtp_firingId;
if(g.vtp_isListeningTag){var p=d[m];p?b(m,p):e.push(m)}else{c[h]=l;for(var r=0,q;q=l[r];r++)d[q]=h;for(var t=0;t<e.length;t++)b(e[t],h)}})}();
X.h.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){X.__u=b;X.__u.i="u";X.__u.m=!0;X.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Cs("gtm.url",1))||zs();var d=b[a("vtp_component")];if(!d||"URL"==d)return Bs(String(c));var e=qh(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?La(h)?m=h:m=String(h).replace(/\s+/g,
"").split(","):m=[String(h)];for(var p=0;p<m.length;p++){var r=oh(e,"QUERY",void 0,void 0,m[p]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=oh(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
X.h.v=["google"],function(){(function(a){X.__v=a;X.__v.i="v";X.__v.m=!0;X.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Cs(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;Ls(d,"v",a.vtp_gtmEventId);return d})}();
X.h.ua=["google"],function(){function a(q){return Sg(q)}function b(q,t,u){var v=!1;if(Gg()&&!v&&!e[q]){var x=!Sg(L.H),z=function(){var w=rl(),y="gtm"+ei(),B=p(t);B["&gtm"]=Om(!0);var C={name:y};m(B,C,!0);var D=void 0,H=C._useUp;w(function(){var F=w.getByName(u);F&&(D=F.get("clientId"))});
w("create",q,C);x&&Sg(L.H)&&(x=!1,w(function(){var F=w.getByName(y);!F||F.get("clientId")===D&&H||(B["&gcs"]=Tg(),B["&gcu"]="1",F.set(B),F.send("pageview"))}));w(function(){w.remove(y)})};Ng(z,L.H);Ng(z,L.C);e[q]=!0}}var c,d={},e={},f=!0;var g={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},h={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,
allowAdPersonalizationSignals:!0,_cd2l:!0},l={urlPassthrough:!0},m=function(q,t,u){var v=0;if(q)for(var x in q)if(!l[x]&&q.hasOwnProperty(x)&&(u&&g[x]||!u&&void 0===g[x])){var z=h[x]?Wa(q[x]):q[x];"anonymizeIp"!=x||z||(z=void 0);t[x]=z;v++}return v},p=function(q){var t={};q.vtp_gaSettings&&J(rt(q.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),t);J(rt(q.vtp_fieldsToSet,"fieldName","value"),t);Sg(L.H)||(t.storage="none");Sg(L.C)||(t.allowAdFeatures=!1,t.storeGac=!1);xo()||(t.allowAdFeatures=!1);
wo()||(t.allowAdPersonalizationSignals=!1);q.vtp_transportUrl&&(t._x_19=q.vtp_transportUrl);if(Wa(t.urlPassthrough)){t._useUp=!0;var u=!1;Gg()&&!u&&(t._cs=
a)}return t},r=function(q){function t(ya,da){void 0!==da&&F("set",ya,da)}var u={},v={},x={},z={};if(q.vtp_gaSettings){var w=q.vtp_gaSettings;J(rt(w.vtp_contentGroup,"index","group"),v);J(rt(w.vtp_dimension,"index","dimension"),x);J(rt(w.vtp_metric,"index","metric"),z);var y=J(w);y.vtp_fieldsToSet=void 0;y.vtp_contentGroup=void 0;y.vtp_dimension=void 0;y.vtp_metric=void 0;q=J(q,y)}J(rt(q.vtp_contentGroup,"index","group"),v);J(rt(q.vtp_dimension,
"index","dimension"),x);J(rt(q.vtp_metric,"index","metric"),z);var B=p(q),C=tl(q.vtp_functionName);if(Ja(C)){var D="",H="";q.vtp_setTrackerName&&"string"==typeof q.vtp_trackerName?""!==q.vtp_trackerName&&(H=q.vtp_trackerName,D=H+"."):(H="gtm"+ei(),D=H+".");var F=function(ya){var da=[].slice.call(arguments,0);da[0]=D+da[0];C.apply(window,da)},S=function(ya,da){return void 0===da?da:ya(da)},R=function(ya,da){if(da)for(var vb in da)da.hasOwnProperty(vb)&&F("set",ya+vb,da[vb])},Q=function(){
var ya={transaction_id:"id",affiliation:"affiliation",value:"revenue",tax:"tax",shipping:"shipping",coupon:"coupon",item_list_name:"list"},da={},vb=(da[L.pd]="click",da[L.Aa]="detail",da[L.mb]="add",da[L.nb]="remove",da[L.Va]="checkout",da[L.ia]="purchase",da[L.ob]="refund",da),cc={item_id:"id",item_name:"name",item_list_name:"list",item_brand:"brand",item_variant:"variant",index:"position",promotion_id:"id",promotion_name:"name",creative_name:"creative",creative_slot:"position"},dc={item_category:0,
item_category2:1,item_category3:2,item_category4:3,item_category5:4},ec=function(db,Za){for(var Ia in db)ya.hasOwnProperty(Ia)&&(db[Za]=db[Za]||{},db[Za].actionField=db[Za].actionField||{},db[Za].actionField[ya[Ia]]=db[Ia])},kb=function(db,Za){for(var Ia="",Ua=0;Ua<Za.length;Ua++)void 0!==Za[Ua]&&(""!==Ia&&(Ia+="/"),Ia+=Za[Ua]);db.category=Ia},Ya=function(db){for(var Za=[],Ia={},Ua=0;Ua<db.length;Ia={jb:Ia.jb,Gb:Ia.Gb},Ua++){Ia.jb={};var fc=db[Ua];Ia.Gb=[];Ra(fc,function(Pc){return function(gc,hf){cc.hasOwnProperty(gc)?
Pc.jb[cc[gc]]=hf:dc.hasOwnProperty(gc)?Pc.Gb[dc[gc]]=hf:Pc.jb[gc]=hf}}(Ia));0<Ia.Gb.length&&kb(Ia.jb,Ia.Gb);Za.push(Ia.jb)}return Za},wb=function(db,Za,Ia){if(!Ab(Za))return!1;for(var Ua=bb(Object(Za),Ia,[]),fc=0;Ua&&fc<Ua.length;fc++)F(db,Ua[fc]);return!!Ua&&0<Ua.length},Z;if(q.vtp_useEcommerceDataLayer){var xc=!1;if(q.vtp_useGA4SchemaForEcommerce){q.vtp_gtmCachedValues&&(Z=q.vtp_gtmCachedValues.eventModel);
Z=Z||ri(q.vtp_gtmEventId,"eventModel");xc=!!Z}xc||(Z=Cs("ecommerce",1))}else q.vtp_ecommerceMacroData&&(Z=q.vtp_ecommerceMacroData.ecommerce,!Z&&q.vtp_useGA4SchemaForEcommerce&&
(Z=q.vtp_ecommerceMacroData));if(!Ab(Z))return;Z=Object(Z);if(q.vtp_useGA4SchemaForEcommerce){Z=J(Z);Z.currencyCode=Z.currencyCode||Z.currency;var Mb;q.vtp_gtmCachedValues&&(Mb=q.vtp_gtmCachedValues.event);Mb=Mb||String(ri(q.vtp_gtmEventId,"event"));if("view_item_list"===Mb&&!Z.impressions&&Z.items)Z.impressions=Ya(Z.items);else if("view_promotion"===Mb&&!Z.promoView&&Z.items)Z.promoView=
{},Z.promoView.promotions=Ya(Z.items);else if("select_promotion"===Mb&&!Z.promoClick)Z.items&&(Z.promoClick={},Z.promoClick.promotions=Ya(Z.items)),ec(Z,"promoClick");else if(vb.hasOwnProperty(Mb)){var Nc=vb[Mb];Z[Nc]||(Z.items&&(Z[Nc]={},Z[Nc].products=Ya(Z.items)),ec(Z,Nc))}}var Kg=bb(B,"currencyCode",Z.currencyCode);void 0!==Kg&&F("set","&cu",Kg);wb("ec:addImpression",Z,"impressions");if(wb("ec:addPromo",Z[Z.promoClick?"promoClick":"promoView"],"promotions")&&Z.promoClick){F("ec:setAction","promo_click",
Z.promoClick.actionField);return}for(var nd="detail checkout checkout_option click add remove purchase refund".split(" "),gf="refund purchase remove checkout checkout_option add click detail".split(" "),Oc=0;Oc<nd.length;Oc++){var Nb=Z[nd[Oc]];if(Nb){wb("ec:addProduct",Nb,"products");F("ec:setAction",nd[Oc],Nb.actionField);if(am)for(var $d=0;$d<gf.length;$d++){var Lg=Z[gf[$d]];if(Lg){Lg!==Nb&&Df(13);break}}break}}},pa={name:H};m(B,
pa,!0);var Y=q.vtp_trackingId||u.trackingId;C("create",Y,pa);F("set","&gtm",Om(!0));var N=!1;Gg()&&!N&&(F("set","&gcs",Tg()),b(Y,q,H));B._x_19&&(f&&null==dg&&delete B._x_19,B._x_20&&!d[H]&&(d[H]=!0,C(yl(H,String(B._x_20)))));
q.vtp_enableRecaptcha&&F("require","recaptcha","recaptcha.js");(function(ya,da){void 0!==q[da]&&F("set",ya,q[da])})("nonInteraction","vtp_nonInteraction");R("contentGroup",v);R("dimension",x);R("metric",z);var ca={};m(B,ca,!1)&&F("set",ca);var O;q.vtp_enableLinkId&&F("require","linkid","linkid.js");F("set","hitCallback",function(){var ya=
B&&B.hitCallback;Ja(ya)&&ya();q.vtp_gtmOnSuccess()});var T=function(ya,da){return void 0===q[ya]?u[da]:q[ya]};if("TRACK_EVENT"==q.vtp_trackType){q.vtp_enableEcommerce&&(F("require","ec","ec.js"),Q());var qa={hitType:"event",eventCategory:String(T("vtp_eventCategory","category")),eventAction:String(T("vtp_eventAction","action")),eventLabel:S(String,T("vtp_eventLabel","label")),eventValue:S(Va,T("vtp_eventValue","value"))};m(O,qa,
!1);F("send",qa);}else if("TRACK_SOCIAL"==q.vtp_trackType){}else if("TRACK_TRANSACTION"==q.vtp_trackType){}else if("TRACK_TIMING"==
q.vtp_trackType){}else if("DECORATE_LINK"==q.vtp_trackType){}else if("DECORATE_FORM"==q.vtp_trackType){}else if("TRACK_DATA"==q.vtp_trackType){}else{q.vtp_enableEcommerce&&(F("require","ec","ec.js"),Q());if(q.vtp_doubleClick||"DISPLAY_FEATURES"==q.vtp_advertisingFeaturesType){var ef=
"_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");F("require","displayfeatures",void 0,{cookieName:ef})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==q.vtp_advertisingFeaturesType){var Yd="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");F("require","adfeatures",{cookieName:Yd})}O?F("send","pageview",O):F("send","pageview");Wa(B.urlPassthrough)&&vl(D)}if(!c){var Mc=q.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";q.vtp_useInternalVersion&&!q.vtp_useDebugVersion&&(Mc="internal/"+Mc);c=!0;var ff=ym(B._x_19,"/analytics.js"),Zd=zk("https:","http:","//www.google-analytics.com/"+Mc,B&&!!B.forceSSL);U("analytics.js"===Mc&&ff?ff:Zd,function(){var ya=rl();ya&&ya.loaded||q.vtp_gtmOnFailure();},
q.vtp_gtmOnFailure)}}else P(q.vtp_gtmOnFailure)};(function(q){X.__ua=q;X.__ua.i="ua";X.__ua.m=!0;X.__ua.priorityOverride=0})(function(q){Wg(function(){r(q)},[L.H,L.C])})}();


X.h.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){X.__inject_script=b;X.__inject_script.i="inject_script";X.__inject_script.m=!0;X.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!A(f))throw d(e,{},"Script URL must be a string.");try{if(Oe(qh(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},S:a}})}();


X.h.ytl=["google"],function(){function a(){var u=Math.round(1E9*Math.random())+"";return M.getElementById(u)?a():u}function b(u,v){if(!u)return!1;for(var x=0;x<p.length;x++)if(0<=u.indexOf("//"+p[x]+"/"+v))return!0;return!1}function c(u,v){var x=u.getAttribute("src");if(b(x,"embed/")){if(0<x.indexOf("enablejsapi=1"))return!0;if(v){var z=u.setAttribute,w;var y=-1!==x.indexOf("?")?"&":"?";if(-1<x.indexOf("origin="))w=x+y+"enablejsapi=1";else{if(!q){var B=V("document");q=B.location.protocol+"//"+B.location.hostname;
B.location.port&&(q+=":"+B.location.port)}w=x+y+"enablejsapi=1&origin="+encodeURIComponent(q)}z.call(u,"src",w);return!0}}return!1}function d(u,v){if(!u.getAttribute("data-gtm-yt-inspected-"+v.Ke)&&(u.setAttribute("data-gtm-yt-inspected-"+v.Ke,"true"),c(u,v.ac))){u.id||(u.id=a());var x=V("YT"),z=x.get(u.id);z||(z=new x.Player(u.id));var w=f(z,v),y={},B;for(B in w)y.Ib=B,w.hasOwnProperty(y.Ib)&&z.addEventListener(y.Ib,function(C){return function(D){return w[C.Ib](D.data)}}(y)),y={Ib:y.Ib}}}function e(u){P(function(){function v(){for(var z=
x.getElementsByTagName("iframe"),w=z.length,y=0;y<w;y++)d(z[y],u)}var x=V("document");v();Up(v)})}function f(u,v){var x,z;function w(){Q=Vp(function(){return{url:N,title:ca,fe:Y,Sf:u.getCurrentTime(),playbackRate:O}},v.Ke,u.getIframe());Y=0;ca=N="";O=1;return y}function y(ja){switch(ja){case r.PLAYING:Y=Math.round(u.getDuration());N=u.getVideoUrl();if(u.getVideoData){var Ba=u.getVideoData();ca=Ba?Ba.title:""}O=u.getPlaybackRate();v.$d?Ds(Q.createEvent("start")):Q.yb();pa=l(v.Be,v.Ae,u.getDuration());
return B(ja);default:return y}}function B(){T=u.getCurrentTime();qa=ys().getTime();Q.hg();R();return C}function C(ja){var Ba;switch(ja){case r.ENDED:return H(ja);case r.PAUSED:Ba="pause";case r.BUFFERING:var Ta=u.getCurrentTime()-T;Ba=1<Math.abs((ys().getTime()-qa)/1E3*O-Ta)?"seek":Ba||"buffering";u.getCurrentTime()&&(v.Zd?Ds(Q.createEvent(Ba)):Q.yb());S();return D;case r.UNSTARTED:return w(ja);default:return C}}function D(ja){switch(ja){case r.ENDED:return H(ja);case r.PLAYING:return B(ja);case r.UNSTARTED:return w(ja);
default:return D}}function H(){for(;z;){var ja=x;ws(z);ja()}v.Yd&&Ds(Q.createEvent("complete",1));return w(r.UNSTARTED)}function F(){}function S(){z&&(ws(z),z=0,x=F)}function R(){if(pa.length&&0!==O){var ja=-1,Ba;do{Ba=pa[0];if(Ba.Y>u.getDuration())return;ja=(Ba.Y-u.getCurrentTime())/O;if(0>ja&&(pa.shift(),0===pa.length))return}while(0>ja);x=function(){z=0;x=F;0<pa.length&&pa[0].Y===Ba.Y&&(pa.shift(),Ds(Q.createEvent("progress",Ba.kc,Ba.nc)));R()};z=xs(x,1E3*ja)}}var Q,pa=[],Y,N,ca,O,T,qa,xa=w(r.UNSTARTED);
z=0;x=F;return{onStateChange:function(ja){xa=xa(ja)},onPlaybackRateChange:function(ja){T=u.getCurrentTime();qa=ys().getTime();Q.yb();O=ja;S();R()}}}function g(u){for(var v=u.split(","),x=v.length,z=[],w=0;w<x;w++){var y=parseInt(v[w],10);isNaN(y)||100<y||0>y||z.push(y/100)}z.sort(function(B,C){return B-C});return z}function h(u){for(var v=u.split(","),x=v.length,z=[],w=0;w<x;w++){var y=parseInt(v[w],10);isNaN(y)||0>y||z.push(y)}z.sort(function(B,C){return B-C});return z}function l(u,v,x){var z=u.map(function(B){return{Y:B,
nc:B,kc:void 0}});if(!v.length)return z;var w=v.map(function(B){return{Y:B*x,nc:void 0,kc:B}});if(!z.length)return w;var y=z.concat(w);y.sort(function(B,C){return B.Y-C.Y});return y}function m(u){var v=!!u.vtp_captureStart,x=!!u.vtp_captureComplete,z=!!u.vtp_capturePause,w=g(u.vtp_progressThresholdsPercent+""),y=h(u.vtp_progressThresholdsTimeInSeconds+""),B=!!u.vtp_fixMissingApi;if(v||x||z||w.length||y.length){var C={$d:v,Yd:x,Zd:z,Ae:w,Be:y,ac:B,Ke:void 0===u.vtp_uniqueTriggerId?"":u.vtp_uniqueTriggerId},
D=V("YT"),H=function(){e(C)};P(u.vtp_gtmOnSuccess);if(D)D.ready&&D.ready(H);else{var F=V("onYouTubeIframeAPIReady");Es("onYouTubeIframeAPIReady",function(){F&&F();H()});P(function(){for(var S=V("document"),R=S.getElementsByTagName("script"),Q=R.length,pa=0;pa<Q;pa++){var Y=R[pa].getAttribute("src");if(b(Y,"iframe_api")||b(Y,"player_api"))return}for(var N=S.getElementsByTagName("iframe"),ca=N.length,O=0;O<ca;O++)if(!t&&c(N[O],C.ac)){U("https://www.youtube.com/iframe_api");t=!0;break}})}}else P(u.vtp_gtmOnSuccess)}
var p=["www.youtube.com","www.youtube-nocookie.com"],r={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},q,t=!1;(function(u){X.__ytl=u;X.__ytl.i="ytl";X.__ytl.m=!0;X.__ytl.priorityOverride=0})(function(u){u.vtp_triggerStartOption?m(u):fl(function(){m(u)})})}();





X.h.aev=["google"],function(){function a(t,u,v){var x=t||ri(u,"gtm");if(x)return x[v]}function b(t,u,v,x,z){z||(z="element");var w=u+"."+v,y;if(p.hasOwnProperty(w))y=p[w];else{var B=a(t,u,z);if(B&&(y=x(B),p[w]=y,r.push(w),35<r.length)){var C=r.shift();delete p[C]}}return y}function c(t,u,v,x){var z=a(t,u,q[v]);return void 0!==z?z:x}function d(t,u){if(!t)return!1;var v=e(zs());La(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var x=[v],z=0;z<u.length;z++){var w=u[z];if(w.hasOwnProperty("is_regex"))if(w.is_regex)try{w=
new RegExp(w.domain)}catch(B){continue}else w=w.domain;if(w instanceof RegExp){if(w.test(t))return!1}else{var y=w;if(0!=y.length){if(0<=e(t).indexOf(y))return!1;x.push(e(y))}}}return!qt(t,x)}function e(t){m.test(t)||(t="http://"+t);return oh(qh(t),"HOST",!0)}function f(t,u,v,x){switch(t){case "SUBMIT_TEXT":return b(u,v,"FORM."+t,g,"formSubmitElement")||x;case "LENGTH":var z=b(u,v,"FORM."+t,h);return void 0===z?x:z;case "INTERACTED_FIELD_ID":return l(u,v,"id",x);case "INTERACTED_FIELD_NAME":return l(u,
v,"name",x);case "INTERACTED_FIELD_TYPE":return l(u,v,"type",x);case "INTERACTED_FIELD_POSITION":var w=a(u,v,"interactedFormFieldPosition");return void 0===w?x:w;case "INTERACT_SEQUENCE_NUMBER":var y=a(u,v,"interactSequenceNumber");return void 0===y?x:y;default:return x}}function g(t){switch(t.tagName.toLowerCase()){case "input":return og(t,"value");case "button":return pg(t);default:return null}}function h(t){if("form"===t.tagName.toLowerCase()&&t.elements){for(var u=0,v=0;v<t.elements.length;v++)js(t.elements[v])&&
u++;return u}}function l(t,u,v,x){var z=a(t,u,"interactedFormField");return z&&og(z,v)||x}var m=/^https?:\/\//i,p={},r=[],q={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(t){X.__aev=t;X.__aev.i="aev";X.__aev.m=!0;X.__aev.priorityOverride=
0})(function(t){var u=t.vtp_gtmEventId,v=t.vtp_defaultValue,x=t.vtp_varType,z;t.vtp_gtmCachedValues&&(z=t.vtp_gtmCachedValues.gtm);switch(x){case "TAG_NAME":var w=a(z,u,"element");return w&&w.tagName||v;case "TEXT":return b(z,u,x,pg)||v;case "URL":var y;a:{var B=String(a(z,u,"elementUrl")||v||""),C=qh(B),D=String(t.vtp_component||"URL");switch(D){case "URL":y=B;break a;case "IS_OUTBOUND":y=
d(B,t.vtp_affiliatedDomains);break a;default:y=oh(C,D,t.vtp_stripWww,t.vtp_defaultPages,t.vtp_queryKey)}}return y;case "ATTRIBUTE":var H;if(void 0===t.vtp_attribute)H=c(z,u,x,v);else{var F=t.vtp_attribute,S=a(z,u,"element");H=S&&og(S,F)||v||""}return H;case "MD":var R=t.vtp_mdValue,Q=b(z,u,"MD",ss);return R&&Q?vs(Q,R)||v:Q||v;case "FORM":return f(String(t.vtp_component||"SUBMIT_TEXT"),z,u,v);default:var pa=c(z,u,x,v);Ls(pa,"aev",t.vtp_gtmEventId);return pa}})}();

X.h.gas=["google"],function(){(function(a){X.__gas=a;X.__gas.i="gas";X.__gas.m=!0;X.__gas.priorityOverride=0})(function(a){var b=J(a),c=b;c[kd.Ya]=null;c[kd.dh]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
X.h.remm=["google"],function(){(function(a){X.__remm=a;X.__remm.i="remm";X.__remm.m=!0;X.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=a.vtp_defaultValue,g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var l=new RegExp(h,e);if(l.test(b)){var m=c[g].value;a.vtp_replaceAfterMatch&&(m=String(b).replace(l,m));f=m;break}}Ls(f,"remm",a.vtp_gtmEventId);return f})}();



X.h.paused=[],function(){(function(a){X.__paused=a;X.__paused.i="paused";X.__paused.m=!0;X.__paused.priorityOverride=0})(function(a){P(a.vtp_gtmOnFailure)})}();

X.h.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var m=M.createElement("script");m.async=!1;m.type="text/javascript";m.id=h.id;m.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(m.charset=h.charset);var p=h.getAttribute("data-gtmsrc");p&&(m.src=p,gg(m,l));d.insertBefore(m,null);p||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];h.firstChild;)r.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,r,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(q){P(g)}}}var b=function(d,e,f){fl(function(){var g=google_tag_manager_external.postscribe.getPostscribe(),h={done:e},l=M.createElement("div");l.style.display="none";l.style.visibility="hidden";M.body.appendChild(l);try{g(l,d,h)}catch(m){P(f)}})};var c=function(d){if(M.body){var e=
d.vtp_gtmOnFailure,f=Ms(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.Oh,h=f.onSuccess;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(M.body,qg(g),h,e)()}else xs(function(){c(d)},
200)};X.__html=c;X.__html.i="html";X.__html.m=!0;X.__html.priorityOverride=0}();






X.h.lcl=[],function(){function a(){var c=V("document"),d=0,e=function(f){var g=f.target;if(g&&3!==f.which&&!(f.ag||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;g=rg(g,["a","area"],100);if(!g)return f.returnValue;var h=f.defaultPrevented||!1===f.returnValue,l=qp("lcl",h?"nv.mwt":"mwt",0),m;m=h?qp("lcl","nv.ids",[]):qp("lcl","ids",[]);if(m.length){var p=mp(g,"gtm.linkClick",m);if(b(f,g,c)&&!h&&l&&g.href){var r=!!Na(String(tg(g,"rel")||"").split(" "),function(u){return"noreferrer"===u.toLowerCase()});
r&&Df(36);var q=V((tg(g,"target")||"_self").substring(1)),t=!0;if(Ds(p,Yr(function(){var u;if(u=t&&q){var v;a:if(r){var x;try{x=new MouseEvent(f.type,{bubbles:!0})}catch(z){if(!c.createEvent){v=!1;break a}x=c.createEvent("MouseEvents");x.initEvent(f.type,!0,!0)}x.ag=!0;f.target.dispatchEvent(x);v=!0}else v=!1;u=!v}u&&(q.location.href=tg(g,"href"))}),l))t=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else Ds(p,function(){},l||2E3);return!0}}};mg(c,"click",e,!1);mg(c,"auxclick",
e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=tg(d,"href"),g=f.indexOf("#"),h=tg(d,"target");if(h&&"_self"!==h&&"_parent"!==h&&"_top"!==h||0===g)return!1;if(0<g){var l=Bs(f),m=Bs(e.location);return l!==m}return!0}(function(c){X.__lcl=c;X.__lcl.i="lcl";X.__lcl.m=!0;X.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);
if(!f||0>=f)f=2E3;var g=c.vtp_uniqueTriggerId||"0";if(d){var h=function(m){return Math.max(f,m)};pp("lcl","mwt",h,0);e||pp("lcl","nv.mwt",h,0)}var l=function(m){m.push(g);return m};pp("lcl","ids",l,[]);e||pp("lcl","nv.ids",l,[]);Is("lcl")||(a(),Js("lcl"));P(c.vtp_gtmOnSuccess)})}();
X.h.evl=["google"],function(){function a(){var f=Number(Cs("gtm.start"))||0;return ys().getTime()-f}function b(f,g,h,l){function m(){if(!bh(f.target)){g.has(d.Nc)||g.set(d.Nc,""+a());g.has(d.Qd)||g.set(d.Qd,""+a());var r=0;g.has(d.Qc)&&(r=Number(g.get(d.Qc)));r+=100;g.set(d.Qc,""+r);if(r>=h){var q=mp(f.target,"gtm.elementVisibility",[g.g]),t=dh(f.target);q["gtm.visibleRatio"]=Math.round(1E3*t)/10;q["gtm.visibleTime"]=h;q["gtm.visibleFirstTime"]=Number(g.get(d.Qd));q["gtm.visibleLastTime"]=Number(g.get(d.Nc));
Ds(q);l()}}}if(!g.has(d.Sb)&&(0==h&&m(),!g.has(d.xb))){var p=V("self").setInterval(m,100);g.set(d.Sb,p)}}function c(f){f.has(d.Sb)&&(V("self").clearInterval(Number(f.get(d.Sb))),f.o(d.Sb))}var d={Sb:"polling-id-",Qd:"first-on-screen-",Nc:"recent-on-screen-",Qc:"total-visible-time-",xb:"has-fired-"},e=function(f,g){this.element=f;this.g=g};e.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.g)};e.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.g)};e.prototype.set=function(f,g){this.element.setAttribute("data-gtm-vis-"+f+this.g,g)};e.prototype.o=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.g)};(function(f){X.__evl=f;X.__evl.i="evl";X.__evl.m=!0;X.__evl.priorityOverride=0})(function(f){function g(){var z=!1,w=null;if("CSS"===l){try{w=Yg(m)}catch(H){Df(46)}z=!!w&&v.length!=w.length}else if("ID"===l){var y=M.getElementById(m);y&&(w=[y],z=1!=v.length||v[0]!==y)}w||(w=[],z=0<v.length);if(z){for(var B=0;B<v.length;B++){var C=
new e(v[B],t);c(C)}v=[];for(var D=0;D<w.length;D++)v.push(w[D]);0<=x&&jh(x);0<v.length&&(x=ih(h,v,[q]))}}function h(z){var w=new e(z.target,t);z.intersectionRatio>=q?w.has(d.xb)||b(z,w,r,"ONCE"===u?function(){for(var y=0;y<v.length;y++){var B=new e(v[y],t);B.set(d.xb,"1");c(B)}jh(x);if(p&&Tp)for(var C=0;C<Tp.length;C++)Tp[C]===g&&Tp.splice(C,1)}:function(){w.set(d.xb,"1");c(w)}):(c(w),"MANY_PER_ELEMENT"===u&&w.has(d.xb)&&(w.o(d.xb),w.o(d.Qc)),w.o(d.Nc))}var l=f.vtp_selectorType,m;"ID"===l?m=String(f.vtp_elementId):
"CSS"===l&&(m=String(f.vtp_elementSelector));var p=!!f.vtp_useDomChangeListener,r=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,q=(Number(f.vtp_onScreenRatio)||50)/100,t=f.vtp_uniqueTriggerId,u=f.vtp_firingFrequency,v=[],x=-1;g();p&&Up(g);P(f.vtp_gtmOnSuccess)})}();


var jw={};jw.macro=function(a){if(es.Vd.hasOwnProperty(a))return es.Vd[a]},jw.onHtmlSuccess=es.Rf(!0),jw.onHtmlFailure=es.Rf(!1);jw.dataLayer=li;jw.callback=function(a){ci.hasOwnProperty(a)&&Ja(ci[a])&&ci[a]();delete ci[a]};jw.bootstrap=0;jw._spx=!1;function kw(){Sh[ke.J]=jw;eb(di,X.h);Pd=Pd||es;Qd=ge}
function lw(){var a=!1;a&&nl("INIT");ug.o().o();Sh=E.google_tag_manager=E.google_tag_manager||{};qn();
Ij.enable_gbraid_cookie_write=!0;if(Sh[ke.J]){var b=Sh.zones;b&&b.unregisterChild(ke.J);}else{for(var c=data.resource||{},d=c.macros||[],e=0;e<d.length;e++)Id.push(d[e]);for(var f=c.tags||[],g=0;g<f.length;g++)Ld.push(f[g]);for(var h=c.predicates||[],l=0;l<h.length;l++)Kd.push(h[l]);for(var m=c.rules||[],p=0;p<m.length;p++){for(var r=m[p],q={},t=
0;t<r.length;t++)q[r[t][0]]=Array.prototype.slice.call(r[t],1);Jd.push(q)}Nd=X;Od=mt;var u=data.permissions||{},v=data.sandboxed_scripts,x=data.security_groups;kr();oe=new ne(u);if(void 0!==v)for(var z=["sandboxedScripts"],w=0;w<v.length;w++){var y=v[w].replace(/^_*/,"");di[y]=z}nr(x);kw();ds();al=!1;bl=0;if("interactive"==M.readyState&&!M.createEventObject||"complete"==M.readyState)dl();else{mg(M,"DOMContentLoaded",dl);mg(M,"readystatechange",dl);if(M.createEventObject&&M.documentElement.doScroll){var B=
!0;try{B=!E.frameElement}catch(S){}B&&el()}mg(E,"load",dl)}oq=!1;"complete"===M.readyState?qq():mg(E,"load",qq);am&&E.setInterval($l,864E5);
google_tag_manager_external.postscribe.installPostscribe();ai=(new Date).getTime();if(a){var F=ol("INIT");
}}}
(function(a){if(!E["__TAGGY_INSTALLED"]){var b=!1;if(M.referrer){var c=qh(M.referrer);b="cct.google"===nh(c,"host")}if(!b){var d=Bi("googTaggyReferrer");b=d.length&&d[0].length}b&&(E["__TAGGY_INSTALLED"]=!0,ig("https://cct.google/taggy/agent.js"))}var f=function(){var m=E["google.tagmanager.debugui2.queue"];m||(m=[],E["google.tagmanager.debugui2.queue"]=m,ig("https://www.googletagmanager.com/debug/bootstrap"));var p={messageType:"CONTAINER_STARTING",data:{scriptSource:dg,containerProduct:"GTM",debug:!1}};p.data.resume=function(){a()};ke.ug&&(p.data.initialPublish=!0);m.push(p)},g="x"===oh(E.location,"query",!1,void 0,"gtm_debug");if(!g&&M.referrer){var h=qh(M.referrer);g="tagassistant.google.com"===nh(h,"host")}if(!g){var l=Bi("__TAG_ASSISTANT");g=l.length&&l[0].length}E.__TAG_ASSISTANT_API&&(g=!0);g&&dg?f():a()})(lw);

})()
