
// protect Global WBTL variable
if(window.WBTL){
	document.body.innerHTML = '<h1>WBTL is reserve keyword, please use different identifier</h1>';
	throw new Error('WBTL is reserve keyword, please use different identifier');
} else {
	window.WBTL = {
		bodyHeight: document.body.offsetHeight,
    	bodyWidth: document.body.offsetWidth,
	};
}


class Component extends HTMLElement{

	defaultSetup(customize){		
		this.setComponentHTMLCSS();
		this.storeElements();		
		if(customize){
			customize.id && (WBTL[customize.id] = this);
		} else {
			WBTL[this.underScoreToUpperCase(this.tagName.replace('WBTL-','').toLowerCase())] = this;			
		}

		// change event attach
		if(this.handleChangeEvent) this.shadowRoot.addEventListener('change',this.handleChangeEvent);
		
	}

	setComponentHTMLCSS(){
		this.shadowRoot.innerHTML = `
			<style>
					:host *{padding: 0;margin: 0;box-sizing: border-box;transition: 0.3s all linear;font:inherit;}
					.iconbtn{display:inline-flex;justify-content:center;align-items:center;width:35px;height:35px;}
					svg{width:20px;height:20px;}
					svg *{color:var(--iconcolor--white);}
			</style>
			<link rel="stylesheet" href="${new URL('./style.css',this.moduleURL).href}">
			${this.html}
		`;
		this.setAttribute('data-custom-element',true);
	}

	storeElements(){
		this.$id = {};
		this.shadowRoot.querySelectorAll('[data-id]').forEach((el)=>{			
			this.$id[this.underScoreToUpperCase(el.dataset.id)] = el;
		})

		this.$class = {};
		this.shadowRoot.querySelectorAll('[data-class]').forEach((el)=>{			
			this.$class[this.underScoreToUpperCase(el.dataset.class)] = this.shadowRoot.querySelectorAll(`[data-class="${el.dataset.class}"]`);
		})
	}

	underScoreToUpperCase(underScoreString){
		let word = '';
		underScoreString.split('-').forEach((w,i)=>{
			if(i===0) {
				word += w;
			} else {
				word += w.charAt(0).toUpperCase()+w.slice(1);
			}				
		})
		return word;
	}

	// fetch file contents
	fetchFileContents(fileUrl) {
		
	  return fetch(fileUrl)
	    .then(response => {
	      if (!response.ok) {
	        throw new Error(`Failed to fetch ${fileUrl}: ${response.statusText}`);
	      }
	      return response.text();
	    })
	    .then(cssText => cssText)
	    .catch(error => {
	      console.error('File path is wrong');
	      return '';
	    });
	}

}

export default Component;