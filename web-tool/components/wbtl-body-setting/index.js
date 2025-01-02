import Component from '../../custom-element.js';
import html from './html.js';



class WBTL_Body_Setting extends Component{

	constructor(){
		super();
		this.html = html;
		this.moduleURL = import.meta.url;
	}

	connectedCallback(){
		this.attachShadow({mode: 'open'});
		this.defaultSetup();
	}
}

if(!customElements.get('wbtl-body-setting')){
	customElements.define('wbtl-body-setting',WBTL_Body_Setting);	
}
