import Component from '../../custom-element.js';
import html from './html.js';



class WBTL_Body extends Component{

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

if(!customElements.get('wbtl-body')){
	customElements.define('wbtl-body',WBTL_Body);	
}
