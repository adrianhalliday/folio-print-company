<template>
	<div class="loading-screen bg-lavender">
		<div class="container">
			<div class="shape shape-1"></div>
			<div class="shape shape-2"></div>
			<div class="shape shape-3"></div>
			<div class="shape shape-4"></div>
		</div>
	</div>
</template>

<style lang="scss">

	$violet: #893b94;

	// Container and shapes dimentions
	$containerDimentions: 50px;
	$shapeDimentions: 22px;
	//shape translate amount
	$amount: 28px;

	// custom translation for each shape in an animation
	@mixin customTranslate ($shape, $tx, $ty) {
		@if  $shape == 1 {
			transform: translate($tx, $ty);
		} @else if $shape == 2 {
			transform: translate(-$ty, $tx);
		} @else if $shape == 3 {
			transform: translate($ty, -$tx);
		} @else if $shape == 4 {
			transform: translate(-$tx, -$ty);
		}
	}

	.loading-screen {
		width: 100%;
		height: 100vh;
		display: grid;
		align-content: center;
		justify-content: center;

		.container {
			position: relative;
			width: $containerDimentions;
			height: $containerDimentions;
			animation: rotation 1.5s infinite;
			
			.shape {
				position: absolute;
				width: $shapeDimentions;
				height: $shapeDimentions;
				border-radius: 0px;

				&.shape-1 {
					left: 0;
					background-color: $violet;
				}
				&.shape-2 {
					right: 0;
					background-color: rgba($violet, .8);
				}
				&.shape-3 {
					bottom: 0;
					background-color: rgba($violet, .8);
				}
				&.shape-4 {
					bottom: 0;
					right: 0;
					background-color: $violet;
				}
			}
			@for $i from 1 through 4 {
				.shape-#{$i} {
					animation: shape#{$i} 3s linear infinite;
				}
			}
		}
	}

	@keyframes rotation {
		from { transform: rotate(0deg) }
		to { transform: rotate(360deg) }
	}

	@for $i from 1 through 4 {
		@keyframes shape#{$i} {
			0% { transform: translate(0, 0) }
			25% { @include customTranslate($i, 0, $amount) }
			50% { @include customTranslate($i, $amount, $amount) }
			75% { @include customTranslate($i, $amount, 0) }
		}
	}

</style>