<template>
	<div class="graphic-7-container">
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			viewBox="0 0 1080 1080" style="enable-background:new 0 0 1080 1080;" xml:space="preserve">
			<g class="cross">
				<rect class="svg-fill bar vertical" x="530" y="0" width="20" height="1080"/>
				<rect class="svg-fill bar horizontal" x="0" y="530" width="1080" height="20"/>
			</g>
		</svg>
	</div>
</template>

<style lang="scss">
	.graphic-7-container {
		.cross {
			transform: scaleX(0);
			transform-origin: center;
			transition: transform .3s cubic-bezier(0.65,0.05,0.36,1) 0.5s;
			
			.bar {
				&.vertical {
					transform: rotate(-90deg);
					transform-origin: center;
					transition: transform .3s cubic-bezier(0.86,0,0.07,1) .8s;
				}
			}
		}
		&.inview-active { 
			.cross {
				transform: scaleX(1); 
			}
			.bar.vertical {
				transform: rotate(0deg);
			}
		}
	}
</style>