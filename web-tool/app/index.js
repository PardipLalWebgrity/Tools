 import Component from '../custom-element.js';
import html from './html.js';



class WBTL_App extends Component{

	eventComponent = null;

	constructor(){
		super();
		this.html = html;
		this.moduleURL = import.meta.url;
	}

	connectedCallback(){
		this.attachShadow({mode: 'open'});
		this.defaultSetup();
		this.handleEvents();
		console.log(WBTL);	
	}

	handleEvents(){
		this.eventComponent = null;
		this.addEventListener('click', this.handleEventCallback);
		this.addEventListener('pointerdown', this.handleEventCallback);
		this.addEventListener('pointermove', this.handleEventCallback);
		this.addEventListener('pointerup', this.handleEventCallback);
		this.addEventListener('input', this.handleEventCallback);
		this.addEventListener('change', this.handleEventCallback);
		this.addEventListener('keyup', this.handleEventCallback);
		this.addEventListener('wheel', this.handleEventCallback);
		this.addEventListener('scroll', this.handleEventCallback);		

		window.addEventListener('load', ()=>{
			this.init();			
		});		
		
	}

	handleEventCallback(e){
		WBTL.eventTarget = e.composedPath()[0];		
		this.eventComponent = WBTL.eventTarget.dataset.customElement ? WBTL.eventTarget : WBTL.eventTarget.getRootNode().host;
		
		// handle change event by click event		
		if(e.type === 'click' && WBTL.eventTarget.closest('[name]')){			
			if(this.eventComponent.event) this.eventComponent.event(WBTL.eventTarget.closest('[name]'));
		}		
		
		// handle component event
		if(this.eventComponent.event) this.eventComponent.event(e);
	}

	init(){
		
	}
}


window.addEventListener('load',()=>{
	if(!customElements.get('wbtl-app')){
		customElements.define('wbtl-app',WBTL_App);			
		document.body.style.minHeight = '100vh';
		document.body.insertAdjacentHTML('beforeend', `<wbtl-app></wbtl-app>`);
	}
})
