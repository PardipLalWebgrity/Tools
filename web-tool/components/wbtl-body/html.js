import '../wbtl-body-code/index.js';
import '../wbtl-body-file/index.js';
import '../wbtl-body-pointer/index.js';
import '../wbtl-body-setting/index.js';
import '../wbtl-body-url/index.js';
import '../wbtl-body-svg/index.js';

const html = `
	<div class="tab-contents scroll-design">
		<div data-class="tab-content" class="tab-content tab-content-file" contenteditable="true">
			<wbtl-body-file></wbtl-body-file>
		</div>
		<div data-class="tab-content" class="tab-content tab-content-pointer">
			<wbtl-body-pointer></wbtl-body-pointer>
		</div>
		<div data-class="tab-content" class="tab-content tab-content-url show">
			<wbtl-body-url></wbtl-body-url>
		</div>
		<div data-class="tab-content" class="tab-content tab-content-code">
			<wbtl-body-code></wbtl-body-code>
		</div>
		<div data-class="tab-content" class="tab-content tab-content-svg">
			<wbtl-body-svg></wbtl-body-svg>
		</div>
		<div data-class="tab-content" class="tab-content tab-content-setting">
			<wbtl-body-setting></wbtl-body-setting>
		</div>		
	</div>
`;

export default html;