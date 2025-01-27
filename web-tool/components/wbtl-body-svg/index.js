import Component from '../../custom-element.js';
import html from './html.js';



class WBTL_Body_Svg extends Component{

	uploadedFilesData = [];

	constructor(){
		super();
		this.html = html;
		this.moduleURL = import.meta.url;
	}

	connectedCallback(){
		this.attachShadow({mode: 'open'});
		this.defaultSetup();
	}

	handleChangeEvent(){
			if (WBTL.eventTarget.dataset.id === 'uploaded-files') this.host.svgFilesUploadedForSprits();
	}

	event(e){			
			if(e.type === 'click' && WBTL.eventTarget.closest('[data-id="download-svg-sprits"]')) this.downloadSVGSprits();
	}

	async svgFilesUploadedForSprits(){

			const uploadedFiles = this.$id.uploadedFiles.files;

			const fragmentObj = document.createDocumentFragment();
			const divEl = document.createElement('DIV');

			for(let uFile of uploadedFiles){

					if(uFile.type === 'image/svg+xml') {
							const fData = await uFile.text();				
							divEl.innerHTML = fData;
							const svgEl = divEl.querySelector('svg');

							this.uploadedFilesData.push({
									id: uFile.name.replace('.svg',''),
									viewBox: svgEl.getAttribute('viewBox'),
									innerHTML: svgEl.innerHTML,
							})
					}
			}

	}
	
	downloadSVGSprits() {
			let downloadFileContent = '<svg class="svg" xmlns="http://www.w3.org/2000/svg">';
	  this.uploadedFilesData.forEach((uFile)=>{
	  		downloadFileContent += `<symbol id="${uFile.id}" viewBox="${uFile.viewBox}">${uFile.innerHTML}</symbol>`;
	  })
	  downloadFileContent += '</svg>';

	  if(this.uploadedFilesData.length === 0) return false;

	  const blob = new Blob([downloadFileContent], { type: 'image/svg+xml' });
	  const link = document.createElement('a');
	  link.href = URL.createObjectURL(blob);
	  link.download = 'svg-sprits.svg';
  	link.click();
			URL.revokeObjectURL(link.href);
	}



}

if(!customElements.get('wbtl-body-svg')){
	customElements.define('wbtl-body-svg',WBTL_Body_Svg);	
}
