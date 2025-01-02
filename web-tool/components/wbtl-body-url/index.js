import Component from '../../custom-element.js';
import html from './html.js';



class WBTL_Body_URL extends Component{

	currentPageUrls = {};

	constructor(){
		super();
		this.html = html;
		this.moduleURL = import.meta.url;
	}

	connectedCallback(){
		this.attachShadow({mode: 'open'});
		this.defaultSetup();
		this.init();
	}

	event(e){		
		// Link click
		if(e.type == 'click' && WBTL.eventTarget.closest('.url-list-item')) this.handleUrlListItemClick(e);
	}

	handleUrlListItemClick(e){
		const clickURL = WBTL.eventTarget.closest('.url-list-item');
		this.fetchFileContents(clickURL.dataset.url).then((response)=>{
			console.log(response);
		}).catch((error)=>{
			console.log(error);
		})

	}

	showLinks(pageurl){
		let fragment = document.createDocumentFragment();
		let aEls = null;
		if(!pageurl){
			aEls = document.querySelectorAll('a');
			WBTL.bodyUrl.$id.urlList.innerHTML = this.getUrlStructure(aEls);
		} else {

		}	
	}

	getUrlStructure(aEls){
		let str = '';
		aEls.forEach((aEl)=>{
			str += `
			<span title="${aEl.href}" class="url-list-item" data-url="${aEl.href}">
				${aEl.innerText.trim().length ? aEl.innerText : 'Empty Text'}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#fff" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
			</span>`;

		})
		return str;
	} 


	init(){
		this.showLinks();
	}
}

if(!customElements.get('wbtl-body-url')){
	customElements.define('wbtl-body-url',WBTL_Body_URL);	
}
