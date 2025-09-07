<template>

</template>

<template>
	<div class="graphic-6-container">
		<div class="spacer">
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				viewBox="0 0 1080 1080" style="enable-background:new 0 0 1080 1080;" xml:space="preserve">
			
			</svg>
		</div>
		<div class="square inner front"></div>
		<div class="circle inner back"></div>
	</div>
</template>

<style lang="scss">
	.graphic-6-container {
		position: relative;
		overflow: hidden;

		.square {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			transform: scale(0);
			transform-origin: center;
			transition: transform .5s cubic-bezier(0.86,0,0.07,1) .5s;
		}

		.circle {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			transform: scale(0);
			transform-origin: center;
			border-radius: 50%;
			transition: transform .7s cubic-bezier(0.01,1.32,0.32,1.23) 1s;
		}
		
		&.inview-active {
			.square {
				transform: scale(1);
			}

			.circle {
				transform: scale(1.077);
			}
		}
	}
</style>