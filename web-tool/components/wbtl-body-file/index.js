import Component from '../../custom-element.js';
import html from './html.js';



class WBTL_Body_File extends Component{

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

if(!customElements.get('wbtl-body-file')){
	customElements.define('wbtl-body-file',WBTL_Body_File);	
}
