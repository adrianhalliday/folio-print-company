<template>
	<div class="graphic-4-container">
		<div class="spacer">
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
			</svg>
		</div>
		<div class="square inner"></div>
	</div>
</template>

<style lang="scss">
	.graphic-4-container {
		position: relative;

		.square {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			transition: height 0.4s cubic-bezier(0.79,0.14,0.15,0.86);

		}
		.inview & {
			.square {
				height: 0;
			}

			&.inview-active {
				.square {
					height: 100%;
				}
			}
		}
	}
</style>