const html = `	
	<header class="header" data-event-block="header">
		<ul class="menu">
			<li class="menu-item">				
				<input type="radio" name="header-menu" value="file">
				<svg xmlns="http://www.w3.org/2000/svg"><use href="web-tool/assets/images/svg-icons.svg#file-solid-symbol"></use></svg>
			</li>
			<li class="menu-item">				
				<input type="radio" name="header-menu" value="pointer">
				<svg xmlns="http://www.w3.org/2000/svg"><use href="web-tool/assets/images/svg-icons.svg#arrow-pointer-solid-symbol"></use></svg>
			</li>
			<li class="menu-item">				
				<input type="radio" name="header-menu" value="url" checked title="Page Links">
				<svg xmlns="http://www.w3.org/2000/svg"><use href="web-tool/assets/images/svg-icons.svg#link-solid-symbol"></use></svg>
			</li>
			<li class="menu-item">				
				<input type="radio" name="header-menu" value="code">
				<svg xmlns="http://www.w3.org/2000/svg"><use href="web-tool/assets/images/svg-icons.svg#code-solid-symbol"></use></svg>
			</li>
			<li class="menu-item" title="Create SVG Sprite">				
				<input type="radio" name="header-menu" value="svg">
				<span>SVG</span>
			</li>
			<li class="menu-item">				
				<input type="radio" name="header-menu" value="setting">
				<svg xmlns="http://www.w3.org/2000/svg"><use href="web-tool/assets/images/svg-icons.svg#gear-solid-symbol"></use></svg>
			</li>							
		</ul>
		<div class="moveable-by-me"></div>
	</header>
`;

export default html;