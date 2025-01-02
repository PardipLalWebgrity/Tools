import Component from '../../custom-element.js';
import html from './html.js';



class WBTL_Header extends Component{

	moveableBox = {
		dX: 0,
		dY: 0,
		mX: 0,
		mY: 0,
		el: null,
		elX: 0,
		elY: 0,
		active: false,
	}

	constructor(){
		super();
		this.html = html;
		this.moduleURL = import.meta.url;
	}

	connectedCallback(){
		this.attachShadow({mode: 'open'});
		this.defaultSetup();
	}

	event(e){		
		// Moveable box
		if(e.type === 'pointerdown' && WBTL.eventTarget.matches('.moveable-by-me')) this.moveableBoxDown(e);
		if(this.moveableBox.active){
			if(e.type === 'pointermove' && WBTL.eventTarget.matches('.moveable-by-me')) this.moveableBoxMove(e);
			if(e.type === 'pointerUp' && WBTL.eventTarget.matches('.moveable-by-me')) this.moveableBoxUp(e);
		}

		// header menu
		if(e.type === 'click' && WBTL.eventTarget.matches('[name="header-menu"]')) this.headerMenuChange(e);

	}

	moveableBoxDown(e){
		if(!e.composedPath()[0].matches('.moveable-by-me')) return false;
		this.moveableBox.active = true;
		this.moveableBox.dX = e.clientX;
		this.moveableBox.dY = e.clientY;
		
		this.moveableBox.elX = +(window.getComputedStyle(WBTL.app)['left'].replace('px',''));
		this.moveableBox.elY = +(window.getComputedStyle(WBTL.app)['top'].replace('px',''));
		WBTL.eventTarget.setPointerCapture(e.pointerId);
	}
	moveableBoxMove(e){

		if(!WBTL.eventTarget.hasPointerCapture(e.pointerId)) return false;
		this.moveableBox.mX = e.clientX;
		this.moveableBox.mY = e.clientY;
		WBTL.app.style.left = (this.moveableBox.elX+this.moveableBox.mX-this.moveableBox.dX)+'px';
	    WBTL.app.style.top = (this.moveableBox.elY+this.moveableBox.mY-this.moveableBox.dY)+'px';


	    if((this.moveableBox.elX+this.moveableBox.mX-this.moveableBox.dX) < 10) WBTL.app.style.left = '10px';
	    if((this.moveableBox.elY+this.moveableBox.mY-this.moveableBox.dY) < 10) WBTL.app.style.top = '10px';
	    if((this.moveableBox.elY+this.moveableBox.mY-this.moveableBox.dY) > document.body.offsetHeight-100) WBTL.app.style.top = document.body.offsetHeight-100+'px';
	    if((this.moveableBox.elX+this.moveableBox.mX-this.moveableBox.dX) > document.body.offsetWidth-200) WBTL.app.style.left = document.body.offsetWidth-200+'px';
	}
	moveableBoxUp(e){
		this.moveableBox.active = false;        
    	WBTL.eventTarget.releasePointerCapture(e.pointerId);    
	}

	headerMenuChange(e){
		
		WBTL.body.$class.tabContent.forEach((el)=>{
			el.classList.remove('show');
		})
		console.log(`.tab-content-${WBTL.eventTarget.value}`);
		WBTL.body.shadowRoot.querySelector(`.tab-content-${WBTL.eventTarget.value}`).classList.add('show');
		
	}
}

if(!customElements.get('wbtl-header')){
	customElements.define('wbtl-header',WBTL_Header);	
}


