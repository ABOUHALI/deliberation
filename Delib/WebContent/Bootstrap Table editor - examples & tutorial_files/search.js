"use strict";function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Map"===(n="Object"===n&&o.constructor?o.constructor.name:n)||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}var Search=function(){function Search(input,icon,list,form,dropdown,count,jsonFile){_classCallCheck(this,Search),this.input=input,this.list=list,this.icon=icon,this.form=form,this.dropdown=dropdown,this.count=count,this.data=[],this.jsonFile=jsonFile,this.searchValue="",this.keycodes=Object.freeze({ARROW_UP:38,ARROW_DOWN:40,ENTER:13,SLASH:191,ESCAPE:27})}return _createClass(Search,[{key:"visibleDropdown",get:function(){return"block"===this.dropdown.style.display}},{key:"options",get:function(){return this.list.getElementsByTagName("a")}},{key:"results",get:function(){var _this=this,result=this.data.filter(function(entry){return _this.compare(entry)});return this.sort(result)}},{key:"init",value:function(){var _this2=this;fetch("/wp-content/themes/mdbootstrap4/js/search/"+this.jsonFile).then(function(response){return response.json()}).then(function(response){_this2.data=_toConsumableArray(response),new mdb.PerfectScrollbar(_this2.list),_this2.bindEvents()})}},{key:"bindEvents",value:function(){var _this3=this;this.input.addEventListener("input",function(e){return _this3.search(e)}),this.input.addEventListener("focus",function(e){_this3.icon.classList.add("text-primary"),0<e.target.value.length&&_this3.search(e)}),this.input.addEventListener("blur",function(){_this3.icon.classList.remove("text-primary")}),this.input.addEventListener("keydown",function(e){e.keyCode===_this3.keycodes.ARROW_DOWN&&0<_this3.options.length&&(e.preventDefault(),_this3.options[0].focus())}),window.addEventListener("click",function(e){_this3.visibleDropdown&&_this3.isOutside(e.target)&&_this3.toggleDropdown(!1)}),window.addEventListener("keydown",function(e){e.keyCode===_this3.keycodes.SLASH&&e.ctrlKey&&e.target!==_this3.input?(e.preventDefault(),_this3.input.focus()):e.keyCode===_this3.keycodes.ESCAPE&&_this3.visibleDropdown&&_this3.toggleDropdown(!1)})}},{key:"search",value:function(e){this.searchValue=this.normalizeString(this.getSearchValue(e.target.value)),this.toggleDropdown(0<this.searchValue.length),this.renderResults(this.getResultsMarkup()),this.setupKeyboardNavigation()}},{key:"normalizeString",value:function(string){return string.trim().toLowerCase()}},{key:"getSearchValue",value:function(string){return 1<string.length&&"/"===string[0]?string.slice(1):string}},{key:"toggleDropdown",value:function(value){this.dropdown.style.display=value?"block":"none"}},{key:"renderResults",value:function(markup){this.list.innerHTML=markup,this.count.innerHTML=this.results.length}},{key:"getResultsMarkup",value:function(){var _this4=this;return this.results.map(function(result,i){var keywords=result.keywords.filter(function(keyword){return 0<_this4.searchValue.length&&keyword.match(_this4.searchValue)});return'\n      <li>\n        <a class="pt-2 px-2 text-muted d-block" href="'.concat(result.href,'">\n          <p class="text-uppercase mb-0">').concat(_this4.highlightSearch(result.name,_this4.searchValue),'</p>\n          <p class="small font-weight-bold mb-0 pb-2">').concat(_this4.highlightSearch(result.category,_this4.searchValue),"</p>\n          ").concat(0<keywords.length?'<p class="small mb-0 pb-2 mdb-5-search-keywords">'.concat(_this4.formatKeywords(keywords),"</p>"):"","\n        </a>\n        ").concat(i!==_this4.results.length-1?'<hr class="m-0 p-0">':"","\n      </li>\n    ")}).join("\n")}},{key:"compare",value:function(category){var _this5=this,name=category.name,keywords=category.keywords,category=category.category;return"/"===this.searchValue||this.normalizeString(name).match(this.searchValue)||this.normalizeString(category).match(this.searchValue)||keywords.find(function(keyword){return keyword.match(_this5.searchValue)})}},{key:"sort",value:function(entries){var _this6=this;return[].concat(_toConsumableArray(entries.filter(function(e){return e.priority&&e.priority[_this6.searchValue]}).sort(function(a,b){return a.priority[_this6.searchValue]>b.priority[_this6.searchValue]?1:-1})),_toConsumableArray(entries.filter(function(e){return!e.priority||!e.priority[_this6.searchValue]})))}},{key:"highlightSearch",value:function(string){var searchIndex=this.normalizeString(string).indexOf(this.searchValue);return-1===searchIndex?string:"".concat(string.slice(0,searchIndex),'<u class="text-primary">').concat(string.slice(searchIndex,searchIndex+this.searchValue.length),"</u>").concat(string.slice(searchIndex+this.searchValue.length))}},{key:"formatKeywords",value:function(keywords){var _this7=this;return keywords.map(function(keyword){return _this7.highlightSearch(keyword)}).join(", ")}},{key:"setupKeyboardNavigation",value:function(){var _this8=this;this.options.forEach(function(option,i){option.addEventListener("keydown",function(e){return _this8.focusNextOption(e,i)})})}},{key:"focusNextOption",value:function(e,index){if(e.keyCode===this.keycodes.ARROW_DOWN)next=1;else{if(e.keyCode!==this.keycodes.ARROW_UP)return;next=-1}e.preventDefault();var next=index+next>this.options.length-1?0:index+next<0?this.options.length-1:index+next;this.options[next].focus()}},{key:"isOutside",value:function(element){return element!==this.form&&(element===document.body||this.isOutside(element.parentNode))}}]),Search}();